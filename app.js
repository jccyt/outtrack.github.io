/* OutTrack v2.2 — i18n (de/en/ru/es/fr), offline-first */
const KEY = "outtrack_v2";
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
de: { tab_hub: "Hub", tab_journal: "Journal", tab_outdo: "Outdo", tab_food: "Food", tab_stats: "Stats", tab_settings: "Einst.",
nav_hub: "Hub", streak_days: "Tage Streak", sec_habits: "Habits", add_new: "+ Neu",
ov_title: "Progressive Overload", ov_sub: "Kraft loggen — die App meldet PRs und zeigt Progression.",
ex_ph: "Übung, z. B. Bankdrücken", lift_kg: "kg", lift_reps: "Wdh.", lift_sets: "Sätze", lift_save: "Satz loggen",
rc_title: "Fokus-Check", rc_sub: "Greifst du gerade zum Handy, obwohl du arbeiten wolltest? 60 Sekunden Pause statt Autopilot.", rc_open: "Impuls umleiten",
launch_title: "Outdo Mode starten", launch_sub: "45 Min. Deep Work", hub_foot: "Antippen zum Abhaken. Alles wird offline gespeichert.",
eyebrow_reflexion: "Reflexion", nav_journal: "Journal", j_title_ph: "Titel (optional)", j_text_ph: "Was beschäftigt dich gerade? Schreib es auf …",
j_save: "Eintrag speichern", j_consent: "Wird nur lokal auf deinem Gerät gespeichert.", sec_entries: "Einträge", j_search_ph: "Suchen",
j_empty: "Noch keine Einträge. Schreib oben deinen ersten Gedanken auf.", j_del: "Löschen",
eyebrow_deep: "Deep Work", nav_focus: "Outdo Mode", custom_apply: "Eigene Zeit übernehmen", timer_start: "Block starten",
timer_pause: "Pause", timer_resume: "Weiter", timer_reset: "Reset", sound_lbl: "Umgebung", snd_off: "Aus — Stille",
snd_white: "Weißes Rauschen", snd_rain: "Regen", snd_synth: "Cyberpunk Synth",
focus_q: "Was ist dein einzelner Fokus für diesen Block?", focus_ph: "z. B. OutTrack v1 fertigstellen",
focus_exit: "Zum Hub", focus_fs: "Vollbild", st_ready: "Bereit", st_paused: "Pausiert", st_go: "Fokus — los", st_done: "Geschafft ✓",
t_hours: "Std.", t_minutes: "Min.", t_seconds: "Sek.", time_min: "{n} Min.",
eyebrow_energy: "Energie", nav_food: "Food-Tipps", mf_all: "Alle", mf_protein: "Protein", mf_energy: "Energie", mf_light: "Light",
meal_hint: "Tippen für einen Tipp", meal_new: "Neuer Tipp", sec_all: "Alle Gerichte",
food_foot: "Allgemeine Rezeptideen, keine Ernährungsberatung.", r_ing: "Zutaten", r_steps: "Zubereitung",
cat_protein: "Protein", cat_energie: "Energie", cat_light: "Light",
eyebrow_cons: "Konsistenz", nav_stats: "Stats", lb_title: "Bestenliste", lb_sub: "Deine Rekorde — nur auf diesem Gerät.",
pg_title: "Overload-Progression", pg_sub: "Volumen der letzten Einheiten pro Übung.", gr_title: "Wochenraster",
gr_sub: "Letzte 35 Tage — dunkler = mehr geschafft.", lg_less: "Wenig", lg_more: "Viel", id_title: "Identität",
id_sub: "Jeder Habit = +10 Punkte. Umleitung = +5 MIND.", fl_title: "Fokus-Log", lg_sec: "Rechtliches & Info",
dt_title: "Daten", btn_export: "Exportieren", btn_reset: "Alle Daten löschen",
legal_privacy: "Datenschutzerklärung", legal_terms: "Nutzungsbedingungen", legal_refund: "Erstattungsrichtlinie",
legal_cookies: "Cookie-Richtlinie", legal_imprint: "Betreiber & Kontakt", legal_licenses: "Lizenzen & Hinweise",
eyebrow_app: "App", nav_settings: "Einstellungen", set_lang_title: "Sprache", set_lang_sub: "Gilt sofort für die gesamte App.",
set_store_title: "Speicherung", store_on: "Lokale Speicherung ist aktiv.", store_off: "Speicherung ist aus — Daten gelten nur für diese Sitzung.",
set_info_title: "Info", sh_title: "Neuer Habit", sh_name_ph: "z. B. Tief lesen", sh_cancel: "Abbrechen", sh_add: "Hinzufügen",
legal_close: "Schließen", cb_text: "Keine Cookies, keine Tracker — nur lokaler Gerätespeicher.",
cb_accept: "Verstanden", cb_decline: "Ohne Speichern", rd_title: "60 Sekunden — sonst nichts",
rd_sub: "Eine der drei Mikro-Aktionen wählen, dann ist der Impuls vorbei.", rd_cancel: "Abbrechen",
ra_water: "Wasser trinken", ra_pushups: "10 Liegestütze", ra_read: "Fokus laut lesen",
area_mind: "Mind", area_body: "Body", area_craft: "Craft",
ts_perfect: "Perfekter Tag", ts_pts: "+10 {a}", ts_habit_del: "Habit gelöscht", ts_habit_add: "Habit hinzugefügt ✓",
ts_name_first: "Bitte Namen eingeben", ts_write_first: "Schreib erst etwas …", ts_saved: "Gespeichert ✓",
ts_entry_del: "Eintrag gelöscht", ts_logged: "Einheit geloggt ✓", ts_pr: "Neuer PR: {ex} · {kg} kg",
ts_ex_first: "Bitte Übung eingeben", ts_reps_check: "Wdh. und Sätze prüfen", ts_deleted: "Gelöscht",
ts_redirected: "Umgeleitet ✓ +5 MIND", ts_block_done: "Block geschafft ✓", ts_fs_na: "Vollbild nicht verfügbar",
ts_time_zero: "Bitte eine Zeit über 0 eingeben", ts_timer: "Timer", ts_exported: "Export heruntergeladen",
ts_fresh: "Neustart ✓", ts_store_on: "Speicherung aktiviert", ts_store_session: "Nur diese Sitzung — nichts wird gespeichert",
ts_lang: "Sprache: Deutsch", confirm_reset: "Alle OutTrack-Daten löschen?", lb_prs: "Kraft-PRs gesamt",
lb_red: "Impulse umgeleitet", lb_streak: "Aktueller Streak", lb_days: "Tage", lb_empty: "Noch keine Daten.",
pg_empty: "Noch keine Kraft-Einheiten geloggt.", pg_stable: "stabil", pg_vol: "kg Vol.", fl_empty: "Noch keine Fokus-Blöcke.",
untitled: "ohne Titel", to_next: "bis", pts: "Pts", level: "Level", del_aria: "{label} löschen", best: "Best",
set_pro_title: "OutTrack Premium", set_pro_free: "Free-Version", set_pro_active: "Premium aktiv — alle Features offen.",
feat_journal: "Journal & Einträge", feat_food: "136 Food-Tipps mit Rezepten", feat_lifts: "Progressive Overload + Progression",
feat_redirect: "Fokus-Check (Impuls-Umleitung)", feat_stats: "Bestenliste & Rekorde", pro_code_ph: "Pro-Code, z. B. OT-…",
pro_unlock: "Freischalten", pro_invalid: "Code ungültig", pro_unlocked: "Premium freigeschaltet ✓",
pro_locked: "Premium-Feature — siehe Einstellungen", pro_lock: "Zu Free wechseln",
pro_free_note: "Kostenlos: Hub, Outdo-Timer, Basis-Stats",
legal_auth: "Hinweis: Verbindlich ist die deutsche Fassung." },
en: { tab_hub: "Hub", tab_journal: "Journal", tab_outdo: "Outdo", tab_food: "Food", tab_stats: "Stats", tab_settings: "Settings",
nav_hub: "Hub", streak_days: "day streak", sec_habits: "Habits", add_new: "+ New",
ov_title: "Progressive Overload", ov_sub: "Log strength — the app reports PRs and shows progression.",
ex_ph: "Exercise, e.g. Bench press", lift_kg: "kg", lift_reps: "reps", lift_sets: "sets", lift_save: "Log set",
rc_title: "Focus check", rc_sub: "Reaching for your phone when you meant to work? 60 seconds of pause instead of autopilot.", rc_open: "Redirect impulse",
launch_title: "Start Outdo Mode", launch_sub: "45 min deep work", hub_foot: "Tap to check off. Everything is stored offline.",
eyebrow_reflexion: "Reflection", nav_journal: "Journal", j_title_ph: "Title (optional)", j_text_ph: "What's on your mind? Write it down …",
j_save: "Save entry", j_consent: "Stored only locally on your device.", sec_entries: "Entries", j_search_ph: "Search",
j_empty: "No entries yet. Write your first thought above.", j_del: "Delete",
eyebrow_deep: "Deep Work", nav_focus: "Outdo Mode", custom_apply: "Apply custom time", timer_start: "Start block",
timer_pause: "Pause", timer_resume: "Resume", timer_reset: "Reset", sound_lbl: "Ambience", snd_off: "Off — silence",
snd_white: "White noise", snd_rain: "Rain", snd_synth: "Cyberpunk synth",
focus_q: "What is your single focus for this block?", focus_ph: "e.g. Finish OutTrack v1",
focus_exit: "To Hub", focus_fs: "Fullscreen", st_ready: "Ready", st_paused: "Paused", st_go: "Focus — go", st_done: "Done ✓",
t_hours: "hrs", t_minutes: "min", t_seconds: "sec", time_min: "{n} min",
eyebrow_energy: "Energy", nav_food: "Food ideas", mf_all: "All", mf_protein: "Protein", mf_energy: "Energy", mf_light: "Light",
meal_hint: "Tap for an idea", meal_new: "New idea", sec_all: "All dishes",
food_foot: "General recipe ideas, no nutrition advice.", r_ing: "Ingredients", r_steps: "Steps",
cat_protein: "Protein", cat_energie: "Energy", cat_light: "Light",
eyebrow_cons: "Consistency", nav_stats: "Stats", lb_title: "Leaderboard", lb_sub: "Your records — on this device only.",
pg_title: "Overload progression", pg_sub: "Volume of recent sessions per exercise.", gr_title: "Weekly grid",
gr_sub: "Last 35 days — darker = more done.", lg_less: "Less", lg_more: "More", id_title: "Identity",
id_sub: "Each habit = +10 points. Redirect = +5 MIND.", fl_title: "Focus log", lg_sec: "Legal & info",
dt_title: "Data", btn_export: "Export", btn_reset: "Delete all data",
legal_privacy: "Privacy policy", legal_terms: "Terms of use", legal_refund: "Refund policy",
legal_cookies: "Cookie policy", legal_imprint: "Operator & contact", legal_licenses: "Licenses & credits",
eyebrow_app: "App", nav_settings: "Settings", set_lang_title: "Language", set_lang_sub: "Applies instantly across the app.",
set_store_title: "Storage", store_on: "Local storage is enabled.", store_off: "Storage is off — data lasts for this session only.",
set_info_title: "About", sh_title: "New habit", sh_name_ph: "e.g. Deep reading", sh_cancel: "Cancel", sh_add: "Add",
legal_close: "Close", cb_text: "No cookies, no trackers — only local device storage.",
cb_accept: "Got it", cb_decline: "No storage", rd_title: "60 seconds — nothing else",
rd_sub: "Pick one of the three micro-actions, then the impulse is gone.", rd_cancel: "Cancel",
ra_water: "Drink water", ra_pushups: "10 push-ups", ra_read: "Read focus aloud",
area_mind: "Mind", area_body: "Body", area_craft: "Craft",
ts_perfect: "Perfect day", ts_pts: "+10 {a}", ts_habit_del: "Habit deleted", ts_habit_add: "Habit added ✓",
ts_name_first: "Please enter a name", ts_write_first: "Write something first …", ts_saved: "Saved ✓",
ts_entry_del: "Entry deleted", ts_logged: "Set logged ✓", ts_pr: "New PR: {ex} · {kg} kg",
ts_ex_first: "Please enter an exercise", ts_reps_check: "Check reps and sets", ts_deleted: "Deleted",
ts_redirected: "Redirected ✓ +5 MIND", ts_block_done: "Block complete ✓", ts_fs_na: "Fullscreen unavailable",
ts_time_zero: "Please enter a time above 0", ts_timer: "Timer", ts_exported: "Export downloaded",
ts_fresh: "Fresh start ✓", ts_store_on: "Storage enabled", ts_store_session: "This session only — nothing is saved",
ts_lang: "Language: English", confirm_reset: "Delete all OutTrack data?", lb_prs: "Total strength PRs",
lb_red: "Impulses redirected", lb_streak: "Current streak", lb_days: "days", lb_empty: "No data yet.",
pg_empty: "No strength sessions logged yet.", pg_stable: "stable", pg_vol: "kg vol.", fl_empty: "No focus blocks yet.",
untitled: "untitled", to_next: "to", pts: "pts", level: "Level", del_aria: "Delete {label}", best: "Best",
set_pro_title: "OutTrack Premium", set_pro_free: "Free plan", set_pro_active: "Premium active — all features open.",
feat_journal: "Journal & entries", feat_food: "136 food ideas with recipes", feat_lifts: "Progressive overload + progression",
feat_redirect: "Focus check (impulse redirect)", feat_stats: "Leaderboard & records", pro_code_ph: "Pro code, e.g. OT-…",
pro_unlock: "Unlock", pro_invalid: "Invalid code", pro_unlocked: "Premium unlocked ✓",
pro_locked: "Premium feature — see Settings", pro_lock: "Switch to Free",
pro_free_note: "Free: Hub, Outdo timer, basic stats",
legal_auth: "Note: the German version is authoritative." },
ru: { tab_hub: "Хаб", tab_journal: "Журнал", tab_outdo: "Аутдо", tab_food: "Еда", tab_stats: "Статы", tab_settings: "Настр.",
nav_hub: "Хаб", streak_days: "дней серия", sec_habits: "Привычки", add_new: "+ Новая",
ov_title: "Прогрессивная перегрузка", ov_sub: "Записывай силовые — приложение отметит рекорды и покажет прогресс.",
ex_ph: "Упражнение, напр. Жим лёжа", lift_kg: "кг", lift_reps: "повт.", lift_sets: "подх.", lift_save: "Записать подход",
rc_title: "Фокус-проверка", rc_sub: "Тянешься к телефону, хотя хотел работать? 60 секунд паузы вместо автопилота.", rc_open: "Перенаправить импульс",
launch_title: "Запустить Outdo Mode", launch_sub: "45 мин глубокой работы", hub_foot: "Нажми, чтобы отметить. Всё хранится офлайн.",
eyebrow_reflexion: "Рефлексия", nav_journal: "Журнал", j_title_ph: "Заголовок (необязательно)", j_text_ph: "Что тебя беспокоит? Напиши …",
j_save: "Сохранить запись", j_consent: "Хранится только локально на твоём устройстве.", sec_entries: "Записи", j_search_ph: "Поиск",
j_empty: "Записей пока нет. Напиши первую мысль выше.", j_del: "Удалить",
eyebrow_deep: "Глубокая работа", nav_focus: "Outdo Mode", custom_apply: "Применить своё время", timer_start: "Начать блок",
timer_pause: "Пауза", timer_resume: "Дальше", timer_reset: "Сброс", sound_lbl: "Фон", snd_off: "Выкл — тишина",
snd_white: "Белый шум", snd_rain: "Дождь", snd_synth: "Киберпанк-синт",
focus_q: "Какой у тебя единственный фокус на этот блок?", focus_ph: "напр. Доделать OutTrack v1",
focus_exit: "В хаб", focus_fs: "Во весь экран", st_ready: "Готов", st_paused: "Пауза", st_go: "Фокус — вперёд", st_done: "Готово ✓",
t_hours: "ч", t_minutes: "мин", t_seconds: "с", time_min: "{n} мин",
eyebrow_energy: "Энергия", nav_food: "Идеи еды", mf_all: "Все", mf_protein: "Белок", mf_energy: "Энергия", mf_light: "Лёгкое",
meal_hint: "Нажми для идеи", meal_new: "Новая идея", sec_all: "Все блюда",
food_foot: "Общие идеи рецептов, не рекомендации по питанию.", r_ing: "Ингредиенты", r_steps: "Приготовление",
cat_protein: "Белок", cat_energie: "Энергия", cat_light: "Лёгкое",
eyebrow_cons: "Регулярность", nav_stats: "Статы", lb_title: "Рекорды", lb_sub: "Твои рекорды — только на этом устройстве.",
pg_title: "Прогресс нагрузки", pg_sub: "Объём последних тренировок по упражнениям.", gr_title: "Сетка недель",
gr_sub: "Последние 35 дней — темнее = больше сделано.", lg_less: "Меньше", lg_more: "Больше", id_title: "Идентичность",
id_sub: "Каждая привычка = +10 очков. Перенаправление = +5 MIND.", fl_title: "Лог фокуса", lg_sec: "Право и инфо",
dt_title: "Данные", btn_export: "Экспорт", btn_reset: "Удалить все данные",
legal_privacy: "Конфиденциальность", legal_terms: "Условия использования", legal_refund: "Возвраты",
legal_cookies: "Про куки", legal_imprint: "Оператор и контакт", legal_licenses: "Лицензии",
eyebrow_app: "Приложение", nav_settings: "Настройки", set_lang_title: "Язык", set_lang_sub: "Применяется сразу ко всему приложению.",
set_store_title: "Хранилище", store_on: "Локальное хранилище включено.", store_off: "Хранилище выключено — данные только на эту сессию.",
set_info_title: "О приложении", sh_title: "Новая привычка", sh_name_ph: "напр. Глубокое чтение", sh_cancel: "Отмена", sh_add: "Добавить",
legal_close: "Закрыть", cb_text: "Никаких куки и трекеров — только локальное хранилище устройства.",
cb_accept: "Понятно", cb_decline: "Без хранения", rd_title: "60 секунд — и ничего больше",
rd_sub: "Выбери одно из трёх микродействий, и импульс пройдёт.", rd_cancel: "Отмена",
ra_water: "Выпить воды", ra_pushups: "10 отжиманий", ra_read: "Прочитать фокус вслух",
area_mind: "Разум", area_body: "Тело", area_craft: "Дело",
ts_perfect: "Идеальный день", ts_pts: "+10 {a}", ts_habit_del: "Привычка удалена", ts_habit_add: "Привычка добавлена ✓",
ts_name_first: "Введи название", ts_write_first: "Сначала напиши что-нибудь …", ts_saved: "Сохранено ✓",
ts_entry_del: "Запись удалена", ts_logged: "Подход записан ✓", ts_pr: "Новый рекорд: {ex} · {kg} кг",
ts_ex_first: "Введи упражнение", ts_reps_check: "Проверь повторы и подходы", ts_deleted: "Удалено",
ts_redirected: "Перенаправлено ✓ +5 MIND", ts_block_done: "Блок завершён ✓", ts_fs_na: "Полный экран недоступен",
ts_time_zero: "Введи время больше 0", ts_timer: "Таймер", ts_exported: "Экспорт скачан",
ts_fresh: "С чистого листа ✓", ts_store_on: "Хранилище включено", ts_store_session: "Только эта сессия — ничего не сохраняется",
ts_lang: "Язык: русский", confirm_reset: "Удалить все данные OutTrack?", lb_prs: "Всего силовых рекордов",
lb_red: "Импульсов перенаправлено", lb_streak: "Текущая серия", lb_days: "дней", lb_empty: "Данных пока нет.",
pg_empty: "Тренировок пока не записано.", pg_stable: "стабильно", pg_vol: "кг объёма", fl_empty: "Фокус-блоков пока нет.",
untitled: "без названия", to_next: "до", pts: "очк.", level: "Уровень", del_aria: "Удалить: {label}", best: "Рекорд",
set_pro_title: "OutTrack Premium", set_pro_free: "Бесплатная версия", set_pro_active: "Premium активен — всё открыто.",
feat_journal: "Журнал и записи", feat_food: "136 идей еды с рецептами", feat_lifts: "Прогрессивная нагрузка + прогресс",
feat_redirect: "Фокус-проверка", feat_stats: "Рекорды", pro_code_ph: "Про-код, напр. OT-…",
pro_unlock: "Разблокировать", pro_invalid: "Неверный код", pro_unlocked: "Premium разблокирован ✓",
pro_locked: "Функция Premium — см. настройки", pro_lock: "Перейти на Free",
pro_free_note: "Бесплатно: хаб, таймер, базовая статистика",
legal_auth: "Примечание: обязательной является немецкая версия." },
es: { tab_hub: "Hub", tab_journal: "Diario", tab_outdo: "Outdo", tab_food: "Comida", tab_stats: "Stats", tab_settings: "Ajustes",
nav_hub: "Hub", streak_days: "días de racha", sec_habits: "Hábitos", add_new: "+ Nuevo",
ov_title: "Sobrecarga progresiva", ov_sub: "Registra fuerza — la app detecta récords y muestra progresión.",
ex_ph: "Ejercicio, p. ej. Press de banca", lift_kg: "kg", lift_reps: "reps", lift_sets: "series", lift_save: "Registrar serie",
rc_title: "Chequeo de foco", rc_sub: "¿Agarrando el móvil cuando querías trabajar? 60 segundos de pausa en vez de piloto automático.", rc_open: "Redirigir impulso",
launch_title: "Iniciar Outdo Mode", launch_sub: "45 min de trabajo profundo", hub_foot: "Toca para completar. Todo se guarda sin conexión.",
eyebrow_reflexion: "Reflexión", nav_journal: "Diario", j_title_ph: "Título (opcional)", j_text_ph: "¿Qué te preocupa? Escríbelo …",
j_save: "Guardar entrada", j_consent: "Solo se guarda localmente en tu dispositivo.", sec_entries: "Entradas", j_search_ph: "Buscar",
j_empty: "Aún no hay entradas. Escribe tu primer pensamiento arriba.", j_del: "Eliminar",
eyebrow_deep: "Trabajo profundo", nav_focus: "Outdo Mode", custom_apply: "Aplicar tiempo propio", timer_start: "Iniciar bloque",
timer_pause: "Pausa", timer_resume: "Seguir", timer_reset: "Reset", sound_lbl: "Ambiente", snd_off: "Off — silencio",
snd_white: "Ruido blanco", snd_rain: "Lluvia", snd_synth: "Synth cyberpunk",
focus_q: "¿Cuál es tu único foco para este bloque?", focus_ph: "p. ej. Terminar OutTrack v1",
focus_exit: "Al Hub", focus_fs: "Pantalla completa", st_ready: "Listo", st_paused: "En pausa", st_go: "Foco — vamos", st_done: "Listo ✓",
t_hours: "h", t_minutes: "min", t_seconds: "s", time_min: "{n} min",
eyebrow_energy: "Energía", nav_food: "Ideas de comida", mf_all: "Todo", mf_protein: "Proteína", mf_energy: "Energía", mf_light: "Ligero",
meal_hint: "Toca para una idea", meal_new: "Nueva idea", sec_all: "Todos los platos",
food_foot: "Ideas generales, no es asesoría nutricional.", r_ing: "Ingredientes", r_steps: "Preparación",
cat_protein: "Proteína", cat_energie: "Energía", cat_light: "Ligero",
eyebrow_cons: "Constancia", nav_stats: "Stats", lb_title: "Récords", lb_sub: "Tus récords — solo en este dispositivo.",
pg_title: "Progresión de carga", pg_sub: "Volumen de sesiones recientes por ejercicio.", gr_title: "Cuadrícula semanal",
gr_sub: "Últimos 35 días — más oscuro = más logrado.", lg_less: "Menos", lg_more: "Más", id_title: "Identidad",
id_sub: "Cada hábito = +10 puntos. Redirección = +5 MIND.", fl_title: "Registro de foco", lg_sec: "Legal e info",
dt_title: "Datos", btn_export: "Exportar", btn_reset: "Borrar todos los datos",
legal_privacy: "Privacidad", legal_terms: "Términos de uso", legal_refund: "Reembolsos",
legal_cookies: "Política de cookies", legal_imprint: "Operador y contacto", legal_licenses: "Licencias",
eyebrow_app: "App", nav_settings: "Ajustes", set_lang_title: "Idioma", set_lang_sub: "Se aplica al instante en toda la app.",
set_store_title: "Almacenamiento", store_on: "Almacenamiento local activado.", store_off: "Almacenamiento off — datos solo de esta sesión.",
set_info_title: "Info", sh_title: "Nuevo hábito", sh_name_ph: "p. ej. Lectura profunda", sh_cancel: "Cancelar", sh_add: "Añadir",
legal_close: "Cerrar", cb_text: "Sin cookies ni rastreadores — solo almacenamiento local.",
cb_accept: "Entendido", cb_decline: "Sin guardar", rd_title: "60 segundos — nada más",
rd_sub: "Elige una de las tres micro-acciones y el impulso pasará.", rd_cancel: "Cancelar",
ra_water: "Beber agua", ra_pushups: "10 flexiones", ra_read: "Leer el foco en voz alta",
area_mind: "Mente", area_body: "Cuerpo", area_craft: "Oficio",
ts_perfect: "Día perfecto", ts_pts: "+10 {a}", ts_habit_del: "Hábito eliminado", ts_habit_add: "Hábito añadido ✓",
ts_name_first: "Ponle un nombre", ts_write_first: "Escribe algo primero …", ts_saved: "Guardado ✓",
ts_entry_del: "Entrada eliminada", ts_logged: "Serie registrada ✓", ts_pr: "Nuevo récord: {ex} · {kg} kg",
ts_ex_first: "Indica el ejercicio", ts_reps_check: "Revisa reps y series", ts_deleted: "Eliminado",
ts_redirected: "Redirigido ✓ +5 MIND", ts_block_done: "Bloque completado ✓", ts_fs_na: "Pantalla completa no disponible",
ts_time_zero: "Pon un tiempo mayor que 0", ts_timer: "Temporizador", ts_exported: "Exportación descargada",
ts_fresh: "Empezar de cero ✓", ts_store_on: "Almacenamiento activado", ts_store_session: "Solo esta sesión — nada se guarda",
ts_lang: "Idioma: español", confirm_reset: "¿Borrar todos los datos de OutTrack?", lb_prs: "Récords de fuerza totales",
lb_red: "Impulsos redirigidos", lb_streak: "Racha actual", lb_days: "días", lb_empty: "Aún no hay datos.",
pg_empty: "Aún no hay sesiones registradas.", pg_stable: "estable", pg_vol: "kg vol.", fl_empty: "Aún no hay bloques de foco.",
untitled: "sin título", to_next: "para", pts: "pts", level: "Nivel", del_aria: "Eliminar {label}", best: "Récord",
set_pro_title: "OutTrack Premium", set_pro_free: "Versión gratis", set_pro_active: "Premium activo — todo abierto.",
feat_journal: "Diario y entradas", feat_food: "136 ideas de comida con recetas", feat_lifts: "Sobrecarga progresiva + progresión",
feat_redirect: "Chequeo de foco", feat_stats: "Récords", pro_code_ph: "Código Pro, p. ej. OT-…",
pro_unlock: "Desbloquear", pro_invalid: "Código inválido", pro_unlocked: "Premium desbloqueado ✓",
pro_locked: "Función Premium — ver Ajustes", pro_lock: "Pasar a Free",
pro_free_note: "Gratis: Hub, temporizador, stats básicos",
legal_auth: "Nota: la versión alemana es la vinculante." },
fr: { tab_hub: "Hub", tab_journal: "Journal", tab_outdo: "Outdo", tab_food: "Repas", tab_stats: "Stats", tab_settings: "Réglages",
nav_hub: "Hub", streak_days: "jours de série", sec_habits: "Habitudes", add_new: "+ Nouveau",
ov_title: "Surcharge progressive", ov_sub: "Note ta force — l'app détecte les records et montre la progression.",
ex_ph: "Exercice, p. ex. Développé couché", lift_kg: "kg", lift_reps: "réps", lift_sets: "séries", lift_save: "Noter la série",
rc_title: "Contrôle focus", rc_sub: "La main sur le téléphone alors que tu voulais travailler ? 60 secondes de pause au lieu du pilote auto.", rc_open: "Rediriger l'impulsion",
launch_title: "Lancer Outdo Mode", launch_sub: "45 min de deep work", hub_foot: "Touche pour valider. Tout est stocké hors ligne.",
eyebrow_reflexion: "Réflexion", nav_journal: "Journal", j_title_ph: "Titre (optionnel)", j_text_ph: "Qu'est-ce qui te préoccupe ? Écris-le …",
j_save: "Enregistrer", j_consent: "Stocké uniquement en local sur ton appareil.", sec_entries: "Entrées", j_search_ph: "Rechercher",
j_empty: "Aucune entrée. Écris ta première pensée ci-dessus.", j_del: "Supprimer",
eyebrow_deep: "Deep work", nav_focus: "Outdo Mode", custom_apply: "Appliquer mon temps", timer_start: "Démarrer le bloc",
timer_pause: "Pause", timer_resume: "Reprendre", timer_reset: "Reset", sound_lbl: "Ambiance", snd_off: "Off — silence",
snd_white: "Bruit blanc", snd_rain: "Pluie", snd_synth: "Synthé cyberpunk",
focus_q: "Quel est ton unique focus pour ce bloc ?", focus_ph: "p. ex. Finir OutTrack v1",
focus_exit: "Vers Hub", focus_fs: "Plein écran", st_ready: "Prêt", st_paused: "En pause", st_go: "Focus — go", st_done: "Terminé ✓",
t_hours: "h", t_minutes: "min", t_seconds: "s", time_min: "{n} min",
eyebrow_energy: "Énergie", nav_food: "Idées repas", mf_all: "Tout", mf_protein: "Protéines", mf_energy: "Énergie", mf_light: "Léger",
meal_hint: "Touche pour une idée", meal_new: "Nouvelle idée", sec_all: "Tous les plats",
food_foot: "Idées générales, pas de conseil nutritionnel.", r_ing: "Ingrédients", r_steps: "Préparation",
cat_protein: "Protéines", cat_energie: "Énergie", cat_light: "Léger",
eyebrow_cons: "Régularité", nav_stats: "Stats", lb_title: "Records", lb_sub: "Tes records — sur cet appareil uniquement.",
pg_title: "Progression charge", pg_sub: "Volume des dernières séances par exercice.", gr_title: "Grille hebdo",
gr_sub: "35 derniers jours — plus sombre = plus accompli.", lg_less: "Moins", lg_more: "Plus", id_title: "Identité",
id_sub: "Chaque habitude = +10 points. Redirection = +5 MIND.", fl_title: "Log focus", lg_sec: "Légal & infos",
dt_title: "Données", btn_export: "Exporter", btn_reset: "Tout effacer",
legal_privacy: "Confidentialité", legal_terms: "Conditions d'utilisation", legal_refund: "Remboursements",
legal_cookies: "Politique cookies", legal_imprint: "Éditeur & contact", legal_licenses: "Licences",
eyebrow_app: "App", nav_settings: "Réglages", set_lang_title: "Langue", set_lang_sub: "S'applique aussitôt à toute l'app.",
set_store_title: "Stockage", store_on: "Stockage local activé.", store_off: "Stockage coupé — données de cette session uniquement.",
set_info_title: "Infos", sh_title: "Nouvelle habitude", sh_name_ph: "p. ex. Lecture profonde", sh_cancel: "Annuler", sh_add: "Ajouter",
legal_close: "Fermer", cb_text: "Ni cookies ni traqueurs — juste le stockage local.",
cb_accept: "Compris", cb_decline: "Sans stockage", rd_title: "60 secondes — rien d'autre",
rd_sub: "Choisis une des trois micro-actions, et l'impulsion passera.", rd_cancel: "Annuler",
ra_water: "Boire de l'eau", ra_pushups: "10 pompes", ra_read: "Lire le focus à voix haute",
area_mind: "Esprit", area_body: "Corps", area_craft: "Métier",
ts_perfect: "Journée parfaite", ts_pts: "+10 {a}", ts_habit_del: "Habitude supprimée", ts_habit_add: "Habitude ajoutée ✓",
ts_name_first: "Donne-lui un nom", ts_write_first: "Écris quelque chose d'abord …", ts_saved: "Enregistré ✓",
ts_entry_del: "Entrée supprimée", ts_logged: "Série notée ✓", ts_pr: "Nouveau record : {ex} · {kg} kg",
ts_ex_first: "Indique l'exercice", ts_reps_check: "Vérifie réps et séries", ts_deleted: "Supprimé",
ts_redirected: "Redirigé ✓ +5 MIND", ts_block_done: "Bloc terminé ✓", ts_fs_na: "Plein écran indisponible",
ts_time_zero: "Entre un temps supérieur à 0", ts_timer: "Minuteur", ts_exported: "Export téléchargé",
ts_fresh: "Recommencer ✓", ts_store_on: "Stockage activé", ts_store_session: "Cette session only — rien n'est sauvegardé",
ts_lang: "Langue : français", confirm_reset: "Effacer toutes les données OutTrack ?", lb_prs: "Records de force",
lb_red: "Impulsions redirigées", lb_streak: "Série actuelle", lb_days: "jours", lb_empty: "Aucune donnée.",
pg_empty: "Aucune séance notée.", pg_stable: "stable", pg_vol: "kg vol.", fl_empty: "Aucun bloc de focus.",
untitled: "sans titre", to_next: "vers", pts: "pts", level: "Niveau", del_aria: "Supprimer {label}", best: "Record",
set_pro_title: "OutTrack Premium", set_pro_free: "Version gratuite", set_pro_active: "Premium actif — tout est ouvert.",
feat_journal: "Journal et entrées", feat_food: "136 idées repas avec recettes", feat_lifts: "Surcharge progressive + progression",
feat_redirect: "Contrôle focus", feat_stats: "Records", pro_code_ph: "Code Pro, p. ex. OT-…",
pro_unlock: "Débloquer", pro_invalid: "Code invalide", pro_unlocked: "Premium débloqué ✓",
pro_locked: "Fonction Premium — voir Réglages", pro_lock: "Repasser en gratuit",
pro_free_note: "Gratuit : Hub, minuteur, stats de base",
legal_auth: "Note : la version allemande fait foi." } };

