# Nanovid — Sitio Web Oficial

Sitio estático de **Nanovid** — agua alcalina **AlcaVid pH 8.7** con reparto a domicilio en Tlaxcala.

- **Producción**: https://droko1982.github.io/nanovid-tlaxcala/
- **Stack**: HTML/CSS/JS vanilla + GitHub Pages (sin build step)
- **Despliegue**: push a `master` → GitHub Pages rebuild en ~30s

## Funcionalidades

- 🌗 **Tema claro/oscuro** con detección automática de preferencia + persistencia
- 🌐 **Trilingüe**: Español (default) · English · Náhuatl tlaxcalteca (borrador comunitario)
- 🧮 **Calculadora de hidratación** interactiva (peso × actividad → litros/día y garrafones/mes)
- 📊 **Comparativa AlcaVid vs agua común** (tabla de referencia para SEO)
- 💬 **Testimonios** + AggregateRating schema
- 🏢 **Sección B2B** dedicada (oficinas, restaurantes, gimnasios, hoteles, eventos)
- 📅 **Suscripción mensual** (plan hogar)
- ✉️ **Newsletter** (FormSubmit)
- 🚚 **Rutas semanales** + cobertura por localidad
- ❓ **FAQ** completo con FAQPage schema
- 📍 **Banner cultural en náhuatl** ("Atl yectli mochan")

## Antes de publicar — reemplazos obligatorios

Busca y reemplaza estas cadenas en todo el repo (Ctrl+H en VS Code, "Replace in Files"):

| Placeholder | Reemplazar con | Dónde |
|---|---|---|
| `[WHATSAPP_E164]` | Número en formato internacional sin `+` (ej. `5212461234567`) | `index.html`, `404.html` |
| `[WHATSAPP_DISPLAY]` | Versión legible (ej. `246 123 4567`) | `index.html` |
| `dapovedag@gmail.com` | Email que recibirá pedidos del formulario | `index.html` (form `data-endpoint` y newsletter) |

> **FormSubmit**: la primera vez que llegue un pedido, FormSubmit te enviará un correo de activación. Tienes que abrir ese correo y dar click al link de confirmación — después el formulario funciona automáticamente.

## SEO — keywords objetivo

**Español (primario):**
- agua alcalina Tlaxcala · agua purificada Tlaxcala · garrafón a domicilio Tlaxcala
- AlcaVid · Nanovid · agua pH 8.7 Tlaxcala
- agua oficinas Tlaxcala · suscripción agua Tlaxcala
- reparto agua Totolac / Panotla / Tizatlán / Contla / Ixtulco

**Inglés (secundario, turistas/expats):**
- alkaline water Tlaxcala · water delivery Tlaxcala · pH 8.7 water Mexico

**Náhuatl (cultural, posicionamiento de marca):**
- atl yectli · atl Tlaxcallan

### Después de publicar

1. **Google Search Console**: registra el sitio y envía `sitemap.xml`.
2. **Google Business Profile**: ficha "Nanovid" con misma dirección, horario, teléfono. Categoría: "Empresa de distribución de agua / Tienda de agua embotellada". *Esto es lo que más mueve el SEO local.*
3. **Bing Webmaster Tools**: misma operación.
4. **Reviews**: pide a clientes reales testimonios + reseñas en Google Maps. Reemplaza los testimonios actuales en `i18n.js` (`testimonials.t1...t6`) por los reales — y actualiza el JSON-LD `aggregateRating.ratingCount` en `index.html`.

## Datos confirmados (de captura Instagram @nanovid.tlx)

- **Marca**: Nanovid (logo: "nano" azul + "vid" verde)
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
| Horario | L-V 9-18, Sáb 9-14 | Cambia en `index.html` y en JSON-LD de horarios |
| AggregateRating | 5.0 · 47 reviews | Reemplaza con datos reales cuando los tengas |

## Náhuatl — nota importante

Las traducciones al náhuatl en `js/i18n.js` son un **borrador comunitario**. El náhuatl tlaxcalteca tiene variantes regionales y conjugaciones complejas; algunas frases largas son adaptaciones libres. Si tienes hablantes nativos en tu red, agradecemos correcciones. Lo cultural y el posicionamiento de marca pesan más que la perfección lingüística — pero deberías mejorarlo cuando puedas.

