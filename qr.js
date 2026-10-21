/* OutTrack QR — minimaler, abhaengigkeitsfreier QR-Encoder (Byte-Mode, EC-Level M).
 *
 * Deckt Versionen 1-10 (bis 213 Byte) ab - mehr braucht eine Kopplungs-URL nicht.
 * Ausgabe: SVG-String (skaliert, mit Quiet Zone).
 *
 * Norm: ISO/IEC 18004. Aufbau: Datencodierung -> RS-Blockaufteilung ->
 * Interleaving -> Modulplatzierung -> Maskenwahl (Nadel) -> Format-/Versionsinfo.
 */
(function () {
  "use strict";

  /* --- Tabellen: Level M, Version 1-10 ---
     [ Gesamtcodepunkte, ECC je Block, Blockgruppe1(Daten je Block), Blockgruppe2(Daten je Block)] */
  const SPEC = {
    1:  [26,  10, 1, 16, 0, 0],
    2:  [44,  16, 1, 28, 0, 0],
    3:  [70,  26, 1, 44, 0, 0],
    4:  [100, 18, 2, 32, 0, 0],
    5:  [134, 24, 2, 43, 0, 0],
    6:  [172, 16, 4, 27, 0, 0],
    7:  [196, 18, 4, 31, 0, 0],
    8:  [242, 22, 2, 38, 2, 39],
    9:  [292, 22, 3, 36, 2, 37],
    10: [346, 26, 4, 43, 1, 44],
  };
  // Ausrichtungs-Pattern-Positionen je Version
  const ALIGN = {
    1: [], 2: [6, 18], 3: [6, 22], 4: [6, 26], 5: [6, 30],
    6: [6, 34], 7: [6, 22, 38], 8: [6, 24, 42], 9: [6, 26, 46], 10: [6, 28, 50],
  };
  const ECL_M = 0; // Fehlerkorrektur-Level M (Bitmuster 00)

  /* --- Galoisfeld GF(256) --- */
  const EXP = new Uint8Array(512), LOG = new Uint8Array(256);
  (function initGF() {
    let x = 1;
    for (let i = 0; i < 255; i++) {
      EXP[i] = x; LOG[x] = i;
      x <<= 1; if (x & 0x100) x ^= 0x11d;
    }
    for (let i = 255; i < 512; i++) EXP[i] = EXP[i - 255];
  })();
  const gmul = (a, b) => (a === 0 || b === 0) ? 0 : EXP[LOG[a] + LOG[b]];

  /* --- Reed-Solomon: ECC-Codepunkte --- */
  function rsGenerator(deg) {
    let poly = [1];
    for (let i = 0; i < deg; i++) {
      const next = new Array(poly.length + 1).fill(0);
      for (let j = 0; j < poly.length; j++) {
        next[j] ^= gmul(poly[j], EXP[i]);
        next[j + 1] ^= poly[j];
      }
      poly = next;
    }
    return poly;
  }
  function rsEncode(data, ecLen) {
    const gen = rsGenerator(ecLen);
    const res = new Array(ecLen).fill(0);
    for (let i = 0; i < data.length; i++) {
      const factor = data[i] ^ res[0];
      res.shift(); res.push(0);
      // gen ist aufsteigend (gen[0] = Konstante) -> Koeffizienten von hinten lesen
      for (let j = 0; j < ecLen; j++) res[j] ^= gmul(gen[ecLen - 1 - j], factor);
    }
    return res;
  }

  /* --- Bitstrom --- */
  class Bits {
    constructor() { this.bits = []; }
    put(value, len) { for (let i = len - 1; i >= 0; i--) this.bits.push((value >>> i) & 1); }
    get length() { return this.bits.length; }
    toBytes() {
      const out = [];
      for (let i = 0; i < this.bits.length; i += 8) {
        let b = 0;
        for (let j = 0; j < 8; j++) b = (b << 1) | (this.bits[i + j] || 0);
        out.push(b);
      }
      return out;
    }
  }

  /* --- Passende Version finden --- */
  function pickVersion(byteLen) {
    for (let v = 1; v <= 10; v++) {
      const spec = SPEC[v];
      const blocks = spec[2] + spec[4];
      const dataCodewords = spec[2] * spec[3] + spec[4] * spec[5];
      const cci = v <= 9 ? 8 : 16;
      const need = 4 + cci + byteLen * 8;                  // Modus + Laenge + Daten
      const cap = dataCodewords * 8;
      if (need <= cap) return v;
      void blocks;
    }
    return -1;
  }

  /* --- Masken + Nadelbewertung --- */
  const MASKS = [
    (r, c) => (r + c) % 2 === 0,
    (r) => r % 2 === 0,
    (r, c) => c % 3 === 0,
    (r, c) => (r + c) % 3 === 0,
    (r, c) => (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0,
    (r, c) => ((r * c) % 2) + ((r * c) % 3) === 0,
    (r, c) => (((r * c) % 2) + ((r * c) % 3)) % 2 === 0,
    (r, c) => (((r + c) % 2) + ((r * c) % 3)) % 2 === 0,
  ];
  function penalty(m, size) {
    let p = 0;
    // Regel 1: gleiche Module in Zeilen/Spalten
    for (let i = 0; i < size; i++) {
      let runC = 1, runR = 1;
      for (let j = 1; j < size; j++) {
        if (m[i][j] === m[i][j - 1]) { runC++; if (runC === 5) p += 3; else if (runC > 5) p++; }
        else runC = 1;
      }
      for (let j = 1; j < size; j++) {
        if (m[j][i] === m[j - 1][i]) { runR++; if (runR === 5) p += 3; else if (runR > 5) p++; }
        else runR = 1;
      }
    }
    // Regel 2: 2x2-Bloecke
    for (let r = 0; r < size - 1; r++)
      for (let c = 0; c < size - 1; c++)
        if (m[r][c] === m[r][c + 1] && m[r][c] === m[r + 1][c] && m[r][c] === m[r + 1][c + 1]) p += 3;
    // Regel 3: Muster 1:1:3:1:1
    const pat1 = [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0], pat2 = [0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1];
    const match = (arr, i, pat) => pat.every((v, k) => arr[i + k] === v);
    for (let r = 0; r < size; r++) for (let c = 0; c + 11 <= size; c++) {
      if (match(m[r], c, pat1) || match(m[r], c, pat2)) p += 40;
    }
    for (let c = 0; c < size; c++) for (let r = 0; r + 11 <= size; r++) {
      const col = [];
      for (let k = 0; k < 11; k++) col.push(m[r + k][c]);
      if (match(col, 0, pat1) || match(col, 0, pat2)) p += 40;
    }
    // Regel 4: Verhaeltnis dunkel/hell
    let dark = 0;
    for (let r = 0; r < size; r++) for (let c = 0; c < size; c++) if (m[r][c]) dark++;
    const total = size * size;
    const k = Math.floor(Math.abs(dark * 20 - total * 10) / total);
    p += k * 10;
    return p;
  }

  /* --- BCH fuer Format-/Versionsinfo --- */
  function bchFormat(data) { // 5 Bit -> 15 Bit, Generator 0x537
    let d = data << 10;
    for (let i = 4; i >= 0; i--) if (d & (1 << (i + 10))) d ^= 0x537 << i;
    return ((data << 10) | d) ^ 0x5412;
  }
  function bchVersion(v) { // 6 Bit -> 18 Bit, Generator 0x1f25
    let d = v << 12;
    for (let i = 5; i >= 0; i--) if (d & (1 << (i + 12))) d ^= 0x1f25 << i;
    return (v << 12) | d;
  }

  /* Format-Info (15 Bit) exakt nach ISO 18004 platzieren.
     Vertikal in Spalte 8: Bit 0-5 -> Zeilen 0-5, Bit 6-7 -> Zeilen 7-8,
     Bit 8-14 -> Zeilen size-7..size-1.
     Horizontal in Zeile 8: Bit 0-7 -> Spalten size-8..size-1, Bit 8 -> Spalte 7,
     Bit 9-14 -> Spalten 5..0. */
  function placeFormat(m, size, fmt) {
    const bit = (i) => (fmt >> i) & 1;
    for (let i = 0; i < 15; i++) {
      const v = bit(i);
      if (i < 6) m[i][8] = v;
      else if (i < 8) m[i + 1][8] = v;
      else m[size - 15 + i][8] = v;
    }
    for (let i = 0; i < 15; i++) {
      const v = bit(i);
      if (i < 8) m[8][size - 1 - i] = v;
      else if (i < 9) m[8][7] = v;
      else m[8][15 - i - 1] = v;
    }
  }

  /* --- Matrix aufbauen --- */
  function build(text, forceMask) {
    const bytes = [];
    for (let i = 0; i < text.length; i++) {
      const code = text.charCodeAt(i);
      if (code < 256) bytes.push(code);
      else { // UTF-8
        const s = unescape(encodeURIComponent(text[i]));
        for (let j = 0; j < s.length; j++) bytes.push(s.charCodeAt(j));
      }
    }
    const version = pickVersion(bytes.length);
    if (version < 0) throw new Error("QR: Inhalt zu lang");
    const spec = SPEC[version];
    const [totalCw, ecLen, g1, d1, g2, d2] = spec;
    const dataCw = g1 * d1 + g2 * d2;
    const size = version * 4 + 17;

    // 1) Bitstrom: Modus + Laenge + Daten + Terminator + Fuellung
    const bits = new Bits();
    bits.put(0b0100, 4);                       // Byte-Mode
    bits.put(bytes.length, version <= 9 ? 8 : 16);
    bytes.forEach((b) => bits.put(b, 8));
    const cap = dataCw * 8;
    bits.put(0, Math.min(4, cap - bits.length));       // Terminator
    while (bits.length % 8 !== 0) bits.put(0, 1);       // auf Bytegrenze
    const data = bits.toBytes();
    const PAD = [0xec, 0x11];
    let pi = 0;
    while (data.length < dataCw) data.push(PAD[pi++ % 2]);

    // 2) RS-Blocks
    const blocks = [], ecBlocks = [];
    let off = 0;
    for (let i = 0; i < g1 + g2; i++) {
      const len = i < g1 ? d1 : d2;
      const blk = data.slice(off, off + len); off += len;
      blocks.push(blk);
      ecBlocks.push(rsEncode(blk, ecLen));
    }
    // 3) Interleaving
    const finalCw = [];
    const maxData = Math.max(d1, d2 || 0);
    for (let i = 0; i < maxData; i++)
      for (let b = 0; b < blocks.length; b++) if (i < blocks[b].length) finalCw.push(blocks[b][i]);
    for (let i = 0; i < ecLen; i++)
      for (let b = 0; b < ecBlocks.length; b++) finalCw.push(ecBlocks[b][i]);

    // 4) Matrix + Funktionsmuster
    const m = [], fn = [];
    for (let r = 0; r < size; r++) { m.push(new Array(size).fill(0)); fn.push(new Array(size).fill(false)); }
    const setFn = (r, c, v) => { if (r >= 0 && r < size && c >= 0 && c < size) { m[r][c] = v; fn[r][c] = true; } };
    // Finder + Separator
    const finder = (r0, c0) => {
      for (let dr = -1; dr <= 7; dr++) for (let dc = -1; dc <= 7; dc++) {
        const rr = r0 + dr, cc = c0 + dc;
        if (rr < 0 || rr >= size || cc < 0 || cc >= size) continue;
        const inner = dr >= 0 && dr <= 6 && dc >= 0 && dc <= 6;
        const dark = inner && (dr === 0 || dr === 6 || dc === 0 || dc === 6 ||
          (dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4));
        setFn(rr, cc, dark ? 1 : 0);
      }
    };
    finder(0, 0); finder(0, size - 7); finder(size - 7, 0);
    // Ausrichtungspattern
    const ap = ALIGN[version];
    for (const r of ap) for (const c of ap) {
      if ((r <= 8 && c <= 8) || (r <= 8 && c >= size - 9) || (r >= size - 9 && c <= 8)) continue;
      for (let dr = -2; dr <= 2; dr++) for (let dc = -2; dc <= 2; dc++) {
        const dark = Math.max(Math.abs(dr), Math.abs(dc)) !== 1;
        setFn(r + dr, c + dc, dark ? 1 : 0);
      }
    }
    // Timing
    for (let i = 8; i < size - 8; i++) { setFn(6, i, i % 2 === 0 ? 1 : 0); setFn(i, 6, i % 2 === 0 ? 1 : 0); }
    // Dunkles Modul + Reservierung fuer Formatinfo
    setFn(size - 8, 8, 1);
    for (let i = 0; i < 9; i++) { if (!fn[8][i]) fn[8][i] = true; if (!fn[i][8]) fn[i][8] = true; }
    for (let i = 0; i < 8; i++) { if (!fn[8][size - 1 - i]) fn[8][size - 1 - i] = true; if (!fn[size - 1 - i][8]) fn[size - 1 - i][8] = true; }
    // Reservierung fuer Versionsinfo (ab Version 7)
    if (version >= 7) {
      for (let i = 0; i < 6; i++) for (let j = 0; j < 3; j++) {
        fn[size - 11 + j][i] = true; fn[i][size - 11 + j] = true;
      }
    }

    // 5) Daten einlesen (ZigZag)
    let bitIdx = 0;
    const dataBits = [];
    finalCw.forEach((cw) => { for (let i = 7; i >= 0; i--) dataBits.push((cw >> i) & 1); });
    let up = true;
    for (let col = size - 1; col > 0; col -= 2) {
      if (col === 6) col--; // Timing-Spalte ueberspringen
      for (let i = 0; i < size; i++) {
        const row = up ? size - 1 - i : i;
        for (const c of [col, col - 1]) {
          if (fn[row][c]) continue;
          m[row][c] = dataBits[bitIdx++] || 0;
        }
      }
      up = !up;
    }

    // 6) Maske waehlen (Nadelminimum)
    let best = null, bestScore = Infinity, bestMask = 0;
    const maskList = (forceMask === undefined || forceMask === null) ? [0, 1, 2, 3, 4, 5, 6, 7] : [forceMask];
    for (const mask of maskList) {
      const t = m.map((row) => row.slice());
      for (let r = 0; r < size; r++) for (let c = 0; c < size; c++)
        if (!fn[r][c] && MASKS[mask](r, c)) t[r][c] ^= 1;
      // Formatinfo einrechnen (die Nadelbewertung zaehlt sie mit)
      const tmp = t.map((row) => row.slice());
      placeFormat(tmp, size, bchFormat((ECL_M << 3) | mask));
      const score = penalty(tmp, size);
      if (score < bestScore) { bestScore = score; best = t; bestMask = mask; }
    }
    m.length = 0;
    best.forEach((r) => m.push(r));

    // 7) Formatinfo + Versionsinfo eintragen
    placeFormat(m, size, bchFormat((ECL_M << 3) | bestMask));
    if (version >= 7) {
      const vi = bchVersion(version);
      for (let i = 0; i < 18; i++) {
        const bit = (vi >> i) & 1;
        const r = Math.floor(i / 3), c = size - 11 + (i % 3);
        m[r][c] = bit; m[c][r] = bit;
      }
    }
    return { m, size, version, mask: bestMask };
  }

  /**
   * QR als SVG-String.
   * @param {string} text Inhalt (z.B. die Kopplungs-URL)
   * @param {number} quiet Rand in Modulen (Standard 4)
   * @param {string} dark  Farbe der Module
   * @param {string} light Hintergrund
   */
  function svg(text, quiet, dark, light) {
    quiet = quiet === undefined ? 4 : quiet;
    dark = dark || "#0a0a0e";
    light = light || "#ffffff";
    const { m, size } = build(text);
    const total = size + quiet * 2;
    let path = "";
    for (let r = 0; r < size; r++)
      for (let c = 0; c < size; c++)
        if (m[r][c]) path += "M" + (c + quiet) + " " + (r + quiet) + "h1v1h-1z";
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + total + ' ' + total + '" ' +
      'shape-rendering="crispEdges" role="img" aria-label="QR-Code">' +
      '<rect width="' + total + '" height="' + total + '" fill="' + light + '"/>' +
      '<path d="' + path + '" fill="' + dark + '"/></svg>';
  }

  window.OTQR = { svg, build };
})();
