/* ============================================================
   MONOLITH.CONTACT — content.js
   ALL site content lives here: UI dictionaries (EN/RU),
   open data arrays (INDUSTRIES, ARCHIVE_ITEMS, …).
   Adding an industry / capability / future case study =
   appending an object to an array. The engine (app.js)
   never needs to change.
   ============================================================ */

/* ---------- Static UI strings (data-i18n keys) ---------- */
const UI = {
  'nav.main':          { en: '01 // MAIN',          ru: '01 // ГЛАВНАЯ' },
  'nav.lab':           { en: '02 // HOW IT WORKS',  ru: '02 // КАК ЭТО УСТРОЕНО' },
  'nav.services':      { en: '03 // SERVICES',      ru: '03 // УСЛУГИ' },
  'nav.capabilities':  { en: '04 // WORK',          ru: '04 // РАБОТЫ' },
  'nav.brief':         { en: '05 // BRIEF',         ru: '05 // БРИФ' },

  'hero.label':        { en: '01 // MAIN', ru: '01 // ГЛАВНАЯ' },
  'hero.tagline':      { en: 'Product visuals from your drawings and catalogue. Consulting and AI pipelines for your team.',
                         ru: 'Визуал продукта из чертежей и каталога. Консультации и ИИ-пайплайны для вашей команды.' },
  'hero.p1':           { en: 'Hero shots, usage environments and renders from your catalogue data; sections, exploded views and 360° if you have 3D models. Nobody on site. First frames — after we receive your source files, timing agreed in the brief.',
                         ru: 'Герой-рендеры, среда применения, рендеры и сцены применения — из данных каталога; разрезы, взрыв-схемы и 360° — если есть 3D-модели. Никого на площадке. Первые кадры — после получения исходников, срок согласуем в брифе.' },
  'hero.p2':           { en: 'Geometry comes from your CAD, BIM or catalogue model and does not drift. We build light, setting and the format pack.',
                         ru: 'Геометрия берётся из вашей CAD, BIM или каталожной модели и не дрейфует. Мы собираем свет, среду и пакет форматов.' },
  'hero.p3':           { en: 'Consulting and AI pipelines: we find where the team loses hours and close the gap with an audit, agents and small software. We start with a pilot on one process: 2 weeks, price fixed before the start.',
                         ru: 'Консультации и ИИ-пайплайны: находим, где команда теряет часы, и закрываем это аудитом, агентами и небольшим софтом. Начинаем с пилота на одном процессе: 2 недели, цена фиксирована до старта.' },
  'hero.ctaTrial':     { en: 'Get a test render', ru: 'Получить тестовый рендер' },
  'hero.ctaAi':        { en: 'Discuss an AI task', ru: 'Обсудить ИИ-задачу' },
  'hero.ctaLab':       { en: 'How it works',      ru: 'Как это устроено' },
  'cta.sticky':        { en: 'Send brief',        ru: 'Отправить бриф' },

  'economy.title':     { en: 'WHAT IT COSTS TO COVER A CATALOGUE', ru: 'СКОЛЬКО СТОИТ ЗАКРЫТЬ КАТАЛОГ' },
  'economy.note':      { en: 'Order-of-magnitude for ~500 SKU. Exact quote after the brief — it depends on source files and output volume, not on how “complex” the product looks.',
                         ru: 'Порядок цифр на покрытие ~500 SKU. Точная стоимость — после брифа: зависит от исходников и объёма форматов, а не от «сложности» продукта.' },
  'economy.h0':        { en: 'METHOD', ru: 'СПОСОБ' },
  'economy.h1':        { en: 'FIRST MATERIALS', ru: 'ПЕРВЫЕ МАТЕРИАЛЫ' },
  'economy.h2':        { en: 'BUDGET ORDER, 500 SKU', ru: 'ПОРЯДОК БЮДЖЕТА, 500 SKU' },
  'economy.ours':       { en: 'OUR STUDIO’S PATH', ru: 'ПУТЬ НАШЕЙ СТУДИИ' },
  'packs.title':       { en: 'PACKAGES FROM', ru: 'ПАКЕТЫ ОТ' },
  'packs.note':        { en: 'Lower bounds. A trial render of one product is free.',
                         ru: 'Нижние границы. Пробный рендер одного изделия — бесплатно.' },

  'oldway.title':      { en: 'THE OLD WAY / THE MONOLITH WAY', ru: 'КАК СЕЙЧАС / КАК С НАМИ' },
  'oldway.colA':       { en: 'NOW',      ru: 'СЕЙЧАС' },
  'oldway.colB':       { en: 'WITH US',  ru: 'С НАМИ' },

  'deliv.title':       { en: 'WHAT YOU GET', ru: 'ЧТО ВЫ ПОЛУЧАЕТЕ' },
  'industries.title':  { en: 'INDUSTRIES',  ru: 'ИНДУСТРИИ' },
  'industries.open':   { en: 'The list is open. If your industry isn’t here yet — all the more interesting.',
                         ru: 'Список открыт. Если вашей индустрии здесь нет — тем интереснее задача.' },
  'principles.title':  { en: 'PRINCIPLES', ru: 'ПРИНЦИПЫ' },
  'principles.line':   { en: 'REMOTE-FIRST',
                         ru: 'РАБОТАЕМ УДАЛЁННО' },

  'ai.label':          { en: 'ALSO // AI IN COMPANY PROCESSES', ru: 'ТАКЖЕ // ИИ В ПРОЦЕССАХ КОМПАНИИ' },
  'ai.lead':           { en: 'Besides visuals, we help teams put AI to work: we find where the hours go and close the gap with automation or small custom software. We start with one process and a measurement, not with buying subscriptions.',
                         ru: 'Кроме визуала мы помогаем командам внедрять ИИ в работу: находим, где уходят часы, и закрываем это автоматизацией или небольшим софтом. Начинаем с одного процесса и замера, а не с покупки подписок.' },
  'ai.pilot':          { en: 'Pilot: 2 weeks, one process, price fixed before the start, measured before and after. Code, data and access stay with you.',
                         ru: 'Пилот: 2 недели, один процесс, цена фиксирована до старта, замер до и после. Код, данные и доступы остаются у вас.' },
  'ai.cta':            { en: 'Discuss a task', ru: 'Обсудить задачу' },
  'ai.all':            { en: 'All services', ru: 'Все услуги' },

  'lab.label':         { en: '02 // HOW IT WORKS — PIPELINE', ru: '02 // КАК ЭТО УСТРОЕНО — ПРОЦЕСС' },
  'lab.title':         { en: 'Four stages between your files and the final frame.',
                         ru: 'Четыре этапа между вашими файлами и финальным кадром.' },
  'lab.tech':          { en: 'Generative models are used for environment, light and finish. The product is not invented. If a frame is synthetic and will run as advertising, we mark it to the transparency rules in force (EU AI Act, Art. 50, since 2 August 2026).',
                         ru: 'Генеративные модели используем для среды, света и финиша. Изделие не «придумывается». Если кадр синтетический и идёт в рекламу — маркируем его по действующим требованиям к прозрачности (EU AI Act, ст. 50, с 2 августа 2026).' },
  'lab.auto.label':    { en: 'PROCESS AUTOMATION // TAILORED TO YOUR COMPANY',
                         ru: 'АВТОМАТИЗАЦИЯ ПРОЦЕССОВ // ПОД ВАШУ КОМПАНИЮ' },
  'lab.auto.lead':     { en: 'Besides visuals, we set up a process around your company. We take one process — enquiries, reports, quotes, answers from a knowledge base — measure it, automate it around your spreadsheets, mail, CRM and rules, and hand it over with access, documentation and team training. Not a boxed product, but a setup for the way you work.',
                         ru: 'Кроме визуала мы настраиваем процесс под вашу компанию. Берём один процесс — заявки, отчёты, КП, ответы по базе знаний, — замеряем, автоматизируем под ваши таблицы, почту, CRM и правила и передаём вам: с доступами, документацией и обучением команды. Не коробка, а настройка под вашу работу.' },
  'lab.auto.cta':      { en: 'Discuss a task', ru: 'Обсудить задачу' },
  'matrix.title':      { en: 'WHAT WE NEED FROM YOU', ru: 'ЧТО НУЖНО НА ВХОДЕ' },
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
  'compare.ours':      { en: 'OUR PATH', ru: 'НАШ ПУТЬ' },
  'iter.title':        { en: 'ITERATION LOOP', ru: 'ЦИКЛ СОГЛАСОВАНИЯ' },
  'iter.note':         { en: 'Two revision rounds are included in every project. A full cinematic still takes weeks — the 24–48h figure is the first stills after we have the model.',
                         ru: 'Два раунда правок включены в каждый проект. Полный синематик по-прежнему занимает недели — 24–48 часов это первые кадры после получения модели.' },
  'faq.title':         { en: 'FAQ', ru: 'ВОПРОСЫ' },
  'lab.also':          { en: 'Need process automation rather than a picture?',
                         ru: 'Нужна не картинка, а автоматизация процесса?' },
  'lab.alsoLink':      { en: 'Services', ru: 'Услуги' },

  'srv.label':         { en: '03 // SERVICES', ru: '03 // УСЛУГИ' },
  'srv.title':         { en: 'What we make — and what it costs.',
                         ru: 'Что мы делаем — и сколько это стоит.' },
  'srv.lead':          { en: 'Visuals from your CAD model, websites, software, AI pipelines and training apps. Prices are lower bounds: the final figure depends on source files and scope.',
                         ru: 'Визуал из вашей CAD-модели, сайты, софт, ИИ-пайплайны и обучающие приложения. Цены — нижние границы: итог зависит от исходников и объёма работ.' },
  'srv.vizTitle':      { en: 'VISUALS FROM YOUR MODEL', ru: 'ВИЗУАЛ ИЗ ВАШЕЙ МОДЕЛИ' },
  'srv.buildTitle':    { en: 'AI IN PROCESSES, SOFTWARE & SITES', ru: 'ИИ В ПРОЦЕССАХ, СОФТ И САЙТЫ' },
  'srv.buildNote':     { en: 'We find where the team loses hours and close the gap with automation or small software. We start with one process and a measurement. Code, data and access stay with you. A prototype and production are different modes — we agree which one before the start.',
                         ru: 'Находим, где команда теряет часы, и закрываем это автоматизацией или небольшим софтом. Начинаем с одного процесса и замера. Код, данные и доступы остаются у вас. Прототип и продакшн — разные режимы, договариваемся о нужном до старта.' },
  'srv.lossTitle':     { en: 'WHERE THE TIME GOES', ru: 'ГДЕ ТЕРЯЕТСЯ ВРЕМЯ' },
  'srv.pilotTitle':    { en: 'A 2-WEEK PILOT', ru: 'ПИЛОТ ЗА 2 НЕДЕЛИ' },
  'srv.pilotText':     { en: 'We take one process — say, enquiry sorting or report preparation. We measure how long it takes now, automate it and measure again. The price is fixed before the start. If the result falls short, we stop there.',
                         ru: 'Берём один процесс — например, разбор заявок или подготовку отчёта. Замеряем, сколько времени он занимает сейчас, автоматизируем и замеряем снова. Цена фиксирована до старта. Если результат не устроит — дальше не идём.' },
  'srv.pilotCta':      { en: 'Propose a process for a pilot', ru: 'Предложить процесс для пилота' },
  'srv.dataTitle':     { en: 'YOUR DATA STAYS YOURS', ru: 'ДАННЫЕ ОСТАЮТСЯ ВАШИМИ' },
  'srv.soonBuild':     { en: 'CASES IN PREPARATION', ru: 'КЕЙСЫ В ПОДГОТОВКЕ' },
  'srv.trialTitle':    { en: 'Trial render of one product — free',
                         ru: 'Пробный рендер одного изделия — бесплатно' },
  'srv.trialText':     { en: 'The cheapest way to check the result on your own geometry before any budget is discussed.',
                         ru: 'Самый дешёвый способ проверить результат на вашей геометрии, не обсуждая бюджет.' },
  'srv.trialCta':      { en: 'Get a test render', ru: 'Получить тестовый рендер' },
  'srv.from':          { en: 'FROM',     ru: 'ОТ' },
  'srv.time':          { en: 'TIMELINE', ru: 'СРОК' },
  'srv.proof':         { en: 'EXAMPLES', ru: 'ПРИМЕРЫ' },
  'srv.soon':          { en: 'DEMO PROJECT IN PREPARATION', ru: 'ДЕМО В ПОДГОТОВКЕ' },
  'srv.request':       { en: 'Request', ru: 'Запросить' },
  'srv.also':          { en: 'ALSO — FORMATS FOR CAMPAIGNS AND CHANNELS', ru: 'ТАКЖЕ — ФОРМАТЫ ДЛЯ КАМПАНИЙ И КАНАЛОВ' },
  'srv.afterBrief':    { en: 'after the brief', ru: 'после брифа' },
  'srv.howTitle':      { en: 'HOW WE PRICE IT', ru: 'КАК МЫ СЧИТАЕМ ЦЕНУ' },
  'srv.howText':       { en: 'The price depends on source files and output volume, not on how “complex” the product looks. Ranges are wide on purpose. The exact figure comes with the proposal, three days after the brief.',
                         ru: 'Цена зависит от исходников и объёма материалов, а не от того, насколько «сложным» выглядит изделие. Вилки широкие намеренно. Точная сумма — в предложении, через три дня после брифа.' },
  'srv.howLink':       { en: 'How it works', ru: 'Как это устроено' },
  'srv.unsureTitle':   { en: 'Not sure what to choose?', ru: 'Не знаете, что выбрать?' },
  'srv.unsureCta':     { en: 'Ask us', ru: 'Спросить у нас' },
  'srv.filter.all':    { en: 'ALL', ru: 'ВСЕ' },
  'srv.filter.viz':    { en: 'VISUALS', ru: 'ВИЗУАЛ' },
  'srv.filter.auto':   { en: 'PROCESS AUTOMATION', ru: 'АВТОМАТИЗАЦИЯ ПРОЦЕССОВ' },

  'cap.label':         { en: '04 // WORK', ru: '04 // РАБОТЫ' },
  'cap.title':         { en: 'Demo projects: visuals on open and our own models, software on sample data.',
                         ru: 'Демо-проекты: визуал на открытых и наших моделях, софт на условных данных.' },
  'cap.all':           { en: 'ALL',   ru: 'ВСЕ' },
  'cap.input':         { en: 'INPUT',  ru: 'ВХОД' },
  'cap.output':        { en: 'OUTPUT', ru: 'ВЫХОД' },
  'cap.footnote':      { en: 'The number of deliverables, source files and timeline — we discuss those individually for each project.',
                         ru: 'Количество материалов, исходники и сроки обсуждаем индивидуально для каждого проекта.' },
  'cap.toServices':    { en: 'Services and prices', ru: 'Услуги и цены' },

  'case.demo_open':    { en: 'DEMO PROJECT ON AN OPEN MODEL', ru: 'ДЕМОНСТРАЦИОННЫЙ ПРОЕКТ НА ОТКРЫТОЙ МОДЕЛИ' },
  'case.demo_own':     { en: 'OUR OWN PARAMETRIC MODEL', ru: 'СОБСТВЕННАЯ ПАРАМЕТРИЧЕСКАЯ МОДЕЛЬ' },
  'case.demo_sample':  { en: 'DEMONSTRATION ON SAMPLE DATA', ru: 'ДЕМОНСТРАЦИЯ НА УСЛОВНЫХ ДАННЫХ' },
  'case.demo_model':   { en: 'DEMONSTRATION ON A CONDITIONAL MODEL', ru: 'ДЕМОНСТРАЦИЯ НА УСЛОВНОЙ МОДЕЛИ' },
  'case.source':       { en: 'Source model', ru: 'Исходная модель' },
  'case.open':         { en: 'How it was done', ru: 'Как это делалось' },
  'case.task':         { en: 'TASK', ru: 'ЗАДАЧА' },
  'case.limits':       { en: 'CONSTRAINTS', ru: 'ОГРАНИЧЕНИЯ' },
  'case.approach':     { en: 'APPROACH', ru: 'ПОДХОД' },
  'case.result':       { en: 'RESULT', ru: 'РЕЗУЛЬТАТ' },

  'brief.label':       { en: '05 // BRIEF', ru: '05 // БРИФ' },
  'brief.title':       { en: 'Tell us what you build or what you want to speed up. We’ll show how it should look or work.',
                         ru: 'Расскажите, что вы создаёте или что хотите ускорить. Мы покажем, как это должно выглядеть или работать.' },
  'form.company':      { en: 'COMPANY',  ru: 'КОМПАНИЯ' },
  'form.industry':     { en: 'INDUSTRY', ru: 'СФЕРА' },
  'form.other':        { en: 'Other',    ru: 'Другое' },
  'form.needs':        { en: 'WHAT DO YOU NEED', ru: 'ЧТО НУЖНО' },
  'form.process':      { en: 'WHAT PROCESS DO YOU WANT TO IMPROVE', ru: 'КАКОЙ ПРОЦЕСС ХОТИТЕ УЛУЧШИТЬ' },
  'form.tried':        { en: 'WHAT YOU HAVE ALREADY TRIED', ru: 'ЧТО УЖЕ ПРОБОВАЛИ' },
  'form.teamSize':     { en: 'TEAM SIZE', ru: 'РАЗМЕР КОМАНДЫ' },
  'form.stage':        { en: 'PROJECT STAGE', ru: 'СТАДИЯ' },
  'form.email':        { en: 'EMAIL', ru: 'EMAIL' },
  'form.message':      { en: 'MESSAGE', ru: 'СООБЩЕНИЕ' },
  'form.msgPh':        { en: 'Project, deadlines, links to CAD / photos / catalogue…', ru: 'Проект, сроки, ссылки на CAD / фото / каталог…' },
  'form.submit':       { en: 'Send brief', ru: 'Отправить бриф' },
  'form.sending':      { en: 'Sending…', ru: 'Отправляем…' },
  'form.required':     { en: 'Fill in the highlighted fields.', ru: 'Заполните выделенные поля.' },
  'form.sendError':    { en: 'Could not send — try again, or write to', ru: 'Не получилось отправить — попробуйте ещё раз или напишите на' },
  'brief.doneTitle':   { en: 'BRIEF SENT', ru: 'БРИФ ОТПРАВЛЕН' },
  'brief.doneText':    { en: 'It went straight to us — no mail client needed. We reply within 24 hours after the message arrives.',
                         ru: 'Ушёл прямо к нам — почтовый клиент не нужен. Ответим в течение 24 часов после получения.' },
  'brief.doneAi':      { en: 'If your question is about processes or software, we’ll offer a 30-minute call.',
                         ru: 'Если вопрос про процессы или софт — предложим созвон на 30 минут.' },
  'brief.again':       { en: 'NEW BRIEF', ru: 'НОВЫЙ БРИФ' },
  'steps.title':       { en: 'AFTER YOU HIT SEND', ru: 'ЧТО ПРОИСХОДИТ ПОСЛЕ ОТПРАВКИ' },
  'time.title':        { en: 'TIMELINES', ru: 'СРОКИ И МАСШТАБ' },
  'time.note':         { en: 'Exact pricing comes after the brief: it depends on source materials and output volume — not on how “complex” your product is.',
                         ru: 'Точная стоимость — после брифа: она зависит от исходников и объёма форматов, а не от «сложности» вашего продукта.' },
  'time.h0':           { en: 'PRODUCT', ru: 'ПРОДУКТ' },
  'time.h1':           { en: 'TIMELINE', ru: 'СРОК' },
  'time.h2':           { en: 'BUDGET SCALE', ru: 'МАСШТАБ БЮДЖЕТА' },
  'check.title':       { en: 'BRING TO THE BRIEF', ru: 'ЧТО ПРИГОДИТСЯ' },

  'footer.rights':     { en: 'MONOLITH.CONTACT — PRODUCT VISUALS FROM YOUR DRAWINGS AND CATALOGUE',
                         ru: 'MONOLITH.CONTACT — ВИЗУАЛ ПРОДУКТА ИЗ ЧЕРТЕЖЕЙ И КАТАЛОГА' },
  'footer.ai':         { en: 'AI audit & software', ru: 'ИИ-аудит и софт' },
  'status.sys':        { en: 'SYS_STATUS: ACTIVE', ru: 'SYS_STATUS: ACTIVE' },
  'overlay.reroute':   { en: 'REROUTE', ru: 'REROUTE' }
};

