document.getElementById("year").textContent = new Date().getFullYear();
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  const root = document.documentElement;
  const current = root.getAttribute("data-theme");
  root.setAttribute("data-theme", current === "olive" ? "navy" : "olive");
});
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = e.target.nombre.value.trim();
  const email = e.target.email.value.trim();
  const mensaje = e.target.mensaje.value.trim();
  const formMsg = document.getElementById("formMsg");
  if (!nombre || !email || !mensaje) {
    formMsg.textContent = "Completa todos los campos.";
    formMsg.style.color = "#ff6b6b";
    return;
  }
  const asunto = encodeURIComponent("Consulta — ALPA Systems");
  const cuerpo = encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\nMensaje:\n${mensaje}`);
  window.location.href = `mailto:contacto@alpasystems.com?subject=${asunto}&body=${cuerpo}`;
  formMsg.textContent = "Mensaje preparado en tu cliente de correo.";
  formMsg.style.color = "#9fbf84";
  e.target.reset();
});
