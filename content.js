/* ============================================================
   MONOLITH.AI — content.js
   ALL site content lives here: UI dictionaries (EN/RU),
   open data arrays (INDUSTRIES, ARCHIVE_ITEMS, …).
   Adding an industry / capability / future case study =
   appending an object to an array. The engine (app.js)
   never needs to change.
   ============================================================ */

   //todo перевести на русский заголовки, сделать местами текст более выделяющимся и не пропадающим на фоне
/* ---------- Static UI strings (data-i18n keys) ---------- */
const UI = {
  'nav.main':          { en: '01 // MAIN',          ru: '01 // ГЛАВНАЯ' },
  'nav.lab':           { en: '02 // LAB',           ru: '02 // ЛАБ' },
  'nav.capabilities':  { en: '03 // CAPABILITIES',  ru: '03 // ВОЗМОЖНОСТИ' },
  'nav.brief':         { en: '04 // BRIEF',         ru: '04 // БРИФ' },

  'hero.label':        { en: '01 // MAIN — MANIFESTO', ru: '01 // ГЛАВНАЯ — МАНИФЕСТ' },
  'hero.tagline':      { en: 'Modern marketing for industries that build the world.',
                         ru: 'Современный маркетинг для индустрий, которые строят мир.' },
  'hero.p1':           { en: 'MONOLITH is is a digital production studio for traditional industries. We are a full-cycle agency: cinematics, presentations, web projects and spaces at the level of global brands, for the companies that build, manufacture and power the real world.',
                         ru: 'MONOLITH — студия цифрового продакшна для традиционных индустрий. Мы агентство полного цикла: синематики, презентации, веб-проекты и пространства уровня мировых брендов — для компаний, которые строят, производят и создают реальный мир.' },
  'hero.p2':           { en: 'Our procedural pipeline converts your technical documentation, catalogues and data into a brand’s visual language: precise as a blueprint, shot like cinema.',
                         ru: 'Наш процедурный пайплайн превращает вашу техническую документацию, каталоги и инженерные данные в визуальный язык бренда: точный, как чертёж, и снятый, как кино.' },

  'oldway.title':      { en: 'THE OLD WAY / THE MONOLITH WAY', ru: 'КАК СЕЙЧАС / КАК С НАМИ' },
  'oldway.colA':       { en: 'THE OLD WAY',      ru: 'КАК СЕЙЧАС' },
  'oldway.colB':       { en: 'THE MONOLITH WAY', ru: 'КАК С НАМИ' },

  'deliv.title':       { en: 'DELIVERABLES', ru: 'ЧТО ВЫ ПОЛУЧАЕТЕ' },
  'industries.title':  { en: 'INDUSTRIES',  ru: 'ИНДУСТРИИ' },
  'industries.open':   { en: 'The list is open. If your industry isn’t here yet — all the more interesting.',
                         ru: 'Список открыт. Если вашей индустрии здесь нет — тем интереснее задача.' },
  'principles.title':  { en: 'PRINCIPLES', ru: 'ПРИНЦИПЫ' },
  'principles.line':   { en: 'REMOTE-FIRST · WORLDWIDE · NDA BY DEFAULT',
                         ru: 'REMOTE-FIRST · WORLDWIDE · NDA BY DEFAULT' },

  'lab.label':         { en: '02 // LAB — PIPELINE', ru: '02 // ЛАБ — ПАЙПЛАЙН' },
  'lab.title':         { en: 'Four stages between your files and the final frame.',
                         ru: 'Четыре этапа между вашими файлами и финальным кадром.' },
  'matrix.title':      { en: 'INPUT MATRIX', ru: 'ЧТО НУЖНО НА ВХОДЕ' },
  'matrix.note':       { en: 'Not sure your materials are enough? Send what you have — in 90% of cases it is.',
                         ru: 'Не уверены, что вашего хватит? Пришлите что есть — в 90% случаев этого достаточно.' },
  'matrix.h0':         { en: 'PROJECT TYPE',      ru: 'ТИП ПРОЕКТА' },
  'matrix.h1':         { en: 'REQUIRED',          ru: 'ОБЯЗАТЕЛЬНО' },
  'matrix.h2':         { en: 'IMPROVES RESULT',   ru: 'УСИЛИТ РЕЗУЛЬТАТ' },
  'matrix.h3':         { en: 'NOT NEEDED',        ru: 'НЕ ТРЕБУЕТСЯ' },
  'compare.title':     { en: 'THREE WAYS TO GET IT DONE', ru: 'ТРИ СПОСОБА ПОЛУЧИТЬ ВИЗУАЛ' },
  'compare.h1':        { en: 'SHOOT / PRODUCTION', ru: 'СЪЁМКА / ПРОДАКШН' },
  'compare.h2':        { en: 'CLASSIC 3D STUDIO',  ru: 'КЛАССИЧЕСКАЯ 3D-СТУДИЯ' },
  'compare.h3':        { en: 'MONOLITH',           ru: 'MONOLITH' },
  'iter.title':        { en: 'ITERATION LOOP', ru: 'ЦИКЛ СОГЛАСОВАНИЯ' },
  'iter.note':         { en: 'Two revision rounds are included in every project.',
                         ru: 'Два раунда правок включены в каждый проект.' },
  'faq.title':         { en: 'FAQ', ru: 'ВОПРОСЫ' },

  'cap.label':         { en: '03 // CAPABILITIES', ru: '03 // ВОЗМОЖНОСТИ' },
  'cap.title':         { en: 'What MONOLITH does for business.',
                         ru: 'Что MONOLITH делает для бизнеса.' },
  'cap.badge':         { en: 'CAPABILITY INDEX — CASE STUDIES COMING SOON',
                         ru: 'ИНДЕКС ВОЗМОЖНОСТЕЙ — КЕЙСЫ ПОЯВЯТСЯ ПО МЕРЕ ВЫПОЛНЕНИЯ ПРОЕКТОВ' },
  'cap.cases':         { en: 'CASES', ru: 'КЕЙСЫ' },
  'cap.all':           { en: 'ALL',   ru: 'ВСЕ' },
  'cap.input':         { en: 'INPUT',  ru: 'ВХОД' },
  'cap.output':        { en: 'OUTPUT', ru: 'ВЫХОД' },

  'brief.label':       { en: '04 // BRIEF', ru: '04 // БРИФ' },
  'brief.title':       { en: 'Tell us what you build. We’ll show how it should look.',
                         ru: 'Расскажите, что вы создаёте. Мы покажем, как это должно выглядеть.' },
  'form.company':      { en: 'COMPANY',  ru: 'КОМПАНИЯ' },
  'form.industry':     { en: 'INDUSTRY', ru: 'СФЕРА' },
  'form.other':        { en: 'Other',    ru: 'Другое' },
  'form.needs':        { en: 'WHAT DO YOU NEED', ru: 'ЧТО НУЖНО' },
  'form.stage':        { en: 'PROJECT STAGE', ru: 'СТАДИЯ' },
  'form.email':        { en: 'EMAIL', ru: 'EMAIL' },
  'form.message':      { en: 'MESSAGE', ru: 'СООБЩЕНИЕ' },
  'form.msgPh':        { en: 'Project, deadlines, links to materials…', ru: 'Проект, сроки, ссылки на материалы…' },
  'form.submit':       { en: 'SEND BRIEF', ru: 'ОТПРАВИТЬ БРИФ' },
  'form.required':     { en: 'Fill in the highlighted fields.', ru: 'Заполните выделенные поля.' },
  'brief.doneTitle':   { en: 'BRIEF RECEIVED', ru: 'БРИФ ПОЛУЧЕН' },
  'brief.doneText':    { en: 'We’ll reply within 24 hours. If mail clients are more your thing — the same brief is one click away:',
                         ru: 'Ответим в течение 24 часов. Если привычнее почтой — тот же бриф в один клик:' },
  'brief.doneMail':    { en: 'OPEN IN MAIL CLIENT', ru: 'ОТКРЫТЬ В ПОЧТЕ' },
  'brief.again':       { en: 'NEW BRIEF', ru: 'НОВЫЙ БРИФ' },
  'steps.title':       { en: 'AFTER YOU HIT SEND', ru: 'ЧТО ПРОИСХОДИТ ПОСЛЕ ОТПРАВКИ' },
  'time.title':        { en: 'TIMELINES', ru: 'СРОКИ И МАСШТАБ' },
  'time.note':         { en: 'Exact pricing comes after the brief: it depends on source materials and output volume — not on how “complex” your product is.',
                         ru: 'Точная стоимость — после брифа: она зависит от исходников и объёма форматов, а не от «сложности» вашего продукта.' },
  'time.h0':           { en: 'PRODUCT', ru: 'ПРОДУКТ' },
  'time.h1':           { en: 'TIMELINE', ru: 'СРОК' },
  'time.h2':           { en: 'BUDGET SCALE', ru: 'МАСШТАБ БЮДЖЕТА' },
  'check.title':       { en: 'BRING TO THE BRIEF', ru: 'ЧТО ПРИГОДИТСЯ' },

  'footer.rights':     { en: 'MONOLITH.STUDIO — MODERN MARKETING FOR INDUSTRIES THAT BUILD THE WORLD',
                         ru: 'MONOLITH.STUDIO — MODERN MARKETING FOR INDUSTRIES THAT BUILD THE WORLD' },
  'status.sys':        { en: 'SYS_STATUS: ACTIVE', ru: 'SYS_STATUS: ACTIVE' },
  'overlay.reroute':   { en: 'REROUTE', ru: 'REROUTE' }
};