const QUOTES = {
de: ["Kleine Siege summieren sich.", "Übertriff dein gestriges Ich.", "Disziplin ist Identität.", "Deep Work schlägt Busy Work.", "Erst die Non-Negotiables.", "Bleib scharf. Bleib dran."],
en: ["Small wins compound.", "Outdo yesterday's you.", "Discipline is identity.", "Deep work beats busy work.", "Non-negotiables first.", "Stay sharp. Stay consistent."],
ru: ["Маленькие победы складываются.", "Превзойди вчерашнего себя.", "Дисциплина — это идентичность.", "Глубокая работа бьёт суету.", "Сначала обязательное.", "Оставайся собранным. Продолжай."],
es: ["Las pequeñas victorias se acumulan.", "Supera a tu yo de ayer.", "La disciplina es identidad.", "El trabajo profundo supera al ajetreo.", "Primero lo innegociable.", "Mantente enfocado. Sigue adelante."],
fr: ["Les petites victoires s'accumulent.", "Surpasse ton toi d'hier.", "La discipline, c'est l'identité.", "Le deep work bat l'agitation.", "D'abord l'essentiel.", "Reste affûté. Continue."] };

const $ = (s) => document.querySelector(s);
function t(key, vars) {
  let s = (STR[db.lang] && STR[db.lang][key]) || STR.de[key] || key;
  if (vars) for (const k in vars) s = s.replace("{" + k + "}", vars[k]);
  return s;
}
const loc = () => LOCALES[db.lang] || "de-DE";

