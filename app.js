/* OutTrack v3 — offline-first. Keine Abhängigkeiten, keine Tracker, keine Cookies. */
"use strict";
const KEY = "outtrack_v2";
const CONSENT_KEY = "outtrack_consent";
const AREAS = ["mind", "body", "craft"];
const LANGS = [
  { id: "de", label: "Deutsch" },
  { id: "en", label: "English" },
  { id: "ru", label: "Русский" },
  { id: "es", label: "Español" },
  { id: "fr", label: "Français" },
];
const LOCALES = { de: "de-DE", en: "en-US", ru: "ru-RU", es: "es-ES", fr: "fr-FR" };
const STR = {
de: {
  nav_hub: "Hub", nav_journal: "Journal", nav_focus: "Outdo Mode", nav_food: "Food-Tipps", nav_stats: "Stats", nav_settings: "Einstellungen",
  tab_hub: "Hub", tab_journal: "Journal", tab_outdo: "Outdo", tab_food: "Food", tab_stats: "Stats", tab_settings: "Einst.",
  greet_morning: "Guten Morgen", greet_day: "Guten Tag", greet_evening: "Guten Abend", greet_night: "Noch wach? Die Reise geht weiter.",
  quest_title: "Heutige Quest", quest_ph: "Ein Satz: Was zählt heute?",
  hero_goal: "Tagesziel: 100 %",
  routine_title: "Deine Routine", routine_morning: "Morgenroutine", routine_evening: "Abendroutine",
  wg_title: "Widgets", wg_today: "Min. heute",
  wg_hint: "Auf iPhone & Android: OutTrack installieren — Widgets gibt's nur in der App, nicht im Browser.",
  summit_title: "Der Gipfel", summit_sub: "Dein Weg als Reise — jeder Schritt zählt.",
  wk_checkins: "Check-ins", wk_pts: "PTS · 7 Tage",
  streak_days: "Tage Streak", perfect_label: "100 %-Tage", freeze_btn: "Streak retten",
  freeze_ok: "Streak gerettet — the journey continues.", freeze_limit: "Freeze geht erst nächste Woche wieder.",
  chart_7: "7 Tage", chart_30: "30 Tage",
  sec_habits: "Habits", add_new: "+ Neu", empty_habits: "Noch keine Quest aktiv — leg deine erste fest. ",
  sh_title: "Neuer Habit", sh_name_ph: "z. B. Tief lesen", sh_cancel: "Abbrechen", sh_add: "Hinzufügen",
  area_mind: "Mind", area_body: "Body", area_craft: "Craft",
  goal_daily: "Täglich", goal_weekly: "×/Woche", goal_target: "Zielzahl", goal_count_lbl: "Anzahl",
 habit_added: "Quest angenommen. Viel Spaß!", habit_deleted: "Habit gelöscht.", habit_done: "+1 — stark!",
  proof_btn: "Beweis", proof_title: "Beweis festhalten", proof_note_ph: "Notiz zum Beweis …",
  proof_photo_lbl: "Foto", proof_save: "Beweis speichern", proof_saved: "Beweis gespeichert. ",
  rc_title: "Fokus-Check", rc_sub: "Greifst du gerade zum Handy, obwohl du arbeiten wolltest? 60 Sekunden Pause statt Autopilot.",
  rc_open: "Impuls umleiten", rd_title: "60 Sekunden — sonst nichts",
  rd_sub: "Eine der drei Mikro-Aktionen wählen, dann ist der Impuls vorbei.",
  ra_water: "Wasser trinken", ra_pushups: "10 Liegestütze", ra_read: "Fokus laut lesen", rd_cancel: "Abbrechen",
 redirect_done: "Umgeleitet +5 MIND. Stark!",
  launch_title: "Outdo Mode starten", launch_sub: "45 Min. Deep Work",
  hub_foot: "Antippen zum Abhaken. Deine Daten bleiben bei dir — alles offline.",
  eyebrow_reflexion: "Reflexion", j_title_ph: "Titel (optional)", j_text_ph: "Was beschäftigt dich gerade? …",
  j_save: "Eintrag speichern", j_consent: "Wird nur lokal auf deinem Gerät gespeichert.",
  journal_review: "Wochenrückblick übernehmen", journal_empty: "Schreib erst ein paar Worte.",
 entry_saved: "Eintrag gespeichert.", entry_deleted: "Eintrag gelöscht.", review_inserted: "Rückblick eingefügt.",
  sec_entries: "Einträge", j_search_ph: "Suchen",
  eyebrow_deep: "Deep Work", t_hours: "Std.", t_minutes: "Min.", t_seconds: "Sek.", custom_apply: "Eigene Zeit übernehmen",
  st_ready: "Bereit", st_running: "Läuft …", st_paused: "Pausiert", st_done: "Geschafft ",
  timer_start: "Block starten", timer_pause: "Pause", timer_resume: "Weiter", timer_reset: "Reset",
  focus_done: "Fokus-Block geschafft. +{mins} Min. im Log.",
  sound_lbl: "Umgebung", snd_off: "Aus — Stille", snd_white: "Weißes Rauschen", snd_rain: "Regen", snd_synth: "Synth-Fläche",
  focus_q: "Was ist dein einzelner Fokus für diesen Block?", focus_ph: "z. B. OutTrack v3 fertigstellen",
  focus_exit: "Zum Hub", focus_fs: "Vollbild",
  eyebrow_energy: "Energie", mf_all: "Alle", mf_protein: "Protein", mf_energy: "Energie", mf_light: "Light",
  meal_hint: "Tippen für einen Tipp", meal_new: "Neuer Tipp", r_ing: "Zutaten", r_steps: "Zubereitung",
  m_protein: "Protein", m_carbs: "Kohlenhydrate", m_fat: "Fett",
  tut_skip: "Überspringen", tut_back: "Zurück", tut_next: "Weiter", tut_start: "Los geht's",
  tut_1t: "Deine tägliche Quest", tut_1d: "Lege Habits fest, hake sie ab und baue deinen Streak auf — ein Schritt nach dem anderen.",
  tut_2t: "Fokus ohne Ablenkung", tut_2d: "Der Outdo Mode blendet alles aus: Timer stellen, einen Satz Fokus fassen, durchziehen.",
  tut_3t: "Essen ohne Nachdenken", tut_3d: "136 Rezepte mit Kalorien und Nährwerten — tippen, kochen, fertig.",
  tut_4t: "Sieh deinen Weg", tut_4d: "Stats, Gipfel und Streak-Freeze zeigen deinen Fortschritt — ohne Schuld, nur die Reise.",
  tut_5t: "Deine Daten bleiben bei dir", tut_5d: "Kein Konto, kein Server, keine Tracker. Alles liegt nur auf deinem Gerät.",
  sec_all: "Alle Gerichte", food_foot: "Allgemeine Rezeptideen, keine Ernährungsberatung.",
  meta_line: "{kcal} kcal · {mins} Min.", cat_protein: "Protein", cat_energie: "Energie", cat_light: "Light",
  eyebrow_cons: "Konsistenz", weekly_title: "Wochenrückblick",
  lb_redirects: "Umleitungen", lb_streak: "Bester Streak", lb_perfect: "100 %-Tage",
  wr_bestday: "Bester Tag",
  gr_title: "Wochenraster", gr_sub: "Letzte 35 Tage — dunkler = mehr geschafft.",
  lg_less: "Wenig", lg_more: "Viel", id_title: "Identität",
  id_sub: "Jeder Habit = +10 Punkte im Lebensbereich. 70 Punkte = Levelaufstieg.",
  level_lbl: "Level {n}", fl_title: "Fokus-Log", fl_empty: "Noch keine Blöcke — starte deinen ersten Outdo. ◎",
  lg_sec: "Rechtliches & Info", legal_privacy: "Datenschutzerklärung", legal_terms: "Nutzungsbedingungen",
  legal_refund: "Erstattungsrichtlinie", legal_cookies: "Cookie-Richtlinie", legal_imprint: "Betreiber & Kontakt",
  legal_licenses: "Lizenzen & Hinweise", legal_close: "Schließen",
  dt_title: "Daten", btn_export: "Exportieren", btn_reset: "Alle Daten löschen",
 export_ok: "Export heruntergeladen.", reset_confirm: "Wirklich alle Daten auf diesem Gerät löschen?",
 reset_done: "Alles gelöscht. Neustart wartet.",
  eyebrow_app: "App", set_lang_title: "Sprache", set_lang_sub: "Gilt sofort für die gesamte App.",
  theme_title: "Erscheinungsbild", theme_sub: "Wird lokal auf dem Gerät gespeichert.",
  theme_light: "Hell", theme_dark: "Dunkel",
  remind_title: "Erinnerungen", remind_sub: "Lokal auf diesem Gerät — kein Server.",
  remind_enable: "Erinnern", remind_morning: "Morgens", remind_evening: "Abends",
  remind_denied: "Mitteilungen blockiert — bitte in den Systemeinstellungen erlauben.",
 remind_saved: "Erinnerungen gespeichert.",
  set_store_title: "Speicherung", store_local: "Lokal gespeichert — alles offline auf diesem Gerät.",
  store_memory: "Memory-only — nichts wird gespeichert.",
  set_info_title: "Info", cb_text: "Keine Cookies, keine Tracker — nur lokaler Gerätespeicher.",
  cb_decline: "Ohne Speichern", cb_accept: "Verstanden",
},
en: {
  nav_hub: "Hub", nav_journal: "Journal", nav_focus: "Outdo Mode", nav_food: "Food tips", nav_stats: "Stats", nav_settings: "Settings",
  tab_hub: "Hub", tab_journal: "Journal", tab_outdo: "Outdo", tab_food: "Food", tab_stats: "Stats", tab_settings: "Sett.",
  greet_morning: "Good morning", greet_day: "Good day", greet_evening: "Good evening", greet_night: "Still up? The journey continues.",
  quest_title: "Today's quest", quest_ph: "One sentence: what counts today?",
  hero_goal: "Daily goal: 100%",
  routine_title: "Your routine", routine_morning: "Morning routine", routine_evening: "Evening routine",
  wg_title: "Widgets", wg_today: "Min today",
  wg_hint: "On iPhone & Android: install OutTrack — widgets live in the app, not the browser.",
  summit_title: "The Summit", summit_sub: "Your path as a journey — every step counts.",
  wk_checkins: "Check-ins", wk_pts: "PTS · 7 days",
  streak_days: "day streak", perfect_label: "100% days", freeze_btn: "Save streak",
  freeze_ok: "Streak saved — the journey continues.", freeze_limit: "Freeze returns next week.",
  chart_7: "7 days", chart_30: "30 days",
  sec_habits: "Habits", add_new: "+ New", empty_habits: "No active quest yet — set your first one. ",
  sh_title: "New habit", sh_name_ph: "e.g. Deep reading", sh_cancel: "Cancel", sh_add: "Add",
  area_mind: "Mind", area_body: "Body", area_craft: "Craft",
  goal_daily: "Daily", goal_weekly: "×/week", goal_target: "Target", goal_count_lbl: "Count",
 habit_added: "Quest accepted. Have fun!", habit_deleted: "Habit deleted.", habit_done: "+1 — strong!",
  proof_btn: "Proof", proof_title: "Log proof", proof_note_ph: "Note for this proof…",
  proof_photo_lbl: "Photo", proof_save: "Save proof", proof_saved: "Proof saved. ",
  rc_title: "Focus check", rc_sub: "Reaching for your phone although you meant to work? 60 seconds off instead of autopilot.",
  rc_open: "Redirect impulse", rd_title: "60 seconds — nothing else",
  rd_sub: "Pick one of three micro-actions, then the impulse is gone.",
  ra_water: "Drink water", ra_pushups: "10 push-ups", ra_read: "Read focus aloud", rd_cancel: "Cancel",
 redirect_done: "Redirected +5 MIND. Strong!",
  launch_title: "Start Outdo Mode", launch_sub: "45 min deep work",
  hub_foot: "Tap to check off. Your data stays with you — all offline.",
  eyebrow_reflexion: "Reflection", j_title_ph: "Title (optional)", j_text_ph: "What's on your mind? …",
  j_save: "Save entry", j_consent: "Stored only locally on your device.",
  journal_review: "Insert weekly review", journal_empty: "Write a few words first.",
 entry_saved: "Entry saved.", entry_deleted: "Entry deleted.", review_inserted: "Review inserted.",
  sec_entries: "Entries", j_search_ph: "Search",
  eyebrow_deep: "Deep work", t_hours: "Hrs", t_minutes: "Min", t_seconds: "Sec", custom_apply: "Apply custom time",
  st_ready: "Ready", st_running: "Running…", st_paused: "Paused", st_done: "Done ",
  timer_start: "Start block", timer_pause: "Pause", timer_resume: "Resume", timer_reset: "Reset",
  focus_done: "Focus block done. +{mins} min in the log.",
  sound_lbl: "Ambience", snd_off: "Off — silence", snd_white: "White noise", snd_rain: "Rain", snd_synth: "Synth pad",
  focus_q: "What is your single focus for this block?", focus_ph: "e.g. Finish OutTrack v3",
  focus_exit: "To Hub", focus_fs: "Fullscreen",
  eyebrow_energy: "Energy", mf_all: "All", mf_protein: "Protein", mf_energy: "Energy", mf_light: "Light",
  meal_hint: "Tap for a tip", meal_new: "New tip", r_ing: "Ingredients", r_steps: "Steps",
  m_protein: "Protein", m_carbs: "Carbs", m_fat: "Fat",
  tut_skip: "Skip", tut_back: "Back", tut_next: "Next", tut_start: "Let's go",
  tut_1t: "Your daily quest", tut_1d: "Set habits, check them off and build your streak — one step at a time.",
  tut_2t: "Focus without distraction", tut_2d: "Outdo Mode fades everything out: set a timer, name one focus, follow through.",
  tut_3t: "Eating without overthinking", tut_3d: "136 recipes with calories and macros — tap, cook, done.",
  tut_4t: "See your journey", tut_4d: "Stats, summit and streak freeze show your progress — no guilt, just the journey.",
  tut_5t: "Your data stays with you", tut_5d: "No account, no server, no trackers. Everything lives only on your device.",
  sec_all: "All meals", food_foot: "General recipe ideas, no nutrition advice.",
  meta_line: "{kcal} kcal · {mins} min", cat_protein: "Protein", cat_energie: "Energy", cat_light: "Light",
  eyebrow_cons: "Consistency", weekly_title: "Weekly review",
  lb_redirects: "Redirects", lb_streak: "Best streak", lb_perfect: "100% days",
  wr_bestday: "Best day",
  gr_title: "Week grid", gr_sub: "Last 35 days — darker = more done.",
  lg_less: "Less", lg_more: "More", id_title: "Identity",
  id_sub: "Each habit = +10 points in its area. 70 points = level up.",
  level_lbl: "Level {n}", fl_title: "Focus log", fl_empty: "No blocks yet — start your first Outdo. ◎",
  lg_sec: "Legal & info", legal_privacy: "Privacy policy", legal_terms: "Terms of use",
  legal_refund: "Refund policy", legal_cookies: "Cookie policy", legal_imprint: "Operator & contact",
  legal_licenses: "Licenses & notices", legal_close: "Close",
  dt_title: "Data", btn_export: "Export", btn_reset: "Delete all data",
 export_ok: "Export downloaded.", reset_confirm: "Really delete all data on this device?",
 reset_done: "All deleted. A fresh start awaits.",
  eyebrow_app: "App", set_lang_title: "Language", set_lang_sub: "Applies instantly across the app.",
  theme_title: "Appearance", theme_sub: "Stored locally on this device.",
  theme_light: "Light", theme_dark: "Dark",
  remind_title: "Reminders", remind_sub: "Local on this device — no server.",
  remind_enable: "Remind me", remind_morning: "Morning", remind_evening: "Evening",
  remind_denied: "Notifications blocked — please allow them in system settings.",
 remind_saved: "Reminders saved.",
  set_store_title: "Storage", store_local: "Stored locally — all offline on this device.",
  store_memory: "Memory-only — nothing is stored.",
  set_info_title: "Info", cb_text: "No cookies, no trackers — only local device storage.",
  cb_decline: "Without saving", cb_accept: "Got it",
},
ru: {
  nav_hub: "Хаб", nav_journal: "Дневник", nav_focus: "Outdo-режим", nav_food: "Еда", nav_stats: "Статистика", nav_settings: "Настройки",
  tab_hub: "Хаб", tab_journal: "Дневник", tab_outdo: "Outdo", tab_food: "Еда", tab_stats: "Статы", tab_settings: "Настр.",
  greet_morning: "Доброе утро", greet_day: "Добрый день", greet_evening: "Добрый вечер", greet_night: "Не спится? Путь продолжается.",
  quest_title: "Квест дня", quest_ph: "Одна фраза: что важно сегодня?",
  streak_days: "дней streak", perfect_label: "дней на 100 %", freeze_btn: "Спасти streak",
  chart_7: "7 дней", chart_30: "30 дней",
  sec_habits: "Привычки", add_new: "+ Нов.", sh_title: "Новая привычка", sh_cancel: "Отмена", sh_add: "Добавить",
  area_mind: "Mind", area_body: "Body", area_craft: "Craft",
  goal_daily: "Ежедневно", goal_weekly: "×/нед", goal_target: "Цель", goal_count_lbl: "Число",
  proof_btn: "Пруф", proof_title: "Записать пруф", proof_save: "Сохранить", proof_photo_lbl: "Фото",
  rc_title: "Фокус-проверка", rc_open: "Перенаправить импульс",
  rd_title: "60 секунд — и всё", ra_water: "Выпить воды", ra_pushups: "10 отжиманий", ra_read: "Прочитать фокус вслух", rd_cancel: "Отмена",
  launch_title: "Запустить Outdo", timer_start: "Старт", timer_pause: "Пауза", timer_resume: "Дальше", timer_reset: "Сброс",
  st_ready: "Готов", st_running: "Идёт…", st_paused: "Пауза", st_done: "Готово ",
  mf_all: "Все", mf_protein: "Белок", mf_energy: "Энергия", mf_light: "Лёгкое", meal_new: "Новый совет", meal_hint: "Нажми для совета",
  r_ing: "Ингредиенты", r_steps: "Приготовление", sec_all: "Все блюда",
  gr_title: "Сетка недель", id_title: "Идентичность", fl_title: "Фокус-лог",
  weekly_title: "Обзор недели", lg_less: "Меньше", lg_more: "Больше",
  set_lang_title: "Язык",
  remind_title: "Напоминания", remind_enable: "Напоминать", remind_morning: "Утром", remind_evening: "Вечером",
  set_store_title: "Хранение", set_info_title: "Инфо",
  j_save: "Сохранить", sec_entries: "Записи", journal_review: "Вставить обзор недели",
  btn_export: "Экспорт", btn_reset: "Удалить всё", dt_title: "Данные",
  legal_privacy: "Конфиденциальность", legal_terms: "Условия", legal_refund: "Возвраты",
  legal_cookies: "Куки", legal_imprint: "Контакты", legal_licenses: "Лицензии", legal_close: "Закрыть",
  cb_accept: "Понятно", cb_decline: "Без сохранения",
  t_hours: "Ч.", t_minutes: "Мин.", t_seconds: "Сек.", custom_apply: "Применить",
  sound_lbl: "Фон", snd_off: "Выкл — тишина", snd_white: "Белый шум", snd_rain: "Дождь", snd_synth: "Синт",
  focus_exit: "В хаб", focus_fs: "Полный экран", level_lbl: "Уровень {n}",
  hero_goal: "Цель дня: 100 %",
  routine_title: "Твоя рутина", routine_morning: "Утренняя рутина", routine_evening: "Вечерняя рутина",
  wg_title: "Виджеты", wg_today: "Мин. сегодня",
  wg_hint: "На iPhone и Android: установи OutTrack — виджеты есть только в приложении, а не в браузере.",
  summit_title: "Вершина", summit_sub: "Твой путь как путешествие — важен каждый шаг.",
  wk_checkins: "Чекины", wk_pts: "PTS · 7 дней",
  freeze_ok: "streak спасён — путь продолжается.", freeze_limit: "Заморозка вернётся на следующей неделе.",
 empty_habits: "Пока нет активного квеста — задай первый.", sh_name_ph: "напр. глубокое чтение",
 habit_added: "Квест принят. Удачи!", habit_deleted: "Привычка удалена.", habit_done: "+1 — так держать!",
  proof_note_ph: "Заметка к пруфу…", proof_saved: "Пруф сохранён. ",
  rc_sub: "Снова тянешься к телефону, хотя хотел работать? 60 секунд паузы вместо автопилота.",
  rd_sub: "Выбери одно из трёх микродействий — и импульс пройдёт.",
 redirect_done: "Перенаправлено +5 MIND. Так держать!",
  launch_sub: "45 мин глубокой работы",
  hub_foot: "Нажимай, чтобы отмечать. Твои данные остаются у тебя — всё офлайн.",
  eyebrow_reflexion: "Рефлексия", j_title_ph: "Заголовок (необязательно)", j_text_ph: "Что у тебя на уме? …",
  j_consent: "Хранится только локально на твоём устройстве.",
  journal_empty: "Сначала напиши пару слов.",
 entry_saved: "Запись сохранена.", entry_deleted: "Запись удалена.", review_inserted: "Обзор вставлен.",
  j_search_ph: "Поиск",
  eyebrow_deep: "Глубокая работа", focus_done: "Фокус-блок готов. +{mins} мин в логе.",
  focus_q: "Какой у тебя один фокус на этот блок?", focus_ph: "напр. закончить OutTrack v3",
  eyebrow_energy: "Энергия",
  m_protein: "Белок", m_carbs: "Углеводы", m_fat: "Жиры",
  tut_skip: "Пропустить", tut_back: "Назад", tut_next: "Дальше", tut_start: "Погнали",
  tut_1t: "Твой ежедневный квест", tut_1d: "Задавай привычки, отмечай их и расти streak — шаг за шагом.",
  tut_2t: "Фокус без отвлечений", tut_2d: "Outdo-режим приглушает всё лишнее: ставь таймер, называй один фокус — и вперёд.",
  tut_3t: "Еда без раздумий", tut_3d: "136 рецептов с калориями и нутриентами — нажми, приготовь, готово.",
  tut_4t: "Смотри свой путь", tut_4d: "Статистика, вершина и заморозка streak показывают прогресс — без вины, только путь.",
  tut_5t: "Твои данные остаются у тебя", tut_5d: "Никаких аккаунтов, серверов и трекеров. Всё хранится только на твоём устройстве.",
  food_foot: "Общие идеи рецептов, не рекомендации по питанию.",
  meta_line: "{kcal} ккал · {mins} мин.", cat_protein: "Белок", cat_energie: "Энергия", cat_light: "Лёгкое",
  eyebrow_cons: "Регулярность", lb_redirects: "Перенаправления", lb_streak: "Лучший streak", lb_perfect: "Дней на 100 %",
  wr_bestday: "Лучший день",
  gr_sub: "Последние 35 дней — темнее = больше сделано.",
  id_sub: "Каждая привычка = +10 очков в сфере жизни. 70 очков = новый уровень.",
  fl_empty: "Пока нет блоков — запусти первый Outdo. ◎",
  lg_sec: "Право и инфо",
 export_ok: "Экспорт скачан.", reset_confirm: "Точно удалить все данные на этом устройстве?",
 reset_done: "Всё удалено. Чистый старт ждёт.",
  eyebrow_app: "Приложение", set_lang_sub: "Применяется сразу ко всему приложению.",
  theme_title: "Внешний вид", theme_sub: "Хранится локально на этом устройстве.",
  theme_light: "Светлая", theme_dark: "Тёмная",
  remind_sub: "Локально на этом устройстве — без сервера.",
  remind_denied: "Уведомления заблокированы — разреши их в системных настройках.",
 remind_saved: "Напоминания сохранены.",
  store_local: "Хранится локально — всё офлайн на этом устройстве.",
  store_memory: "Только в памяти — ничего не сохраняется.",
  cb_text: "Никаких куки и трекеров — только локальное хранилище устройства.",
},
es: {
  nav_hub: "Hub", nav_journal: "Diario", nav_focus: "Modo Outdo", nav_food: "Comida", nav_stats: "Stats", nav_settings: "Ajustes",
  tab_hub: "Hub", tab_journal: "Diario", tab_outdo: "Outdo", tab_food: "Comida", tab_stats: "Stats", tab_settings: "Ajust.",
  greet_morning: "Buenos días", greet_day: "Buenas tardes", greet_evening: "Buenas noches", greet_night: "¿Despierto? El viaje continúa.",
  quest_title: "Misión de hoy", quest_ph: "Una frase: ¿qué cuenta hoy?",
  streak_days: "días de racha", perfect_label: "días al 100 %", freeze_btn: "Salvar racha",
  chart_7: "7 días", chart_30: "30 días",
  sec_habits: "Hábitos", add_new: "+ Nuevo", sh_title: "Nuevo hábito", sh_cancel: "Cancelar", sh_add: "Añadir",
  area_mind: "Mente", area_body: "Cuerpo", area_craft: "Oficio",
  goal_daily: "Diario", goal_weekly: "×/sem", goal_target: "Meta", goal_count_lbl: "Número",
  proof_btn: "Prueba", proof_title: "Registrar prueba", proof_save: "Guardar", proof_photo_lbl: "Foto",
  rc_title: "Chequeo de foco", rc_open: "Redirigir impulso",
  rd_title: "60 segundos — nada más", ra_water: "Beber agua", ra_pushups: "10 flexiones", ra_read: "Leer el foco en voz alta", rd_cancel: "Cancelar",
  launch_title: "Iniciar Outdo", timer_start: "Empezar", timer_pause: "Pausa", timer_resume: "Seguir", timer_reset: "Reset",
  st_ready: "Listo", st_running: "En marcha…", st_paused: "En pausa", st_done: "¡Hecho! ",
  mf_all: "Todo", mf_protein: "Proteína", mf_energy: "Energía", mf_light: "Light", meal_new: "Nuevo tip", meal_hint: "Toca para un tip",
  r_ing: "Ingredientes", r_steps: "Preparación", sec_all: "Todos los platos",
  gr_title: "Cuadrícula", id_title: "Identidad", fl_title: "Registro de foco",
  weekly_title: "Resumen semanal", lg_less: "Menos", lg_more: "Más",
  set_lang_title: "Idioma",
  remind_title: "Recordatorios", remind_enable: "Recordarme", remind_morning: "Mañana", remind_evening: "Noche",
  set_store_title: "Almacén", set_info_title: "Info",
  j_save: "Guardar", sec_entries: "Entradas", journal_review: "Insertar resumen semanal",
  btn_export: "Exportar", btn_reset: "Borrar todo", dt_title: "Datos",
  legal_privacy: "Privacidad", legal_terms: "Términos", legal_refund: "Reembolsos",
  legal_cookies: "Cookies", legal_imprint: "Contacto", legal_licenses: "Licencias", legal_close: "Cerrar",
  cb_accept: "Entendido", cb_decline: "Sin guardar",
  t_hours: "H.", t_minutes: "Min.", t_seconds: "Seg.", custom_apply: "Aplicar",
  sound_lbl: "Ambiente", snd_off: "Off — silencio", snd_white: "Ruido blanco", snd_rain: "Lluvia", snd_synth: "Synth",
  focus_exit: "Al Hub", focus_fs: "Pantalla completa", level_lbl: "Nivel {n}",
  hero_goal: "Meta del día: 100 %",
  routine_title: "Tu rutina", routine_morning: "Rutina de mañana", routine_evening: "Rutina de noche",
  wg_title: "Widgets", wg_today: "Min. hoy",
  wg_hint: "En iPhone y Android: instala OutTrack — los widgets solo están en la app, no en el navegador.",
  summit_title: "La cima", summit_sub: "Tu camino como un viaje — cada paso cuenta.",
  wk_checkins: "Check-ins", wk_pts: "PTS · 7 días",
  freeze_ok: "Racha salvada — el viaje continúa.", freeze_limit: "El freeze vuelve la próxima semana.",
 empty_habits: "Aún no hay misión activa — crea la primera.", sh_name_ph: "p. ej. lectura profunda",
 habit_added: "Misión aceptada. ¡Diviértete!", habit_deleted: "Hábito eliminado.", habit_done: "+1 — ¡fuerte!",
  proof_note_ph: "Nota para esta prueba…", proof_saved: "Prueba guardada. ",
  rc_sub: "¿Agarras el móvil aunque querías trabajar? 60 segundos de pausa en vez de piloto automático.",
  rd_sub: "Elige una de las tres micro-acciones y el impulso pasará.",
 redirect_done: "Redirigido +5 MIND. ¡Fuerte!",
  launch_sub: "45 min de trabajo profundo",
  hub_foot: "Toca para tachar. Tus datos se quedan contigo — todo offline.",
  eyebrow_reflexion: "Reflexión", j_title_ph: "Título (opcional)", j_text_ph: "¿Qué tienes en mente? …",
  j_consent: "Se guarda solo localmente en tu dispositivo.",
  journal_empty: "Escribe unas palabras primero.",
 entry_saved: "Entrada guardada.", entry_deleted: "Entrada eliminada.", review_inserted: "Resumen insertado.",
  j_search_ph: "Buscar",
  eyebrow_deep: "Trabajo profundo", focus_done: "Bloque de foco listo. +{mins} min en el registro.",
  focus_q: "¿Cuál es tu único foco para este bloque?", focus_ph: "p. ej. terminar OutTrack v3",
  eyebrow_energy: "Energía",
  m_protein: "Proteína", m_carbs: "Carbohidratos", m_fat: "Grasa",
  tut_skip: "Saltar", tut_back: "Atrás", tut_next: "Seguir", tut_start: "Vamos",
  tut_1t: "Tu misión diaria", tut_1d: "Crea hábitos, táchalos y haz crecer tu racha — paso a paso.",
  tut_2t: "Foco sin distracciones", tut_2d: "El modo Outdo apaga todo lo demás: pon temporizador, nombra un foco, a por ello.",
  tut_3t: "Comer sin pensar", tut_3d: "136 recetas con calorías y macros — toca, cocina, listo.",
  tut_4t: "Mira tu camino", tut_4d: "Stats, cima y freeze muestran tu progreso — sin culpa, solo el viaje.",
  tut_5t: "Tus datos se quedan contigo", tut_5d: "Sin cuenta, sin servidor, sin rastreadores. Todo vive solo en tu dispositivo.",
  food_foot: "Ideas generales de recetas, sin consejo nutricional.",
  meta_line: "{kcal} kcal · {mins} min", cat_protein: "Proteína", cat_energie: "Energía", cat_light: "Light",
  eyebrow_cons: "Constancia", lb_redirects: "Redirecciones", lb_streak: "Mejor racha", lb_perfect: "Días al 100 %",
  wr_bestday: "Mejor día",
  gr_sub: "Últimos 35 días — más oscuro = más logrado.",
  id_sub: "Cada hábito = +10 puntos en su área. 70 puntos = subir de nivel.",
  fl_empty: "Aún no hay bloques — empieza tu primer Outdo. ◎",
  lg_sec: "Legal e info",
 export_ok: "Exportación descargada.", reset_confirm: "¿Borrar todos los datos de este dispositivo?",
 reset_done: "Todo borrado. Un nuevo comienzo espera.",
  eyebrow_app: "App", set_lang_sub: "Se aplica al instante en toda la app.",
  theme_title: "Apariencia", theme_sub: "Se guarda localmente en este dispositivo.",
  theme_light: "Claro", theme_dark: "Oscuro",
  remind_sub: "Local en este dispositivo — sin servidor.",
  remind_denied: "Notificaciones bloqueadas — permítelas en ajustes del sistema.",
 remind_saved: "Recordatorios guardados.",
  store_local: "Guardado localmente — todo offline en este dispositivo.",
  store_memory: "Solo en memoria — no se guarda nada.",
  cb_text: "Sin cookies ni rastreadores — solo almacenamiento local del dispositivo.",
},
fr: {
  nav_hub: "Hub", nav_journal: "Journal", nav_focus: "Mode Outdo", nav_food: "Repas", nav_stats: "Stats", nav_settings: "Réglages",
  tab_hub: "Hub", tab_journal: "Journal", tab_outdo: "Outdo", tab_food: "Repas", tab_stats: "Stats", tab_settings: "Régl.",
  greet_morning: "Bonjour", greet_day: "Bonjour", greet_evening: "Bonsoir", greet_night: "Debout ? Le voyage continue.",
  quest_title: "Quête du jour", quest_ph: "Une phrase : quoi d'essentiel aujourd'hui ?",
  streak_days: "jours de série", perfect_label: "jours à 100 %", freeze_btn: "Sauver la série",
  chart_7: "7 jours", chart_30: "30 jours",
  sec_habits: "Habitudes", add_new: "+ Nouv.", sh_title: "Nouvelle habitude", sh_cancel: "Annuler", sh_add: "Ajouter",
  area_mind: "Esprit", area_body: "Corps", area_craft: "Art",
  goal_daily: "Quotidien", goal_weekly: "×/sem", goal_target: "Cible", goal_count_lbl: "Nombre",
  proof_btn: "Preuve", proof_title: "Noter une preuve", proof_save: "Enregistrer", proof_photo_lbl: "Photo",
  rc_title: "Contrôle focus", rc_open: "Rediriger l'impulsion",
  rd_title: "60 secondes — rien d'autre", ra_water: "Boire de l'eau", ra_pushups: "10 pompes", ra_read: "Lire le focus à voix haute", rd_cancel: "Annuler",
  launch_title: "Lancer Outdo", timer_start: "Démarrer", timer_pause: "Pause", timer_resume: "Reprendre", timer_reset: "Reset",
  st_ready: "Prêt", st_running: "En cours…", st_paused: "En pause", st_done: "Bravo ",
  mf_all: "Tout", mf_protein: "Protéines", mf_energy: "Énergie", mf_light: "Light", meal_new: "Nouvelle idée", meal_hint: "Toucher pour une idée",
  r_ing: "Ingrédients", r_steps: "Préparation", sec_all: "Tous les plats",
  gr_title: "Grille", id_title: "Identité", fl_title: "Log focus",
  weekly_title: "Bilan hebdo", lg_less: "Moins", lg_more: "Plus",
  set_lang_title: "Langue",
  remind_title: "Rappels", remind_enable: "Me rappeler", remind_morning: "Matin", remind_evening: "Soir",
  set_store_title: "Stockage", set_info_title: "Infos",
  j_save: "Enregistrer", sec_entries: "Entrées", journal_review: "Insérer le bilan hebdo",
  btn_export: "Exporter", btn_reset: "Tout effacer", dt_title: "Données",
  legal_privacy: "Confidentialité", legal_terms: "CGU", legal_refund: "Remboursements",
  legal_cookies: "Cookies", legal_imprint: "Contact", legal_licenses: "Licences", legal_close: "Fermer",
  cb_accept: "Compris", cb_decline: "Sans enregistrer",
  t_hours: "H.", t_minutes: "Min.", t_seconds: "Sec.", custom_apply: "Appliquer",
  sound_lbl: "Ambiance", snd_off: "Off — silence", snd_white: "Bruit blanc", snd_rain: "Pluie", snd_synth: "Synthé",
  focus_exit: "Vers Hub", focus_fs: "Plein écran", level_lbl: "Niveau {n}",
  hero_goal: "Objectif du jour : 100 %",
  routine_title: "Ta routine", routine_morning: "Routine du matin", routine_evening: "Routine du soir",
  wg_title: "Widgets", wg_today: "Min. aujourd.",
  wg_hint: "Sur iPhone et Android : installe OutTrack — les widgets sont dans l'app, pas dans le navigateur.",
  summit_title: "Le sommet", summit_sub: "Ton chemin comme un voyage — chaque pas compte.",
  wk_checkins: "Check-ins", wk_pts: "PTS · 7 jours",
  freeze_ok: "Série sauvée — le voyage continue.", freeze_limit: "Le freeze revient la semaine prochaine.",
 empty_habits: "Pas encore de quête active — crée la première.", sh_name_ph: "p. ex. lecture profonde",
 habit_added: "Quête acceptée. Amuse-toi !", habit_deleted: "Habitude supprimée.", habit_done: "+1 — fort !",
  proof_note_ph: "Note pour cette preuve…", proof_saved: "Preuve enregistrée. ",
  rc_sub: "Tu attrapes ton téléphone alors que tu voulais travailler ? 60 secondes de pause au lieu du pilote automatique.",
  rd_sub: "Choisis l'une des trois micro-actions, et l'impulsion passera.",
 redirect_done: "Redirigé +5 MIND. Fort !",
  launch_sub: "45 min de travail profond",
  hub_foot: "Touche pour cocher. Tes données restent avec toi — tout hors ligne.",
  eyebrow_reflexion: "Réflexion", j_title_ph: "Titre (facultatif)", j_text_ph: "À quoi penses-tu ? …",
  j_consent: "Stocké uniquement en local sur ton appareil.",
  journal_empty: "Écris d'abord quelques mots.",
 entry_saved: "Entrée enregistrée.", entry_deleted: "Entrée supprimée.", review_inserted: "Bilan inséré.",
  j_search_ph: "Rechercher",
  eyebrow_deep: "Travail profond", focus_done: "Bloc de focus terminé. +{mins} min dans le journal.",
  focus_q: "Quel est ton unique focus pour ce bloc ?", focus_ph: "p. ex. finir OutTrack v3",
  eyebrow_energy: "Énergie",
  m_protein: "Protéines", m_carbs: "Glucides", m_fat: "Lipides",
  tut_skip: "Passer", tut_back: "Retour", tut_next: "Suivant", tut_start: "C'est parti",
  tut_1t: "Ta quête du jour", tut_1d: "Crée des habitudes, coche-les et fais grandir ta série — pas à pas.",
  tut_2t: "Focus sans distractions", tut_2d: "Le mode Outdo éteint tout le reste : règle un minuteur, nomme un focus, c'est parti.",
  tut_3t: "Manger sans réfléchir", tut_3d: "136 recettes avec calories et macros — touche, cuisine, terminé.",
  tut_4t: "Vois ton chemin", tut_4d: "Stats, sommet et freeze montrent ton progrès — sans culpabilité, juste le voyage.",
  tut_5t: "Tes données restent avec toi", tut_5d: "Pas de compte, pas de serveur, pas de traqueurs. Tout vit sur ton appareil.",
  food_foot: "Idées générales de recettes, sans conseil nutritionnel.",
  meta_line: "{kcal} kcal · {mins} min", cat_protein: "Protéines", cat_energie: "Énergie", cat_light: "Light",
  eyebrow_cons: "Régularité", lb_redirects: "Redirections", lb_streak: "Meilleure série", lb_perfect: "Jours à 100 %",
  wr_bestday: "Meilleur jour",
  gr_sub: "35 derniers jours — plus foncé = plus accompli.",
  id_sub: "Chaque habitude = +10 points dans sa sphère. 70 points = niveau supérieur.",
  fl_empty: "Pas encore de blocs — lance ton premier Outdo. ◎",
  lg_sec: "Légal & infos",
 export_ok: "Export téléchargé.", reset_confirm: "Supprimer toutes les données de cet appareil ?",
 reset_done: "Tout effacé. Un nouveau départ t'attend.",
  eyebrow_app: "App", set_lang_sub: "S'applique instantanément à toute l'app.",
  theme_title: "Apparence", theme_sub: "Stocké en local sur cet appareil.",
  theme_light: "Clair", theme_dark: "Sombre",
  remind_sub: "En local sur cet appareil — sans serveur.",
  remind_denied: "Notifications bloquées — autorise-les dans les réglages système.",
 remind_saved: "Rappels enregistrés.",
  store_local: "Stocké en local — tout hors ligne sur cet appareil.",
  store_memory: "En mémoire uniquement — rien n'est enregistré.",
  cb_text: "Ni cookies ni traqueurs — uniquement le stockage local de l'appareil.",
},
};
const QUOTES = {
  de: ["Kleine Siege summieren sich.", "The journey continues.", "Eine Quest pro Tag reicht.", "Deine Daten bleiben bei dir."],
  en: ["Small wins add up.", "The journey continues.", "One quest a day is enough.", "Your data stays with you."],
  ru: ["Маленькие победы суммируются.", "Путь продолжается."],
  es: ["Las pequeñas victorias suman.", "El viaje continúa."],
  fr: ["Les petites victoires s'additionnent.", "Le voyage continue."],
};
const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const uid = () => Math.random().toString(36).slice(2, 10);
function t(key, vars) {
  let s = (STR[db.lang] && STR[db.lang][key]) ?? STR.de[key] ?? STR.en[key] ?? key;
  if (vars) for (const k in vars) s = String(s).replace("{" + k + "}", vars[k]);
  return s;
}
const loc = () => LOCALES[db.lang] || "de-DE";
const todayISO = (offset = 0) => {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
};
function weekKey(dateISO) {
  const d = new Date(dateISO + "T12:00:00");
  const onejan = new Date(d.getFullYear(), 0, 1);
  const w = Math.ceil((((d - onejan) / 86400000) + onejan.getDay() + 1) / 7);
  return d.getFullYear() + "-W" + String(w).padStart(2, "0");
}
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.hidden = false;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { el.hidden = true; }, 2400);
}