/* ---------- Hero metrics ---------- */
const HERO_METRICS = [
  { value: { en: 'BRIEF', ru: 'БРИФ' }, label: { en: 'FIRST FRAMES — AFTER WE RECEIVE YOUR SOURCE FILES, TIMING AGREED IN THE BRIEF', ru: 'ПЕРВЫЕ КАДРЫ — ПОСЛЕ ПОЛУЧЕНИЯ ИСХОДНИКОВ, СРОК СОГЛАСУЕМ В БРИФЕ' } },
  { value: '0',      label: { en: 'DAYS ON SITE',            ru: 'ДНЕЙ НА ПЛОЩАДКЕ' } },
  { value: 'CAD',    label: { en: 'GEOMETRY FROM YOUR MODEL', ru: 'ГЕОМЕТРИЯ ИЗ ВАШЕЙ МОДЕЛИ' } },
  { value: '2',      label: { en: 'REVISION ROUNDS INCLUDED', ru: 'РАУНДА ПРАВОК ВКЛЮЧЕНЫ' } }
];

/* ---------- Economy on the home page ---------- */
const ECONOMY_ROWS = [
  { method: { en: 'On-site shoot', ru: 'Классическая съёмка' },
    time:   { en: 'Months', ru: 'Месяцы' },
    cost:   { en: 'Hundreds of thousands – millions $', ru: 'Сотни тысяч – миллионы $' } },
  { method: { en: 'Classic 3D studio', ru: 'Классическая 3D-студия' },
    time:   { en: '4–10 weeks', ru: '4–10 недель' },
    cost:   { en: 'Hundreds of thousands $', ru: 'Сотни тысяч $' } },
  { method: { en: 'Model + environment', ru: 'Модель + генерация среды' },
    time:   { en: '24–48 hours from the file', ru: '24–48 часов от файла' },
    cost:   { en: 'A fraction of a shoot', ru: 'Доля от съёмки' },
    ours: true }
];

const PACKAGES = [
  { name: { en: 'Trial render, 1 product', ru: 'Пробный рендер, 1 изделие' },
    price: { en: 'Free', ru: 'Бесплатно' } },
  { name: { en: 'Starter: 6 angles + 2 context scenes', ru: 'Стартовый: 6 ракурсов + 2 среды' },
    price: { en: 'from 800 $', ru: 'от 800 $' } },
  { name: { en: 'Catalogue, from 20 SKU', ru: 'Каталог, от 20 SKU' },
    price: { en: 'from 200 $ / SKU', ru: 'от 200 $ / SKU' } }
];

/* ---------- The old way / the Monolith way ---------- */
const OLDWAY_ROWS = [
  { old: { en: 'The product is labelled “unphotogenic” — agencies don’t know how to shoot rebar, feed mix or a cooling tower.',
           ru: 'Продукт считается «нефотогеничным» — агентства не знают, как снимать арматуру, комбикорм или градирню.' },
    neu: { en: 'We specialise in the textures of the real world and details.',
           ru: 'Мы специализируемся на фактуре и деталях реального мира.' } },
  { old: { en: 'The site isn’t built yet — there is nothing to film, but sales start now.',
           ru: 'Объект ещё не построен — снимать нечего, а продавать надо уже сейчас.' },
    neu: { en: 'We work from project documentation: drawings and master plans become a cinematic before the first excavation.',
           ru: 'Работаем из проектной документации: чертежи и генплан превращаются в кадры до первого котлована.' } },
  { old: { en: 'On-site shooting: permits, safety clearances, drones, weather, months of approvals.',
           ru: 'Съёмка на объекте: допуски, ТБ, дроны, погода, месяцы согласований.' },
    neu: { en: 'Not a single person on site. The sources are what you already have: CAD, a catalogue, phone photos.',
           ru: 'Ни одного человека на площадке. Исходники — то, что у вас уже есть: CAD, каталог, фото с телефона.' } },
  { old: { en: 'A revision means a reshoot. Changing the season in frame means a new expedition.',
           ru: 'Правка = пересъёмка. Смена сезона в кадре = новая экспедиция.' },
    neu: { en: 'A revision is a new project pass. Summer, winter, night, fog — parameters, not budgets.',
           ru: 'Правка = новая итерация проекта. Лето, зима, ночь, туман — параметры, а не бюджеты.' } },
  { old: { en: 'A 500-SKU catalogue has decent photos for 150. The rest does not sell online.',
           ru: 'Каталог на 500 позиций, нормальные фото — у 150. Остальное не продаётся онлайн.' },
    neu: { en: 'We close the gap as a pipeline, not a shoot. One model — a pack of angles, colours and formats.',
           ru: 'Закрываем разрыв конвейером, а не съёмкой. Одна модель — пакет ракурсов, цветов и форматов.' } }
];

