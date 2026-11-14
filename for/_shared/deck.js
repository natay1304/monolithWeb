/* MONOLITH — рендер презентации компании. Контент берётся из window.COMPANY (company.js).
   Блоки и их порядок задаёт COMPANY.blocks, стиль страницы — COMPANY.style (editorial | blueprint).
   Чтобы собрать презентацию для новой компании, скопируйте папку компании и замените company.js. */
(function(){
  var C=window.COMPANY,LANG='ru',NUM=0;
  var UI={
    ru:{about:'Кто мы',offer:'Что делаем для вас',sticky:'Получить бесплатный разрез',why:'Почему сейчас',task:'Задача',deliver:'Что вы получите',visual:'Как это выглядит',case:'Метод',steps:'Как работаем',pricing:'Пакеты и цены',scope:'Что гарантируем',sure:'Точно сделаем',extra:'Дополнительно, если есть',principles:'Условия',more:'Кроме визуала',contact:'Контакт',
        cases:'Кейсы',full:'Общий вид',section:'Разрез',hint:'Потяните, чтобы повернуть · колесо — масштаб',
        recommended:'Рекомендуем',demo:'Демонстрация на условной модели. Это не изделие компании.',openCase:'Открыть кейс →',
        footer:'Предложение подготовлено для',date:'Октябрь 2026',from:'от',src:'Источник'},
    en:{about:'Who we are',offer:'What we do for you',sticky:'Get a free section view',why:'Why now',task:'The task',deliver:'What you get',visual:'What it looks like',case:'Method',steps:'How we work',pricing:'Packages and prices',scope:'What we guarantee',sure:'We will definitely do',extra:'Extra, if you have it',principles:'Terms',more:'Beyond visuals',contact:'Contact',
        cases:'Cases',full:'Exterior',section:'Section',hint:'Drag to rotate · wheel to zoom',
        recommended:'Recommended',demo:'Demonstration on a conditional model. This is not a company product.',openCase:'Open the case →',
        footer:'Proposal prepared for',date:'October 2026',from:'from',src:'Source'}
  };
  if(C.ui)['ru','en'].forEach(function(l){if(C.ui[l])for(var k in C.ui[l])UI[l][k]=C.ui[l][k]});
  function T(o){return o==null?'':(typeof o==='string'?o:(o[LANG]||o.ru||''))}
  function U(k){return UI[LANG][k]}
  function words(t){var i=0;return t.split(' ').map(function(w){return '<span class="w"><span style="--d:'+(i++*70)+'ms">'+w+'</span></span>'}).join(' ')}
  function pad(n){return (n<10?'0':'')+n}
  function sec(id,cls,inner){return '<section class="blk '+cls+'" id="'+id+'">'+(/dark|hero/.test(cls)?FOG:'')+'<div class="wrap">'+inner+'</div></section>'}
  function lab(key){NUM++;return '<div class="lab rv"><span class="mono">'+pad(NUM)+' // '+U(key)+'</span><span class="no" aria-hidden="true">'+pad(NUM)+'</span></div>'}
  var FOG='<div class="fog" aria-hidden="true"><i></i><i></i><i></i></div>';
  function marquee(){var o=C.hero.offer;if(!o)return '';var s=o.map(function(x){return '<span>'+T(x.t)+'</span><b aria-hidden="true">✕</b>'}).join('');
    return '<div class="mq" aria-hidden="true"><div class="mq-t">'+s+s+s+s+'</div></div>'}
  function offerStrip(){var o=C.hero.offer;if(!o)return '';return '<div class="offer rv"><div class="mono ol">'+U('offer')+'</div><div class="og">'+o.map(function(x,i){return '<div><span class="mono">'+pad(i+1)+'</span><b>'+T(x.t)+'</b><small>'+T(x.d)+'</small></div>'}).join('')+'</div></div>'}
  function viewer(id,src,poster,orbit){var lz=C.model&&C.model.lazy;return '<model-viewer id="'+id+'" '+(lz?'data-src="':'src="')+src+'" poster="'+poster+'" camera-controls touch-action="pan-y" shadow-intensity="0.8" exposure="1.1" environment-image="neutral" interaction-prompt="none" camera-orbit="'+orbit+'" alt="3D"></model-viewer>'}
  /* схема-разрез: контур со штриховкой стенок, внутренние камеры, выноски. Рисуется линиями при появлении. */
  function schematic(v){var s=v.svg;
    var callouts=(v.callouts||[]).map(function(c,i){var e=c.end,m=c.d.match(/^M([\d.]+),([\d.]+)/);return '<g class="co" style="--i:'+i+'"><path class="ln" d="'+c.d+'" pathLength="1"/><circle cx="'+m[1]+'" cy="'+m[2]+'" r="4"/>'+
      '<circle class="bd" cx="'+e[0]+'" cy="'+e[1]+'" r="13"/><text class="bn" x="'+e[0]+'" y="'+(e[1]+5)+'" text-anchor="middle">'+(i+1)+'</text><text class="t" x="'+(e[0]+24)+'" y="'+(e[1]+6)+'">'+T(c.t)+'</text></g>'}).join('');
    return '<svg class="schem" viewBox="'+s.box+'" data-box="'+s.box+'"'+(s.mbox?' data-mbox="'+s.mbox+'"':'')+' role="img" aria-label="'+T(v.alt)+'"><defs><pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" class="hb"/><line x1="0" y1="0" x2="0" y2="8" class="hl"/></pattern></defs>'+
      '<g class="grid-d">'+s.dims+'</g><path class="body" d="'+s.outer+'" pathLength="1"/>'+s.inner.map(function(d){return '<path class="cham" d="'+d+'" pathLength="1"/>'}).join('')+
      (s.steel?'<path class="steel" d="'+s.steel+'" pathLength="1"/>':'')+(s.seals||[]).map(function(d){return '<path class="seal" d="'+d+'"/>'}).join('')+callouts+'</svg>'}
  var B={
    hero:function(){var h=C.hero,solo=h.viewer===false&&!h.img;return '<section class="blk dark hero" id="hero">'+FOG+'<div class="wrap"><div class="grid'+(solo?' solo':'')+'"><div>'+
      '<div class="lockup mono rv"><span>MONOLITH</span><i>×</i><span>'+T(C.name)+'</span></div><h1 class="words">'+words(T(h.h1))+'</h1><p class="lead rv">'+T(h.lead)+'</p>'+
      '<div class="actions rv"><a class="btn" href="'+C.contact.brief+'">'+T(h.cta)+'</a><a class="btn ghost" href="#'+(h.cta2to||'case')+'">'+T(h.cta2)+'</a></div></div>'+
      (solo?'':h.img?'<div class="viewer himg rv"><img src="'+h.img+'" alt="">'+(h.img2?'<img class="n" src="'+h.img2+'" alt="">':'')+'<span class="crop" aria-hidden="true"></span>'+(h.tags?h.tags.map(function(t,i){return '<span class="tag-v mono t'+i+'">'+T(t)+'</span>'}).join(''):'')+'</div>':'<div class="viewer">'+viewer('mv0',C.model.section,C.model.posterSection,'160deg 72deg auto')+'<span class="crop" aria-hidden="true"></span>'+(h.tags?h.tags.map(function(t,i){return '<span class="tag-v mono t'+i+'">'+T(t)+'</span>'}).join(''):'')+'<div class="hint mono">'+U('hint')+'</div></div>')+'</div>'+
      (solo?'<div class="vtext mono" aria-hidden="true">MONOLITH × '+T(C.name)+' — '+U('date')+'</div>':'')+offerStrip()+'</div>'+marquee()+'</section>'},
    about:function(){var a=C.about;return sec('about','about',lab('about')+'<div class="two"><div><h2 class="rv">'+T(a.title)+'</h2></div><div class="rv">'+a.paras.map(function(p){return '<p>'+T(p)+'</p>'}).join('')+'</div></div>')},
    facts:function(){var f=C.facts.map(function(x,i){return '<div class="fact rv" style="--i:'+i+'"><div class="n"'+(x.count!=null?' data-count="'+x.count+'" data-pre="'+(x.pre||'')+'"':'')+'>'+T(x.n)+'</div><p>'+T(x.label)+'</p>'+(x.src?'<small>'+U('src')+': '+T(x.src)+'</small>':'')+'</div>'}).join('');
      return sec('facts','facts-s','<div class="facts">'+f+'</div>')},
    why:function(){var w=C.why;return sec('why','',lab('why')+'<div class="two"><h2 class="rv">'+T(w.title)+'</h2><div class="rv">'+w.paras.map(function(p){return '<p>'+T(p)+'</p>'}).join('')+'<p class="note">'+T(w.note)+'</p></div></div>'+
      (w.tasks?'<div class="tasks"><div class="mono tl rv">'+U('task')+'</div>'+w.tasks.map(function(t,i){return '<div class="task rv" style="--i:'+i+'"><span class="mono">('+(i+1)+')</span><p>'+T(t)+'</p></div>'}).join('')+'</div>':''))},
    /* оглавление-предложение: номер, крупное название, линия, описание справа */
    deliver:function(){var d=C.deliver;return sec('deliver','alt deliver',lab('deliver')+'<h2 class="rv">'+T(d.title)+'</h2><ol class="idx">'+d.items.map(function(x,i){return '<li class="rv" style="--i:'+i+'"><span class="k">('+(i+1)+')</span><h3>'+T(x.t)+'</h3><p>'+T(x.d)+'</p></li>'}).join('')+'</ol>')},
    visual:function(){var v=C.visual;return sec('visual','dark visual',lab('visual')+'<h2 class="rv">'+T(v.title)+'</h2><p class="lead rv">'+T(v.lead)+'</p><figure class="schem-wrap rv">'+schematic(v)+'<ol class="legend mono">'+(v.callouts||[]).map(function(c){return '<li>'+T(c.t)+'</li>'}).join('')+'</ol><figcaption class="mono">'+T(v.cap)+'</figcaption></figure>')},
    case:function(){var c=C.case;var fr=c.frames.map(function(f,i){return '<figure class="rv clip" style="--i:'+i+'"><img src="'+f.src+'" alt="" loading="lazy"><figcaption>'+T(f.cap)+'</figcaption></figure>'}).join('');
      return sec('case',c.compact?'case compact':'dark case',lab('case')+'<h2 class="rv">'+T(c.title)+'</h2><p class="lead rv">'+T(c.lead)+'</p>'+
      (c.compact?'':'<div class="case-view rv"><div class="tabs mono"><button type="button" data-m="full" aria-pressed="true">'+U('full')+'</button><button type="button" data-m="section" aria-pressed="false">'+U('section')+'</button></div>'+viewer('mv1',C.model.full,C.model.posterFull,'35deg 70deg auto')+'<span class="crop" aria-hidden="true"></span><div class="hint mono">'+U('hint')+'</div></div>')+
      '<div class="frames">'+fr+'</div><div class="case-cap mono"><span>'+U('demo')+'</span>'+(c.href?'<a href="'+c.href+'">'+U('openCase')+'</a>':'')+'</div>')},
    steps:function(){var s=C.steps;return sec('steps','',lab('steps')+'<h2 class="rv">'+T(s.title)+'</h2><div class="steps">'+s.items.map(function(x,i){return '<div class="step rv" style="--i:'+i+'"><div class="mono d">'+T(x.d)+'</div><h3>'+T(x.t)+'</h3><p>'+T(x.p)+'</p></div>'}).join('')+'</div>')},
    pricing:function(){var p=C.pricing;return sec('pricing','alt',lab('pricing')+'<h2 class="rv">'+T(p.title)+'</h2><div class="plans">'+p.plans.map(function(x,i){return '<div class="plan rv'+(x.rec?' rec':'')+'" style="--i:'+i+'">'+(x.rec?'<span class="tag mono">'+U('recommended')+'</span>':'')+'<div class="mono pk">'+pad(i+1)+'</div><h3>'+T(x.t)+'</h3><div class="p">'+T(x.price)+'</div><ul>'+x.items.map(function(i){return '<li>'+T(i)+'</li>'}).join('')+'</ul></div>'}).join('')+'</div><p class="note rv" style="margin-top:20px">'+T(p.note)+'</p>')},
    scope:function(){var s=C.scope;function col(k,cls,items){return '<div class="sc '+cls+' rv"><h3 class="mono">'+U(k)+'</h3><ul>'+items.map(function(i){return '<li>'+T(i)+'</li>'}).join('')+'</ul></div>'}
      return sec('scope','scope',lab('scope')+'<h2 class="rv">'+T(s.title)+'</h2><div class="scg">'+col('sure','yes',s.sure)+col('extra','add',s.extra)+'</div>')},
    principles:function(){var p=C.principles;return sec('principles','dark',lab('principles')+'<h2 class="rv">'+T(p.title)+'</h2><div class="pr">'+p.items.map(function(x,i){return '<div class="rv" style="--i:'+i+'"><h3>'+T(x.t)+'</h3><p>'+T(x.d)+'</p></div>'}).join('')+'</div>')},
    more:function(){var m=C.more;return sec('more','more',lab('more')+'<h2 class="rv">'+T(m.title)+'</h2><div class="cards">'+m.items.map(function(x,i){return '<a class="card rv" style="--i:'+i+'" '+(x.href?'href="'+x.href+'"':'')+'><div class="i">'+T(x.i)+'</div><h3>'+T(x.t)+'</h3><p>'+T(x.d)+'</p>'+(x.href?'<span class="arr" aria-hidden="true">↗</span>':'')+'</a>'}).join('')+'</div>')},
    cta:function(){var c=C.cta;return '<section class="blk cta" id="contact">'+FOG+'<div class="wrap"><div class="mono rv">'+U('contact')+' · '+T(C.name)+'</div><h2 class="words">'+words(T(c.title))+'</h2><p class="lead rv">'+T(c.lead)+'</p><a class="btn rv" href="'+C.contact.brief+'">'+T(c.btn)+' <span aria-hidden="true">→</span></a></div></section>'}
  };
  function nav(){var items=(C.nav||[]).map(function(n){return '<a class="mono" href="#'+n.id+'">'+T(n.t)+'</a>'}).join('');
    return '<div class="prog" id="prog" aria-hidden="true"></div><header class="nav"><div class="wrap"><a class="brand" href="#hero">MONOLITH</a><nav>'+items+'</nav><div class="right"><div class="lang"><button type="button" data-l="ru">RU</button><button type="button" data-l="en">EN</button></div><a class="btn mono" href="#contact">'+U('contact')+'</a></div></div></header>'}
  function applyTheme(){
    var t=C.theme;if(!t)return;var r=document.documentElement.style;
    var map={accent:'--accent',accentL:'--accent-l',onAccent:'--on-accent',dark:'--dark',dark2:'--dark2',lineDark:'--line-dark',bg:'--bg',bg2:'--bg2',fg:'--fg',line:'--line',muted:'--muted'};
    Object.keys(map).forEach(function(k){if(t[k])r.setProperty(map[k],t[k])});
  }
  /* шрифты компании: theme.fHead / fBody / fMono (ставим на body, чтобы перекрыть .st-*) */
  function applyFonts(){var t=C.theme||{},b=document.body.style;[['fHead','--f-head'],['fBody','--f-body'],['fMono','--f-mono']].forEach(function(p){if(t[p[0]])b.setProperty(p[1],t[p[0]])})}
  /* model.lazy:true — 3D подключается, только если файл уже лежит на месте; иначе остаётся постер или пунктирная заглушка */
  function lazyModels(){if(!(C.model&&C.model.lazy))return;
    document.querySelectorAll('model-viewer[data-src]').forEach(function(mv){var src=mv.dataset.src;
      fetch(src,{method:'HEAD'}).then(function(r){if(!r.ok)throw 0;mv.setAttribute('src',src)}).catch(function(){
        var box=mv.parentNode;box.classList.add('v-miss');box.innerHTML='<div class="mono vm-t">3D · '+src.split('/').pop()+'</div>'})})}
  function imgFallback(){document.querySelectorAll('#app img').forEach(function(im){im.addEventListener('error',function(){im.classList.add('miss');im.parentNode.classList.add('miss-p')})})}
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  function render(){
    NUM=0;applyTheme();
    document.documentElement.lang=LANG;
    document.body.className='st-'+(C.style||'base');applyFonts();
    document.title=T(C.title);
    var html=nav()+C.blocks.map(function(b){return B[b]?B[b]():''}).join('')+'<a class="sticky btn" id="sticky" href="'+C.contact.brief+'">'+U('sticky')+'</a><footer><div class="wrap mono"><span>MONOLITH · monolith.contact</span><span>'+U('footer')+' '+T(C.name)+' · '+U('date')+'</span></div></footer>';
    document.getElementById('app').innerHTML=html;
    document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.l===LANG));b.onclick=function(){setLang(b.dataset.l,true)}});
    var mv=document.getElementById('mv1');
    if(mv)document.querySelectorAll('.tabs button').forEach(function(b){b.onclick=function(){
      mv.setAttribute('poster',b.dataset.m==='full'?C.model.posterFull:C.model.posterSection);mv.src=C.model[b.dataset.m];var orb=b.dataset.m==='full'?'35deg 70deg auto':'160deg 72deg auto';mv.setAttribute('camera-orbit',orb);mv.addEventListener('load',function f(){mv.removeEventListener('load',f);mv.cameraOrbit=orb;mv.jumpCameraToGoal()});
      document.querySelectorAll('.tabs button').forEach(function(x){x.setAttribute('aria-pressed',String(x===b))})}});
    fitSchem();lazyModels();imgFallback();
    var hero=document.getElementById('hero'),ct=document.getElementById('contact'),st=document.getElementById('sticky'),vis={h:true,c:false};
    function upd(){st.classList.toggle('on',!vis.h&&!vis.c)}
    var els=document.querySelectorAll('.rv,.words,.schem-wrap');
    if('IntersectionObserver' in window){
      new IntersectionObserver(function(e){vis.h=e[0].isIntersecting;upd()}).observe(hero);
      new IntersectionObserver(function(e){vis.c=e[0].isIntersecting;upd()}).observe(ct);
      var cio=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;cio.unobserve(e.target);var el=e.target,end=+el.dataset.count,pre=el.dataset.pre||'',t0=null;
        if(reduce||end<1)return;
        (function step(ts){t0=t0||ts;var k=Math.min(1,(ts-t0)/1100);el.textContent=pre+Math.round(end*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(step)})(performance.now())})},{threshold:.6});
      document.querySelectorAll('[data-count]').forEach(function(el){cio.observe(el)});
      var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -6% 0px'});els.forEach(function(el){io.observe(el)});
    }else els.forEach(function(el){el.classList.add('in')});
  }
  /* полоса чтения и лёгкий параллакс кадров: только transform, один rAF на кадр */
  var ticking=false;
  function onScroll(){if(ticking)return;ticking=true;requestAnimationFrame(function(){ticking=false;
    var h=document.documentElement,p=h.scrollTop/Math.max(1,h.scrollHeight-h.clientHeight),pg=document.getElementById('prog');
    if(pg)pg.style.transform='scaleX('+p.toFixed(4)+')';
    if(reduce)return;var vh=innerHeight;
    document.querySelectorAll('.no').forEach(function(n){var r=n.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;n.style.transform='translate3d(0,'+((r.top-vh/2)*-.12).toFixed(1)+'px,0)'});
  })}
  /* на узком экране подписи схемы уходят в легенду, поэтому кадрируем viewBox до профиля и номеров */
  function fitSchem(){var n=innerWidth<=700;document.querySelectorAll('.schem[data-mbox]').forEach(function(v){v.setAttribute('viewBox',n?v.dataset.mbox:v.dataset.box)})}
  addEventListener('resize',fitSchem);
  addEventListener('scroll',onScroll,{passive:true});
  function setLang(l,save){LANG=l;render();onScroll();if(save){try{localStorage.setItem('monolith-lang',l)}catch(e){}}}
  var q=(location.search.match(/[?&]lang=(ru|en)/)||[])[1],sv=null;
  try{sv=localStorage.getItem('monolith-lang')}catch(e){}
  LANG=q||sv||((navigator.language||'ru').slice(0,2)==='ru'?'ru':'en');
  render();onScroll();
})();
