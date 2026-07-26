## cv-portfolio

Portfolio personal de Alex Muñoz — sitio web estático con secciones de hero, proyectos, skills, experiencia, formación y contacto. Diseño dark-mode con estética tech/futurista.

## Stack

- Lenguaje: TypeScript estricto (`strict: true`)
- Framework: Next.js 16 (App Router) + React 19
- CSS: Tailwind CSS 4 (vía PostCSS)
- Animaciones: Framer Motion
- Formularios: react-hook-form + Zod
- Iconos: lucide-react
- Utilidades UI: class-variance-authority (CVA), clsx, tailwind-merge
- Git hooks: Husky + lint-staged
- Commits: Commitizen (conventional changelog)

## Comandos

- `pnpm dev` — arranca el servidor en local
- `pnpm build` — compila para producción
- `pnpm start` — arranca el servidor de producción
- `pnpm lint` — revisa el estilo con ESLint
- `pnpm format` — formatea todo el proyecto con Prettier
- `pnpm commit` — crea un commit interactivo (Commitizen)

## Estructura del proyecto

- `app/` — Router pages de Next.js (App Router). Contiene `layout.tsx`, `page.tsx` y `globals.css`
- `components/` — Componentes React de secciones del portfolio (hero, projects, skills, etc.)
- `components/ui/` — Componentes UI reutilizables con CVA (button, card, input, textarea)
- `lib/` — Utilidades y helpers (función `cn()` para combinar clases de Tailwind)
- `public/` — Archivos estáticos (imágenes, iconos)
- `.husky/` — Git hooks (pre-commit ejecuta lint-staged)

## Convenciones

- PascalCase para componentes y archivos de componentes: `Button.tsx`, `HeroSection.tsx`
- camelCase para funciones y variables: `buttonVariants`, `handleSubmit`
- Uso de `cn()` de `@/lib/utils` para combinar clases de Tailwind condicionalmente
- Componentes UI siguen el patrón CVA con `variants` y `defaultVariants`
- Path alias `@/*` mapeado a la raíz del proyecto
- Fuentes: Inter (body), JetBrains Mono (código), Space Grotesk (headings)
- Tema dark por defecto (clase `dark` en `<html>`)
- Prettier: comillas dobles, punto y coma, trailing comma es5

## No hagas

- No instalar dependencias nuevas sin avisar y obtener OK
- No usar `any` en TypeScript sin justificación explícita
- No subir archivos `.env` al repositorio (solo `.env.template`)
- No modificar `next.config.ts` sin revisar las imágenes remotePatterns
- No eliminar componentes de `components/ui/` sin confirmar

## Flujo de trabajo

- Antes de una tarea no trivial, propón un plan y espera mi OK.
- Una tarea a la vez; al terminar, dime qué cambiaste para que lo revise.
- Si no estás seguro al 80%, pregunta. No inventes.
- Los commits se hacen con Commitizen (`pnpm commit`) para mantener conventional commits.
- lint-staged ejecuta ESLint + Prettier automáticamente en pre-commit.

## Documentación

- Next.js App Router: https://nextjs.org/docs/app
- Tailwind CSS 4: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- React Hook Form: https://react-hook-form.com/
