# cv-portfolio

Portfolio personal de **Alex Muñoz** — sitio web estático con secciones de hero, proyectos, skills, experiencia, formación y contacto. Diseño dark-mode con estética tech/futurista.

## Stack

| Categoría     | Tecnologías                                    |
| ------------- | ---------------------------------------------- |
| Framework     | Next.js 16 (App Router) + React 19             |
| Lenguaje      | TypeScript 5 (`strict: true`)                  |
| CSS           | Tailwind CSS 4 (vía PostCSS)                   |
| Animaciones   | Framer Motion                                  |
| Iconos        | lucide-react                                   |
| Fuentes       | Inter, JetBrains Mono (vía `next/font`)        |
| Utilidades UI | class-variance-authority, clsx, tailwind-merge |
| Formularios   | react-hook-form + Zod                          |
| Git hooks     | Husky + lint-staged                            |
| Commits       | Commitizen (conventional changelog)            |

## Empezar

```bash
pnpm install
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Comandos

| Comando        | Descripción                       |
| -------------- | --------------------------------- |
| `pnpm dev`     | Servidor de desarrollo            |
| `pnpm build`   | Compilación para producción       |
| `pnpm start`   | Servidor de producción            |
| `pnpm lint`    | ESLint                            |
| `pnpm format`  | Prettier                          |
| `pnpm commit`  | Commit interactivo con Commitizen |
| `pnpm prepare` | Inicializar Husky                 |

## Estructura

```
src/
├── app/             # App Router (layout, page, globals.css)
├── components/      # Componentes React del portfolio
│   └── ui/          # Componentes UI reutilizables (Button, Card)
├── config/          # Configuración de fuentes y app
├── data/            # Datos estáticos del portfolio
├── lib/             # Utilidades (cn, hooks)
└── types/           # Tipos TypeScript compartidos
```

## Documentación técnica

Ver [docs/technical.md](docs/technical.md).
