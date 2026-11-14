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
  contact:{brief:'https://monolith.contact/#/brief?src=alutex'},
  model:{},
  blocks:['hero','facts','why','deliver','case','visual','steps','pricing','scope','principles','more','about','cta'],
  nav:[{id:'why',t:{ru:'Задача',en:'The task'}},{id:'deliver',t:{ru:'Результат',en:'Deliverables'}},{id:'case',t:{ru:'Кадры',en:'Views'}},{id:'pricing',t:{ru:'Цены',en:'Pricing'}}],
  hero:{
    viewer:false,img:'assets/facade-day.webp',img2:'assets/facade-evening.webp',
    tags:[{ru:'Условный объект · день / вечер',en:'Conditional building · day / evening'}],
    h1:{ru:'Застройщик выбирает по картинке. Покажите ему фасад на его объекте.',en:'A developer chooses by the picture. Show them the façade on their building.'},
    lead:{ru:'Визуализация объекта с вашими конструкциями под каждый тендер: 2–3 кадра по чертежу. И калькулятор, который собирает КП быстрее, чем таблица.',
          en:'A visualisation of the building with your structures for every tender: 2–3 views from the drawing. And a calculator that builds a quote faster than a spreadsheet.'},
    cta:{ru:'Прислать чертёж объекта',en:'Send an object drawing'},
    cta2:{ru:'Посмотреть кадры',en:'See the views'},cta2to:'case',
    offer:[
      {t:{ru:'Визуализация объекта',en:'Object visualisation'},d:{ru:'2–3 кадра по чертежу, 3–5 дней',en:'2–3 views from the drawing, 3–5 days'}},
      {t:{ru:'Калькулятор и КП',en:'Calculator and quote'},d:{ru:'Конструкции → КП в PDF',en:'Structures → a PDF quote'}},
      {t:{ru:'Портфолио объектов',en:'Project portfolio'},d:{ru:'Страница объектов с визуализациями',en:'A projects page with visualisations'}}]},
  facts:[
    {n:'1999',count:1999,label:{ru:'год, с которого компания работает. Офис в Ташкенте, представительство в Нью-Йорке',en:'the year the company started work. An office in Tashkent and a representative office in New York'},src:{ru:'alutex.uz, просмотр 30.10.2026',en:'alutex.uz, viewed 30 Oct 2026'}},
    {n:'20',count:20,label:{ru:'объектов в разделе проектов на сайте: вокзал, университеты, торговые центры. Фасады, окна и перегородки',en:'projects in the projects section of the site: a railway station, universities, shopping centres. Façades, windows and partitions'},src:{ru:'alutex.uz, раздел объектов, просмотр 30.10.2026',en:'alutex.uz, projects section, viewed 30 Oct 2026'}},
    {n:'5',count:5,label:{ru:'услуг в перечне на сайте: матрицы, экструзия, порошковая покраска, анодирование, заготовки',en:'services listed on the site: dies, extrusion, powder coating, anodising, billets'},src:{ru:'alutex.uz, просмотр 30.10.2026',en:'alutex.uz, viewed 30 Oct 2026'}}],
  why:{
    title:{ru:'Конструкции видят в чертеже, застройщик ждёт картинку',en:'Structures live in a drawing, a developer waits for a picture'},
    paras:[
      {ru:'Мы предполагаем, что решение о подрядчике застройщик принимает, глядя на то, как будет выглядеть здание. Чертёж и таблица цен это не показывают.',
       en:'We assume a developer picks a contractor by seeing how the building will look. A drawing and a price table do not show that.'},
      {ru:'Ещё одно предположение: расчёт КП занимает время. Обе гипотезы мы хотим проверить с вами на коротком созвоне.',
       en:'Another assumption: the quote calculation takes time. We want to check both hypotheses with you on a short call.'}],
    note:{ru:'Мы не видели ваших внутренних материалов: выводы сделаны по открытым источникам.',en:'We have not seen your internal materials: conclusions are based on public sources.'},
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
    note:{ru:'Цены «от», в долларах США. Оплата в USD индивидуальному предпринимателю в Грузии. Итоговую цену фиксируем в предложении до начала работы. Сроки считаются от получения исходников.',en:'“From” prices, in US dollars. Payment in USD to a sole proprietor in Georgia. The final price is fixed in the proposal before work starts. Timelines count from receiving your source files.'},
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
    title:{ru:'Кроме визуала: софт, процессы, консалтинг',en:'Beyond visuals: software, processes, consulting'},
    items:[
      {i:'01',t:{ru:'Расчёт смет и КП: из Excel в инструмент',en:'Estimates and quotes: from Excel to a tool'},d:{ru:'Обновляем существующий расчёт, чтобы им пользовались менеджеры без правки таблиц.',en:'We update the existing calculation so managers can use it without editing spreadsheets.'}},
      {i:'02',t:{ru:'Тендерная заявка для застройщика',en:'A tender bid for a developer'},d:{ru:'Шаблоны и автоматическая сборка с помощью ИИ. Пилот на одном процессе от 1 500 $, 2 недели, фиксированная цена.',en:'Templates and automatic assembly with AI. A single-process pilot from $1,500, 2 weeks, fixed price.'}},
      {i:'03',t:{ru:'Разбор на час',en:'A one-hour review'},d:{ru:'Смотрим ваш процесс и показываем, что автоматизировать первым. Аудит от 600 $, сопровождение от 400 $ в месяц.',en:'We look at your process and show what to automate first. Audit from $600, support from $400 a month.'}}]},
  about:{
    title:{ru:'MONOLITH — техническая графика и софт для промышленных продаж',en:'MONOLITH — technical graphics and software for industrial sales'},
    paras:[
      {ru:'Небольшая студия: между вами и тем, кто делает работу, нет прослоек. Работаем с данными, которые у вас уже есть.',en:'A small studio: there are no layers between you and the person doing the work. We work from data you already have.'},
      {ru:'Пока показываем демонстрационные кейсы на условных объектах, поэтому первую работу для вас начинаем с проверки исходника.',en:'For now we show demonstration cases on conditional buildings, which is why your first work starts with a source check.'}]},
  cta:{
    title:{ru:'Пришлите чертёж одного объекта.',en:'Send a drawing of one object.'},
    lead:{ru:'В первый день скажем, подходит ли он для бесплатного пробного кадра. Дальше решите сами.',en:'On day one we say whether it suits a free trial view. You decide what comes next.'},
    btn:{ru:'Отправить чертёж или написать',en:'Send a drawing or write to us'}}
};