/* ---------- Meals (de base) + translations ---------- */
const MEALS = [
  { cat: "energie", kcal: 450, mins: 10, name: "Haferflocken mit Beeren & Nüssen", desc: "Komplexe Kohlenhydrate für lange Fokus-Blöcke.",
    ing: ["60 g Haferflocken", "200 ml Milch oder Hafermilch", "1 Handvoll Beeren", "1 EL Nüsse oder Mandeln", "1 TL Honig (optional)"],
    steps: ["Haferflocken mit Milch aufkochen.", "5 Minuten quellen lassen, rühren.", "Beeren unterheben, mit Nüssen und Honig toppen."] },
  { cat: "protein", kcal: 320, mins: 5, name: "Griechischer Joghurt mit Honig", desc: "Viel Protein, kaum Aufwand.",
    ing: ["250 g griechischer Joghurt", "1 TL Honig", "1 Handvoll Walnüsse", "Zimt"],
    steps: ["Joghurt in eine Schale geben.", "Honig, Nüsse und Zimt darauf verteilen."] },
  { cat: "protein", kcal: 620, mins: 25, name: "Lachs mit Brokkoli & Reis", desc: "Omega-3 und Protein — das Performer-Essen.",
    ing: ["150 g Lachsfilet", "150 g Brokkoli", "80 g Reis (trocken)", "1 EL Olivenöl", "Zitrone, Salz, Pfeffer"],
    steps: ["Reis kochen.", "Brokkoli 5 Minuten dämpfen.", "Lachs je Seite 3–4 Minuten braten, würzen.", "Anrichten, Zitrone darüberpressen."] },
  { cat: "protein", kcal: 580, mins: 20, name: "Hähnchen-Bowl mit Quinoa", desc: "Meal-Prep-tauglich, hält lange satt.",
    ing: ["150 g Hähnchenbrust", "80 g Quinoa", "1 Paprika", "1/2 Gurke", "2 EL Joghurt", "Paprikapulver, Salz, Öl"],
    steps: ["Quinoa 15 Minuten kochen.", "Hähnchen würzen, braten, aufschneiden.", "Gemüse würfeln, Bowl schichten, Joghurt dazu."] },
  { cat: "energie", kcal: 520, mins: 12, name: "Vollkornbrot mit Ei & Avocado", desc: "Solides Frühstück vor Training oder Deep Work.",
    ing: ["2 Scheiben Vollkornbrot", "2 Eier", "1/2 Avocado", "Salz, Pfeffer, Chiliflocken"],
    steps: ["Eier 7 Minuten kochen, pellen.", "Brot toasten, Avocado zerdrücken, salzen.", "Eier darauflegen, würzen."] },
  { cat: "light", kcal: 350, mins: 25, name: "Rote Linsensuppe", desc: "Leicht, warm, eisenreich.",
    ing: ["150 g rote Linsen", "2 Karotten", "1 Zwiebel", "750 ml Gemüsebrühe", "1 TL Kreuzkümmel", "1 EL Öl"],
    steps: ["Zwiebel und Karotten anschwitzen.", "Linsen und Brühe zugeben, 15 Minuten köcheln.", "Abschmecken, optional pürieren."] },
  { cat: "energie", kcal: 300, mins: 2, name: "Banane mit Erdnussbutter", desc: "Schneller Snack vor dem Outdo-Block.",
    ing: ["1 Banane", "1 EL Erdnussbutter", "1 Prise Salz"],
    steps: ["Banane in Scheiben schneiden.", "Erdnussbutter darauf, Salz darüber."] },
  { cat: "light", kcal: 250, mins: 3, name: "Cottage Cheese mit Apfel & Zimt", desc: "Leicht, proteinreich, angenehm süß.",
    ing: ["200 g Cottage Cheese", "1 Apfel", "1/2 TL Zimt", "1 TL Honig (optional)"],
    steps: ["Apfel würfeln.", "Mit Cottage Cheese mischen, Zimt und Honig darüber."] },
  { cat: "light", kcal: 480, mins: 20, name: "Tofu-Gemüse-Pfanne mit Reis", desc: "Pflanzliche Option mit Biss.",
    ing: ["200 g Naturtofu", "250 g Wokgemüse", "80 g Reis", "2 EL Sojasauce", "1 EL Öl"],
    steps: ["Reis kochen.", "Tofu würfeln, goldbraun braten.", "Gemüse 5 Minuten mitbraten, mit Sojasauce ablöschen."] },
  { cat: "protein", kcal: 420, mins: 10, name: "Thunfisch-Salat mit Ei", desc: "Wenig Kohlenhydrate, maximale Sättigung.",
    ing: ["1 Dose Thunfisch", "2 Eier", "100 g Blattsalat", "1/2 Gurke", "1 EL Olivenöl", "Essig, Salz, Pfeffer"],
    steps: ["Eier 8 Minuten kochen, vierteln.", "Salat und Gurke schneiden.", "Alles mischen, mit Öl und Essig anmachen."] },
  { cat: "protein", kcal: 400, mins: 8, name: "Protein-Porridge", desc: "Morgen-Routine für Trainingstage.",
    ing: ["50 g Haferflocken", "250 ml Milch", "1 Portion Proteinpulver", "1 Banane"],
    steps: ["Haferflocken mit Milch 4 Minuten köcheln.", "Proteinpulver einrühren.", "Banane darauflegen."] },
  { cat: "protein", kcal: 380, mins: 12, name: "Gemüse-Omelett aus 3 Eiern", desc: "Schnell, proteinreich, variabel.",
    ing: ["3 Eier", "1 Handvoll Spinat", "1/2 Paprika", "30 g Feta", "1 TL Butter", "Salz, Pfeffer"],
    steps: ["Gemüse in Butter anschwitzen.", "Eier darüber, stocken lassen.", "Feta darüber, zusammenklappen."] },
  { cat: "energie", kcal: 280, mins: 1, name: "Datteln mit Walnüssen", desc: "Natürlicher Energieschub fürs Nachmittagstief.",
    ing: ["5 Datteln", "1 Handvoll Walnüsse"],
    steps: ["Datteln aufschneiden, Kern entfernen.", "Je eine Walnusshälfte hineindrücken."] },
  { cat: "light", kcal: 450, mins: 8, name: "Caprese mit Vollkornbrot", desc: "Mozzarella, Tomate, Basilikum — einfach gut.",
    ing: ["125 g Mozzarella", "2 Tomaten", "Basilikum", "1 EL Olivenöl", "2 Scheiben Vollkornbrot", "Salz, Pfeffer"],
    steps: ["Tomaten und Mozzarella in Scheiben schneiden.", "Schichten, Basilikum dazu.", "Mit Öl beträufeln, Brot dazu."] },
  { cat: "energie", kcal: 550, mins: 15, name: "Chicken-Wrap", desc: "To-go-tauglich für Uni oder Büro.",
    ing: ["1 große Tortilla", "150 g Hähnchenbrust", "1 Handvoll Salat", "1 Tomate", "2 EL Joghurt", "Paprikapulver, Salz, Öl"],
    steps: ["Hähnchen würzen, braten, in Streifen schneiden.", "Tortilla erwärmen, mit Joghurt bestreichen.", "Belegen, einklappen, aufrollen."] },
  { cat: "light", kcal: 330, mins: 4, name: "Skyr mit Granola & Beeren", desc: "Knusprig, frisch, proteinreich.",
    ing: ["250 g Skyr", "30 g Granola", "1 Handvoll Beeren"],
    steps: ["Skyr in eine Schale geben.", "Granola und Beeren darauf verteilen."] },
];
const MEALS_TR = {
en: [
  { name: "Oats with berries & nuts", desc: "Complex carbs for long focus blocks.", ing: ["60 g oats", "200 ml milk or oat milk", "1 handful berries", "1 tbsp nuts or almonds", "1 tsp honey (optional)"], steps: ["Bring oats and milk to a boil.", "Simmer 5 min, stir.", "Fold in berries, top with nuts and honey."] },
  { name: "Greek yogurt with honey", desc: "Lots of protein, minimal effort.", ing: ["250 g Greek yogurt", "1 tsp honey", "1 handful walnuts", "Cinnamon"], steps: ["Spoon yogurt into a bowl.", "Top with honey, walnuts and cinnamon."] },
  { name: "Salmon with broccoli & rice", desc: "Omega-3 and protein — performer food.", ing: ["150 g salmon fillet", "150 g broccoli", "80 g rice (dry)", "1 tbsp olive oil", "Lemon, salt, pepper"], steps: ["Cook rice.", "Steam broccoli 5 min.", "Fry salmon 3–4 min per side, season.", "Plate up, squeeze lemon over."] },
  { name: "Chicken bowl with quinoa", desc: "Meal-prep friendly, keeps you full.", ing: ["150 g chicken breast", "80 g quinoa", "1 bell pepper", "1/2 cucumber", "2 tbsp yogurt", "Paprika, salt, oil"], steps: ["Cook quinoa 15 min.", "Season chicken, fry, slice.", "Dice veg, layer bowl, add yogurt."] },
  { name: "Whole-grain bread with egg & avocado", desc: "Solid breakfast before training or deep work.", ing: ["2 slices whole-grain bread", "2 eggs", "1/2 avocado", "Salt, pepper, chili flakes"], steps: ["Boil eggs 7 min, peel.", "Toast bread, mash avocado on top, salt.", "Add sliced eggs, season."] },
  { name: "Red lentil soup", desc: "Light, warm, rich in iron.", ing: ["150 g red lentils", "2 carrots", "1 onion", "750 ml veg stock", "1 tsp cumin", "1 tbsp oil"], steps: ["Sauté onion and carrots.", "Add lentils and stock, simmer 15 min.", "Season, optionally blend."] },
  { name: "Banana with peanut butter", desc: "Quick snack before an Outdo block.", ing: ["1 banana", "1 tbsp peanut butter", "1 pinch salt"], steps: ["Slice banana.", "Spread peanut butter, sprinkle salt."] },
  { name: "Cottage cheese with apple & cinnamon", desc: "Light, high-protein, pleasantly sweet.", ing: ["200 g cottage cheese", "1 apple", "1/2 tsp cinnamon", "1 tsp honey (optional)"], steps: ["Dice apple.", "Mix with cottage cheese, add cinnamon and honey."] },
  { name: "Tofu veggie stir-fry with rice", desc: "Plant-based option with bite.", ing: ["200 g firm tofu", "250 g stir-fry veg", "80 g rice", "2 tbsp soy sauce", "1 tbsp oil"], steps: ["Cook rice.", "Cube tofu, fry golden.", "Add veg 5 min, deglaze with soy sauce."] },
  { name: "Tuna salad with egg", desc: "Low carb, maximum satiety.", ing: ["1 can tuna", "2 eggs", "100 g leaf salad", "1/2 cucumber", "1 tbsp olive oil", "Vinegar, salt, pepper"], steps: ["Boil eggs 8 min, quarter.", "Chop salad and cucumber.", "Mix all, dress with oil and vinegar."] },
  { name: "Protein porridge", desc: "Morning routine for training days.", ing: ["50 g oats", "250 ml milk", "1 scoop protein powder", "1 banana"], steps: ["Simmer oats with milk 4 min.", "Stir in protein powder.", "Top with banana."] },
  { name: "Veggie omelette (3 eggs)", desc: "Fast, high-protein, flexible.", ing: ["3 eggs", "1 handful spinach", "1/2 bell pepper", "30 g feta", "1 tsp butter", "Salt, pepper"], steps: ["Sauté veg in butter.", "Pour over beaten eggs, let set.", "Crumble feta, fold."] },
  { name: "Dates with walnuts", desc: "Natural energy boost for the afternoon dip.", ing: ["5 dates", "1 handful walnuts"], steps: ["Slit dates, remove pits.", "Press a walnut half inside each."] },
  { name: "Caprese with whole-grain bread", desc: "Mozzarella, tomato, basil — simply good.", ing: ["125 g mozzarella", "2 tomatoes", "Basil", "1 tbsp olive oil", "2 slices whole-grain bread", "Salt, pepper"], steps: ["Slice tomato and mozzarella.", "Layer with basil.", "Drizzle oil, serve with bread."] },
  { name: "Chicken wrap", desc: "To-go friendly for uni or office.", ing: ["1 large tortilla", "150 g chicken breast", "1 handful salad", "1 tomato", "2 tbsp yogurt", "Paprika, salt, oil"], steps: ["Season chicken, fry, slice.", "Warm tortilla, spread yogurt.", "Fill, fold, roll tight."] },
  { name: "Skyr with granola & berries", desc: "Crunchy, fresh, high-protein.", ing: ["250 g skyr", "30 g granola", "1 handful berries"], steps: ["Spoon skyr into a bowl.", "Top with granola and berries."] } ],
ru: [
  { name: "Овсянка с ягодами и орехами", desc: "Сложные углеводы для долгих фокус-блоков.", ing: ["60 г овсянки", "200 мл молока", "Горсть ягод", "1 ст. л. орехов", "1 ч. л. мёда"], steps: ["Доведи овсянку с молоком до кипения.", "Вари 5 минут, помешивай.", "Добавь ягоды, сверху орехи и мёд."] },
  { name: "Греческий йогурт с мёдом", desc: "Много белка, минимум усилий.", ing: ["250 г греческого йогурта", "1 ч. л. мёда", "Горсть грецких орехов", "Корица"], steps: ["Выложи йогурт в миску.", "Сверху мёд, орехи и корица."] },
  { name: "Лосось с брокколи и рисом", desc: "Омега-3 и белок — еда чемпионов.", ing: ["150 г филе лосося", "150 г брокколи", "80 г риса", "1 ст. л. оливкового масла", "Лимон, соль, перец"], steps: ["Свари рис.", "Брокколи на пару 5 минут.", "Жарь лосось по 3–4 минуты, приправь.", "Выложи, сбрызни лимоном."] },
  { name: "Боул с курицей и киноа", desc: "Подходит для meal-prep, сытно.", ing: ["150 г куриной грудки", "80 г киноа", "1 перец", "1/2 огурца", "2 ст. л. йогурта", "Паприка, соль, масло"], steps: ["Вари киноа 15 минут.", "Курицу приправь, обжарь, нарежь.", "Нарежь овощи, собери боул, добавь йогурт."] },
  { name: "Цельнозерновой хлеб с яйцом и авокадо", desc: "Плотный завтрак перед тренировкой.", ing: ["2 ломтика хлеба", "2 яйца", "1/2 авокадо", "Соль, перец, чили"], steps: ["Вари яйца 7 минут, очисти.", "Подсуши хлеб, разомни авокадо, посоли.", "Выложи яйца, приправь."] },
  { name: "Суп из красной чечевицы", desc: "Лёгкий, тёплый, богат железом.", ing: ["150 г красной чечевицы", "2 моркови", "1 луковица", "750 мл бульона", "1 ч. л. зиры", "1 ст. л. масла"], steps: ["Обжарь лук и морковь.", "Добавь чечевицу и бульон, вари 15 минут.", "Приправь, по желанию пюрируй."] },
  { name: "Банан с арахисовой пастой", desc: "Быстрый перекус перед блоком.", ing: ["1 банан", "1 ст. л. арахисовой пасты", "Щепотка соли"], steps: ["Нарежь банан.", "Намажь пасту, посыпь солью."] },
  { name: "Творог с яблоком и корицей", desc: "Лёгкий, белковый, приятно сладкий.", ing: ["200 г зернёного творога", "1 яблоко", "1/2 ч. л. корицы", "1 ч. л. мёда"], steps: ["Нарежь яблоко.", "Смешай с творогом, добавь корицу и мёд."] },
  { name: "Тофу с овощами и рисом", desc: "Растительный вариант.", ing: ["200 г тофу", "250 г овощей для вока", "80 г риса", "2 ст. л. соевого соуса", "1 ст. л. масла"], steps: ["Свари рис.", "Нарежь тофу, обжарь до корочки.", "Добавь овощи на 5 минут, влей соус."] },
  { name: "Салат с тунцом и яйцом", desc: "Мало углеводов, максимум сытости.", ing: ["1 банка тунца", "2 яйца", "100 г салата", "1/2 огурца", "1 ст. л. масла", "Уксус, соль, перец"], steps: ["Вари яйца 8 минут, разрежь.", "Нарежь салат и огурец.", "Смешай, заправь маслом и уксусом."] },
  { name: "Протеиновая каша", desc: "Утренняя рутина в дни тренировок.", ing: ["50 г овсянки", "250 мл молока", "1 порция протеина", "1 банан"], steps: ["Вари овсянку 4 минуты.", "Вмешай протеин.", "Сверху банан."] },
  { name: "Омлет с овощами (3 яйца)", desc: "Быстро, белково, вариативно.", ing: ["3 яйца", "Горсть шпината", "1/2 перца", "30 г феты", "1 ч. л. масла", "Соль, перец"], steps: ["Обжарь овощи.", "Залей яйцами, дай схватиться.", "Посыпь фетой, сложи."] },
  { name: "Финики с грецкими орехами", desc: "Природный заряд против спада.", ing: ["5 фиников", "Горсть грецких орехов"], steps: ["Надрежь финики, убери косточки.", "Вложи половинку ореха."] },
  { name: "Капрезе с хлебом", desc: "Моцарелла, томат, базилик — просто хорошо.", ing: ["125 г моцареллы", "2 томата", "Базилик", "1 ст. л. масла", "2 ломтика хлеба", "Соль, перец"], steps: ["Нарежь томаты и моцареллу.", "Выложи слоями с базиликом.", "Полей маслом, подай с хлебом."] },
  { name: "Ролл с курицей", desc: "Удобно взять с собой.", ing: ["1 большая тортилья", "150 г курицы", "Горсть салата", "1 томат", "2 ст. л. йогурта", "Паприка, соль, масло"], steps: ["Курицу приправь, обжарь, нарежь.", "Прогрей тортилью, намажь йогурт.", "Наполни, заверни."] },
  { name: "Скир с гранолой и ягодами", desc: "Хрустящий, свежий, белковый.", ing: ["250 г скира", "30 г гранолы", "Горсть ягод"], steps: ["Выложи скир в миску.", "Сверху гранола и ягоды."] } ],
es: [
  { name: "Avena con bayas y nueces", desc: "Carbos complejos para bloques largos.", ing: ["60 g de avena", "200 ml de leche", "1 puñado de bayas", "1 cda. de nueces", "1 cdta. de miel"], steps: ["Hierve la avena con leche.", "Cocina 5 min removiendo.", "Añade bayas, corona con nueces y miel."] },
  { name: "Yogur griego con miel", desc: "Mucha proteína, mínimo esfuerzo.", ing: ["250 g de yogur griego", "1 cdta. de miel", "1 puñado de nueces", "Canela"], steps: ["Pon el yogur en un bol.", "Añade miel, nueces y canela."] },
  { name: "Salmón con brócoli y arroz", desc: "Omega-3 y proteína — comida top.", ing: ["150 g de salmón", "150 g de brócoli", "80 g de arroz", "1 cda. de aceite de oliva", "Limón, sal, pimienta"], steps: ["Cocina el arroz.", "Brécol al vapor 5 min.", "Salmón 3–4 min por lado, sazona.", "Emplata con limón."] },
  { name: "Bowl de pollo con quinoa", desc: "Ideal meal-prep, muy saciante.", ing: ["150 g de pechuga", "80 g de quinoa", "1 pimiento", "1/2 pepino", "2 cda. de yogur", "Pimentón, sal, aceite"], steps: ["Quinoa 15 min.", "Pollo sazonado a la plancha, corta.", "Verdura picada, monta el bowl con yogur."] },
  { name: "Pan integral con huevo y aguacate", desc: "Desayuno sólido pre-entreno.", ing: ["2 rebanadas de pan integral", "2 huevos", "1/2 aguacate", "Sal, pimienta, chili"], steps: ["Huevos 7 min, pela.", "Tuesta el pan, aplasta el aguacate con sal.", "Añade los huevos, sazona."] },
  { name: "Sopa de lentejas rojas", desc: "Ligera, caliente, con hierro.", ing: ["150 g de lentejas rojas", "2 zanahorias", "1 cebolla", "750 ml de caldo", "1 cdta. de comino", "1 cda. de aceite"], steps: ["Sofríe cebolla y zanahoria.", "Añade lentejas y caldo, 15 min.", "Sazona, tritura si quieres."] },
  { name: "Plátano con crema de maní", desc: "Snack rápido pre-bloque.", ing: ["1 plátano", "1 cda. de crema de maní", "1 pizca de sal"], steps: ["Corta el plátano.", "Unta la crema, pizca de sal."] },
  { name: "Requesón con manzana y canela", desc: "Ligero, proteico, dulce.", ing: ["200 g de requesón", "1 manzana", "1/2 cdta. de canela", "1 cdta. de miel"], steps: ["Pica la manzana.", "Mezcla con requesón, canela y miel."] },
  { name: "Tofu con verduras y arroz", desc: "Opción vegetal con cuerpo.", ing: ["200 g de tofu", "250 g de verduras wok", "80 g de arroz", "2 cda. de soja", "1 cda. de aceite"], steps: ["Cocina el arroz.", "Tofu en dados, dora.", "Verduras 5 min, desglasa con soja."] },
  { name: "Ensalada de atún con huevo", desc: "Pocos carbos, máxima saciedad.", ing: ["1 lata de atún", "2 huevos", "100 g de lechuga", "1/2 pepino", "1 cda. de aceite", "Vinagre, sal, pimienta"], steps: ["Huevos 8 min, en cuartos.", "Pica lechuga y pepino.", "Mezcla y aliña."] },
  { name: "Porridge proteico", desc: "Rutina de mañana de entreno.", ing: ["50 g de avena", "250 ml de leche", "1 dosis de proteína", "1 plátano"], steps: ["Avena con leche 4 min.", "Añade la proteína.", "Plátano encima."] },
  { name: "Tortilla de verduras (3 huevos)", desc: "Rápida, proteica, variable.", ing: ["3 huevos", "1 puñado de espinaca", "1/2 pimiento", "30 g de feta", "1 cdta. de mantequilla", "Sal, pimienta"], steps: ["Saltea la verdura.", "Añade los huevos, cuaja.", "Feta por encima, dobla."] },
  { name: "Dátiles con nueces", desc: "Energía natural contra el bajón.", ing: ["5 dátiles", "1 puñado de nueces"], steps: ["Abre los dátiles, quita el hueso.", "Mete media nuez en cada uno."] },
  { name: "Caprese con pan integral", desc: "Mozzarella, tomate, albahaca — simple y bueno.", ing: ["125 g de mozzarella", "2 tomates", "Albahaca", "1 cda. de aceite", "2 rebanadas de pan", "Sal, pimienta"], steps: ["Corta tomate y mozzarella.", "Alterna con albahaca.", "Aceite por encima, sirve con pan."] },
  { name: "Wrap de pollo", desc: "Para llevar a uni u oficina.", ing: ["1 tortilla grande", "150 g de pollo", "1 puñado de ensalada", "1 tomate", "2 cda. de yogur", "Pimentón, sal, aceite"], steps: ["Pollo sazonado a la plancha, en tiras.", "Tortilla tibia con yogur.", "Rellena, dobla, enrolla."] },
  { name: "Skyr con granola y bayas", desc: "Crujiente, fresco, proteico.", ing: ["250 g de skyr", "30 g de granola", "1 puñado de bayas"], steps: ["Skyr en un bol.", "Granola y bayas encima."] } ],
fr: [
  { name: "Flocons d'avoine, baies & noix", desc: "Glucides complexes pour de longs blocs.", ing: ["60 g de flocons d'avoine", "200 ml de lait", "1 poignée de baies", "1 c. à s. de noix", "1 c. à c. de miel"], steps: ["Porte avoine et lait à ébullition.", "Laisse gonfler 5 min en remuant.", "Ajoute les baies, noix et miel."] },
  { name: "Yaourt grec au miel", desc: "Beaucoup de protéines, zéro effort.", ing: ["250 g de yaourt grec", "1 c. à c. de miel", "1 poignée de noix", "Cannelle"], steps: ["Mets le yaourt dans un bol.", "Ajoute miel, noix et cannelle."] },
  { name: "Saumon, brocoli & riz", desc: "Oméga-3 et protéines — plat performer.", ing: ["150 g de pavé de saumon", "150 g de brocoli", "80 g de riz", "1 c. à s. d'huile d'olive", "Citron, sel, poivre"], steps: ["Cuis le riz.", "Brocoli vapeur 5 min.", "Saumon 3–4 min par face, assaisonne.", "Dresse, presse le citron."] },
  { name: "Bowl poulet & quinoa", desc: "Batch-cooking compatible, cale bien.", ing: ["150 g de blanc de poulet", "80 g de quinoa", "1 poivron", "1/2 concombre", "2 c. à s. de yaourt", "Paprika, sel, huile"], steps: ["Quinoa 15 min.", "Poulet assaisonné, poêlé, émincé.", "Légumes en dés, monte le bowl avec yaourt."] },
  { name: "Pain complet, œuf & avocat", desc: "Petit-déj solide avant sport ou deep work.", ing: ["2 tranches de pain complet", "2 œufs", "1/2 avocat", "Sel, poivre, piment"], steps: ["Œufs 7 min, écale.", "Pain toasté, avocat écrasé salé.", "Ajoute les œufs, assaisonne."] },
  { name: "Soupe de lentilles corail", desc: "Légère, chaude, riche en fer.", ing: ["150 g de lentilles corail", "2 carottes", "1 oignon", "750 ml de bouillon", "1 c. à c. de cumin", "1 c. à s. d'huile"], steps: ["Fais revenir oignon et carottes.", "Ajoute lentilles et bouillon, 15 min.", "Assaisonne, mixe si tu veux."] },
  { name: "Banane & beurre de cacahuète", desc: "Snack rapide avant un bloc.", ing: ["1 banane", "1 c. à s. de purée de cacahuète", "1 pincée de sel"], steps: ["Coupe la banane.", "Tartine la purée, pincée de sel."] },
  { name: "Cottage cheese, pomme & cannelle", desc: "Léger, protéiné, doucement sucré.", ing: ["200 g de cottage cheese", "1 pomme", "1/2 c. à c. de cannelle", "1 c. à c. de miel"], steps: ["Coupe la pomme en dés.", "Mélange, ajoute cannelle et miel."] },
  { name: "Poêlée tofu-légumes & riz", desc: "Option veggie qui tient.", ing: ["200 g de tofu nature", "250 g de légumes wok", "80 g de riz", "2 c. à s. de sauce soja", "1 c. à s. d'huile"], steps: ["Cuis le riz.", "Tofu en dés, fais dorer.", "Légumes 5 min, déglace au soja."] },
  { name: "Salade thon & œuf", desc: "Peu de glucides, satiété max.", ing: ["1 boîte de thon", "2 œufs", "100 g de salade", "1/2 concombre", "1 c. à s. d'huile", "Vinaigre, sel, poivre"], steps: ["Œufs 8 min, en quartiers.", "Coupe salade et concombre.", "Mélange, assaisonne."] },
  { name: "Porridge protéiné", desc: "Routine des matins d'entraînement.", ing: ["50 g de flocons d'avoine", "250 ml de lait", "1 dose de whey", "1 banane"], steps: ["Avoine et lait 4 min.", "Ajoute la whey hors du feu.", "Banane dessus."] },
  { name: "Omelette aux légumes (3 œufs)", desc: "Rapide, protéinée, variable.", ing: ["3 œufs", "1 poignée d'épinards", "1/2 poivron", "30 g de feta", "1 c. à c. de beurre", "Sel, poivre"], steps: ["Fais revenir les légumes.", "Verse les œufs, laisse prendre.", "Feta dessus, plie."] },
  { name: "Dattes & noix", desc: "Coup de boost naturel contre le coup de mou.", ing: ["5 dattes", "1 poignée de noix"], steps: ["Ouvre les dattes, retire les noyaux.", "Glisse une moitié de noix dedans."] },
  { name: "Caprese & pain complet", desc: "Mozza, tomate, basilic — simple et bon.", ing: ["125 g de mozzarella", "2 tomates", "Basilic", "1 c. à s. d'huile", "2 tranches de pain", "Sel, poivre"], steps: ["Tranche tomates et mozza.", "Alteren avec le basilic.", "Filet d'huile, sers avec le pain."] },
  { name: "Wrap au poulet", desc: "À emporter, fac ou bureau.", ing: ["1 grande tortilla", "150 g de poulet", "1 poignée de salade", "1 tomate", "2 c. à s. de yaourt", "Paprika, sel, huile"], steps: ["Poulet assaisonné, poêlé, en lanières.", "Tortilla tiède, étale le yaourt.", "Garnis, rabats, roule."] },
  { name: "Skyr, granola & baies", desc: "Croustillant, frais, protéiné.", ing: ["250 g de skyr", "30 g de granola", "1 poignée de baies"], steps: ["Mets le skyr dans un bol.", "Granola et baies dessus."] } ] };
