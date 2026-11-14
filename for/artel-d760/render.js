/* Шаблон halftone: дуотон-полутон поверх картинок компании, карточки изделий, радиальная схема «что получите».
   Контент — window.OFFER, движок — ../_lib/kit.js */
(function(){
  var K=window.Kit,O=K.O,T=K.T,U=K.U;
  /* полутон: серый слой + растр точек + контраст-порог, затем дуотон (светлый/тёмный тон из темы) */
  function ht(src,cls,alt,ratio){
    if(!src)return K.ph('ASSET · '+(alt||''),ratio||'4:3',cls||'');
    return '<div class="ht '+(cls||'')+'"'+(ratio?' style="aspect-ratio:'+ratio.replace(':','/')+'"':'')+'><div class="hin"><img data-par=".05" src="'+src+'" alt="'+(alt||'')+'" loading="lazy"></div></div>'}
  function hd(id,title){return '<header class="hd"><div class="eb mono rv">'+K.num()+' · '+U('s_'+id)+'</div><h2 class="h2 words">'+K.words(title||O[id].title)+'</h2></header>'}
  function sec(id,cls,inner,title){return '<section class="blk '+cls+'" id="'+id+'"><div class="wrap">'+hd(id,title)+inner+'</div></section>'}
  function curve(){return '<svg class="cv" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true"><path d="M3 34C22 34 42 24 58 8M47 7l11 1-2 11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'}
  var B={
    cover:function(){var c=O.cover;
      return '<section class="cover" id="cover"><div class="hero"><div class="hl-col"><div class="mono k rv">MONOLITH × '+T(O.name)+' · '+T(c.kicker)+'</div>'+
        '<h1 class="h1 words">'+K.words(c.headline)+'</h1><p class="lead rv">'+T(c.benefit)+'</p>'+
        '<div class="act rv"><a class="btn" href="#make">'+T(c.cta)+'</a><span class="mono">'+c.meta.map(T).join(' · ')+'</span></div></div>'+
        '<div class="img-col">'+ht(c.img,'hero-ht',T(c.kicker),'16:10')+'</div></div></section>'},
    seen:function(){return sec('seen','',
      '<div class="cards3">'+O.seen.facts.map(function(x,i){return '<article class="card fact rv" style="--d:'+(i*90)+'ms"><div class="fn" data-count="'+(x.count||0)+'" data-pre="'+(x.pre||'')+'" data-suf="'+(x.suf||'')+'">'+T(x.n)+'</div><p>'+T(x.label)+'</p><small class="mono">'+U('src')+': '+T(x.src)+'</small></article>'}).join('')+'</div>')},
    task:function(){var t=O.task,pic=(O.demo.slots[0]&&O.demo.slots[0].src)||O.cover.img;
      return '<section class="blk story" id="task"><div class="wrap">'+hd('task')+'<div class="sw">'+ht(pic,'story-ht',T(t.title),'4:3')+
        '<div class="plate rv"><h3 class="q">«'+T(t.quote)+'»</h3><p class="who mono">'+T(t.who)+'</p><ul class="pts">'+t.points.map(function(p){return '<li>'+T(p)+'</li>'}).join('')+'</ul></div></div></div></section>'},
    make:function(){var m=O.make,items=m.items.slice(0,6);
      function it(x,i,side){return '<div class="rad '+side+' rv" style="--d:'+(i*80)+'ms">'+(side==='l'?'<div class="rt"><b>'+T(x.t)+'</b><span class="mono">'+T(x.fmt)+'</span><p>'+T(x.d)+'</p></div>'+curve():curve()+'<div class="rt"><b>'+T(x.t)+'</b><span class="mono">'+T(x.fmt)+'</span><p>'+T(x.d)+'</p></div>')+'</div>'}
      var L=items.filter(function(_,i){return i%2===0}),R=items.filter(function(_,i){return i%2===1});
      return sec('make','alt','<div class="radial"><div class="rc l">'+L.map(function(x,i){return it(x,i*2,'l')}).join('')+'</div>'+
        '<div class="rmid">'+ht(O.cover.img,'orb',T(O.cover.kicker),'1:1')+'</div>'+
        '<div class="rc r">'+R.map(function(x,i){return it(x,i*2+1,'r')}).join('')+'</div></div>')},
    products:function(){var p=O.products||[];
      return sec('products','','<div class="cards3 prods">'+p.map(function(x,i){return '<article class="card prod rv" style="--d:'+(i*90)+'ms">'+ht(x.src,'pc',T(x.t),'4:3')+'<h3>'+T(x.t)+'</h3><p class="mono">'+T(x.d)+'</p></article>'}).join('')+'</div>',O.productsTitle)},
    viewer:function(){var v=O.viewer;return sec('viewer','','<div class="vw rv">'+K.viewer3d(v)+'</div><p class="cap mono rv">'+T(v.caption)+'</p>',v.title)},
    demo:function(){var d=O.demo;
      return sec('demo','alt','<div class="dframes">'+d.slots.map(function(s,i){return '<div class="ds ds'+(i+1)+'">'+K.fig(s,i,'',s.ratio)+'<p class="mono sc">'+T(s.t)+'</p></div>'}).join('')+'</div><p class="cap mono rv">'+T(d.caption)+'</p>')},
    steps:function(){var s=O.steps;
      return sec('steps','','<div class="cards4 sts">'+s.items.map(function(x,i){return '<article class="card step rv" style="--d:'+(i*80)+'ms"><div class="sn">'+(i+1)+'</div><div class="mono">'+T(x.d)+'</div><h3>'+T(x.t)+'</h3><p>'+T(x.p)+'</p></article>'}).join('')+'</div><p class="note mono rv">'+T(s.note)+'</p>')},
    pricing:function(){var p=O.pricing;
      return sec('pricing','alt','<div class="plans">'+p.plans.map(function(x,i){return '<article class="card plan rv'+(x.rec?' rec':'')+'" style="--d:'+(i*90)+'ms">'+(x.rec?'<span class="tag mono">'+U('rec')+'</span>':'')+'<h3>'+T(x.t)+'</h3><div class="price">'+T(x.price)+'</div><div class="mono tm">'+T(x.time)+'</div><ul>'+x.items.map(function(it){return '<li>'+T(it)+'</li>'}).join('')+'</ul></article>'}).join('')+'</div><p class="note mono rv">'+T(p.note)+'</p>')},
    assure:function(){var a=O.assure;
      function col(c,cls){return '<div class="card col '+cls+' rv"><h3>'+T(c.title)+'</h3><ul>'+c.items.map(function(x){return '<li><b>'+T(x.t)+'</b><span>'+T(x.d)+'</span></li>'}).join('')+'</ul></div>'}
      return sec('assure','','<div class="two">'+col(a.give,'give')+col(a.depends,'dep')+'</div>')},
    more:function(){return sec('more','alt','<div class="cards3">'+O.more.items.map(function(x,i){return '<article class="card more rv" style="--d:'+(i*90)+'ms"><div class="mono ic">'+x.i+'</div><h3>'+T(x.t)+'</h3><p>'+T(x.d)+'</p></article>'}).join('')+'</div>')},
    next:function(){var n=O.next;K.num();
      return '<section class="blk nx" id="next"><div class="wrap"><div class="pl">'+ht(O.cover.img,'nx-ht',T(n.title),'16:10')+'<div class="nt"><div class="mono rv">'+U('s_next')+'</div><h2 class="h2 words">'+K.words(n.title)+'</h2><p class="lead rv">'+T(n.lead)+'</p><a class="btn big rv" href="'+O.contact.brief+'">'+T(n.btn)+'</a></div></div></div></section>'}
  };
  var DEFS='<svg width="0" height="0" style="position:absolute" aria-hidden="true"><filter id="ht-tone" color-interpolation-filters="sRGB"><feComponentTransfer><feFuncR type="gamma" exponent="2.4"/><feFuncG type="gamma" exponent="2.4"/><feFuncB type="gamma" exponent="2.4"/></feComponentTransfer></filter></svg>';
  K.mount(function(){return DEFS+K.chrome(O.blocks.map(function(b){return B[b]?B[b]():''}).join(''))});
})();