/* ---------- Deliverables — industrial offer on the home page ---------- */
const DELIVERABLES = [
  { index: 'D_01',
    title: { en: 'CATALOGUE & SKU COVERAGE', ru: 'КАТАЛОГ И ПОКРЫТИЕ SKU' },
    text:  { en: 'Hero shots on white, 6–12 angles, colour and configuration variants. The part of the range that currently has no photograph.',
             ru: 'Герой-кадры на белом, 6–12 ракурсов, варианты цвета и комплектации. Та часть номенклатуры, у которой сейчас нет нормального фото.' } },
  { index: 'D_02',
    title: { en: 'CONTEXT SCENES', ru: 'СРЕДА ПРИМЕНЕНИЯ' },
    text:  { en: 'The product on a site, in a shop, in the field. Day, dusk, indoor working light — without stopping production.',
             ru: 'Изделие на площадке, в цеху, в поле. День, сумерки, рабочий свет помещения — без остановки производства.' } },
  { index: 'D_03',
    title: { en: 'TECHNICAL GRAPHICS', ru: 'ТЕХНИЧЕСКАЯ ГРАФИКА' },
    text:  { en: 'Exploded views, cutaways, assembly diagrams. For service docs, a technical sale and a tender pack.',
             ru: 'Взрыв-схемы, разрезы, схемы монтажа. Для сервисной документации, технической продажи и тендерного пакета.' } },
  { index: 'D_04',
    title: { en: 'VIDEO & 360°', ru: 'ВИДЕО И 360°' },
    text:  { en: 'Turntable, a short function demo, a principle-of-operation animation. First stills in 24–48 hours; a full cinematic in weeks.',
             ru: 'Turntable, короткий ролик функции, анимация принципа работы. Первые стиллы за 24–48 часов; полный синематик — неделями.' } },
  { index: 'D_05',
    title: { en: 'INTERACTIVE 3D & AR', ru: 'ИНТЕРАКТИВ И AR' },
    text:  { en: 'A viewer on the product page: rotate, zoom, explode. AR at real scale in the buyer’s hall.',
             ru: 'Просмотрщик на странице товара: покрутить, приблизить, открыть взрыв-схему. AR в реальном масштабе в цеху покупателя.' } },
  { index: 'D_06',
    title: { en: 'TRADE SHOWS & BOOTHS', ru: 'ВЫСТАВКИ И СТЕНДЫ' },
    text:  { en: 'Loops for booth screens, large-format banners, print layouts. Stand out at Bauma instead of blending into a wall of roll-ups.',
             ru: 'Лупы для экранов стенда, широкоформатные баннеры, макеты полиграфии. Выделиться на Bauma, а не слиться со стеной ролл-апов.' } }
];

/* ---------- Tickers ---------- */
const SCENARIO_TICKER = {
  en: ['TENDER', 'DEALER PORTAL', 'TRADE SHOW', 'PRODUCT LAUNCH', 'CATALOGUE GAP', 'INVESTOR PITCH', 'SERVICE MANUAL', 'ANNUAL REPORT'],
  ru: ['ТЕНДЕР', 'ДИЛЕРСКИЙ ПОРТАЛ', 'ВЫСТАВКА', 'ЗАПУСК ПРОДУКТА', 'ДЫРА В КАТАЛОГЕ', 'ИНВЕСТ-ПИТЧ', 'СЕРВИСНАЯ ДОКУМЕНТАЦИЯ', 'ГОДОВОЙ ОТЧЁТ']
};

const INPUT_TICKER = {
  en: ['CAD', 'STEP', 'IGES', 'STL', 'OBJ', 'FBX', 'BIM', 'DWG', 'PRODUCT CATALOGUE', 'PHONE PHOTOS', 'TECH SPECS'],
  ru: ['CAD', 'STEP', 'IGES', 'STL', 'OBJ', 'FBX', 'BIM', 'DWG', 'КАТАЛОГ ПРОДУКЦИИ', 'ФОТО С ТЕЛЕФОНА', 'ТЕХПАСПОРТ']
};

/* ---------- Industries — OPEN list. Append to extend.
     Also feeds the BRIEF form select (+ "Other" is always added). ---------- */
/* `text` opens under the name on click. Each one names the actual objects of
   that industry and the deliverable that closes them — no generic promises. */
const INDUSTRIES = [
  { en: 'Construction & development',     ru: 'Строительство и девелопмент',
    text: { en: 'The site before the first excavation: a district cinematic, tender angles, facade nodes and sections taken straight from BIM. Input — CAD/BIM, master plan, facade designs. Output — frames that hold up next to the project documentation, for the tender bid and for selling floor space.',
            ru: 'Объект до первого котлована: синематик квартала, ракурсы под тендер, фасадные узлы и разрезы прямо из BIM. Вход — CAD/BIM, генплан, фасадные решения. Выход — кадры, которые можно положить рядом с проектной документацией: для тендерной заявки и для продажи площадей.' } },
  { en: 'Manufacturing & machinery',      ru: 'Производство и машиностроение',
    text: { en: 'The component there is no point photographing — the value is inside. A longitudinal section of a hydraulic cylinder, a 12–16 position exploded view of a gearbox, a 360° of a pump unit: all cut from one assembly, with the shop floor running.',
            ru: 'Узел, который бессмысленно фотографировать: ценность внутри. Продольный разрез гидроцилиндра, взрыв-схема редуктора на 12–16 позиций, 360° насосной станции — всё режется из одной сборки, без остановки цеха.' } },
  { en: 'Tools & fixtures',               ru: 'Инструмент и оснастка',
    text: { en: 'A catalogue pack for dense geometry: 8 angles on white, macro on the thread and the rating plate, build variants, a service exploded view. The acceptance test is blunt — a 100% crop must not fall apart on the markings.',
            ru: 'Каталожный пакет на плотную геометрию: 8 ракурсов на белом, макро на резьбу и шильдик, комплектации, сервисная взрыв-схема. Приёмка простая — кроп 100% не должен разваливать маркировку.' } },
  { en: 'Energy & infrastructure',        ru: 'Энергетика и инфраструктура',
    text: { en: 'Objects you cannot switch off and can barely shoot: a cooling tower, a substation, transmission pylons, a heat main. We supply scale and setting — day, dusk, winter — plus assembly diagrams for the tender pack.',
            ru: 'Объекты, которые нельзя остановить и трудно снять: градирня, подстанция, опоры ЛЭП, теплотрасса. Даём масштаб и среду — день, сумерки, зима — плюс схемы монтажа в тендерный пакет.' } },
  { en: 'Agro & food production',         ru: 'Агро и пищепром',
    text: { en: 'Feed mix as a stream of golden grain, a dryer and silo in the field, a packing line in working light. Plus the packaging catalogue: label and pack-size variants re-rendered instead of re-shot.',
            ru: 'Комбикорм как поток золотого зерна, зерносушилка и силос в поле, линия фасовки в рабочем свете. Плюс каталог упаковки: варианты этикетки и фасовки перерендериваются, а не переснимаются.' } },
  { en: 'Logistics, warehouses, ports',   ru: 'Логистика, склады, порты',
    text: { en: 'A size range there is no sense shooting position by position: 20 SKU of pallet racking from a single setup, the aisle between rows, the picking zone. Adding a twenty-first position costs a render, not a new shoot.',
            ru: 'Типоразмерный ряд, который бессмысленно снимать по позициям: 20 SKU паллетных стеллажей одним сетапом, проход между рядами, зона комплектации. Двадцать первая позиция стоит рендера, а не новой съёмки.' } },
  { en: 'Special machinery & equipment',  ru: 'Спецтехника и оборудование',
    text: { en: 'The machine and what hangs on it: hero, profile, macro on the eyes and pins, context on site. If the source is an open mesh with no rigging, we say so plainly and do not draw a section that is not in the model.',
            ru: 'Машина и то, что на неё навешивается: герой, профиль, макро на проушины и пальцы, контекст на площадке. Если исходник — открытый меш без rigging, говорим прямо и не рисуем разрез, которого в модели нет.' } }
];

/* ---------- Principles ---------- */
const PRINCIPLES = [
  { index: 'P_01',
    title: { en: 'FROM YOUR MODEL, NOT FROM IMAGINATION', ru: 'ИЗ ВАШЕЙ МОДЕЛИ, НЕ ИЗ ГОЛОВЫ' },
    text:  { en: 'Geometry is locked to the source. We are responsible for light, setting and the format pack for catalogue, tender and booth — not for inventing the product.',
             ru: 'Геометрия фиксируется исходником. Мы отвечаем за свет, среду и пакет форматов под каталог, тендер и стенд — а не за то, чтобы придумать изделие.' } },
  { index: 'P_02',
    title: { en: 'RESPECT FOR TEXTURE', ru: 'УВАЖЕНИЕ К ФАКТУРЕ' },
    text:  { en: 'Concrete, rolled steel, grain and brick are beautiful on their own. Our work is light, angle and environment — not decoration.',
             ru: 'Бетон, прокат, зерно и кирпич красивы сами по себе. Наша работа — свет, ракурс и среда, а не «украшательство».' } },
  { index: 'P_03',
    title: { en: 'ENGINEERING PRECISION', ru: 'ИНЖЕНЕРНАЯ ТОЧНОСТЬ' },
    text:  { en: 'Visuals match the documentation: dimensions, layout, materials. Each frame is checked against the spec.',
             ru: 'Визуал соответствует документации: габариты, компоновка, материалы. Каждый кадр сверяется со спецификацией.' } },
  { index: 'P_04',
    title: { en: 'PIPELINE, NOT A ONE-OFF', ru: 'КОНВЕЙЕР, А НЕ РАЗОВАЯ КАРТИНКА' },
    text:  { en: 'One SKU or five hundred. The budget changes; the quality standard and the isolated handling of your files do not.',
             ru: 'Один артикул или пятьсот. Меняется бюджет, не меняется стандарт качества и изолированный контур ваших файлов.' } }
];

/* ---------- AI in company processes — home block after deliverables.
   Amounts match the services page: audit is the SRV_11 price (1,000 $),
   the agents pilot is SRV_10 (1,500 $), internal software is SRV_09 (400 $),
   a workshop day (1,500 $) is in the SRV_11 note.
   The brief chip is SRV_11 need, "AI consulting". ---------- */
const AI_OFFERS = [
  { index: 'A_01',
    title: { en: 'PROCESS AUDIT', ru: 'АУДИТ ПРОЦЕССОВ' },
    text:  { en: 'We study how the team works and show where AI saves time and where it adds risk. You get a plan with priorities, timing and cost.',
             ru: 'Разбираем, как работает команда, и показываем, где ИИ сэкономит время, а где создаст риск. На выходе — план с приоритетами, сроками и стоимостью.' },
    price: { en: 'from 1,000 $', ru: 'от 1 000 $' } },
  { index: 'A_02',
    title: { en: 'AGENTS & AUTOMATION', ru: 'АГЕНТЫ И АВТОМАТИЗАЦИЯ' },
    text:  { en: 'Enquiries, reports, answers from a knowledge base, quotes: we take one repeating process, measure it, automate it and measure again.',
             ru: 'Заявки, отчёты, ответы по базе знаний, КП: берём один повторяющийся процесс, замеряем, автоматизируем и замеряем снова.' },
    price: { en: 'pilot from 1,500 $', ru: 'пилот от 1 500 $' } },
  { index: 'A_03',
    title: { en: 'INTERNAL SOFTWARE & BOTS', ru: 'ВНУТРЕННИЙ СОФТ И БОТЫ' },
    text:  { en: 'Admin panels, reports, links between services, Telegram bots. A prototype in 3–5 days; production is a separate mode with review and tests.',
             ru: 'Админки, отчёты, связки между сервисами, Telegram-боты. Прототип за 3–5 дней, продакшн — отдельным режимом с ревью и тестами.' },
    price: { en: 'from 400 $', ru: 'от 400 $' } },
  { index: 'A_04',
    title: { en: 'TEAM WORKSHOP', ru: 'ОБУЧЕНИЕ КОМАНДЫ' },
    text:  { en: 'A workshop on your real tasks plus a short policy: which tools, for what, and what data they may touch.',
             ru: 'Воркшоп на ваших реальных задачах и регламент: какие инструменты, для чего и с какими данными можно работать.' },
    price: { en: 'from 1,500 $ per day', ru: 'от 1 500 $ за день' } }
];

/* ---------- LAB: pipeline ---------- */
const PIPELINE = [
  { id: '01', name: { en: 'INTAKE', ru: 'ПРИЁМ' },
    text: { en: 'We take any source: CAD/BIM, STEP/IGES/STL/OBJ/FBX, catalogues, brand books, photos from the site or the shop floor.',
            ru: 'Принимаем любые исходники: CAD/BIM, STEP/IGES/STL/OBJ/FBX, каталоги, брендбук, фото с площадки или прилавка.' } },
  { id: '02', name: { en: 'REBUILD', ru: 'СБОРКА' },
    text: { en: 'We assemble the digital scene: your site, product or space in exact geometry. The model is the source of truth.',
            ru: 'Собираем цифровую сцену: объект, продукт или пространство в точной геометрии. Модель — источник правды.' } },
  { id: '03', name: { en: 'SETTING', ru: 'СРЕДА' },
    text: { en: 'Light, weather, season, environment, people and machinery in frame.',
            ru: 'Свет, погода, сезон, среда, люди и техника в кадре.' } },
  { id: '04', name: { en: 'OUTPUT', ru: 'ФИНАЛ' },
    text: { en: 'Final formats: stills, video, 360°, print layouts, a 3D viewer for the product page.',
            ru: 'Финальные форматы: стиллы, видео, 360°, макеты для печати, 3D-просмотрщик на страницу товара.' } }
];

