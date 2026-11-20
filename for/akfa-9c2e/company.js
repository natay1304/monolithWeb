/* Контент презентации для AKFA Group. Факты о компании: Window + Door (спонсорская статья об AKFA Group, 21.04.2025), Wikipedia (AKFA Group, Кентукки), Dunyo.info (ALUMINIUM 2026, 13.10.2026). Цены: Продажи/Пакеты услуг/Пакет услуг — AKFA Group.md. */
window.COMPANY={
  slug:'akfa',
  style:'editorial',
  name:{ru:'AKFA Group',en:'AKFA Group'},
  title:{ru:'Предложение для AKFA Group — MONOLITH',en:'A proposal for AKFA Group — MONOLITH'},
  /* цвета AKFA с akfaaluminium.com: красный #E54B4B; для текста на светлом затемнён до #C73636 (контраст с фоном #E6E2DC 5.8) */
  theme:{accent:'#C73636',accentL:'#F26B6B',onAccent:'#FFFFFF',dark:'#1C1C1C',dark2:'#262626',lineDark:'#3A3A3A',bg:'#E6E2DC',bg2:'#DCD7D0',line:'#C4BDB4',fg:'#1C1C1C',muted:'#55504A'},
  ui:{ru:{sticky:'Получить тестовый кадр'},en:{sticky:'Get a test view'}},
  contact:{brief:'https://monolith.contact/#/brief?src=akfa',stickyTo:'contact',site:'https://monolith.contact'},
  noDate:true,noFooterNote:true,
  model:{
    full:'../_shared/assets/models/valve-full.glb',section:'../_shared/assets/models/valve-section.glb',
    posterFull:'../_shared/assets/img/ball-valve-full.webp',posterSection:'../_shared/assets/img/ball-valve-section.webp'},
  blocks:['hero','case','more','why','deliver','visual','steps','pricing','scope','principles','about','cta'],
  nav:[{id:'why',t:{ru:'Задача',en:'The task'}},{id:'deliver',t:{ru:'Результат',en:'Deliverables'}},{id:'visual',t:{ru:'Разрез',en:'Section'}},{id:'pricing',t:{ru:'Цены',en:'Pricing'}}],
  hero:{
    viewer:false,
    eyebrow:{ru:'Предложение для AKFA Group',en:'A proposal for AKFA Group'},
    h1:{ru:'Сделаем каталог AKFA для США и новых рынков — без съёмок',en:'We will make an AKFA catalogue for the US and new markets — no photoshoots'},
    lead:{ru:'Мы — MONOLITH, студия технической графики. Из сечений и текстов вашего каталога делаем разрезы систем, сцены под местную архитектуру и описания на языках рынка. Первый кадр по вашему сечению — бесплатно.',
          en:'We are MONOLITH, a technical graphics studio. From the sections and texts of your catalogue we make system cut-aways, scenes in local architecture and descriptions in the market’s language. The first view from your section is free.'},
    cta:{ru:'Получить тестовый кадр',en:'Get a test view'},ctaTo:'contact',
    cta2:{ru:'Посмотреть разрез',en:'See the section'},cta2to:'visual',
    offer:[
      {t:{ru:'Разрез системы',en:'System section'},d:{ru:'По сечению из каталога (DWG или PDF)',en:'From the catalogue section (DWG or PDF)'}},
      {t:{ru:'Сцены под рынок',en:'Market scenes'},d:{ru:'Окна и фасады в местной архитектуре',en:'Windows and façades in local architecture'}},
      {t:{ru:'Описания на языках',en:'Multilingual copy'},d:{ru:'Из ваших текстов и спецификаций',en:'From your texts and specifications'}},
      {t:{ru:'Конфигуратор',en:'Configurator'},d:{ru:'Дилер считает окно сам',en:'Dealers price a window themselves'}}]},
  facts:[
    {n:'30+',label:{ru:'стран экспорта, среди ключевых рынков США, Канада и ряд стран ЕС',en:'export countries, with key markets including the US, Canada and several EU states'},src:{ru:'Window + Door, 21.04.2025',en:'Window + Door, 21 Apr 2025'},url:'https://www.windowanddoor.com/article/akfa-group-industrial-scale-international-reach'},
    {n:'3',label:{ru:'производственные площадки группы описаны в обзоре: AKFA Plast, IMZO, BENKAM',en:'group production sites described in the review: AKFA Plast, IMZO, BENKAM'},src:{ru:'Window + Door, 21.04.2025',en:'Window + Door, 21 Apr 2025'},url:'https://www.windowanddoor.com/article/akfa-group-industrial-scale-international-reach'},
    {n:'2026',count:2026,label:{ru:'в мае AKFA Aluminum объявила о начале строительства завода в Боулинг-Грин, Кентукки (США)',en:'in May AKFA Aluminum announced the start of construction of a plant in Bowling Green, Kentucky (USA)'},src:{ru:'Wikipedia, AKFA Group (май 2026)',en:'Wikipedia, AKFA Group (May 2026)'},url:'https://en.wikipedia.org/wiki/AKFA_Group'}],
  why:{
    title:{ru:'Каждому рынку — материалы на его языке',en:'Every market needs materials in its own language'},
    paras:[
      {ru:'AKFA строит завод в США, и американский покупатель ждёт материалов уровня местных брендов: язык, имперские единицы, привычная архитектура. Для каждого следующего рынка набор свой.',
       en:'AKFA is building a plant in the US, and American buyers expect materials at the level of local brands: language, imperial units, familiar architecture. Every next market needs its own set.'},
      {ru:'Вручную каталог собирается заново под каждую страну. Из данных — обновление рынка становится проверкой, а не новым проектом.',
       en:'By hand, the catalogue is rebuilt for every country. Built from data, updating a market becomes a review, not a new project.'}],
    note:{ru:'Мы не видели ваших внутренних материалов: выводы сделаны по открытым источникам и проверяются на созвоне. Источники:',en:'We have not seen your internal materials: conclusions are based on public sources and will be checked on a call. Sources:'},
    links:[{t:{ru:'AKFA: рынки экспорта',en:'AKFA: export markets'},url:'https://akfaaluminium.com/eng/global_presence'},{t:{ru:'AKFA: профильные системы',en:'AKFA: profile systems'},url:'https://akfaaluminium.com/eng/akfa_extrusions'},{t:{ru:'Kentucky: начало работ на заводе',en:'Kentucky: construction start at the plant'},url:'https://newkentuckyhome.ky.gov/Newsroom/NewsPage/20260507_AKFAGB'},{t:{ru:'Dunyo.info: ALUMINIUM 2026',en:'Dunyo.info: ALUMINIUM 2026'},url:'https://dunyo.info/ru/Eksport/na-mezhdunarodnoy-vystavke-v-germanii-predstavlena-alyuminievaya'}],
    tasks:[
      {ru:'Каждому рынку нужен свой каталог: язык, архитектура, примеры применения',en:'Each market needs its own catalogue: language, architecture, use cases'},
      {ru:'Описания на нескольких языках расходятся между версиями',en:'Descriptions in several languages drift apart between versions'},
      {ru:'Дилеры считают окна вручную и пишут менеджерам одни и те же вопросы',en:'Dealers price windows by hand and send managers the same questions'}]},
  deliver:{
    title:{ru:'Пять частей каталога для нового рынка',en:'Five parts of a catalogue for a new market'},
    items:[
      {t:{ru:'Разрез системы',en:'System section'},d:{ru:'Профиль по сечению из каталога: камеры, армирование, уплотнители. Строится по данным, а не рисуется поверх.',en:'The profile from the catalogue section: chambers, reinforcement, seals. Built from data, not drawn on top.'}},
      {t:{ru:'Сцены под рынок',en:'Market scenes'},d:{ru:'Одна и та же система в архитектуре разных стран: шесть сцен в пилоте.',en:'The same system in the architecture of different countries: six scenes in the pilot.'}},
      {t:{ru:'Описания на языках',en:'Multilingual copy'},d:{ru:'Из ваших текстов и спецификаций, до 50 описаний на двух языках в пилоте.',en:'From your texts and specifications, up to 50 descriptions in two languages in the pilot.'}},
      {t:{ru:'Видео о производстве',en:'Production video'},d:{ru:'Ролик о производстве и контроле качества для пакета выхода в США. Нужен доступ к заводу.',en:'A video on production and quality control for the US entry package. Needs plant access.'}},
      {t:{ru:'Выставочный пакет',en:'Exhibition package'},d:{ru:'Кадры и петли для экранов на стенде, широкоформатные материалы.',en:'Views and loops for stand screens, wide-format materials.'}}]},
  /* схема условного профиля: 1 ед. = 0,2 мм, ширина 350 = 70 мм */
  visual:{
    title:{ru:'Так выглядит разрез профиля',en:'This is what a profile section looks like'},
    lead:{ru:'Схема на условном профиле 70 мм. По сечению вашей системы из каталога сделаем такой же разрез в фотореалистичном рендере: в каталог, на сайт, на экран стенда.',
          en:'A diagram of a conditional 70 mm profile. From your system’s catalogue section we make the same cut as a photorealistic render: for the catalogue, the website and stand screens.'},
    alt:{ru:'Схема разреза условного многокамерного ПВХ-профиля',en:'Section diagram of a conditional multi-chamber PVC profile'},
    cap:{ru:'Схема на условной модели · это не профиль AKFA',en:'Diagram on a conditional model · this is not an AKFA profile'},
    svg:{box:'0 0 900 480',mbox:'100 16 486 464',
      outer:'M120,140 H170 V80 H470 V400 H120 Z',
      inner:['M134,154 h40 v232 h-40 Z','M188,94 h52 v292 h-52 Z','M254,94 h100 v292 h-100 Z','M368,94 h40 v136 h-40 Z','M368,244 h40 v142 h-40 Z','M422,94 h34 v292 h-34 Z'],
      steel:'M266,108 V372 H342 V108',
      seals:['M152,140 c0,-14 18,-14 18,-2 v2 Z','M448,80 c0,-16 22,-16 22,-2 v2 Z'],
      dims:'<line x1="120" y1="440" x2="470" y2="440"/><line x1="120" y1="430" x2="120" y2="450"/><line x1="470" y1="430" x2="470" y2="450"/><text x="295" y="468" text-anchor="middle" stroke="none">70</text>'},
    callouts:[
      {d:'M152,110 V36 H547',end:[560,36],t:{ru:'Фальц под стеклопакет',en:'Glazing rebate'}},
      {d:'M459,70 L500,104 H547',end:[560,104],t:{ru:'Уплотнитель EPDM',en:'EPDM seal'}},
      {d:'M342,180 L500,172 H547',end:[560,172],t:{ru:'Стальное армирование',en:'Steel reinforcement'}},
      {d:'M439,300 L500,240 H547',end:[560,240],t:{ru:'Воздушные камеры',en:'Air chambers'}},
      {d:'M127,360 V412 H547',end:[560,412],t:{ru:'Плоскость среза',en:'Cutting plane'}}]},
  case:{
    compact:true,noDemo:true,
    title:{ru:'Мини-кейс: разрез оконного профиля',en:'Mini case: a window profile section'},
    lead:{ru:'Условный многокамерный ПВХ-профиль 70 мм: камеры, стальное армирование и уплотнители в одном кадре. Для вашей системы строим такой же разрез по сечению из каталога.',en:'A conditional 70 mm multi-chamber PVC profile: chambers, steel reinforcement and gaskets in one view. For your system we build the same section from the catalogue drawing.'},
    frames:[
      {src:'assets/profile-section.webp',cap:{ru:'Разрез: камеры, армирование, уплотнители',en:'Section: chambers, reinforcement, gaskets'}},
      {src:'assets/profile-full.webp',cap:{ru:'Профиль целиком: зона остекления и уплотнитель',en:'The whole profile: glazing zone and gasket'}}]},
  steps:{
    title:{ru:'От сечения до первых кадров за неделю',en:'From a section to first views within a week'},
    items:[
      {d:{ru:'День 0',en:'Day 0'},t:{ru:'Присылаете сечение',en:'You send a section'},p:{ru:'Одна система: DWG, PDF или STEP. NDA подпишем до передачи данных.',en:'One system: DWG, PDF or STEP. We sign an NDA before any data is shared.'}},
      {d:{ru:'День 1',en:'Day 1'},t:{ru:'Проверяем исходник',en:'We check the source'},p:{ru:'Говорим сразу, подходит ли файл для бесплатного кадра.',en:'We tell you at once whether the file suits a free view.'}},
      {d:{ru:'До 7 дней',en:'Up to 7 days'},t:{ru:'Тестовый кадр',en:'Test view'},p:{ru:'Разрез вашей системы. Срок считаем от получения подходящего файла.',en:'A section of your system. Timing counts from receiving a suitable file.'}},
      {d:{ru:'Созвон 30 минут',en:'30-minute call'},t:{ru:'Выбираем пакет',en:'We choose a package'},p:{ru:'Какой рынок, сколько систем, какие языки и где публикуем.',en:'Which market, how many systems, which languages and where to publish.'}}]},
  pricing:{
    title:{ru:'Пилот: одна система для одного рынка',en:'Pilot: one system for one market'},
    lead:{ru:'Сначала присылаете сечение и получаете бесплатный тестовый кадр, затем запускаем пилот.',en:'First you send a section and get a free test view, then we start the pilot.'},
    note:{ru:'«От» — потому что итог зависит от числа систем и языков. Сроки считаются от получения исходников. Оплата в $, предоплата 50%.',en:'“From” because the total depends on the number of systems and languages. Timing counts from receiving the source files. Payment in USD, 50% prepayment.'},
    plans:[
      {t:{ru:'Пилот одной системы',en:'One-system pilot'},price:{ru:'от 4 200 $',en:'from $4,200'},rec:true,items:[{ru:'Техграфика одной системы: разрез, взрыв-схема',en:'Technical graphics for one system: section, exploded view'},{ru:'6 сцен под архитектуру рынка',en:'6 scenes in the market’s architecture'},{ru:'50 описаний на 2 языках',en:'50 descriptions in 2 languages'},{ru:'Срок: 3 недели от получения сечений и текстов',en:'Timing: 3 weeks from receiving sections and texts'},{ru:'Два раунда правок на этап',en:'Two edit rounds per stage'}]}]},
  scope:{
    title:{ru:'Что зависит от нас, а что — от исходников',en:'What depends on us and what depends on the sources'},
    sure:[
      {ru:'Разрезы по сечениям из каталога (DWG или PDF)',en:'Sections from catalogue drawings (DWG or PDF)'},
      {ru:'Сцены применения под архитектуру рынка',en:'Application scenes for the market’s architecture'},
      {ru:'Описания на языках из ваших текстов и спецификаций',en:'Multilingual copy from your texts and specifications'}],
    extra:[
      {ru:'3D-сборка изделия → взрыв-схема и 360°',en:'A 3D assembly → exploded view and 360°'},
      {ru:'База продукции → описания обновляются сами',en:'A product database → descriptions update themselves'},
      {ru:'Прайс и правила расчёта → конфигуратор для дилеров',en:'Price list and rules → a dealer configurator'}]},
  principles:{
    title:{ru:'Условия',en:'Terms'},
    items:[
      {t:{ru:'Данные из вашего каталога',en:'Data from your catalogue'},d:{ru:'Разрезы по сечениям, описания из ваших текстов. Ничего не подмоделируем «для красоты».',en:'Sections from your drawings, descriptions from your texts. Nothing is remodelled “for looks”.'}},
      {t:{ru:'Сроки — от исходников',en:'Timing starts with the sources'},d:{ru:'Считаем от получения подходящих файлов. Подходят ли они, говорим в первый день.',en:'We count from receiving suitable files, and say on day one whether they suit.'}},
      {t:{ru:'Два раунда правок на этап',en:'Two edit rounds per stage'},d:{ru:'Заранее понятно, сколько правок входит в цену.',en:'It is clear in advance how many edits the price includes.'}},
      {t:{ru:'Права у вас, NDA до данных',en:'You own the files, NDA first'},d:{ru:'Файлы и права остаются у вас. Публикуем только с вашего согласия.',en:'Files and rights stay with you. We publish only with your consent.'}}]},
  more:{
    label:{ru:'Что мы делаем',en:'What we do'},
    title:{ru:'Что мы можем сделать для AKFA',en:'What we can do for AKFA'},
    lead:{ru:'MONOLITH — студия технической графики, софта и ИИ для промышленных продаж. Чем ещё мы можем быть вам полезны:',en:'MONOLITH is a studio of technical graphics, software and AI for industrial sales. How we can be useful to you:'},
    items:[
      {i:'01',t:{ru:'Взрыв-схемы и монтажные узлы',en:'Exploded views and installation details'},d:{ru:'Как собирается окно и как профиль примыкает к стене: схемы для дилеров, монтажников и инструкций. Строятся из 3D-сборки или сечений.',en:'How a window is assembled and how the profile meets the wall: diagrams for dealers, installers and manuals. Built from a 3D assembly or sections.'}},
      {i:'02',t:{ru:'Фасады и объекты до постройки',en:'Façades and projects before they are built'},d:{ru:'Визуализация остекления и фасадов для тендеров и презентаций заказчикам: объект виден до того, как он построен.',en:'Visualisation of glazing and façades for tenders and client presentations: the project is visible before it is built.'}},
      {i:'03',t:{ru:'Видео и 360°',en:'Video and 360°'},d:{ru:'Ролик о производстве и контроле качества, вращение профиля на 360° для сайта и соцсетей.',en:'A video on production and quality control, a 360° turntable of a profile for the website and social media.'}},
      {i:'04',t:{ru:'Выставочный пакет',en:'Exhibition package'},d:{ru:'Кадры, петли для экранов и широкоформатные материалы для стенда, например на ALUMINIUM в Дюссельдорфе.',en:'Views, screen loops and wide-format materials for a stand, for example at ALUMINIUM in Düsseldorf.'}},
      {i:'05',t:{ru:'3D и AR на странице товара',en:'3D and AR on the product page'},d:{ru:'Клиент вращает профиль или окно прямо на сайте, а в AR примеряет его к своему проёму.',en:'The customer rotates a profile or window right on the site, and in AR tries it against their own opening.'}},
      {i:'06',t:{ru:'Конфигуратор для дилеров',en:'Dealer configurator'},d:{ru:'Прайс и правила превращаются в расчёт: дилер вводит размеры и видит состав и ориентир цены.',en:'Price and rules become a calculation: the dealer enters sizes and sees the specification and a price estimate.'},href:'../../cases/casecalculator.html'},
      {i:'07',t:{ru:'Каталог на нескольких языках',en:'A multilingual catalogue'},d:{ru:'Описания на EN, AR, RU и UZ из базы продукции обновляются сами и не расходятся между версиями.',en:'Descriptions in EN, AR, RU and UZ come from the product database, update themselves and do not drift apart between versions.'}},
      {i:'08',t:{ru:'Лендинги и материалы для каналов',en:'Landing pages and channel materials'},d:{ru:'Страница под рынок или кампанию, пакеты для соцсетей и дилерских рассылок в одном стиле.',en:'A page for a market or campaign, packages for social media and dealer mailings in one style.'}},
      {i:'09',t:{ru:'Аудит сайтов и инструментов',en:'Audit of sites and tools'},d:{ru:'Что в сайтах стран и дилерских инструментах можно обновить без остановки работы.',en:'What in your country sites and dealer tools can be updated without stopping work.'}},
      {i:'10',t:{ru:'Внутренние инструменты и боты',en:'Internal tools and bots'},d:{ru:'Админ-панели, отчёты, Telegram-боты и Mini Apps: например, приём заявок от дилеров.',en:'Admin panels, reports, Telegram bots and Mini Apps: for example, taking dealer requests.'}}]},
  about:{
    title:{ru:'MONOLITH — студия технической графики, софта и ИИ для промышленных продаж',en:'MONOLITH — a studio of technical graphics, software and AI for industrial sales'},
    paras:[
      {ru:'Из чертежей и данных клиента делаем визуал: разрезы систем, сцены применения, ролики, каталоги на нескольких языках, 3D и AR на сайте, калькуляторы для дилеров и внутренние инструменты, без дополнительных съёмок.',
       en:'From a client’s drawings and data we make visuals: system cut-aways, application scenes, videos, multilingual catalogues, 3D and AR on the site, dealer calculators and internal tools, with no extra shooting.'},
      {ru:'Проект ведёт и отвечает за результат Анастасия Малютина: 8+ лет в IT, 7+ лет коммерческой разработки. 3D-графика, код и ИИ у нас в одной команде, поэтому каталог, конфигуратор и сайт получаются в одном стиле, без передачи между подрядчиками. В команде также 2D- и 3D-художники, веб-разработчики.',
       en:'The project is led, and its result owned, by Anastasia Malutina: 8+ years in IT, 7+ years of commercial development. 3D graphics, code and AI sit in one team, so the catalogue, configurator and site come out in one style, with no handoffs between contractors. The team also includes 2D and 3D artists and web developers.'},
      {ru:'Работаем по NDA, исходники остаются у вас. Пока мы показываем демонстрационные кейсы, поэтому первый кадр делаем бесплатно по вашему сечению.',
       en:'We work under an NDA and your source files stay with you. For now we show demonstration cases, which is why we make the first view free, from your section.'}]},
  cta:{
    title:{ru:'Пришлите сечение одной системы.',en:'Send a section of one system.'},
    lead:{ru:'Заполните короткий бриф — вернём тестовый кадр. Если исходник не подойдёт, напишем, что необходимо.',en:'Fill in a short brief and we will return a test view. If the source does not suit, we will write what is needed.'},
    btn:{ru:'Заполнить бриф',en:'Fill in the brief'},
    or:{ru:'или напишите нам на почту:',en:'or write to us by email:'},mail:'mail@monolith.contact'}
};
