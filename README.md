# Nanovid — Sitio Web Oficial

Sitio estático de **Nanovid** — agua alcalina **AlcaVid pH 8.7** con reparto a domicilio en Tlaxcala.

- **Producción**: https://droko1982.github.io/nanovid-tlaxcala/
- **Stack**: HTML/CSS/JS vanilla + GitHub Pages (sin build step).
- **Despliegue**: push a `master` → GitHub Pages rebuild en ~30s.

## Antes de publicar — reemplazos obligatorios

Busca y reemplaza estas cadenas en todo el repo (Ctrl+H en VS Code):

| Placeholder | Reemplazar con | Dónde |
|---|---|---|
| `[WHATSAPP_E164]` | Número en formato internacional sin `+` (ej. `5212461234567`) | `index.html`, `404.html` |
| `[WHATSAPP_DISPLAY]` | Versión legible (ej. `246 123 4567`) | `index.html` |
| `dapovedag@gmail.com` | Email de negocio que recibirá los pedidos del formulario | `index.html` (línea del form `data-endpoint`) |

> **FormSubmit**: la primera vez que llegue un pedido, FormSubmit te enviará un correo de activación. Tienes que abrir ese correo y dar click al link de confirmación — después el formulario funciona automáticamente.

## Datos confirmados (de la captura de Instagram)

- **Marca**: Nanovid
- **Producto principal**: AlcaVid — Agua Alcalina pH 8.7, garrafón retornable 20 L, slogan "Eleva tu hidratación"
- **Producto solidario semanal**: Tlaxquita — Cacao en grano, $30 MXN
- **Domicilio**: Calle Teotlalpan #21, La Candelaria Teotlalpan, Tlaxcala
- **Ruta miércoles**: Tizatlán, Panotla (Zona Militar), Teotlalpan, Chimalpa, Tepeticpac, San Marcos, Totolac
- **Otras zonas mencionadas**: Ixtulco, Contla
- **Instagram**: [@nanovid.tlx](https://www.instagram.com/nanovid.tlx/)

## Datos asumidos (verifica antes de publicar)

| Dato | Valor actual | Verifica |
|---|---|---|
| Código postal | 90160 (Totolac) | Confirma con tu CP real |
| Coordenadas geo | 19.341, -98.256 | Abre Google Maps en tu planta y copia las coords reales |
| Horario | L-V 9-18, Sáb 9-14 | Cambia en `index.html` y en el JSON-LD de horarios |

## SEO — keywords objetivo

- agua alcalina Tlaxcala
- agua purificada Tlaxcala
- garrafón a domicilio Tlaxcala
- AlcaVid · Nanovid
- agua pH 8.7 Tlaxcala
- reparto agua Totolac / Panotla / Tizatlán / Contla / Ixtulco

Después de publicar:

1. **Google Search Console**: dar de alta el sitio y enviar `sitemap.xml`.
2. **Google Business Profile**: crea ficha "Nanovid" con la misma dirección, horario, teléfono y categoría "Empresa de distribución de agua / Tienda de agua embotellada". Esto es lo que más mueve el SEO local.
3. **Bing Webmaster Tools**: misma operación que Google Search Console.

## Estructura

```
nanovid-tlaxcala/
├── index.html           ← landing principal
├── 404.html
├── privacidad.html
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── css/styles.css
├── js/main.js
└── assets/img/
    ├── logo.svg
    └── favicon.svg
```

## Imágenes recomendadas para subir

Para mejorar conversión y SEO, sube estos archivos a `assets/img/`:

- `og-cover.jpg` (1200×630) — portada para WhatsApp/Facebook al compartir el link
- `alcavid.jpg` — foto real del garrafón
- `tlaxquita.jpg` — foto del cacao

Los SVG actuales son ilustraciones temporales que funcionan, pero las fotos reales convierten mucho mejor.

## Comandos útiles

```bash
# Probar local
python -m http.server 8000     # luego abrir http://localhost:8000

# Despliegue
git add .
git commit -m "feat: actualizar contenido"
git push origin master
```
