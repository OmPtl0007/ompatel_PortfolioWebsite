const burger=document.getElementById('burger');
const menu=document.getElementById('menu');
if(burger){burger.addEventListener('click',()=>{menu.style.display=menu.style.display==='flex'?'none':'flex';});}

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    if(id.startsWith('#')){
      e.preventDefault();
      document.querySelector(id).scrollIntoView({behavior:'smooth'});
      if(window.innerWidth<768){menu.style.display='none';}
    }
  });
});

document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  alert('Thank you for reaching out, Om will contact you soon!');
  e.target.reset();
});

document.getElementById('year').textContent=new Date().getFullYear();
