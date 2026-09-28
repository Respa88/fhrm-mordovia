
document.addEventListener('DOMContentLoaded',()=>{
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.08});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  const path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.menu a').forEach(a=>{if(a.getAttribute('href')===path)a.classList.add('active')});
});
