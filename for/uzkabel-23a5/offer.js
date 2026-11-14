/* КП MONOLITH для UZKABEL (шаблон index). Источник пакетов и цен: Obsidian, «Пакет услуг — UZKABEL.md».
   Факты: uzkabel.uz (просмотр 30.10.2026), Kun.uz от 13.02.2026. Ассеты: assets/cable-steps.webp, cable-section.webp, cable.glb. */
window.OFFER={
  slug:'uzkabel',
  flag:false,
  name:{ru:'UZKABEL',en:'UZKABEL'},
  title:{ru:'Предложение для UZKABEL — MONOLITH',en:'A proposal for UZKABEL — MONOLITH'},
  lang:'ru',
  contact:{brief:'https://monolith.contact/#/brief?src=uzkabel'},
  theme:{accent:'#B04A12',onAccent:'#FFFFFF',bg:'#ECE9E4',bg2:'#E0DCD5',fg:'#1C1815',muted:'#4F4842',line:'#B9B1A6',dark:'#1B1613',onDark:'#F3EEE7',onDarkMuted:'#C4B9AC',slot:'#E8B27C',
         fHead:"'Barlow Semi Condensed','Arial Narrow',system-ui,sans-serif",fBody:"'IBM Plex Sans',system-ui,sans-serif",fMono:"'IBM Plex Mono',ui-monospace,Menlo,monospace"},
  blocks:['cover','toc','seen','task','make','demo','viewer','steps','pricing','assure','more','next'],

  cover:{
    kicker:{ru:'Коммерческое предложение',en:'Commercial proposal'},
    big:{ru:'uzkabel.',en:'uzkabel.'},
    headline:{ru:'Кабельная ведомость заказчика — и черновик КП за минуты',en:'A customer’s cable schedule — and a draft quote within minutes'},
    benefit:{ru:'Разрезы марок для каталога и подбор кабеля по ведомости. Пилот подбора: 2–3 недели от получения данных.',
             en:'Cable section views for the catalogue and cable selection from a customer’s schedule. Selection pilot: 2–3 weeks from receiving your data.'},
    meta:[{ru:'Октябрь 2026',en:'October 2026'}],
    vert:{ru:'MONOLITH × UZKABEL · предложение',en:'MONOLITH × UZKABEL · proposal'},
    cta:{ru:'Что вы получите',en:'What you get'},
    img:'assets/cable-section.webp'
  },

  seen:{
    title:{ru:'Что мы увидели',en:'What we saw'},
    facts:[
      {n:'3000+',count:3000,suf:'+',label:{ru:'марок кабеля и провода в ассортименте, по данным сайта. Сверять такой список с ведомостью заказчика вручную долго',en:'cable and wire marks in the range, per the website. Matching a list this size to a customer’s schedule by hand takes time'},
       src:{ru:'uzkabel.uz, главная страница, просмотр 30.10.2026',en:'uzkabel.uz, home page, viewed 30 Oct 2026'}},
      {n:'400',count:400,label:{ru:'млн $: почти столько Узбекистан потратил в 2025 году на импорт высоковольтного кабеля и медных шин. Рынок замещения импорта',en:'million USD: roughly what Uzbekistan spent in 2025 on imported high-voltage cable and copper busbars. An import-substitution market'},
       src:{ru:'Kun.uz, 13.02.2026',en:'Kun.uz, 13 Feb 2026'}},
      {n:'25',count:25,label:{ru:'тыс. тонн кабельной продукции в год: мощность нового завода Enco Group в Ташкентской области, цель — экспорт в ЕС и СНГ. Рядом растёт конкуренция',en:'thousand tonnes of cable a year: the capacity of the new Enco Group plant in the Tashkent region, aimed at EU and CIS exports. Competition is growing nearby'},
       src:{ru:'Kun.uz, 13.02.2026 (завод строит другая компания, не UZKABEL)',en:'Kun.uz, 13 Feb 2026 (the plant is built by another company, not UZKABEL)'}}]},

  task:{
    title:{ru:'Задача',en:'The task'},
    quote:{ru:'Пришла ведомость на сотню позиций. Нужно найти марки, проверить сечения и собрать КП, а покупатель ждёт ответа сегодня.',
           en:'A schedule with a hundred lines has arrived. We need to find marks, check cross-sections and build a quote, and the buyer wants an answer today.'},
    who:{ru:'Это наша гипотеза по открытым данным, не цитата UZKABEL. Проверим на коротком созвоне.',en:'This is our hypothesis from public data, not a UZKABEL quote. We will check it on a short call.'},
    points:[
      {ru:'Сколько заявок приходит с ведомостями и как вы разбираете их сейчас?',en:'How many requests arrive with schedules, and how do you process them now?'},
      {ru:'Какие программы и таблицы заняты в каталоге, заявках и КП? Что раздражает больше всего?',en:'Which programs and spreadsheets handle the catalogue, requests and quotes? What annoys you most?'},
      {ru:'Какие экспортные рынки важны в ближайший год?',en:'Which export markets matter in the coming year?'}]},

  make:{
    title:{ru:'Что сделаем',en:'What we will do'},
    items:[
      {t:{ru:'Разрезы марок',en:'Cable section views'},fmt:{ru:'5 марок · PNG 4000 px',en:'5 marks · PNG 4000 px'},d:{ru:'Разрез по сечению из каталога (DWG или PDF): видно слои кабеля.',en:'A section from the catalogue drawing (DWG or PDF): the cable layers are visible.'}},
      {t:{ru:'Каталог для экспорта',en:'Export catalogue'},fmt:{ru:'EN + RU · серия по маркам',en:'EN + RU · series by mark'},d:{ru:'Единый вид по маркам и сечениям. Описания из ваших текстов.',en:'One look across marks and cross-sections. Descriptions from your texts.'}},
      {t:{ru:'Сцены применения',en:'Application scenes'},fmt:{ru:'PNG 3840×2160',en:'PNG 3840×2160'},d:{ru:'Кабель в лотке, в траншее, на подстанции. Для сайта и презентаций.',en:'Cable in a tray, a trench, a substation. For the website and presentations.'}},
      {t:{ru:'Подбор по ведомости',en:'Selection from a schedule'},fmt:{ru:'агент · пилот 2–3 недели',en:'agent · 2–3 week pilot'},d:{ru:'Кабельная ведомость заказчика превращается в список подходящих марок.',en:'A customer’s cable schedule turns into a list of suitable marks.'}},
      {t:{ru:'Черновик КП',en:'Draft quote'},fmt:{ru:'PDF или таблица',en:'PDF or spreadsheet'},d:{ru:'К списку марок приложен черновик. Менеджер проверяет и отправляет.',en:'A draft comes with the list of marks. A manager reviews and sends it.'}},
      {t:{ru:'3D в браузере',en:'3D in the browser'},fmt:{ru:'GLB, если есть 3D-сборка',en:'GLB, if a 3D assembly exists'},d:{ru:'Вращение и разрез на странице марки. Нужна 3D-сборка от вас, иначе только кадры.',en:'Rotation and section on a mark page. Needs your 3D assembly, otherwise views only.'}}]},

  demo:{
    title:{ru:'Так выглядит разрез',en:'This is what a section looks like'},
    caption:{ru:'Демонстрация на условной модели, не изделие UZKABEL.',en:'Demonstration on a conditional model, not a UZKABEL product.'},
    slots:[
      {t:{ru:'Ступенчатая зачистка слоёв',en:'Stepped layer strip'},ratio:'4:3',src:'assets/cable-steps.webp'},
      {t:{ru:'Разрез по слоям',en:'Layered section'},ratio:'3:4',src:'assets/cable-section.webp'}]},

  viewer:{
    title:{ru:'Кабель в 3D',en:'The cable in 3D'},
    ratio:'16:9',
    caption:{ru:'Демонстрация на условной модели, не изделие UZKABEL. Так выглядит 3D на странице марки, если у вас есть 3D-сборка.',en:'Demonstration on a conditional model, not a UZKABEL product. This is how 3D looks on a mark page if you have a 3D assembly.'},
    models:[{label:{ru:'Кабель',en:'Cable'},src:'assets/cable.glb',poster:'assets/cable-section.webp',orbit:'35deg 70deg auto'}]},

  steps:{
    title:{ru:'Как работаем',en:'How we work'},
    note:{ru:'Сроки считаются от получения исходников.',en:'Timelines count from receiving your source files.'},
    items:[
      {d:{ru:'День 0',en:'Day 0'},t:{ru:'Присылаете исходники',en:'You send sources'},p:{ru:'Сечения 1–2 марок (DWG или PDF), каталог марок и 1–2 обезличенные ведомости. NDA подпишем, если нужно.',en:'Sections of 1–2 marks (DWG or PDF), the mark catalogue and 1–2 anonymised schedules. We sign an NDA if needed.'}},
      {d:{ru:'День 1',en:'Day 1'},t:{ru:'Проверяем файлы',en:'We check the files'},p:{ru:'Говорим, подходит ли сечение для бесплатного пробного разреза. Если нет, скажем сразу.',en:'We tell you whether the section suits a free trial image. If not, we say so right away.'}},
      {d:{ru:'5–7 дней',en:'5–7 days'},t:{ru:'Разрезы марок',en:'Section views'},p:{ru:'Пять разрезов по пакету. Два раунда правок.',en:'Five section views as in the package. Two revision rounds.'}},
      {d:{ru:'2–3 недели',en:'2–3 weeks'},t:{ru:'Пилот подбора',en:'Selection pilot'},p:{ru:'Агент разбирает ведомость и выдаёт марки и черновик КП. Проверяем на ваших примерах.',en:'The agent reads a schedule and returns marks and a draft quote. We test it on your examples.'}}]},

  pricing:{
    title:{ru:'Три пакета',en:'Three packages'},
    note:{ru:'Цены «от», в долларах США. Оплата в USD индивидуальному предпринимателю в Грузии. Итоговую цену фиксируем в предложении до начала работы. Сроки считаются от получения исходников.',
          en:'“From” prices, in US dollars. Payment in USD to a sole proprietor in Georgia. The final price is fixed in the proposal before work starts. Timelines count from receiving your source files.'},
    plans:[
      {t:{ru:'Разрезы марок',en:'Section views'},price:{ru:'от 1 200 $',en:'from $1,200'},time:{ru:'5–7 дней',en:'5–7 days'},items:[{ru:'5 разрезов марок кабеля',en:'5 cable mark section views'},{ru:'Наглядный вход в каталог',en:'A visual start for the catalogue'}]},
      {t:{ru:'Подбор по ведомости',en:'Selection from a schedule'},price:{ru:'от 1 500 $',en:'from $1,500'},time:{ru:'2–3 недели',en:'2–3 weeks'},rec:true,items:[{ru:'Пилот агента: кабельная ведомость → подходящие марки',en:'An agent pilot: cable schedule → suitable marks'},{ru:'Черновик КП',en:'A draft quote'},{ru:'Ответ на заявку за минуты — цель пилота',en:'An answer to a request within minutes is the pilot’s goal'}]},
      {t:{ru:'Каталог для экспорта',en:'Export catalogue'},price:{ru:'от 200 $ за марку',en:'from $200 per mark'},time:{ru:'1 месяц',en:'1 month'},items:[{ru:'Серия по маркам и сечениям, EN и RU',en:'A series by mark and cross-section, EN and RU'},{ru:'Сцены применения',en:'Application scenes'}]}]},

  assure:{
    title:{ru:'Условия',en:'Terms'},
    give:{title:{ru:'Что гарантируем',en:'What we guarantee'},items:[
      {t:{ru:'Разрезы по сечениям из каталога',en:'Sections from catalogue drawings'},d:{ru:'Берём DWG или PDF сечения. Слои не дорисовываем.',en:'We take the DWG or PDF section. Layers are not redrawn.'}},
      {t:{ru:'Сцены применения',en:'Application scenes'},d:{ru:'Строим по каталожным данным и вашим фото.',en:'Built from catalogue data and your photos.'}},
      {t:{ru:'Описания из ваших текстов',en:'Descriptions from your texts'},d:{ru:'Не придумываем характеристики.',en:'We do not invent specifications.'}},
      {t:{ru:'Файлы остаются у вас',en:'You keep the files'},d:{ru:'Публикуем только с вашего согласия.',en:'We publish only with your consent.'}}]},
    depends:{title:{ru:'Что зависит от исходников',en:'What depends on your sources'},items:[
      {t:{ru:'3D-сборка изделия',en:'A 3D assembly'},d:{ru:'Есть сборка — делаем взрыв-схему и 360°.',en:'With an assembly we make an exploded view and 360°.'}},
      {t:{ru:'База продукции',en:'A product database'},d:{ru:'Описания обновляются автоматически.',en:'Descriptions update automatically.'}},
      {t:{ru:'Прайс и правила',en:'Price list and rules'},d:{ru:'Из них собираем конфигуратор.',en:'We build a configurator from them.'}},
      {t:{ru:'Пробный кадр',en:'Trial image'},d:{ru:'Бесплатный, только если исходник подходит. Решаем на 1-й день.',en:'Free, only if the source suits. Decided on day 1.'}}]}},

  more:{
    title:{ru:'Кроме визуала',en:'Beyond visuals'},
    items:[
      {i:'S_01',t:{ru:'Подбор марок на сайте',en:'Mark selection on the website'},d:{ru:'Каталог с подбором по маркам и сечениям вместо длинного списка.',en:'A catalogue with selection by mark and cross-section instead of a long list.'}},
      {i:'S_02',t:{ru:'ИИ-агент для ведомостей',en:'AI agent for schedules'},d:{ru:'Обработка кабельных ведомостей заказчиков. Пилот на одном процессе от 1 500 $, 2 недели, фиксированная цена.',en:'Processing of customers’ cable schedules. A single-process pilot from $1,500, 2 weeks, fixed price.'}},
      {i:'C_01',t:{ru:'Аудит отдела продаж',en:'Sales audit'},d:{ru:'Аудит от 600 $. Сопровождение от 400 $ в месяц.',en:'Audit from $600. Support from $400 a month.'}}]},

  next:{
    title:{ru:'Пришлите сечение одной марки и пример ведомости',en:'Send a section of one mark and a sample schedule'},
    lead:{ru:'За 1 рабочий день скажем, подходят ли файлы для бесплатного пробного разреза. Дальше решите сами.',en:'Within 1 working day we tell you whether the files suit a free trial image. You decide what comes next.'},
    btn:{ru:'Отправить файлы или написать',en:'Send files or write to us'}},

  toc:{seen:{ru:'Три факта с источниками',en:'Three facts with sources'},task:{ru:'Гипотеза и вопросы',en:'Hypothesis and questions'},make:{ru:'Форматы и пакеты',en:'Formats and packages'},demo:{ru:'Разрез на условной модели',en:'A section on a conditional model'},viewer:{ru:'Кабель в 3D',en:'The cable in 3D'},steps:{ru:'Сроки от исходников',en:'Timelines from sources'},pricing:{ru:'Три пакета, цены «от»',en:'Three packages, “from” prices'},assure:{ru:'Гарантии и зависимости',en:'Guarantees and dependencies'},more:{ru:'Софт и консалтинг',en:'Software and consulting'},next:{ru:'Один шаг',en:'One step'}}
};
