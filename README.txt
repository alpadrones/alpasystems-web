# Favicons "AP" para ALPA Systems

Archivos incluidos:
- assets/favicon.svg
- assets/favicon-32.png
- assets/apple-touch-icon.png

## Cómo integrarlo (en TODAS tus páginas: index.html, tecnologia.html, aplicaciones.html, contacto.html)
En el <head> añade o sustituye estas líneas (preferible dejar el SVG primero):
<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">

> Nota Vercel/CDN: si ya tenías iconos antes, haz un nuevo deploy o fuerza recarga (Ctrl/Cmd+Shift+R).
