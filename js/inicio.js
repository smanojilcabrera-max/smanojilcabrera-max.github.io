/* Se carga en <head>: activa las animaciones y evita que otra web meta esta página en un marco (clickjacking). */
document.documentElement.classList.add('js');
if (window.top !== window.self) { try { window.top.location = window.self.location.href; } catch (e) { document.documentElement.style.display = 'none'; } }
