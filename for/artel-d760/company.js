/* Контент КП для Artel (движок deck, стиль editorial). Пакеты и цены: Obsidian, «Пакет услуг — Artel.md».
   Факты: artelelectronics.com (просмотр 16.11.2026), PR Newswire от 12.07.2021. Ассеты: assets/scene-*.webp, ac-studio.webp, ac.glb. */
window.COMPANY={
  slug:'artel',
  style:'editorial',
  name:{ru:'Artel',en:'Artel'},
  title:{ru:'Предложение для Artel — MONOLITH',en:'A proposal for Artel — MONOLITH'},
  /* тёплые терракота и крем; акцент #C93F18 (белый текст 4.9), светлая версия для тёмных блоков */
  theme:{accent:'#C93F18',accentL:'#F58A64',onAccent:'#FFFFFF',dark:'#2A1B14',dark2:'#36241B',lineDark:'#4F392E',bg:'#FBF3E8',bg2:'#F3E4CF',line:'#E0CBB0',fg:'#2A1B14',muted:'#66524A',
         fHead:"'Nunito','Trebuchet MS',system-ui,sans-serif",fBody:"'Nunito',system-ui,sans-serif"},
  ui:{ru:{sticky:'Получить пробный кадр',demo:'Демонстрация на условной модели, не изделие Artel.',case:'Сцена'},
      en:{sticky:'Get a trial image',demo:'Demonstration on a conditional model, not an Artel product.',case:'Scene'}},
  contact:{brief:'https://monolith.contact/#/brief?src=artel',stickyTo:'contact',site:'https://monolith.contact'},
  noDate:true,noFooterNote:true,
  model:{},
  blocks:['hero','more','facts','why','deliver','case','steps','pricing','scope','principles','about','cta'],
  nav:[{id:'why',t:{ru:'Задача',en:'The task'}},{id:'deliver',t:{ru:'Результат',en:'Deliverables'}},{id:'case',t:{ru:'Сцены',en:'Scenes'}},{id:'pricing',t:{ru:'Цены',en:'Pricing'}}],
  hero:{
    eyebrow:{ru:'Предложение для Artel · визуал и каталог для экспортных рынков',en:'A proposal for Artel · visuals and a catalogue for export markets'},
    viewer:false,img:'assets/scene-tashkent.webp',
    tags:[{ru:'Условная модель · интерьер, Ташкент',en:'Conditional model · interior, Tashkent'}],
    h1:{ru:'Покажем один продукт в интерьерах разных экспортных рынков',en:'We will show one product in the interiors of different export markets'},
    lead:{ru:'Мы — MONOLITH, студия технической графики. 6 сцен одного продукта в интерьерах разных стран по вашим фото и каталожным данным. Первые сцены — через 7–10 дней от получения исходников.',
          en:'We are MONOLITH, a technical graphics studio. 6 scenes of one product in the interiors of different countries from your photos and catalogue data. First scenes: 7–10 days from receiving your sources.'},
    cta:{ru:'Получить пробный кадр',en:'Get a trial image'},ctaTo:'contact',
    cta2:{ru:'Посмотреть сцены',en:'See the scenes'},cta2to:'case',
    offer:[
      {t:{ru:'Lifestyle-сцены',en:'Lifestyle scenes'},d:{ru:'Один продукт в интерьерах разных стран',en:'One product in interiors of different countries'}},
      {t:{ru:'Серия кадров',en:'A frame series'},d:{ru:'Единый вид для маркетплейсов',en:'One look for marketplaces'}},
      {t:{ru:'Описания на языках',en:'Multilingual copy'},d:{ru:'Из ваших текстов',en:'From your texts'}},
      {t:{ru:'Бот поддержки',en:'Support bot'},d:{ru:'По инструкциям и гарантии',en:'From manuals and warranty'}}]},
  facts:[
    {n:'33',count:33,label:{ru:'товарные категории бытовой техники; сайт доступен на узбекском, русском и английском',en:'categories of home appliances; the site is available in Uzbek, Russian and English'},src:{ru:'artelelectronics.com',en:'artelelectronics.com'},url:'https://artelelectronics.com/ru'},
    {n:'1020',count:1020,label:{ru:'позиций (SKU) в статистике на главной странице сайта',en:'SKUs in the statistics on the site’s home page'},src:{ru:'artelelectronics.com',en:'artelelectronics.com'},url:'https://artelelectronics.com/ru'},
    {n:'B',label:{ru:'рейтинг Fitch Ratings, присвоенный в июле 2021 (тогда с прогнозом «стабильный»): первая частная производственная компания Узбекистана с рейтингом одного из «большой тройки»',en:'a Fitch Ratings rating assigned in July 2021 (outlook then stable): the first private manufacturer in Uzbekistan rated by one of the “big three”'},src:{ru:'PR Newswire, 12.07.2021 (на дату публикации)',en:'PR Newswire, 12 Jul 2021 (as of publication)'},url:'https://www.prnewswire.com/ru/press-releases/artel-stala-pervoi-chastnoi-proizvodstvennoi-kompaniei-v-uzbekistane-poluchivshei-mezhdunarodnyi-kreditnyi-reiting-820324788.html'}],
  why:{
    title:{ru:'Моделей много, рынков много, и у каждого свой интерьер и язык',en:'Many models, many markets, and each has its own interior and language'},
    paras:[
      {ru:'На каждом рынке покупатель хочет видеть технику в привычном интерьере и читать описание на своём языке. Делать это вручную для сотен позиций долго.',
       en:'In each market the buyer wants to see the appliance in a familiar interior and read the description in their language. Doing that by hand for hundreds of items takes long.'},
      {ru:'Мы предполагаем, что вам нужен единый вид каталога и быстрые сцены под каждый рынок. Это гипотеза, и мы хотим проверить её на созвоне.',
       en:'We assume you need one catalogue look and quick scenes for each market. This is a hypothesis, and we want to check it on a call.'}],
    note:{ru:'Данные из открытых источников:',en:'Data from public sources:'},
    links:[{t:{ru:'artelelectronics.com',en:'artelelectronics.com'},url:'https://artelelectronics.com/ru'},{t:{ru:'PR Newswire: рейтинг Fitch, 2021',en:'PR Newswire: Fitch rating, 2021'},url:'https://www.prnewswire.com/ru/press-releases/artel-stala-pervoi-chastnoi-proizvodstvennoi-kompaniei-v-uzbekistane-poluchivshei-mezhdunarodnyi-kreditnyi-reiting-820324788.html'}],
    tasks:[
      {ru:'Сколько моделей и рынков сейчас в работе?',en:'How many models and markets are in work now?'},
      {ru:'Где хранится база продукции и кто пишет карточки на языках рынков?',en:'Where is the product database kept and who writes the cards in the markets’ languages?'},
      {ru:'Какие программы и таблицы заняты в контенте и поддержке? Что раздражает больше всего?',en:'Which programs and spreadsheets handle content and support? What annoys you most?'}]},
  deliver:{
    title:{ru:'Что получите',en:'What you get'},
    items:[
      {t:{ru:'Lifestyle-сцены',en:'Lifestyle scenes'},d:{ru:'Один продукт в интерьерах разных стран по фото и каталожным данным. 6 сцен, PNG 3840×2160.',en:'One product in interiors of different countries from photos and catalogue data. 6 scenes, PNG 3840×2160.'}},
      {t:{ru:'Серия кадров',en:'A frame series'},d:{ru:'Каталог для маркетплейсов: единый свет и ракурс на все модели. 10+ моделей.',en:'A marketplace catalogue: one light and angle for all models. 10+ models.'}},
      {t:{ru:'Серийный рендер всех SKU',en:'Series render of all SKUs'},d:{ru:'Если есть 3D-модели, рендерим все позиции одним сетапом, включая 360°.',en:'With 3D models we render all items in one setup, including 360°.'}},
      {t:{ru:'Описания на языках рынков',en:'Descriptions in market languages'},d:{ru:'Карточки на языках рынков. Характеристики берём только из ваших материалов.',en:'Cards in the languages of the markets. Specifications come only from your materials.'}},
      {t:{ru:'Бот поддержки',en:'A support bot'},d:{ru:'Отвечает покупателям по вашим инструкциям и гарантии. Пилот 3 недели.',en:'Answers buyers from your manuals and warranty. A 3-week pilot.'}},
      {t:{ru:'3D в браузере',en:'3D in the browser'},d:{ru:'Покупатель крутит продукт на странице карточки. Нужна 3D-модель (GLB).',en:'The buyer rotates the product on the card page. Needs a 3D model (GLB).'}}]},
  case:{
    compact:true,ratio:'4/3',
    title:{ru:'Один продукт — три интерьера',en:'One product — three interiors'},
    lead:{ru:'Условная модель кондиционера в интерьерах разных регионов. По вашим фото сделаем такие же сцены с вашими изделиями.',en:'A conditional air-conditioner in interiors of different regions. From your photos we make the same scenes with your products.'},
    frames:[
      {src:'assets/scene-tashkent.webp',cap:{ru:'Интерьер, Ташкент',en:'Interior, Tashkent'}},
      {src:'assets/scene-europe.webp',cap:{ru:'Интерьер, Европа',en:'Interior, Europe'}},
      {src:'assets/scene-gulf.webp',cap:{ru:'Интерьер, страны Залива',en:'Interior, Gulf states'}},
      {src:'assets/ac-studio.webp',cap:{ru:'Студийный кадр',en:'Studio shot'}}]},
  steps:{
    title:{ru:'От исходников до первых сцен',en:'From sources to first scenes'},
    items:[
      {d:{ru:'День 0',en:'Day 0'},t:{ru:'Присылаете исходники',en:'You send sources'},p:{ru:'Фото и каталожные данные одной модели, список рынков и языков, тексты описаний. NDA подпишем, если нужно.',en:'Photos and catalogue data of one model, the list of markets and languages, description texts. We sign an NDA if needed.'}},
      {d:{ru:'День 1',en:'Day 1'},t:{ru:'Проверяем исходник',en:'We check the source'},p:{ru:'Бесплатный пробный кадр делаем, только если исходник подходит. Иначе скажем сразу.',en:'We make a free trial image only if the source suits. Otherwise we say so at once.'}},
      {d:{ru:'7–10 дней',en:'7–10 days'},t:{ru:'6 сцен',en:'6 scenes'},p:{ru:'Один продукт в интерьерах разных стран. Два раунда правок.',en:'One product in interiors of different countries. Two revision rounds.'}},
      {d:{ru:'3–4 недели',en:'3–4 weeks'},t:{ru:'Каталог 10+ моделей',en:'A 10+ model catalogue'},p:{ru:'Единый вид для маркетплейсов. Карточки и бот — пилот 3 недели.',en:'One look for marketplaces. Cards and a bot are a 3-week pilot.'}}]},
  pricing:{
    title:{ru:'Три пакета',en:'Three packages'},
    note:{ru:'Цены «от», в долларах США. Оплата в USD. Сроки считаются от получения исходников.',en:'“From” prices, in US dollars. Payment in USD. Timelines count from receiving your source files.'},
    plans:[
      {t:{ru:'Карточки и бот',en:'Cards and a bot'},price:{ru:'от 1 500 $',en:'from $1,500'},items:[{ru:'Описания на языках рынков',en:'Descriptions in market languages'},{ru:'Бот ответов покупателям по инструкциям',en:'A bot answering buyers from manuals'},{ru:'3 недели',en:'3 weeks'}]},
      {t:{ru:'Lifestyle-сцены',en:'Lifestyle scenes'},price:{ru:'от 1 500 $',en:'from $1,500'},rec:true,items:[{ru:'6 сцен одного продукта в интерьерах разных стран',en:'6 scenes of one product in interiors of different countries'},{ru:'Вход с понятным результатом',en:'A start with a clear result'},{ru:'7–10 дней',en:'7–10 days'}]},
      {t:{ru:'Каталог для маркетплейсов',en:'Marketplace catalogue'},price:{ru:'от 400 $ за модель',en:'from $400 per model'},items:[{ru:'Единый вид 10+ моделей',en:'One look across 10+ models'},{ru:'Ракурсы; 360° при наличии 3D-моделей',en:'Views; 360° if 3D models exist'},{ru:'3–4 недели',en:'3–4 weeks'}]}]},
  more:{
    label:{ru:'Что мы делаем',en:'What we do'},
    title:{ru:'Что мы можем сделать для Artel',en:'What we can do for Artel'},
    lead:{ru:'MONOLITH — студия технической графики, софта и ИИ для промышленных продаж. Чем мы можем быть вам полезны:',en:'MONOLITH is a studio of technical graphics, software and AI for industrial sales. How we can be useful to you:'},
    items:[
      {i:'01',t:{ru:'Lifestyle-сцены',en:'Lifestyle scenes'},d:{ru:'Один продукт в интерьерах разных стран по фото и каталожным данным.',en:'One product in interiors of different countries from photos and catalogue data.'}},
      {i:'02',t:{ru:'Каталог для маркетплейсов',en:'Marketplace catalogue'},d:{ru:'Единый свет и ракурс на все модели, 360° при наличии 3D.',en:'One light and angle for all models, 360° if 3D exists.'}},
      {i:'03',t:{ru:'Описания на языках рынков',en:'Descriptions in market languages'},d:{ru:'Карточки на узбекском, русском, английском и других языках из ваших текстов.',en:'Cards in Uzbek, Russian, English and other languages from your texts.'}},
      {i:'04',t:{ru:'Бот поддержки',en:'Support bot'},d:{ru:'Отвечает покупателям по инструкциям и гарантии.',en:'Answers buyers from manuals and warranty.'}},
      {i:'05',t:{ru:'3D и AR на карточке',en:'3D and AR on the card'},d:{ru:'Покупатель вращает технику и примеряет её в своём интерьере.',en:'The buyer rotates the appliance and tries it in their own interior.'}},
      {i:'06',t:{ru:'Видео продукта',en:'Product video'},d:{ru:'Ролик о технике для сайта, соцсетей и розницы.',en:'A clip about the appliance for the site, social media and retail.'}},
      {i:'07',t:{ru:'Лендинги под кампанию',en:'Campaign landing pages'},d:{ru:'Страница под рынок или акцию и набор материалов для каналов в одном стиле.',en:'A page for a market or promotion and a channel kit in one style.'}},
      {i:'08',t:{ru:'Материалы для розницы и выставок',en:'Retail and exhibition materials'},d:{ru:'Кадры и петли для экранов, широкоформатные материалы.',en:'Views and loops for screens, wide-format materials.'}},
      {i:'09',t:{ru:'Карточки на языках рынков с ИИ',en:'Cards in market languages with AI'},d:{ru:'ИИ готовит описания, сотрудник проверяет.',en:'AI drafts descriptions, an employee reviews.'}},
      {i:'10',t:{ru:'Аудит маркетинга и сервиса',en:'Marketing and service audit'},d:{ru:'Смотрим, какие задачи команды можно отдать ИИ.',en:'We look at which team tasks can be handed to AI.'}}]},
  scope:{
    title:{ru:'Что зависит от нас, а что — от исходников',en:'What depends on us and what depends on the sources'},
    sure:[
      {ru:'Сцены применения по фото и каталожным данным',en:'Application scenes from photos and catalogue data'},
      {ru:'Серия кадров в едином виде по фото и каталогу',en:'A frame series in one look from photos and the catalogue'},
      {ru:'Описания из ваших текстов: характеристики не придумываем',en:'Descriptions from your texts: we do not invent specifications'}],
    extra:[
      {ru:'3D-модели → единый серийный рендер всех SKU',en:'3D models → one series render of all SKUs'},
      {ru:'Доступ к базе продукции → карточки синхронизируются автоматически',en:'Access to the product database → cards sync automatically'},
      {ru:'Пробный кадр бесплатный, только если исходник подходит; решаем на первый день',en:'The trial image is free only if the source suits; decided on day one'}]},
  principles:{
    title:{ru:'Условия',en:'Terms'},
    items:[
      {t:{ru:'Данные из вашего каталога',en:'Data from your catalogue'},d:{ru:'Сцены и описания строим по вашим фото и текстам. Ничего не придумываем.',en:'Scenes and descriptions are built from your photos and texts. Nothing is invented.'}},
      {t:{ru:'Сроки — от исходников',en:'Timing starts with the sources'},d:{ru:'Считаем от получения подходящих файлов. Подходят ли они, говорим в первый день.',en:'We count from receiving suitable files, and say on day one whether they suit.'}},
      {t:{ru:'Два раунда правок на этап',en:'Two edit rounds per stage'},d:{ru:'Заранее понятно, сколько правок входит в цену.',en:'It is clear in advance how many edits the price includes.'}},
      {t:{ru:'Права у вас, NDA до данных',en:'You own the files, NDA first'},d:{ru:'Файлы остаются у вас. Публикуем только с вашего согласия.',en:'Files stay with you. We publish only with your consent.'}}]},
  about:{
    title:{ru:'MONOLITH — техническая графика и софт для промышленных продаж',en:'MONOLITH — technical graphics and software for industrial sales'},
    paras:[
      {ru:'Небольшая студия: между вами и тем, кто делает работу, нет прослоек. Работаем с данными, которые у вас уже есть.',en:'A small studio: there are no layers between you and the person doing the work. We work from data you already have.'},
      {ru:'Пока показываем демонстрационные кейсы на условных моделях, поэтому первую работу для вас начинаем с проверки исходника.',en:'For now we show demonstration cases on conditional models, which is why your first work starts with a source check.'}]},
  cta:{
    title:{ru:'Пришлите фото и каталожные данные одной модели.',en:'Send photos and catalogue data of one model.'},
    lead:{ru:'Заполните короткий бриф — вернём пробный кадр. Если исходник не подойдёт, напишем, что необходимо.',en:'Fill in a short brief and we will return a trial image. If the source does not suit, we will write what is needed.'},
    btn:{ru:'Заполнить бриф',en:'Fill in the brief'},
    or:{ru:'или напишите нам на почту:',en:'or write to us by email:'},mail:'mail@monolith.contact'}
};