/* ---------- Storage ---------- */
let persistOK = true;
try {
  const c = localStorage.getItem(CONSENT_KEY);
  if (c === "no") persistOK = false;
} catch { persistOK = false; }
const DEFAULT_HABITS = () => ([
  { id: uid(), label: { de: "Tief lesen", en: "Deep reading", ru: "Глубокое чтение", es: "Lectura profunda", fr: "Lecture profonde" }, area: "mind", goal: "daily", count: 1, days: {}, proofs: {} },
  { id: uid(), label: { de: "Bewegen", en: "Move", ru: "Движение", es: "Moverse", fr: "Bouger" }, area: "body", goal: "daily", count: 1, days: {}, proofs: {} },
  { id: uid(), label: { de: "Etwas erschaffen", en: "Make something", ru: "Создать что-то", es: "Crear algo", fr: "Créer quelque chose" }, area: "craft", goal: "weekly", count: 3, days: {}, proofs: {} },
]);
const DEFAULTS = () => ({
  v: 3, lang: "de", theme: "light", habits: DEFAULT_HABITS(),
  journal: [], redirects: [], focusLog: [],
  frozenDays: {}, freezeWeek: "", quest: { date: "", text: "" },
  remind: { on: false, morning: "07:30", evening: "21:00", fired: {} },
  chartRange: 7, mealIdx: 0, mealCat: "alle", focusText: "", tutorialSeen: false,
});
let db = DEFAULTS();
function load() {
  let raw = null;
  try { raw = localStorage.getItem(KEY); } catch { raw = null; }
  if (!raw) {
    db = DEFAULTS();
    try {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) db.theme = "dark";
    } catch { /* Hell bleibt Default */ }
    return;
  }
  try {
    const d = JSON.parse(raw);
    db = Object.assign(DEFAULTS(), d);
    db.habits.forEach((h) => {
      if (typeof h.label === "string") h.label = { de: h.label };
      if (!h.goal) h.goal = "daily";
      if (!h.count) h.count = 1;
      if (!h.days) h.days = {};
      if (!h.proofs) h.proofs = {};
      for (const k in h.days) if (h.days[k] === true) h.days[k] = 1;
    });
  } catch { db = DEFAULTS(); }
}
function save() {
  if (!persistOK) return;
  try { localStorage.setItem(KEY, JSON.stringify(db)); } catch { /* memory-only */ }
}
const habitLabel = (h) => (typeof h.label === "object" ? (h.label[db.lang] || h.label.de || h.label.en || "") : h.label);
const isDone = (h, day = todayISO()) => (h.days[day] || 0) > 0;

