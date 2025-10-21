document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("themeToggle").addEventListener("click", () => {
  const root = document.documentElement;
  const current = root.getAttribute("data-theme");
  root.setAttribute("data-theme", current === "olive" ? "navy" : "olive");
});
const form = document.getElementById("contactForm");
if(form){
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const nombre = (fd.get("nombre")||"").trim();
    const email  = (fd.get("email")||"").trim();
    const mensaje= (fd.get("mensaje")||"").trim();
    const msg = document.getElementById("formMsg");
    if(!nombre || !email || !mensaje){
      if(msg){ msg.textContent = "Completa nombre, email y mensaje."; msg.style.color = "#ff6b6b"; }
      return;
    }
    const asunto = encodeURIComponent("Consulta — ALPA Systems");
    const cuerpo  = encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`);
    window.location.href = `mailto:contacto@alpasystems.com?subject=${asunto}&body=${cuerpo}`;
    if(msg){ msg.textContent = "Mensaje preparado en tu cliente de correo."; msg.style.color = "#9fbf84"; }
    form.reset();
  });
}
