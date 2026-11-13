const menuButton=document.querySelector('.menu-toggle');const nav=document.querySelector('.main-nav');if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'✕':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰'}))}document.querySelectorAll('#year').forEach(el=>el.textContent=new Date().getFullYear());

// CILO Global WhatsApp contact shortcut
const waLink=document.createElement('a');waLink.href='https://wa.me/94722664945';waLink.target='_blank';waLink.rel='noopener';waLink.className='cilo-whatsapp-float';waLink.setAttribute('aria-label','Chat with CILO Global on WhatsApp');waLink.textContent='WhatsApp';Object.assign(waLink.style,{position:'fixed',right:'22px',bottom:'22px',zIndex:'9999',padding:'13px 18px',borderRadius:'999px',background:'#167c55',color:'#fff',fontWeight:'700',fontSize:'14px',textDecoration:'none',boxShadow:'0 8px 24px rgba(0,0,0,.16)'});document.body.appendChild(waLink);


// Gentle pointer-driven depth on the homepage visual (disabled for touch/reduced motion).
const heroVisual=document.querySelector('.hero-visual');
if(heroVisual&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&!('ontouchstart' in window)){
  heroVisual.addEventListener('pointermove',event=>{
    const rect=heroVisual.getBoundingClientRect();
    const x=(event.clientX-rect.left)/rect.width-.5;
    const y=(event.clientY-rect.top)/rect.height-.5;
    heroVisual.style.transform=`perspective(1000px) rotateY(${x*5}deg) rotateX(${-y*4}deg)`;
  });
  heroVisual.addEventListener('pointerleave',()=>{heroVisual.style.transform='perspective(1000px) rotateY(0) rotateX(0)'});
}