/* ---------- i18n ---------- */
const isDark = () => document.body.classList.contains("dark");
const ACC = () => (isDark() ? "#8ba4ff" : "#1e40af");
const ACC_HALF = () => (isDark() ? "rgba(139,164,255,.45)" : "rgba(47,111,237,.45)");
const ACC_GRAD = () => (isDark() ? "url(#otAccD)" : "url(#otAccL)");
const TRACK_C = () => (isDark() ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.08)");
const INK = () => (isDark() ? "#f5f5f7" : "#1c1c1e");
function applyTheme() {
  const dark = db.theme === "dark";
  document.body.classList.toggle("dark", dark);
  const tg = $("#theme-toggle");
  if (tg) {
    tg.dataset.v = dark ? "dark" : "light";
    tg.querySelectorAll("button").forEach((b) => b.classList.toggle("active", (b.dataset.theme === "dark") === dark));
  }
  try {
    const m = document.querySelector('meta[name="theme-color"]');
    if (m) m.content = dark ? "#0a0a0e" : "#f2f2f7";
  } catch { /* still */ }
  try { drawChart(); } catch { /* still */ }
  try { renderSummit(); } catch { /* still */ }
}
$("#theme-toggle").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  db.theme = b.dataset.theme === "dark" ? "dark" : "light";
  save(); applyTheme();
});
function applyLang() {
  document.documentElement.lang = db.lang;
  $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
}
function renderLangList() {
  const ul = $("#lang-list");
  ul.innerHTML = "";
  LANGS.forEach((l) => {
    const li = document.createElement("li");
    li.innerHTML = "<button><span>" + esc(l.label) + "</span><span class=\"lang-check\">" + (db.lang === l.id ? "✓" : "") + "</span></button>";
    li.querySelector("button").addEventListener("click", () => {
      db.lang = l.id; save(); renderAll();
    });
    ul.appendChild(li);
  });
}