/* ---------- Hero metrics ---------- */
const HERO_METRICS = [
  { value: '4K–8K', label: { en: 'RESOLUTION',               ru: 'РАЗРЕШЕНИЕ' } },
  { value: '30+',        label: { en: 'OUTPUT FORMATS',           ru: 'ФОРМАТОВ НА ВЫХОДЕ' } },
  { value: '2–6',   label: { en: 'WEEKS, NOT MONTHS',        ru: 'НЕДЕЛИ ВМЕСТО МЕСЯЦЕВ' } },
  { value: '2',          label: { en: 'REVISION ROUNDS INCLUDED', ru: 'РАУНДА ПРАВОК ВКЛЮЧЕНЫ' } }
];

/* ---------- The old way / the Monolith way ---------- */
const OLDWAY_ROWS = [
  { old: { en: 'The product is labelled “unphotogenic” — agencies don’t know how to shoot rebar, feed mix or a cooling tower.',
           ru: 'Продукт считается «нефотогеничным» — агентства не знают, как снимать арматуру, комбикорм или градирню.' },
    neu: { en: 'We specialise in the textures of the real world and details.',
           ru: 'Мы специализируемся на фактуре и деталях реального мира.' } },
  { old: { en: 'The site isn’t built yet — there is nothing to film, but sales start now.',
           ru: 'Объект ещё не построен — снимать нечего, а продавать надо уже сейчас.' },
    neu: { en: 'We generate from project documentation: drawings and master plans become a cinematic before the first excavation.',
           ru: 'Генерируем из проектной документации: чертежи и генплан превращаются в синематик до первого котлована.' } },
  { old: { en: 'On-site shooting: permits, safety clearances, drones, weather, months of approvals.',
           ru: 'Съёмка на объекте: допуски, ТБ, дроны, погода, месяцы согласований.' },
    neu: { en: 'Not a single person on site. The sources are what you already have: CAD, a catalogue, phone photos.',
           ru: 'Ни одного человека на площадке. Исходники — то, что у вас уже есть: CAD, каталог, фото с телефона.' } },
  { old: { en: 'A revision means a reshoot. Changing the season in frame means a new expedition.',
           ru: 'Правка = пересъёмка. Смена сезона в кадре = новая экспедиция.' },
    neu: { en: 'A revision is a new project pass. Summer, winter, night, fog — parameters, not budgets.',
           ru: 'Правка = новая итерация проекта. Лето, зима, ночь, туман — параметры, а не бюджеты.' } },
  { old: { en: 'Marketing for “unfashionable” businesses gets leftover budgets and template design.',
           ru: 'На маркетинг «немодного» бизнеса выделяют остаток бюджета и шаблонный дизайн.' },
    neu: { en: 'Visuals at the level of luxury brands — for those who build, manufacture and move the world.',
           ru: 'Визуал уровня люксовых брендов — для тех, кто строит, производит и возит.' } }
];

