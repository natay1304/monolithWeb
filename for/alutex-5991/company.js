/* Контент КП для ALUTEX (движок deck, стиль editorial). Пакеты и цены: Obsidian, «Пакет услуг — ALUTEX.md».
   Факты: alutex.uz (просмотр 30.10.2026). Ассеты: assets/facade-day.webp, facade-evening.webp, mullion-section.webp. */
window.COMPANY={
  slug:'alutex',
  style:'editorial',
  name:{ru:'ALUTEX',en:'ALUTEX'},
  title:{ru:'Предложение для ALUTEX — MONOLITH',en:'A proposal for ALUTEX — MONOLITH'},
  /* графит и небесно-голубой; акцент #1C74B0 (белый текст 5.0), светлая версия для тёмных блоков */
  theme:{accent:'#1C74B0',accentL:'#7CC4F0',onAccent:'#FFFFFF',dark:'#22272B',dark2:'#2C3237',lineDark:'#41484E',bg:'#E3E6E8',bg2:'#D7DBDE',line:'#B4BABF',fg:'#1D2226',muted:'#4C555B',
         fHead:"'Jost',system-ui,sans-serif"},
  ui:{ru:{sticky:'Прислать чертёж объекта',demo:'Демонстрация на условном объекте, не объект ALUTEX.',case:'Кадр'},
      en:{sticky:'Send an object drawing',demo:'Demonstration on a conditional building, not an ALUTEX project.',case:'View'}},
  contact:{brief:'https://monolith.contact/#/brief?src=alutex',stickyTo:'contact',site:'https://monolith.contact'},
  noDate:true,noFooterNote:true,
  model:{},
  blocks:['hero','more','facts','why','deliver','case','visual','steps','pricing','scope','principles','about','cta'],
  nav:[{id:'why',t:{ru:'Задача',en:'The task'}},{id:'deliver',t:{ru:'Результат',en:'Deliverables'}},{id:'case',t:{ru:'Кадры',en:'Views'}},{id:'pricing',t:{ru:'Цены',en:'Pricing'}}],
  hero:{
    eyebrow:{ru:'Предложение для ALUTEX · визуализация объектов и расчёт КП',en:'A proposal for ALUTEX · object visualisation and quote calculation'},
    viewer:false,img:'assets/facade-day.webp',img2:'assets/facade-evening.webp',
    tags:[{ru:'Условный объект · день / вечер',en:'Conditional building · day / evening'}],
    h1:{ru:'Покажем ваш фасад на объекте застройщика и соберём калькулятор КП',en:'We will show your façade on the developer’s building and build a quote calculator'},
    lead:{ru:'Визуализация объекта с вашими конструкциями под каждый тендер: 2–3 кадра по чертежу. И калькулятор, который собирает КП быстрее, чем таблица.',
          en:'A visualisation of the building with your structures for every tender: 2–3 views from the drawing. And a calculator that builds a quote faster than a spreadsheet.'},
    cta:{ru:'Прислать чертёж объекта',en:'Send an object drawing'},ctaTo:'contact',
    cta2:{ru:'Посмотреть кадры',en:'See the views'},cta2to:'case',
    offer:[
      {t:{ru:'Визуализация объекта',en:'Object visualisation'},d:{ru:'2–3 кадра по чертежу, 3–5 дней',en:'2–3 views from the drawing, 3–5 days'}},
      {t:{ru:'Калькулятор и КП',en:'Calculator and quote'},d:{ru:'Конструкции → КП в PDF',en:'Structures → a PDF quote'}},
      {t:{ru:'Портфолио объектов',en:'Project portfolio'},d:{ru:'Страница объектов с визуализациями',en:'A projects page with visualisations'}}]},
  facts:[
    {n:'1999',count:1999,label:{ru:'год, с которого компания работает. Офисы в Ташкенте и Нью-Йорке',en:'the year the company started work. Offices in Tashkent and New York'},src:{ru:'alutex.uz, просмотр 30.10.2026',en:'alutex.uz, viewed 30 Oct 2026'},url:'https://alutex.uz/about'},
    {n:'20',count:20,label:{ru:'объектов в разделе проектов на сайте (по нашему подсчёту): вокзал, университеты, банки, министерства. Фасады, окна и перегородки',en:'projects in the projects section of the site (by our count): a railway station, universities, banks, ministries. Façades, windows and partitions'},src:{ru:'alutex.uz, раздел объектов, просмотр 30.10.2026',en:'alutex.uz, projects section, viewed 30 Oct 2026'},url:'https://alutex.uz/projects'},
    {n:'2023',count:2023,label:{ru:'запуск нового завода алюминиевого профиля на 10 га: его посетил президент Узбекистана',en:'launch of a new 10-hectare aluminium profile plant, visited by the President of Uzbekistan'},src:{ru:'alutex.uz, «О компании»',en:'alutex.uz, About us'},url:'https://alutex.uz/about'}],
  why:{
    title:{ru:'Конструкции видят в чертеже, застройщик ждёт картинку',en:'Structures live in a drawing, a developer waits for a picture'},
    paras:[
      {ru:'Мы предполагаем, что решение о подрядчике застройщик принимает, глядя на то, как будет выглядеть здание. Чертёж и таблица цен это не показывают.',
       en:'We assume a developer picks a contractor by seeing how the building will look. A drawing and a price table do not show that.'},
      {ru:'Ещё одно предположение: расчёт КП занимает время. Обе гипотезы мы хотим проверить с вами на коротком созвоне.',
       en:'Another assumption: the quote calculation takes time. We want to check both hypotheses with you on a short call.'}],
    note:{ru:'Данные из открытых источников:',en:'Data from public sources:'},
    links:[{t:{ru:'alutex.uz: о компании',en:'alutex.uz: about the company'},url:'https://alutex.uz/about'},{t:{ru:'alutex.uz: объекты',en:'alutex.uz: projects'},url:'https://alutex.uz/projects'}],
    tasks:[
      {ru:'Как сегодня вы показываете застройщику фасад с вашими конструкциями?',en:'How do you show a developer a façade with your structures today?'},
      {ru:'Как считаете КП: в Excel, в программе, на бумаге? Сколько времени занимает один расчёт?',en:'How do you calculate a quote: in Excel, in a program, on paper? How long does one calculation take?'},
      {ru:'Сколько тендеров застройщиков в месяц?',en:'How many developer tenders a month?'}]},
  deliver:{
    title:{ru:'Что получите',en:'What you get'},
    items:[
      {t:{ru:'Визуализация объекта',en:'Object visualisation'},d:{ru:'2–3 кадра здания с вашими конструкциями по чертежу объекта: день и вечер. 3–5 дней, от 800 $ за объект.',en:'2–3 views of the building with your structures from the object drawing: day and evening. 3–5 days, from $800 per object.'}},
      {t:{ru:'Калькулятор и КП',en:'Calculator and quote'},d:{ru:'Выбираете конструкции, получаете КП в PDF. Начинаем с прототипа на примерных правилах расчёта. 2–3 недели.',en:'You pick structures and get a PDF quote. We start with a prototype on sample calculation rules. 2–3 weeks.'}},
      {t:{ru:'Портфолио объектов',en:'Project portfolio'},d:{ru:'Страница объектов с визуализациями вместо списка названий. 2 недели.',en:'A projects page with visualisations instead of a list of names. 2 weeks.'}}]},
  case:{
    compact:true,
    title:{ru:'Так выглядит кадр для застройщика',en:'This is what a view for a developer looks like'},
    lead:{ru:'Условное здание: день, вечер и схема стойки витража. По вашему чертежу сделаем такие же кадры с вашими конструкциями.',en:'A conditional building: day, evening and a curtain wall mullion diagram. From your drawing we make the same views with your structures.'},
    frames:[
      {src:'assets/facade-day.webp',cap:{ru:'Фасад днём',en:'Façade by day'}},
      {src:'assets/facade-evening.webp',cap:{ru:'Фасад вечером',en:'Façade in the evening'}},
      {src:'assets/mullion-section.webp',cap:{ru:'Разрез стойки витража',en:'Mullion section'}}]},
  /* схема условной стойки витража (вид в плане): пластина, стойка с камерами, стекло, уплотнители */
  visual:{
    title:{ru:'Схема стойки витража',en:'A curtain wall mullion diagram'},
    lead:{ru:'Схема на условной стойке, не профиль ALUTEX. По сечению вашей системы сделаем разрез в фотореалистичном рендере.',en:'A diagram of a conditional mullion, not an ALUTEX profile. From your system’s section we make a photorealistic section view.'},
    alt:{ru:'Схема разреза условной стойки витража',en:'Section diagram of a conditional curtain wall mullion'},
    cap:{ru:'Схема на условной модели · это не профиль ALUTEX',en:'Diagram on a conditional model · this is not an ALUTEX profile'},
    svg:{box:'0 0 900 480',mbox:'60 24 530 440',
      outer:'M232,132 H308 V390 H232 Z M214,100 H326 V132 H214 Z',
      inner:['M246,164 h48 v100 h-48 Z','M246,278 h48 v100 h-48 Z'],
      seals:['M204,100 h10 v32 h-10 Z','M326,100 h10 v32 h-10 Z'],
      dims:'<rect x="70" y="104" width="134" height="24" fill="none"/><rect x="336" y="104" width="134" height="24" fill="none"/><line x1="380" y1="150" x2="380" y2="390"/><line x1="370" y1="150" x2="390" y2="150"/><line x1="370" y1="390" x2="390" y2="390"/><text x="396" y="276" stroke="none">H</text>'},
    callouts:[
      {d:'M270,116 V44 H547',end:[560,44],t:{ru:'Нажимная планка',en:'Pressure plate'}},
      {d:'M420,116 L500,108 H547',end:[560,108],t:{ru:'Стеклопакет',en:'Glazing unit'}},
      {d:'M331,116 L480,172 H547',end:[560,172],t:{ru:'Уплотнитель',en:'Gasket'}},
      {d:'M270,214 L480,236 H547',end:[560,236],t:{ru:'Камеры стойки',en:'Mullion chambers'}},
      {d:'M238,384 V440 H547',end:[560,440],t:{ru:'Плоскость среза',en:'Cutting plane'}}]},
  steps:{
    title:{ru:'От чертежа до кадров',en:'From a drawing to views'},
    items:[
      {d:{ru:'День 0',en:'Day 0'},t:{ru:'Присылаете чертёж',en:'You send a drawing'},p:{ru:'Один объект: чертёж или фото и перечень ваших конструкций. NDA подпишем, если нужно.',en:'One object: a drawing or photo and a list of your structures. We sign an NDA if needed.'}},
      {d:{ru:'День 1',en:'Day 1'},t:{ru:'Проверяем исходник',en:'We check the source'},p:{ru:'Говорим, подходит ли чертёж для бесплатного пробного кадра. Если нет, скажем сразу.',en:'We tell you whether the drawing suits a free trial view. If not, we say so at once.'}},
      {d:{ru:'3–5 дней',en:'3–5 days'},t:{ru:'Кадры объекта',en:'Object views'},p:{ru:'2–3 кадра для КП. Срок считаем от получения исходников.',en:'2–3 views for the quote. Timing counts from receiving your sources.'}},
      {d:{ru:'2–3 недели',en:'2–3 weeks'},t:{ru:'Калькулятор',en:'Calculator'},p:{ru:'Прототип на примерных правилах, затем на ваших, когда пришлёте прайс.',en:'A prototype on sample rules, then on yours once you send the price list.'}}]},
  pricing:{
    title:{ru:'Пакеты и цены',en:'Packages and prices'},
    note:{ru:'Цены «от», в долларах США. Оплата в USD. Сроки считаются от получения исходников.',en:'“From” prices, in US dollars. Payment in USD. Timelines count from receiving your source files.'},
    plans:[
      {t:{ru:'Визуализация объекта',en:'Object visualisation'},price:{ru:'от 800 $ за объект',en:'from $800 per object'},rec:true,items:[{ru:'2–3 кадра по чертежу объекта',en:'2–3 views from the object drawing'},{ru:'Под каждый тендер, может стать регулярным',en:'For every tender, can become regular'},{ru:'3–5 дней',en:'3–5 days'}]},
      {t:{ru:'Портфолио объектов',en:'Project portfolio'},price:{ru:'от 1 000 $',en:'from $1,000'},items:[{ru:'Страница объектов с визуализациями',en:'A projects page with visualisations'},{ru:'2 недели',en:'2 weeks'}]},
      {t:{ru:'Калькулятор и КП',en:'Calculator and quote'},price:{ru:'от 1 500 $',en:'from $1,500'},items:[{ru:'Калькулятор конструкций → КП в PDF',en:'A structure calculator → PDF quote'},{ru:'2–3 недели',en:'2–3 weeks'}]}]},
  scope:{
    title:{ru:'Что зависит от нас, а что — от исходников',en:'What depends on us and what depends on the sources'},
    sure:[
      {ru:'Прототип калькулятора на примерных правилах расчёта',en:'A calculator prototype on sample calculation rules'},
      {ru:'Сцены и визуал по фото',en:'Scenes and visuals from photos'}],
    extra:[
      {ru:'Ваш прайс и правила расчёта → рабочий конфигуратор',en:'Your price list and rules → a working configurator'},
      {ru:'Доступ к сайту и таблицам → встраивание без ручного переноса',en:'Access to the site and spreadsheets → embedding without manual transfer'},
      {ru:'Пробный кадр бесплатно, только если исходник подходит',en:'A trial view is free, only if the source suits'}]},
  principles:{
    title:{ru:'Условия',en:'Terms'},
    items:[
      {t:{ru:'Данные из вашего чертежа',en:'Data from your drawing'},d:{ru:'Конструкции показываем так, как они в проекте. Ничего не придумываем.',en:'We show structures as they are in the project. Nothing is invented.'}},
      {t:{ru:'Сроки — от исходников',en:'Timing starts with the sources'},d:{ru:'Считаем от получения подходящих файлов. Подходят ли они, говорим в первый день.',en:'We count from receiving suitable files, and say on day one whether they suit.'}},
      {t:{ru:'Два раунда правок на этап',en:'Two edit rounds per stage'},d:{ru:'Заранее понятно, сколько правок входит в цену.',en:'It is clear in advance how many edits the price includes.'}},
      {t:{ru:'Права у вас, NDA до данных',en:'You own the files, NDA first'},d:{ru:'Публикуем только с вашего согласия.',en:'We publish only with your consent.'}}]},
  more:{
    label:{ru:'Что мы делаем',en:'What we do'},
    title:{ru:'Что мы можем сделать для ALUTEX',en:'What we can do for ALUTEX'},
    lead:{ru:'MONOLITH — студия технической графики, софта и ИИ для промышленных продаж. Чем мы можем быть вам полезны:',en:'MONOLITH is a studio of technical graphics, software and AI for industrial sales. How we can be useful to you:'},
    items:[
      {i:'01',t:{ru:'Визуализация объекта',en:'Object visualisation'},d:{ru:'2–3 кадра здания с вашими конструкциями по чертежу под каждый тендер.',en:'2–3 views of the building with your structures from the drawing for every tender.'}},
      {i:'02',t:{ru:'Разрезы и узлы систем',en:'System sections and details'},d:{ru:'Стойка, ригель, узел примыкания: разрез по сечению из каталога.',en:'Mullion, transom, junction: a section from the catalogue drawing.'}},
      {i:'03',t:{ru:'Взрыв-схемы монтажа',en:'Installation exploded views'},d:{ru:'Как собирается витраж или окно: схемы для монтажников и дилеров.',en:'How a curtain wall or window is assembled: diagrams for installers and dealers.'}},
      {i:'04',t:{ru:'Калькулятор смет и КП',en:'Estimate and quote calculator'},d:{ru:'Из Excel в инструмент: менеджеры считают без правки таблиц.',en:'From Excel to a tool: managers calculate without editing spreadsheets.'},href:'../../cases/casecalculator.html'},
      {i:'05',t:{ru:'Тендерная заявка для застройщика',en:'A tender bid for a developer'},d:{ru:'Шаблоны и автоматическая сборка с помощью ИИ.',en:'Templates and automatic assembly with AI.'}},
      {i:'06',t:{ru:'Портфолио объектов',en:'Project portfolio'},d:{ru:'Страница объектов с визуализациями вместо списка названий.',en:'A projects page with visualisations instead of a list of names.'}},
      {i:'07',t:{ru:'Видео и 360°',en:'Video and 360°'},d:{ru:'Ролик об объекте или производстве, вращение системы на 360°.',en:'A clip about a project or production, a 360° turntable of a system.'}},
      {i:'08',t:{ru:'Каталог систем для дилеров и экспорта',en:'A systems catalogue for dealers and export'},d:{ru:'Единый вид систем, описания на русском, узбекском и английском.',en:'One look for the systems, descriptions in Russian, Uzbek and English.'}},
      {i:'09',t:{ru:'Конфигуратор для дилеров',en:'Dealer configurator'},d:{ru:'Дилер вводит размеры и видит состав и ориентир цены.',en:'The dealer enters sizes and sees the specification and a price estimate.'},href:'../../cases/casecalculator.html'},
      {i:'10',t:{ru:'Разбор на час',en:'A one-hour review'},d:{ru:'Смотрим ваш процесс и показываем, что автоматизировать первым.',en:'We look at your process and show what to automate first.'}}]},
  about:{
    title:{ru:'MONOLITH — техническая графика и софт для промышленных продаж',en:'MONOLITH — technical graphics and software for industrial sales'},
    paras:[
      {ru:'Небольшая студия: между вами и тем, кто делает работу, нет прослоек. Работаем с данными, которые у вас уже есть.',en:'A small studio: there are no layers between you and the person doing the work. We work from data you already have.'},
      {ru:'Пока показываем демонстрационные кейсы на условных объектах, поэтому первую работу для вас начинаем с проверки исходника.',en:'For now we show demonstration cases on conditional buildings, which is why your first work starts with a source check.'}]},
  cta:{
    title:{ru:'Пришлите чертёж одного объекта.',en:'Send a drawing of one object.'},
    lead:{ru:'Если чертёж не подойдёт для бесплатного пробного кадра, напишем, что необходимо.',en:'On day one we say whether it suits a free trial view. You decide what comes next.'},
    btn:{ru:'Заполнить бриф',en:'Fill in the brief'},
    or:{ru:'или напишите нам на почту:',en:'or write to us by email:'},mail:'mail@monolith.contact'}
};