/* ---------- Router ---------- */
const tabs = $$(".tab");
function go(tab) {
  $$(".view").forEach((v) => v.classList.toggle("active", v.id === "view-" + tab));
  tabs.forEach((x) => {
    const on = x.dataset.tab === tab;
    x.classList.toggle("active", on);
    if (on) x.setAttribute("aria-current", "page"); else x.removeAttribute("aria-current");
  });
  if (tab === "hub") {
    renderHub();
    try { // Entrance einmal pro Besuch abspielen (Video-Stagger)
      const hc = $("#hero-card");
      hc.classList.remove("play");
      void hc.offsetWidth;
      hc.classList.add("play");
    } catch { /* still */ }
  }
  if (tab === "analytics") renderStats();
  if (tab === "food") { renderMeal(false); renderMealList(); }
  if (tab === "settings") renderSettings();
  if (tab === "focus") renderWidgets();
  try { // Mini-Skeleton nur beim Erstbesuch je View (Inhalt liegt längst vor)
    const v = document.getElementById("view-" + tab);
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (v && !reduce && !go._seen.has(tab)) {
      go._seen.add(tab);
      v.classList.add("booting", "fresh");
      setTimeout(() => v.classList.remove("booting"), 300);
    } else if (v) { go._seen.add(tab); v.classList.remove("fresh"); }
  } catch { /* still */ }
}
/* Fokus-Widgets im iOS-Widget-Look (Stay focused with widgets) */
function renderWidgets() {
  const box = $("#wg-grid");
  if (!box) return;
  let mins = 0;
  db.focusLog.forEach((f) => { if ((f.date || "").slice(0, 10) === todayISO()) mins += f.mins || 0; });
  const w = (v, l, d) => "<div class=\"wg\" style=\"--d:" + d + "\"><strong>" + v + "</strong><small>" + esc(l) + "</small></div>";
  box.innerHTML =
    w(calcStreak(), t("lb_streak"), 0) +
    w("◎ " + mins, t("wg_today"), 1) +
    w(perfectDays(), t("lb_perfect"), 2);
}
tabs.forEach((x) => x.addEventListener("click", () => go(x.dataset.tab)));
go._seen = new Set();
function renderAll() {
  applyLang();
  applyTheme();
  renderLangList();
  renderHub();
  renderJournal();
  renderMeal(false); renderMealList();
  renderStats();
  renderSettings();
  renderTimerLabels();
}