/* ---------- Deliverables ---------- */
const DELIVERABLES = [
  { index: 'D_01',
    title: { en: 'CINEMATICS & RENDERS', ru: 'СИНЕМАТИКИ И РЕНДЕРЫ' },
    text:  { en: '4K video, 30–120 sec, plus still sets: your site, product or production line in its best light. For the website, the tender, the investor pitch.',
             ru: 'Видео 4K 30–120 сек и наборы стиллов: объект, продукт или производство в лучшем свете. Для сайта, тендера, инвест-питча.' } },
  { index: 'D_02',
    title: { en: 'LANDING PRESENTATIONS', ru: 'ЛЕНДИНГИ-ПРЕЗЕНТАЦИИ' },
    text:  { en: 'A single-page site for a project or product: generated visuals + structure + copy. Ready to publish.',
             ru: 'Одностраничный сайт проекта или продукта: сгенерированный визуал + структура + тексты. Готов к публикации.' } },
  { index: 'D_03',
    title: { en: 'SOCIAL MEDIA PACKS', ru: 'ПАКЕТ ДЛЯ СОЦСЕТЕЙ' },
    text:  { en: 'Vertical videos, cards, covers, post templates. A month of content for a company that “has nothing to post”.',
             ru: 'Вертикальные видео, карточки, обложки, шаблоны постов. Месяц контента для компании, у которой «нечего постить».' } },
  { index: 'D_04',
    title: { en: 'TRADE SHOWS & BOOTHS', ru: 'ВЫСТАВКИ И СТЕНДЫ' },
    text:  { en: 'Loops for booth screens, large-format banners, print layouts. Stand out at Bauma instead of blending into a wall of roll-ups.',
             ru: 'Лупы для экранов стенда, широкоформатные баннеры, макеты полиграфии. Выделиться на Bauma, а не слиться со стеной ролл-апов.' } },
  { index: 'D_05',
    title: { en: 'STOREFRONTS & SPACES', ru: 'ВИТРИНЫ И ПРОСТРАНСТВА' },
    text:  { en: 'Visualisations for storefronts, showrooms and retail floors: from a building-materials store to a machinery dealership.',
             ru: 'Визуализации оформления витрин, шоурумов и торговых залов: от магазина стройматериалов до дилерского центра техники.' } },
  { index: 'D_06',
    title: { en: 'AD CREATIVES', ru: 'РЕКЛАМНЫЕ КРЕАТИВЫ' },
    text:  { en: 'Static and video sets for performance campaigns, with variations for every placement format.',
             ru: 'Наборы статики и видео под performance-кампании, с вариациями под форматы площадок.' } },
  { index: 'D_07',
    title: { en: 'INTERACTIVE LANDINGS', ru: 'ИНТЕРАКТИВНЫЕ ЛЕНДИНГИ' },
    text:  { en: 'Creative interactive landing presentations: WebGL scenes, scroll storytelling, live 3D graphics. A project site that works as a showroom in itself.',
             ru: 'Креативные интерактивные лендинги-презентации: WebGL-сцены, скролл-сторителлинг, живая 3D-графика. Сайт проекта, который сам работает как шоурум.' } },
  { index: 'D_08',
    title: { en: 'GAMIFICATION', ru: 'ГЕЙМИФИКАЦИЯ' },
    text:  { en: 'Projects with game mechanics: product configurators, interactive site tours, quizzes and booth installations — engagement instead of a brochure.',
             ru: 'Проекты с игровыми механиками: конфигураторы продукта, интерактивные туры по объекту, квизы и инсталляции для стендов — вовлечение вместо брошюры.' } }
];