/* ---------- LAB: automation steps ---------- */
const LAB_AUTO_STEPS = [
  { index: '01', name: { en: 'CALL', ru: 'СОЗВОН' },
    text: { en: '30 minutes. Which process hurts and how to measure it.',
            ru: '30 минут. Какой процесс болит и как его измерить.' } },
  { index: '02', name: { en: 'AUDIT', ru: 'АУДИТ' },
    text: { en: '1–2 weeks. A process map and a plan with priorities, timing and cost.',
            ru: '1–2 недели. Карта процессов и план с приоритетами, сроками и стоимостью.' } },
  { index: '03', name: { en: 'PILOT', ru: 'ПИЛОТ' },
    text: { en: '2 weeks. One process around your tools and rules, price fixed before the start, measured before and after.',
            ru: '2 недели. Один процесс под ваши инструменты и правила, цена фиксирована до старта, замер до и после.' } },
  { index: '04', name: { en: 'ROLL-OUT', ru: 'ВНЕДРЕНИЕ' },
    text: { en: 'We scale what worked in the pilot.',
            ru: 'Масштабируем то, что сработало на пилоте.' } },
  { index: '05', name: { en: 'HAND-OVER', ru: 'ПЕРЕДАЧА' },
    text: { en: 'Team training, documentation, access stays with you.',
            ru: 'Обучение команды, документация, доступы у вас.' } }
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
  { label: { en: 'First frames', ru: 'Первые кадры' },
    a: { en: 'Months', ru: 'Месяцы' },
    b: { en: 'Weeks', ru: 'Недели' },
    c: { en: '24–48 hours from the file', ru: '24–48 часов от файла' } },
  { label: { en: 'Full pack / cinematic', ru: 'Полный пакет / синематик' },
    a: { en: '2–4 months', ru: '2–4 месяца' },
    b: { en: '2–3 months', ru: '2–3 месяца' },
    c: { en: '2–6 weeks', ru: '2–6 недель' } },
  { label: { en: 'Site not built yet', ru: 'Объект не построен' },
    a: { en: 'Impossible', ru: 'Невозможно' },
    b: { en: 'Possible', ru: 'Возможно' },
    c: { en: 'Possible', ru: 'Возможно' } },
  { label: { en: 'Catalogue of 500 SKU', ru: 'Каталог на 500 SKU' },
    a: { en: 'A new expedition per batch', ru: 'Новая экспедиция на партию' },
    b: { en: 'Manual work per article', ru: 'Ручная работа на артикул' },
    c: { en: 'A pipeline', ru: 'Конвейер' } },
  { label: { en: 'Cost of an iteration', ru: 'Стоимость итерации' },
    a: { en: 'A reshoot ≈ a new budget', ru: 'Пересъёмка ≈ новый бюджет' },
    b: { en: 'Days–weeks of manual work', ru: 'Дни–недели ручного труда' },
    c: { en: 'Hours of a new pass', ru: 'Часы новой итерации' } },
  { label: { en: 'People and permits on site', ru: 'Люди и допуски на площадке' },
    a: { en: 'Mandatory', ru: 'Обязательно' },
    b: { en: 'Not needed', ru: 'Не нужны' },
    c: { en: 'Not needed', ru: 'Не нужны' } }
];

/* ---------- LAB: iterations ---------- */
const ITERATIONS = [
  { index: 'V_01',
    text: { en: 'A draft at 20–30% of the timeline: key frames, style direction. We review it together, argue, choose.',
            ru: 'Черновик за 20–30% срока: ключевые кадры, направление стиля. Смотрим вместе, спорим, выбираем.' } },
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
  { q: { en: 'How closely will the picture match the real product?',
         ru: 'Насколько картинка будет соответствовать реальному объекту?' },
    a: { en: 'If documentation exists (CAD/BIM, master plan, drawings), geometry and layout follow it: this is a visualisation of your project, not a guess loosely based on it. Atmosphere — light, weather, staffage — is an artistic layer on top of a precise base, and it is always approved with you.',
         ru: 'Если на входе есть документация (CAD/BIM, генплан, чертежи), геометрия и компоновка соответствуют ей: это визуализация вашего проекта, а не догадка «по мотивам». Атмосфера — свет, погода, стаффаж — художественный слой поверх точной основы, и он всегда согласуется с вами.' } },
  { q: { en: 'All I have is phone photos. Is that enough?',
         ru: 'У меня только фотографии с телефона. Этого хватит?' },
    a: { en: 'In most cases — yes. For a storefront, a retail floor or a product, 5–10 photos in ordinary light are enough. A STEP file gives more precision, but the entry barrier is a catalogue and a phone. Send what you have.',
         ru: 'В большинстве случаев — да. Для витрины, торгового зала или продукта достаточно 5–10 фотографий при обычном освещении. STEP-файл даёт больше точности, но порог входа — каталог и телефон. Пришлите что есть.' } },
  { q: { en: 'How are you different from a freelancer with a neural network?',
         ru: 'Чем вы отличаетесь от фрилансера с нейросетью?' },
    a: { en: 'The way a print house differs from a printer. Models are available to everyone; the result is defined by pipeline, locked geometry, art direction and accountability for deadlines. We deliver coordinated production: verified geometry, one style across all materials, files ready for print, the website and the tender.',
         ru: 'Тем же, чем типография отличается от принтера. Модели доступны всем; результат определяют пайплайн, зафиксированная геометрия, постановка и ответственность за сроки. Мы отдаём согласованный продакшн: выверенную геометрию, единый стиль всех материалов и файлы, готовые к печати, сайту и тендеру.' } },
  { q: { en: 'Do you only do visuals?',
         ru: 'Вы делаете только визуал?' },
    a: { en: 'No. We also do process audits, AI agents and small software: we start with a pilot on one process, with the price fixed before the start.',
         ru: 'Нет. Ещё аудит процессов, ИИ-агенты и небольшой софт: начинаем с пилота на одном процессе, цена фиксируется до старта.' } }
];

/* ---------- Services: where the hours go, and how the data is handled ---------- */
const LOSS_POINTS = [
  { en: 'Enquiries and emails are sorted by hand', ru: 'Заявки и письма разбирают вручную' },
  { en: 'Reports are stitched from five spreadsheets every week', ru: 'Отчёты собирают из пяти таблиц каждую неделю' },
  { en: 'Quotes, product descriptions and client replies are written from scratch', ru: 'КП, описания товаров и ответы клиентам пишут с нуля' },
  { en: 'Knowledge lives in heads and chats, a newcomer needs a month', ru: 'Знания живут в головах и в чатах, новичок входит месяц' },
  { en: 'The team uses ChatGPT each in their own way, with no rules', ru: 'Команда пользуется ChatGPT кто как, без правил' },
  { en: 'An internal tool has been needed for ages, but development has no time', ru: 'Внутренний инструмент нужен давно, но у разработки нет времени' }
];

const DATA_POINTS = [
  { en: 'We sign an NDA before getting access to data', ru: 'Подписываем NDA до доступа к данным' },
  { en: 'We take minimal access: only what the task needs', ru: 'Берём минимальные доступы: только то, что нужно для задачи' },
  { en: 'Everything is deployed on your accounts and handed over to you', ru: 'Всё разворачивается на ваших аккаунтах и передаётся вам' },
  { en: 'We choose tools and plans that fit your data rules', ru: 'Выбираем инструменты и тарифы с учётом ваших правил по данным' }
];

/* ---------- 03 SERVICES.
     cases:  ids from ARCHIVE_ITEMS that prove the service; only cases with real media
             are linked, and a service with none shows the "demo in preparation" plate.
     need:   FORM_NEEDS[].en value preselected in the brief when "Request" is pressed.
     group:  'viz' (visuals from a model), 'build' (development and consulting), 'also' (compact block).
     links:  optional plain links shown instead of case proof (a service with neither shows a "soon" plate).
     Prices are lower bounds (offer-part-8.md §8.9;
             trade show and site prices set 2026-10-21, see docs/services-page-plan.md §8). ---------- */
