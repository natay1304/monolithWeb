/* MONOLITH — общий движок шаблонов КП. Не требует правок под компанию.
   Читает window.OFFER (offer.js), шаблон даёт Kit.mount(renderFn) в render.js.
   Умеет: RU/EN, тема через CSS-переменные, появление по скроллу, раскладку заголовка по словам и буквам,
   счётчики, прогресс чтения, параллакс, липкий CTA. С prefers-reduced-motion анимации отключены. */
(function(){
  var O=window.OFFER,LANG='ru',N=0;
  var RM=!!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches);
  var UI={
    ru:{contact:'Написать',flag:'ДЕМО-ШАБЛОН · «Компания X» вымышлена, цифры и цены — примеры. Перед отправкой заменить всё и поставить demo:false',
        rec:'Рекомендуем',src:'Источник',demo:'Демонстрация на условной модели. Это не изделие компании.',
        give:'Что гарантируем',depends:'Что зависит от исходников',footer:'Предложение подготовлено для',date:'Октябрь 2026',
        s_seen:'Что мы увидели',s_task:'Задача',s_make:'Что сделаем',s_demo:'Демо',s_steps:'Как работаем',s_pricing:'Пакеты и цены',s_assure:'Условия',s_more:'Кроме визуала',s_next:'Следующий шаг',s_products:'Изделия',s_viewer:'3D',hint3d:'Потяните, чтобы повернуть · колесо — масштаб',
        fromSrc:'сроки считаются от получения исходников',scroll:'листайте'},
    en:{contact:'Contact',flag:'DEMO TEMPLATE · “Company X” is fictional, figures and prices are examples. Replace everything and set demo:false before sending',
        rec:'Recommended',src:'Source',demo:'Demonstration on a conditional model. This is not a company product.',
        give:'What we guarantee',depends:'What depends on your source files',footer:'Proposal prepared for',date:'October 2026',
        s_seen:'What we saw',s_task:'The task',s_make:'What we will do',s_demo:'Demo',s_steps:'How we work',s_pricing:'Packages and prices',s_assure:'Terms',s_more:'Beyond visuals',s_next:'Next step',s_products:'Products',s_viewer:'3D',hint3d:'Drag to rotate · wheel to zoom',
        fromSrc:'timelines count from receiving your source files',scroll:'scroll'}
  };
  if(O.ui)['ru','en'].forEach(function(l){if(O.ui[l])for(var k in O.ui[l])UI[l][k]=O.ui[l][k]});

  function T(o){return o==null?'':(typeof o==='string'?o:(o[LANG]||o.ru||''))}
  function U(k){return UI[LANG][k]||''}
  function num(){N++;return (N<10?'0':'')+N}
  function words(t){var i=0;return T(t).split(' ').map(function(w){return '<span class="wm"><span class="w" style="--i:'+(i++)+'">'+w+'</span></span>'}).join(' ')}
  function chars(t){var i=0;return T(t).split(' ').map(function(w){return '<span class="cw">'+w.split('').map(function(c){return '<span class="ch" style="--i:'+(i++)+'">'+c+'</span>'}).join('')+'</span>'}).join(' ')}
  function ph(label,ratio,cls){return '<div class="ph'+(cls?' '+cls:'')+'" style="aspect-ratio:'+(ratio||'4/3').replace(':','/')+'"><i class="pat" data-par="-.05"></i><span class="mono">'+label+'</span></div>'}
  /* кадр демо: если у слота есть src — картинка, иначе пунктирная заглушка */
  function fig(s,i,cls,ratio){
    var lbl='ASSET '+(i<9?'0':'')+(i+1)+' · '+(s.ratio||ratio||'4:3')+' · '+T(s.t);
    if(s.src)return '<figure class="fr clip '+(cls||'')+'" style="aspect-ratio:'+(s.ratio||ratio||'4:3').replace(':','/')+'"><img data-par=".06" src="'+s.src+'" alt="'+T(s.t)+'" loading="lazy"></figure>';
    return ph(lbl,s.ratio||ratio,'clip '+(cls||''));
  }
  /* 3D-просмотрщик (model-viewer). Пока файла нет, показывается пунктирная заглушка; когда файл появится, просмотрщик включается сам.
     v: {models:[{k,label,src,poster,orbit}], ratio, alt}. Скрипт ../_shared/assets/vendor/model-viewer.min.js подключается в index.html страницы */
  function viewer3d(v){
    var ms=v.models||[];
    return '<figure class="v3d" data-v3d="'+encodeURIComponent(JSON.stringify(ms.map(function(m){return {k:T(m.label),src:m.src,poster:m.poster||'',orbit:m.orbit||'35deg 70deg auto'}})))+'" style="aspect-ratio:'+(v.ratio||'4/3').replace(':','/')+'">'+
      '<div class="ph v3d-ph"><i class="pat"></i><span class="mono">ASSET · 3D · '+(ms[0]?ms[0].src.split('/').pop():'')+'</span></div></figure>';
  }
  function upgrade3d(){
    document.querySelectorAll('.v3d[data-v3d]').forEach(function(f){
      var ms=JSON.parse(decodeURIComponent(f.dataset.v3d));
      if(!ms.length||!window.customElements||!customElements.get('model-viewer')&&!document.querySelector('script[src*="model-viewer"]'))return;
      Promise.all(ms.map(function(m){return fetch(m.src,{method:'HEAD'}).then(function(r){return r.ok}).catch(function(){return false})})).then(function(ok){
        var av=ms.filter(function(_,i){return ok[i]});if(!av.length)return;
        function show(m){f.innerHTML='<model-viewer src="'+m.src+'"'+(m.poster?' poster="'+m.poster+'"':'')+' camera-controls touch-action="pan-y" shadow-intensity="0.8" exposure="1.1" environment-image="neutral" interaction-prompt="none" camera-orbit="'+m.orbit+'" alt="'+f.getAttribute('aria-label')+'"></model-viewer>'+
          (av.length>1?'<div class="v3d-tabs mono">'+av.map(function(x,i){return '<button type="button" data-i="'+i+'" aria-pressed="'+(x===m)+'">'+x.k+'</button>'}).join('')+'</div>':'')+'<div class="v3d-hint mono">'+U('hint3d')+'</div>';
          f.querySelectorAll('.v3d-tabs button').forEach(function(b){b.onclick=function(){show(av[+b.dataset.i])}})}
        show(av[0]);
      });
    });
  }
  function applyTheme(){
    var t=O.theme||{},r=document.documentElement.style;
    Object.keys(t).forEach(function(k){r.setProperty('--'+k.replace(/[A-Z]/g,function(m){return '-'+m.toLowerCase()}),t[k])});
  }
  function chrome(inner){
    var nm=T(O.name);
    return '<div class="prog" aria-hidden="true"><i></i></div>'+
      (O.flag!==false&&O.demo?'<div class="flag mono">'+U('flag')+'</div>':'')+
      '<header class="top"><div class="wrap"><a class="brand" href="#cover">MONOLITH<span>× '+nm+'</span></a><div class="rt"><div class="lang" role="group" aria-label="Language"><button type="button" data-l="ru">RU</button><button type="button" data-l="en">EN</button></div><a class="btn sm" href="#next">'+U('contact')+'</a></div></div></header>'+
      '<main>'+inner+'</main>'+
      '<a class="btn sticky" id="sticky" href="'+O.contact.brief+'">'+T(O.next.btn)+'</a>'+
      '<footer><div class="wrap mono"><span>MONOLITH · monolith.contact</span><span>'+U('footer')+' '+nm+' · '+U('date')+'</span></div></footer>';
  }

  var render=null,scrollBound=false,pars=[];
  function after(){
    document.title=T(O.title);document.documentElement.lang=LANG;
    document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.l===LANG));b.onclick=function(){setLang(b.dataset.l,true)}});
    var all=document.querySelectorAll('.rv,.words,.chars,.clip,.clip-x,.rule');
    if(!('IntersectionObserver' in window)){all.forEach(function(e){e.classList.add('in')})}
    else{
      /* clip-path с нулевой площадью IntersectionObserver считает невидимым: для .clip следим за родителем */
      var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var t=e.target;if(t._real)t.classList.add('in');(t._cl||[]).forEach(function(c){c.classList.add('in')});io.unobserve(t)})},{rootMargin:'0px 0px -7% 0px',threshold:.05});
      all.forEach(function(e){if(e.classList.contains('clip')||e.classList.contains('clip-x')){var p=e.parentNode;(p._cl=p._cl||[]).push(e);io.observe(p)}else{e._real=1;io.observe(e)}});
      var cio=new IntersectionObserver(function(es){es.forEach(function(e){
        if(!e.isIntersecting)return;cio.unobserve(e.target);
        var el=e.target,end=+el.dataset.count,pre=el.dataset.pre||'',suf=el.dataset.suf||'',t0=null;
        if(RM||!(end>0))return;
        (function step(ts){t0=t0||ts;var k=Math.min(1,(ts-t0)/1200);el.textContent=pre+Math.round(end*(1-Math.pow(1-k,3)))+suf;if(k<1)requestAnimationFrame(step)})(performance.now());
      })},{threshold:.6});
      document.querySelectorAll('[data-count]').forEach(function(e){cio.observe(e)});
      var st=document.getElementById('sticky'),vis={c:true,n:false};
      function upd(){st.classList.toggle('on',!vis.c&&!vis.n)}
      var a=document.getElementById('cover'),b=document.getElementById('next');
      if(a)new IntersectionObserver(function(e){vis.c=e[0].isIntersecting;upd()}).observe(a);
      if(b)new IntersectionObserver(function(e){vis.n=e[0].isIntersecting;upd()}).observe(b);
    }
    document.querySelectorAll('main img').forEach(function(im){im.addEventListener('error',function(){im.classList.add('miss');im.parentNode.classList.add('miss-p')})});
    upgrade3d();
    pars=RM?[]:[].slice.call(document.querySelectorAll('[data-par]'));
    onScroll();
    if(!scrollBound){scrollBound=true;
      var tick=false;function h(){if(tick)return;tick=true;requestAnimationFrame(function(){tick=false;onScroll()})}
      addEventListener('scroll',h,{passive:true});addEventListener('resize',h);}
  }
  function onScroll(){
    var bar=document.querySelector('.prog i');
    if(bar){var m=document.documentElement.scrollHeight-innerHeight;bar.style.transform='scaleX('+(m>0?Math.min(1,scrollY/m):0).toFixed(4)+')'}
    var vh=innerHeight;
    for(var i=0;i<pars.length;i++){
      var el=pars[i],p=el.parentNode.getBoundingClientRect();
      if(p.bottom<-50||p.top>vh+50)continue;
      var f=parseFloat(el.dataset.par)||0,c=p.top+p.height/2-vh/2;
      el.style.transform='translate3d(0,'+(c*f).toFixed(1)+'px,0)'+(el.tagName==='IMG'?' scale(1.16)':'');
    }
  }
  function draw(){N=0;applyTheme();document.getElementById('app').innerHTML=render();after()}
  function setLang(l,save){
    var y=scrollY;LANG=l;draw();scrollTo(0,y);
    if(save){try{localStorage.setItem('monolith-lang',l)}catch(e){}}
  }
  function mount(fn){
    render=fn;
    var q=(location.search.match(/[?&]lang=(ru|en)/)||[])[1],sv=null;
    try{sv=localStorage.getItem('monolith-lang')}catch(e){}
    LANG=q||sv||O.lang||'ru';
    document.documentElement.classList.add('js');
    draw();
  }
  window.Kit={O:O,T:T,U:U,num:num,words:words,chars:chars,ph:ph,fig:fig,viewer3d:viewer3d,chrome:chrome,mount:mount,lang:function(){return LANG}};
})();