/* ---------- Progress core ---------- */
function dayProgress(day = todayISO()) {
  if (!db.habits.length) return 0;
  let done = 0;
  db.habits.forEach((h) => { if (isDone(h, day) || db.frozenDays[day]) done++; });
  if (db.frozenDays[day]) return 100;
  return Math.round((done / db.habits.length) * 100);
}
function dayComplete(day) {
  if (!db.habits.length) return false;
  if (db.frozenDays[day]) return true;
  return db.habits.every((h) => isDone(h, day));
}
function calcStreak() {
  let n = 0;
  let d = todayISO();
  if (!dayComplete(d)) d = todayISO(-1);
  while (dayComplete(d)) {
    n++;
    const dt = new Date(d + "T12:00:00");
    dt.setDate(dt.getDate() - 1);
    d = dt.getFullYear() + "-" + String(dt.getMonth() + 1).padStart(2, "0") + "-" + String(dt.getDate()).padStart(2, "0");
    if (n > 1000) break;
  }
  return n;
}
function bestStreak() {
  let best = 0, cur = 0;
  for (let i = 364; i >= 0; i--) {
    if (dayComplete(todayISO(-i))) { cur++; if (cur > best) best = cur; }
    else cur = 0;
  }
  return best;
}
function perfectDays() {
  let n = 0;
  for (let i = 0; i < 365; i++) if (dayProgress(todayISO(-i)) === 100) n++;
  return n;
}
function weekCount(h) {
  let n = 0;
  for (let i = 0; i < 7; i++) if ((h.days[todayISO(-i)] || 0) > 0) n++;
  return n;
}
function totalCount(h) { return Object.values(h.days).reduce((a, b) => a + (b || 0), 0); }
function areaPoints() {
  const pts = { mind: 0, body: 0, craft: 0 };
  db.habits.forEach((h) => { pts[h.area] = (pts[h.area] || 0) + Object.keys(h.days).length * 10; });
  db.redirects.forEach(() => { pts.mind += 5; });
  return pts;
}

/* ---------- Hub ---------- */
const GAUGE_LEN = 100; // Halb-Bogen nutzt pathLength="100" → Offset = 100 - pct
function countNum(id, val, suffix) {
  const el = document.getElementById(id);
  if (!el) return;
  countUp(el, Number(el.dataset.v || 0), val, suffix);
  el.dataset.v = String(val);
}
function renderWeek() {
  const box = $("#week-strip");
  if (!box) return;
  const now = new Date();
  const dow = (now.getDay() + 6) % 7; // Mo = 0
  const mon = new Date(now);
  mon.setDate(now.getDate() - dow);
  let html = "";
  for (let i = 0; i < 7; i++) {
    const d = new Date(mon);
    d.setDate(mon.getDate() + i);
    const iso = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
    const p = dayProgress(iso);
    const isToday = iso === todayISO();
    let wd = "";
    try { wd = d.toLocaleDateString(loc(), { weekday: "narrow" }); } catch { wd = "·"; }
    const cls = p >= 100 ? "" : p > 0 ? "part" : "off";
    html += "<div class=\"wday " + cls + (isToday ? " today" : "") + "\" style=\"--d:" + i + "\">" +
      "<span>" + esc(wd) + "</span><span class=\"fl\">●</span>" +
      "<span class=\"dn\">" + String(d.getDate()).padStart(2, "0") + "</span>" +
      "<span class=\"dot" + (isToday ? "" : " ghost") + "\"></span></div>";
  }
  box.innerHTML = html;
}
function countUp(el, from, to, suffix) {
  el.textContent = to + suffix; // synchroner Endwert (Tests + Robustheit)
  try {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || from === to || typeof requestAnimationFrame !== "function") return;
    const t0 = performance.now(), dur = 750;
    const step = (now) => {
      const k = Math.min(1, (now - t0) / dur);
      const e = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(from + (to - from) * e) + suffix;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  } catch { /* still */ }
}
function renderHub() {
  const now = new Date();
  try { $("#hub-date").textContent = now.toLocaleDateString(loc(), { weekday: "long", day: "numeric", month: "long" }); } catch { $("#hub-date").textContent = todayISO(); }
  const hr = now.getHours();
  const gk = hr >= 5 && hr < 11 ? "greet_morning" : hr >= 11 && hr < 18 ? "greet_day" : hr >= 18 || hr < 0 ? "greet_evening" : "greet_night";
  $("#hero-greet").textContent = t(hr >= 23 || hr < 5 ? "greet_night" : gk);
  const pct = dayProgress();
  const fg = $("#ring-fg");
  fg.style.strokeDashoffset = String(GAUGE_LEN - pct);
  const ang = (pct / 100) * 180;
  const needle = $("#gauge-needle");
  if (needle) {
    needle.setAttribute("transform", "rotate(" + ang + " 100 100)");
    try { needle.style.transform = "rotate(" + ang + "deg)"; needle.style.transformOrigin = "100px 100px"; } catch { /* still */ }
  }
  countNum("ring-pct", pct, "%");
  const doneN = db.habits.filter((h) => isDone(h)).length;
  $("#ring-sub").textContent = doneN + " / " + db.habits.length;
  $("#hero-done").hidden = pct !== 100;
  countNum("streak-count", calcStreak(), "");
  countNum("perfect-count", perfectDays(), "");
  const redToday = db.redirects.filter((r) => (r.date || "").slice(0, 10) === todayISO()).length;
  countNum("hero-pts", doneN * 10 + redToday * 5, "");
  renderWeek();
  // Freeze: gestern gerissen, davor Streak, diese Woche noch nicht benutzt
  const y = todayISO(-1), b = todayISO(-2);
  const showFreeze = !dayComplete(y) && dayComplete(b) && db.freezeWeek !== weekKey(todayISO());
  $("#freeze-btn").hidden = !showFreeze;
  const qs = QUOTES[db.lang] || QUOTES.de;
  $("#hub-quote").textContent = qs[Math.floor((Date.now() / 86400000)) % qs.length];
  // Punkte-Chips für heute
  const chips = [];
  AREAS.forEach((a) => {
    const n = db.habits.filter((h) => h.area === a && isDone(h)).length;
    if (n > 0) chips.push("<span>" + esc(t("area_" + a)) + " +" + (n * 10) + "</span>");
  });
  if (redToday > 0) chips.push("<span>Mind +" + (redToday * 5) + "</span>");
  $("#points-mini").innerHTML = chips.join("");
  // Quest-Input
  const q = $("#focus-goal");
  if (document.activeElement !== q) q.value = db.quest.date === todayISO() ? (db.quest.text || "") : "";
  drawChart();
  renderHabits();
  renderRoutine();
}
/* Deine Routine: Morgen/Abend-Zeiten + Tages-Quest als Checkliste (Build your routine) */
function renderRoutine() {
  const box = $("#routine-rows");
  if (!box) return;
  const q = db.quest.date === todayISO() && db.quest.text ? db.quest.text : "—";
  const doneN = db.habits.filter((h) => isDone(h)).length;
  box.innerHTML =
    "<div class=\"lb-row\"><span>" + esc(t("routine_morning")) + "</span><strong>" + esc(db.remind.morning || "07:30") + "</strong></div>" +
    "<div class=\"lb-row\"><span>" + esc(t("quest_title")) + " · " + doneN + "/" + db.habits.length + "</span><strong>" + esc(q.length > 24 ? q.slice(0, 24) + "…" : q) + "</strong></div>" +
    "<div class=\"lb-row\"><span>" + esc(t("routine_evening")) + "</span><strong>" + esc(db.remind.evening || "21:00") + "</strong></div>";
}
function drawChart() {
  const svg = $("#chart-svg");
  const N = db.chartRange === 30 ? 30 : 7;
  const W = 300, H = 90, gap = N > 7 ? 3 : 8;
  const bw = (W - gap * (N - 1)) / N;
  let s = "";
  for (let i = N - 1; i >= 0; i--) {
    const p = dayProgress(todayISO(-i));
    const h = Math.max(3, Math.round((p / 100) * (H - 14)));
    const x = (N - 1 - i) * (bw + gap);
    s += "<rect x=\"" + x.toFixed(1) + "\" y=\"" + (H - h) + "\" width=\"" + bw.toFixed(1) + "\" height=\"" + h + "\" rx=\"3\" style=\"--d:" + (N - 1 - i) + "\" fill=\"" + (p === 100 ? ACC_GRAD() : p > 0 ? ACC_HALF() : TRACK_C()) + "\"><title>" + p + "%</title></rect>";
  }
  svg.innerHTML = s;
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
}
$("#chart-range").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  db.chartRange = Number(b.dataset.range) || 7;
  $$("#chart-range button").forEach((x) => x.classList.toggle("active", x === b));
  save(); drawChart();
});
let questT = null;
$("#focus-goal").addEventListener("input", (e) => {
  clearTimeout(questT);
  questT = setTimeout(() => {
    db.quest = { date: todayISO(), text: e.target.value.slice(0, 120) };
    save();
  }, 400);
});
$("#routine-go").addEventListener("click", () => go("settings"));
$("#freeze-btn").addEventListener("click", () => {
  const wk = weekKey(todayISO());
  if (db.freezeWeek === wk) { toast(t("freeze_limit")); return; }
  db.frozenDays[todayISO(-1)] = true;
  db.freezeWeek = wk;
  save(); renderHub();
  toast(t("freeze_ok"));
});
function habitSub(h) {
  if (h.goal === "weekly") {
    const w = weekCount(h);
    const unit = db.lang === "de" ? "diese Woche" : db.lang === "en" ? "this week" : "";
    return w + "/" + h.count + (unit ? " · " + unit : "");
  }
  if (h.goal === "target") return totalCount(h) + "/" + h.count;
  return t("area_" + h.area);
}
function renderHabits() {
  const ul = $("#habit-list");
  ul.innerHTML = "";
  $("#habits-empty").hidden = db.habits.length > 0;
  const today = todayISO();
  db.habits.forEach((h) => {
    const li = document.createElement("li");
    li.className = "habit" + (isDone(h) ? " done" : "");
    li.setAttribute("tabindex", "0");
    const proof = h.proofs && h.proofs[today];
    li.innerHTML = "<span class=\"check\">✓</span>" +
      "<span class=\"h-main\"><span class=\"h-label\">" + esc(habitLabel(h)) + "</span>" +
      "<span class=\"h-sub\">" + esc(habitSub(h)) + "</span></span>" +
      (proof && proof.img ? "<img class=\"proof-thumb\" alt=\"\" />" : "") +
      "<button class=\"h-proof" + (proof ? " has" : "") + "\">" + esc(t("proof_btn")) + (proof ? " ✓" : "") + "</button>" +
      "<button class=\"h-del\" aria-label=\"×\">×</button>";
    if (proof && proof.img) li.querySelector(".proof-thumb").src = proof.img;
    const toggle = () => {
      if (h.goal === "target") {
        h.days[today] = (h.days[today] || 0) + 1;
        toast(t("habit_done"));
      } else if (isDone(h)) {
        delete h.days[today];
      } else {
        h.days[today] = 1;
        toast(t("habit_done"));
      }
      save(); renderHub();
      if (dayProgress() === 100) renderStats();
    };
    li.addEventListener("click", (e) => {
      if (e.target.closest(".h-del")) { db.habits = db.habits.filter((x) => x.id !== h.id); save(); renderHub(); toast(t("habit_deleted")); return; }
      if (e.target.closest(".h-proof")) { openProof(h.id); return; }
      toggle();
    });
    li.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
    ul.appendChild(li);
  });
}