const SERVICES = [
  { id: 'srv-catalog', index: 'SRV_01', group: 'viz', cases: ['case-racking', 'case-conveyor', 'case-grinder'],
    need: 'Catalogue / SKU pack',
    title:  { en: 'CATALOGUE WITHOUT A STUDIO', ru: 'КАТАЛОГ БЕЗ СТУДИИ' },
    text:   { en: 'Product photography for industrial goods — from a catalogue and a 3D model. Equipment, tools, materials in staged light, the way watches and cars are shot.',
              ru: 'Предметная съёмка индустриального продукта — из каталога и 3D-модели. Оборудование, инструмент, материалы — в постановочном свете, как снимают часы и автомобили.' },
    input:  { en: 'A catalogue, STEP/3D model or 5–10 photos', ru: 'Каталог, STEP/3D-модель или 5–10 фото' },
    output: { en: 'Hero shots, colourways, a series per SKU', ru: 'Герой-кадры, цвета, серия на каждый SKU' },
    price:  { en: '200 $ / SKU', ru: '200 $ / SKU' },
    priceNote: { en: 'From 20 SKU. Single position — from 400 $ / SKU.', ru: 'От 20 SKU. Отдельная позиция — от 400 $ / SKU.' },
    time:   { en: '2–4 weeks', ru: '2–4 недели' } },

  { id: 'srv-context', index: 'SRV_02', group: 'viz', cases: ['case-excavator', 'case-racking'],
    need: 'Context scenes',
    title:  { en: 'THE PRODUCT IN ITS REAL SETTING', ru: 'ПРОДУКТ В РАБОЧЕЙ СРЕДЕ' },
    text:   { en: 'The product shown at work — without logistics, weather or a safety clearance. Scale is readable because a person or a machine stands next to it.',
              ru: 'Изделие показано в работе — без логистики, погоды и допуска по ТБ. Масштаб читается, потому что рядом стоит человек или техника.' },
    input:  { en: 'Model or photos + where it is used', ru: 'Модель или фото + где применяется' },
    output: { en: '6 context scenes: site, shop, field', ru: '6 контекстных сцен: площадка, цех, поле' },
    price:  { en: '1,500 $', ru: '1 500 $' },
    priceNote: { en: 'For 6 scenes.', ru: 'За 6 сцен.' },
    time:   { en: '1–2 weeks', ru: '1–2 недели' } },

  { id: 'srv-tech', index: 'SRV_03', group: 'viz', cases: ['case-roller', 'case-cylinder', 'case-grinder'],
    need: 'Exploded views / cutaways',
    title:  { en: 'EXPLODED VIEWS & CUTAWAYS', ru: 'ВЗРЫВ-СХЕМЫ И РАЗРЕЗЫ' },
    text:   { en: 'Service and technical-sales graphics: what photography cannot do without destroying the unit. Geometry stays the geometry of your file.',
              ru: 'Графика для сервиса и технической продажи: то, чего фотография не умеет без разборки изделия. Геометрия остаётся геометрией вашего файла.' },
    input:  { en: 'CAD / assembly / bill of materials', ru: 'CAD / сборка / спецификация' },
    output: { en: 'Exploded view, 2 cutaways, labels', ru: 'Взрыв-схема, 2 разреза, подписи' },
    price:  { en: '1,200 $', ru: '1 200 $' },
    priceNote: { en: 'Exploded view + 2 cutaways.', ru: 'Взрыв-схема + 2 разреза.' },
    time:   { en: '5–10 days', ru: '5–10 дней' } },

  { id: 'srv-video', index: 'SRV_04', group: 'viz', cases: ['case-conveyor-360', 'case-cylinder'],
    need: 'Video / 360°',
    title:  { en: 'VIDEO & 360°', ru: 'ВИДЕО И 360°' },
    text:   { en: 'Turntable, a short function demo, a principle-of-operation animation. The turntable and the stills come from one scene, so they cannot disagree.',
              ru: 'Turntable, короткий ролик о функции, анимация принципа работы. 360° и стиллы считаются из одной сцены, поэтому не могут разойтись.' },
    input:  { en: 'Assembly model + what the video must explain', ru: 'Модель сборки + что должен объяснить ролик' },
    output: { en: '360° turntable, 30–60 s product video', ru: '360° turntable, ролик о продукте 30–60 с' },
    price:  { en: '600 $', ru: '600 $' },
    priceNote: { en: '360° turntable. Product video 30–60 s — from 2,500 $.', ru: '360° turntable. Ролик о продукте 30–60 с — от 2 500 $.' },
    time:   { en: '1–6 weeks', ru: '1–6 недель' } },

  { id: 'srv-interactive', index: 'SRV_05', group: 'viz', cases: ['case-conveyor-3d'],
    need: 'Interactive 3D / AR',
    // geometry only, no studio/lights — exported straight from build_rack() so it can't drift from the stills
    model3d: 'assets/cases/case-racking-3d.glb',
    title:  { en: 'VIEWER ON THE PRODUCT PAGE', ru: 'ПРОСМОТРЩИК НА СТРАНИЦЕ ТОВАРА' },
    text:   { en: 'A 3D viewer the buyer can rotate on the product page, plus AR in the hall. Models are optimized so they do not stall the client’s site.',
              ru: '3D-просмотрщик, который покупатель крутит на странице товара, плюс AR в цеху. Модели оптимизированы так, чтобы не вешать сайт клиента.' },
    input:  { en: 'Optimized 3D model', ru: 'Оптимизированная 3D-модель' },
    output: { en: 'Embed, explode, AR at real scale', ru: 'Встраивание, взрыв-схема, AR в масштабе' },
    price:  { en: '2,000 $', ru: '2 000 $' },
    priceNote: { en: 'Viewer. AR at real scale — from 3,000 $, configurator — from 6,000 $.', ru: 'Просмотрщик. AR в реальном масштабе — от 3 000 $, конфигуратор — от 6 000 $.' },
    time:   { en: '1–3 weeks', ru: '1–3 недели' } },

  { id: 'srv-show', index: 'SRV_06', group: 'viz', cases: ['case-booth'],
    need: 'Trade show',
    title:  { en: 'TRADE SHOW PACK', ru: 'ВЫСТАВОЧНЫЙ ПАКЕТ' },
    text:   { en: 'Materials for the booth before the unit exists: key frames, a screen loop and print layouts in one visual system. Up to 12 formats.',
              ru: 'Материалы для стенда до того, как изделие сошло с линии: ключевые кадры, луп для экрана и печатные макеты в одной визуальной системе. До 12 форматов.' },
    input:  { en: 'Product model or catalogue + booth concept + the show date', ru: 'Модель или каталог + концепция стенда + дата выставки' },
    output: { en: '3 key frames, a 15–20 s screen loop, banner, roll-up, print layouts', ru: '3 ключевых кадра, луп 15–20 с для экрана, баннер, ролл-ап, печать' },
    price:  { en: '3,000 $', ru: '3 000 $' },
    priceNote: { en: 'Up to 12 formats, 2 revision rounds.', ru: 'До 12 форматов, 2 раунда правок.' },
    time:   { en: '2–3 weeks', ru: '2–3 недели' } },

  { id: 'srv-object', index: 'SRV_07', group: 'viz', cases: [],
    need: 'Site cinematic / tender',
    title:  { en: 'THE SITE BEFORE IT’S BUILT', ru: 'ОБЪЕКТ ДО ПОСТРОЙКИ' },
    text:   { en: 'A cinematic of a building, plant, terminal or district — before the first excavation. Project documentation becomes a finished site at any hour and season.',
              ru: 'Синематик здания, завода, терминала или района — до первого котлована. Проектная документация превращается в построенный объект в любое время суток и сезон.' },
    input:  { en: 'CAD/BIM, master plan, facade designs', ru: 'CAD/BIM, генплан, фасадные решения' },
    output: { en: 'Cinematic 4K, stills, tender angles', ru: 'Синематик 4K, стиллы, ракурсы для тендера' },
    price:  { en: '4,000 $', ru: '4 000 $' },
    priceNote: { en: 'Tender pack: 4 angles + a 30–45 s film. Full pack — from 9,000 $: up to 24 angles + a 60–120 s cinematic.',
                 ru: 'Тендерный пакет: 4 ракурса + ролик 30–45 с. Полный пакет — от 9 000 $: до 24 ракурсов + синематик 60–120 с.' },
    time:   { en: '3–6 weeks', ru: '3–6 недель' } },

  /* ---- group 'build': development and consulting. Prices and formats come from the vault notes
          "Консультации и софт — план направления" (hypotheses, to be revised after the first 3 deals);
          3D worlds have no price there, so they show "after the brief".
          Display order: audit, pilot, software, sites, worlds, training. Indexes stay on the objects. ---- */
  { id: 'srv-consulting', index: 'SRV_11', group: 'build', cases: [], need: 'AI consulting',
    title:  { en: 'PROCESS AUDIT & CONSULTING', ru: 'АУДИТ ПРОЦЕССОВ И КОНСУЛЬТАЦИИ' },
    text:   { en: 'We look at how the team works and show where AI saves time and where it creates risk: a plan with priorities, timing and cost. From a one-hour review with a written plan to a full team setup: project rules, skills, connectors, subagents, a knowledge base. We also run a workshop on your real tasks.',
              ru: 'Разбираем, как работает команда, и показываем, где ИИ сэкономит время, а где создаст риск: план с приоритетами, сроками и стоимостью. От разбора на час с письменным планом до настройки контура для команды: правила проекта, skills, коннекторы, субагенты, база знаний. Проводим и воркшоп на ваших реальных задачах.' },
    input:  { en: 'Your task or process, the tools you use now', ru: 'Ваша задача или процесс, какими инструментами пользуетесь сейчас' },
    output: { en: 'A written plan of steps, or a configured setup handed over with training', ru: 'Письменный план шагов или настроенный контур с передачей и обучением' },
    price:  { en: '1,000 $', ru: '1 000 $' },
    priceNote: { en: 'Audit and plan — from 1,000 $. A 60–90 min review with a written plan — from 100 $ (entry). Full setup — from 1,500 $, team workshop (a day) — from 1,500 $, support — from 500 $ / month.',
                 ru: 'Аудит и план — от 1 000 $. Разбор на 60–90 минут с письменным планом — от 100 $ (вход). Настройка под ключ — от 1 500 $, воркшоп для команды (день) — от 1 500 $, сопровождение — от 500 $ / мес.' },
    time:   { en: '1–2 weeks (audit)', ru: '1–2 недели (аудит)' } },

  { id: 'srv-pipelines', index: 'SRV_10', group: 'build', cases: [], need: 'AI pipelines',
    title:  { en: 'AI PIPELINES & AGENTS', ru: 'ИИ-ПАЙПЛАЙНЫ И АГЕНТЫ' },
    text:   { en: 'We take one repeating process — sorting enquiries, a content line, answers from a knowledge base, a weekly report — measure it, automate it and measure again. The price is fixed before the start.',
              ru: 'Берём один повторяющийся процесс — разбор заявок, контент-конвейер, ответы по базе знаний, еженедельный отчёт — замеряем, автоматизируем и замеряем снова. Цена фиксируется до старта.' },
    input:  { en: 'One process that eats the most time, access to the data it uses', ru: 'Один процесс, который съедает больше всего времени, доступ к его данным' },
    output: { en: 'A working pipeline or agent, before/after measurement, documentation, access on your side', ru: 'Работающий пайплайн или агент, замер до и после, документация, доступы у вас' },
    price:  { en: '1,500 $', ru: '1 500 $' },
    priceNote: { en: 'Pilot on one process, fixed price. Roll-out of what worked — from 3,000 $.', ru: 'Пилот на одном процессе, фиксированная цена. Внедрение того, что сработало, — от 3 000 $.' },
    time:   { en: '2 weeks (pilot)', ru: '2 недели (пилот)' } },

  { id: 'srv-software', index: 'SRV_09', group: 'build', cases: ['case-panel-calculator'], need: 'Internal software / bots',
    title:  { en: 'INTERNAL SOFTWARE & BOTS', ru: 'ВНУТРЕННИЙ СОФТ И БОТЫ' },
    text:   { en: 'Admin panels, reports, links between your services, Telegram bots and Mini Apps. A prototype checks the idea in days; production is a separate mode with review, tests and security — we agree which one you need before the start.',
              ru: 'Админки, отчёты, связки между сервисами, Telegram-боты и Mini App. Прототип проверяет идею за дни; продакшн — отдельный режим с ревью, тестами и безопасностью. Какой нужен вам, договариваемся до старта.' },
    input:  { en: 'The task in two sentences, who uses it, the deadline', ru: 'Задача в двух предложениях, кто пользуется, срок' },
    output: { en: 'Working tool in your account, repository, security checklist, instructions', ru: 'Работающий инструмент на вашем аккаунте, репозиторий, чек-лист безопасности, инструкция' },
    price:  { en: '400 $', ru: '400 $' },
    priceNote: { en: 'Telegram bot. Internal tool — from 1,000 $, Mini App — from 1,500 $, MVP with payments — from 3,000 $. Prototype in 3–5 days — from 800 $.',
                 ru: 'Telegram-бот. Внутренний инструмент — от 1 000 $, Mini App — от 1 500 $, MVP с оплатой — от 3 000 $. Прототип за 3–5 дней — от 800 $.' },
    time:   { en: '3 days – 4 weeks', ru: 'от 3 дней до 4 недель' } },

  { id: 'srv-web', index: 'SRV_08', group: 'build', cases: [], need: 'Website development',
    links: [{ href: 'guides/deploy-cloudflare-github.html',
              label: { en: 'Guide: deploying a site with a server on Cloudflare', ru: 'Гайд: деплой сайта с сервером на Cloudflare' } }],
    title:  { en: 'WEBSITE DEVELOPMENT', ru: 'РАЗРАБОТКА САЙТОВ' },
    text:   { en: 'A site with a server: landing page or several pages, an enquiry form, a database. Deployed to your own account, so the code and the domain stay yours.',
              ru: 'Сайт с сервером: лендинг или несколько страниц, форма заявок, база данных. Разворачивается на вашем аккаунте — код и домен остаются у вас.' },
    input:  { en: 'What the site is for, your materials, references', ru: 'Для чего сайт, ваши материалы, референсы' },
    output: { en: 'The live site on your domain + repository + README for people and agents', ru: 'Работающий сайт на вашем домене + репозиторий + README для людей и агентов' },
    price:  { en: '500 $', ru: '500 $' },
    priceNote: { en: 'Landing page with a server. 14 days of free fixes after hand-over.', ru: 'Лендинг с сервером. 14 дней бесплатных исправлений после сдачи.' },
    time:   { en: '1–2 weeks', ru: '1–2 недели' } },

  { id: 'srv-world', index: 'SRV_12', group: 'build', cases: ['case-ball-valve', 'case-conveyor-3d'], need: '3D world',
    title:  { en: '3D WORLDS', ru: '3D-МИРЫ' },
    text:   { en: 'A browser 3D world around your equipment or site: the buyer walks in, turns the machine, looks at the units. Built from the same model as the catalogue renders, so nothing drifts between them.',
              ru: '3D-мир в браузере вокруг вашей техники или объекта: покупатель заходит, крутит машину, смотрит узлы. Собирается из той же модели, что и каталожные рендеры, поэтому ничего не расходится.' },
    input:  { en: 'A 3D model of the product or site, the scenario to show', ru: '3D-модель изделия или объекта, сценарий, который нужно показать' },
    output: { en: 'An interactive world that opens in a link, no app or plugin', ru: 'Интерактивный мир, который открывается по ссылке, без приложения и плагина' },
    price:  null,
    time:   { en: 'after the brief', ru: 'после брифа' } },

  { id: 'srv-learning', index: 'SRV_16', group: 'build', cases: [], need: 'Training apps / sites / 3D',
    title:  { en: 'TRAINING APPS, SITES & 3D WORLDS', ru: 'ОБУЧАЮЩИЕ ПРИЛОЖЕНИЯ, САЙТЫ И 3D-МИРЫ' },
    text:   { en: 'Training that opens from a link: a mini-course of video lessons and guides, tests, and a platform where everything is gathered. We pick the format for the task: an interactive site, an app or a 3D world where an employee, a dealer or a customer takes a product apart by units. Built from your 3D models, documentation and instructions.',
              ru: 'Обучение, которое открывается по ссылке: мини-курс из видеоуроков и гайдов, проверочные тесты и площадка, на которой всё собрано. Формат выбираем под задачу: интерактивный сайт, приложение или 3D-мир, где сотрудник, дилер или клиент разбирает изделие по узлам. Собираем из ваших 3D-моделей, документации и инструкций.' },
    input:  { en: 'Your materials — instructions, procedures, a 3D model or drawings, any video — and who is taught what', ru: 'Ваши материалы — инструкции, регламенты, 3D-модель или чертежи, видео, если есть — и кого и чему учим' },
    output: { en: 'A mini-course (video lessons, guides, tests) on a platform, or a training site, app or 3D world; no install, sources stay with you', ru: 'Мини-курс (видеоуроки, гайды, тесты) на площадке или обучающий сайт, приложение, 3D-мир; без установки, исходники у вас' },
    price:  null,
    time:   { en: 'after the brief', ru: 'после брифа' } },

  { id: 'srv-landing', index: 'SRV_13', group: 'also', cases: [], need: null,
    title:  { en: 'LANDING PRESENTATION', ru: 'ЛЕНДИНГ-ПРЕЗЕНТАЦИЯ' },
    text:   { en: 'A single-page site for one project or product: visuals, structure, copy. For a sales launch, a tender or an investor pitch.',
              ru: 'Одностраничный сайт проекта или продукта: визуал, структура, тексты. Для запуска продаж, тендера или инвест-питча.' },
    input:  { en: 'Project materials, brand book if it exists', ru: 'Материалы проекта, брендбук (если есть)' },
    output: { en: 'A publish-ready landing page + visual sources', ru: 'Готовый к публикации лендинг + исходники визуала' },
    price:  null,
    time:   { en: '1–2 weeks', ru: '1–2 недели' } },

  { id: 'srv-social', index: 'SRV_14', group: 'also', cases: [], need: null,
    title:  { en: 'CHANNEL PACK', ru: 'ПАКЕТ ДЛЯ КАНАЛОВ' },
    text:   { en: 'Adaptations of the industrial visual into channel formats — not a separate “social-first” product. Same geometry, different crop.',
              ru: 'Адаптации промышленного визуала в форматы каналов — не отдельный «соцсетевой» продукт. Та же геометрия, другой кадр.' },
    input:  { en: 'Key visual from the main pack', ru: 'Ключевой визуал из основного пакета' },
    output: { en: 'Verticals, cards, covers, post templates', ru: 'Вертикали, карточки, обложки, шаблоны постов' },
    price:  null,
    time:   { en: '1 week', ru: '1 неделя' } },

  { id: 'srv-campaign', index: 'SRV_15', group: 'also', cases: [], need: null,
    title:  { en: 'PERFORMANCE SET', ru: 'НАБОР ПОД КАМПАНИЮ' },
    text:   { en: 'A campaign built from the same product model: one visual system from the key image to every placement.',
              ru: 'Кампания из той же модели продукта: единая визуальная система от ключевого имиджа до форматов площадок.' },
    input:  { en: 'A product + campaign goals', ru: 'Продукт + цели кампании' },
    output: { en: 'Statics and video, variations per placement', ru: 'Статика и видео, вариации под площадки' },
    price:  null,
    time:   { en: '2–3 weeks', ru: '2–3 недели' } }
];