/* ---------- Tickers ---------- */
const SCENARIO_TICKER = {
  en: ['TENDER', 'INVESTOR PITCH', 'TRADE SHOW', 'PRODUCT LAUNCH', 'PROJECT SITE', 'SEASONAL CAMPAIGN', 'STOREFRONT', 'ANNUAL REPORT'],
  ru: ['ТЕНДЕР', 'ИНВЕСТ-ПИТЧ', 'ВЫСТАВКА', 'ЗАПУСК ПРОДУКТА', 'САЙТ ПРОЕКТА', 'СЕЗОННАЯ КАМПАНИЯ', 'ОФОРМЛЕНИЕ ВИТРИНЫ', 'ГОДОВОЙ ОТЧЁТ']
};

const INPUT_TICKER = {
  en: ['CAD', 'BIM', 'DWG', 'MASTER PLAN', 'PRODUCT CATALOGUE', 'PHONE PHOTOS', 'BRAND BOOK', 'PDF DECK', 'TECH SPECS'],
  ru: ['CAD', 'BIM', 'DWG', 'ГЕНПЛАН', 'КАТАЛОГ ПРОДУКЦИИ', 'ФОТО С ТЕЛЕФОНА', 'БРЕНДБУК', 'PDF-ПРЕЗЕНТАЦИЯ', 'ТЕХПАСПОРТ']
};

/* ---------- Industries — OPEN list. Append to extend.
     Also feeds the BRIEF form select (+ "Other" is always added). ---------- */
const INDUSTRIES = [
  { en: 'Construction & development',     ru: 'Строительство и девелопмент' },
  { en: 'Manufacturing & machinery',      ru: 'Производство и машиностроение' },
  { en: 'Energy & infrastructure',        ru: 'Энергетика и инфраструктура' },
  { en: 'Agro & food production',         ru: 'Агро и пищепром' },
  { en: 'Logistics, warehouses, ports',   ru: 'Логистика, склады, порты' },
  { en: 'Retail & trade spaces',          ru: 'Ритейл и торговые пространства' },
  { en: 'Special machinery & equipment',  ru: 'Спецтехника и оборудование' }
];

/* ---------- Principles ---------- */
const PRINCIPLES = [
  { index: 'P_01',
    title: { en: 'AN AGENCY, NOT AI ART', ru: 'НЕ ИИ-АРТ, А АГЕНТСТВО' },
    text:  { en: 'We don’t publish “neural pictures” and we don’t do fashion content. We are a creative agency for traditional industries: the economy that builds, manufactures and moves.',
             ru: 'Мы не публикуем «нейрокартинки» и не работаем с fashion-контентом. Мы — креативное агентство для традиционных индустрий: экономики, которая строит, производит и возит.' } },
  { index: 'P_02',
    title: { en: 'RESPECT FOR TEXTURE', ru: 'УВАЖЕНИЕ К ФАКТУРЕ' },
    text:  { en: 'Concrete, rolled steel, grain and brick are beautiful on their own. Our work is light, angle and environment — not decoration.',
             ru: 'Бетон, прокат, зерно и кирпич красивы сами по себе. Наша работа — свет, ракурс и среда, а не «украшательство».' } },
  { index: 'P_03',
    title: { en: 'ENGINEERING PRECISION', ru: 'ИНЖЕНЕРНАЯ ТОЧНОСТЬ' },
    text:  { en: 'Visuals match the documentation: dimensions, layout, materials.',
             ru: 'Визуал соответствует документации: габариты, компоновка, материалы.' } },
  { index: 'P_04',
    title: { en: 'ANY SCALE', ru: 'ЛЮБОЙ МАСШТАБ' },
    text:  { en: 'From a store window to a 70-hectare master plan. The budget changes; the quality standard doesn’t.',
             ru: 'От витрины магазина до мастер-плана на 70 гектаров. Меняется бюджет, не меняется стандарт качества.' } }
];

/* ---------- LAB: pipeline ---------- */
const PIPELINE = [
  { id: '01', name: 'INGEST',
    text: { en: 'We take any source material: CAD/BIM, master plans, catalogues, brand books, photos from the site or the shop floor.',
            ru: 'Принимаем любые исходники: CAD/BIM, генпланы, каталоги, брендбук, фото с площадки или прилавка.' } },
  { id: '02', name: 'RECONSTRUCT',
    text: { en: 'We assemble the digital scene: your site, product or space in exact geometry.',
            ru: 'Собираем цифровую сцену: объект, продукт или пространство в точной геометрии.' } },
  { id: '03', name: 'SIMULATE',
    text: { en: 'Light, weather, season, environment, people and machinery in frame. This is where the “boring” becomes cinematic.',
            ru: 'Свет, погода, сезон, среда, люди и техника в кадре. Здесь «скучное» становится кинематографичным.' } },
  { id: '04', name: 'RENDER',
    text: { en: 'Final formats: 4K video, stills, verticals, a landing page, print-ready layouts, 3D interactive spaces',
            ru: 'Финальные форматы: 4K-видео, стиллы, вертикали, лендинг, макеты для печати, 3Д интерактивные пространства' } }
];

