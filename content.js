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
  'nav.capabilities':  { en: '03 // WORK',          ru: '03 // РАБОТЫ' },
  'nav.brief':         { en: '04 // BRIEF',         ru: '04 // БРИФ' },

  'hero.label':        { en: '01 // MAIN', ru: '01 // ГЛАВНАЯ' },
  'hero.tagline':      { en: 'Product visuals from your drawings and catalogue. Exact as the model. Ready for the tender and the website.',
                         ru: 'Визуал продукта из ваших чертежей и каталога. Точный, как модель. Готовый к тендеру и сайту.' },
  'hero.p1':           { en: 'Hero shots, usage environments, exploded views, 360° and an interactive viewer on the product page. Nobody on site. First frames — 24–48 hours after the model.',
                         ru: 'Герой-рендеры, среда применения, взрыв-схемы, 360° и интерактив на страницу товара. Никого на площадке. Первые кадры — за 24–48 часов после модели.' },
  'hero.p2':           { en: 'Geometry comes from your CAD, BIM or catalogue model and does not drift. We build light, setting and the format pack.',
                         ru: 'Геометрия берётся из вашей CAD, BIM или каталожной модели и не дрейфует. Мы собираем свет, среду и пакет форматов.' },
  'hero.ctaTrial':     { en: 'Get a test render', ru: 'Получить тестовый рендер' },
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
                         ru: 'REMOTE-FIRST' },

  'lab.label':         { en: '02 // HOW IT WORKS — PIPELINE', ru: '02 // КАК ЭТО УСТРОЕНО — ПАЙПЛАЙН' },
  'lab.title':         { en: 'Four stages between your files and the final frame.',
                         ru: 'Четыре этапа между вашими файлами и финальным кадром.' },
  'lab.tech':          { en: 'Generative models are used for environment, light and finish. The product is not invented. If a frame is synthetic and will run as advertising, we mark it to the transparency rules in force (EU AI Act, Art. 50, since 2 August 2026).',
                         ru: 'Генеративные модели используем для среды, света и финиша. Изделие не «придумывается». Если кадр синтетический и идёт в рекламу — маркируем его по действующим требованиям к прозрачности (EU AI Act, ст. 50, с 2 августа 2026).' },
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

  'cap.label':         { en: '03 // WORK', ru: '03 // РАБОТЫ' },
  'cap.title':         { en: 'What MONOLITH does for business.',
                         ru: 'Что MONOLITH делает для бизнеса.' },
  'cap.badge':         { en: 'CAPABILITY INDEX — CASE STUDIES COMING SOON',
                         ru: 'ИНДЕКС ВОЗМОЖНОСТЕЙ — КЕЙСЫ ПОЯВЯТСЯ ПО МЕРЕ ВЫПОЛНЕНИЯ ПРОЕКТОВ' },
  'cap.cases':         { en: 'CASES', ru: 'КЕЙСЫ' },
  'cap.also':          { en: 'ALSO — FORMATS FOR CAMPAIGNS AND CHANNELS', ru: 'ТАКЖЕ — ФОРМАТЫ ДЛЯ КАМПАНИЙ И КАНАЛОВ' },
  'cap.all':           { en: 'ALL',   ru: 'ВСЕ' },
  'cap.input':         { en: 'INPUT',  ru: 'ВХОД' },
  'cap.output':        { en: 'OUTPUT', ru: 'ВЫХОД' },
  'cap.footnote':      { en: 'The number of deliverables, source files and timeline — I discuss those individually for each project.',
                         ru: 'Количество материалов, исходники и сроки обсуждаю индивидуально для каждого проекта.' },

  'case.demo_open':    { en: 'DEMO PROJECT ON AN OPEN MODEL', ru: 'ДЕМОНСТРАЦИОННЫЙ ПРОЕКТ НА ОТКРЫТОЙ МОДЕЛИ' },
  'case.demo_own':     { en: 'OUR OWN PARAMETRIC MODEL', ru: 'СОБСТВЕННАЯ ПАРАМЕТРИЧЕСКАЯ МОДЕЛЬ' },
  'case.source':       { en: 'Source model', ru: 'Исходная модель' },
  'case.open':         { en: 'How it was done', ru: 'Как это делалось' },
  'case.task':         { en: 'TASK', ru: 'ЗАДАЧА' },
  'case.limits':       { en: 'CONSTRAINTS', ru: 'ОГРАНИЧЕНИЯ' },
  'case.approach':     { en: 'APPROACH', ru: 'ПОДХОД' },
  'case.result':       { en: 'RESULT', ru: 'РЕЗУЛЬТАТ' },

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
  'form.msgPh':        { en: 'Project, deadlines, links to CAD / photos / catalogue…', ru: 'Проект, сроки, ссылки на CAD / фото / каталог…' },
  'form.submit':       { en: 'Send brief', ru: 'Отправить бриф' },
  'form.sending':      { en: 'Sending…', ru: 'Отправляем…' },
  'form.required':     { en: 'Fill in the highlighted fields.', ru: 'Заполните выделенные поля.' },
  'form.sendError':    { en: 'Could not send — try again, or write to', ru: 'Не получилось отправить — попробуйте ещё раз или напишите на' },
  'brief.doneTitle':   { en: 'BRIEF SENT', ru: 'БРИФ ОТПРАВЛЕН' },
  'brief.doneText':    { en: 'It went straight to us — no mail client needed. We reply within 24 hours after the message arrives.',
                         ru: 'Ушёл прямо к нам — почтовый клиент не нужен. Ответим в течение 24 часов после получения.' },
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
  'status.sys':        { en: 'SYS_STATUS: ACTIVE', ru: 'SYS_STATUS: ACTIVE' },
  'overlay.reroute':   { en: 'REROUTE', ru: 'REROUTE' }
};

