/* Контент презентации для КЗТА. Для новой компании скопируйте файл и замените тексты, факты и блоки. */
window.COMPANY={
  slug:'kzta',
  style:'blueprint',
  name:{ru:'КЗТА',en:'KZTA'},
  title:{ru:'Предложение для КЗТА — MONOLITH',en:'A proposal for KZTA — MONOLITH'},
  /* цвета КЗТА с kzta.kz: синий шапки и логотипа #1755E6 (контраст с белым 6.0), светлая версия на тёмном 7.5 */
  theme:{accent:'#1755E6',accentL:'#7AA2FF',onAccent:'#FFFFFF',dark:'#0B1226',dark2:'#111B36',lineDark:'#243055',bg:'#EEF1F8',bg2:'#E2E7F3',line:'#C5CCE0',fg:'#0C1020'},
  ui:{ru:{case:'Пример'},en:{case:'Example'}},
  contact:{brief:'https://monolith.contact/#/brief?src=kzta',stickyTo:'contact',site:'https://monolith.contact'},
  noDate:true,noFooterNote:true,
  model:{
    full:'../_shared/assets/models/valve-full.glb',section:'../_shared/assets/models/valve-section.glb',
    posterFull:'../_shared/assets/img/ball-valve-full.webp',posterSection:'../_shared/assets/img/ball-valve-section.webp'},
  blocks:['hero','more','facts','why','deliver','case','steps','pricing','scope','principles','about','cta'],
  nav:[{id:'why',t:{ru:'Задача',en:'The task'}},{id:'deliver',t:{ru:'Результат',en:'Deliverables'}},{id:'case',t:{ru:'Пример',en:'Example'}},{id:'pricing',t:{ru:'Цены',en:'Pricing'}}],
  hero:{
    eyebrow:{ru:'Предложение для КЗТА · разрезы и 3D арматуры для каталога и тендеров',en:'A proposal for KZTA · valve section views and 3D for the catalogue and tenders'},
    h1:{ru:'Сделаем разрезы, взрыв-схемы и 3D вашей арматуры',en:'We make section views, exploded views and 3D of your valves'},
    lead:{ru:'Разрез, взрыв-схема и 3D в браузере по вашей CAD-модели. Для каталога, тендеров и сайта. Геометрия берётся из модели, ничего не дорисовывается.',
          en:'Section views, exploded views and browser 3D from your CAD model. For catalogues, tenders and your website. Geometry comes from the model, nothing is redrawn.'},
    cta:{ru:'Получить бесплатный разрез',en:'Get a free section view'},ctaTo:'contact',
    cta2:{ru:'Покрутить 3D',en:'Rotate the 3D'},
    tags:[{ru:'DN100 · условная модель',en:'DN100 · conditional model'},{ru:'Разрез по оси потока',en:'Section along the flow axis'}],
    offer:[
      {t:{ru:'Разрез',en:'Section view'},d:{ru:'Внутреннее устройство по оси потока',en:'Internal design along the flow axis'}},
      {t:{ru:'Взрыв-схема',en:'Exploded view'},d:{ru:'Детали по оси сборки с нумерацией',en:'Numbered parts along the assembly axis'}},
      {t:{ru:'3D для сайта',en:'3D for the web'},d:{ru:'Вращается в браузере, есть разрез',en:'Rotates in the browser, with section'}},
      {t:{ru:'Каталог серией',en:'Catalogue series'},d:{ru:'Единый вид на весь ряд типоразмеров',en:'One look across the whole size range'}}]},
  about:{
    title:{ru:'MONOLITH — техническая графика и софт для промышленных продаж',en:'MONOLITH — technical graphics and software for industrial sales'},
    paras:[
      {ru:'Мы помогаем производителю быстрее продавать сложное изделие: делаем разрезы, взрыв-схемы и 3D по CAD-модели, собираем каталоги серией, калькуляторы и ИИ-поиск по документации.',
       en:'We help manufacturers sell a complex product faster: section views, exploded views and 3D from a CAD model, catalogues built as a series, calculators and AI search over documentation.'},
      {ru:'Небольшая студия: между вами и тем, кто делает работу, нет прослоек. Пока мы показываем демонстрационные кейсы на условных моделях, а первую работу для вас начинаем с бесплатной пробы.',
       en:'A small studio: there are no layers between you and the person doing the work. For now we show demonstration cases on conditional models, and we start your first work with a free trial.'}]},
  facts:[
    {n:'160',count:160,label:{ru:'квалифицированных специалистов на заводе',en:'qualified specialists at the plant'},src:{ru:'kzta.kz, главная страница',en:'kzta.kz, home page'},url:'https://kzta.kz/'},
    {n:'5 500',label:{ru:'кв. м производственных площадей на территории 2,5 га',en:'sq. m of production area on a 2.5-hectare site'},src:{ru:'kzta.kz, главная страница',en:'kzta.kz, home page'},url:'https://kzta.kz/'},
    {n:'5',count:5,label:{ru:'позиций в каталоге: задвижки, вентиль, шаровой кран, дисковый затвор',en:'catalogue items: gate valves, a globe valve, a ball valve and a disc butterfly valve'},src:{ru:'kzta.kz, каталог',en:'kzta.kz, catalogue'},url:'https://kzta.kz/'}],

  why:{
    title:{ru:'Продажам арматуры нужен показ изнутри',en:'Valve sales need a view from the inside'},
    paras:[
      {ru:'КЗТА выпускает задвижки, вентили, шаровые краны и дисковые затворы. Чтобы закупщик, проектный институт и дилер быстро понимали изделие, его нужно показывать наглядно: не только корпус на фото, но и устройство внутри.',
       en:'KZTA makes gate valves, globe valves, ball valves and disc butterfly valves. For buyers, design institutes and dealers to understand the product quickly, it must be shown clearly: not only the body in a photo, but the design inside.'},
      {ru:'На сайте сейчас фотографии изделий и цеха. Фото показывает корпус, но не показывает, как работает затвор, где седло и какая стенка. Разрез и 3D отвечают на эти вопросы до звонка.',
       en:'The website currently has photos of products and the plant. A photo shows the body, but not how the closure works, where the seat is and how thick the wall is. A section view and 3D answer these questions before the call.'}],
    note:{ru:'Данные из открытых источников:',en:'Data from public sources:'},
    links:[{t:{ru:'kzta.kz: сайт завода',en:'kzta.kz: the plant website'},url:'https://kzta.kz/'}],
    tasks:[
      {ru:'Закупщик и проектный институт по фото не видят, как устроено изделие',en:'Buyers and design institutes cannot see how a product is built from a photo'},
      {ru:'Тендеру нужна графика, которую можно приложить к чертежу',en:'Tenders need graphics that can be laid next to the drawing'},
      {ru:'Каталог из разных ракурсов выглядит как работа разных людей',en:'A catalogue with mixed angles looks like the work of different people'}]},
  deliver:{
    title:{ru:'Пять форматов, которые закрывают вопросы закупщика',en:'Five formats that answer a buyer’s questions'},
    items:[
      {t:{ru:'Разрез по оси потока',en:'Section along the flow axis'},d:{ru:'Седло, шар или клин, шток, толщина стенки. Режется в модели, а не рисуется поверх.',en:'Seat, ball or wedge, stem, wall thickness. Cut in the model, not drawn on top.'}},
      {t:{ru:'Взрыв-схема',en:'Exploded view'},d:{ru:'Разнос по оси сборки, нумерация деталей, как в руководстве по эксплуатации.',en:'Parts spread along the assembly axis, numbered as in an operating manual.'}},
      {t:{ru:'3D в браузере',en:'3D in the browser'},d:{ru:'Вращается мышью и пальцем, переключается на разрез. Встраивается на ваш сайт.',en:'Rotates by mouse and touch, switches to section. Embeds on your website.'}},
      {t:{ru:'Серия по типоразмерам',en:'Series by size'},d:{ru:'Единый свет и ракурс на весь ряд: каталог выглядит как одна серия.',en:'One light and angle across the range: the catalogue looks like one series.'}},
      {t:{ru:'Видео принципа работы',en:'Operating principle video'},d:{ru:'Ролик 10–15 секунд для выставок, тендеров и соцсетей.',en:'A 10–15 second clip for exhibitions, tenders and social media.'}}]},
  case:{
    title:{ru:'Пример: шаровой кран DN100',en:'Example: DN100 ball valve'},
    lead:{ru:'Покрутите модель и переключитесь на разрез. Так будет выглядеть ваше изделие на сайте и в каталоге — по вашей CAD-модели.',en:'Rotate the model and switch to the section. This is how your product will look on your website and in your catalogue, from your CAD model.'},
    href:'../../cases/caseballvalve.html',
    frames:[
      {src:'../_shared/assets/img/ball-valve-section.webp',cap:{ru:'Разрез 3/4: все узлы в одном кадре',en:'Three-quarter section: all parts in one view'}},
      {src:'../_shared/assets/img/ball-valve-section-side.webp',cap:{ru:'Профиль: проход, камера, фланцы',en:'Profile: bore, chamber, flanges'}},
      {src:'../_shared/assets/img/ball-valve-section-ball.webp',cap:{ru:'Крупно: шар и седла',en:'Close-up: ball and seats'}},
      {src:'../_shared/assets/img/ball-valve-section-stem.webp',cap:{ru:'Крупно: шпиндель и горловина',en:'Close-up: stem and neck'}}]},
  steps:{
    title:{ru:'От файла до кадра за неделю',en:'From file to image within a week'},
    items:[
      {d:{ru:'День 0',en:'Day 0'},t:{ru:'Присылаете STEP',en:'You send a STEP file'},p:{ru:'Один кран или задвижка. NDA подпишем, если нужно.',en:'One ball or gate valve. We sign an NDA if you need one.'}},
      {d:{ru:'Дни 1–5',en:'Days 1–5'},t:{ru:'Бесплатный разрез',en:'Free section view'},p:{ru:'В первый день скажем, подходит ли модель. Кадр — за 3–5 рабочих дней от получения файла.',en:'On day one we say whether the model suits. The view takes 3–5 working days from receiving the file.'}},
      {d:{ru:'Созвон 20 минут',en:'20-minute call'},t:{ru:'Выбираем пакет',en:'We choose a package'},p:{ru:'Решаем, сколько изделий, какие кадры и где публикуем.',en:'We decide how many products, which views and where to publish.'}},
      {d:{ru:'Дальше',en:'Next'},t:{ru:'Серия и поддержка',en:'Series and support'},p:{ru:'Ряд типоразмеров и обновления при новых изделиях.',en:'A range of sizes and updates when new products appear.'}}]},
  pricing:{
    title:{ru:'Начинаем с бесплатной пробы',en:'We start with a free trial'},
    note:{ru:'Это стартовые условия для первых проектов, оплата в $, предоплата 50%. Точная цена зависит от числа деталей и сложности сборки.',en:'These are launch terms for our first projects; payment in USD, 50% prepayment. The exact price depends on the number of parts and assembly complexity.'},
    plans:[
      {t:{ru:'Проба',en:'Trial'},price:{ru:'0 $',en:'$0'},items:[{ru:'1 кадр разреза по вашей модели',en:'1 section view from your model'},{ru:'3–5 рабочих дней, если STEP подходит',en:'3–5 working days, if the STEP file suits'}]},
      {t:{ru:'Пилот',en:'Pilot'},price:{ru:'от 1 800 $',en:'from $1,800'},rec:true,items:[{ru:'1 изделие: общий вид и 3 кадра разреза',en:'1 product: exterior and 3 section views'},{ru:'3D для сайта',en:'3D for the website'},{ru:'2 недели от получения модели',en:'2 weeks from receiving the model'}]},
      {t:{ru:'Пакет',en:'Package'},price:{ru:'от 4 800 $',en:'from $4,800'},items:[{ru:'5 изделий в едином стиле',en:'5 products in one style'},{ru:'Взрыв-схемы и 3D',en:'Exploded views and 3D'}]},
      {t:{ru:'Поддержка',en:'Support'},price:{ru:'от 900 $ / мес',en:'from $900 / mo'},items:[{ru:'Новые изделия и обновления каталога по мере выхода',en:'New products and catalogue updates as they launch'},{ru:'Единый стиль на весь ряд',en:'One style across the range'}]}]},
  scope:{
    title:{ru:'Что зависит от нас, а что — от исходников',en:'What depends on us and what depends on the sources'},
    sure:[
      {ru:'Разрез и общий вид по вашей CAD-модели (STEP)',en:'Section and exterior views from your CAD model (STEP)'},
      {ru:'3D в браузере с переключением на разрез',en:'Browser 3D with a section toggle'},
      {ru:'Единый свет и ракурс на весь ряд',en:'One light and angle across the range'}],
    extra:[
      {ru:'Модель только в чертежах → моделирование, платно',en:'Drawings only → modelling, paid'},
      {ru:'Полная сборка с крепежом → взрыв-схема с нумерацией',en:'A full assembly with fasteners → a numbered exploded view'},
      {ru:'Прайс и правила подбора → калькулятор для клиентов',en:'Price list and selection rules → a client calculator'}]},
  principles:{
    title:{ru:'Условия',en:'Terms'},
    items:[
      {t:{ru:'Геометрия из вашей модели',en:'Geometry from your model'},d:{ru:'Ничего не подмоделируем «для красоты». Дефект исходника показываем как есть.',en:'Nothing is remodelled “for looks”. A source defect is shown as it is.'}},
      {t:{ru:'Сверка с чертежом',en:'Check against the drawing'},d:{ru:'Разрез можно приложить к чертежу и не найти расхождений.',en:'A section view can be laid over the drawing with no discrepancies.'}},
      {t:{ru:'Единый свет и ракурс',en:'One light and angle'},d:{ru:'Весь ряд снят одним сетапом, поэтому каталог читается как серия.',en:'The whole range uses one setup, so the catalogue reads as a series.'}},
      {t:{ru:'Права у вас',en:'You own the files'},d:{ru:'Ваши файлы остаются у вас, публикуем только с вашего согласия.',en:'Your files stay with you, we publish only with your consent.'}}]},
  more:{
    label:{ru:'Что мы делаем',en:'What we do'},
    title:{ru:'Что мы можем сделать для КЗТА',en:'What we can do for KZTA'},
    lead:{ru:'MONOLITH — студия технической графики, софта и ИИ для промышленных продаж. Чем мы можем быть вам полезны:',en:'MONOLITH is a studio of technical graphics, software and AI for industrial sales. How we can be useful to you:'},
    items:[
      {i:'01',t:{ru:'Разрезы арматуры',en:'Valve section views'},d:{ru:'Внутреннее устройство по оси потока: седло, шток, стенка. По вашей CAD-модели.',en:'The internal design along the flow axis: seat, stem, wall. From your CAD model.'}},
      {i:'02',t:{ru:'Взрыв-схемы',en:'Exploded views'},d:{ru:'Как собрана задвижка или кран: схемы для каталога и документации.',en:'How a gate or ball valve is assembled: diagrams for the catalogue and documentation.'}},
      {i:'03',t:{ru:'3D в браузере',en:'3D in the browser'},d:{ru:'Закупщик и проектный институт вращают изделие и смотрят разрез на сайте.',en:'Buyers and design institutes rotate the product and view the section on the site.'}},
      {i:'04',t:{ru:'Каталог и техлисты',en:'Catalogue and data sheets'},d:{ru:'Единый свет и ракурс на весь ряд, чтобы каталог читался как серия.',en:'One light and angle across the whole range, so the catalogue reads as a series.'}},
      {i:'05',t:{ru:'Видео работы затвора',en:'Valve operation video'},d:{ru:'Показываем, как работает изделие: для выставки и тендера.',en:'We show how the product works: for exhibitions and tenders.'}},
      {i:'06',t:{ru:'Выставочный пакет',en:'Exhibition package'},d:{ru:'Кадры и петли для экранов стенда, широкоформатные материалы.',en:'Views and loops for stand screens, wide-format materials.'}},
      {i:'07',t:{ru:'Поиск по документации',en:'AI catalogue search'},d:{ru:'Вопрос обычным языком, ответ со ссылкой на документ и страницу.',en:'A plain-language question, an answer with a document and page link.'}},
      {i:'08',t:{ru:'Калькулятор и конфигуратор',en:'Calculator and configurator'},d:{ru:'Клиент вводит параметры и сразу видит состав и ориентир цены.',en:'The client enters parameters and instantly sees the specification and a price estimate.'},href:'../../cases/casecalculator.html'},
      {i:'09',t:{ru:'Бот заявок в Telegram',en:'Telegram request bot'},d:{ru:'Собирает параметры и передаёт менеджеру готовую заявку.',en:'Collects parameters and hands the manager a ready request.'}},
      {i:'10',t:{ru:'Описания на нескольких языках',en:'Multilingual descriptions'},d:{ru:'Карточки изделий на русском, казахском и английском из ваших текстов.',en:'Product cards in Russian, Kazakh and English from your texts.'}}]},
  cta:{
    title:{ru:'Пришлите STEP одного изделия',en:'Send a STEP file of one product'},
    lead:{ru:'Если модель подходит, первый разрез вернём бесплатно через 3–5 рабочих дней. Если нет — напишем, что необходимо.',en:'If the model suits, we return the first section view free in 3–5 working days. If not, we say so on day one. You decide what comes next.'},
    btn:{ru:'Заполнить бриф',en:'Fill in the brief'},
    or:{ru:'или напишите нам на почту:',en:'or write to us by email:'},mail:'mail@monolith.contact'}
};