/* ---------- LAB: input matrix ---------- */
const INPUT_MATRIX = [
  { type: { en: 'Large site / development', ru: 'Крупный объект / девелопмент' },
    req:  { en: 'Master plan or CAD/BIM model', ru: 'Генплан или CAD/BIM-модель' },
    plus: { en: 'Point cloud, site photos, brand book', ru: 'Облако точек, фото площадки, брендбук' },
    not:  { en: 'Film crew, drones', ru: 'Съёмочная группа, дроны' } },
  { type: { en: 'Production / plant', ru: 'Производство / завод' },
    req:  { en: 'Shop-floor photos or equipment specs', ru: 'Фото цехов или паспорта оборудования' },
    plus: { en: 'Line drawings, phone videos', ru: 'Чертежи линий, видео с телефона' },
    not:  { en: 'Stopping production for a shoot', ru: 'Остановка производства под съёмку' } },
  { type: { en: 'Product / equipment', ru: 'Продукт / оборудование' },
    req:  { en: 'A catalogue or 5–10 product photos', ru: 'Каталог или 5–10 фото продукта' },
    plus: { en: 'STEP/3D model, tech specs', ru: 'STEP/3D-модель, тех. характеристики' },
    not:  { en: 'Professional product photography', ru: 'Профессиональная предметная съёмка' } },
  { type: { en: 'Small business / storefront', ru: 'Малый бизнес / витрина' },
    req:  { en: 'Phone photos of the space, a logo', ru: 'Фото помещения с телефона, логотип' },
    plus: { en: 'Style wishes, competitor examples', ru: 'Пожелания по стилю, примеры конкурентов' },
    not:  { en: 'A design project, a brand book', ru: 'Дизайн-проект, брендбук' } }
];

/* ---------- LAB: comparison ---------- */
const COMPARE_ROWS = [
  { label: { en: 'Timeline', ru: 'Срок' },
    a: { en: '2–4 months', ru: '2–4 месяца' },
    b: { en: '2–3 months', ru: '2–3 месяца' },
    c: { en: '2–6 weeks', ru: '2–6 недель' } },
  { label: { en: 'Site not built yet', ru: 'Объект не построен' },
    a: { en: 'Impossible', ru: 'Невозможно' },
    b: { en: 'Possible', ru: 'Возможно' },
    c: { en: 'Possible', ru: 'Возможно' } },
  { label: { en: '“Unfashionable” product', ru: '«Немодный» продукт' },
    a: { en: 'Agencies pass, or go template', ru: 'Агентство не возьмётся или сделает шаблонно' },
    b: { en: 'Will take it', ru: 'Возьмётся' },
    c: { en: 'Our specialisation', ru: 'Наша специализация' } },
  { label: { en: 'Cost of an iteration', ru: 'Стоимость итерации' },
    a: { en: 'A reshoot ≈ a new budget', ru: 'Пересъёмка ≈ новый бюджет' },
    b: { en: 'Days–weeks of manual work', ru: 'Дни–недели ручного труда' },
    c: { en: 'Hours of generation', ru: 'Часы генерации' } },
  { label: { en: 'Season / time of day in frame', ru: 'Смена сезона / времени суток в кадре' },
    a: { en: 'A new expedition', ru: 'Новая экспедиция' },
    b: { en: 'Manual scene rework', ru: 'Ручная переработка сцены' },
    c: { en: 'A parameter', ru: 'Параметр' } },
  { label: { en: 'People and permits on site', ru: 'Люди и допуски на площадке' },
    a: { en: 'Mandatory', ru: 'Обязательно' },
    b: { en: 'Not needed', ru: 'Не нужны' },
    c: { en: 'Not needed', ru: 'Не нужны' } }
];

/* ---------- LAB: iterations ---------- */
const ITERATIONS = [
  { index: 'V_01',
    text: { en: 'A draft at 20–30% of the timeline: storyboard, key frames, style direction. We review it together, argue, choose.',
            ru: 'Черновик за 20–30% срока: раскадровка, ключевые кадры, направление стиля. Смотрим вместе, спорим, выбираем.' } },
  { index: 'V_02',
    text: { en: 'The clean version with your notes applied: full detail, final light and environment.',
            ru: 'Чистовая версия с учётом комментариев: полная детализация, финальный свет и среда.' } },
  { index: 'V_FINAL',
    text: { en: 'Polish and packaging into every format.',
            ru: 'Полировка и упаковка во все форматы.' } }
];

