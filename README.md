# negopolis.com — Extraescolares Creatividad y Videojuegos

Web estática con [Astro](https://astro.build). Sustituye al WordPress anterior.

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # genera dist/
```

## Editar contenido
Todo está en `src/data/site.js`: contacto, horario, actividades, **colegios** (cada uno genera su página `/colegios/<slug>/`) y preguntas frecuentes.

## Antes de publicar
1. **Formulario**: crea un formulario gratis en Formspree (o similar) y pon su URL en `formEndpoint`.
2. **Legal**: completa `src/pages/aviso-legal.astro` y `privacidad.astro` (obligatorio: se recogen datos de menores).
3. **Hosting**: Netlify o Cloudflare Pages (gratis). Build `npm run build`, carpeta `dist`. `public/_redirects` hace los 301 desde las URLs antiguas.
4. Alta en Google Search Console y envía `https://negopolis.com/sitemap-index.xml`.
5. Crea/actualiza la ficha de Google Business Profile.

## Licencia

Código propietario, todos los derechos reservados. Solo puede usarlo la persona autorizada por el autor. Ver [LICENSE](LICENSE).
