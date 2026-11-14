/* Контент презентации для AKFA Group. Факты о компании: Window + Door (статья об AKFA Group), Wikipedia (AKFA Group), Dunyo.info (ALUMINIUM 2026). Цены: Продажи/Пакеты услуг/Пакет услуг — AKFA Group.md. */
window.COMPANY={
  slug:'akfa',
  style:'editorial',
  name:{ru:'AKFA Group',en:'AKFA Group'},
  title:{ru:'Предложение для AKFA Group — MONOLITH',en:'A proposal for AKFA Group — MONOLITH'},
  /* цвета AKFA с akfaaluminium.com: красный #E54B4B; для текста на светлом затемнён до #C73636 (контраст с фоном #E6E2DC 5.8) */
  theme:{accent:'#C73636',accentL:'#F26B6B',onAccent:'#FFFFFF',dark:'#1C1C1C',dark2:'#262626',lineDark:'#3A3A3A',bg:'#E6E2DC',bg2:'#DCD7D0',line:'#C4BDB4',fg:'#1C1C1C',muted:'#55504A'},
  ui:{ru:{sticky:'Получить тестовый кадр'},en:{sticky:'Get a test view'}},
  contact:{brief:'https://monolith.contact/#/brief?src=akfa'},
  model:{
    full:'../_shared/assets/models/valve-full.glb',section:'../_shared/assets/models/valve-section.glb',
    posterFull:'../_shared/assets/img/ball-valve-full.webp',posterSection:'../_shared/assets/img/ball-valve-section.webp'},
  blocks:['hero','facts','why','deliver','visual','steps','pricing','scope','case','principles','more','about','cta'],
  nav:[{id:'why',t:{ru:'Задача',en:'The task'}},{id:'deliver',t:{ru:'Результат',en:'Deliverables'}},{id:'visual',t:{ru:'Разрез',en:'Section'}},{id:'pricing',t:{ru:'Цены',en:'Pricing'}}],
  hero:{
    viewer:false,
    h1:{ru:'Новый рынок — без новой съёмки.',en:'A new market without a new photoshoot.'},
    lead:{ru:'Разрезы систем, сцены под местную архитектуру и описания на языках рынка. Всё собирается из данных вашего каталога: сечений, спецификаций и текстов. Ничего не придумывается.',
          en:'System section views, scenes for local architecture and descriptions in the market’s language. Everything is built from your catalogue data: sections, specifications and texts. Nothing is invented.'},
    cta:{ru:'Получить тестовый кадр',en:'Get a test view'},
    cta2:{ru:'Посмотреть разрез',en:'See the section'},cta2to:'visual',
    offer:[
      {t:{ru:'Разрез системы',en:'System section'},d:{ru:'По сечению из каталога (DWG или PDF)',en:'From the catalogue section (DWG or PDF)'}},
      {t:{ru:'Сцены под рынок',en:'Market scenes'},d:{ru:'Окна и фасады в местной архитектуре',en:'Windows and façades in local architecture'}},
      {t:{ru:'Описания на языках',en:'Multilingual copy'},d:{ru:'Из ваших текстов и спецификаций',en:'From your texts and specifications'}},
      {t:{ru:'Конфигуратор',en:'Configurator'},d:{ru:'Дилер считает окно сам',en:'Dealers price a window themselves'}}]},
  facts:[
    {n:'30+',label:{ru:'стран экспорта, среди ключевых рынков США, Канада и ряд стран ЕС',en:'export countries, with key markets including the US, Canada and several EU states'},src:{ru:'Window + Door, 21.04.2025',en:'Window + Door, 21 Apr 2025'}},
    {n:'3+',label:{ru:'завода группы, среди них AKFA Plast, IMZO, BENKAM',en:'group plants, among them AKFA Plast, IMZO, BENKAM'},src:{ru:'Window + Door, 21.04.2025',en:'Window + Door, 21 Apr 2025'}},
    {n:'2026',count:2026,label:{ru:'объявлен завод AKFA Aluminum в Кентукки (США) и стенд на ALUMINIUM в Дюссельдорфе',en:'the AKFA Aluminum plant in Kentucky (USA) was announced, plus a stand at ALUMINIUM in Düsseldorf'},src:{ru:'Wikipedia, AKFA Group (май 2026); Dunyo.info, 13.10.2026',en:'Wikipedia, AKFA Group (May 2026); Dunyo.info, 13 Oct 2026'}}],
  why:{
    title:{ru:'Каждому рынку — материалы на его языке',en:'Every market needs materials in its own language'},
    paras:[
      {ru:'AKFA строит завод в США, и американский покупатель ждёт материалов уровня местных брендов: язык, имперские единицы, привычная архитектура. Для каждого следующего рынка набор свой.',
       en:'AKFA is building a plant in the US, and American buyers expect materials at the level of local brands: language, imperial units, familiar architecture. Every next market needs its own set.'},
      {ru:'Вручную каталог собирается заново под каждую страну. Из данных — обновление рынка становится проверкой, а не новым проектом.',
       en:'By hand, the catalogue is rebuilt for every country. Built from data, updating a market becomes a review, not a new project.'}],
    note:{ru:'Мы не видели ваших внутренних материалов: выводы сделаны по открытым источникам и проверяются на созвоне.',en:'We have not seen your internal materials: conclusions are based on public sources and will be checked on a call.'},
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
    compact:true,
    title:{ru:'Тот же метод — на другом изделии',en:'The same method on another product'},
    lead:{ru:'Готовый кейс: условный шаровой кран, разрез из геометрии модели. Для профилей используем сечение из каталога или 3D-сборку, если она есть.',en:'A finished case: a conditional ball valve, cut from the model geometry. For profiles we use the catalogue section, or a 3D assembly if you have one.'},
    href:'../../cases/caseballvalve.html',
    frames:[
      {src:'../_shared/assets/img/ball-valve-section.webp',cap:{ru:'Разрез 3/4: все узлы в одном кадре',en:'Three-quarter section: all parts in one view'}},
      {src:'../_shared/assets/img/ball-valve-section-side.webp',cap:{ru:'Профиль: проход, камера, фланцы',en:'Profile: bore, chamber, flanges'}},
      {src:'../_shared/assets/img/ball-valve-section-ball.webp',cap:{ru:'Крупно: шар и седла',en:'Close-up: ball and seats'}},
      {src:'../_shared/assets/img/ball-valve-section-stem.webp',cap:{ru:'Крупно: шпиндель и горловина',en:'Close-up: stem and neck'}}]},
  steps:{
    title:{ru:'От сечения до первых кадров за неделю',en:'From a section to first views within a week'},
    items:[
      {d:{ru:'День 0',en:'Day 0'},t:{ru:'Присылаете сечение',en:'You send a section'},p:{ru:'Одна система: DWG, PDF или STEP. NDA подпишем до передачи данных.',en:'One system: DWG, PDF or STEP. We sign an NDA before any data is shared.'}},
      {d:{ru:'День 1',en:'Day 1'},t:{ru:'Проверяем исходник',en:'We check the source'},p:{ru:'Говорим сразу, подходит ли файл для бесплатного кадра.',en:'We tell you at once whether the file suits a free view.'}},
      {d:{ru:'До 7 дней',en:'Up to 7 days'},t:{ru:'Тестовый кадр',en:'Test view'},p:{ru:'Разрез вашей системы. Срок считаем от получения подходящего файла.',en:'A section of your system. Timing counts from receiving a suitable file.'}},
      {d:{ru:'Созвон 30 минут',en:'30-minute call'},t:{ru:'Выбираем пакет',en:'We choose a package'},p:{ru:'Какой рынок, сколько систем, какие языки и где публикуем.',en:'Which market, how many systems, which languages and where to publish.'}}]},
  pricing:{
    title:{ru:'Начинаем с тестового кадра',en:'We start with a test view'},
    note:{ru:'Стартовые условия для первых проектов, цена фиксируется в предложении до начала работы. Сроки считаются от получения исходников. Оплата в $ на счёт ИП в Грузии, предоплата 50%.',en:'Launch terms for our first projects; the price is fixed in the proposal before work starts. Timing counts from receiving the source files. Payment in USD to a sole proprietor account in Georgia, 50% prepayment.'},
    plans:[
      {t:{ru:'Проба',en:'Trial'},price:{ru:'0 $',en:'$0'},items:[{ru:'1 тестовый кадр по присланному сечению',en:'1 test view from a section you send'},{ru:'Если исходник не подходит, скажем в первый день',en:'If the source does not suit, we say so on day one'}]},
      {t:{ru:'Пилот одного рынка',en:'One-market pilot'},price:{ru:'от 4 200 $',en:'from $4,200'},rec:true,items:[{ru:'Техграфика одной системы: разрез, взрыв-схема',en:'Technical graphics for one system: section, exploded view'},{ru:'6 сцен рынка и 50 описаний на 2 языках',en:'6 market scenes and 50 descriptions in 2 languages'},{ru:'3 недели от получения сечений и текстов',en:'3 weeks from receiving sections and texts'}]},
      {t:{ru:'Выход в США',en:'US entry'},price:{ru:'от 10 000 $',en:'from $10,000'},items:[{ru:'Каталог систем для США, EN и имперские единицы',en:'A US systems catalogue, EN and imperial units'},{ru:'Видео о производстве, выставочный пакет',en:'Production video, exhibition package'},{ru:'1–2 месяца',en:'1–2 months'}]},
      {t:{ru:'Система каталога',en:'Catalogue system'},price:{ru:'от 6 000 $',en:'from $6,000'},items:[{ru:'Конвейер описаний на EN, AR, RU, UZ',en:'A description pipeline in EN, AR, RU, UZ'},{ru:'Конфигуратор окна для дилеров',en:'A window configurator for dealers'},{ru:'Поддержка от 5 000 $ в месяц',en:'Support from $5,000 a month'}]}]},
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
    title:{ru:'Кроме визуала: софт, процессы, консалтинг',en:'Beyond visuals: software, processes, consulting'},
    items:[
      {i:'01',t:{ru:'Конфигуратор для дилеров',en:'Dealer configurator'},d:{ru:'Прайс и правила превращаются в расчёт: дилер вводит размеры и видит состав и ориентир цены.',en:'Price and rules become a calculation: the dealer enters sizes and sees the specification and a price estimate.'},href:'../../cases/casecalculator.html'},
      {i:'02',t:{ru:'Аудит сайтов и инструментов',en:'Audit of sites and tools'},d:{ru:'Что в сайтах стран и дилерских инструментах можно обновить без остановки работы. От 600 $.',en:'What in your country sites and dealer tools can be updated without stopping work. From $600.'}},
      {i:'03',t:{ru:'КП и переводы с ИИ',en:'Quotes and translations with AI'},d:{ru:'Черновик делают агенты, сотрудник проверяет. Пилот на одном процессе от 1 500 $, 2 недели, фиксированная цена.',en:'Agents prepare a draft, an employee reviews it. A single-process pilot from $1,500, 2 weeks, fixed price.'}}]},
  about:{
    title:{ru:'MONOLITH — техническая графика и софт для промышленных продаж',en:'MONOLITH — technical graphics and software for industrial sales'},
    paras:[
      {ru:'Небольшая студия: между вами и тем, кто делает работу, нет прослоек. Работаем с данными, которые у вас уже есть, и не просим ничего снимать.',
       en:'A small studio: there are no layers between you and the person doing the work. We work from data you already have and do not ask you to shoot anything.'},
      {ru:'Пока показываем демонстрационные кейсы на условных моделях, поэтому первую работу для вас начинаем с бесплатного тестового кадра.',
       en:'For now we show demonstration cases on conditional models, which is why your first work starts with a free test view.'}]},
  cta:{
    title:{ru:'Пришлите сечение одной системы.',en:'Send a section of one system.'},
    lead:{ru:'Вернём тестовый кадр. Если исходник не подойдёт, скажем об этом в первый день. Дальше решите сами.',en:'We will return a test view. If the source does not suit, we say so on day one. You decide what comes next.'},
    btn:{ru:'Отправить сечение или написать',en:'Send a section or write to us'}}
};