/* ---------- Habit-Sheet (mit Zielen) ---------- */
let sheetArea = "mind", sheetGoal = "daily";
$("#add-habit-btn").addEventListener("click", () => {
  $("#sheet").hidden = false;
  $("#sheet-backdrop").hidden = false;
  setTimeout(() => $("#new-habit-label").focus(), 50);
});
const closeSheet = () => { $("#sheet").hidden = true; $("#sheet-backdrop").hidden = true; };
$("#sheet-cancel").addEventListener("click", closeSheet);
$("#sheet-backdrop").addEventListener("click", closeSheet);
$("#area-pick").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  sheetArea = b.dataset.area;
  $$("#area-pick button").forEach((x) => x.classList.toggle("active", x === b));
});
$("#goal-pick").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  sheetGoal = b.dataset.goal;
  $$("#goal-pick button").forEach((x) => x.classList.toggle("active", x === b));
  $("#goal-count-row").hidden = sheetGoal === "daily";
});
$("#sheet-save").addEventListener("click", () => {
  const v = $("#new-habit-label").value.trim().slice(0, 28);
  if (!v) { $("#new-habit-label").focus(); return; }
  const count = sheetGoal === "daily" ? 1 : Math.max(1, Math.min(99, Number($("#goal-count").value) || 1));
  db.habits.push({ id: uid(), label: { [db.lang]: v, de: db.lang === "de" ? v : "", en: db.lang === "en" ? v : "" }, area: sheetArea, goal: sheetGoal, count, days: {}, proofs: {} });
  const h = db.habits[db.habits.length - 1];
  if (!h.label.de) h.label.de = v;
  if (!h.label.en) h.label.en = v;
  $("#new-habit-label").value = "";
  save(); closeSheet(); renderHub();
  toast(t("habit_added"));
});

/* ---------- Beweise (Notiz + Foto, 320px JPEG) ---------- */
let proofHabit = null, proofImg = "";
function openProof(id) {
  proofHabit = db.habits.find((h) => h.id === id);
  if (!proofHabit) return;
  const p = (proofHabit.proofs && proofHabit.proofs[todayISO()]) || {};
  $("#proof-note").value = p.note || "";
  proofImg = p.img || "";
  const prev = $("#proof-preview");
  if (proofImg) { prev.src = proofImg; prev.hidden = false; } else { prev.hidden = true; }
  $("#proof-photo").value = "";
  $("#proof-sheet").hidden = false;
  $("#proof-backdrop").hidden = false;
}
const closeProof = () => { $("#proof-sheet").hidden = true; $("#proof-backdrop").hidden = true; proofHabit = null; };
$("#proof-cancel").addEventListener("click", closeProof);
$("#proof-backdrop").addEventListener("click", closeProof);
$("#proof-photo").addEventListener("change", (e) => {
  const f = e.target.files && e.target.files[0];
  if (!f) return;
  const rd = new FileReader();
  rd.onload = () => {
    const img = new Image();
    img.onload = () => {
      try {
        const max = 320;
        const sc = Math.min(1, max / Math.max(img.width, img.height));
        const c = document.createElement("canvas");
        c.width = Math.max(1, Math.round(img.width * sc));
        c.height = Math.max(1, Math.round(img.height * sc));
        c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
        proofImg = c.toDataURL("image/jpeg", 0.82);
        const prev = $("#proof-preview");
        prev.src = proofImg; prev.hidden = false;
      } catch { /* Bild wird ohne Speichern verworfen */ }
    };
    img.src = rd.result;
  };
  rd.readAsDataURL(f);
});
$("#proof-save").addEventListener("click", () => {
  if (!proofHabit) return;
  const note = $("#proof-note").value.trim().slice(0, 140);
  if (!note && !proofImg) { closeProof(); return; }
  proofHabit.proofs[todayISO()] = { note, img: proofImg };
  if (!isDone(proofHabit)) proofHabit.days[todayISO()] = 1;
  save(); closeProof(); renderHub();
  toast(t("proof_saved"));
});

/* ---------- Fokus-Check (Calibrated Friction) ---------- */
let redirectTimer = null, redirectLeft = 60;
function openRedirect() {
  $("#redirect-sheet").hidden = false;
  $("#redirect-backdrop").hidden = false;
  redirectLeft = 60;
  $("#redirect-count").textContent = "60";
  clearInterval(redirectTimer);
  redirectTimer = setInterval(() => {
    redirectLeft--;
    $("#redirect-count").textContent = String(Math.max(0, redirectLeft));
    if (redirectLeft <= 0) closeRedirect();
  }, 1000);
}
function closeRedirect() {
  clearInterval(redirectTimer);
  $("#redirect-sheet").hidden = true;
  $("#redirect-backdrop").hidden = true;
}
$("#redirect-open").addEventListener("click", openRedirect);
$("#redirect-cancel").addEventListener("click", closeRedirect);
$("#redirect-backdrop").addEventListener("click", closeRedirect);
const RA_KEYS = { water: "ra_water", pushups: "ra_pushups", read: "ra_read" };
$$(".redirect-actions button").forEach((b) => b.addEventListener("click", () => {
  db.redirects.push({ date: new Date().toISOString(), action: b.dataset.ra });
  save(); closeRedirect(); renderHub();
  toast(t("redirect_done"));
}));

/* ---------- Journal ---------- */
function renderJournal() {
  const q = ($("#journal-search").value || "").toLowerCase();
  $("#journal-search-clear").hidden = !q;
  const ul = $("#journal-list");
  ul.innerHTML = "";
  const entries = db.journal.filter((e) => !q || ((e.title || "") + " " + (e.text || "")).toLowerCase().includes(q)).slice(0, 60);
  entries.forEach((e) => {
    const li = document.createElement("li");
    li.className = "j-entry";
    let dstr = (e.date || "").slice(0, 10);
    try { dstr = new Date(e.date).toLocaleDateString(loc(), { day: "numeric", month: "short" }); } catch { /* ISO lassen */ }
    li.innerHTML = "<h4>" + (esc(e.title) || "—") + "</h4><time>" + esc(dstr) + "</time><p>" + esc(e.text) + "</p>";
    const del = document.createElement("button");
    del.textContent = "×";
    del.setAttribute("aria-label", "×");
    del.addEventListener("click", () => {
      db.journal = db.journal.filter((x) => x.id !== e.id);
      save(); renderJournal();
      toast(t("entry_deleted"));
    });
    li.appendChild(del);
    ul.appendChild(li);
  });
}
$("#journal-save").addEventListener("click", () => {
  const text = $("#journal-text").value.trim().slice(0, 2000);
  if (!text) { toast(t("journal_empty")); return; }
  db.journal.unshift({ id: uid(), date: new Date().toISOString(), title: $("#journal-title").value.trim().slice(0, 60), text });
  $("#journal-title").value = "";
  $("#journal-text").value = "";
  save(); renderJournal();
  toast(t("entry_saved"));
});
$("#journal-search").addEventListener("input", renderJournal);
$("#journal-search-clear").addEventListener("click", () => { $("#journal-search").value = ""; renderJournal(); });
$("#journal-review-btn").addEventListener("click", () => {
  const ta = $("#journal-text");
  ta.value = (ta.value ? ta.value + "\n\n" : "") + weeklyText();
  toast(t("review_inserted"));
  ta.focus();
});

/* ---------- Food ---------- */
function mealView(m) {
  const L = db.lang !== "de" && m[db.lang] ? m[db.lang] : null;
  return {
    name: (L && L.name) || m.name,
    desc: (L && L.desc) || m.desc,
    ing: (L && L.ing) || m.ing,
    steps: (L && L.steps) || m.steps,
  };
}
function filteredMeals() {
  if (db.mealCat === "alle") return MEALS.map((m, i) => i);
  return MEALS.map((m, i) => (m.cat === db.mealCat ? i : -1)).filter((i) => i >= 0);
}
function paintMeal(i) {
  const m = MEALS[i];
  if (!m) return;
  db.mealIdx = i;
  const v = mealView(m);
  $("#meal-cat").textContent = t("cat_" + m.cat);
  $("#meal-name").textContent = v.name;
  $("#meal-name").removeAttribute("data-i18n");
  $("#meal-kcal").textContent = m.kcal;
  const macros = macroRows(m);
  $("#meal-macros").innerHTML = macros;
  $("#meal-meta").textContent = t("meta_line", { kcal: m.kcal, mins: m.mins });
  const box = $("#meal-recipe");
  box.hidden = false;
  $("#meal-ing").innerHTML = v.ing.map((x) => "<li tabindex=\"0\">" + esc(x) + "</li>").join("");
  $("#meal-steps").innerHTML = v.steps.map((x) => "<li>" + esc(x) + "</li>").join("");
}
function macroRows(m) {
  const [p, c, f] = m.mac;
  const rows = [[t("m_protein"), p, 4], [t("m_carbs"), c, 4], [t("m_fat"), f, 9]];
  return rows.map(([label, g, per]) => {
    const w = Math.max(4, Math.min(100, Math.round((g * per / m.kcal) * 100)));
    return "<div class=\"macro\"><span>" + esc(label) + "</span><span>" + g + " g</span>" +
      "<div class=\"bar\"><i style=\"width:" + w + "%\"></i></div></div>";
  }).join("");
}
function renderMeal(keep) {
  const pool = filteredMeals();
  if (!pool.length) return;
  let i = db.mealIdx;
  if (!keep || !pool.includes(i)) i = pool[Math.floor(Math.random() * pool.length)];
  paintMeal(i);
  renderMealList();
}
function renderMealList() {
  const ul = $("#meal-list");
  ul.innerHTML = "";
  const q = ($("#meal-search").value || "").toLowerCase();
  $("#meal-search-clear").hidden = !q;
  filteredMeals().filter((i) => {
    if (!q) return true;
    const v = mealView(MEALS[i]);
    return (v.name + " " + v.ing.join(" ") + " " + v.desc + " " + v.steps.join(" ")).toLowerCase().includes(q);
  }).slice(0, 200).forEach((i) => {
    const m = MEALS[i];
    const v = mealView(m);
    const li = document.createElement("li");
    li.className = "meal-row" + (i === db.mealIdx ? " selected" : "");
    li.setAttribute("tabindex", "0");
    li.innerHTML = "<span class=\"h-main\"><span class=\"h-label\">" + esc(v.name) + "</span>" +
      "<span class=\"h-sub\">" + m.mins + " Min. · " + m.mac[0] + " g " + esc(t("m_protein")) + "</span></span>" +
      "<span class=\"meal-kcal\">" + m.kcal + " kcal</span>";
    const pick = () => { paintMeal(i); renderMealList(); };
    li.addEventListener("click", pick);
    li.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); } });
    ul.appendChild(li);
  });
}
$("#meal-filter").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  db.mealCat = b.dataset.cat;
  $$("#meal-filter button").forEach((x) => x.classList.toggle("active", x === b));
  save(); renderMeal(false);
});
$("#meal-next").addEventListener("click", () => renderMeal(false));
$("#meal-search").addEventListener("input", renderMealList);
$("#meal-search-clear").addEventListener("click", () => { $("#meal-search").value = ""; renderMealList(); });
$("#meal-ing").addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (li) li.classList.toggle("off");
});
$("#meal-ing").addEventListener("keydown", (e) => {
  const li = e.target.closest("li");
  if (li && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); li.classList.toggle("off"); }
});

/* ---------- Tutorial (First-Run): was die App kann + wie sie geht ---------- */
const TUTS = [["tut_1t", "tut_1d"], ["tut_2t", "tut_2d"], ["tut_3t", "tut_3d"], ["tut_4t", "tut_4d"], ["tut_5t", "tut_5d"]];
let tutIdx = 0;
function renderTut() {
  const last = tutIdx === TUTS.length - 1;
  $("#tut-title").textContent = t(TUTS[tutIdx][0]);
  $("#tut-text").textContent = t(TUTS[tutIdx][1]);
  $("#tut-back").hidden = tutIdx === 0;
  $("#tut-next").textContent = t(last ? "tut_start" : "tut_next");
  $("#tut-next").removeAttribute("data-i18n");
  const dots = $("#tut-dots");
  dots.innerHTML = "";
  TUTS.forEach((_, n) => {
    const b = document.createElement("button");
    if (n === tutIdx) b.className = "on";
    b.setAttribute("role", "tab");
    b.setAttribute("aria-label", (n + 1) + " / " + TUTS.length);
    b.addEventListener("click", () => { tutIdx = n; renderTut(); });
    dots.appendChild(b);
  });
  const body = $("#tut-body");
  body.style.animation = "none";
  void body.offsetWidth;
  body.style.animation = "";
}
function showTutorial() {
  tutIdx = 0;
  renderTut();
  $("#tutorial").hidden = false;
}
function closeTutorial() {
  $("#tutorial").hidden = true;
  if (!db.tutorialSeen) { db.tutorialSeen = true; save(); }
}
$("#tut-skip").addEventListener("click", closeTutorial);
$("#tut-back").addEventListener("click", () => { if (tutIdx > 0) { tutIdx--; renderTut(); } });
$("#tut-next").addEventListener("click", () => {
  if (tutIdx < TUTS.length - 1) { tutIdx++; renderTut(); }
  else closeTutorial();
});

