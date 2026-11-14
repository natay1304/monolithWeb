/* Контент КП для Alageum Electric (движок deck, стиль blueprint). Пакеты и цены: Obsidian, «Пакет услуг — Alageum Electric.md».
   Факты: alageum.com/en/kompaniya/o-nas, Forbes.kz, Astana Hub — просмотр 30.10.2026. Ассеты: assets/transformer-{full,cut}.{webp,glb}. */
window.COMPANY={
  slug:'alageum',
  style:'blueprint',
  name:{ru:'Alageum Electric',en:'Alageum Electric'},
  title:{ru:'Предложение для Alageum Electric — MONOLITH',en:'A proposal for Alageum Electric — MONOLITH'},
  /* сталь и тёмно-синий; акцент #2A6496 (белый текст 6.0), светлая версия для тёмных блоков */
  theme:{accent:'#2A6496',accentL:'#86BBE6',onAccent:'#FFFFFF',dark:'#0D1824',dark2:'#14243A',lineDark:'#263A52',bg:'#E7EBF0',bg2:'#DBE1E8',line:'#BAC5D1',fg:'#0D141C',muted:'#475565',
         fHead:"'Chakra Petch',system-ui,sans-serif",fBody:"'IBM Plex Sans',system-ui,sans-serif"},
  ui:{ru:{sticky:'Написать нам',case:'Пример',demo:'Демонстрация на условной модели, не изделие Alageum Electric.'},
      en:{sticky:'Write to us',case:'Example',demo:'Demonstration on a conditional model, not an Alageum Electric product.'}},
  contact:{brief:'https://monolith.contact/#/brief?src=alageum'},
  model:{lazy:true,
    full:'assets/transformer-full.glb',section:'assets/transformer-cut.glb',
    posterFull:'assets/transformer-full.webp',posterSection:'assets/transformer-cut.webp'},
  blocks:['hero','facts','why','deliver','case','steps','pricing','scope','principles','more','about','cta'],
  nav:[{id:'why',t:{ru:'Задача',en:'The task'}},{id:'deliver',t:{ru:'Результат',en:'Deliverables'}},{id:'case',t:{ru:'Пример',en:'Example'}},{id:'pricing',t:{ru:'Цены',en:'Pricing'}}],
  hero:{
    h1:{ru:'Что увидит заказчик тендера, когда ваше предложение лежит рядом с Siemens и ABB',en:'What a tender customer sees when your proposal lies next to Siemens and ABB'},
    lead:{ru:'Трансформатор нельзя привезти на стенд целиком. Показываем его на экране: общий вид, 360°, видео и 3D на сайте. Цель — материалы, сравнимые с теми, что делают мировые бренды.',
          en:'A transformer cannot be brought to a stand whole. We show it on screen: exterior, 360°, video and 3D on your website. The goal is materials comparable to those of global brands.'},
    cta:{ru:'Написать нам',en:'Write to us'},
    cta2:{ru:'Посмотреть пример',en:'See the example'},cta2to:'case',
    tags:[{ru:'Условная модель · не изделие Alageum Electric',en:'Conditional model · not an Alageum Electric product'},{ru:'Разрез',en:'Section'}],
    offer:[
      {t:{ru:'Кадры и 360°',en:'Views and 360°'},d:{ru:'Трансформатор снаружи; разрез, если есть полная сборка',en:'The transformer outside; a section if a full assembly exists'}},
      {t:{ru:'Видео 60 секунд',en:'60-second video'},d:{ru:'Продукт для стенда и тендера',en:'The product for the stand and tenders'}},
      {t:{ru:'3D на сайте',en:'3D on the website'},d:{ru:'Вращение и разрез в браузере',en:'Rotation and section in the browser'}},
      {t:{ru:'Тендерный отдел',en:'Tender team'},d:{ru:'Быстрее готовить ТКП',en:'Prepare quotes faster'}}]},
  facts:[
    {n:'№1',label:{ru:'так назвал Alageum Electric Forbes.kz в заголовке статьи: крупнейший производитель трансформаторов на постсоветском пространстве',en:'how Forbes.kz titled its article on Alageum Electric: the largest transformer maker in the post-Soviet space'},src:{ru:'Forbes.kz, заголовок статьи, просмотр 30.10.2026, дата публикации не проверена',en:'Forbes.kz, article headline, viewed 30 Oct 2026, publication date not checked'}},
    {n:'14',count:14,label:{ru:'действующих заводов и около 4 500 сотрудников; экспорт в страны СНГ и на Ближний Восток',en:'operating plants and about 4,500 employees; exports to CIS countries and the Middle East'},src:{ru:'alageum.com, «О нас», просмотр 30.10.2026',en:'alageum.com, “About us”, viewed 30 Oct 2026'}},
    {n:'2026',count:2026,label:{ru:'компания названа платиновым партнёром форума Digital Qazaqstan 2026',en:'the company is named a platinum partner of the Digital Qazaqstan 2026 forum'},src:{ru:'Astana Hub, заголовок статьи, просмотр 30.10.2026',en:'Astana Hub, article headline, viewed 30 Oct 2026'}}],
  why:{
    title:{ru:'Тендер выигрывают материалом, который понятен за минуту',en:'A tender is won by material that is clear in a minute'},
    paras:[
      {ru:'Заказчик читает десяток предложений. Фото трансформатора снаружи у всех похожи. Устройство и качество видны на кадре изнутри, на 360° и в видео.',
       en:'A customer reads a dozen proposals. Photos of a transformer from outside look alike. Design and quality show in an inside view, in 360° and in video.'},
      {ru:'Вторая часть: сама сборка ТКП. Это гипотеза, и мы хотим проверить её на созвоне.',
       en:'The second part is assembling the quote itself. This is a hypothesis, and we want to check it on a call.'}],
    note:{ru:'Мы не видели ваших внутренних материалов. Siemens и ABB здесь ориентир по уровню подачи, а не утверждение о конкуренции в каждом тендере.',en:'We have not seen your internal materials. Siemens and ABB here are a benchmark for presentation level, not a claim about competition in every tender.'},
    tasks:[
      {ru:'Сколько времени уходит на одно ТКП и где команда теряет больше всего?',en:'How long does one quote take and where does the team lose most time?'},
      {ru:'Откуда берутся техописания: из базы, из старых ТКП или из писем?',en:'Where do technical descriptions come from: a database, old quotes or emails?'},
      {ru:'Есть ли 3D-сборки изделий и какие программы сейчас используются?',en:'Do you have 3D assemblies of products and which programs are in use now?'}]},
  deliver:{
    title:{ru:'Что входит в предложение',en:'What the offer includes'},
    items:[
      {t:{ru:'Кадры и 360°',en:'Views and 360°'},d:{ru:'Трансформатор снаружи по фото и каталогу, 360° по наружной модели. Разрез и взрыв-схема: если есть полная 3D-сборка (STEP).',en:'The transformer outside from photos and the catalogue, 360° from an exterior model. Section and exploded view: if a full 3D assembly (STEP) exists.'}},
      {t:{ru:'Видео продукта 60 секунд',en:'60-second product video'},d:{ru:'Ролик для стенда, тендера и сайта.',en:'A clip for the stand, tenders and the website.'}},
      {t:{ru:'3D-просмотрщик на сайте',en:'3D viewer on the website'},d:{ru:'Заказчик вращает изделие сам.',en:'The customer rotates the product themselves.'}},
      {t:{ru:'Выставочный пакет',en:'Exhibition package'},d:{ru:'Кадры и петли для экранов стенда.',en:'Views and loops for stand screens.'}},
      {t:{ru:'Пилот для тендерного отдела',en:'Tender team pilot'},d:{ru:'Аудит процесса ТКП и пилот агента, который собирает ТКП и техописания из базы.',en:'An audit of the quote process and an agent pilot that assembles quotes and technical descriptions from a database.'}}]},
  case:{
    title:{ru:'Пример: разрез трансформатора',en:'Example: a transformer section'},
    lead:{ru:'Покрутите условную модель и переключитесь на разрез. Так будет выглядеть ваше изделие на сайте, если у нас будет полная сборка.',en:'Rotate the conditional model and switch to the section. This is how your product can look on your website if we have a full assembly.'},
    frames:[
      {src:'assets/transformer-cut.webp',cap:{ru:'Разрез: устройство внутри',en:'Section: the design inside'}},
      {src:'assets/transformer-full.webp',cap:{ru:'Общий вид',en:'Exterior'}}]},
  steps:{
    title:{ru:'От файлов до первых материалов',en:'From files to first materials'},
    items:[
      {d:{ru:'День 0',en:'Day 0'},t:{ru:'Присылаете исходники',en:'You send sources'},p:{ru:'Фото и каталог изделия, при наличии STEP, обезличенное ТКП для процесса. NDA подпишем.',en:'Photos and the catalogue of a product, a STEP file if you have one, an anonymised quote for the process. We sign an NDA.'}},
      {d:{ru:'День 1',en:'Day 1'},t:{ru:'Проверяем исходник',en:'We check the source'},p:{ru:'Пробный кадр бесплатно, только если исходник подходит: полная сборка с внутренними деталями. Иначе скажем сразу.',en:'A trial image is free only if the source suits: a full assembly with internal parts. Otherwise we say so at once.'}},
      {d:{ru:'7 дней',en:'7 days'},t:{ru:'Кадры и 360°',en:'Views and 360°'},p:{ru:'Одна модель. Срок считаем от получения исходников.',en:'One model. Timing counts from receiving your sources.'}},
      {d:{ru:'3–4 недели',en:'3–4 weeks'},t:{ru:'Пилот для тендерного отдела',en:'Tender team pilot'},p:{ru:'Аудит процесса и пилот агента.',en:'A process audit and an agent pilot.'}}]},
  pricing:{
    title:{ru:'Пакеты и цены',en:'Packages and prices'},
    note:{ru:'Цены «от», в долларах США. Оплата в USD индивидуальному предпринимателю в Грузии. Итоговую цену фиксируем в предложении до начала работы. Сроки считаются от получения исходников.',en:'“From” prices, in US dollars. Payment in USD to a sole proprietor in Georgia. The final price is fixed in the proposal before work starts. Timelines count from receiving your source files.'},
    plans:[
      {t:{ru:'Проба',en:'Trial'},price:{ru:'0 $',en:'$0'},items:[{ru:'1 пробный кадр, только если исходник подходит',en:'1 trial image, only if the source suits'},{ru:'Решаем в первый день',en:'Decided on day one'}]},
      {t:{ru:'Кадры и 360°',en:'Views and 360°'},price:{ru:'от 1 800 $',en:'from $1,800'},items:[{ru:'Одна модель: кадры и 360°',en:'One model: views and 360°'},{ru:'Разрез при наличии полной сборки',en:'Section if a full assembly exists'},{ru:'7 дней',en:'7 days'}]},
      {t:{ru:'Тендерный отдел',en:'Tender team'},price:{ru:'от 2 100 $',en:'from $2,100'},rec:true,items:[{ru:'Аудит процесса ТКП',en:'Audit of the quote process'},{ru:'Пилот: агент собирает ТКП и техописания из базы · 3–4 недели',en:'Pilot: an agent assembles quotes and descriptions from a database · 3–4 weeks'}]},
      {t:{ru:'Уровень мировых брендов',en:'Global-brand level'},price:{ru:'от 6 500 $',en:'from $6,500'},items:[{ru:'Видео продукта 60 с',en:'60-second product video'},{ru:'3D-просмотрщик на сайте',en:'3D viewer on the website'},{ru:'Выставочный пакет · 1–1,5 месяца',en:'Exhibition package · 1–1.5 months'}]}]},
  scope:{
    title:{ru:'Что зависит от нас, а что — от исходников',en:'What depends on us and what depends on the sources'},
    sure:[
      {ru:'Кадры снаружи и сцены применения по фото и каталогу',en:'Exterior views and application scenes from photos and the catalogue'},
      {ru:'360° по наружной модели',en:'360° from an exterior model'},
      {ru:'Аудит процесса ТКП',en:'An audit of the quote process'}],
    extra:[
      {ru:'Полная 3D-сборка (STEP) → разрез и взрыв-схема',en:'A full 3D assembly (STEP) → section and exploded view'},
      {ru:'Нет сборки → моделирование по чертежам за отдельную плату',en:'No assembly → modelling from drawings for a separate fee'},
      {ru:'Ваши ТКП и описания в базе → агент собирает ТКП из неё',en:'Your quotes and descriptions in a database → the agent builds quotes from it'}]},
  principles:{
    title:{ru:'Условия',en:'Terms'},
    items:[
      {t:{ru:'Геометрия из вашей модели',en:'Geometry from your model'},d:{ru:'Ничего не дорисовываем «для красоты».',en:'Nothing is redrawn “for looks”.'}},
      {t:{ru:'Сроки — от исходников',en:'Timing starts with the sources'},d:{ru:'Считаем от получения подходящих файлов. Подходят ли они, говорим в первый день.',en:'We count from receiving suitable files, and say on day one whether they suit.'}},
      {t:{ru:'Два раунда правок на этап',en:'Two edit rounds per stage'},d:{ru:'Заранее понятно, сколько правок входит в цену.',en:'It is clear in advance how many edits the price includes.'}},
      {t:{ru:'Права у вас, NDA до данных',en:'You own the files, NDA first'},d:{ru:'Публикуем только с вашего согласия.',en:'We publish only with your consent.'}}]},
  more:{
    title:{ru:'Кроме визуала: софт, процессы, консалтинг',en:'Beyond visuals: software, processes, consulting'},
    items:[
      {i:'01',t:{ru:'Сайт и база для тендеров',en:'A site and database for tenders'},d:{ru:'3D-каталог и техописания в одном месте.',en:'A 3D catalogue and technical descriptions in one place.'}},
      {i:'02',t:{ru:'Сборка ТКП агентом',en:'Quote assembly by an agent'},d:{ru:'ИИ собирает черновик из базы, сотрудник проверяет. Пилот на одном процессе от 1 500 $, 2 недели, фиксированная цена.',en:'AI assembles a draft from the database, an employee reviews it. A single-process pilot from $1,500, 2 weeks, fixed price.'}},
      {i:'03',t:{ru:'Аудит и сопровождение',en:'Audit and support'},d:{ru:'Для тендерного отдела. Аудит от 600 $, сопровождение от 400 $ в месяц.',en:'For the tender team. Audit from $600, support from $400 a month.'}}]},
  about:{
    title:{ru:'MONOLITH — техническая графика и софт для промышленных продаж',en:'MONOLITH — technical graphics and software for industrial sales'},
    paras:[
      {ru:'Небольшая студия: между вами и тем, кто делает работу, нет прослоек. Работаем с данными, которые у вас уже есть.',en:'A small studio: there are no layers between you and the person doing the work. We work from data you already have.'},
      {ru:'Пока показываем демонстрационные кейсы на условных моделях, поэтому первую работу для вас начинаем с проверки исходника.',en:'For now we show demonstration cases on conditional models, which is why your first work starts with a source check.'}]},
  cta:{
    title:{ru:'Расскажите, как сейчас собираете ТКП.',en:'Tell us how you build quotes today.'},
    lead:{ru:'Или пришлите фото и каталог одного трансформатора. Скажем, что можно сделать, и в первый день проверим исходник.',en:'Or send photos and the catalogue of one transformer. We will say what can be done and check the source on day one.'},
    btn:{ru:'Написать нам',en:'Write to us'}}
};