/* ---------- 04 WORK — demo cases. Services live in SERVICES (03). ---------- */
const ARCHIVE_ITEMS = [
  /* CASE_10 — calculator. Card shows 4 building types, 6 environments, and an estimate of the total cost.
     `num` is only the hover histogram weight (same split as CASE_01, where 48ч has num 2). */
  { id: 'case-panel-calculator', index: 'CASE_10', kind: 'case', demo: 'sample',
    sector: { en: 'SOFTWARE', ru: 'СОФТ' },
    year: '2026',
    title:  { en: 'SANDWICH PANEL BUILDING CALCULATOR', ru: 'КАЛЬКУЛЯТОР СКЛАДА ИЗ ПАНЕЛЕЙ' },
    input:  { en: 'Building dimensions', ru: 'Размеры здания' },
    output: { en: 'Panels, trims, a price estimate and a ready request', ru: 'Панели, доборные, ориентир цены и готовая заявка' },
    media: { type: 'image', src: 'assets/cases/panel-calculator-ru.png', srcEn: 'assets/cases/panel-calculator-en.png', fit: 'natural' },
    href: 'cases/casecalculator.html',
    cta: { ru: 'Посмотреть', en: 'View' },
    note: { ru: 'Хотите такой расчёт? Прототип за 5 дней — в бриф.',
            en: 'Want a calculator like this? A prototype in 5 days — send a brief.' },
    metrics: [
      { label: { en: 'BUILDING TYPES', ru: 'ТИПОВ ЗДАНИЙ' }, value: '4', num: 4 },
      { label: { en: 'ENVIRONMENTS', ru: 'ОКРУЖЕНИЙ' }, value: '6', num: 6 },
      { label: { en: 'OF THE TOTAL COST', ru: 'ИТОГОВОЙ СТОИМОСТИ' }, value: { en: 'Estimate', ru: 'Расчёт' }, num: 1 } ],
    description: { en: 'Dimensions in, a ready request out. Different building types and environments, and a calculation of the total cost. Prices are sample values, in $.',
                   ru: 'Размеры на входе, заявка на выходе. Разные типы зданий и окружения, расчёт итоговой стоимости. Цены условные, в $.' },
    story: {
      task:     { en: 'Let a buyer of a warehouse or a workshop see panel quantities, trims and a price estimate at once, and hand the manager a ready request instead of the question “how much is a warehouse”.',
                  ru: 'Дать покупателю склада или цеха сразу увидеть количество панелей, доборные и ориентир цены, а менеджеру — готовую заявку вместо вопроса «сколько стоит склад».' },
      limits:   { en: 'Demonstration on sample data, not a quote for a real client. Prices are sample values in dollars, panel width is 1 m, and the 3D view is a simplified building box.',
                  ru: 'Демонстрация на условных данных, а не расчёт для конкретного клиента. Цены условные, в долларах, ширина панели 1 м, а 3D — упрощённая коробка здания.' },
      approach: { en: 'One HTML file, three.js r128 stored locally, a RU/EN dictionary. Four building presets and six environments. The case page loads the calculator in an iframe and sizes it from a postMessage.',
                  ru: 'Один HTML-файл, three.js r128 локально, словарь RU/EN. Четыре пресета зданий и шесть окружений. Страница кейса открывает калькулятор в iframe и подстраивает высоту по postMessage.' },
      result:   { en: 'The default warehouse, 48×24×8 m on EPS panels, comes out near 46 558 $. The buyer leaves with a specification and a request text.',
                  ru: 'Склад по умолчанию, 48×24×8 м на ППС, даёт ориентир около 46 558 $. На выходе — состав и текст заявки.' } } },

  { kind: 'case', id: 'case-conveyor-3d', index: 'CASE_06', demo: 'own',
    sector: { en: 'DIGITAL', ru: 'DIGITAL' },
    year: '2026',
    title:  { en: 'MODULAR CONVEYOR — 3D VIEWER', ru: 'МОДУЛЬНЫЙ КОНВЕЙЕР — 3D-ПРОСМОТРЩИК' },
    input:  { en: 'Same parametric module as the stills', ru: 'Тот же параметрический модуль, что и в рендерах' },
    output: { en: 'Drag-to-orbit 3D model embedded on the page', ru: '3D-модель на странице, вращение перетаскиванием' },
    // geometry only, no studio/lights — exported straight from build_conveyor() so it can't drift from the stills
    model3d: 'assets/cases/case-conveyor-3d.glb',
    metrics: [
      { label: { en: 'FILE SIZE', ru: 'ВЕС ФАЙЛА' }, value: '<400 КБ', num: 400 },
      { label: { en: 'FORMAT', ru: 'ФОРМАТ' }, value: 'glTF/GLB', num: 1 },
      { label: { en: 'VIEW ANGLES', ru: 'УГЛОВ ОБЗОРА' }, value: '360°', num: 360 } ],
    description: { en: 'The same geometry the catalogue renders came from, dropped straight onto the page — no separate 3D pipeline, nothing that can drift from the stills.',
                   ru: 'Та же геометрия, из которой собраны каталожные рендеры, — прямо на странице: без отдельного 3D-пайплайна и без риска разойтись со стиллами.' },
    story: {
      task:     { en: 'Give the product page something a photo cannot: let the buyer turn the module themselves.',
                  ru: 'Дать странице товара то, чего не может фотография: покупатель сам вращает модуль.' },
      limits:   { en: 'Has to load fast on a phone, in the browser — no app, no plugin.',
                  ru: 'Должно быстро грузиться на телефоне, в браузере — без приложения и без плагина.' },
      approach: { en: 'The same build script exports geometry-only glTF alongside the stills; a standard web component handles the viewer, so there is no custom WebGL to maintain.',
                  ru: 'Тот же скрипт сборки экспортирует geometry-only glTF рядом со стиллами; вьюер — стандартный веб-компонент, без своего WebGL на поддержке.' },
      result:   { en: 'One extra export step, and the product page gets an interactive model already in sync with the catalogue renders.',
                  ru: 'Один дополнительный шаг экспорта — и страница товара получает интерактивную модель, уже синхронную с каталожными рендерами.' } } },

  /* ---------- Demo cases on open models ----------
     demo: true prints the honest "open model" label and the attribution line.
     Replace media.src with real files once the frames are rendered; nothing
     else needs to change. Each case is scoped to one industry and one
     deliverable, so the CASES grid reads as a capability matrix.        */

  { kind: 'case', id: 'case-grinder', index: 'CASE_01', demo: 'open',
    sector: { en: 'PRODUCT', ru: 'ПРОДУКТ' },
    year: '2026',
    title:  { en: 'POWER TOOL — CATALOGUE PACK', ru: 'ЭЛЕКТРОИНСТРУМЕНТ — КАТАЛОЖНЫЙ ПАКЕТ' },
    input:  { en: 'An open CAD model, no drawings, no spec sheet', ru: 'Открытая CAD-модель, без чертежей и спецификации' },
    output: { en: '8 angles on white, 2 build variants, exploded view', ru: '8 ракурсов на белом, 2 комплектации, взрыв-схема' },
    metrics: [
      { label: { en: 'ANGLES', ru: 'РАКУРСОВ' }, value: '8', num: 8 },
      { label: { en: 'PARTS IN THE EXPLODED VIEW', ru: 'ДЕТАЛЕЙ В СХЕМЕ' }, value: '14', num: 14 },
      { label: { en: 'FIRST FRAMES', ru: 'ПЕРВЫЕ КАДРЫ' }, value: '48ч', num: 2 } ],
    media: { type: 'placeholder', src: '' },
    description: { en: 'A dense-geometry product: threads, fasteners, moulded housing, rating plate. The case exists to show the geometry does not drift.',
                   ru: 'Изделие с плотной геометрией: резьбы, крепёж, литой корпус, шильдик. Кейс существует, чтобы показать, что геометрия не плывёт.' },
    story: {
      task:     { en: 'Show a tool the way a catalogue needs it: white background, a repeatable angle grid, and a service exploded view from the same model.',
                  ru: 'Показать инструмент так, как его требует каталог: белый фон, повторяемая сетка ракурсов и сервисная взрыв-схема из той же модели.' },
      limits:   { en: 'Source geometry only — no drawings, no material spec, no brand book. Markings and fasteners must survive at 100% crop.',
                  ru: 'Только исходная геометрия — ни чертежей, ни спецификации материалов, ни брендбука. Маркировка и крепёж должны выдержать кроп 100%.' },
      approach: { en: 'Geometry stays unchanged. Studio light, materials and the format pack are built around it; the exploded view is driven by the assembly tree, not redrawn by hand.',
                  ru: 'Геометрия не меняется. Вокруг неё собираются студийный свет, материалы и пакет форматов; взрыв-схема строится по дереву сборки, а не перерисовывается руками.' },
      result:   { en: 'One model covers the product card, the service manual and the dealer pack. A spec change re-renders instead of re-shooting.',
                  ru: 'Одна модель закрывает карточку товара, сервисную документацию и дилерский пакет. Смена спецификации приводит к перерендеру, а не к пересъёмке.' } },
    source: { model: 'Angle Grinder — Nextty3', license: 'CC BY 4.0',
              url: 'https://sketchfab.com/3d-models/angle-grinder-408ee904217c4a42924bd0ca69c01794' } },

  { kind: 'case', id: 'case-cylinder', index: 'CASE_02', demo: 'open',
    sector: { en: 'PRODUCT', ru: 'ПРОДУКТ' },
    year: '2026',
    title:  { en: 'HYDRAULIC CYLINDER — TECHNICAL GRAPHICS', ru: 'ГИДРОЦИЛИНДР — ТЕХНИЧЕСКАЯ ГРАФИКА' },
    input:  { en: 'An assembly model of a standard component', ru: 'Модель сборки стандартного узла' },
    output: { en: 'Hero shot, section view, exploded view, 360°', ru: 'Герой-кадр, разрез, взрыв-схема, 360°' },
    metrics: [
      { label: { en: 'SECTION VIEWS', ru: 'РАЗРЕЗОВ' }, value: '2', num: 2 },
      { label: { en: 'FRAMES IN THE TURNTABLE', ru: 'КАДРОВ В 360°' }, value: '36', num: 36 },
      { label: { en: 'FIRST FRAMES', ru: 'ПЕРВЫЕ КАДРЫ' }, value: '48ч', num: 2 } ],
    media: { type: 'placeholder', src: '' },
    description: { en: 'A component nobody can photograph usefully: the value is inside. Sections and an exploded view do what a studio shoot cannot.',
                   ru: 'Узел, который бессмысленно фотографировать: ценность внутри. Разрезы и взрыв-схема делают то, чего не может студийная съёмка.' },
    story: {
      task:     { en: 'Explain how the component is built to a buyer who compares it with two competing units on a dealer portal.',
                  ru: 'Объяснить устройство узла покупателю, который сравнивает его с двумя конкурентами на дилерском портале.' },
      limits:   { en: 'Wall thicknesses, seal seats and rod travel must match the model — a section that lies is worse than no section.',
                  ru: 'Толщины стенок, посадочные места уплотнений и ход штока должны соответствовать модели — врущий разрез хуже, чем его отсутствие.' },
      approach: { en: 'Sections are cut in the model, not painted over a render. The turntable is rendered from the same scene, so the 360° and the stills cannot disagree.',
                  ru: 'Разрезы режутся в модели, а не рисуются поверх рендера. Turntable считается из той же сцены, поэтому 360° и статика не могут разойтись.' },
      result:   { en: 'A component page that answers the construction question before the buyer calls a manager.',
                  ru: 'Страница узла, которая отвечает на вопрос об устройстве до звонка менеджеру.' } },
    source: { model: 'Hydraulic Cylinder — JarviceOne', license: 'CC BY 4.0',
              url: 'https://sketchfab.com/3d-models/hydraulic-cylinder-eafad1d357214730b28c8eceaf1a29e0' } },

  { kind: 'case', id: 'case-racking', index: 'CASE_03', demo: 'own',
    sector: { en: 'OBJECTS', ru: 'ОБЪЕКТЫ' },
    year: '2026',
    title:  { en: 'WAREHOUSE RACKING — SKU SERIES', ru: 'СКЛАДСКИЕ СТЕЛЛАЖИ — СЕРИЯ SKU' },
    input:  { en: 'One rack model plus a size and load table', ru: 'Одна модель стеллажа плюс таблица типоразмеров и нагрузок' },
    output: { en: '20 SKU in one style, 3 context scenes', ru: '20 SKU в едином стиле, 3 контекстные сцены' },
    media: { type: 'image', src: 'assets/cases/case-racking-01.jpg' },
    // line-up first, then single positions across the range: 6.0 / 4.5 / 3.0 / 2.0 m
    gallery: ['assets/cases/case-racking-01.jpg',
              'assets/cases/case-racking-02.jpg',
              'assets/cases/case-racking-04.jpg',
              'assets/cases/case-racking-05.jpg',
              'assets/cases/case-racking-03.jpg'],
    metrics: [
      { label: { en: 'SKU IN THE SERIES', ru: 'SKU В СЕРИИ' }, value: '20', num: 20 },
      { label: { en: 'SCENES', ru: 'СЦЕН' }, value: '3', num: 3 },
      { label: { en: 'HOURS PER SKU', ru: 'ЧАСОВ НА SKU' }, value: '<1', num: 1 } ],
    description: { en: 'The catalogue-coverage case: one parametric model becomes a whole size range without a separate shoot per item.',
                   ru: 'Кейс про покрытие каталога: одна параметрическая модель превращается в весь типоразмерный ряд без отдельной съёмки на каждую позицию.' },
    story: {
      task:     { en: 'Close a size range where photographing every variant makes no economic sense — the items differ by height and beam length only.',
                  ru: 'Закрыть типоразмерный ряд, где снимать каждый вариант экономически бессмысленно: позиции отличаются только высотой и длиной балки.' },
      limits:   { en: 'One visual style across every SKU: same light, same angle, same crop. A grid that drifts is unusable in a catalogue.',
                  ru: 'Единый визуальный стиль на всех SKU: один свет, один ракурс, один кроп. Ряд, который «плывёт» от позиции к позиции, в каталоге не работает.' },
      approach: { en: 'The size table drives the model; the scene is set up once and rendered as a batch. Context scenes come from the same setup at a different camera.',
                  ru: 'Таблица типоразмеров управляет моделью; сцена настраивается один раз и считается пакетом. Контекстные сцены — та же постановка с другой камеры.' },
      result:   { en: 'A size range covered at an hour per SKU, and a pipeline that absorbs the next twenty positions at the same rate.',
                  ru: 'Типоразмерный ряд закрыт за час на позицию, и пайплайн принимает следующие двадцать позиций с той же скоростью.' } } },

  { kind: 'case', id: 'case-excavator', index: 'CASE_04', demo: 'open',
    sector: { en: 'MACHINERY', ru: 'СПЕЦТЕХНИКА' },
    year: '2026',
    title:  { en: 'CRAWLER EXCAVATOR — CONSTRUCTION EQUIPMENT', ru: 'ГУСЕНИЧНЫЙ ЭКСКАВАТОР — СТРОИТЕЛЬНАЯ ТЕХНИКА' },
    input:  { en: 'An open mesh: not rigged, not fully manifold', ru: 'Открытый меш: не rigged, не полностью манифолден' },
    output: { en: 'Hero, profile, macro, one context scene', ru: 'Герой, профиль, макро, одна контекстная сцена' },
    media: { type: 'image', src: 'assets/cases/case-excavator-01.jpg' },
    gallery: ['assets/cases/case-excavator-01.jpg',
              'assets/cases/case-excavator-02.jpg',
              'assets/cases/case-excavator-03.jpg',
              'assets/cases/case-excavator-04.jpg'],
    metrics: [
      { label: { en: 'FRAMES', ru: 'КАДРОВ' }, value: '4', num: 4 },
      { label: { en: 'MATERIALS FROM SOURCE', ru: 'МАТЕРИАЛОВ ИЗ ИСХОДНИКА' }, value: '16', num: 16 },
      { label: { en: 'TURNAROUND', ru: 'СРОК' }, value: '<48ч', num: 2 } ],
    description: { en: 'A new vertical — construction equipment — opened model.',
                   ru: 'Новая вертикаль — строительная техника — открытая модель.' },
    story: {
      task:     { en: 'Cover a new vertical fast, from an open model, without commissioning original CAD.',
                  ru: 'Быстро закрыть новую вертикаль на открытой модели, без заказа оригинального CAD.' },
      limits:   { en: 'The mesh is not rigged and not fully manifold: no boom animation, no section.',
                  ru: 'Меш не rigged и не полностью манифолден: без анимации стрелы и без разреза.' },
      approach: { en: 'Studio and site lighting rigs built once around the import; camera framing computed from the model’s own bounding box.',
                  ru: 'Студийный и «полевой» свет собраны один раз вокруг импортированной модели; кадрирование камеры считается по её боксу.' },
      result:   { en: 'Four frames: hero, profile, macro, context.',
                  ru: 'Четыре кадра: герой, профиль, макро, контекст.' } },
    source: { model: 'Гусеничный экскаватор — sloumod', license: 'CC BY 4.0',
              url: 'https://sketchfab.com/3d-models/ef66e8b2650a44b6bc91edd2c0327a34' } },

  { kind: 'case', id: 'case-conveyor', index: 'CASE_05', demo: 'own',
    sector: { en: 'OBJECTS', ru: 'ОБЪЕКТЫ' },
    year: '2026',
    title:  { en: 'MODULAR ROLLER CONVEYOR — SKU SERIES', ru: 'МОДУЛЬНЫЙ РОЛИКОВЫЙ КОНВЕЙЕР — СЕРИЯ SKU' },
    input:  { en: 'One roller module plus a length, width and duty-class table', ru: 'Один модуль ролика плюс таблица длины, ширины и класса нагрузки' },
    output: { en: '20 SKU in one style, one line-up frame', ru: '20 SKU в едином стиле, один сводный кадр' },
    media: { type: 'image', src: 'assets/cases/case-conveyor-01.jpg' },
    gallery: ['assets/cases/case-conveyor-01.jpg',
              'assets/cases/case-conveyor-02.jpg'],
    metrics: [
      { label: { en: 'SKU IN THE SERIES', ru: 'SKU В СЕРИИ' }, value: '20', num: 20 },
      { label: { en: 'SIZE AXES', ru: 'ОСЕЙ ТИПОРАЗМЕРА' }, value: '3', num: 3 },
      { label: { en: 'HOURS PER SKU', ru: 'ЧАСОВ НА SKU' }, value: '<1', num: 1 } ],
    description: { en: 'The second catalogue-coverage case: one parametric roller module becomes a whole length/width/duty range without a separate shoot per item.',
                   ru: 'Второй кейс про покрытие каталога: один параметрический модуль ролика превращается в весь ряд по длине, ширине и классу нагрузки без отдельной съёмки на позицию.' },
    story: {
      task:     { en: 'Close a modular conveyor range where length, width and duty class define 20 positions, without shooting each one.',
                  ru: 'Закрыть размерный ряд модульного конвейера, где длина, ширина и класс нагрузки задают 20 позиций, без съёмки каждой отдельно.' },
      limits:   { en: 'One camera and light setup for the whole range — frame and duty class change, the shot has to stay comparable across the range.',
                  ru: 'Один сетап камеры и света на весь ряд — рама и класс нагрузки меняются, кадр должен оставаться сравнимым по всему ряду.' },
      approach: { en: 'A length/width/duty table drives the module geometry; studio and light are set up once and rendered as a batch.',
                  ru: 'Таблица длины/ширины/класса нагрузки управляет геометрией модуля; студия и свет настраиваются один раз и считаются пакетом.' },
      result:   { en: 'Twenty positions and a line-up frame that reads as one conveyor range, not a set of unrelated parts.',
                  ru: 'Двадцать позиций и сводный кадр, который читается как один ряд конвейера, а не набор случайных деталей.' } } },

  { id: 'case-roller', index: 'CASE_07', kind: 'case', demo: 'own',
    sector: { en: 'PRODUCT', ru: 'ПРОДУКТ' },
    year: '2026',
    title:  { en: 'CONVEYOR ROLLER — EXPLODED VIEW & SECTION', ru: 'РОЛИК КОНВЕЙЕРА — ВЗРЫВ-СХЕМА И РАЗРЕЗ' },
    input:  { en: 'A parametric model of a Ø60 mm roller with its internals', ru: 'Параметрическая модель ролика Ø60 мм с внутренним устройством' },
    output: { en: 'Exploded view of 8 parts, longitudinal section, end-support detail', ru: 'Взрыв-схема из 8 деталей, продольный разрез, узел опоры' },
    media: { type: 'image', src: 'assets/cases/case-roller-01.jpg' },
    gallery: ['assets/cases/case-roller-01.jpg',
              'assets/cases/case-roller-02.jpg',
              'assets/cases/case-roller-03.jpg'],
    metrics: [
      { label: { en: 'PARTS', ru: 'ДЕТАЛЕЙ' }, value: '8', num: 8 },
      { label: { en: 'BOM POSITIONS', ru: 'ПОЗИЦИЙ В СПЕЦИФИКАЦИИ' }, value: '5', num: 5 },
      { label: { en: 'SECTIONS', ru: 'РАЗРЕЗОВ' }, value: '1', num: 1 } ],
    description: { en: 'The technical-graphics case: the section is cut in the model, so it cannot disagree with the exploded view or with the numbers on it.',
                   ru: 'Кейс про техническую графику: разрез режется в модели, поэтому не может разойтись ни со взрыв-схемой, ни с номерами на ней.' },
    story: {
      task:     { en: 'Show a dealer who compares two rollers what is inside the tube and how the shaft is held — without taking a unit apart.',
                  ru: 'Показать дилеру, который сравнивает два ролика, что внутри трубы и как держится ось, — не разбирая изделие.' },
      limits:   { en: 'A section that lies is worse than none: every wall thickness and seat in the picture is a dimension of the model, and anything the model does not have is not drawn. The bearing is simplified to one ring, and the picture says so.',
                  ru: 'Врущий разрез хуже, чем его отсутствие: каждая толщина стенки и посадка на картинке — размер модели, а чего в модели нет, того не нарисовано. Подшипник упрощён до одного кольца, и на картинке это указано.' },
      approach: { en: 'The roller is built as profiles revolved around the axis, so one source gives all three images. The section is a true half-body with the cut faces coloured per part; the numbers sit on 3D points projected through the render camera, not placed by eye.',
                  ru: 'Ролик строится профилями, вращёнными вокруг оси, поэтому один источник даёт все три картинки. Разрез — настоящая половина тела с сечением, раскрашенным по деталям; номера стоят на 3D-точках, спроецированных через камеру рендера, а не расставлены на глаз.' },
      result:   { en: 'One model, three deliverables: an exploded view with a bill of materials for the service manual, a section for the product page and an end-support detail for the technical sale.',
                  ru: 'Одна модель, три материала: взрыв-схема со спецификацией для сервисной документации, разрез для страницы товара и узел опоры для технической продажи.' } } },

  { id: 'case-conveyor-360', index: 'CASE_08', kind: 'case', demo: 'own',
    sector: { en: 'PRODUCT', ru: 'ПРОДУКТ' },
    year: '2026',
    title:  { en: 'MODULAR CONVEYOR — 360° TURNTABLE', ru: 'МОДУЛЬНЫЙ КОНВЕЙЕР — 360° TURNTABLE' },
    input:  { en: 'The same parametric module as in the catalogue stills', ru: 'Тот же параметрический модуль, что и в каталожных рендерах' },
    output: { en: 'A seamless 10 s loop, 240 frames, 1280 × 720', ru: 'Бесшовный луп 10 с, 240 кадров, 1280 × 720' },
    media: { type: 'video', src: 'assets/cases/case-conveyor-360.mp4' },
    metrics: [
      { label: { en: 'FRAMES', ru: 'КАДРОВ' }, value: '240', num: 240 },
      { label: { en: 'LENGTH', ru: 'ДЛИТЕЛЬНОСТЬ' }, value: '10 с', num: 10 },
      { label: { en: 'FILE SIZE', ru: 'ВЕС ФАЙЛА' }, value: '< 1 МБ', num: 1 } ],
    description: { en: 'A rotating view from the same scene as the stills: the buyer sees the module from every side, and the video cannot disagree with the catalogue.',
                   ru: 'Вращение из той же сцены, что и стиллы: покупатель видит модуль со всех сторон, а видео не может разойтись с каталогом.' },
    story: {
      task:     { en: 'Show the module from every side on the product page, without a shoot and without a 3D viewer that has to be embedded.',
                  ru: 'Показать модуль со всех сторон на странице товара — без съёмки и без 3D-просмотрщика, который нужно встраивать.' },
      limits:   { en: 'The loop has to close without a visible jump and stay small enough to start at once on a phone.',
                  ru: 'Луп должен замыкаться без заметного скачка и быть достаточно лёгким, чтобы сразу запускаться на телефоне.' },
      approach: { en: 'The module turns while the camera and the light stand still, so highlights travel over the metal the way they do on a real turntable. Frame 241 would equal frame 1, so rendering frames 1–240 closes the loop.',
                  ru: 'Вращается модуль, а камера и свет стоят на месте, поэтому блики ходят по металлу так же, как на настоящем поворотном столе. Кадр 241 совпал бы с кадром 1, поэтому кадры 1–240 замыкают луп.' },
      result:   { en: 'One short file for the product page, a booth screen or a presentation, rendered with the same studio rig as every catalogue frame.',
                  ru: 'Один короткий файл для страницы товара, экрана стенда или презентации — отрисованный на той же студийной установке, что и все каталожные кадры.' } } },

  { id: 'case-booth', index: 'CASE_09', kind: 'case', demo: 'own',
    sector: { en: 'OBJECTS', ru: 'ОБЪЕКТЫ' },
    year: '2026',
    title:  { en: 'TRADE SHOW PACK — MODULAR CONVEYOR', ru: 'ВЫСТАВОЧНЫЙ ПАКЕТ — МОДУЛЬНЫЙ КОНВЕЙЕР' },
    input:  { en: 'Our parametric conveyor model — no brand book, no real show', ru: 'Наша параметрическая модель конвейера — без брендбука и без реальной выставки' },
    output: { en: '3 key frames, a 20 s screen loop, banner, roll-up, A4 sheet', ru: '3 ключевых кадра, луп 20 с для экрана, баннер, ролл-ап, лист А4' },
    media: { type: 'video', src: 'assets/cases/case-booth-loop.mp4' },
    gallery: ['assets/cases/case-booth-loop.mp4',
              'assets/cases/case-booth-02.jpg',
              'assets/cases/case-booth-03.jpg',
              'assets/cases/case-booth-04.jpg',
              'assets/cases/case-booth-05.jpg',
              'assets/cases/case-booth-06.jpg'],
    metrics: [
      { label: { en: 'FORMATS', ru: 'ФОРМАТОВ' }, value: '7', num: 7 },
      { label: { en: 'SCREEN LOOP', ru: 'ЛУП ДЛЯ ЭКРАНА' }, value: '20 с', num: 20 },
      { label: { en: 'SOURCE MODELS', ru: 'ИСХОДНЫХ МОДЕЛЕЙ' }, value: '1', num: 1 } ],
    description: { en: 'A stand kit from one model: a screen loop, three print-size frames, a 3 × 1 m banner, a roll-up and a data sheet in one visual system.',
                   ru: 'Комплект для стенда из одной модели: луп для экрана, три кадра печатного размера, баннер 3 × 1 м, ролл-ап и каталожный лист в одной визуальной системе.' },
    story: {
      task:     { en: 'Prepare the materials for a stand before the product is on the show floor: one visual system from the screen loop to the large-format print.',
                  ru: 'Подготовить материалы для стенда до того, как изделие появилось в зале: одна визуальная система от лупа на экране до широкоформатной печати.' },
      limits:   { en: 'Every figure on the layouts — lengths, widths, roller diameters, loads — is a parameter of the model, so the banner and the data sheet cannot disagree with the frames. There is no real company or show behind it, and the layouts say so.',
                  ru: 'Каждая цифра на макетах — длины, ширины, диаметры роликов, нагрузки — это параметр модели, поэтому баннер и каталожный лист не могут разойтись с кадрами. За ним нет настоящей компании и выставки, и макеты это указывают.' },
      approach: { en: 'Three print-size key frames come from one studio rig; the loop is the turntable scene with captions; the banner, the roll-up and the sheet are laid out from the same frames and the model’s parameter table.',
                  ru: 'Три ключевых кадра печатного размера считаются на одной студийной установке; луп — сцена turntable с титрами; баннер, ролл-ап и лист собраны из тех же кадров и таблицы параметров модели.' },
      result:   { en: 'A stand kit of 7 files in one style, ready to hand to a print shop and a screen operator.',
                  ru: 'Комплект для стенда из 7 файлов в одном стиле, который можно отдать в типографию и оператору экрана.' } } },

  /* CASE_11 — conditional DN100 PN16 ball valve, two modes, GLB within 1 MB. Not a factory product. */
  { id: 'case-ball-valve', index: 'CASE_11', kind: 'case', demo: 'model',
    sector: { en: 'PRODUCT', ru: 'ПРОДУКТ' },
    year: '2026',
    title:  { en: 'BALL VALVE — 3D AND SECTION', ru: 'ШАРОВОЙ КРАН — 3D И РАЗРЕЗ' },
    input:  { en: 'A conditional DN100 PN16 ball-valve model', ru: 'Условная модель шарового крана DN100 PN16' },
    output: { en: 'Exterior and section in the browser, four section stills', ru: 'Общий вид и разрез в браузере, четыре кадра разреза' },
    media: { type: 'image', src: 'assets/cases/ball-valve-section.png', fit: 'natural' },
    href: 'cases/caseballvalve.html',
    cta: { ru: 'Посмотреть', en: 'View' },
    metrics: [
      { label: { en: 'VIEW MODES', ru: 'РЕЖИМА' }, value: '2', num: 2 },
      { label: { en: 'NOMINAL SIZE', ru: 'ТИПОРАЗМЕР' }, value: 'DN100 PN16', num: 4 },
      { label: { en: 'GLB SIZE', ru: 'ВЕС GLB' }, value: 'до 1 МБ', num: 1 } ],
    description: { en: 'A ball valve in 3D and in section. Two modes — exterior and cutaway — on a conditional DN100 PN16 model. Each GLB stays within 1 MB. Demonstration on a conditional model.',
                   ru: 'Шаровой кран в 3D и в разрезе. Два режима — общий вид и разрез — на условной модели DN100 PN16. Каждый GLB до 1 МБ. Демонстрация на условной модели.' },
    story: {
      task:     { en: 'Show how a ball valve is built: the buyer rotates the model and looks inside, instead of seeing only a photo of the body.',
                  ru: 'Показать, как устроен шаровой кран: покупатель вращает модель и заглядывает внутрь, а не видит только фотографию корпуса.' },
      limits:   { en: 'A conditional model from typical DN100 PN16 proportions, face-to-face length 230 mm. Not design documentation and not a product of any plant. No stem seals, packing, seat springs, body joint, chamfers or threads; the ball and the stem sit without clearance.',
                  ru: 'Условная модель по типовым пропорциям DN100 PN16, строительная длина 230 мм. Это не конструкторская документация и не изделие какого-либо завода. Нет уплотнений штока, сальниковой набивки, пружин седел, разъёма корпуса, фасок и резьбы; шар и шпиндель посажены без зазоров.' },
      approach: { en: 'Two local GLB files — exterior and section — and a local model-viewer. A poster stays up until the model loads, and if the file fails. The switch changes the model.',
                  ru: 'Два локальных GLB — общий вид и разрез — и локальный model-viewer. Постер виден до загрузки модели и если файл не открылся. Переключатель меняет модель.' },
      result:   { en: 'Two view modes and four section stills from one conditional model, each GLB within 1 MB.',
                  ru: 'Два режима просмотра и четыре кадра разреза из одной условной модели, каждый GLB до 1 МБ.' } } },
];

