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

## Imágenes recomendadas para subir

Mejoran conversión y SEO. Sube a `assets/img/`:

- `og-cover.jpg` (1200×630) — portada al compartir el link en WhatsApp/Facebook
- `alcavid.jpg` — foto real del garrafón
- `tlaxquita.jpg` — foto del cacao

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
