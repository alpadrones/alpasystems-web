document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const nombre = (fd.get('nombre')||fd.get('name')||'').trim();
    const email  = (fd.get('email') ||'').trim();
    const mensaje= (fd.get('mensaje')||fd.get('message')||'').trim();
    const msg = document.getElementById('formMsg');
    if(!nombre || !email || !mensaje){
      if(msg){ msg.textContent = (document.documentElement.lang==='en'?'Please complete name, email and message.':'Por favor, completa nombre, email y mensaje.'); msg.style.color = '#ff6b6b'; }
      return;
    }
    const es = document.documentElement.lang!=='en';
    const subject = es ? 'Consulta — ALPA Systems' : 'Inquiry — ALPA Systems';
    const body = (es?`Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`:`Name: ${nombre}\nEmail: ${email}\n\n${mensaje}`);
    window.location.href = `mailto:contacto@alpasystems.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if(msg){ msg.textContent = (es?'Mensaje preparado en tu cliente de correo.':'Message prepared in your mail client.'); msg.style.color = '#9fbf84'; }
    form.reset();
  });
}