function mealView(m, i) {
  if (db.lang === "de") return m;
  const tr = (MEALS_TR[db.lang] || [])[i] || (MEALS_TR.en || [])[i];
  return tr ? { ...m, ...tr } : m;
}
try {
  if (typeof MEALS_EXTRA !== "undefined") MEALS.push(...MEALS_EXTRA);
  if (typeof MEALS_TR_EXTRA !== "undefined") MEALS_TR.en.push(...MEALS_TR_EXTRA.en);
} catch {}

/* ---------- Store ---------- */
const DEFAULTS = () => ({
  lang: "de", plan: "free",
  habits: [
    { id: "med",  label: { de: "Meditation", en: "Meditation", ru: "Медитация", es: "Meditación", fr: "Méditation" }, icon: "◍", area: "mind", days: {} },
    { id: "gym",  label: { de: "Training", en: "Workout", ru: "Тренировка", es: "Entreno", fr: "Sport" }, icon: "⬢", area: "body", days: {} },
    { id: "code", label: { de: "Coding", en: "Coding", ru: "Кодинг", es: "Programar", fr: "Code" }, icon: "⌁", area: "craft", days: {} },
    { id: "read", label: { de: "Lesen", en: "Reading", ru: "Чтение", es: "Leer", fr: "Lecture" }, icon: "✎", area: "mind", days: {} },
  ],
  journal: [], lifts: [], redirects: [], focusLogs: [],
  focusDraft: "", mealCat: "alle", createdAt: new Date().toISOString(),
});
function load() {
  try {
    const raw = localStorage.getItem(KEY) || localStorage.getItem("outtrack_v1");
    if (!raw) { const d = DEFAULTS(); save(d); return d; }
    const parsed = JSON.parse(raw);
    const d = { ...DEFAULTS(), ...parsed };
    if (!d.journal) d.journal = [];
    if (!d.lifts) d.lifts = [];
    if (!d.redirects) d.redirects = [];
    if (!d.lang || !STR[d.lang]) d.lang = "de";
    if (!parsed.plan) d.plan = "premium"; // Bestandnutzer behalten alles
    if (d.plan !== "premium") d.plan = "free";
    return d;
  } catch { const d = DEFAULTS(); save(d); return d; }
}
function save(d) { if (!persistOK) return; try { localStorage.setItem(KEY, JSON.stringify(d)); } catch {} }
let persistOK = true;
let db = load();
const habitLabel = (h) => (typeof h.label === "object" ? (h.label[db.lang] || h.label.de) : h.label);

