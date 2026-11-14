/* КП MONOLITH для Кайнар-АКБ (шаблон editorial). Пакеты и цены: Obsidian, «Пакет услуг — Кайнар-АКБ.md».
   Факты: 24.kz от 23.10.2025 (просмотр 30.10.2026). Ассеты: assets/battery-cut.webp, battery-full.webp, battery-rack.webp, battery-cut.glb. */
window.OFFER={
  slug:'kainar',
  flag:false,
  name:{ru:'Кайнар-АКБ',en:'Kainar-AKB'},
  title:{ru:'Предложение для Кайнар-АКБ — MONOLITH',en:'A proposal for Kainar-AKB — MONOLITH'},
  lang:'ru',
  contact:{brief:'https://monolith.contact/#/brief?src=kainar'},
  theme:{accent:'#FFC21A',onAccent:'#16120C',bg:'#15120E',bg2:'#1E1A14',fg:'#F5F0E4',muted:'#BDB4A2',line:'#3B352B',dark:'#0A0806',onDark:'#F5F0E4',onDarkMuted:'#BDB4A2',slot:'#FFC21A',
         fHead:"'Oswald','Arial Narrow',system-ui,sans-serif",fBody:"'IBM Plex Mono',ui-monospace,Menlo,monospace",fMono:"'IBM Plex Mono',ui-monospace,Menlo,monospace"},
  blocks:['cover','seen','task','make','demo','viewer','steps','pricing','assure','more','next'],

  cover:{
    kicker:{ru:'Коммерческое предложение',en:'Commercial proposal'},
    big:{ru:'кайнар-акб.',en:'kainar-akb.'},
    headline:{ru:'Новая линия батарей для ИБП — с материалами для B2B-покупателя',en:'The new UPS battery line — with materials for the B2B buyer'},
    benefit:{ru:'Каталог новой линейки: ракурсы батареи и сцены применения в ЦОД, на подстанции и в телекоме. Первый комплект: 7–10 дней от получения исходников.',
             en:'A catalogue for the new line: battery views and application scenes in a data centre, a substation and telecom. First set: 7–10 days from receiving your sources.'},
    meta:[{ru:'Октябрь 2026',en:'October 2026'}],
    vert:{ru:'MONOLITH × Кайнар-АКБ · предложение',en:'MONOLITH × Kainar-AKB · proposal'},
    cta:{ru:'Что вы получите',en:'What you get'},
    img:'assets/battery-full.webp'
  },

  seen:{
    title:{ru:'Что мы увидели',en:'What we saw'},
    facts:[
      {n:'100',count:100,label:{ru:'тысяч источников бесперебойного питания в год: мощность новой линии на первом этапе, затем планируют удвоить',en:'thousand UPS units a year: the new line’s capacity at the first stage, with plans to double it later'},
       src:{ru:'24.kz, 23.10.2025 (просмотр 30.10.2026)',en:'24.kz, 23 Oct 2025 (viewed 30 Oct 2026)'}},
      {n:'10',count:10,label:{ru:'млрд тенге собственных средств вложило предприятие в линию. Покупатели: энергетика, телеком, промышленность, соцобъекты',en:'billion tenge of the company’s own funds went into the line. Buyers: energy, telecom, industry, social facilities'},
       src:{ru:'24.kz, 23.10.2025 (просмотр 30.10.2026)',en:'24.kz, 23 Oct 2025 (viewed 30 Oct 2026)'}},
      {n:'3',count:3,label:{ru:'млн аккумуляторов в год: общая мощность завода. Новая линия стала третьим участком под промышленные батареи нового поколения',en:'million batteries a year: the plant’s total capacity. The new line is the third site for next-generation industrial batteries'},
       src:{ru:'24.kz, 23.10.2025 (просмотр 30.10.2026)',en:'24.kz, 23 Oct 2025 (viewed 30 Oct 2026)'}}]},

  task:{
    title:{ru:'Задача',en:'The task'},
    quote:{ru:'Линия запущена. Покупателю из энергетики или телекома нужны не слова, а понятный материал: как выглядит батарея, где она стоит, что держит.',
           en:'The line is running. A buyer in energy or telecom needs more than words: what the battery looks like, where it stands, what it carries.'},
    who:{ru:'Это наша гипотеза по открытым данным, не цитата Кайнар-АКБ. Проверим на созвоне.',en:'This is our hypothesis from public data, not a Kainar-AKB quote. We will check it on a call.'},
    points:[
      {ru:'Кто покупатели новой линейки?',en:'Who are the buyers of the new line?'},
      {ru:'Есть ли 3D-модели батарей? Какие программы и таблицы сейчас заняты в каталоге и заявках?',en:'Do you have 3D models of the batteries? Which programs and spreadsheets handle the catalogue and requests now?'},
      {ru:'Какие экспортные рынки важны?',en:'Which export markets matter?'}]},

  make:{
    title:{ru:'Что сделаем',en:'What we will do'},
    items:[
      {t:{ru:'Каталог линейки',en:'Line catalogue'},fmt:{ru:'6 ракурсов · PNG 4000 px',en:'6 views · PNG 4000 px'},d:{ru:'Единый свет и ракурс на всю линейку. Делаем по фото и каталогу.',en:'One light and angle across the line. Made from photos and the catalogue.'}},
      {t:{ru:'Разрез батареи',en:'Battery section'},fmt:{ru:'PNG 4000 px · нужна сборка',en:'PNG 4000 px · assembly needed'},d:{ru:'Если есть полная 3D-сборка (STEP). Без неё моделируем по чертежам за отдельную плату.',en:'If you have a full 3D assembly (STEP). Without it we model from drawings for a separate fee.'}},
      {t:{ru:'Сцены применения',en:'Application scenes'},fmt:{ru:'ЦОД · подстанция · телеком',en:'data centre · substation · telecom'},d:{ru:'Батарея в стойке и на объекте клиента. Пакет «B2B».',en:'The battery in a rack and on the client’s site. The B2B package.'}},
      {t:{ru:'Ролик технологии',en:'Technology video'},fmt:{ru:'MP4 1080p, 60 с',en:'MP4 1080p, 60 s'},d:{ru:'Показывает батарею и её применение. Для выставки и тендера.',en:'Shows the battery and its use. For exhibitions and tenders.'}},
      {t:{ru:'360° по наружной модели',en:'360° from an exterior model'},fmt:{ru:'вращение на сайте',en:'rotation on the website'},d:{ru:'Не требует внутренних деталей.',en:'Does not need internal parts.'}},
      {t:{ru:'Подбор аккумулятора',en:'Battery selector'},fmt:{ru:'виджет или бот · 2–3 недели',en:'widget or bot · 2–3 weeks'},d:{ru:'Клиент и дилер вводят технику и нагрузку, получают модель.',en:'The client and dealer enter equipment and load, and get a model.'}}]},

  demo:{
    title:{ru:'Так выглядит результат',en:'This is what it looks like'},
    caption:{ru:'Демонстрация на условной модели, не изделие Кайнар-АКБ.',en:'Demonstration on a conditional model, not a Kainar-AKB product.'},
    slots:[
      {t:{ru:'Разрез батареи',en:'Battery section'},ratio:'4:3',src:'assets/battery-cut.webp'},
      {t:{ru:'Общий вид',en:'Exterior'},ratio:'4:3',src:'assets/battery-full.webp'},
      {t:{ru:'Батареи в стойке',en:'Batteries in a rack'},ratio:'16:9',src:'assets/battery-rack.webp'}]},

  viewer:{
    title:{ru:'Разрез в 3D',en:'The section in 3D'},
    ratio:'16:9',
    caption:{ru:'Демонстрация на условной модели, не изделие Кайнар-АКБ. Так работает 3D на вашем сайте, если есть полная сборка.',en:'Demonstration on a conditional model, not a Kainar-AKB product. This is how 3D works on your site if you have a full assembly.'},
    models:[{label:{ru:'Разрез',en:'Section'},src:'assets/battery-cut.glb',poster:'assets/battery-cut.webp',orbit:'35deg 70deg auto'}]},

  steps:{
    title:{ru:'Как работаем',en:'How we work'},
    note:{ru:'Сроки считаются от получения исходников.',en:'Timelines count from receiving your source files.'},
    items:[
      {d:{ru:'День 0',en:'Day 0'},t:{ru:'Присылаете исходники',en:'You send sources'},p:{ru:'Фото и каталог новой линейки. Если есть, 3D-сборка в STEP. NDA подпишем, если нужно.',en:'Photos and the catalogue of the new line. A 3D assembly in STEP, if you have one. We sign an NDA if needed.'}},
      {d:{ru:'День 1',en:'Day 1'},t:{ru:'Проверяем исходник',en:'We check the source'},p:{ru:'Бесплатный пробный кадр делаем, только если исходник подходит: полная сборка со всеми деталями. Иначе скажем сразу.',en:'We make a free trial image only if the source suits: a full assembly with all parts. Otherwise we say so at once.'}},
      {d:{ru:'7–10 дней',en:'7–10 days'},t:{ru:'Каталог линейки',en:'Line catalogue'},p:{ru:'Ракурсы батареи в одном стиле. Два раунда правок.',en:'Battery views in one style. Two revision rounds.'}},
      {d:{ru:'3–4 недели',en:'3–4 weeks'},t:{ru:'B2B-пакет',en:'B2B package'},p:{ru:'Сцены ЦОД, подстанции, телекома и ролик на 60 секунд.',en:'Data centre, substation and telecom scenes and a 60-second video.'}}]},

  pricing:{
    title:{ru:'Три пакета',en:'Three packages'},
    note:{ru:'Цены «от», в долларах США. Оплата в USD индивидуальному предпринимателю в Грузии. Итоговую цену фиксируем в предложении до начала работы. Сроки считаются от получения исходников.',
          en:'“From” prices, in US dollars. Payment in USD to a sole proprietor in Georgia. The final price is fixed in the proposal before work starts. Timelines count from receiving your source files.'},
    plans:[
      {t:{ru:'Подбор аккумулятора',en:'Battery selector'},price:{ru:'от 1 000 $',en:'from $1,000'},time:{ru:'2–3 недели',en:'2–3 weeks'},items:[{ru:'Виджет на сайт или бот',en:'A website widget or a bot'},{ru:'Техника и нагрузка → модель',en:'Equipment and load → model'}]},
      {t:{ru:'Каталог линейки',en:'Line catalogue'},price:{ru:'от 2 000 $',en:'from $2,000'},time:{ru:'7–10 дней',en:'7–10 days'},rec:true,items:[{ru:'6 ракурсов батареи по фото и каталогу',en:'6 battery views from photos and the catalogue'},{ru:'Разрез: если есть полная сборка (STEP)',en:'Section view: if a full assembly (STEP) exists'},{ru:'Под запуск новой линии',en:'Timed for the new line'}]},
      {t:{ru:'B2B-пакет',en:'B2B package'},price:{ru:'от 4 000 $',en:'from $4,000'},time:{ru:'3–4 недели',en:'3–4 weeks'},items:[{ru:'Сцены: ЦОД, подстанция, телеком',en:'Scenes: data centre, substation, telecom'},{ru:'Ролик технологии 60 с',en:'A 60-second technology video'}]}]},

  assure:{
    title:{ru:'Условия',en:'Terms'},
    give:{title:{ru:'Что гарантируем',en:'What we guarantee'},items:[
      {t:{ru:'Кадры снаружи',en:'Exterior views'},d:{ru:'По фото и каталогу, в едином стиле.',en:'From photos and the catalogue, in one style.'}},
      {t:{ru:'Сцены применения',en:'Application scenes'},d:{ru:'ЦОД, подстанция, телеком.',en:'Data centre, substation, telecom.'}},
      {t:{ru:'360° по наружной модели',en:'360° from an exterior model'},d:{ru:'Без внутренних деталей.',en:'Without internal parts.'}},
      {t:{ru:'Файлы остаются у вас',en:'You keep the files'},d:{ru:'Публикуем только с вашего согласия.',en:'We publish only with your consent.'}}]},
    depends:{title:{ru:'Что зависит от исходников',en:'What depends on your sources'},items:[
      {t:{ru:'Разрез и взрыв-схема',en:'Section and exploded view'},d:{ru:'Нужна полная 3D-сборка с внутренними деталями (STEP).',en:'Needs a full 3D assembly with internal parts (STEP).'}},
      {t:{ru:'Нет сборки',en:'No assembly'},d:{ru:'Моделирование по чертежам — за отдельную плату.',en:'Modelling from drawings is a separate fee.'}},
      {t:{ru:'Пробный кадр',en:'Trial image'},d:{ru:'Бесплатный, только если исходник подходит. Решаем на 1-й день.',en:'Free, only if the source suits. Decided on day 1.'}}]}},

  more:{
    title:{ru:'Кроме визуала',en:'Beyond visuals'},
    items:[
      {i:'S_01',t:{ru:'Подбор на сайте и для дилеров',en:'Selector for the site and dealers'},d:{ru:'Обновляем подбор аккумулятора: клиент и дилер получают модель сами.',en:'We update the battery selector: clients and dealers find a model themselves.'}},
      {i:'S_02',t:{ru:'ИИ для заявок и техдокументации',en:'AI for requests and documentation'},d:{ru:'Заявки B2B-клиентов и документы по новой линейке. Пилот на одном процессе от 1 500 $, 2 недели, фиксированная цена.',en:'B2B client requests and documents for the new line. A single-process pilot from $1,500, 2 weeks, fixed price.'}},
      {i:'C_01',t:{ru:'Аудит B2B-продаж',en:'B2B sales audit'},d:{ru:'Смотрим, где ИИ ускорит работу с заявками и КП. Аудит от 600 $, сопровождение от 400 $ в месяц.',en:'We look at where AI can speed up requests and quotes. Audit from $600, support from $400 a month.'}}]},

  next:{
    title:{ru:'Пришлите фото линейки и, если есть, STEP',en:'Send photos of the line and, if you have it, a STEP file'},
    lead:{ru:'За 1 рабочий день скажем, подходит ли исходник для бесплатного пробного кадра. Дальше решите сами.',en:'Within 1 working day we tell you whether the source suits a free trial image. You decide what comes next.'},
    btn:{ru:'Отправить файлы или написать',en:'Send files or write to us'}}
};
