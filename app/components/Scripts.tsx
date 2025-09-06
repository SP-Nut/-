export function Scripts() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){
  var toggle=document.getElementById('mobileToggle');
  var menu=document.getElementById('mobileMenu');
  var back=document.getElementById('backToTop');
  var header=document.querySelector('.site-header');
  var hero=document.querySelector('.hero-modern');
  var navLinks=[].slice.call(document.querySelectorAll('nav a[href^="#"]'));
  function activate(hash){ navLinks.forEach(function(a){ a.classList.toggle('active', a.getAttribute('href')===hash); }); }
  if(toggle && menu){
    toggle.addEventListener('click',function(){
      var ex=toggle.getAttribute('aria-expanded')==='true';
      toggle.setAttribute('aria-expanded',String(!ex));
      menu.classList.toggle('hidden');
      if(!ex){ var first=menu.querySelector('a'); if(first) first.focus(); }
    });
    menu.querySelectorAll('a').forEach(function(a){ a.addEventListener('click',function(){
      toggle.setAttribute('aria-expanded','false');
      menu.classList.add('hidden');
    }); });
  }
  // Scroll spy
  var sections=[].slice.call(document.querySelectorAll('main section[id]'));
  var ticking=false;
  function handleScroll(){
    if(!ticking){
      requestAnimationFrame(function(){
        var pos=window.scrollY+120;
        var current='#top';
        for(var i=0;i<sections.length;i++){ var s=sections[i]; if(s.offsetTop<=pos) current='#'+s.id; }
        activate(current);
        if(back){ back.classList.toggle('visible', window.scrollY>600); }
        ticking=false;
      });
      ticking=true;
    }
  }
  document.addEventListener('scroll',handleScroll,{passive:true});
  handleScroll();
  // Header now static (no color change on scroll)
  // FAQ accordion
  var faqBtns=[].slice.call(document.querySelectorAll('.faq-btn'));
  faqBtns.forEach(function(btn){
    btn.addEventListener('click',function(){
      var expanded=btn.getAttribute('aria-expanded')==='true';
      faqBtns.filter(function(b){return b!==btn;}).forEach(function(b){ b.setAttribute('aria-expanded','false'); var p=document.getElementById(b.getAttribute('aria-controls')); if(p){ p.hidden=true; p.style.maxHeight=null; } });
      var panel=document.getElementById(btn.getAttribute('aria-controls'));
      if(!panel) return;
      if(expanded){ btn.setAttribute('aria-expanded','false'); panel.hidden=true; panel.style.maxHeight=null; }
      else { btn.setAttribute('aria-expanded','true'); panel.hidden=false; panel.style.maxHeight=panel.scrollHeight+'px'; }
    });
  });
  window.addEventListener('resize',function(){ document.querySelectorAll('.faq-panel:not([hidden])').forEach(function(p){ p.style.maxHeight=p.scrollHeight+'px'; }); });
  // Form validation
  var form=document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var fields=['name','phone','contactId','type','message'];
      var bad=false;
      var phone=form.phone.value.trim().replace(/[^0-9]/g,'');
      fields.forEach(function(id){
        var val=form[id].value.trim();
        var invalid=!val;
        if(id==='phone') invalid=!/^0[0-9]{8,9}$/.test(phone);
        var err=document.getElementById('err-'+id); if(err) err.classList.toggle('hidden',!invalid);
        bad=bad||invalid;
      });
      if(!bad){ var success=document.getElementById('formSuccess'); if(success) success.classList.remove('hidden'); form.reset(); setTimeout(function(){ if(success) success.classList.add('hidden'); },6000); }
    });
  }
  
  // Image modal
  var modal=document.getElementById('imageModal');
  var modalImg=document.getElementById('modalImage');
  var modalClose=document.getElementById('modalClose');
  var portfolioItems=[].slice.call(document.querySelectorAll('.portfolio-item'));
  
  portfolioItems.forEach(function(item){
    item.addEventListener('click',function(){
      var src=item.getAttribute('data-image');
      var alt=item.getAttribute('data-alt');
      if(modal && modalImg && src){
        modalImg.src=src;
        modalImg.alt=alt;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow='hidden';
      }
    });
  });
  
  function closeModal(){
    if(modal){
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow='auto';
    }
  }
  
  if(modalClose){
    modalClose.addEventListener('click',closeModal);
  }
  
  if(modal){
    modal.addEventListener('click',function(e){
      if(e.target===modal) closeModal();
    });
  }
  
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape' && modal && !modal.classList.contains('hidden')){
      closeModal();
    }
  });
})();`
      }}
    />
  );
}
