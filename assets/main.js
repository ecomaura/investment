const WA='919999999999'; // TODO: replace with your WhatsApp number (country code + number, no +)
const wa=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
const P=[['index.html','Home'],['about.html','About'],['services.html','Services'],['insights.html','Insights'],['contact.html','Contact']];
const cur=location.pathname.split('/').pop()||'index.html';
document.body.insertAdjacentHTML('afterbegin',`<header><div class="wrap nav"><a class="logo" href="index.html">Eco<b>maura</b></a><button class="burger" aria-label="Menu">☰</button><nav>${P.map(p=>`<a href="${p[0]}" class="${p[0]==cur?'on':''}">${p[1]}</a>`).join('')}<a class="btn wa" target="_blank" rel="noopener" href="${wa('Hello Ecomaura, I would like to talk to an advisor.')}">WhatsApp Us</a></nav></div></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer><div class="wrap"><div class="g4"><div><h4>Ecomaura Investments</h4><p>Disciplined, transparent wealth management for families, founders and institutions.</p></div><div><h4>Pages</h4>${P.map(p=>`<a href="${p[0]}">${p[1]}</a>`).join('')}</div><div><h4>Contact</h4><a href="tel:+919999999999">+91 99999 99999</a><a href="mailto:hello@ecomaura.com">hello@ecomaura.com</a><a target="_blank" href="${wa('Hello Ecomaura')}">Chat on WhatsApp</a></div><div><h4>Office</h4><p>Your address line,<br>City, State, India</p></div></div><p class="copy">© ${new Date().getFullYear()} Ecomaura Investments. Investments are subject to market risk. Past performance is not indicative of future returns.</p></div></footer><a class="wafloat" target="_blank" rel="noopener" aria-label="WhatsApp" href="${wa('Hello Ecomaura, I have a question about investing.')}">✆</a>`);
document.querySelector('.burger').onclick=()=>document.querySelector('nav').classList.toggle('open');
document.querySelectorAll('[data-wa]').forEach(a=>{a.href=wa(a.dataset.wa);a.target='_blank';a.rel='noopener'});
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('in')),{threshold:.12});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
const f=document.getElementById('cf');if(f)f.onsubmit=e=>{e.preventDefault();const d=new FormData(f);
open(wa('New enquiry\nName: '+d.get('n')+'\nPhone: '+d.get('p')+'\nInterest: '+d.get('i')+'\nMessage: '+d.get('m')),'_blank')};