const todayISO = (offset = 0) => {
  const d = new Date(); d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0, 10);
};
const isDone = (h, day = todayISO()) => !!h.days[day];

/* ---------- Language ---------- */
function applyLang() {
  document.documentElement.lang = db.lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  renderTimerLabels();
}
function renderLangList() {
  const ul = $("#lang-list"); ul.innerHTML = "";
  LANGS.forEach(l => {
    const li = document.createElement("li");
    const on = db.lang === l.id;
    li.innerHTML = `<button><span>${l.label}</span><span class="check-mark">${on ? "✓" : ""}</span></button>`;
    li.querySelector("button").addEventListener("click", () => {
      db.lang = l.id; save(db); applyLang(); renderAll(); toast(t("ts_lang"));
    });
    ul.appendChild(li);
  });
  $("#store-state").textContent = persistOK ? t("store_on") : t("store_off");
}
function renderAll() {
  document.body.classList.toggle("plan-free", db.plan !== "premium");
  renderHub(); renderLifts(); renderJournal(); renderMeal(true); renderAnalytics(); renderLangList(); renderPremium();
}

/* ---------- Tabs ---------- */
const PRO_VIEWS = ["journal", "food"];
const tabs = document.querySelectorAll(".tab");
function go(tab) {
  if (PRO_VIEWS.includes(tab) && db.plan !== "premium") { toast(t("pro_locked")); tab = "hub"; }
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  tabs.forEach(x => {
    const on = x.dataset.tab === tab;
    x.classList.toggle("active", on);
    if (on) x.setAttribute("aria-current", "page"); else x.removeAttribute("aria-current");
  });
  $("#view-" + tab).classList.add("active");
  if (tab === "analytics") renderAnalytics();
  if (tab === "hub") { renderHub(); renderLifts(); }
  if (tab === "journal") renderJournal();
  if (tab === "food") renderMeal(true);
  if (tab === "settings") renderLangList();
  window.scrollTo({ top: 0 });
}
tabs.forEach(x => x.addEventListener("click", () => go(x.dataset.tab)));
$("#launch-focus").addEventListener("click", () => go("focus"));
$("#exit-focus").addEventListener("click", () => go("hub"));

