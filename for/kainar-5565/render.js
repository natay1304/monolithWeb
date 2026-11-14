/* Шаблон editorial: разметка блоков. Контент — window.OFFER, движок — ../_lib/kit.js */
(function(){
  var K=window.Kit,O=K.O,T=K.T,U=K.U;
  function head(k){return '<div class="sh rv"><span class="mono">'+U('s_'+k)+'</span></div><span class="no" aria-hidden="true">'+K.num()+'</span><span class="vc mono" aria-hidden="true">'+U('s_'+k)+' · MONOLITH × '+T(O.name)+'</span>'}
  function sec(id,cls,k,inner){return '<section class="sec '+cls+'" id="'+id+'">'+head(k)+'<div class="wrap">'+inner+'</div></section>'}
  function arrow(){return '<svg class="ar" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M6 18L18 6M8 6h10v10" fill="none" stroke="currentColor" stroke-width="2"/></svg>'}
  var B={
    cover:function(){var c=O.cover;
      var media=c.img?'<img data-par=".07" src="'+c.img+'" alt="">':K.ph('ASSET 00 · 16:9 · '+T(c.kicker),'16:9');
      var big=K.chars(c.big),plain=T(c.big);
      return '<section class="cover" id="cover"><div class="wrap cv-top mono rv"><span>'+T(c.kicker)+'</span><span>'+c.meta.map(T).join(' · ')+'</span></div>'+
        '<div class="stack"><h1 class="giant chars" aria-label="'+plain+'">'+big+'</h1><div class="giant dup chars" aria-hidden="true">'+big+'</div>'+
        '<figure class="hero-fig clip-x"><div class="media">'+media+'</div>'+
        '<span class="vc2 mono" aria-hidden="true">'+T(c.vert)+'</span>'+
        '<div class="over"><p class="hl rv">'+T(c.headline)+'</p><p class="ben rv">'+T(c.benefit)+'</p><a class="btn rv" href="#seen">'+T(c.cta)+' <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M12 4v16M5 13l7 7 7-7" fill="none" stroke="currentColor" stroke-width="2"/></svg></a></div></figure></div></section>'},
    seen:function(){var f=O.seen.facts.map(function(x){
        return '<li class="fact"><div class="rule"></div><div class="fn" data-count="'+(x.count||0)+'" data-pre="'+(x.pre||'')+'" data-suf="'+(x.suf||'')+'">'+T(x.n)+'</div><div class="ft rv"><p>'+T(x.label)+'</p><small class="mono">'+U('src')+': '+T(x.src)+'</small></div></li>'}).join('');
      return sec('seen','','seen','<h2 class="h2 words">'+K.words(O.seen.title)+'<span class="dot">.</span></h2><ol class="facts">'+f+'</ol>')},
    task:function(){var t=O.task;
      return sec('task','dark','task','<span class="qm" aria-hidden="true">«</span><h2 class="quote words">'+K.words(t.quote)+'</h2><p class="who mono rv">'+T(t.who)+'</p><ul class="pts">'+t.points.map(function(p,i){return '<li class="rv" style="--d:'+(i*90)+'ms"><span class="mono">0'+(i+1)+'</span>'+T(p)+'</li>'}).join('')+'</ul>')},
    make:function(){var m=O.make;
      return sec('make','alt','make','<h2 class="h2 words">'+K.words(m.title)+'<span class="dot">.</span></h2><ul class="navlist">'+m.items.map(function(x,i){
        return '<li><div class="rule"></div><a class="row" href="#demo"><span class="mono rn">0'+(i+1)+'</span><span class="rt">'+T(x.t)+'</span><span class="rf mono">'+T(x.fmt)+'</span><span class="rd">'+T(x.d)+'</span>'+arrow()+'</a></li>'}).join('')+'</ul>')},
    viewer:function(){var v=O.viewer;return sec('viewer','alt','viewer','<h2 class="h2 words">'+K.words(v.title)+'<span class="dot">.</span></h2><div class="vw rv">'+K.viewer3d(v)+'</div><p class="cap mono rv">'+T(v.caption)+'</p>')},
    demo:function(){var d=O.demo;
      return sec('demo','','demo','<h2 class="h2 demo-h words">'+K.words(d.title)+'<span class="dot">.</span></h2><div class="collage">'+d.slots.map(function(s,i){return '<div class="cs cs'+(i+1)+'">'+K.fig(s,i,'',s.ratio)+'</div>'}).join('')+'</div><p class="cap mono rv">'+T(d.caption)+'</p>')},
    steps:function(){var s=O.steps;
      return sec('steps','alt','steps','<h2 class="h2 words">'+K.words(s.title)+'<span class="dot">.</span></h2><p class="note mono rv">'+T(s.note)+'</p><ol class="steps">'+s.items.map(function(x,i){return '<li><div class="rule"></div><div class="sd">'+T(x.d)+'</div><div class="sb rv"><h3>'+T(x.t)+'</h3><p>'+T(x.p)+'</p></div></li>'}).join('')+'</ol>')},
    pricing:function(){var p=O.pricing;
      return sec('pricing','','pricing','<h2 class="h2 words">'+K.words(p.title)+'<span class="dot">.</span></h2><div class="plans">'+p.plans.map(function(x,i){
        return '<div class="plan rv'+(x.rec?' rec':'')+'" style="--d:'+(i*100)+'ms">'+(x.rec?'<span class="tag mono">'+U('rec')+'</span>':'')+'<h3 class="mono">'+T(x.t)+'</h3><div class="price">'+T(x.price)+'</div><div class="mono time">'+T(x.time)+'</div><ul>'+x.items.map(function(it){return '<li>'+T(it)+'</li>'}).join('')+'</ul></div>'}).join('')+'</div><p class="note mono rv">'+T(p.note)+'</p>')},
    assure:function(){var a=O.assure;
      function col(c,cls){return '<div class="col '+cls+' rv"><h3 class="mono">'+T(c.title)+'</h3><ul>'+c.items.map(function(x){return '<li><b>'+T(x.t)+'</b><span>'+T(x.d)+'</span></li>'}).join('')+'</ul></div>'}
      return sec('assure','dark','assure','<h2 class="h2 words">'+K.words(a.title)+'<span class="dot">.</span></h2><div class="two">'+col(a.give,'give')+col(a.depends,'dep')+'</div>')},
    more:function(){var m=O.more;
      return sec('more','','more','<h2 class="h2 words">'+K.words(m.title)+'<span class="dot">.</span></h2><ul class="navlist">'+m.items.map(function(x){
        return '<li><div class="rule"></div><div class="row static"><span class="mono rn">'+x.i+'</span><span class="rt">'+T(x.t)+'</span><span class="rf"></span><span class="rd">'+T(x.d)+'</span></div></li>'}).join('')+'</ul>')},
    next:function(){var n=O.next;
      return '<section class="sec next" id="next"><span class="no" aria-hidden="true">'+K.num()+'</span><div class="wrap"><div class="mono rv">'+U('s_next')+'</div><h2 class="giant2 chars">'+K.chars(n.title)+'</h2><p class="lead rv">'+T(n.lead)+'</p><a class="btn big rv" href="'+O.contact.brief+'">'+T(n.btn)+' '+arrow()+'</a></div></section>'}
  };
  K.mount(function(){return K.chrome(O.blocks.map(function(b){return B[b]?B[b]():''}).join(''))});
})();