/* ---------- BRIEF: steps after send ---------- */
const BRIEF_STEPS = [
  { index: 'S_01', tag: { en: '24 HOURS', ru: '24 ЧАСА' },
    text: { en: 'We reply and request any missing materials. If the project isn’t for us — we say so straight away.',
            ru: 'Отвечаем и запрашиваем недостающие исходники. Если проект не наш — говорим сразу.' } },
  { index: 'S_02', tag: { en: '30 MINUTES', ru: '30 МИНУТ' },
    text: { en: 'A call: goals, audience, deadlines (a trade show? a launch?), a walkthrough of your materials.',
            ru: 'Созвон: цели, аудитория, дедлайны (выставка? запуск?), разбор ваших материалов.' } },
  { index: 'S_03', tag: { en: '3 DAYS', ru: '3 ДНЯ' },
    text: { en: 'A proposal: direction, scope, timeline and cost. Then — V_01, or a free trial render if that is the entry.',
            ru: 'Предложение: направление, состав работ, срок и стоимость. Дальше — V_01 или бесплатный пробный рендер, если вход такой.' } }
];

/* ---------- BRIEF: timelines ---------- */
const TIMELINES = [
  { product: { en: 'Trial render, 1 product', ru: 'Пробный рендер, 1 изделие' },
    time: { en: '24–48 hours', ru: '24–48 часов' }, tier: 1 },
  { product: { en: 'Starter pack (6 angles + 2 scenes)', ru: 'Стартовый пакет (6 ракурсов + 2 среды)' },
    time: { en: '1 week', ru: '1 неделя' }, tier: 2 },
  { product: { en: 'Catalogue run, from 20 SKU', ru: 'Каталог, от 20 SKU' },
    time: { en: '2–4 weeks', ru: '2–4 недели' }, tier: 3 },
  { product: { en: 'Trade show pack', ru: 'Выставочный пакет' },
    time: { en: '2–3 weeks', ru: '2–3 недели' }, tier: 3 },
  { product: { en: 'Interactive 3D / AR', ru: 'Интерактивный 3D / AR' },
    time: { en: '2–4 weeks', ru: '2–4 недели' }, tier: 4 },
  { product: { en: 'Cinematic 60–120 sec + stills', ru: 'Синематик 60–120 сек + стиллы' },
    time: { en: '4–6 weeks', ru: '4–6 недель' }, tier: 4 },
  { product: { en: 'Full project pack', ru: 'Полный пакет проекта' },
    time: { en: '6–8 weeks', ru: '6–8 недель' }, tier: 5 }
];

