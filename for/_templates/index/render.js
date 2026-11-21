/* Шаблон index: оглавление-предложение «(1) Задача (2) Что сделаем …» + модульная сетка кадров.
   Контент — window.OFFER, движок — ../_lib/kit.js */
(function(){
  var K=window.Kit,O=K.O,T=K.T,U=K.U;
  var ORDER=O.blocks.filter(function(b){return b!=='cover'&&b!=='toc'});
  function no(id){return '('+(ORDER.indexOf(id)+1)+')'}
  function title(id){var s=O[id]&&O[id].title;return s?T(s):U('s_'+id)}
  function arrow(){return '<svg class="ar" viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M6 18L18 6M8 6h10v10" fill="none" stroke="currentColor" stroke-width="2"/></svg>'}
  function bh(id,cap){K.num();return '<div class="bh"><h2 class="bt words"><span class="bn">'+no(id)+'</span> '+K.words(title(id))+'</h2><p class="bc mono rv">'+(cap||T(O.toc[id])||'')+'</p></div><div class="rule line"></div>'}
  function sec(id,cls,inner,cap){return '<section class="blk '+cls+'" id="'+id+'"><div class="wrap">'+bh(id,cap)+inner+'</div></section>'}
  var B={
    cover:function(){var c=O.cover;
      var media=c.img?'<img data-par=".07" src="'+c.img+'" alt="">':K.ph('ASSET 00 · 16:9','16:9');
      return '<section class="cover" id="cover"><div class="plate"><div class="media">'+media+'</div>'+
        '<div class="wrap pin"><h1 class="big words" aria-label="MONOLITH × '+T(O.name)+'">'+K.words({ru:'MONOLITH ×',en:'MONOLITH ×'})+'<br>'+K.words(O.name)+'</h1>'+
        '<p class="hl rv">'+T(c.headline)+'</p>'+
        '<div class="corner"><div class="mono rv">'+T(c.kicker)+'<br>'+c.meta.map(T).join(' · ')+'</div><p class="ben rv">'+T(c.benefit)+'</p></div></div></div></section>'},
    toc:function(){
      return '<section class="blk toc" id="toc"><div class="wrap"><div class="mono tl rv">'+(K.lang()==='ru'?'Содержание предложения':'Contents')+'</div><ol>'+ORDER.map(function(id,i){
        return '<li><a class="trow" href="#'+id+'"><span class="tn">('+(i+1)+')</span><span class="tt">'+title(id)+'</span><span class="tc mono">'+T(O.toc[id])+'</span>'+arrow()+'</a><div class="rule line" style="--d:'+(i*60)+'ms"></div></li>'}).join('')+'</ol></div></section>'},
    seen:function(){return sec('seen','',
      '<div class="cells c3">'+O.seen.facts.map(function(x,i){
        return '<article class="cell"><div class="mono cn">'+(i<9?'0':'')+(i+1)+'</div>'+(x.img?'<img class="fimg" src="'+x.img+'" alt="">':'')+'<div class="fn" data-count="'+(x.count||0)+'" data-pre="'+(x.pre||'')+'" data-suf="'+(x.suf||'')+'">'+T(x.n)+'</div><p>'+T(x.label)+'</p><small class="mono">'+U('src')+': '+T(x.src)+'</small></article>'}).join('')+'</div>')},
    task:function(){var t=O.task;return sec('task','alt',
      '<div class="split"><div><p class="quote rv">«'+T(t.quote)+'»</p><p class="who mono rv">'+T(t.who)+'</p></div><ol class="pts">'+t.points.map(function(p,i){return '<li class="rv" style="--d:'+(i*90)+'ms"><span class="mono">('+(i+1)+')</span>'+T(p)+'</li>'}).join('')+'</ol></div>')},
    make:function(){return sec('make','',
      '<div class="cells c3 mk">'+O.make.items.map(function(x,i){
        return '<article class="cell rv" style="--d:'+((i%3)*80)+'ms"><div class="mono cn">('+(i+1)+')</div><h3>'+T(x.t)+'</h3><div class="fmt mono">'+T(x.fmt)+'</div><p>'+T(x.d)+'</p></article>'}).join('')+'</div>')},
    viewer:function(){var v=O.viewer;return sec('viewer','','<div class="vw rv">'+K.viewer3d(v)+'</div><p class="cap mono rv">'+T(v.caption)+'</p>',T(O.toc.viewer))},
    demo:function(){var d=O.demo;return sec('demo','alt',
      '<div class="frames">'+d.slots.map(function(s,i){return '<figure class="f f'+(i+1)+'"><div class="mono fy">'+(i<9?'0':'')+(i+1)+' / '+(s.ratio||'4:3')+'</div>'+K.fig(s,i,'',s.ratio)+'<figcaption class="mono">'+T(s.t)+'</figcaption></figure>'}).join('')+'</div><p class="cap mono rv">'+T(d.caption)+'</p>')},
    steps:function(){var s=O.steps;return sec('steps','',
      '<div class="cells c4 st">'+s.items.map(function(x,i){return '<article class="cell rv" style="--d:'+(i*80)+'ms"><div class="mono cn">'+T(x.d)+'</div><h3>('+(i+1)+') '+T(x.t)+'</h3><p>'+T(x.p)+'</p></article>'}).join('')+'</div><p class="note mono rv">'+T(s.note)+'</p>')},
    pricing:function(){var p=O.pricing;return sec('pricing','alt',
      '<div class="plans">'+p.plans.map(function(x,i){return '<article class="plan rv'+(x.rec?' rec':'')+'" style="--d:'+(i*90)+'ms">'+(x.rec?'<span class="tag mono">'+U('rec')+'</span>':'')+'<div class="mono cn">('+(i+1)+') '+T(x.t)+'</div><div class="price">'+T(x.price)+'</div><div class="mono tm">'+T(x.time)+'</div><ul>'+x.items.map(function(it){return '<li>'+T(it)+'</li>'}).join('')+'</ul></article>'}).join('')+'</div><p class="note mono rv">'+T(p.note)+'</p>')},
    assure:function(){var a=O.assure;
      function col(c){return '<div class="col"><h3 class="mono rv">'+T(c.title)+'</h3><ol>'+c.items.map(function(x,i){return '<li class="rv"><span class="mono">('+(i+1)+')</span><div><b>'+T(x.t)+'</b><span>'+T(x.d)+'</span></div></li>'}).join('')+'</ol></div>'}
      return sec('assure','','<div class="split2">'+col(a.give)+col(a.depends)+'</div>')},
    more:function(){return sec('more','alt',
      '<ol class="mrows">'+O.more.items.map(function(x,i){return '<li><div class="mrow rv"><span class="tn mono">'+x.i+'</span><h3 class="tt">'+T(x.t)+'</h3><p class="tc">'+T(x.d)+'</p></div><div class="rule line"></div></li>'}).join('')+'</ol>')},
    next:function(){var n=O.next;K.num();
      return '<section class="blk next" id="next"><div class="wrap"><div class="mono rv">'+no('next')+' '+U('s_next')+'</div><h2 class="nt words">'+K.words(n.title)+'</h2><p class="lead rv">'+T(n.lead)+'</p><a class="btn big rv" href="'+O.contact.brief+'">'+T(n.btn)+' '+arrow()+'</a></div></section>'}
  };
  K.mount(function(){return K.chrome(O.blocks.map(function(b){return B[b]?B[b]():''}).join(''))});
})();
