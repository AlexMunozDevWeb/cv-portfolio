# CV Portfolio - Guía para Confirmar Cambios (Commits)

Este proyecto utiliza **Commitizen**, **Husky** y **lint-staged** para asegurar que todos los cambios de código tengan un formato consistente y sigan el estándar de **Conventional Commits** de manera automática.

---

## Cómo crear un commit en el proyecto

Para confirmar tus cambios en este proyecto, sigue estos pasos:

### 1. Prepara tus archivos

Agrega los archivos modificados al área de preparación de Git (staged):

```bash
git add .
```

_(O agrega archivos específicos, por ejemplo: `git add src/app/page.tsx`)_

### 2. Ejecuta el asistente interactivo

En lugar de escribir el tradicional `git commit -m "mensaje"`, ejecuta:

```bash
npm run commit
```

### 3. Completa los detalles en la terminal

Se abrirá un menú interactivo en tu terminal que te guiará para redactar el mensaje de commit bajo el estándar de **Conventional Commits**:

- **Tipo de cambio:** Elige el tipo de cambio que estás realizando (ej. `feat` para nuevas funciones, `fix` para corregir errores, `docs` para documentación, etc.).
- **Alcance (Scope):** _(Opcional)_ Define la parte del proyecto afectada (ej. `ui`, `routing`).
- **Descripción corta:** Escribe un resumen del cambio en imperativo y minúsculas.
- **Descripción larga / Issues:** Añade detalles adicionales o vincula a una issue si aplica.

---

### ¿Qué sucede automáticamente al confirmar?

Al finalizar las preguntas, se activará un hook de pre-commit que:

1. Analiza con **ESLint** (`eslint --fix`) los archivos modificados para corregir problemas de código.
2. Formatea con **Prettier** (`prettier --write`) los archivos modificados (`.ts`, `.tsx`, `.json`, `.css`, etc.).
3. Si las herramientas anteriores no encuentran errores insalvables, el commit se guardará exitosamente con el formato estandarizado.
