/* Контент КП для UZKABEL (движок deck, стиль blueprint). Источник пакетов и цен: Obsidian, «Пакет услуг — UZKABEL.md».
   Факты: uzkabel.uz (просмотр 16.11.2026), Kun.uz от 13.02.2026. Ассеты: assets/cable-steps.webp, cable-section.webp, cable.glb. */
window.COMPANY={
  slug:'uzkabel',
  style:'blueprint',
  name:{ru:'UZKABEL',en:'UZKABEL'},
  title:{ru:'Предложение для UZKABEL — MONOLITH',en:'A proposal for UZKABEL — MONOLITH'},
  /* медь и графит; акцент #B04A12 (белый текст 5.4), светлая версия для тёмных блоков */
  theme:{accent:'#B04A12',accentL:'#F0A070',onAccent:'#FFFFFF',dark:'#1B1613',dark2:'#261F1B',lineDark:'#41372F',bg:'#ECE9E4',bg2:'#E0DCD5',line:'#B9B1A6',fg:'#1C1815',muted:'#4F4842',
         fHead:"'Barlow Semi Condensed','Arial Narrow',system-ui,sans-serif",fBody:"'IBM Plex Sans',system-ui,sans-serif"},
  ui:{ru:{sticky:'Получить пробный разрез',demo:'Демонстрация на условной модели, не изделие UZKABEL.',case:'Кадр'},
      en:{sticky:'Get a trial section',demo:'Demonstration on a conditional model, not a UZKABEL product.',case:'View'}},
  contact:{brief:'https://monolith.contact/#/brief?src=uzkabel',stickyTo:'contact',site:'https://monolith.contact'},
  noDate:true,noFooterNote:true,
  model:{lazy:true,section:'assets/cable.glb',posterSection:'assets/cable-section.webp'},
  blocks:['hero','more','facts','why','deliver','case','steps','pricing','scope','principles','about','cta'],
  nav:[{id:'why',t:{ru:'Задача',en:'The task'}},{id:'deliver',t:{ru:'Результат',en:'Deliverables'}},{id:'case',t:{ru:'Разрезы',en:'Sections'}},{id:'pricing',t:{ru:'Цены',en:'Pricing'}}],
  hero:{
    eyebrow:{ru:'Предложение для UZKABEL · разрезы марок и подбор кабеля по ведомости',en:'A proposal for UZKABEL · cable section views and selection from a schedule'},
    tags:[{ru:'Условная модель · не изделие UZKABEL',en:'Conditional model · not a UZKABEL product'},{ru:'Разрез по слоям',en:'Layered section'}],
    h1:{ru:'Сделаем разрезы марок и подбор кабеля по ведомости с черновиком КП',en:'We will make cable section views and selection from a schedule with a draft quote'},
    lead:{ru:'Мы — MONOLITH, студия технической графики и софта. Разрезы марок для каталога и подбор кабеля по ведомости. Пилот подбора — 2–3 недели от получения данных.',
          en:'We are MONOLITH, a studio of technical graphics and software. Cable section views for the catalogue and cable selection from a customer’s schedule. Selection pilot: 2–3 weeks from receiving your data.'},
    cta:{ru:'Получить пробный разрез',en:'Get a trial section'},ctaTo:'contact',
    cta2:{ru:'Покрутить кабель',en:'Rotate the cable'},
    offer:[
      {t:{ru:'Разрезы марок',en:'Section views'},d:{ru:'По сечению из каталога (DWG или PDF)',en:'From the catalogue section (DWG or PDF)'}},
      {t:{ru:'Каталог для экспорта',en:'Export catalogue'},d:{ru:'EN и RU, серия по маркам',en:'EN and RU, series by mark'}},
      {t:{ru:'Подбор по ведомости',en:'Selection from a schedule'},d:{ru:'Агент выдаёт марки и черновик КП',en:'An agent returns marks and a draft quote'}},
      {t:{ru:'3D в браузере',en:'3D in the browser'},d:{ru:'Вращение и разрез на странице марки',en:'Rotation and section on a mark page'}}]},
  facts:[
    {n:'3000+',count:3000,label:{ru:'марок кабельной продукции, по данным главной страницы сайта. Сверять такой список с ведомостью заказчика вручную долго',en:'marks of cable products, per the site’s home page. Matching a list this size to a customer’s schedule by hand takes time'},src:{ru:'uzkabel.uz, главная страница',en:'uzkabel.uz, home page'},url:'https://uzkabel.uz'},
    {n:'400',count:400,label:{ru:'млн $: почти столько Узбекистан потратил в 2025 году на импорт высоковольтного кабеля и изолированных медных шин. Рынок замещения импорта',en:'million USD: roughly what Uzbekistan spent in 2025 on imported high-voltage cable and insulated copper busbars. An import-substitution market'},src:{ru:'Kun.uz, 13.02.2026',en:'Kun.uz, 13 Feb 2026'},url:'https://kun.uz/en/news/2026/02/13/uzbekistan-to-boost-local-cable-production-and-cut-imports'},
    {n:'25',count:25,label:{ru:'тыс. тонн кабельной продукции в год: проектная мощность нового завода Enco Group. Завод строит другая компания, не UZKABEL',en:'thousand tonnes of cable a year: the design capacity of the new Enco Group plant. The plant is built by another company, not UZKABEL'},src:{ru:'Kun.uz, 13.02.2026',en:'Kun.uz, 13 Feb 2026'},url:'https://kun.uz/en/news/2026/02/13/uzbekistan-to-boost-local-cable-production-and-cut-imports'}],
  why:{
    title:{ru:'Ведомость на сотню позиций, а ответ нужен сегодня',en:'A schedule with a hundred lines, and an answer is needed today'},
    paras:[
      {ru:'Нужно найти марки, проверить сечения и собрать КП, а покупатель ждёт ответа сегодня. Мы предполагаем, что на это уходит много времени менеджеров.',en:'We need to find marks, check cross-sections and build a quote, and the buyer wants an answer today. We assume this takes a lot of managers’ time.'},
      {ru:'Это гипотеза по открытым данным, не цитата UZKABEL. Мы хотим проверить её на коротком созвоне.',en:'This is a hypothesis from public data, not a UZKABEL quote. We want to check it on a short call.'}],
    note:{ru:'Данные из открытых источников:',en:'Data from public sources:'},
    links:[{t:{ru:'uzkabel.uz: сайт компании',en:'uzkabel.uz: the company website'},url:'https://uzkabel.uz'},{t:{ru:'Kun.uz: местное производство кабеля',en:'Kun.uz: local cable production'},url:'https://kun.uz/en/news/2026/02/13/uzbekistan-to-boost-local-cable-production-and-cut-imports'}],
    tasks:[
      {ru:'Сколько заявок приходит с ведомостями и как вы разбираете их сейчас?',en:'How many requests arrive with schedules, and how do you process them now?'},
      {ru:'Какие программы и таблицы заняты в каталоге, заявках и КП? Что раздражает больше всего?',en:'Which programs and spreadsheets handle the catalogue, requests and quotes? What annoys you most?'},
      {ru:'Какие экспортные рынки важны в ближайший год?',en:'Which export markets matter in the coming year?'}]},
  deliver:{
    title:{ru:'Что получите',en:'What you get'},
    items:[
      {t:{ru:'Разрезы марок',en:'Cable section views'},d:{ru:'Разрез по сечению из каталога (DWG или PDF): видно слои кабеля. 5 марок, PNG 4000 px.',en:'A section from the catalogue drawing (DWG or PDF): the cable layers are visible. 5 marks, PNG 4000 px.'}},
      {t:{ru:'Каталог для экспорта',en:'Export catalogue'},d:{ru:'Единый вид по маркам и сечениям. Описания из ваших текстов. EN и RU.',en:'One look across marks and cross-sections. Descriptions from your texts. EN and RU.'}},
      {t:{ru:'Сцены применения',en:'Application scenes'},d:{ru:'Кабель в лотке, в траншее, на подстанции. Для сайта и презентаций. PNG 3840×2160.',en:'Cable in a tray, a trench, a substation. For the website and presentations. PNG 3840×2160.'}},
      {t:{ru:'Подбор по ведомости',en:'Selection from a schedule'},d:{ru:'Кабельная ведомость заказчика превращается в список подходящих марок. Агент, пилот 2–3 недели.',en:'A customer’s cable schedule turns into a list of suitable marks. An agent, 2–3 week pilot.'}},
      {t:{ru:'Черновик КП',en:'Draft quote'},d:{ru:'К списку марок приложен черновик в PDF или таблице. Менеджер проверяет и отправляет.',en:'A draft in PDF or spreadsheet comes with the list of marks. A manager reviews and sends it.'}},
      {t:{ru:'3D в браузере',en:'3D in the browser'},d:{ru:'Вращение и разрез на странице марки. Нужна 3D-сборка от вас, иначе только кадры.',en:'Rotation and section on a mark page. Needs your 3D assembly, otherwise views only.'}}]},
  case:{
    compact:true,ratio:'4/3',
    title:{ru:'Так выглядит разрез',en:'This is what a section looks like'},
    lead:{ru:'Условный кабель: ступенчатая зачистка и разрез по слоям. По вашему сечению сделаем такие же кадры с вашими марками.',en:'A conditional cable: a stepped strip and a layered section. From your section we make the same views with your marks.'},
    frames:[
      {src:'assets/cable-steps.webp',cap:{ru:'Ступенчатая зачистка слоёв',en:'Stepped layer strip'}},
      {src:'assets/cable-section.webp',cap:{ru:'Разрез по слоям',en:'Layered section'}}]},
  steps:{
    title:{ru:'От сечений до первого разреза',en:'From sections to the first view'},
    items:[
      {d:{ru:'День 0',en:'Day 0'},t:{ru:'Присылаете исходники',en:'You send sources'},p:{ru:'Сечения 1–2 марок (DWG или PDF), каталог марок и 1–2 обезличенные ведомости. NDA подпишем, если нужно.',en:'Sections of 1–2 marks (DWG or PDF), the mark catalogue and 1–2 anonymised schedules. We sign an NDA if needed.'}},
      {d:{ru:'День 1',en:'Day 1'},t:{ru:'Проверяем файлы',en:'We check the files'},p:{ru:'Говорим, подходит ли сечение для бесплатного пробного разреза. Если нет, скажем сразу.',en:'We tell you whether the section suits a free trial image. If not, we say so right away.'}},
      {d:{ru:'5–7 дней',en:'5–7 days'},t:{ru:'Разрезы марок',en:'Section views'},p:{ru:'Пять разрезов по пакету. Два раунда правок.',en:'Five section views as in the package. Two revision rounds.'}},
      {d:{ru:'2–3 недели',en:'2–3 weeks'},t:{ru:'Пилот подбора',en:'Selection pilot'},p:{ru:'Агент разбирает ведомость и выдаёт марки и черновик КП. Проверяем на ваших примерах.',en:'The agent reads a schedule and returns marks and a draft quote. We test it on your examples.'}}]},
  pricing:{
    title:{ru:'Три пакета',en:'Three packages'},
    note:{ru:'Цены «от», в долларах США. Оплата в USD. Сроки считаются от получения исходников.',en:'“From” prices, in US dollars. Payment in USD. Timelines count from receiving your source files.'},
    plans:[
      {t:{ru:'Разрезы марок',en:'Section views'},price:{ru:'от 1 200 $',en:'from $1,200'},items:[{ru:'5 разрезов марок кабеля',en:'5 cable mark section views'},{ru:'Наглядный вход в каталог',en:'A visual start for the catalogue'},{ru:'5–7 дней',en:'5–7 days'}]},
      {t:{ru:'Подбор по ведомости',en:'Selection from a schedule'},price:{ru:'от 1 500 $',en:'from $1,500'},rec:true,items:[{ru:'Пилот агента: кабельная ведомость → подходящие марки',en:'An agent pilot: cable schedule → suitable marks'},{ru:'Черновик КП',en:'A draft quote'},{ru:'Ответ на заявку за минуты — цель пилота',en:'An answer to a request within minutes is the pilot’s goal'},{ru:'2–3 недели',en:'2–3 weeks'}]},
      {t:{ru:'Каталог для экспорта',en:'Export catalogue'},price:{ru:'от 200 $ за марку',en:'from $200 per mark'},items:[{ru:'Серия по маркам и сечениям, EN и RU',en:'A series by mark and cross-section, EN and RU'},{ru:'Сцены применения',en:'Application scenes'},{ru:'1 месяц',en:'1 month'}]}]},
  more:{
    label:{ru:'Что мы делаем',en:'What we do'},
    title:{ru:'Что мы можем сделать для UZKABEL',en:'What we can do for UZKABEL'},
    lead:{ru:'MONOLITH — студия технической графики, софта и ИИ для промышленных продаж. Чем мы можем быть вам полезны:',en:'MONOLITH is a studio of technical graphics, software and AI for industrial sales. How we can be useful to you:'},
    items:[
      {i:'01',t:{ru:'Разрезы марок',en:'Cable section views'},d:{ru:'Слои кабеля по сечению из каталога (DWG или PDF).',en:'Cable layers from the catalogue section (DWG or PDF).'}},
      {i:'02',t:{ru:'Каталог для экспорта',en:'Export catalogue'},d:{ru:'Серия по маркам и сечениям, описания на русском и английском.',en:'A series by mark and cross-section, descriptions in Russian and English.'}},
      {i:'03',t:{ru:'Сцены применения',en:'Application scenes'},d:{ru:'Кабель в лотке, в траншее, на подстанции.',en:'Cable in a tray, a trench, a substation.'}},
      {i:'04',t:{ru:'Подбор по ведомости',en:'Selection from a schedule'},d:{ru:'Кабельная ведомость заказчика превращается в список марок.',en:'A customer’s cable schedule turns into a list of marks.'}},
      {i:'05',t:{ru:'Черновик КП',en:'Draft quote'},d:{ru:'К списку марок приложен черновик, менеджер проверяет и отправляет.',en:'A draft comes with the list of marks, a manager reviews and sends it.'}},
      {i:'06',t:{ru:'3D и разрез на странице марки',en:'3D and section on a mark page'},d:{ru:'Вращение и разрез в браузере, если есть 3D-сборка.',en:'Rotation and section in the browser, if a 3D assembly exists.'}},
      {i:'07',t:{ru:'Видео о производстве',en:'Production video'},d:{ru:'Ролик о производстве и контроле качества для сайта и выставок.',en:'A clip on production and quality control for the site and exhibitions.'}},
      {i:'08',t:{ru:'Подбор марок на сайте',en:'Mark selection on the site'},d:{ru:'Каталог с подбором по маркам и сечениям вместо длинного списка.',en:'A catalogue with selection by mark and cross-section instead of a long list.'},href:'../../cases/casecalculator.html'},
      {i:'09',t:{ru:'ИИ-агент для ведомостей',en:'AI agent for schedules'},d:{ru:'Обработка кабельных ведомостей заказчиков.',en:'Processing of customers’ cable schedules.'}},
      {i:'10',t:{ru:'Аудит отдела продаж',en:'Sales audit'},d:{ru:'Аудит отдела продаж и сопровождение.',en:'A sales audit and ongoing support.'}}]},
  scope:{
    title:{ru:'Что зависит от нас, а что — от исходников',en:'What depends on us and what depends on the sources'},
    sure:[
      {ru:'Разрезы по сечениям из каталога (DWG или PDF), слои не дорисовываем',en:'Sections from catalogue drawings (DWG or PDF), layers are not redrawn'},
      {ru:'Сцены применения по каталожным данным и вашим фото',en:'Application scenes from catalogue data and your photos'},
      {ru:'Описания из ваших текстов: характеристики не придумываем',en:'Descriptions from your texts: we do not invent specifications'}],
    extra:[
      {ru:'3D-сборка изделия → взрыв-схема и 360°',en:'A 3D assembly → exploded view and 360°'},
      {ru:'База продукции → описания обновляются автоматически',en:'A product database → descriptions update automatically'},
      {ru:'Прайс и правила → конфигуратор для дилеров',en:'Price list and rules → a dealer configurator'}]},
  principles:{
    title:{ru:'Условия',en:'Terms'},
    items:[
      {t:{ru:'Геометрия из вашего сечения',en:'Geometry from your section'},d:{ru:'Берём DWG или PDF сечения. Слои не дорисовываем.',en:'We take the DWG or PDF section. Layers are not redrawn.'}},
      {t:{ru:'Сроки — от исходников',en:'Timing starts with the sources'},d:{ru:'Считаем от получения подходящих файлов. Подходят ли они, говорим в первый день.',en:'We count from receiving suitable files, and say on day one whether they suit.'}},
      {t:{ru:'Два раунда правок на этап',en:'Two edit rounds per stage'},d:{ru:'Заранее понятно, сколько правок входит в цену.',en:'It is clear in advance how many edits the price includes.'}},
      {t:{ru:'Права у вас, NDA до данных',en:'You own the files, NDA first'},d:{ru:'Файлы остаются у вас. Публикуем только с вашего согласия.',en:'Files stay with you. We publish only with your consent.'}}]},
  about:{
    title:{ru:'MONOLITH — техническая графика и софт для промышленных продаж',en:'MONOLITH — technical graphics and software for industrial sales'},
    paras:[
      {ru:'Небольшая студия: между вами и тем, кто делает работу, нет прослоек. Работаем с данными, которые у вас уже есть.',en:'A small studio: there are no layers between you and the person doing the work. We work from data you already have.'},
      {ru:'Пока показываем демонстрационные кейсы на условных моделях, поэтому первую работу для вас начинаем с проверки исходника.',en:'For now we show demonstration cases on conditional models, which is why your first work starts with a source check.'}]},
  cta:{
    title:{ru:'Пришлите сечение одной марки и пример ведомости.',en:'Send a section of one mark and a sample schedule.'},
    lead:{ru:'Заполните короткий бриф — вернём пробный разрез. Если файлы не подойдут, напишем, что необходимо.',en:'Fill in a short brief and we will return a trial section. If the files do not suit, we will write what is needed.'},
    btn:{ru:'Заполнить бриф',en:'Fill in the brief'},
    or:{ru:'или напишите нам на почту:',en:'or write to us by email:'},mail:'mail@monolith.contact'}
};