/* ---------- Hub ---------- */
function dayProgress(day = todayISO()) {
  const done = db.habits.filter(h => isDone(h, day)).length;
  return { done, total: db.habits.length, pct: db.habits.length ? Math.round(done / db.habits.length * 100) : 0 };
}
function calcStreak() {
  let s = 0, off = dayProgress(todayISO()).pct === 100 ? 0 : -1;
  while (true) {
    const p = dayProgress(todayISO(off));
    if (p.total > 0 && p.pct === 100) { s++; off--; } else break;
  }
  return s;
}
function areaPoints() {
  const pts = { mind: 0, body: 0, craft: 0 };
  db.habits.forEach(h => { pts[h.area] = (pts[h.area] || 0) + Object.keys(h.days).length * 10; });
  db.redirects.forEach(() => { pts.mind += 5; });
  return pts;
}
function renderHub() {
  $("#hub-date").textContent = new Date().toLocaleDateString(loc(), { weekday: "long", day: "numeric", month: "long" });
  const q = QUOTES[db.lang] || QUOTES.de;
  $("#hub-quote").textContent = q[new Date().getDate() % q.length];
  $("#streak-count").textContent = calcStreak();
  const p = dayProgress();
  $("#ring-pct").textContent = p.pct + "%";
  $("#ring-sub").textContent = `${p.done} / ${p.total}`;
  $("#ring-fg").style.strokeDashoffset = 326.7 * (1 - p.pct / 100);
  const pts = areaPoints();
  $("#points-mini").innerHTML = AREAS.map(a => `<span>${t("area_" + a).toUpperCase()} · ${pts[a]}</span>`).join("");
  const ul = $("#habit-list"); ul.innerHTML = "";
  db.habits.forEach(h => {
    const label = habitLabel(h);
    const li = document.createElement("li");
    li.className = "habit" + (isDone(h) ? " done" : "");
    li.tabIndex = 0; li.setAttribute("role", "checkbox");
    li.setAttribute("aria-checked", isDone(h) ? "true" : "false");
    li.setAttribute("aria-label", `${label}, ${t("area_" + h.area)}`);
    li.innerHTML = `<span class="check" aria-hidden="true">✓</span>
      <span class="h-label">${escapeHtml(label)}</span>
      <span class="h-area">${t("area_" + h.area).toUpperCase()}</span>
      <button class="h-del" aria-label="${escapeHtml(t("del_aria", { label }))}">×</button>`;
    const toggle = () => {
      const d = todayISO();
      if (h.days[d]) delete h.days[d]; else h.days[d] = true;
      save(db); renderHub();
      if (dayProgress().pct === 100) toast(t("ts_perfect"));
      else if (h.days[d]) toast(t("ts_pts", { a: t("area_" + h.area).toUpperCase() }));
    };
    li.addEventListener("click", (e) => {
      if (e.target.classList.contains("h-del")) {
        db.habits = db.habits.filter(x => x.id !== h.id);
        save(db); renderHub(); toast(t("ts_habit_del")); return;
      }
      toggle();
    });
    li.addEventListener("keydown", (e) => {
      if (e.target.classList && e.target.classList.contains("h-del")) return;
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
    ul.appendChild(li);
  });
}
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }

/* ---------- Premium ---------- */
const PRO_ALPHA = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
function proKeyValid(k) {
  k = (k || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (!/^OT[A-Z0-9]{6}$/.test(k)) return false;
  const pay = k.slice(2, 7), chk = k[7];
  let s = 0;
  for (const c of pay) { const i = PRO_ALPHA.indexOf(c); if (i < 0) return false; s += i; }
  return PRO_ALPHA[s % PRO_ALPHA.length] === chk;
}
const PRO_FEATS = ["feat_journal", "feat_food", "feat_lifts", "feat_redirect", "feat_stats"];
function renderPremium() {
  const pro = db.plan === "premium";
  $("#pro-badge").textContent = pro ? "✓ PRO" : "FREE";
  $("#pro-note").textContent = pro ? t("set_pro_active") : t("set_pro_free") + " · " + t("pro_free_note");
  $("#pro-list").innerHTML = PRO_FEATS.map(k =>
    `<li class="feat"><span>${t(k)}</span><span class="${pro ? "feat-yes" : "feat-no"}">${pro ? "✓" : "—"}</span></li>`).join("");
  $("#pro-unlock-row").hidden = pro;
  $("#pro-lock").hidden = !pro;
}
$("#pro-unlock").addEventListener("click", () => {
  if (proKeyValid($("#pro-code").value)) {
    db.plan = "premium"; $("#pro-code").value = "";
    save(db); renderAll(); toast(t("pro_unlocked"));
  } else toast(t("pro_invalid"));
});
$("#pro-lock").addEventListener("click", () => {
  db.plan = "free"; save(db); go("hub"); renderAll();
});

/* ---------- Habit sheet ---------- */
let newArea = "mind";
$("#add-habit-btn").addEventListener("click", () => { $("#sheet").hidden = false; $("#sheet-backdrop").hidden = false; });
const closeSheet = () => { $("#sheet").hidden = true; $("#sheet-backdrop").hidden = true; };
$("#sheet-cancel").addEventListener("click", closeSheet);
$("#sheet-backdrop").addEventListener("click", closeSheet);
$("#area-pick").addEventListener("click", (e) => {
  const b = e.target.closest("button"); if (!b) return;
  newArea = b.dataset.area;
  document.querySelectorAll("#area-pick button").forEach(x => x.classList.toggle("active", x === b));
});
$("#sheet-save").addEventListener("click", () => {
  const label = $("#new-habit-label").value.trim();
  if (!label) return toast(t("ts_name_first"));
  db.habits.push({ id: "h" + Date.now(), label: label.slice(0, 28), icon: "◇", area: newArea, days: {} });
  $("#new-habit-label").value = "";
  save(db); closeSheet(); renderHub(); toast(t("ts_habit_add"));
});

/* ---------- Progressive Overload ---------- */
const liftVol = (l) => l.kg * l.reps * l.sets;
function bestFor(ex) {
  const same = db.lifts.filter(l => l.ex.toLowerCase() === ex.toLowerCase());
  if (!same.length) return null;
  return same.reduce((a, b) => (b.kg > a.kg || (b.kg === a.kg && liftVol(b) > liftVol(a)) ? b : a));
}
function renderLifts() {
  const today = todayISO();
  const tl = $("#lift-today"); tl.innerHTML = "";
  db.lifts.filter(l => l.date.slice(0, 10) === today).slice().reverse().forEach(l => {
    const li = document.createElement("li");
    li.innerHTML = `<span><strong>${escapeHtml(l.ex)}</strong> · ${l.kg} kg × ${l.reps} × ${l.sets}</span><button aria-label="${escapeHtml(t("del_aria", { label: l.ex }))}">×</button>`;
    li.querySelector("button").addEventListener("click", () => {
      db.lifts = db.lifts.filter(x => x.id !== l.id);
      save(db); renderLifts(); toast(t("ts_deleted"));
    });
    tl.appendChild(li);
  });
  const exs = [...new Set(db.lifts.map(l => l.ex))];
  $("#lift-ex-list").innerHTML = exs.map(e => `<option value="${escapeHtml(e)}">`).join("");
  $("#pr-count").textContent = db.lifts.filter(l => l.pr).length + " PR";
  const box = $("#lift-bests"); box.innerHTML = "";
  exs.slice(-4).forEach(ex => {
    const b = bestFor(ex);
    const r = document.createElement("p");
    r.innerHTML = `<strong>${escapeHtml(ex)}</strong> · ${t("best")}: ${b.kg} kg × ${b.reps}${b.pr ? ' <span class="pr-tag">PR</span>' : ''}`;
    box.appendChild(r);
  });
}
$("#lift-save").addEventListener("click", () => {
  const ex = $("#lift-ex").value.trim().slice(0, 30);
  const kg = Math.max(0, Math.min(999, parseFloat($("#lift-kg").value) || 0));
  const reps = Math.max(1, Math.min(99, parseInt($("#lift-reps").value, 10) || 0));
  const sets = Math.max(1, Math.min(20, parseInt($("#lift-sets").value, 10) || 0));
  if (!ex) return toast(t("ts_ex_first"));
  if (!reps || !sets) return toast(t("ts_reps_check"));
  const prev = bestFor(ex);
  const isPR = !prev || kg > prev.kg;
  db.lifts.push({ id: "l" + Date.now(), date: new Date().toISOString(), ex, kg, reps, sets, pr: isPR });
  save(db); renderLifts();
  toast(isPR ? t("ts_pr", { ex, kg }) : t("ts_logged"));
});

/* ---------- Productive Redirection ---------- */
const RA_KEYS = { water: "ra_water", pushups: "ra_pushups", read: "ra_read" };
const raLabel = (a) => RA_KEYS[a] ? t(RA_KEYS[a]) : a;
let redirectTimer = null, redirectLeft = 60;
function openRedirect() {
  $("#redirect-sheet").hidden = false; $("#redirect-backdrop").hidden = false;
  redirectLeft = 60; $("#redirect-count").textContent = redirectLeft;
  clearInterval(redirectTimer);
  redirectTimer = setInterval(() => {
    redirectLeft--;
    $("#redirect-count").textContent = Math.max(0, redirectLeft);
    if (redirectLeft <= 0) clearInterval(redirectTimer);
  }, 1000);
}
function closeRedirect() {
  $("#redirect-sheet").hidden = true; $("#redirect-backdrop").hidden = true;
  clearInterval(redirectTimer);
}
$("#redirect-open").addEventListener("click", openRedirect);
$("#redirect-cancel").addEventListener("click", closeRedirect);
$("#redirect-backdrop").addEventListener("click", closeRedirect);
document.querySelectorAll(".redirect-actions button").forEach(b => b.addEventListener("click", () => {
  db.redirects.unshift({ date: new Date().toISOString(), action: b.dataset.ra });
  save(db); closeRedirect(); toast(t("ts_redirected"));
}));

/* ---------- Journal ---------- */
function renderJournal() {
  const q = ($("#journal-search").value || "").toLowerCase();
  const list = $("#journal-list"); list.innerHTML = "";
  const entries = [...db.journal].reverse().filter(e =>
    !q || ((e.title || "") + " " + e.text).toLowerCase().includes(q));
  $("#journal-search-clear").hidden = !q;
  if (!entries.length) {
    list.innerHTML = `<li class="j-entry"><p class="muted">${t("j_empty")}</p></li>`;
    return;
  }
  entries.forEach(e => {
    const li = document.createElement("li"); li.className = "j-entry";
    li.innerHTML = `<time>${new Date(e.date).toLocaleString(loc(), { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })}</time>
      ${e.title ? `<h4>${escapeHtml(e.title)}</h4>` : ""}
      <p>${escapeHtml(e.text)}</p>
      <button>${t("j_del")}</button>`;
    li.querySelector("button").addEventListener("click", () => {
      db.journal = db.journal.filter(x => x.id !== e.id);
      save(db); renderJournal(); toast(t("ts_entry_del"));
    });
    list.appendChild(li);
  });
}
$("#journal-save").addEventListener("click", () => {
  const text = $("#journal-text").value.trim();
  if (!text) return toast(t("ts_write_first"));
  db.journal.push({ id: "j" + Date.now(), date: new Date().toISOString(),
    title: $("#journal-title").value.trim().slice(0, 60), text: text.slice(0, 2000) });
  $("#journal-title").value = ""; $("#journal-text").value = "";
  save(db); renderJournal(); toast(t("ts_saved"));
});
$("#journal-search").addEventListener("input", renderJournal);
$("#journal-search-clear").addEventListener("click", () => { $("#journal-search").value = ""; renderJournal(); });

/* ---------- Food ---------- */
let currentMeal = null, currentMealIdx = -1;
$("#meal-filter").addEventListener("click", (e) => {
  const b = e.target.closest("button"); if (!b) return;
  db.mealCat = b.dataset.cat; save(db);
  document.querySelectorAll("#meal-filter button").forEach(x => x.classList.toggle("active", x === b));
  renderMeal();
});
$("#meal-next").addEventListener("click", () => renderMeal());
function renderMeal(keep) {
  document.querySelectorAll("#meal-filter button").forEach(x => x.classList.toggle("active", x.dataset.cat === db.mealCat));
  const pool = MEALS.map((m, i) => i).filter(i => db.mealCat === "alle" || MEALS[i].cat === db.mealCat);
  if (keep && pool.includes(currentMealIdx)) { paintMeal(currentMealIdx); renderMealList(); return; }
  const idx = pool[Math.floor(Math.random() * pool.length)];
  paintMeal(idx); renderMealList();
}
function paintMeal(i) {
  const m = mealView(MEALS[i], i);
  currentMeal = m; currentMealIdx = i;
  $("#meal-cat").textContent = t("cat_" + m.cat).toUpperCase();
  $("#meal-name").textContent = m.name;
  $("#meal-desc").textContent = m.desc;
  $("#meal-meta").textContent = `≈ ${m.kcal} kcal · ${t("time_min", { n: m.mins })}`;
  $("#meal-ing").innerHTML = m.ing.map(x => `<li>${escapeHtml(x)}</li>`).join("");
  $("#meal-steps").innerHTML = m.steps.map(x => `<li>${escapeHtml(x)}</li>`).join("");
  $("#meal-recipe").hidden = false;
}
function renderMealList() {
  const ul = $("#meal-list"); ul.innerHTML = "";
  MEALS.forEach((m, i) => {
    const v = mealView(m, i);
    const li = document.createElement("li");
    li.className = "meal-row" + (i === currentMealIdx ? " selected" : "");
    li.tabIndex = 0; li.setAttribute("role", "button");
    li.setAttribute("aria-label", `${v.name}, ${t("cat_" + m.cat)}`);
    li.innerHTML = `<span class="h-label">${escapeHtml(v.name)}</span><span class="h-area">${t("cat_" + m.cat).toUpperCase()} · ${t("time_min", { n: m.mins })}</span>`;
    const pick = () => { paintMeal(i); renderMealList(); window.scrollTo({ top: 0, behavior: "smooth" }); };
    li.addEventListener("click", pick);
    li.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); } });
    ul.appendChild(li);
  });
}