## Estructura

```
nanovid-tlaxcala/
├── index.html           ← landing principal (i18n + dark mode)
├── 404.html
├── privacidad.html
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── css/styles.css
├── js/
│   ├── main.js          ← theme, lang, calc, forms
│   └── i18n.js          ← traducciones ES/EN/NA
└── assets/img/
    ├── logo.svg
    └── favicon.svg
```

## 📸 Estado actual de las fotos

**Provisionales (Unsplash, libres de uso comercial)** — están en producción ahora mismo:

| Archivo | Foto | Crédito |
|---|---|---|
| `assets/img/alcavid-garrafon.jpg` | Rejilla con garrafones azules de 19L | [Daniela Flores](https://unsplash.com/photos/uSwNhLJaekc) en Unsplash |
| `assets/img/tlaxquita-cacao.jpg` | Manos sosteniendo granos de cacao | [Pablo Merchán Montes](https://unsplash.com/photos/SCbq6uKCyMY) en Unsplash |
| `assets/img/og-cover.jpg` | Garrafones (vista horizontal para social) | Daniela Flores en Unsplash |

> Estas fotos son **placeholders profesionales**. La licencia de Unsplash permite uso comercial sin atribución, pero damos crédito por buena práctica. Reemplázalas con tus fotos reales de Nanovid (Camino A o B abajo) cuando puedas — el sitio las reconoce automáticamente.

## 🔁 Cómo reemplazarlas con tus fotos reales

El sitio ya está listo para recibir fotos reales. Mientras los archivos no existan, se muestra un SVG decorativo. En cuanto subes el archivo con el nombre exacto, la foto aparece automáticamente — sin tocar el HTML.

**Pasos para tu Instagram → web:**

1. Abre Instagram en tu teléfono → entra a tu post de cada producto
2. Toca los 3 puntos (`⋯`) → "Guardar foto" (o haz screenshot del post)
3. Manda la foto a tu computadora (correo, AirDrop, WhatsApp Web, etc.)
4. **Recórtala cuadrada** (1:1) o 4:5 a ~1200×1200 px (Photoshop, Canva o GIMP gratis)
5. Guarda como JPG en `nanovid-tlaxcala/assets/img/` con el nombre exacto:

| Archivo | Para qué | Tamaño recomendado |
|---|---|---|
| `alcavid-garrafon.jpg` | Tarjeta del producto AlcaVid | 1200×1200 px (cuadrado) |
| `tlaxquita-cacao.jpg` | Tarjeta del producto Tlaxquita | 1200×1200 px (cuadrado) |
| `og-cover.jpg` | Vista previa al compartir el link en WhatsApp/Facebook/Twitter | **1200×630 px exacto** (Instagram no sirve, el aspecto es distinto) |

6. Push a GitHub: `git add assets/img/ && git commit -m "chore: fotos reales de productos" && git push`
7. En 30-60 segundos las fotos aparecen en producción.

**Tip OG cover**: combina logo + garrafón + texto "Agua Alcalina pH 8.7 · Tlaxcala" en Canva (template "Facebook Post" 1200×630). Es la imagen que se ve cuando alguien comparte el link.

> ⚠️ Los archivos no se versionan binarios pesados — mantenlas bajo 300 KB cada una. Usa [tinyjpg.com](https://tinyjpg.com) gratis.

### Si no puedes editar fotos
Mándame las fotos directamente en este chat (arrástralas a la conversación) y yo las guardo en el repo con el nombre y formato correctos.

## Comandos útiles

```bash
# Probar local
python -m http.server 8000     # luego abrir http://localhost:8000

# Despliegue
git add .
git commit -m "feat: tu cambio"
git push origin master
```

## URLs por idioma

- Español (default): `https://droko1982.github.io/nanovid-tlaxcala/`
- Inglés: `https://droko1982.github.io/nanovid-tlaxcala/?lang=en`
- Náhuatl: `https://droko1982.github.io/nanovid-tlaxcala/?lang=na`