/* ---------- LAB: FAQ ---------- */
const FAQ = [
  { q: { en: 'My product is boring: rebar, feed mix, dry mortar. What will you do with it?',
         ru: 'Мой продукт скучный: арматура, комбикорм, сухие смеси. Что вы с ним сделаете?' },
    a: { en: 'There are no boring products — only products no one has ever shot properly. Rebar can read as steel graphics; feed mix as a stream of golden grain in morning light. We do for “unfashionable” products what advertising has done for cars and perfume for decades: light, angle, environment, scale.',
         ru: 'Скучных продуктов нет, есть продукты, которые никогда не снимали правильно. Арматуру можно показать как графику из стали, комбикорм — как поток золотого зерна в утреннем свете. Мы делаем с «немодными» продуктами то, что реклама десятилетиями делала с автомобилями и парфюмом: свет, ракурс, среда, масштаб.' } },
  { q: { en: 'How closely will the picture match the real project?',
         ru: 'Насколько картинка будет соответствовать реальному объекту?' },
    a: { en: 'If documentation exists (CAD/BIM, master plan, drawings), geometry and layout follow it: this is a visualisation of your project, not a “neural fantasy loosely based on it”. Atmosphere — light, weather, staffage — is an artistic layer on top of a precise base, and it is always approved with you.',
         ru: 'Если на входе есть документация (CAD/BIM, генплан, чертежи), геометрия и компоновка соответствуют ей: это визуализация вашего проекта, а не «фантазия нейросети по мотивам». Атмосфера — свет, погода, стаффаж — художественный слой поверх точной основы, и он всегда согласуется с вами.' } },
  { q: { en: 'What about confidentiality? Our drawings are under NDA.',
         ru: 'Что с конфиденциальностью? У нас чертежи под NDA.' },
    a: { en: 'NDA comes before any materials change hands — by default. Sources are stored in an isolated project environment, never used for model training, and deleted on completion unless we agree to archive them for future updates.',
         ru: 'NDA — до передачи любых материалов, по умолчанию. Исходники хранятся в изолированном контуре проекта, не используются для обучения моделей и удаляются по завершении, если не договорились об архиве для будущих обновлений.' } },
  { q: { en: 'The project will change in six months. Does the film go to waste?',
         ru: 'Проект изменится через полгода. Ролик придётся выбрасывать?' },
    a: { en: 'No. The project scene is preserved, so an update is an increment, not a from-scratch production: we swap the changed buildings, refresh facades, regenerate the affected shots. Typically 15–30% of the original project cost.',
         ru: 'Нет. Сцена проекта сохраняется, и обновление — это инкремент, а не производство с нуля: заменяем изменившиеся корпуса, обновляем фасады, перегенерируем затронутые кадры. Обычно это 15–30% стоимости исходного проекта.' } },
  { q: { en: 'All I have is phone photos. Is that enough?',
         ru: 'У меня только фотографии с телефона. Этого хватит?' },
    a: { en: 'In most cases — yes. For a storefront, a retail floor or a product, 5–10 photos in ordinary light are enough. We reconstruct the space and show design options photorealistically. More sources mean more precision, but the entry barrier is minimal.',
         ru: 'В большинстве случаев — да. Для витрины, торгового зала или продукта достаточно 5–10 фотографий при обычном освещении. Мы восстановим пространство и покажем варианты оформления фотореалистично. Чем больше исходников, тем точнее результат, но порог входа — минимальный.' } },
  { q: { en: 'How are you different from a freelancer with a neural network?',
         ru: 'Чем вы отличаетесь от фрилансера с нейросетью?' },
    a: { en: 'The way a print house differs from a printer. The models are available to everyone; the result is defined by pipeline, art direction, engineering precision and accountability for deadlines. We deliver not “pictures from a chat” but coordinated production: verified geometry, one consistent style across all materials, and files ready for print, broadcast and tender.',
         ru: 'Тем же, чем типография отличается от принтера. Модели доступны всем; результат определяют пайплайн, художественная постановка, инженерная точность и ответственность за сроки. Мы отдаём не «картинки из чата», а согласованный продакшн: выверенную геометрию, единый стиль всех материалов и файлы, готовые к печати, эфиру и тендеру.' } }
];

/* ---------- 03 CAPABILITIES / future CASES.
     One array, one card renderer. kind: 'capability' | 'case'.
     A capability shows INPUT → OUTPUT; a future case adds
     client, location, year, quote and real media in assets/cases/.
     Appending the first kind:'case' object automatically creates
     the CASES section and hides the "coming soon" badge. ---------- */
