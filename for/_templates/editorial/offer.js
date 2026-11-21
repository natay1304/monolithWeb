/* КП MONOLITH — шаблон editorial. Весь контент здесь. Скопируйте папку, замените тексты, цифры и тему.
   Строки — {ru,en}. Демо-компания «Компания X» вымышлена: все факты и цены — примеры (demo:true).
   Схема одинакова у всех трёх шаблонов (editorial / index / halftone): можно сменить шаблон, перенеся этот файл. */
window.OFFER={
  slug:'company-x',
  demo:true,                       /* true — сверху плашка «демо-шаблон». Перед отправкой: false */
  name:{ru:'Компания X',en:'Company X'},
  title:{ru:'Предложение для Компании X — MONOLITH',en:'A proposal for Company X — MONOLITH'},
  lang:'ru',                       /* язык по умолчанию; ?lang=en в ссылке переключает */
  contact:{brief:'https://monolith.contact/#/brief?src=company-x'},
  /* тема: ключи → CSS-переменные (--accent, --bg, --dark …). Акцент для текста ≥3:1 на фоне, белый на акценте ≥4.5:1 */
  theme:{accent:'#C42F18',onAccent:'#FFFFFF',bg:'#DAD6CC',bg2:'#CFCABE',fg:'#1A1613',muted:'#4B443D',line:'#A9A296',dark:'#17110F',onDark:'#F2EDE4',onDarkMuted:'#BDB4A8',slot:'#EFE35A'},
  /* порядок и состав блоков; id совпадает с якорями */
  blocks:['cover','seen','task','make','demo','steps','pricing','assure','more','next'],

  /* 0. Обложка: MONOLITH × Компания + одна главная выгода (слово «ИИ» здесь не используем) */
  cover:{
    kicker:{ru:'Коммерческое предложение',en:'Commercial proposal'},
    big:{ru:'компания x.',en:'company x.'},
    headline:{ru:'Ваш агрегат понятен закупщику до звонка',en:'Your unit is clear to the buyer before the call'},
    benefit:{ru:'Разрез, взрыв-схема и 3D по вашей CAD-модели. Первый кадр: 3–5 рабочих дней после получения исходников.',
             en:'Section view, exploded view and 3D from your CAD model. First image: 3–5 working days after we receive your source files.'},
    meta:[{ru:'КП № 001',en:'Proposal no. 001'},{ru:'Октябрь 2026',en:'October 2026'}],
    vert:{ru:'MONOLITH × Компания X · предложение',en:'MONOLITH × Company X · proposal'},
    cta:{ru:'Что вы получите',en:'What you get'},
    img:'../../_shared/assets/img/ball-valve-full.webp'   /* изображение клиента; пусто — пунктирная заглушка */
  },

  /* 1. Что мы увидели: ровно 3 факта, у каждого источник (ссылка/документ + дата) */
  seen:{
    title:{ru:'Что мы увидели',en:'What we saw'},
    facts:[
      {n:'12',count:12,label:{ru:'позиций в каталоге. Все показаны одним ракурсом снаружи: что внутри, не видно',en:'catalogue items. All shown from one exterior angle: what is inside is not visible'},
       src:{ru:'Сайт Компании X, раздел «Каталог», [дата просмотра] · демо-значение',en:'Company X website, “Catalogue”, [date viewed] · demo value'}},
      {n:'3',count:3,label:{ru:'документа на позицию: паспорт, чертёж, прайс. Устройство изделия нигде не показано',en:'documents per item: datasheet, drawing, price list. The product design is not shown anywhere'},
       src:{ru:'Сайт Компании X, карточка изделия, [дата просмотра] · демо-значение',en:'Company X website, product page, [date viewed] · demo value'}},
      {n:'×2',pre:'×',count:2,label:{ru:'рост выпуска за два года: показывать изделие нужно быстрее, чем раньше',en:'output growth in two years: the product has to be shown faster than before'},
       src:{ru:'Годовой отчёт Компании X, [год], стр. [N] · демо-значение',en:'Company X annual report, [year], p. [N] · demo value'}}]},

  /* 2. Задача их словами (формулировка из публичных материалов; на созвоне уточняем) */
  task:{
    title:{ru:'Задача',en:'The task'},
    quote:{ru:'Закупщик по фото не видит, где седло и какая стенка. Приходится слать чертежи или ехать на объект.',
           en:'A buyer cannot see the seat or the wall thickness in a photo. We have to send drawings or travel to the site.'},
    who:{ru:'Формулировка по открытым материалам Компании X. Уточним на коротком созвоне.',en:'Wording based on Company X public materials. We will confirm it on a short call.'},
    points:[
      {ru:'Показать устройство без выезда и без чертежа',en:'Show the design without a site visit or a drawing'},
      {ru:'Один стиль на весь ряд, а не набор разных ракурсов',en:'One style across the whole range, not a mix of angles'},
      {ru:'Материал, который работает на сайте, в тендере и на выставке',en:'Material that works on the site, in tenders and at exhibitions'}]},

  /* 3. Что сделаем: форматы с техническими параметрами */
  make:{
    title:{ru:'Что сделаем',en:'What we will do'},
    items:[
      {t:{ru:'Разрез по оси потока',en:'Section along the flow axis'},fmt:{ru:'PNG 4000 px, прозрачный фон',en:'PNG 4000 px, transparent'},d:{ru:'Седло, шар или клин, шток, толщина стенки. Режется в модели, а не рисуется поверх.',en:'Seat, ball or wedge, stem, wall thickness. Cut in the model, not drawn on top.'}},
      {t:{ru:'Взрыв-схема',en:'Exploded view'},fmt:{ru:'PNG + SVG, нумерация деталей',en:'PNG + SVG, numbered parts'},d:{ru:'Разнос по оси сборки, номера позиций как в руководстве.',en:'Spread along the assembly axis, item numbers as in the manual.'}},
      {t:{ru:'3D в браузере',en:'3D in the browser'},fmt:{ru:'GLB до 8 МБ + код вставки',en:'GLB up to 8 MB + embed code'},d:{ru:'Вращается мышью и пальцем, переключается на разрез.',en:'Rotates by mouse and touch, switches to section.'}},
      {t:{ru:'Серия по типоразмерам',en:'Series by size'},fmt:{ru:'5–12 позиций, один свет',en:'5–12 items, one light setup'},d:{ru:'Единый ракурс и свет: каталог читается как одна серия.',en:'One angle and light: the catalogue reads as one series.'}},
      {t:{ru:'Видео принципа работы',en:'Operating principle video'},fmt:{ru:'MP4 1080p, 10–15 с',en:'MP4 1080p, 10–15 s'},d:{ru:'Для выставки, тендера и соцсетей. Без звука или с титрами.',en:'For exhibitions, tenders and social media. Silent or captioned.'}},
      {t:{ru:'Сцена на объекте',en:'On-site scene'},fmt:{ru:'PNG 3840×2160',en:'PNG 3840×2160'},d:{ru:'Изделие в узле или на площадке под рынок, для презентации.',en:'The product in an assembly or on site, for a market presentation.'}}]},

  /* 4. Демо: слоты. Есть src — картинка, нет — пунктирная заглушка под рендер. Подпись обязательна */
  demo:{
    title:{ru:'Так выглядит результат',en:'This is what it looks like'},
    caption:{ru:'Демонстрация на условной модели. Это не изделие Компании X.',en:'Demonstration on a conditional model. This is not a Company X product.'},
    slots:[
      {t:{ru:'Разрез 3/4',en:'Three-quarter section'},ratio:'4:3',src:'../../_shared/assets/img/ball-valve-section.webp'},
      {t:{ru:'Взрыв-схема',en:'Exploded view'},ratio:'3:4'},
      {t:{ru:'Общий вид',en:'Exterior'},ratio:'16:9',src:'../../_shared/assets/img/ball-valve-full.webp'},
      {t:{ru:'3D в браузере',en:'3D in the browser'},ratio:'1:1'},
      {t:{ru:'Видео 12 с',en:'Video 12 s'},ratio:'16:9'}]},

  /* 5. Как работаем: сроки от получения исходников */
  steps:{
    title:{ru:'Как работаем',en:'How we work'},
    note:{ru:'Сроки считаются от получения исходников.',en:'Timelines count from receiving your source files.'},
    items:[
      {d:{ru:'День 0',en:'Day 0'},t:{ru:'Присылаете исходники',en:'You send source files'},p:{ru:'STEP или IGES одного изделия, чертёж, список материалов. NDA подпишем, если нужно.',en:'STEP or IGES of one product, a drawing, a material list. We sign an NDA if needed.'}},
      {d:{ru:'День 1',en:'Day 1'},t:{ru:'Смотрим модель',en:'We review the model'},p:{ru:'Проверяем сборку и возвращаем список вопросов. Если исходник подходит, делаем бесплатный пробный кадр.',en:'We check the assembly and return a list of questions. If the source fits, we make a free trial image.'}},
      {d:{ru:'Дни 2–5',en:'Days 2–5'},t:{ru:'Первый кадр',en:'First image'},p:{ru:'Один разрез по вашей модели. Два раунда правок.',en:'One section view from your model. Two revision rounds.'}},
      {d:{ru:'Дни 6–15',en:'Days 6–15'},t:{ru:'Выбранный пакет',en:'The chosen package'},p:{ru:'Остальные кадры, 3D и серия. Срок фиксируем в предложении.',en:'Remaining views, 3D and the series. The timeline is fixed in the proposal.'}}]},

  /* 6. Пакеты: вход / основной (rec:true) / расширенный; цены «от» */
  pricing:{
    title:{ru:'Три пакета',en:'Three packages'},
    note:{ru:'Демо-цены. Цена фиксируется в предложении до начала работы и зависит от числа деталей и сложности сборки.',en:'Demo prices. The price is fixed in the proposal before work starts and depends on part count and assembly complexity.'},
    plans:[
      {t:{ru:'Вход',en:'Entry'},price:{ru:'от 1 800 $',en:'from $1,800'},time:{ru:'5 рабочих дней',en:'5 working days'},items:[{ru:'1 изделие: общий вид и 3 кадра разреза',en:'1 product: exterior and 3 section views'},{ru:'Один раунд правок',en:'One revision round'}]},
      {t:{ru:'Основной',en:'Core'},price:{ru:'от 4 800 $',en:'from $4,800'},time:{ru:'10 рабочих дней',en:'10 working days'},rec:true,items:[{ru:'До 5 изделий в одном стиле',en:'Up to 5 products in one style'},{ru:'Взрыв-схемы и 3D для сайта',en:'Exploded views and 3D for the website'},{ru:'Два раунда правок',en:'Two revision rounds'}]},
      {t:{ru:'Расширенный',en:'Extended'},price:{ru:'от 9 800 $',en:'from $9,800'},time:{ru:'15–20 рабочих дней',en:'15–20 working days'},items:[{ru:'До 12 изделий серией',en:'Up to 12 products as a series'},{ru:'3 видео по 10–15 с и сцены на объекте',en:'3 videos of 10–15 s and on-site scenes'},{ru:'Поддержка 3 месяца: новые изделия',en:'3 months of support: new products'}]}]},

  /* 7. Две колонки: гарантируем / зависит от исходников */
  assure:{
    title:{ru:'Условия',en:'Terms'},
    give:{title:{ru:'Что гарантируем',en:'What we guarantee'},items:[
      {t:{ru:'Геометрия из вашей модели',en:'Geometry from your model'},d:{ru:'Ничего не дорисовываем «для красоты». Дефект исходника показываем как есть.',en:'Nothing is redrawn “for looks”. A source defect is shown as it is.'}},
      {t:{ru:'Сверка с чертежом',en:'Check against the drawing'},d:{ru:'Разрез можно приложить к чертежу без расхождений.',en:'A section view can be laid over the drawing with no discrepancies.'}},
      {t:{ru:'Единый свет и ракурс',en:'One light and angle'},d:{ru:'Весь ряд снят одним сетапом.',en:'The whole range uses one setup.'}},
      {t:{ru:'Файлы остаются у вас',en:'You keep the files'},d:{ru:'Публикуем только с вашего согласия.',en:'We publish only with your consent.'}}]},
    depends:{title:{ru:'Что зависит от исходников',en:'What depends on your source files'},items:[
      {t:{ru:'Полнота сборки',en:'Assembly completeness'},d:{ru:'Нет внутренних деталей в STEP — разрез покажет только то, что есть.',en:'No internal parts in the STEP file — the section shows only what exists.'}},
      {t:{ru:'Материалы и цвета',en:'Materials and colours'},d:{ru:'Нужны маркировка, RAL или образцы покраски.',en:'We need markings, RAL codes or paint samples.'}},
      {t:{ru:'Сроки',en:'Timelines'},d:{ru:'Считаются от получения полного комплекта файлов.',en:'Count from receiving the full set of files.'}},
      {t:{ru:'Пробный кадр',en:'Trial image'},d:{ru:'Бесплатный, только если исходник подходит. Решаем на 1-й день.',en:'Free, only if the source fits. Decided on day 1.'}}]}},

  /* 8. Кроме визуала: софт и консалтинг (здесь уже можно говорить про ИИ) */
  more:{
    title:{ru:'Кроме визуала',en:'Beyond visuals'},
    items:[
      {i:'S_07',t:{ru:'Калькулятор и конфигуратор',en:'Calculator and configurator'},d:{ru:'Клиент вводит параметры и сразу видит состав и ориентир цены.',en:'The client enters parameters and instantly sees the spec and a price estimate.'}},
      {i:'S_08',t:{ru:'Бот заявок в Telegram',en:'Telegram request bot'},d:{ru:'Собирает параметры и передаёт менеджеру готовую заявку. От 400 $.',en:'Collects parameters and hands the manager a ready request. From $400.'}},
      {i:'C_01',t:{ru:'Разбор процессов с ИИ',en:'AI process review'},d:{ru:'Находим, где команда тратит часы на ручной поиск и сборку КП, и показываем, что автоматизировать первым.',en:'We find where the team spends hours on manual search and quote assembly, and show what to automate first.'}}]},

  /* 9. Один следующий шаг */
  next:{
    title:{ru:'Пришлите один файл модели',en:'Send one model file'},
    lead:{ru:'За 1 рабочий день скажем, подходит ли исходник для бесплатного пробного кадра. Дальше решите сами.',en:'Within 1 working day we tell you whether the source fits a free trial image. You decide what comes next.'},
    btn:{ru:'Отправить файл или написать',en:'Send a file or write to us'}},

  /* подписи к строкам оглавления (шаблон index) */
  toc:{seen:{ru:'Три факта с источниками',en:'Three facts with sources'},task:{ru:'Ваша задача',en:'Your task'},make:{ru:'Форматы и параметры',en:'Formats and specs'},demo:{ru:'Результат на условной модели',en:'Result on a conditional model'},steps:{ru:'Сроки от исходников',en:'Timelines from source files'},pricing:{ru:'Три пакета, цены «от»',en:'Three packages, “from” prices'},assure:{ru:'Гарантии и зависимости',en:'Guarantees and dependencies'},more:{ru:'Софт и консалтинг',en:'Software and consulting'},next:{ru:'Один шаг',en:'One step'}},

  /* карточки изделий клиента (шаблон halftone); src — фото клиента, пусто — заглушка */
  productsTitle:{ru:'Ваши изделия в единой подаче',en:'Your products in one style'},
  products:[
    {t:{ru:'Изделие А',en:'Product A'},d:{ru:'Серия 1 · DN 50–300',en:'Series 1 · DN 50–300'},src:'../../_shared/assets/img/ball-valve-full.webp'},
    {t:{ru:'Изделие Б',en:'Product B'},d:{ru:'Серия 2 · DN 100–600',en:'Series 2 · DN 100–600'},src:'../../_shared/assets/img/ball-valve-section-side.webp'},
    {t:{ru:'Изделие В',en:'Product C'},d:{ru:'Серия 3 · DN 25–150',en:'Series 3 · DN 25–150'}}]
};