/* ---------- Focus timer ---------- */
let totalSec = 45 * 60, leftSec = totalSec, timerId = null, timerPhase = "ready";
const CIRC = 552.9;
const fmt = (s) => String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
function drawTimer() {
  $("#timer-display").textContent = fmt(leftSec);
  $("#timer-fg").style.strokeDashoffset = CIRC * (1 - leftSec / totalSec);
}
function renderTimerLabels() {
  $("#timer-state").textContent = t({ ready: "st_ready", run: "st_go", pause: "st_paused", done: "st_done" }[timerPhase]);
  $("#timer-start").textContent = timerId ? t("timer_pause") : (timerPhase === "ready" || timerPhase === "done" ? t("timer_start") : t("timer_resume"));
}
function setDuration(sec, fromPreset) {
  stopTick(false);
  totalSec = leftSec = Math.max(1, Math.min(sec, 12 * 3600));
  timerPhase = "ready"; drawTimer(); renderTimerLabels(); syncCustomFields();
  if (!fromPreset) document.querySelectorAll("#presets button").forEach(x => x.classList.remove("active"));
}
function syncCustomFields() {
  $("#custom-h").value = Math.floor(totalSec / 3600);
  $("#custom-m").value = Math.floor(totalSec % 3600 / 60);
  $("#custom-s").value = totalSec % 60;
}
$("#presets").addEventListener("click", (e) => {
  const b = e.target.closest("button"); if (!b) return;
  document.querySelectorAll("#presets button").forEach(x => x.classList.toggle("active", x === b));
  setDuration(parseInt(b.dataset.min, 10) * 60, true);
});
$("#custom-apply").addEventListener("click", () => {
  const clamp = (v, max) => Math.max(0, Math.min(max, parseInt(v, 10) || 0));
  const h = clamp($("#custom-h").value, 12), m = clamp($("#custom-m").value, 59), s = clamp($("#custom-s").value, 59);
  const total = h * 3600 + m * 60 + s;
  if (total < 1) { toast(t("ts_time_zero")); return; }
  setDuration(total, false);
  toast(`${t("ts_timer")}: ${h > 0 ? h + " " + t("t_hours") + " " : ""}${m} ${t("t_minutes")}${s ? " " + s + " " + t("t_seconds") : ""}`);
});
$("#timer-start").addEventListener("click", () => {
  if (timerId) { stopTick(); timerPhase = "pause"; renderTimerLabels(); return; }
  if (leftSec <= 0) leftSec = totalSec;
  timerPhase = "run"; renderTimerLabels();
  timerId = setInterval(() => { leftSec--; drawTimer(); if (leftSec <= 0) completeBlock(); }, 1000);
});
function stopTick(resetLabel = true) {
  clearInterval(timerId); timerId = null;
  if (resetLabel) renderTimerLabels();
}
$("#timer-reset").addEventListener("click", () => { stopTick(false); leftSec = totalSec; timerPhase = "ready"; drawTimer(); renderTimerLabels(); });
function completeBlock() {
  stopTick(false); leftSec = 0; timerPhase = "done"; drawTimer(); renderTimerLabels();
  db.focusLogs.unshift({ date: new Date().toISOString(), minutes: Math.round(totalSec / 60), focus: $("#focus-input").value.trim() });
  save(db); toast(t("ts_block_done"));
  try { navigator.vibrate && navigator.vibrate([100, 50, 100]); } catch {}
}
$("#fs-btn").addEventListener("click", async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await $("#focus-stage").requestFullscreen();
  } catch { toast(t("ts_fs_na")); }
});
$("#focus-input").value = db.focusDraft || "";
$("#focus-input").addEventListener("input", (e) => {
  db.focusDraft = e.target.value; save(db);
  const s = $("#focus-saved"); s.textContent = t("ts_saved"); s.classList.add("show");
  clearTimeout(s._t); s._t = setTimeout(() => s.classList.remove("show"), 900);
});

