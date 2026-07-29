# Documentación técnica — cv-portfolio

## Índice

1. [Arquitectura](#1-arquitectura)
2. [Routing](#2-routing)
3. [Componentes](#3-componentes)
4. [Flujo de datos](#4-flujo-de-datos)
5. [Estilos y theming](#5-estilos-y-theming)
6. [Tipos](#6-tipos)
7. [Utilidades](#7-utilidades)
8. [Herramientas y config](#8-herramientas-y-config)
9. [Accesibilidad](#9-accesibilidad)
10. [Build y despliegue](#10-build-y-despliegue)

---

## 1. Arquitectura

Aplicación **Single Page Application (SPA)** construida con Next.js 16 App Router en modo estático. Toda la lógica corre en el cliente (componentes marcados con `"use client"`), pero el build genera HTML estático gracias a que no hay datos dinámicos ni server components que dependan de request.

```
src/
├── app/               # Punto de entrada (layout, page, estilos globales)
├── components/        # Componentes de presentación del portfolio
│   └── ui/           # Primitivas UI reutilizables
├── config/            # Configuración de fuentes Google Fonts
├── data/              # Capa de datos estáticos (contenido del portfolio)
├── lib/               # Utilidades y hooks personalizados
└── types/             # Definiciones de tipos compartidos
```

### Principios

- **Data-driven**: todo el contenido textual está centralizado en `src/data/content.ts`. Los componentes solo renderizan.
- **Composición desde page.tsx**: `page.tsx` actúa como orquestador, importando y ordenando las secciones.
- **Sin estado global**: el estado se limita al hook `useScrollSpy` (header). No se necesita Zustand, Redux ni Context.

---

## 2. Routing

| Ruta          | Archivo              | Descripción                |
| ------------- | -------------------- | -------------------------- |
| `/`           | `src/app/page.tsx`   | Página única del portfolio |
| `/_not-found` | Generado por Next.js | Página 404 por defecto     |

### Hash navigation

La navegación interna usa fragmentos (`#hero`, `#experience`, `#formation`, `#projects`, `#contact`). Cada sección expone un `id` que el header y los CTAs referencian.

El scroll suave se define en CSS condicionalmente con `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
```

### Layout raíz

`src/app/layout.tsx` define:

- Idioma: `es`
- Color scheme: `dark`
- Meta tags: title, description, keywords, OpenGraph
- Fuentes: Inter (sans-serif) y JetBrains Mono (monoespaciada)
- Skip link de accesibilidad

---

## 3. Componentes

### Árbol de componentes

```
RootLayout
└── SkipLink
└── Home (page)
    ├── Header
    │   ├── DesktopNav (nav)
    │   │   ├── Link × 4 (menuItems)
    │   │   └── Button (Contacto)
    │   └── MobileNav (nav)
    │       └── Link × 5 (headerLabels.nav)
    ├── HeroSection
    │   ├── Badge (Terminal + título)
    │   ├── h1 (name)
    │   ├── h2 (job)
    │   ├── CTA Links (proyectos, contacto)
    │   └── Bio paragraphs
    ├── ExperienceSection
    │   └── ExperienceCard × n
    ├── FormationSection
    │   └── FormationTimeline
    ├── ProjectsSection
    │   └── ProjectCard × n
    ├── ContactSection
    │   └── EmailLink
    └── Footer
        ├── Copyright
        ├── SocialLinks (SVG inline)
        └── VersionBadge
```

### UI primitives (`src/components/ui/`)

#### Button

Componente construido con **CVA** (class-variance-authority). Sigue el patrón:

```tsx
<Button variant="primary" size="md">
  Label
</Button>
```

| Prop      | Type | Default     | Values                                                 |
| --------- | ---- | ----------- | ------------------------------------------------------ |
| `variant` | enum | `"primary"` | `primary`, `secondary`, `outline`, `ghost`, `tertiary` |
| `size`    | enum | `"default"` | `default`, `sm`, `md`, `lg`, `icon`                    |

El elemento renderizado es un `<button>` nativo con `forwardRef` para composición.

#### Card

Componente contenedor `<div>` con estilos predefinidos de borde, fondo y hover. Acepta `className` para extensiones vía `cn()`.

### Section components

Cada sección del portfolio sigue la misma convención:

- Archivo: `kebab-case-section.tsx`
- Export: `PascalCaseSection`
- Mark: `"use client"` (por el uso de Framer Motion)

| Componente          | Sección              | Animación                          |
| ------------------- | -------------------- | ---------------------------------- |
| `HeroSection`       | Hero/bio             | `fadeInUp` (carga inicial)         |
| `ExperienceSection` | Experiencia laboral  | `fadeInUp` escalonado por índice   |
| `FormationSection`  | Formación académica  | `slideInLeft` escalonado           |
| `ProjectsSection`   | Proyectos destacados | `fadeInUp` escalonado con viewport |
| `ContactSection`    | Contacto             | `fadeInUp` con viewport            |
| `Header`            | Navegación fija      | Transiciones CSS                   |
| `Footer`            | Pie de página        | Sin animación                      |

---

## 4. Flujo de datos

### Capa de datos estáticos

```
src/data/content.ts  ────────► src/data/index.ts (barrel) ────────► Componentes
```

`content.ts` exporta objetos y arrays tipados con todo el contenido del portfolio. Las secciones importan solo lo que necesitan:

```tsx
import { hero, bioParagraphs } from "@/data"; // HeroSection
import { experiences, sectionLabels } from "@/data"; // ExperienceSection
```

### Hook useScrollSpy

```tsx
const { activeSection, scrolled } = useScrollSpy(sectionIds, options?);
```

- **sectionIds**: string[] — IDs de las secciones a trackear
- **options.offset**: number (default 200) — px desde el top para considerar una sección activa
- **options.scrollThreshold**: number (default 20) — px scrolleados para marcar `scrolled: true`

Uso en `Header`:

```tsx
const sectionIds = useMemo(
  () => [...menuItems.map((item) => item.href.substring(1)), "contact"],
  []
);
const { activeSection, scrolled } = useScrollSpy(sectionIds);
```

---

## 5. Estilos y theming

### Tailwind CSS 4

Configuración vía PostCSS (`postcss.config.mjs`) con el plugin `@tailwindcss/postcss`. El archivo `globals.css` importa Tailwind y define:

#### Tema CSS custom properties

```css
@theme inline {
  --color-background: var(--background);
  --color-primary: var(--primary);
  --color-primary-container: #06b6d4;
  /* ... */
}
```

#### Paleta de colores

| Variable              | Hex       | Uso                          |
| --------------------- | --------- | ---------------------------- |
| `--background`        | `#0c1324` | Fondo principal              |
| `--foreground`        | `#dce1fb` | Texto general                |
| `--primary`           | `#4cd7f6` | Cyan acento principal        |
| `--primary-container` | `#06b6d4` | Cyan secundario (gradientes) |
| `--muted`             | `#191f31` | Fondos secundarios           |
| `--text-muted`        | `#64748b` | Texto secundario             |
| `--border`            | `#1e293b` | Bordes                       |
| `--surface-elevated`  | `#0f172a` | Cards y superficies elevadas |

#### Scroll personalizado

Scrollbar delgada con track oscuro y thumb que cambia a cyan al hover.

#### Custom utilities

- `.accent-glow-hover`: glow inset en hover para cards
- `.hide-scrollbar`: oculta scrollbar visualmente (usado en header)

### Fuentes

Configuradas en `src/config/fonts.ts` vía `next/font/google`:

| Font           | Variable CSS            | Uso                               |
| -------------- | ----------------------- | --------------------------------- |
| Inter          | `--font-inter`          | Body (clase `font-sans`)          |
| JetBrains Mono | `--font-jetbrains-mono` | Código/badges (clase `font-mono`) |

---

## 6. Tipos

Definidos en `src/types/index.ts`:

```typescript
MenuItem; // { id, label, href }
bioParagraph; // { paragraph }
Experience; // { period, role, company, description, tags }
Formation; // { period, title, institution, description[], icon, active }
Project; // { title, description, image, tags, demoUrl }
```

El re-export vía `src/data/index.ts` expone tanto los tipos como los datos, permitiendo importar desde `@/data`.

---

## 7. Utilidades

### `cn()` — `src/lib/utils.ts`

Combina clases condicionales con `clsx` y las fusiona eliminando conflictos de Tailwind con `tailwind-merge`:

```tsx
cn("px-4 py-2", isActive && "bg-primary", className);
```

### `useScrollSpy()` — `src/lib/hooks/use-scroll-spy.ts`

Custom hook que detecta qué sección está en viewport y si el usuario ha scrolleado (para efectos de sticky header).

---

## 8. Herramientas y config

### Git hooks (Husky + lint-staged)

- **Pre-commit**: ejecuta ESLint --fix + Prettier --write sobre los archivos staged.
- Config en `package.json` bajo `lint-staged`.

### Commits (Commitizen)

```bash
pnpm commit
```

Lanza Commitizen con adapter `cz-conventional-changelog` para generar mensajes conventional commit.

### ESLint + Prettier

- ESLint 9 con `eslint-config-next`
- Prettier con `prettier-plugin-tailwindcss`
- Reglas: comillas dobles, punto y coma, trailing comma es5

### opencode

Configuración en `opencode.json` con skills personalizadas en `.opencode/skills/`.

---

## 9. Accesibilidad

### WCAG implementado

| Criterio                                           | Estado |
| -------------------------------------------------- | ------ |
| `lang="es"` en `<html>`                            | ✅     |
| Jerarquía de headings (h1 → h2 → h3)               | ✅     |
| Skip link al contenido principal                   | ✅     |
| `aria-current` en navegación activa                | ✅     |
| `aria-label` en navs y enlaces externos            | ✅     |
| `aria-hidden` en iconos decorativos                | ✅     |
| Focus visible rings en todos los interactivos      | ✅     |
| `prefers-reduced-motion` para scroll y animaciones | ✅     |
| Imágenes con `alt` descriptivo                     | ✅     |
| Enlaces externos indican "abrir en nueva ventana"  | ✅     |
| Contraste de color (dark mode)                     | ✅     |

### Pendientes / mejoras futuras

- Implementar `prefers-reduced-motion` también en animaciones de Framer Motion (hook `useReducedMotion`)
- Añadir etiquetas ARIA a secciones (role="region" + aria-label)
- Evaluar contraste de colores con herramienta de medición exacta

---

## 10. Build y despliegue

### Compilación

```bash
pnpm build
```

Next.js genera **páginas estáticas** (SSG) en la carpeta `.next/`. No se necesita servidor Node.js para producción.

### Despliegue estático

Para exportación 100% estática (opcional):

```bash
next build && next export
```

Genera una carpeta `out/` con HTML, CSS y JS listos para cualquier hosting estático (Netlify, Vercel, GitHub Pages).

### Variables de entorno

No requiere variables de entorno para desarrollo o build. El archivo `.env.template` documenta cualquier variable futura.

---

_Última actualización: Julio 2026_
