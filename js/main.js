document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
  if(btn&&nav)btn.addEventListener('click',()=>nav.classList.toggle('open'));
  const secs=document.querySelectorAll('.main section[id]'),links=document.querySelectorAll('.sidebar a[href^="#"]');
  if(secs.length&&links.length){
    const io=new IntersectionObserver(es=>{
      es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id));});
    },{rootMargin:'-15% 0px -65% 0px'});
    secs.forEach(s=>io.observe(s));
  }
});