/* ---------- Outdo Timer ---------- */
const CIRC = 552.9;
let tDur = 45 * 60, tLeft = 45 * 60, tRunning = false, tEnd = 0, tTick = null;
function fmtT(s) {
  s = Math.max(0, s);
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
  const mm = h > 0 ? String(m).padStart(2, "0") : String(m);
  return (h > 0 ? h + ":" : "") + mm.padStart(h > 0 ? 2 : 1, "0") + ":" + String(r).padStart(2, "0");
}
function drawTimer() {
  $("#timer-display").textContent = fmtT(tLeft);
  const frac = tDur > 0 ? tLeft / tDur : 0;
  $("#timer-fg").style.strokeDashoffset = String(CIRC * (1 - frac));
}
function renderTimerLabels() {
  $("#timer-start").textContent = t(tRunning ? "timer_pause" : (tLeft < tDur ? "timer_resume" : "timer_start"));
  $("#timer-state").textContent = t(tRunning ? "st_running" : (tLeft < tDur ? "st_paused" : "st_ready"));
}
function stopTick() { tRunning = false; clearInterval(tTick); tTick = null; }
function setDuration(sec) {
  stopTick();
  tDur = Math.max(1, sec);
  tLeft = tDur;
  drawTimer(); renderTimerLabels();
}
function syncCustomFields() {
  $("#custom-h").value = Math.floor(tDur / 3600);
  $("#custom-m").value = Math.floor((tDur % 3600) / 60);
  $("#custom-s").value = tDur % 60;
}
$("#presets").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  $$("#presets button").forEach((x) => x.classList.toggle("active", x === b));
  setDuration((Number(b.dataset.min) || 45) * 60);
  syncCustomFields();
});
$("#custom-apply").addEventListener("click", () => {
  const sec = (Number($("#custom-h").value) || 0) * 3600 + (Number($("#custom-m").value) || 0) * 60 + (Number($("#custom-s").value) || 0);
  if (sec < 5) return;
  $$("#presets button").forEach((x) => x.classList.remove("active"));
  setDuration(sec);
});
$("#timer-start").addEventListener("click", () => {
  if (tRunning) {
    tLeft = Math.max(0, Math.round((tEnd - Date.now()) / 1000));
    stopTick(); drawTimer(); renderTimerLabels();
    return;
  }
  if (tLeft <= 0) tLeft = tDur;
  tRunning = true;
  tEnd = Date.now() + tLeft * 1000;
  clearInterval(tTick);
  tTick = setInterval(() => {
    tLeft = Math.max(0, Math.round((tEnd - Date.now()) / 1000));
    drawTimer();
    if (tLeft <= 0) completeBlock();
  }, 250);
  drawTimer(); renderTimerLabels();
});
function completeBlock() {
  stopTick();
  const mins = Math.max(1, Math.round(tDur / 60));
  db.focusLog.push({ date: new Date().toISOString(), mins, text: db.focusText || "" });
  save();
  tLeft = tDur;
  drawTimer(); renderTimerLabels();
  blip();
  try {
    const tc = document.querySelector(".timer-card");
    tc.classList.remove("done");
    void tc.offsetWidth;
    tc.classList.add("done");
    setTimeout(() => tc.classList.remove("done"), 700);
  } catch { /* still */ }
  toast(t("focus_done", { mins }));
}
$("#timer-reset").addEventListener("click", () => { stopTick(); tLeft = tDur; drawTimer(); renderTimerLabels(); });
$("#launch-focus").addEventListener("click", () => go("focus"));
$("#exit-focus").addEventListener("click", () => go("hub"));
$("#fs-btn").addEventListener("click", () => {
  try {
    if (document.fullscreenElement) document.exitFullscreen();
    else $("#focus-stage").requestFullscreen();
  } catch { /* Vollbild optional */ }
});
let focusT = null;
$("#focus-input").addEventListener("input", (e) => {
  clearTimeout(focusT);
  focusT = setTimeout(() => {
    db.focusText = e.target.value.slice(0, 120);
    save();
    const s = $("#focus-saved");
    s.classList.add("show");
    setTimeout(() => s.classList.remove("show"), 1200);
  }, 400);
});
/* WebAudio-Ambience (live synthetisiert, keine Dateien) */
let AC = null, ambNodes = [];
function stopAmb() {
  try {
    ambNodes.forEach((n) => { try { n.stop ? n.stop() : n.disconnect(); } catch { /* still */ } });
    if (AC) AC.suspend();
  } catch { /* still */ }
  ambNodes = [];
}
function noiseSrc(filterFreq, type, gainV) {
  const len = AC.sampleRate * 2;
  const buf = AC.createBuffer(1, len, AC.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  const src = AC.createBufferSource();
  src.buffer = buf; src.loop = true;
  const f = AC.createBiquadFilter();
  f.type = type; f.frequency.value = filterFreq;
  const g = AC.createGain();
  g.gain.value = gainV;
  src.connect(f); f.connect(g); g.connect(AC.destination);
  src.start();
  ambNodes.push(src);
}
function startAmb(kind) {
  stopAmb();
  if (kind === "off") return;
  try {
    if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)();
    AC.resume();
    if (kind === "white") noiseSrc(1200, "highpass", 0.05);
    else if (kind === "rain") { noiseSrc(900, "lowpass", 0.12); noiseSrc(4000, "highpass", 0.02); }
    else if (kind === "synth") {
      const g = AC.createGain(); g.gain.value = 0.06;
      const f = AC.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = 600;
      [110, 164.8, 220].forEach((fr) => {
        const o = AC.createOscillator();
        o.type = "sawtooth"; o.frequency.value = fr;
        o.connect(f); o.start(); ambNodes.push(o);
      });
      f.connect(g); g.connect(AC.destination);
    }
  } catch { /* Audio optional */ }
}
$("#sound-select").addEventListener("change", (e) => startAmb(e.target.value));
function blip() {
  try {
    if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)();
    AC.resume();
    const o = AC.createOscillator(), g = AC.createGain();
    o.type = "sine"; o.frequency.value = 880;
    g.gain.setValueAtTime(0.12, AC.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, AC.currentTime + 0.6);
    o.connect(g); g.connect(AC.destination);
    o.start(); o.stop(AC.currentTime + 0.65);
  } catch { /* still */ }
}

/* ---------- Stats ---------- */
function renderWeekly() {
  let done = 0, perfect = 0, best = null, bestP = -1;
  for (let i = 0; i < 7; i++) {
    const d = todayISO(-i);
    const p = dayProgress(d);
    done += db.habits.filter((h) => isDone(h, d)).length;
    if (p === 100) perfect++;
    if (p > bestP) { bestP = p; best = d; }
  }
  const red = db.redirects.filter((r) => (r.date || "").slice(0, 10) >= todayISO(-6)).length;
  let bestStr = "—";
  try { bestStr = new Date((best || todayISO()) + "T12:00:00").toLocaleDateString(loc(), { day: "numeric", month: "numeric" }) + " · " + bestP + " %"; }
  catch { bestStr = (best || "—").slice(5) + " · " + bestP + " %"; }
  let ri = 0;
  const row = (k, v) => "<div class=\"lb-row\" style=\"--d:" + (ri++) + "\"><span>" + esc(k) + "</span><strong>" + v + "</strong></div>";
  $("#weekly-review").innerHTML =
    "<p class=\"muted wr-range\">" + esc(todayISO(-6)) + " – " + esc(todayISO()) + "</p>" +
    row(t("wk_checkins"), done) +
    row(t("lb_perfect"), perfect) +
    row(t("lb_streak"), bestStreak()) +
    row(t("wr_bestday"), esc(bestStr)) +
    row(t("lb_redirects"), red) +
    "<p class=\"muted center wr-foot\">The journey continues.</p>";
}
function weeklyText() {
  let done = 0, perfect = 0, best = null, bestP = -1;
  for (let i = 0; i < 7; i++) {
    const d = todayISO(-i);
    const p = dayProgress(d);
    done += db.habits.filter((h) => isDone(h, d)).length;
    if (p === 100) perfect++;
    if (p > bestP) { bestP = p; best = d; }
  }
  const red = db.redirects.filter((r) => (r.date || "").slice(0, 10) >= todayISO(-6)).length;
  if (db.lang === "en") {
    return "Weekly review (" + todayISO(-6) + " – " + todayISO() + ")\n" +
      "• Check-ins: " + done + " · 100% days: " + perfect + " · Streak: " + calcStreak() + "\n" +
      "• Best day: " + (best || "—") + " (" + bestP + " %)\n" +
      "• Redirects: " + red + "\nThe journey continues.";
  }
  return "Wochenrückblick (" + todayISO(-6) + " – " + todayISO() + ")\n" +
    "• Check-ins: " + done + " · 100 %-Tage: " + perfect + " · Streak: " + calcStreak() + "\n" +
    "• Bester Tag: " + (best || "—") + " (" + bestP + " %)\n" +
    "• Umleitungen: " + red + "\nThe journey continues.";
}
function renderStats() {
  renderWeekly();
  renderTiles();
  renderSummit();
  // 35-Tage-Raster
  const grid = $("#grid");
  grid.innerHTML = "";
  let total = 0;
  for (let i = 34; i >= 0; i--) {
    const d = todayISO(-i);
    const p = dayProgress(d);
    total += db.habits.filter((h) => isDone(h, d)).length;
    const c = document.createElement("span");
    c.className = "sq " + (p === 0 ? "l0" : p < 34 ? "l1" : p < 67 ? "l2" : p < 100 ? "l3" : "l4");
    c.style.setProperty("--d", 34 - i);
    c.title = d + " · " + p + "%";
    grid.appendChild(c);
  }
  const pts = areaPoints();
  const grand = total * 10 + db.redirects.length * 5;
  $("#total-points").textContent = grand + " PTS";
  // Identität
  const idBox = $("#identity");
  idBox.innerHTML = "";
  AREAS.forEach((a, aidx) => {
    const p = pts[a] || 0;
    const lvl = Math.floor(p / 70) + 1;
    const w = Math.round(((p % 70) / 70) * 100);
    const div = document.createElement("div");
    div.className = "id-row";
    div.style.setProperty("--d", aidx);
    div.innerHTML = "<div class=\"id-head\"><span>" + esc(t("area_" + a)) + "</span><small>" + esc(t("level_lbl", { n: lvl })) + " · " + p + " PTS</small></div><div class=\"bar\"><i style=\"width:" + w + "%\"></i></div>";
    idBox.appendChild(div);
  });
  // Fokus-Log
  const fl = $("#focus-log");
  fl.innerHTML = "";
  const items = db.focusLog.map((f) => ({ d: f.date, html: "◎ " + f.mins + " Min." + (f.text ? " — " + esc(f.text) : "") }))
    .concat(db.redirects.map((r) => ({ d: r.date, html: esc(RA_KEYS[r.action] ? t(RA_KEYS[r.action]) : r.action) })))
    .sort((a, b) => (a.d < b.d ? 1 : -1)).slice(0, 10);
  if (!items.length) fl.innerHTML = "<p class=\"muted\">" + esc(t("fl_empty")) + "</p>";
  items.forEach((it, fidx) => {
    const div = document.createElement("div");
    div.className = "fl-row";
    div.style.setProperty("--d", fidx);
    div.innerHTML = it.html;
    fl.appendChild(div);
  });
}