const ARCHIVE_ITEMS = [
  { kind: 'capability', id: 'cap-object', index: 'CAP_01',
    title:  { en: 'THE SITE BEFORE IT’S BUILT', ru: 'ОБЪЕКТ ДО ПОСТРОЙКИ' },
    sector: { en: 'OBJECTS', ru: 'ОБЪЕКТЫ' },
    input:  { en: 'CAD/BIM, master plan, facade designs', ru: 'CAD/BIM, генплан, фасадные решения' },
    output: { en: 'Cinematic 4K 30–120 sec, stills, tender angles', ru: 'Синематик 4K 30–120 сек, стиллы, ракурсы для тендера' },
    metrics: [
      { label: { en: 'RESOLUTION, K', ru: 'РАЗРЕШЕНИЕ, K' }, value: '4', num: 4 },
      { label: { en: 'ANGLES PER PROJECT', ru: 'РАКУРСОВ ЗА ПРОЕКТ' }, value: '24', num: 24 },
      { label: { en: 'WEEKS', ru: 'НЕДЕЛЬ' }, value: '4–6', num: 5 } ],
    media: { type: 'placeholder', src: '' },
    description: { en: 'A cinematic of a building, plant, terminal or district — before the first excavation. Project documentation becomes cinema: the site shown finished, in its environment, at any hour and season.',
                   ru: 'Синематик здания, завода, терминала или района — до первого котлована. Проектная документация превращается в кино: объект показан построенным, в среде, в любое время суток и сезон.' } },

  { kind: 'capability', id: 'cap-production', index: 'CAP_02',
    title:  { en: 'PRODUCTION WITHOUT A SHOOT', ru: 'ПРОИЗВОДСТВО БЕЗ СЪЁМКИ' },
    sector: { en: 'PRODUCTION', ru: 'ПРОИЗВОДСТВО' },
    input:  { en: 'Shop-floor photos, equipment specs, line drawings', ru: 'Фото цехов, паспорта оборудования, чертежи линий' },
    output: { en: 'Production film, stills for site and decks', ru: 'Видео производства, стиллы для сайта и презентаций' },
    metrics: [
      { label: { en: 'DAYS ON SITE', ru: 'ДНЕЙ НА ПЛОЩАДКЕ' }, value: '0', num: 1 },
      { label: { en: 'SCENES', ru: 'СЦЕН' }, value: '12', num: 12 },
      { label: { en: 'WEEKS', ru: 'НЕДЕЛЬ' }, value: '3–4', num: 4 } ],
    media: { type: 'placeholder', src: '' },
    description: { en: 'Shops, lines and processes — with no production stoppage, permits or film crews. A working plant shown the way a camera physically can’t: through-spans, cutaways, macro shots of processes.',
                   ru: 'Цеха, линии и процессы — без остановки производства, допусков и съёмочных групп. Действующее предприятие показано так, как его не снять физически: сквозные пролёты, разрезы, макросъёмка процессов.' } },

  { kind: 'capability', id: 'cap-product', index: 'CAP_03',
    title:  { en: 'PRODUCT WITHOUT A PHOTO STUDIO', ru: 'ПРОДУКТ БЕЗ ФОТОСТУДИИ' },
    sector: { en: 'PRODUCT', ru: 'ПРОДУКТ' },
    input:  { en: 'A catalogue, STEP/3D model or 5–10 photos', ru: 'Каталог, STEP/3D-модель или 5–10 фото' },
    output: { en: 'Hero shots, usage environments, catalogue series', ru: 'Предметные кадры, среда применения, серия для каталога' },
    metrics: [
      { label: { en: 'FRAMES PER SKU', ru: 'КАДРОВ НА SKU' }, value: '8', num: 8 },
      { label: { en: 'SKU PER PROJECT', ru: 'SKU ЗА ПРОЕКТ' }, value: '40', num: 40 },
      { label: { en: 'WEEKS', ru: 'НЕДЕЛИ' }, value: '2', num: 2 } ],
    media: { type: 'placeholder', src: '' },
    description: { en: 'Product photography for industrial goods — from a catalogue and a 3D model. Equipment, tools, materials in staged light and real usage environments, the way watches and cars are shot.',
                   ru: 'Предметная съёмка индустриального продукта — из каталога и 3D-модели. Оборудование, инструмент, материалы — в постановочном свете и среде применения, как снимают часы и автомобили.' } },

  { kind: 'capability', id: 'cap-landing', index: 'CAP_04',
    title:  { en: 'LANDING PRESENTATION', ru: 'ЛЕНДИНГ-ПРЕЗЕНТАЦИЯ' },
    sector: { en: 'DIGITAL', ru: 'DIGITAL' },
    input:  { en: 'Project materials, brand book if it exists', ru: 'Материалы проекта, брендбук (если есть)' },
    output: { en: 'A publish-ready landing page + visual sources', ru: 'Готовый к публикации лендинг + исходники визуала' },
    metrics: [
      { label: { en: 'SCREENS', ru: 'ЭКРАНОВ' }, value: '8', num: 8 },
      { label: { en: 'LANGUAGES', ru: 'ЯЗЫКОВ' }, value: '2', num: 2 },
      { label: { en: 'WEEKS', ru: 'НЕДЕЛИ' }, value: '1–2', num: 2 } ],
    media: { type: 'placeholder', src: '' },
    description: { en: 'A single-page site for one project or product: generated visuals, structure, copy. For a sales launch, a tender or an investor pitch — when you need a page for one decision, not “a website in general”.',
                   ru: 'Одностраничный сайт проекта или продукта: сгенерированный визуал, структура, тексты. Для запуска продаж, тендера или инвест-питча — когда нужен не «сайт вообще», а страница одного решения.' } },

  { kind: 'capability', id: 'cap-spaces', index: 'CAP_05',
    title:  { en: 'STOREFRONTS & SPACES', ru: 'ВИТРИНЫ И ПРОСТРАНСТВА' },
    sector: { en: 'SPACES', ru: 'ПРОСТРАНСТВА' },
    input:  { en: 'Photos of the space, a logo, the product range', ru: 'Фото помещения, логотип, ассортимент' },
    output: { en: 'Design options, layouts for print and production', ru: 'Варианты оформления, макеты для печати и производства' },
    metrics: [
      { label: { en: 'CONCEPT OPTIONS', ru: 'ВАРИАНТОВ КОНЦЕПЦИИ' }, value: '3', num: 3 },
      { label: { en: 'LOCATIONS', ru: 'ТОЧЕК СЕТИ' }, value: '∞', num: 20 },
      { label: { en: 'WEEKS', ru: 'НЕДЕЛИ' }, value: '1–2', num: 2 } ],
    media: { type: 'placeholder', src: '' },
    description: { en: 'Storefronts, showrooms, retail floors and exhibition booths — first as photorealistic visualisations of the options, then as production-ready layouts.',
                   ru: 'Оформление витрин, шоурумов, торговых залов и выставочных стендов — сначала фотореалистичная визуализация вариантов, потом макеты для производства.' } },

  { kind: 'capability', id: 'cap-campaign', index: 'CAP_06',
    title:  { en: 'FULL CAMPAIGN', ru: 'КАМПАНИЯ ПОД КЛЮЧ' },
    sector: { en: 'CAMPAIGNS', ru: 'КАМПАНИИ' },
    input:  { en: 'A product/site + campaign goals', ru: 'Продукт/объект + цели кампании' },
    output: { en: 'Key visual, adaptations to every format, usage guide', ru: 'Ключевой имидж, адаптации во все форматы, гайд применения' },
    metrics: [
      { label: { en: 'FORMATS', ru: 'ФОРМАТОВ' }, value: '30+', num: 30 },
      { label: { en: 'CREATIVES', ru: 'КРЕАТИВОВ' }, value: '120', num: 120 },
      { label: { en: 'WEEKS', ru: 'НЕДЕЛИ' }, value: '2–3', num: 3 } ],
    media: { type: 'placeholder', src: '' },
    description: { en: 'An advertising or seasonal campaign: a single visual system from the key image to every placement — out-of-home, social, catalogue, booth screens.',
                   ru: 'Рекламная или сезонная кампания: единая визуальная система от ключевого имиджа до форматов площадок — наружка, соцсети, каталог, экраны стенда.' } }

  /* Future real case — same schema plus client fields, e.g.:
  { kind: 'case', id: 'case-yourclient', index: 'C_01',
    title: {en,ru}, sector: {en,ru}, client: 'CLIENT NAME',
    location: 'City, Country', year: 2026,
    quote: { text: {en,ru}, author: {en,ru} },
    input: {en,ru}, output: {en,ru},
    metrics: [{label:{en,ru}, value:'…', num: 0}],
    media: { type: 'image' | 'video', src: 'assets/cases/…' },
    description: {en,ru} }
  */
];

