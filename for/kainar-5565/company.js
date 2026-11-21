/* Контент КП для Кайнар-АКБ (движок deck, стиль blueprint). Пакеты и цены: Obsidian, «Пакет услуг — Кайнар-АКБ.md».
   Факты: 24.kz от 23.10.2025. Ассеты: assets/battery-cut.{webp,glb}, battery-full.webp, battery-rack.webp. */
window.COMPANY={
  slug:'kainar',
  style:'blueprint',
  name:{ru:'Кайнар-АКБ',en:'Kainar-AKB'},
  title:{ru:'Предложение для Кайнар-АКБ — MONOLITH',en:'A proposal for Kainar-AKB — MONOLITH'},
  /* золото и графит; акцент #8A5F00 (белый текст 5.3), светлая версия #FFC21A для тёмных блоков */
  theme:{accent:'#8A5F00',accentL:'#FFC21A',onAccent:'#FFFFFF',dark:'#15120E',dark2:'#1E1A14',lineDark:'#3B352B',bg:'#F1EDE3',bg2:'#E5E0D3',line:'#C8C0AE',fg:'#16120C',muted:'#5A5244',
         fHead:"'Oswald','Arial Narrow',system-ui,sans-serif",fBody:"'IBM Plex Sans',system-ui,sans-serif"},
  ui:{ru:{sticky:'Получить пробный кадр',demo:'Демонстрация на условной модели, не изделие Кайнар-АКБ.',case:'Кадр'},
      en:{sticky:'Get a trial image',demo:'Demonstration on a conditional model, not a Kainar-AKB product.',case:'View'}},
  contact:{brief:'https://monolith.contact/#/brief?src=kainar',stickyTo:'contact',site:'https://monolith.contact'},
  noDate:true,noFooterNote:true,
  model:{lazy:true,section:'assets/battery-cut.glb',posterSection:'assets/battery-cut.webp'},
  blocks:['hero','more','facts','why','deliver','case','steps','pricing','scope','principles','about','cta'],
  nav:[{id:'why',t:{ru:'Задача',en:'The task'}},{id:'deliver',t:{ru:'Результат',en:'Deliverables'}},{id:'case',t:{ru:'Кадры',en:'Views'}},{id:'pricing',t:{ru:'Цены',en:'Pricing'}}],
  hero:{
    eyebrow:{ru:'Предложение для Кайнар-АКБ · материалы для новой линии батарей',en:'A proposal for Kainar-AKB · materials for the new battery line'},
    tags:[{ru:'Условная модель · не изделие Кайнар-АКБ',en:'Conditional model · not a Kainar-AKB product'},{ru:'Разрез',en:'Section'}],
    h1:{ru:'Сделаем каталог, сцены применения и ролик для новой линии батарей',en:'We will make a catalogue, application scenes and a video for the new battery line'},
    lead:{ru:'Мы — MONOLITH, студия технической графики. Каталог новой линейки: ракурсы батареи и сцены применения в ЦОД, на подстанции и в телекоме. Первый комплект — через 7–10 дней от получения исходников.',
          en:'We are MONOLITH, a technical graphics studio. A catalogue for the new line: battery views and application scenes in a data centre, a substation and telecom. First set: 7–10 days from receiving your sources.'},
    cta:{ru:'Получить пробный кадр',en:'Get a trial image'},ctaTo:'contact',
    cta2:{ru:'Покрутить разрез',en:'Rotate the section'},
    offer:[
      {t:{ru:'Каталог линейки',en:'Line catalogue'},d:{ru:'Единый свет и ракурс на всю линейку',en:'One light and angle across the line'}},
      {t:{ru:'Сцены применения',en:'Application scenes'},d:{ru:'ЦОД, подстанция, телеком',en:'Data centre, substation, telecom'}},
      {t:{ru:'Ролик 60 секунд',en:'60-second video'},d:{ru:'Для выставки и тендера',en:'For exhibitions and tenders'}},
      {t:{ru:'Подбор аккумулятора',en:'Battery selector'},d:{ru:'Клиент и дилер выбирают сами',en:'Clients and dealers choose themselves'}}]},
  facts:[
    {n:'100',count:100,label:{ru:'тысяч источников бесперебойного питания в год: мощность первого этапа новой линии, затем планируют удвоить',en:'thousand UPS units a year: the capacity of the new line’s first stage, with plans to double it later'},src:{ru:'24.kz, 23.10.2025',en:'24.kz, 23 Oct 2025'},url:'https://24.kz/ru/news/economyc/736646-akkumulyatornyj-zavod-zapustil-novuyu-liniyu-proizvodstva'},
    {n:'10',count:10,label:{ru:'млрд тенге собственных инвестиций предприятия в проект линии в Талдыкоргане',en:'billion tenge of the company’s own investment in the line project in Taldykorgan'},src:{ru:'24.kz, 23.10.2025',en:'24.kz, 23 Oct 2025'},url:'https://24.kz/ru/news/economyc/736646-akkumulyatornyj-zavod-zapustil-novuyu-liniyu-proizvodstva'},
    {n:'150',count:150,label:{ru:'человек будут работать на новой линии',en:'people will work on the new line'},src:{ru:'24.kz, 23.10.2025',en:'24.kz, 23 Oct 2025'},url:'https://24.kz/ru/news/economyc/736646-akkumulyatornyj-zavod-zapustil-novuyu-liniyu-proizvodstva'}],
  why:{
    title:{ru:'Линия запущена, покупателю нужен понятный материал',en:'The line is running; the buyer needs clear material'},
    paras:[
      {ru:'Покупателю из энергетики или телекома нужны не слова, а наглядный материал: как выглядит батарея, где она стоит, что держит.',en:'A buyer in energy or telecom needs more than words: what the battery looks like, where it stands, what it carries.'},
      {ru:'Это наша гипотеза по открытым данным, не цитата Кайнар-АКБ. Мы хотим проверить её на созвоне.',en:'This is our hypothesis from public data, not a Kainar-AKB quote. We want to check it on a call.'}],
    note:{ru:'Данные из открытых источников:',en:'Data from public sources:'},
    links:[{t:{ru:'24.kz: запуск новой линии',en:'24.kz: launch of the new line'},url:'https://24.kz/ru/news/economyc/736646-akkumulyatornyj-zavod-zapustil-novuyu-liniyu-proizvodstva'}],
    tasks:[
      {ru:'Кто покупатели новой линейки?',en:'Who are the buyers of the new line?'},
      {ru:'Есть ли 3D-модели батарей? Какие программы и таблицы сейчас заняты в каталоге и заявках?',en:'Do you have 3D models of the batteries? Which programs and spreadsheets handle the catalogue and requests now?'},
      {ru:'Какие экспортные рынки важны?',en:'Which export markets matter?'}]},
  deliver:{
    title:{ru:'Что получите',en:'What you get'},
    items:[
      {t:{ru:'Каталог линейки',en:'Line catalogue'},d:{ru:'Единый свет и ракурс на всю линейку по фото и каталогу. 6 ракурсов, PNG 4000 px.',en:'One light and angle across the line from photos and the catalogue. 6 views, PNG 4000 px.'}},
      {t:{ru:'Разрез батареи',en:'Battery section'},d:{ru:'Если есть полная 3D-сборка (STEP). Без неё моделируем по чертежам за отдельную плату.',en:'If you have a full 3D assembly (STEP). Without it we model from drawings for a separate fee.'}},
      {t:{ru:'Сцены применения',en:'Application scenes'},d:{ru:'Батарея в стойке и на объекте клиента: ЦОД, подстанция, телеком. Пакет «B2B».',en:'The battery in a rack and on the client’s site: data centre, substation, telecom. The B2B package.'}},
      {t:{ru:'Ролик технологии',en:'Technology video'},d:{ru:'Показывает батарею и её применение. Для выставки и тендера. MP4 1080p, 60 с.',en:'Shows the battery and its use. For exhibitions and tenders. MP4 1080p, 60 s.'}},
      {t:{ru:'360° по наружной модели',en:'360° from an exterior model'},d:{ru:'Вращение на сайте. Не требует внутренних деталей.',en:'Rotation on the website. Does not need internal parts.'}},
      {t:{ru:'Подбор аккумулятора',en:'Battery selector'},d:{ru:'Виджет или бот: клиент и дилер вводят технику и нагрузку, получают модель. 2–3 недели.',en:'A widget or bot: the client and dealer enter equipment and load, and get a model. 2–3 weeks.'}}]},
  case:{
    compact:true,
    title:{ru:'Так выглядит результат',en:'This is what it looks like'},
    lead:{ru:'Условная батарея: разрез, общий вид и стойка. По вашим фото и сборке сделаем такие же кадры с вашими изделиями.',en:'A conditional battery: section, exterior and a rack. From your photos and assembly we make the same views with your products.'},
    frames:[
      {src:'assets/battery-cut.webp',cap:{ru:'Разрез батареи',en:'Battery section'}},
      {src:'assets/battery-full.webp',cap:{ru:'Общий вид',en:'Exterior'}},
      {src:'assets/battery-rack.webp',cap:{ru:'Батареи в стойке',en:'Batteries in a rack'}}]},
  steps:{
    title:{ru:'От исходников до первых кадров',en:'From sources to first views'},
    items:[
      {d:{ru:'День 0',en:'Day 0'},t:{ru:'Присылаете исходники',en:'You send sources'},p:{ru:'Фото и каталог новой линейки. Если есть, 3D-сборка в STEP. NDA подпишем, если нужно.',en:'Photos and the catalogue of the new line. A 3D assembly in STEP, if you have one. We sign an NDA if needed.'}},
      {d:{ru:'День 1',en:'Day 1'},t:{ru:'Проверяем исходник',en:'We check the source'},p:{ru:'Бесплатный пробный кадр делаем, только если исходник подходит: полная сборка со всеми деталями. Иначе скажем сразу.',en:'We make a free trial image only if the source suits: a full assembly with all parts. Otherwise we say so at once.'}},
      {d:{ru:'7–10 дней',en:'7–10 days'},t:{ru:'Каталог линейки',en:'Line catalogue'},p:{ru:'Ракурсы батареи в одном стиле. Два раунда правок.',en:'Battery views in one style. Two revision rounds.'}},
      {d:{ru:'3–4 недели',en:'3–4 weeks'},t:{ru:'B2B-пакет',en:'B2B package'},p:{ru:'Сцены ЦОД, подстанции, телекома и ролик на 60 секунд.',en:'Data centre, substation and telecom scenes and a 60-second video.'}}]},
  pricing:{
    title:{ru:'Три пакета',en:'Three packages'},
    note:{ru:'Цены «от», в долларах США. Оплата в USD. Сроки считаются от получения исходников.',en:'“From” prices, in US dollars. Payment in USD. Timelines count from receiving your source files.'},
    plans:[
      {t:{ru:'Подбор аккумулятора',en:'Battery selector'},price:{ru:'от 1 000 $',en:'from $1,000'},items:[{ru:'Виджет на сайт или бот',en:'A website widget or a bot'},{ru:'Техника и нагрузка → модель',en:'Equipment and load → model'},{ru:'2–3 недели',en:'2–3 weeks'}]},
      {t:{ru:'Каталог линейки',en:'Line catalogue'},price:{ru:'от 2 000 $',en:'from $2,000'},rec:true,items:[{ru:'6 ракурсов батареи по фото и каталогу',en:'6 battery views from photos and the catalogue'},{ru:'Разрез: если есть полная сборка (STEP)',en:'Section view: if a full assembly (STEP) exists'},{ru:'Под запуск новой линии · 7–10 дней',en:'Timed for the new line · 7–10 days'}]},
      {t:{ru:'B2B-пакет',en:'B2B package'},price:{ru:'от 4 000 $',en:'from $4,000'},items:[{ru:'Сцены: ЦОД, подстанция, телеком',en:'Scenes: data centre, substation, telecom'},{ru:'Ролик технологии 60 с',en:'A 60-second technology video'},{ru:'3–4 недели',en:'3–4 weeks'}]}]},
  more:{
    label:{ru:'Что мы делаем',en:'What we do'},
    title:{ru:'Что мы можем сделать для Кайнар-АКБ',en:'What we can do for Kainar-AKB'},
    lead:{ru:'MONOLITH — студия технической графики, софта и ИИ для промышленных продаж. Чем мы можем быть вам полезны:',en:'MONOLITH is a studio of technical graphics, software and AI for industrial sales. How we can be useful to you:'},
    items:[
      {i:'01',t:{ru:'Каталог линейки',en:'Line catalogue'},d:{ru:'Единый свет и ракурс на всю линейку батарей.',en:'One light and angle across the whole battery line.'}},
      {i:'02',t:{ru:'Разрез батареи',en:'Battery section'},d:{ru:'Устройство изнутри по полной 3D-сборке.',en:'The design inside from a full 3D assembly.'}},
      {i:'03',t:{ru:'Сцены применения',en:'Application scenes'},d:{ru:'Батарея в стойке и на объекте: ЦОД, подстанция, телеком.',en:'The battery in a rack and on site: data centre, substation, telecom.'}},
      {i:'04',t:{ru:'Ролик технологии',en:'Technology video'},d:{ru:'60 секунд о батарее и её применении для выставки и тендера.',en:'60 seconds about the battery and its use for exhibitions and tenders.'}},
      {i:'05',t:{ru:'3D и 360° на сайте',en:'3D and 360° on the site'},d:{ru:'Покупатель вращает батарею и смотрит разрез в браузере.',en:'The buyer rotates the battery and views the section in the browser.'}},
      {i:'06',t:{ru:'Подбор аккумулятора',en:'Battery selector'},d:{ru:'Клиент и дилер вводят технику и нагрузку, получают модель.',en:'The client and dealer enter equipment and load, and get a model.'},href:'../../cases/casecalculator.html'},
      {i:'07',t:{ru:'ИИ для заявок и техдокументации',en:'AI for requests and documentation'},d:{ru:'Заявки B2B-клиентов и документы по новой линейке.',en:'B2B client requests and documents for the new line.'}},
      {i:'08',t:{ru:'Выставочный пакет',en:'Exhibition package'},d:{ru:'Кадры и петли для экранов стенда, широкоформатные материалы.',en:'Views and loops for stand screens, wide-format materials.'}},
      {i:'09',t:{ru:'Каталог на нескольких языках',en:'A multilingual catalogue'},d:{ru:'Описания на русском, казахском и английском из ваших текстов.',en:'Descriptions in Russian, Kazakh and English from your texts.'}},
      {i:'10',t:{ru:'Аудит B2B-продаж',en:'B2B sales audit'},d:{ru:'Смотрим, где ИИ ускорит работу с заявками и КП.',en:'We look at where AI can speed up requests and quotes.'}}]},
  scope:{
    title:{ru:'Что зависит от нас, а что — от исходников',en:'What depends on us and what depends on the sources'},
    sure:[
      {ru:'Кадры снаружи по фото и каталогу в едином стиле',en:'Exterior views from photos and the catalogue in one style'},
      {ru:'Сцены применения: ЦОД, подстанция, телеком',en:'Application scenes: data centre, substation, telecom'},
      {ru:'360° по наружной модели, без внутренних деталей',en:'360° from an exterior model, without internal parts'}],
    extra:[
      {ru:'Полная 3D-сборка с внутренними деталями (STEP) → разрез и взрыв-схема',en:'A full 3D assembly with internal parts (STEP) → section and exploded view'},
      {ru:'Нет сборки → моделирование по чертежам за отдельную плату',en:'No assembly → modelling from drawings for a separate fee'},
      {ru:'Пробный кадр бесплатный, только если исходник подходит; решаем на первый день',en:'The trial image is free only if the source suits; decided on day one'}]},
  principles:{
    title:{ru:'Условия',en:'Terms'},
    items:[
      {t:{ru:'Геометрия из вашей модели',en:'Geometry from your model'},d:{ru:'Ничего не дорисовываем «для красоты».',en:'Nothing is redrawn “for looks”.'}},
      {t:{ru:'Сроки — от исходников',en:'Timing starts with the sources'},d:{ru:'Считаем от получения подходящих файлов. Подходят ли они, говорим в первый день.',en:'We count from receiving suitable files, and say on day one whether they suit.'}},
      {t:{ru:'Два раунда правок на этап',en:'Two edit rounds per stage'},d:{ru:'Заранее понятно, сколько правок входит в цену.',en:'It is clear in advance how many edits the price includes.'}},
      {t:{ru:'Права у вас, NDA до данных',en:'You own the files, NDA first'},d:{ru:'Файлы остаются у вас. Публикуем только с вашего согласия.',en:'Files stay with you. We publish only with your consent.'}}]},
  about:{
    title:{ru:'MONOLITH — техническая графика и софт для промышленных продаж',en:'MONOLITH — technical graphics and software for industrial sales'},
    paras:[
      {ru:'Небольшая студия: между вами и тем, кто делает работу, нет прослоек. Работаем с данными, которые у вас уже есть.',en:'A small studio: there are no layers between you and the person doing the work. We work from data you already have.'},
      {ru:'Пока показываем демонстрационные кейсы на условных моделях, поэтому первую работу для вас начинаем с проверки исходника.',en:'For now we show demonstration cases on conditional models, which is why your first work starts with a source check.'}]},
  cta:{
    title:{ru:'Пришлите фото линейки и, если есть, STEP.',en:'Send photos of the line and, if you have it, a STEP file.'},
    lead:{ru:'Заполните короткий бриф — вернём пробный кадр. Если исходник не подойдёт, напишем, что необходимо.',en:'Fill in a short brief and we will return a trial image. If the source does not suit, we will write what is needed.'},
    btn:{ru:'Заполнить бриф',en:'Fill in the brief'},
    or:{ru:'или напишите нам на почту:',en:'or write to us by email:'},mail:'mail@monolith.contact'}
};