/* Last-Week-Tiles + Der Gipfel (Promo: Track your progress / Reach mastery) */
function weekCheckins() {
  let n = 0;
  for (let i = 0; i < 7; i++) n += db.habits.filter((h) => isDone(h, todayISO(-i))).length;
  return n;
}
function weekPTS() {
  const red = db.redirects.filter((r) => (r.date || "").slice(0, 10) >= todayISO(-6)).length;
  return weekCheckins() * 10 + red * 5;
}
function renderTiles() {
  const box = $("#week-tiles");
  if (!box) return;
  const tile = (v, l, d) => "<div class=\"tile\" style=\"--d:" + d + "\"><strong>" + v + "</strong><small>" + esc(l) + "</small></div>";
  box.innerHTML =
    tile(calcStreak(), t("lb_streak"), 0) +
    tile("✓ " + weekCheckins(), t("wk_checkins"), 1) +
    tile("◆ " + weekPTS(), t("wk_pts"), 2);
}
function renderSummit() {
  const svg = $("#summit-svg");
  if (!svg) return;
  let sum = 0;
  for (let i = 0; i < 30; i++) sum += dayProgress(todayISO(-i));
  const p = Math.round(sum / 30);
  countNum("summit-pct", p, " %");
  const cx = 20 + 190 * (p / 100), cy = 115 - 90 * (p / 100);
  const ac = ACC(), ink = INK(), faint = isDark() ? "rgba(255,255,255,.15)" : "rgba(0,0,0,.15)";
  svg.innerHTML =
    "<defs><linearGradient id=\"sumGrad\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">" +
    "<stop offset=\"0\" stop-color=\"" + ac + "\"/><stop offset=\"1\" stop-color=\"" + ACC_HALF() + "\"/></linearGradient></defs>" +
    "<line x1=\"10\" y1=\"115\" x2=\"292\" y2=\"115\" stroke=\"" + faint + "\" stroke-width=\"2\" stroke-linecap=\"round\"/>" +
    "<path d=\"M20,115 L210,25 L290,115 Z\" fill=\"url(#sumGrad)\" opacity=\".9\"/>" +
    "<path d=\"M210,25 L232,52 L198,52 Z\" fill=\"#fff\" opacity=\".95\"/>" +
    "<line x1=\"210\" y1=\"25\" x2=\"210\" y2=\"10\" stroke=\"" + ink + "\" stroke-width=\"2\"/>" +
    "<rect x=\"210\" y=\"6\" width=\"14\" height=\"9\" rx=\"2\" fill=\"" + ac + "\"/>" +
    "<circle cx=\"" + cx.toFixed(1) + "\" cy=\"" + cy.toFixed(1) + "\" r=\"6\" fill=\"" + ink + "\"/>" +
    "<circle cx=\"" + cx.toFixed(1) + "\" cy=\"" + cy.toFixed(1) + "\" r=\"10\" fill=\"none\" stroke=\"" + ink + "\" stroke-width=\"1.5\" opacity=\".3\"/>";
}
/* ---------- Erinnerungen (lokal, Intervall-Check) ---------- */
function renderSettings() {
  $("#remind-toggle").checked = !!db.remind.on;
  $("#remind-morning").value = db.remind.morning || "07:30";
  $("#remind-evening").value = db.remind.evening || "21:00";
  $("#store-state").textContent = t(persistOK ? "store_local" : "store_memory");
}
$("#remind-toggle").addEventListener("change", (e) => {
  const on = e.target.checked;
  const apply = (ok) => {
    db.remind.on = ok;
    if (!ok) e.target.checked = false;
    save(); renderSettings();
    toast(t(ok ? "remind_saved" : "store_local"));
  };
  if (on && "Notification" in window && Notification.permission === "default") {
    Notification.requestPermission().then((p) => {
      if (p !== "granted") { apply(false); toast(t("remind_denied")); }
      else apply(true);
    }).catch(() => apply(true));
  } else if (on && "Notification" in window && Notification.permission === "denied") {
    apply(false); toast(t("remind_denied"));
  } else apply(on);
});
$("#remind-morning").addEventListener("change", (e) => { db.remind.morning = e.target.value || "07:30"; save(); });
$("#remind-evening").addEventListener("change", (e) => { db.remind.evening = e.target.value || "21:00"; save(); });
function checkReminders() {
  if (!db.remind.on) return;
  if (!("Notification" in window) || Notification.permission !== "granted") return;
  const now = new Date();
  const hm = String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0");
  [db.remind.morning, db.remind.evening].forEach((slot) => {
    if (!slot || slot !== hm) return;
    const fk = todayISO() + "@" + slot;
    if (db.remind.fired[fk]) return;
    db.remind.fired[fk] = true;
    save();
    try {
      const q = db.quest.date === todayISO() && db.quest.text ? db.quest.text : t("quest_title");
      new Notification("OutTrack", { body: q });
    } catch { /* still */ }
  });
}
setInterval(checkReminders, 30000);

/* ---------- Rechtliches (maßgeblich Deutsch) ---------- */
const LEGAL_TITLE = { privacy: "legal_privacy", terms: "legal_terms", refund: "legal_refund", cookies: "legal_cookies", imprint: "legal_imprint", licenses: "legal_licenses" };
const LEGAL_BODY = {
de: {
  privacy: "<h4>1. Keine Server, keine Tracker</h4><p>OutTrack speichert alle Daten ausschließlich lokal auf deinem Gerät (localStorage). Es gibt keine Accounts, keine Cookies, keine Analyse-Tools, keine Datenübertragung an uns oder Dritte.</p><h4>2. Fotos</h4><p>Beweisfotos werden verkleinert (320 px, JPEG) ebenfalls nur lokal gespeichert und nie hochgeladen.</p><h4>3. Deine Rechte</h4><p>Du kannst deine Daten jederzeit per Export sichern und per „Alle Daten löschen“ entfernen.</p>",
  terms: "<h4>1. Was OutTrack ist</h4><p>Ein Offline-Werkzeug für Habits, Journal, Rezepte und Fokus-Blöcke. Keine Heilversprechen, keine Ernährungsberatung, keine medizinische Beratung.</p><h4>2. Premium</h4><p>Premium wird per Pro-Code freigeschaltet und gilt auf diesem Gerät.</p><h4>3. Fair use</h4><p>Keine Guilt-Mechaniken, keine Dark Patterns — versprochen.</p>",
  refund: "<h4>Erstattung</h4><p>Da es aktuell keinen App-Store-Verkauf mit Zahlungsabwicklung gibt, findet keine Abbuchung statt. Sollte künftig ein Store-Kauf angeboten werden, gelten die Erstattungsregeln des jeweiligen Stores (Apple/Google) bzw. das gesetzliche Widerrufsrecht.</p>",
  cookies: "<h4>Cookie-Richtlinie</h4><p>OutTrack setzt keine Cookies und keine vergleichbaren Tracker ein. Der Hinweis beim Erststart betrifft ausschließlich den lokalen Gerätespeicher (Zustimmung = Speichern erlaubt, „Ohne Speichern“ = Memory-only-Modus).</p>",
  imprint: "<h4>Betreiber (Platzhalter — vor Store-Release ersetzen)</h4><p>[VORNAME NACHNAME / FIRMA]<br>[STRASSE NR, PLZ ORT]<br>[E-MAIL]<br>[TELEFON optional]</p>",
  licenses: "<h4>Lizenzen & Hinweise</h4><p>OutTrack v3.21 — eigener Code, Systemschrift, eigenes SVG-Icon, live synthetisierte WebAudio-Klänge. Keine Frameworks, keine CDNs, keine externen Schriften oder Bilder. Alle Inhalte (Texte, Rezepte) sind eigene redaktionelle Inhalte.</p>",
},
en: {
  privacy: "<h4>1. No servers, no trackers</h4><p>OutTrack stores all data exclusively locally on your device (localStorage). No accounts, no cookies, no analytics, no transfer to us or third parties.</p><h4>2. Photos</h4><p>Proof photos are downscaled (320 px JPEG) and also stored only locally — never uploaded.</p><h4>3. Your rights</h4><p>Export your data anytime, or wipe it via “Delete all data”.</p>",
  terms: "<h4>1. What OutTrack is</h4><p>An offline tool for habits, journaling, recipes and focus blocks. No health promises, no nutrition or medical advice.</p><h4>2. Premium</h4><p>Premium is unlocked via pro code and applies on this device.</p><h4>3. Fair use</h4><p>No guilt mechanics, no dark patterns — promised.</p>",
  refund: "<h4>Refunds</h4><p>There is currently no store sale with payment processing, so no charge occurs. If a store purchase is offered later, that store's refund rules (Apple/Google) and statutory withdrawal rights apply.</p>",
  cookies: "<h4>Cookie policy</h4><p>OutTrack sets no cookies and no similar trackers. The first-start notice only concerns local device storage (consent = saving allowed, “Without saving” = memory-only mode).</p>",
  imprint: "<h4>Operator (placeholder — replace before store release)</h4><p>[NAME / COMPANY]<br>[STREET, ZIP CITY]<br>[EMAIL]<br>[PHONE optional]</p>",
  licenses: "<h4>Licenses & notices</h4><p>OutTrack v3.21 — own code, system font, own SVG icon, live-synthesized WebAudio sounds. No frameworks, no CDNs, no external fonts or images.</p>",
},
};
$$("[data-legal]").forEach((b) => b.addEventListener("click", () => {
  const k = b.dataset.legal;
  $("#legal-title").textContent = t(LEGAL_TITLE[k]);
  const body = (LEGAL_BODY[db.lang] && LEGAL_BODY[db.lang][k]) || LEGAL_BODY.de[k] || "";
  $("#legal-body").innerHTML = body;
  $("#legal-sheet").hidden = false;
  $("#legal-backdrop").hidden = false;
}));
const closeLegal = () => { $("#legal-sheet").hidden = true; $("#legal-backdrop").hidden = true; };
$("#legal-close").addEventListener("click", closeLegal);
$("#legal-backdrop").addEventListener("click", closeLegal);

/* ---------- Export / Löschen / Consent ---------- */
$("#export-data").addEventListener("click", () => {
  try {
    const blob = new Blob([JSON.stringify(db)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "outtrack-export.json";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    toast(t("export_ok"));
  } catch { toast(t("export_ok")); }
});
$("#reset-data").addEventListener("click", () => {
  if (!window.confirm(t("reset_confirm"))) return;
  const lang = db.lang;
  try { localStorage.removeItem(KEY); } catch { /* still */ }
  db = DEFAULTS();
  db.lang = lang;
  save(); renderAll(); go("hub");
  toast(t("reset_done"));
});
function initConsent() {
  let c = null;
  try { c = localStorage.getItem(CONSENT_KEY); } catch { c = "no"; }
  if (c === null) $("#cookie-banner").hidden = false;
}
$("#cookie-accept").addEventListener("click", () => {
  persistOK = true;
  try { localStorage.setItem(CONSENT_KEY, "yes"); } catch { /* still */ }
  $("#cookie-banner").hidden = true;
  save(); renderSettings();
});
$("#cookie-decline").addEventListener("click", () => {
  persistOK = false;
  try { localStorage.setItem(CONSENT_KEY, "no"); } catch { /* still */ }
  $("#cookie-banner").hidden = true;
  renderSettings();
});

/* ---------- Init ---------- */
load();
if ($("#focus-input")) $("#focus-input").value = db.focusText || "";
try { // Widgets-Hinweis nur mobil/installiert — nicht auf GitHub-Pages-Desktop
  const standalone = window.matchMedia && window.matchMedia("(display-mode: standalone)").matches;
  const mobileUA = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent || "");
  const touchSmall = ("ontouchstart" in window) && Math.min(screen.width || 9999, screen.height || 9999) < 600;
  if (standalone || mobileUA || touchSmall) document.body.classList.add("is-mobile");
} catch { /* still */ }
initConsent();
renderAll();
go("hub");
if (!db.tutorialSeen) showTutorial();
drawTimer(); syncCustomFields();
try { // Splash: kurz, skippbar, Reduced-Motion-sicher
  const sp = $("#splash");
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hide = () => sp && sp.classList.add("hide");
  if (sp) sp.addEventListener("click", hide);
  if (reduce) hide(); else setTimeout(hide, 750);
} catch { /* still */ }
checkReminders();
window.__ot = { go, t, dayProgress, setDuration, get db() { return db; }, STR };