/* ---------- BRIEF: steps after send ---------- */
const BRIEF_STEPS = [
  { index: 'S_01', tag: { en: '24 HOURS', ru: '24 ЧАСА' },
    text: { en: 'We reply and request any missing materials. If the project isn’t for us — we say so straight away.',
            ru: 'Отвечаем и запрашиваем недостающие исходники. Если проект не наш — честно говорим сразу.' } },
  { index: 'S_02', tag: { en: '30 MINUTES', ru: '30 МИНУТ' },
    text: { en: 'A call: goals, audience, deadlines (a trade show? a launch?), a walkthrough of your materials.',
            ru: 'Созвон: цели, аудитория, дедлайны (выставка? запуск?), разбор ваших материалов.' } },
  { index: 'S_03', tag: { en: '3 DAYS', ru: '3 ДНЯ' },
    text: { en: 'A proposal: storyboard / direction sketch, scope, timeline and cost. Then — V_01.',
            ru: 'Предложение: раскадровка/эскиз направления, состав работ, срок и стоимость. Дальше — V_01.' } }
];

/* ---------- BRIEF: timelines ---------- */
const TIMELINES = [
  { product: { en: 'Social media pack (a month of content)', ru: 'Пакет для соцсетей (месяц контента)' },
    time: { en: 'from 1 week', ru: 'от 1 недели' }, tier: 1 },
  { product: { en: 'Storefront / space design', ru: 'Оформление витрины / пространства' },
    time: { en: '1–2 weeks', ru: '1–2 недели' }, tier: 1 },
  { product: { en: 'Landing presentation', ru: 'Лендинг-презентация' },
    time: { en: '1–2 weeks', ru: '1–2 недели' }, tier: 2 },
  { product: { en: 'Trade show pack (booth + materials)', ru: 'Выставочный пакет (стенд + материалы)' },
    time: { en: '2–3 weeks', ru: '2–3 недели' }, tier: 3 },
  { product: { en: 'Interactive landing / gamified project', ru: 'Интерактивный лендинг / геймификация' },
    time: { en: '2–4 weeks', ru: '2–4 недели' }, tier: 3 },
  { product: { en: 'Cinematic 60–120 sec + stills', ru: 'Синематик 60–120 сек + стиллы' },
    time: { en: '4–6 weeks', ru: '4–6 недель' }, tier: 4 },
  { product: { en: 'Full project pack (cinematic + landing + campaign)', ru: 'Полный пакет проекта (синематик + лендинг + кампания)' },
    time: { en: '6–8 weeks', ru: '6–8 недель' }, tier: 5 }
];

/* ---------- BRIEF: checklist ---------- */
const CHECKLIST = [
  { en: 'A link to source materials: drawings, catalogue, photos — whatever exists, in any form',
    ru: 'Ссылка на исходники: чертежи, каталог, фото — что есть, в любом виде' },
  { en: 'Project stage: idea / design / construction / operating',
    ru: 'Стадия проекта: идея / проектирование / стройка / работает' },
  { en: 'The deadline, if it’s external: a trade show, a tender, a sales launch',
    ru: 'Дедлайн, если он внешний: выставка, тендер, запуск продаж' },
  { en: '2–3 references you like (not necessarily from your industry)',
    ru: '2–3 референса «нравится» (не обязательно из вашей отрасли)' },
  { en: 'Who signs off the result (one person is faster; a committee — we allow for time)',
    ru: 'Кто согласует результат (один человек — быстрее, комитет — закладываем время)' }
];

/* ---------- BRIEF: form options ---------- */
const FORM_NEEDS = [
  { en: 'Cinematic / renders', ru: 'Синематик / рендеры' },
  { en: 'Landing page',        ru: 'Лендинг' },
  { en: 'Social media',        ru: 'Соцсети' },
  { en: 'Trade show',          ru: 'Выставка' },
  { en: 'Storefront / space',  ru: 'Витрина / пространство' },
  { en: 'Ad campaign',         ru: 'Реклама' },
  { en: 'Interactive / gamification', ru: 'Интерактив / геймификация' },
  { en: 'Not sure — advise me', ru: 'Не знаю — подскажите' }
];

const FORM_STAGES = [
  { en: 'Idea',              ru: 'Идея' },
  { en: 'Design stage',      ru: 'Проект' },
  { en: 'Under construction', ru: 'Стройка' },
  { en: 'Operating business', ru: 'Действующий бизнес' }
];

const CONTACT_EMAIL = 'hello@monolith.studio';
