/* КП MONOLITH для Artel (шаблон halftone). Пакеты и цены: Obsidian, «Пакет услуг — Artel.md».
   Факты: PR Newswire от 12.07.2021, artelelectronics.com (просмотр 30.10.2026).
   Ассеты: assets/scene-tashkent.webp, scene-europe.webp, scene-gulf.webp, ac-studio.webp, ac.glb. */
window.OFFER={
  slug:'artel',
  flag:false,
  name:{ru:'Artel',en:'Artel'},
  title:{ru:'Предложение для Artel — MONOLITH',en:'A proposal for Artel — MONOLITH'},
  lang:'ru',
  contact:{brief:'https://monolith.contact/#/brief?src=artel'},
  theme:{accent:'#C93F18',onAccent:'#FFFFFF',bg:'#FBF3E8',bg2:'#F3E4CF',fg:'#2A1B14',muted:'#66524A',line:'#E0CBB0',dark:'#2A1B14',onDark:'#FBF3E8',onDarkMuted:'#D8C6B3',slot:'#F6C98B',duoLight:'#FBDDB6',duoDark:'#8A2D12',
         fHead:"'Nunito','Trebuchet MS',system-ui,sans-serif",fBody:"'Nunito',system-ui,sans-serif"},
  blocks:['cover','seen','task','make','demo','viewer','steps','pricing','assure','more','next'],

  cover:{
    kicker:{ru:'Коммерческое предложение',en:'Commercial proposal'},
    headline:{ru:'Один продукт — интерьеры разных экспортных рынков',en:'One product — the interiors of different export markets'},
    benefit:{ru:'6 сцен одного продукта в интерьерах разных стран. Первые сцены: 7–10 дней от получения исходников.',
             en:'6 scenes of one product in the interiors of different countries. First scenes: 7–10 days from receiving your sources.'},
    meta:[{ru:'Октябрь 2026',en:'October 2026'}],
    cta:{ru:'Что вы получите',en:'What you get'},
    img:'assets/scene-tashkent.webp'
  },

  seen:{
    title:{ru:'Что мы увидели',en:'What we saw'},
    facts:[
      {n:'20+',count:20,suf:'+',label:{ru:'стран экспорта в СНГ и на Ближнем Востоке. Каждому рынку нужен свой интерьер и свой язык',en:'export countries in the CIS and the Middle East. Each market needs its own interior and its own language'},
       src:{ru:'PR Newswire, 12.07.2021 (данные на дату публикации)',en:'PR Newswire, 12 Jul 2021 (data as of publication date)'}},
      {n:'B',label:{ru:'рейтинг Fitch Ratings, прогноз «стабильный»: первая частная производственная компания Узбекистана с рейтингом одного из «большой тройки»',en:'a Fitch Ratings rating, outlook stable: the first private manufacturer in Uzbekistan rated by one of the “big three”'},
       src:{ru:'PR Newswire, 12.07.2021',en:'PR Newswire, 12 Jul 2021'}},
      {n:'33',count:33,label:{ru:'категории бытовой техники в каталоге на сайте; сайт доступен на узбекском, русском и английском',en:'categories of home appliances in the catalogue on the site; the site is available in Uzbek, Russian and English'},
       src:{ru:'artelelectronics.com, просмотр 30.10.2026',en:'artelelectronics.com, viewed 30 Oct 2026'}}]},

  task:{
    title:{ru:'Задача',en:'The task'},
    quote:{ru:'Моделей много, рынков много, и на каждом покупатель хочет видеть технику в привычном интерьере и читать описание на своём языке.',
           en:'There are many models and many markets, and in each the buyer wants to see the appliance in a familiar interior and read the description in their language.'},
    who:{ru:'Это наша гипотеза по открытым данным, не цитата Artel. Проверим на созвоне.',en:'This is our hypothesis from public data, not an Artel quote. We will check it on a call.'},
    points:[
      {ru:'Сколько моделей и рынков сейчас в работе?',en:'How many models and markets are in work now?'},
      {ru:'Где хранится база продукции и кто пишет карточки на языках рынков?',en:'Where is the product database kept and who writes the cards in the markets’ languages?'},
      {ru:'Какие программы и таблицы заняты в контенте и поддержке? Что раздражает больше всего?',en:'Which programs and spreadsheets handle content and support? What annoys you most?'}]},

  make:{
    title:{ru:'Что сделаем',en:'What we will do'},
    items:[
      {t:{ru:'Lifestyle-сцены',en:'Lifestyle scenes'},fmt:{ru:'6 сцен · PNG 3840×2160',en:'6 scenes · PNG 3840×2160'},d:{ru:'Один продукт в интерьерах разных стран. По фото и каталожным данным.',en:'One product in interiors of different countries. From photos and catalogue data.'}},
      {t:{ru:'Серия кадров',en:'A frame series'},fmt:{ru:'10+ моделей · единый вид',en:'10+ models · one look'},d:{ru:'Каталог для маркетплейсов: единый свет и ракурс на все модели.',en:'A marketplace catalogue: one light and angle for all models.'}},
      {t:{ru:'Серийный рендер всех SKU',en:'Series render of all SKUs'},fmt:{ru:'если есть 3D-модели',en:'if you have 3D models'},d:{ru:'С 3D-моделями рендерим все позиции одним сетапом, включая 360°.',en:'With 3D models we render all items in one setup, including 360°.'}},
      {t:{ru:'Описания на языках рынков',en:'Descriptions in market languages'},fmt:{ru:'из ваших текстов',en:'from your texts'},d:{ru:'Карточки на языках рынков. Характеристики берём только из ваших материалов.',en:'Cards in the languages of the markets. Specifications come only from your materials.'}},
      {t:{ru:'Бот поддержки',en:'A support bot'},fmt:{ru:'по инструкциям и гарантии',en:'from manuals and warranty'},d:{ru:'Отвечает покупателям по вашим инструкциям. Пилот 3 недели.',en:'Answers buyers from your manuals. A 3-week pilot.'}},
      {t:{ru:'3D в браузере',en:'3D in the browser'},fmt:{ru:'GLB, если есть модель',en:'GLB, if a model exists'},d:{ru:'Покупатель крутит продукт на странице карточки.',en:'The buyer rotates the product on the card page.'}}]},

  demo:{
    title:{ru:'Один продукт — три интерьера',en:'One product — three interiors'},
    caption:{ru:'Демонстрация на условной модели, не изделие Artel.',en:'Demonstration on a conditional model, not an Artel product.'},
    slots:[
      {t:{ru:'Интерьер, Ташкент',en:'Interior, Tashkent'},ratio:'16:9',src:'assets/scene-tashkent.webp'},
      {t:{ru:'Интерьер, Европа',en:'Interior, Europe'},ratio:'16:9',src:'assets/scene-europe.webp'},
      {t:{ru:'Интерьер, страны Залива',en:'Interior, Gulf states'},ratio:'16:9',src:'assets/scene-gulf.webp'},
      {t:{ru:'Студийный кадр',en:'Studio shot'},ratio:'4:3',src:'assets/ac-studio.webp'}]},

  viewer:{
    title:{ru:'И в 3D на странице карточки',en:'And in 3D on the card page'},
    ratio:'16:9',
    caption:{ru:'Демонстрация на условной модели, не изделие Artel. 3D возможно, если у вас есть 3D-модель изделия.',en:'Demonstration on a conditional model, not an Artel product. 3D is possible if you have a 3D model of the product.'},
    models:[{label:{ru:'Модель',en:'Model'},src:'assets/ac.glb',poster:'assets/ac-studio.webp',orbit:'35deg 70deg auto'}]},

  steps:{
    title:{ru:'Как работаем',en:'How we work'},
    note:{ru:'Сроки считаются от получения исходников.',en:'Timelines count from receiving your source files.'},
    items:[
      {d:{ru:'День 0',en:'Day 0'},t:{ru:'Присылаете исходники',en:'You send sources'},p:{ru:'Фото и каталожные данные одной модели, список рынков и языков, тексты описаний. NDA подпишем, если нужно.',en:'Photos and catalogue data of one model, the list of markets and languages, description texts. We sign an NDA if needed.'}},
      {d:{ru:'День 1',en:'Day 1'},t:{ru:'Проверяем исходник',en:'We check the source'},p:{ru:'Бесплатный пробный кадр делаем, только если исходник подходит. Иначе скажем сразу.',en:'We make a free trial image only if the source suits. Otherwise we say so at once.'}},
      {d:{ru:'7–10 дней',en:'7–10 days'},t:{ru:'6 сцен',en:'6 scenes'},p:{ru:'Один продукт в интерьерах разных стран. Два раунда правок.',en:'One product in interiors of different countries. Two revision rounds.'}},
      {d:{ru:'3–4 недели',en:'3–4 weeks'},t:{ru:'Каталог 10+ моделей',en:'A 10+ model catalogue'},p:{ru:'Единый вид для маркетплейсов. Карточки и бот — пилот 3 недели.',en:'One look for marketplaces. Cards and a bot are a 3-week pilot.'}}]},

  pricing:{
    title:{ru:'Три пакета',en:'Three packages'},
    note:{ru:'Цены «от», в долларах США. Оплата в USD индивидуальному предпринимателю в Грузии. Итоговую цену фиксируем в предложении до начала работы. Сроки считаются от получения исходников.',
          en:'“From” prices, in US dollars. Payment in USD to a sole proprietor in Georgia. The final price is fixed in the proposal before work starts. Timelines count from receiving your source files.'},
    plans:[
      {t:{ru:'Карточки и бот',en:'Cards and a bot'},price:{ru:'от 1 500 $',en:'from $1,500'},time:{ru:'3 недели',en:'3 weeks'},items:[{ru:'Описания на языках рынков',en:'Descriptions in market languages'},{ru:'Бот ответов покупателям по инструкциям',en:'A bot answering buyers from manuals'}]},
      {t:{ru:'Lifestyle-сцены',en:'Lifestyle scenes'},price:{ru:'от 1 500 $',en:'from $1,500'},time:{ru:'7–10 дней',en:'7–10 days'},rec:true,items:[{ru:'6 сцен одного продукта в интерьерах разных стран',en:'6 scenes of one product in interiors of different countries'},{ru:'Вход с понятным результатом',en:'A start with a clear result'}]},
      {t:{ru:'Каталог для маркетплейсов',en:'Marketplace catalogue'},price:{ru:'от 400 $ за модель',en:'from $400 per model'},time:{ru:'3–4 недели',en:'3–4 weeks'},items:[{ru:'Единый вид 10+ моделей',en:'One look across 10+ models'},{ru:'Ракурсы; 360° при наличии 3D-моделей',en:'Views; 360° if 3D models exist'}]}]},

  assure:{
    title:{ru:'Условия',en:'Terms'},
    give:{title:{ru:'Что гарантируем',en:'What we guarantee'},items:[
      {t:{ru:'Сцены применения',en:'Application scenes'},d:{ru:'По фото и каталожным данным.',en:'From photos and catalogue data.'}},
      {t:{ru:'Серия кадров',en:'A frame series'},d:{ru:'Единый вид по фото и каталогу.',en:'One look from photos and the catalogue.'}},
      {t:{ru:'Описания из ваших текстов',en:'Descriptions from your texts'},d:{ru:'Характеристики не придумываем.',en:'We do not invent specifications.'}},
      {t:{ru:'Файлы остаются у вас',en:'You keep the files'},d:{ru:'Публикуем только с вашего согласия.',en:'We publish only with your consent.'}}]},
    depends:{title:{ru:'Что зависит от исходников',en:'What depends on your sources'},items:[
      {t:{ru:'3D-модели',en:'3D models'},d:{ru:'Есть модели — делаем единый серийный рендер всех SKU.',en:'With models we make one series render of all SKUs.'}},
      {t:{ru:'Доступ к базе продукции',en:'Access to the product database'},d:{ru:'Карточки синхронизируются автоматически.',en:'Cards sync automatically.'}},
      {t:{ru:'Пробный кадр',en:'Trial image'},d:{ru:'Бесплатный, только если исходник подходит. Решаем на 1-й день.',en:'Free, only if the source suits. Decided on day 1.'}}]}},

  more:{
    title:{ru:'Кроме визуала',en:'Beyond visuals'},
    items:[
      {i:'S_01',t:{ru:'Поддержка покупателей',en:'Buyer support'},d:{ru:'Бот по инструкциям и гарантии отвечает на вопросы, на которые уже есть ответ.',en:'A bot built on manuals and warranty answers questions that already have an answer.'}},
      {i:'S_02',t:{ru:'Карточки на языках рынков',en:'Cards in market languages'},d:{ru:'ИИ готовит описания, сотрудник проверяет. Пилот на одном процессе от 1 500 $, 2 недели, фиксированная цена.',en:'AI drafts descriptions, an employee reviews. A single-process pilot from $1,500, 2 weeks, fixed price.'}},
      {i:'C_01',t:{ru:'Аудит маркетинга и сервиса',en:'Marketing and service audit'},d:{ru:'Смотрим, какие задачи команды можно отдать ИИ. Аудит от 600 $, сопровождение от 400 $ в месяц.',en:'We look at which team tasks can be handed to AI. Audit from $600, support from $400 a month.'}}]},

  next:{
    title:{ru:'Пришлите фото и каталожные данные одной модели',en:'Send photos and catalogue data of one model'},
    lead:{ru:'За 1 рабочий день скажем, подходит ли исходник для бесплатного пробного кадра. Дальше решите сами.',en:'Within 1 working day we tell you whether the source suits a free trial image. You decide what comes next.'},
    btn:{ru:'Отправить файлы или написать',en:'Send files or write to us'}}
};