/* ---------- Sounds ---------- */
let actx = null, soundNodes = [];
$("#sound-select").addEventListener("change", (e) => playAmbience(e.target.value));
function noiseBuffer(ctx) {
  const b = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
  const d = b.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  return b;
}
function stopAmbience() { soundNodes.forEach(n => { try { n.stop ? n.stop() : n.disconnect(); } catch {} }); soundNodes = []; if (actx) actx.close(); actx = null; }
function playAmbience(kind) {
  stopAmbience();
  if (kind === "off") return;
  actx = new (window.AudioContext || window.webkitAudioContext)();
  const ctx = actx, master = ctx.createGain(); master.gain.value = 0.12; master.connect(ctx.destination);
  if (kind === "white") {
    const src = ctx.createBufferSource(); src.buffer = noiseBuffer(ctx); src.loop = true;
    src.connect(master); src.start(); soundNodes.push(src);
  } else if (kind === "rain") {
    const src = ctx.createBufferSource(); src.buffer = noiseBuffer(ctx); src.loop = true;
    const f = ctx.createBiquadFilter(); f.type = "bandpass"; f.frequency.value = 1800; f.Q.value = 0.6;
    const lfo = ctx.createOscillator(); lfo.frequency.value = 0.4;
    const g = ctx.createGain(); g.gain.value = 0.4;
    lfo.connect(g); g.connect(f.frequency);
    src.connect(f); f.connect(master); src.start(); lfo.start();
    soundNodes.push(src, lfo);
  } else if (kind === "synth") {
    [55, 82.5, 110.3].forEach((fr, i) => {
      const o = ctx.createOscillator(); o.type = "sawtooth"; o.frequency.value = fr;
      const f = ctx.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = 400 + i * 150;
      const g = ctx.createGain(); g.gain.value = 0.25;
      o.connect(f); f.connect(g); g.connect(master); o.start();
      soundNodes.push(o);
    });
  }
}

/* ---------- Analytics ---------- */
function renderLeaderboard() {
  const days = [];
  for (let off = 0; off < 60; off++) {
    const day = todayISO(-off), p = dayProgress(day);
    if (p.total && p.done) days.push({ day, ...p });
  }
  days.sort((a, b) => b.pct - a.pct || b.done - a.done);
  const medals = ["🥇", "🥈", "🥉", "4.", "5."];
  const rows = days.slice(0, 5).map((d, i) =>
    `<div class="lb-row"><span>${medals[i]} ${new Date(d.day + "T12:00").toLocaleDateString(loc(), { day: "2-digit", month: "short" })}</span><strong>${d.pct} %</strong></div>`);
  rows.push(`<div class="lb-row"><span>🏋️ ${t("lb_prs")}</span><strong>${db.lifts.filter(l => l.pr).length}</strong></div>`);
  rows.push(`<div class="lb-row"><span>🧠 ${t("lb_red")}</span><strong>${db.redirects.length}</strong></div>`);
  rows.push(`<div class="lb-row"><span>🔥 ${t("lb_streak")}</span><strong>${calcStreak()} ${t("lb_days")}</strong></div>`);
  $("#leaderboard").innerHTML = rows.join("") || `<p class="muted">${t("lb_empty")}</p>`;
}
function renderProgression() {
  const box = $("#progression"); box.innerHTML = "";
  const exs = [...new Set(db.lifts.map(l => l.ex))];
  if (!exs.length) { box.innerHTML = `<p class="muted">${t("pg_empty")}</p>`; return; }
  exs.forEach(ex => {
    const sess = db.lifts.filter(l => l.ex.toLowerCase() === ex.toLowerCase()).slice(-6);
    const max = Math.max(...sess.map(liftVol), 1);
    const bars = sess.map(l => {
      const h = Math.max(8, Math.round(liftVol(l) / max * 64));
      return `<div class="vol-bar" title="${l.date.slice(0, 10)}: ${liftVol(l)} kg" style="height:${h}px"></div>`;
    }).join("");
    const delta = liftVol(sess[sess.length - 1]) - liftVol(sess[0]);
    const trend = delta > 0 ? `▲ +${delta}` : delta < 0 ? `▼ ${delta}` : `— ${t("pg_stable")}`;
    const d = document.createElement("div"); d.className = "prog-row";
    d.innerHTML = `<div class="id-head"><span>${escapeHtml(ex)}</span><small>${trend} ${t("pg_vol")}</small></div><div class="vol-bars">${bars}</div>`;
    box.appendChild(d);
  });
}
function renderAnalytics() {
  renderLeaderboard(); renderProgression();
  const grid = $("#grid"); grid.innerHTML = "";
  for (let off = 34; off >= 0; off--) {
    const day = todayISO(-off), p = dayProgress(day);
    const lvl = p.pct === 0 ? 0 : p.pct < 34 ? 1 : p.pct < 67 ? 2 : p.pct < 100 ? 3 : 4;
    const d = document.createElement("div");
    d.className = "sq l" + lvl; d.title = `${day} — ${p.pct}%`;
    grid.appendChild(d);
  }
  const pts = areaPoints();
  $("#total-points").textContent = (pts.mind + pts.body + pts.craft) + " " + t("pts").toUpperCase();
  const levelOf = (p) => ({ lvl: Math.floor(p / 70) + 1, inLvl: p % 70 });
  $("#identity").innerHTML = AREAS.map(a => {
    const { lvl, inLvl } = levelOf(pts[a]);
    return `<div class="id-row"><div class="id-head"><span>${t("area_" + a).toUpperCase()} · ${t("level")} ${lvl}</span><small>${pts[a]} ${t("pts")} · ${70 - inLvl} ${t("to_next")} L${lvl + 1}</small></div>
      <div class="bar"><i style="width:${Math.round(inLvl / 70 * 100)}%"></i></div></div>`;
  }).join("");
  const log = $("#focus-log");
  log.innerHTML = db.focusLogs.length ? "" : `<p class="muted">${t("fl_empty")}</p>`;
  db.focusLogs.slice(0, 10).forEach(l => {
    const r = document.createElement("div"); r.className = "fl-row";
    r.textContent = `◎ ${l.minutes} ${t("time_min", { n: l.minutes })} — ${l.focus || t("untitled")} · ${new Date(l.date).toLocaleDateString(loc())}`;
    log.appendChild(r);
  });
}

/* ---------- Legal ---------- */
const LEGAL_BODY = {
  privacy: `
    <h4>1. Verantwortlicher</h4><p>Siehe „Betreiber &amp; Kontakt“.</p>
    <h4>2. Welche Daten?</h4><p>Keine. Es gibt keine Konten, kein Tracking, keine Analyse-Tools, keine Werbung und keine Drittanbieter-SDKs. Die App lädt keine externen Ressourcen.</p>
    <h4>3. Speicherung</h4><p>Ausschließlich lokal in deinem Browser (localStorage). Keine Übertragung an Server — die App funktioniert komplett offline.</p>
    <h4>4. Deine Rechte (DSGVO)</h4><p>Da nichts erhoben oder übertragen wird, gibt es nichts herauszugeben. Über „Exportieren“ siehst du deine lokalen Daten, über „Alle Daten löschen“ entfernst du sie.</p>
    <h4>5. Stand</h4><p>September 2026.</p>`,
  terms: `
    <h4>1. Leistung</h4><p>Persönliche Produktivitäts-App (Habits, Journal, Rezepte, Fokus-Timer). Bereitgestellt „wie besehen“, ohne Gewähr.</p>
    <h4>2. Kosten</h4><p>Kostenlos. Keine In-App-Käufe, keine Abos, keine versteckten Gebühren.</p>
    <h4>3. Gesundheit &amp; Ernährung</h4><p>Food-Tipps sind allgemeine Ideen und <strong>keine Ernährungs- oder Gesundheitsberatung</strong>.</p>
    <h4>4. Eigenverantwortung</h4><p>Du sicherst deine Daten selbst (Export). Bei Deinstallation gehen lokale Daten verloren.</p>`,
  refund: `<p>OutTrack enthält <strong>keine kostenpflichtigen Inhalte</strong>: keine Käufe, keine Abos, keine Gebühren. Es fällt daher nichts an, was erstattet werden müsste.</p>`,
  cookies: `<p><strong>OutTrack setzt keine Cookies.</strong> Keine Tracking-, Analyse- oder Werbe-Cookies, keine Einbindung Dritter.</p>
    <p>Nur lokaler Gerätespeicher (localStorage), damit Eingaben erhalten bleiben — die Daten verlassen dein Gerät nicht. Über den Hinweis beim Start kannst du die Speicherung ablehnen.</p>`,
  imprint: `<p><strong>OutTrack</strong> — privates, nicht-kommerzielles Projekt.</p>
    <p>Betreiber (Platzhalter — bitte ersetzen):<br>Dein Name<br>Musterstraße 1<br>12345 Musterstadt<br>E-Mail: hallo@beispiel.de</p>`,
  licenses: `<h4>Schrift</h4><p>Systemschrift des Geräts. Keine externen Fonts, keine Lizenz nötig.</p>
    <h4>Icon &amp; Gestaltung</h4><p>Eigenes Werk des OutTrack-Projekts.</p>
    <h4>Töne</h4><p>Werden per WebAudio live erzeugt — keine Audiodateien, keine Lizenzen.</p>
    <h4>Code</h4><p>Vanilla HTML/CSS/JS, keine Frameworks, keine Drittanbieter-Bibliotheken. Stand: September 2026 — 0 externe Abhängigkeiten.</p>` };
const LEGAL_TITLE = { privacy: "legal_privacy", terms: "legal_terms", refund: "legal_refund", cookies: "legal_cookies", imprint: "legal_imprint", licenses: "legal_licenses" };
let lastFocus = null;
function openLegal(key) {
  if (!LEGAL_BODY[key]) return;
  lastFocus = document.activeElement;
  $("#legal-title").textContent = t(LEGAL_TITLE[key]);
  $("#legal-body").innerHTML = LEGAL_BODY[key] + `<p class="muted">${t("legal_auth")}</p>`;
  $("#legal-sheet").hidden = false; $("#legal-backdrop").hidden = false;
  $("#legal-close").focus();
}
function closeLegal() {
  $("#legal-sheet").hidden = true; $("#legal-backdrop").hidden = true;
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}
document.querySelectorAll("[data-legal]").forEach(b => b.addEventListener("click", () => openLegal(b.dataset.legal)));
$("#legal-close").addEventListener("click", closeLegal);
$("#legal-backdrop").addEventListener("click", closeLegal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closeLegal(); closeSheet(); closeRedirect(); }
});

/* ---------- Export / Reset ---------- */
$("#export-data").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(db, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "outtrack-export.json";
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
  toast(t("ts_exported"));
});
$("#reset-data").addEventListener("click", () => {
  if (confirm(t("confirm_reset"))) {
    const lang = db.lang;
    localStorage.removeItem(KEY); db = load(); db.lang = lang;
    renderAll(); toast(t("ts_fresh"));
  }
});

/* ---------- Consent ---------- */
const CONSENT_KEY = "outtrack_consent";
function initConsent() {
  let c = null;
  try { c = localStorage.getItem(CONSENT_KEY); } catch {}
  if (c === "yes") { persistOK = true; return; }
  if (c === "no") { persistOK = false; return; }
  $("#cookie-banner").hidden = false;
}
$("#cookie-accept").addEventListener("click", () => {
  persistOK = true;
  try { localStorage.setItem(CONSENT_KEY, "yes"); } catch {}
  save(db);
  $("#cookie-banner").hidden = true;
  renderLangList(); toast(t("ts_store_on"));
});
$("#cookie-decline").addEventListener("click", () => {
  persistOK = false;
  try { localStorage.setItem(CONSENT_KEY, "no"); } catch {}
  $("#cookie-banner").hidden = true;
  renderLangList(); toast(t("ts_store_session"));
});

/* ---------- Toast / PWA ---------- */
let toastT;
function toast(msg) {
  const el = $("#toast"); el.textContent = msg; el.hidden = false;
  clearTimeout(toastT); toastT = setTimeout(() => el.hidden = true, 2200);
}
if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});

/* init */
applyLang(); renderAll(); drawTimer(); renderTimerLabels(); initConsent();
