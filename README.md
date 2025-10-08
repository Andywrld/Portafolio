# Portafolio Web — Andy Torres

Aplicación web construida con React, TypeScript y Vite para presentar la trayectoria profesional de Andy Torres. El sitio destaca experiencia, proyectos relevantes, stack tecnológico y vías de contacto dentro de una interfaz moderna optimizada para dispositivos móviles y escritorio.

## Características principales

- Sección hero con llamada a la acción directa hacia proyectos y contacto.
- Listado de experiencia profesional con tecnologías clave por rol.
- Galería de proyectos destacados con descripción, stack y repositorios.
- Módulo de tecnologías que resume las herramientas dominadas por el autor.
- Sección de contacto con enlaces rápidos a GitHub, LinkedIn y correo.

## Stack tecnológico

- **Framework:** React 19 + Vite (Rolldown)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Componentes e iconografía:** lucide-react, utilidades propias

## Requisitos previos

- Node.js 18 o superior
- npm, pnpm o Bun para la gestión de dependencias

## Instalación y ejecución

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Compilación para producción
npm run build

# Vista previa del build
npm run preview

# Linter
npm run lint
```

Si utilizas pnpm o Bun, sustituye los comandos anteriores por `pnpm` o `bun` respectivamente.

## Estructura del proyecto

```
├─ public/              # Recursos estáticos y CV
├─ src/
│  ├─ components/       # Componentes reutilizables (Hero, Header, etc.)
│  ├─ pages/            # Páginas principales (Home)
│  ├─ assets/           # Imágenes e iconos
│  └─ hook/             # Hooks personalizados como scrollToSection
├─ index.html
├─ vite.config.ts
└─ README.md
```

## Personalización

- Actualiza la información profesional en `src/components/experience/Experience.tsx`.
- Modifica los proyectos destacados en `src/components/proje/Experience-Project.tsx`.
- Ajusta enlaces y datos de contacto en `src/components/Hero/Hero.tsx` y `src/components/getInTouch`.

## Despliegue

El sitio está optimizado para servicios como Vercel, Netlify o GitHub Pages. Genera la versión estática con `npm run build` y sube la carpeta `dist` al proveedor elegido.

## Contacto

- LinkedIn: https://www.linkedin.com/in/andy-torres-9a1136259
- GitHub: https://github.com/Andywrld
- Email: andy18wrld@gmail.com