/* ---------- BRIEF: checklist ---------- */
const CHECKLIST = [
  { en: 'A link to source materials: CAD, catalogue, photos — whatever exists, in any form',
    ru: 'Ссылка на исходники: CAD, каталог, фото — что есть, в любом виде' },
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
  { en: 'Trial render, 1 product', ru: 'Пробный рендер одного изделия' },
  { en: 'Catalogue / SKU pack',    ru: 'Каталог / пакет SKU' },
  { en: 'Context scenes',          ru: 'Среда применения' },
  { en: 'Exploded views / cutaways', ru: 'Взрыв-схемы / разрезы' },
  { en: 'Video / 360°',            ru: 'Видео / 360°' },
  { en: 'Interactive 3D / AR',     ru: 'Интерактив / AR' },
  { en: 'Trade show',              ru: 'Выставка' },
  { en: 'Site cinematic / tender', ru: 'Объект / синематик для тендера' },
  { en: 'Website development',     ru: 'Разработка сайта' },
  { en: 'Internal software / bots', ru: 'Внутренний софт / боты' },
  { en: 'AI pipelines',            ru: 'ИИ-пайплайны / агенты' },
  { en: 'AI consulting',           ru: 'Консультация по ИИ' },
  { en: '3D world',                ru: '3D-мир' },
  { en: 'Training apps / sites / 3D', ru: 'Обучающие приложения / сайты / 3D-миры' },
  { en: 'Not sure — advise me',    ru: 'Не знаю — подскажите' }
];

const FORM_STAGES = [
  { en: 'Idea',              ru: 'Идея' },
  { en: 'Design stage',      ru: 'Проект' },
  { en: 'Under construction', ru: 'Стройка' },
  { en: 'Operating business', ru: 'Действующий бизнес' }
];

/* Team-size radios for the AI-line fields. `value` is what the brief email receives. */
const FORM_TEAM = [
  { value: 'up to 10', en: 'up to 10', ru: 'до 10' },
  { value: '10\u201350', en: '10\u201350', ru: '10\u201350' },
  { value: '50\u2013200', en: '50\u2013200', ru: '50\u2013200' },
  { value: '200+', en: '200+', ru: '200+' }
];

const CONTACT_EMAIL = 'mail@monolith.contact';