/* ---------- Hero metrics ---------- */
const HERO_METRICS = [
  { value: '24–48ч', label: { en: 'TO FIRST FRAMES',        ru: 'ДО ПЕРВЫХ КАДРОВ' } },
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
         ru: 'Тем же, чем типография отличается от принтера. Модели доступны всем; результат определяют пайплайн, зафиксированная геометрия, постановка и ответственность за сроки. Мы отдаём согласованный продакшн: выверенную геометрию, единый стиль всех материалов и файлы, готовые к печати, сайту и тендеру.' } }
];

/* ---------- 03 CAPABILITIES / future CASES.
     extra: true → rendered in the “also” block, not the main industrial grid. ---------- */
const ARCHIVE_ITEMS = [
  { kind: 'capability', extra: false, id: 'cap-catalog', index: 'CAP_01',
    title:  { en: 'CATALOGUE WITHOUT A STUDIO', ru: 'КАТАЛОГ БЕЗ СТУДИИ' },
    sector: { en: 'PRODUCT', ru: 'ПРОДУКТ' },
    input:  { en: 'A catalogue, STEP/3D model or 5–10 photos', ru: 'Каталог, STEP/3D-модель или 5–10 фото' },
    output: { en: 'Hero shots, colourways, a series per SKU', ru: 'Герой-кадры, цвета, серия на каждый SKU' },
    metrics: [
      { label: { en: 'FRAMES PER SKU', ru: 'КАДРОВ НА SKU' }, value: '8', num: 8 },
      { label: { en: 'SKU PER PROJECT', ru: 'SKU ЗА ПРОЕКТ' }, value: '40', num: 40 },
      { label: { en: 'FIRST FRAMES', ru: 'ПЕРВЫЕ КАДРЫ' }, value: '48ч', num: 2 } ],
    media: { type: 'placeholder', src: '' },
    description: { en: 'Product photography for industrial goods — from a catalogue and a 3D model. Equipment, tools, materials in staged light, the way watches and cars are shot.',
                   ru: 'Предметная съёмка индустриального продукта — из каталога и 3D-модели. Оборудование, инструмент, материалы — в постановочном свете, как снимают часы и автомобили.' } },

  { kind: 'capability', extra: false, id: 'cap-context', index: 'CAP_02',
    title:  { en: 'THE PRODUCT IN ITS REAL SETTING', ru: 'ПРОДУКТ В РАБОЧЕЙ СРЕДЕ' },
    sector: { en: 'PRODUCT', ru: 'ПРОДУКТ' },
    input:  { en: 'Model or photos + where it is used', ru: 'Модель или фото + где применяется' },
    output: { en: 'Context scenes: site, shop, field', ru: 'Контекстные сцены: площадка, цех, поле' },
    metrics: [
      { label: { en: 'SCENES', ru: 'СЦЕН' }, value: '6', num: 6 },
      { label: { en: 'DAYS ON SITE', ru: 'ДНЕЙ НА ПЛОЩАДКЕ' }, value: '0', num: 1 },
      { label: { en: 'WEEKS', ru: 'НЕДЕЛИ' }, value: '1–2', num: 2 } ],
    media: { type: 'placeholder', src: '' },
    description: { en: 'The product shown at work — without logistics, weather or a safety clearance. Scale is readable because a person or a machine stands next to it.',
                   ru: 'Изделие показано в работе — без логистики, погоды и допуска по ТБ. Масштаб читается, потому что рядом стоит человек или техника.' } },

  { kind: 'capability', extra: false, id: 'cap-tech', index: 'CAP_03',
    title:  { en: 'EXPLODED VIEWS & CUTAWAYS', ru: 'ВЗРЫВ-СХЕМЫ И РАЗРЕЗЫ' },
    sector: { en: 'PRODUCT', ru: 'ПРОДУКТ' },
    input:  { en: 'CAD / assembly / bill of materials', ru: 'CAD / сборка / спецификация' },
    output: { en: 'Exploded view, 2 cutaways, labels', ru: 'Взрыв-схема, 2 разреза, подписи' },
    metrics: [
      { label: { en: 'DRAWINGS', ru: 'СХЕМ' }, value: '3+', num: 3 },
      { label: { en: 'LABELS', ru: 'ВЫНОСОК' }, value: '12', num: 12 },
      { label: { en: 'DAYS', ru: 'ДНЕЙ' }, value: '5–10', num: 7 } ],
    media: { type: 'placeholder', src: '' },
    description: { en: 'Service and technical-sales graphics: what photography cannot do without destroying the unit. Geometry stays the geometry of your file.',
                   ru: 'Графика для сервиса и технической продажи: то, чего фотография не умеет без разборки изделия. Геометрия остаётся геометрией вашего файла.' } },

  { kind: 'capability', extra: false, id: 'cap-object', index: 'CAP_04',
    title:  { en: 'THE SITE BEFORE IT’S BUILT', ru: 'ОБЪЕКТ ДО ПОСТРОЙКИ' },
    sector: { en: 'OBJECTS', ru: 'ОБЪЕКТЫ' },
    input:  { en: 'CAD/BIM, master plan, facade designs', ru: 'CAD/BIM, генплан, фасадные решения' },
    output: { en: 'Cinematic 4K, stills, tender angles', ru: 'Синематик 4K, стиллы, ракурсы для тендера' },
    metrics: [
      { label: { en: 'ANGLES', ru: 'РАКУРСОВ' }, value: '24', num: 24 },
      { label: { en: 'FIRST STILLS', ru: 'ПЕРВЫЕ СТИЛЛЫ' }, value: '48ч', num: 2 },
      { label: { en: 'WEEKS FULL', ru: 'НЕДЕЛЬ ПОЛНЫЙ' }, value: '4–6', num: 5 } ],
    media: { type: 'placeholder', src: '' },
    description: { en: 'A cinematic of a building, plant, terminal or district — before the first excavation. Project documentation becomes a finished site at any hour and season.',
                   ru: 'Синематик здания, завода, терминала или района — до первого котлована. Проектная документация превращается в построенный объект в любое время суток и сезон.' } },

  { kind: 'capability', extra: false, id: 'cap-interactive', index: 'CAP_05', demo: 'own',
    title:  { en: 'VIEWER ON THE PRODUCT PAGE', ru: 'ПРОСМОТРЩИК НА СТРАНИЦЕ ТОВАРА' },
    sector: { en: 'DIGITAL', ru: 'DIGITAL' },
    input:  { en: 'Optimized 3D model', ru: 'Оптимизированная 3D-модель' },
    output: { en: 'Embed, explode, AR at real scale', ru: 'Встраивание, взрыв-схема, AR в масштабе' },
    metrics: [
      { label: { en: 'WEIGHT, MB', ru: 'ВЕС, МБ' }, value: '<8', num: 8 },
      { label: { en: 'FORMATS', ru: 'ФОРМАТОВ' }, value: 'GLB', num: 1 },
      { label: { en: 'WEEKS', ru: 'НЕДЕЛИ' }, value: '1–3', num: 2 } ],
    // geometry only, no studio/lights — exported straight from build_rack() so it can't drift from the stills
    model3d: 'assets/cases/case-racking-3d.glb',
    description: { en: 'A 3D viewer the buyer can rotate on the product page, plus AR in the hall. Models are optimized so they do not stall the client’s site.',
                   ru: '3D-просмотрщик, который покупатель крутит на странице товара, плюс AR в цеху. Модели оптимизированы так, чтобы не вешать сайт клиента.' } },

  { kind: 'capability', extra: false, id: 'cap-show', index: 'CAP_06',
    title:  { en: 'TRADE SHOW PACK', ru: 'ВЫСТАВОЧНЫЙ ПАКЕТ' },
    sector: { en: 'OBJECTS', ru: 'ОБЪЕКТЫ' },
    input:  { en: 'Product / stand concept + deadline', ru: 'Продукт / концепция стенда + дедлайн' },
    output: { en: 'Loops, banners, print, booth screens', ru: 'Лупы, баннеры, печать, экраны стенда' },
    metrics: [
      { label: { en: 'FORMATS', ru: 'ФОРМАТОВ' }, value: '12', num: 12 },
      { label: { en: 'WEEKS', ru: 'НЕДЕЛИ' }, value: '2–3', num: 3 },
      { label: { en: 'REVISIONS', ru: 'ПРАВОК' }, value: '2', num: 2 } ],
    media: { type: 'placeholder', src: '' },
    description: { en: 'Materials for the booth before the unit exists. One visual system from the screen loop to the large-format print.',
                   ru: 'Материалы для стенда до того, как изделие сошло с линии. Одна визуальная система от лупа на экране до широкоформатной печати.' } },

  { kind: 'capability', extra: true, id: 'cap-landing', index: 'CAP_07',
    title:  { en: 'LANDING PRESENTATION', ru: 'ЛЕНДИНГ-ПРЕЗЕНТАЦИЯ' },
    sector: { en: 'DIGITAL', ru: 'DIGITAL' },
    input:  { en: 'Project materials, brand book if it exists', ru: 'Материалы проекта, брендбук (если есть)' },
    output: { en: 'A publish-ready landing page + visual sources', ru: 'Готовый к публикации лендинг + исходники визуала' },
    metrics: [
      { label: { en: 'SCREENS', ru: 'ЭКРАНОВ' }, value: '8', num: 8 },
      { label: { en: 'LANGUAGES', ru: 'ЯЗЫКОВ' }, value: '2', num: 2 },
      { label: { en: 'WEEKS', ru: 'НЕДЕЛИ' }, value: '1–2', num: 2 } ],
    media: { type: 'placeholder', src: '' },
    description: { en: 'A single-page site for one project or product: visuals, structure, copy. For a sales launch, a tender or an investor pitch.',
                   ru: 'Одностраничный сайт проекта или продукта: визуал, структура, тексты. Для запуска продаж, тендера или инвест-питча.' } },

  { kind: 'capability', extra: true, id: 'cap-social', index: 'CAP_08',
    title:  { en: 'CHANNEL PACK', ru: 'ПАКЕТ ДЛЯ КАНАЛОВ' },
    sector: { en: 'CAMPAIGNS', ru: 'КАМПАНИИ' },
    input:  { en: 'Key visual from the main pack', ru: 'Ключевой визуал из основного пакета' },
    output: { en: 'Verticals, cards, covers, post templates', ru: 'Вертикали, карточки, обложки, шаблоны постов' },
    metrics: [
      { label: { en: 'ASSETS', ru: 'МАТЕРИАЛОВ' }, value: '20+', num: 20 },
      { label: { en: 'WEEKS', ru: 'НЕДЕЛИ' }, value: '1', num: 1 },
      { label: { en: 'FORMATS', ru: 'ФОРМАТОВ' }, value: '8', num: 8 } ],
    media: { type: 'placeholder', src: '' },
    description: { en: 'Adaptations of the industrial visual into channel formats — not a separate “social-first” product. Same geometry, different crop.',
                   ru: 'Адаптации промышленного визуала в форматы каналов — не отдельный «соцсетевой» продукт. Та же геометрия, другой кадр.' } },

  { kind: 'capability', extra: true, id: 'cap-campaign', index: 'CAP_09',
    title:  { en: 'PERFORMANCE SET', ru: 'НАБОР ПОД КАМПАНИЮ' },
    sector: { en: 'CAMPAIGNS', ru: 'КАМПАНИИ' },
    input:  { en: 'A product + campaign goals', ru: 'Продукт + цели кампании' },
    output: { en: 'Statics and video, variations per placement', ru: 'Статика и видео, вариации под площадки' },
    metrics: [
      { label: { en: 'FORMATS', ru: 'ФОРМАТОВ' }, value: '30+', num: 30 },
      { label: { en: 'CREATIVES', ru: 'КРЕАТИВОВ' }, value: '120', num: 120 },
      { label: { en: 'WEEKS', ru: 'НЕДЕЛИ' }, value: '2–3', num: 3 } ],
    media: { type: 'placeholder', src: '' },
    description: { en: 'A campaign built from the same product model: one visual system from the key image to every placement.',
                   ru: 'Кампания из той же модели продукта: единая визуальная система от ключевого имиджа до форматов площадок.' } },

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
                  ru: 'Один дополнительный шаг экспорта — и страница товара получает интерактивную модель, уже синхронную с каталожными рендерами.' } } }
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
  { en: 'Not sure — advise me',    ru: 'Не знаю — подскажите' }
];

const FORM_STAGES = [
  { en: 'Idea',              ru: 'Идея' },
  { en: 'Design stage',      ru: 'Проект' },
  { en: 'Under construction', ru: 'Стройка' },
  { en: 'Operating business', ru: 'Действующий бизнес' }
];

const CONTACT_EMAIL = 'mail@monolith.contact';
