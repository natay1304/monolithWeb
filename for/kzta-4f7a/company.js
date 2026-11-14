/* Контент презентации для КЗТА. Для новой компании скопируйте файл и замените тексты, факты и блоки. */
window.COMPANY={
  slug:'kzta',
  style:'blueprint',
  name:{ru:'КЗТА',en:'KZTA'},
  title:{ru:'Предложение для КЗТА — MONOLITH',en:'A proposal for KZTA — MONOLITH'},
  /* цвета КЗТА с kzta.kz: синий шапки и логотипа #1755E6 (контраст с белым 6.0), светлая версия на тёмном 7.5 */
  theme:{accent:'#1755E6',accentL:'#7AA2FF',onAccent:'#FFFFFF',dark:'#0B1226',dark2:'#111B36',lineDark:'#243055',bg:'#EEF1F8',bg2:'#E2E7F3',line:'#C5CCE0',fg:'#0C1020'},
  ui:{ru:{case:'Пример'},en:{case:'Example'}},
  contact:{brief:'https://monolith.contact/#/brief?src=kzta'},
  model:{
    full:'../_shared/assets/models/valve-full.glb',section:'../_shared/assets/models/valve-section.glb',
    posterFull:'../_shared/assets/img/ball-valve-full.webp',posterSection:'../_shared/assets/img/ball-valve-section.webp'},
  blocks:['hero','facts','why','deliver','case','steps','pricing','scope','principles','more','about','cta'],
  nav:[{id:'why',t:{ru:'Задача',en:'The task'}},{id:'deliver',t:{ru:'Результат',en:'Deliverables'}},{id:'case',t:{ru:'Пример',en:'Example'}},{id:'pricing',t:{ru:'Цены',en:'Pricing'}}],
  hero:{
    h1:{ru:'Покажем, как устроена ваша арматура — изнутри',en:'We will show how your valves are built — from the inside'},
    lead:{ru:'Разрез, взрыв-схема и 3D в браузере по вашей CAD-модели. Для каталога, тендеров и сайта. Геометрия берётся из модели, ничего не дорисовывается.',
          en:'Section views, exploded views and browser 3D from your CAD model. For catalogues, tenders and your website. Geometry comes from the model, nothing is redrawn.'},
    cta:{ru:'Получить бесплатный разрез',en:'Get a free section view'},
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
    {n:'×10',count:10,pre:'×',label:{ru:'рост мощности после модернизации: с 4 500 до 45 000 изделий',en:'capacity growth after modernisation: from 4,500 to 45,000 units'},src:{ru:'Фонд развития промышленности, декабрь 2024',en:'Industrial Development Fund, December 2024'}},
    {n:'5',count:5,label:{ru:'позиций в каталоге: задвижки, вентиль, шаровой кран, дисковый затвор',en:'catalogue items: gate valves, a globe valve, a ball valve and a disc butterfly valve'},src:{ru:'По данным сайта kzta.kz',en:'Based on kzta.kz'}},
    {n:'3–5',label:{ru:'рабочих дней до первого кадра по вашей модели',en:'working days to the first view from your model'}},
    {n:'0 $',label:{ru:'стоит первый разрез вашего изделия, если модель подходит',en:'is the cost of the first section view of your product, if the model suits'}}],
  why:{
    title:{ru:'Рост выпуска требует продаж, а продажам нужен показ',en:'Growing output needs sales, and sales need a showcase'},
    paras:[
      {ru:'КЗТА завершила модернизацию и готовится выпускать в разы больше. Чтобы поставки росли вместе с производством, изделие нужно быстро и понятно показывать: закупщику, проектному институту, дилеру.',
       en:'KZTA has completed modernisation and is preparing to produce many times more. For deliveries to grow with production, the product must be shown quickly and clearly: to buyers, design institutes and dealers.'},
      {ru:'На сайте сейчас фотографии изделий и цеха. Фото показывает корпус, но не показывает, как работает затвор, где седло и какая стенка. Разрез и 3D отвечают на эти вопросы до звонка.',
       en:'The website currently has photos of products and the plant. A photo shows the body, but not how the closure works, where the seat is and how thick the wall is. A section view and 3D answer these questions before the call.'}],
    note:{ru:'Мы не видели ваших внутренних материалов: выводы сделаны по сайту и открытым публикациям и проверяются на созвоне.',en:'We have not seen your internal materials: conclusions are based on the website and public sources and will be checked on a call.'},
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
    note:{ru:'Это стартовые условия для первых проектов, цена фиксируется в предложении до начала работы. Оплата в $ на счёт ИП в Грузии, предоплата 50%. Точная цена зависит от числа деталей и сложности сборки.',en:'These are launch terms for our first projects; the price is fixed in the proposal before work starts. Payment in USD to a sole proprietor account in Georgia, 50% prepayment. The exact price depends on the number of parts and assembly complexity.'},
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
    title:{ru:'Что ещё можем для вас',en:'What else we can do'},
    items:[
      {i:'01',t:{ru:'Поиск по документации',en:'AI catalogue search'},d:{ru:'Вопрос обычным языком, ответ со ссылкой на документ и страницу. Пилот от 1 500 $.',en:'A plain-language question, an answer with a document and page link. Pilot from $1,500.'}},
      {i:'02',t:{ru:'Калькулятор и конфигуратор',en:'Calculator and configurator'},d:{ru:'Клиент вводит параметры и сразу видит состав и ориентир цены.',en:'The client enters parameters and instantly sees the specification and a price estimate.'},href:'../../cases/casecalculator.html'},
      {i:'03',t:{ru:'Бот заявок в Telegram',en:'Telegram request bot'},d:{ru:'Собирает параметры и передаёт менеджеру готовую заявку. От 400 $.',en:'Collects parameters and hands the manager a ready request. From $400.'}}]},
  cta:{
    title:{ru:'Пришлите STEP одного изделия',en:'Send a STEP file of one product'},
    lead:{ru:'Если модель подходит, первый разрез вернём бесплатно через 3–5 рабочих дней. Если нет — скажем в первый день. Дальше решите сами.',en:'If the model suits, we return the first section view free in 3–5 working days. If not, we say so on day one. You decide what comes next.'},
    btn:{ru:'Отправить файл или написать',en:'Send a file or write to us'}}
};
