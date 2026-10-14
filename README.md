# Portafolio

Página personal tipo perfil hecha con Angular 22 (standalone, signals, zoneless).

## Desarrollo

```bash
npm start        # http://localhost:4200
npm run build    # genera dist/portafolio/browser
npm test         # tests con Vitest
```

## Personalización

- **Contenido:** edita `src/app/data/profile.ts`, que tiene un bloque en español (`es`) y otro en inglés (`en`).
- **Textos de la interfaz** (menú, botones): `src/app/data/ui.ts`.
- **Foto / CV / capturas:** colócalos en `public/` y pon la ruta en `avatar`, `cv` (uno por idioma) o `image` del proyecto.
- **Colores y tipografía:** variables CSS al inicio de `src/styles.scss` (tema oscuro y claro).
- **Título de la pestaña:** `src/index.html`.

## Estructura

```
src/app/
├── core/i18n.ts           # idioma ES/EN (guardado en localStorage)
├── core/theme.ts          # tema claro/oscuro (guardado en localStorage)
├── data/profile.ts        # todo el contenido, en español e inglés
├── data/ui.ts             # textos fijos de la interfaz
├── shared/icon.ts         # iconos SVG
├── shared/reveal.ts       # animación al hacer scroll
└── sections/              # header, hero, experience, projects, about, contact
```
