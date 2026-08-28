import bankFlowCover from '@/assets/images/bank-flow.webp';
import maxiHabanaCover from '@/assets/images/maxihabana.webp';
import meteoCover from '@/assets/images/meteo-portal.webp';
import { chipsFor, type TechChip } from './tech';

export type ProjectStatus = 'live' | 'archived' | 'wip';

/** Which framework a project is presented with when the same work exists in two stacks. */
export type StackVariant = 'next' | 'vue';

export type Project = {
  /** URL segment under /proyectos/ — never change one that is already shared. */
  slug: string;
  name: string;
  year: string;
  status: ProjectStatus;
  /** One line, shown in the index row. Keep it under ~140 characters. */
  tagline: string;
  cover?: { src: string; alt: string };
  /** Chips in the index row; only tech with a registered mark survives. */
  chips: TechChip[];
  /** Set only on projects that ship a stack variant — drives chips, stack and overview. */
  stackVariant?: StackVariant;

  /* Detail page */
  role: string;
  context: string;
  overview: string;
  features: string[];
  /** Full stack as prose lines — richer than a chip, no icon required. */
  stack: string[];
  links: {
    demo?: string;
    repo?: string;
    /** Caveat about the links above — restricted region, private repository. */
    note?: string;
  };
};

/**
 * MaxiHabana ships in two framework flavours. Everything outside these three
 * fields — features, links, cover — describes the same product either way.
 */
const maxiHabanaByVariant: Record<
  StackVariant,
  Pick<Project, 'chips' | 'overview' | 'stack'>
> = {
  next: {
    chips: chipsFor(['Next.js', 'React', 'TypeScript', 'Nest.js', 'Tailwind CSS']),
    overview:
      'Tienda online construida de punta a punta: Next.js con App Router en el cliente, Nest.js en el servidor. El reto real no era listar productos: era que alguien con una conexión lenta pudiera encontrar lo que busca, entender qué está disponible en su municipio y llegar al carrito sin fricción. Cada decisión de renderizado se tomó mirando ese escenario, no el de una oficina con fibra.',
    stack: [
      'Next.js (App Router) · React · TypeScript',
      'Nest.js para la API: catálogo, pedidos y autenticación',
      'Tailwind CSS para el sistema visual',
      'Renderizado en servidor y componentes de cliente según el costo de cada vista',
      'Despliegue en producción bajo dominio propio',
    ],
  },
  vue: {
    chips: chipsFor(['Nuxt', 'Vue', 'TypeScript', 'Nest.js', 'Tailwind CSS']),
    overview:
      'Tienda online construida de punta a punta: Nuxt y Vue 3 en el cliente, Nest.js en el servidor. El reto real no era listar productos: era que alguien con una conexión lenta pudiera encontrar lo que busca, entender qué está disponible en su municipio y llegar al carrito sin fricción. Cada decisión de renderizado se tomó mirando ese escenario, no el de una oficina con fibra.',
    stack: [
      'Nuxt · Vue 3 · TypeScript',
      'Nest.js para la API: catálogo, pedidos y autenticación',
      'Tailwind CSS para el sistema visual',
      'Renderizado en servidor e hidratación selectiva según el costo de cada vista',
      'Despliegue en producción bajo dominio propio',
    ],
  },
};

const maxiHabana = (stackVariant: StackVariant): Project => ({
  slug: 'maxihabana',
  name: 'MaxiHabana',
  year: '2026',
  status: 'live',
  tagline:
    'Supermercado online para La Habana: catálogo por departamentos, ofertas, carrito y entrega según provincia y municipio.',
  cover: {
    src: maxiHabanaCover,
    alt: 'Catálogo de MaxiHabana con los filtros por departamento y precio junto a la grilla de productos',
  },
  stackVariant,
  ...maxiHabanaByVariant[stackVariant],
  role: 'Desarrollo fullstack',
  context: 'Jade Technology Group',
  features: [
    'Catálogo con búsqueda, navegación por categorías y vistas dedicadas para destacados y productos en oferta.',
    'Selector de ubicación por provincia y municipio que condiciona la disponibilidad y la entrega.',
    'Carrito de compra persistente y flujo de checkout con los métodos de pago del negocio.',
    'Cuentas de usuario con autenticación y seguimiento de pedidos, resueltas contra una API propia en Nest.js.',
    'Páginas institucionales y de contacto gestionadas como contenido, no como código.',
    'Estados vacíos diseñados: cuando una sección todavía no tiene productos, explica qué falta en vez de mostrar un hueco.',
  ],
  links: {
    demo: 'https://www.maxihabana.com/',
    note: 'Repositorio privado por acuerdo con el cliente; el sitio en producción es público.',
  },
});

export const projects: Project[] = [
  maxiHabana('vue'),
  {
    slug: 'portal-meteorologico-insmet',
    name: 'Portal Meteorológico INSMET',
    year: '2025',
    status: 'live',
    tagline:
      'Portal público del Instituto de Meteorología de Cuba: pronósticos, avisos de ciclones, satélite y radar, en producción para consulta nacional.',
    cover: {
      src: meteoCover,
      alt: 'Portada del portal meteorológico con el pronóstico nacional y accesos a satélite y radar',
    },
    chips: chipsFor(['React', 'TypeScript', 'Tailwind CSS', 'Docker']),
    role: 'Arquitectura frontend y desarrollo',
    context: 'Citmatel · Instituto de Meteorología de Cuba',
    overview:
      'Rediseño completo del portal público del INSMET, reemplazando una interfaz heredada por una aplicación en React 19 y TypeScript. El sitio es la vía oficial de consulta meteorológica del país, así que el trabajo se midió por dos cosas: que la información se entienda de un vistazo y que cargue rápido en conexiones lentas.',
    features: [
      'Módulos de visualización: pronóstico territorial, avisos de ciclones tropicales, imágenes de satélite y radar, red de estaciones, sequía y resúmenes climáticos.',
      'Mapas interactivos con Leaflet para pronóstico por provincia y lectura de estaciones en tiempo real.',
      'Panel administrativo con gestión de usuarios, roles y artículos, autenticación JWT y control de acceso por permisos.',
      'Estado de servidor separado del estado de UI: TanStack Query para datos remotos, Zustand para lo que es puramente local.',
      'Formularios validados en el borde con React Hook Form y Zod, de modo que el tipo del formulario y el del backend no se puedan separar en silencio.',
    ],
    stack: [
      'React 19 · TypeScript · Vite',
      'TanStack Query para caché e invalidación de datos remotos',
      'Zustand para estado de interfaz',
      'React Hook Form + Zod para formularios y validación tipada',
      'Leaflet / React-Leaflet para cartografía',
      'Framer Motion para transiciones de vista',
      'Docker para empaquetado y despliegue',
    ],
    links: {
      demo: 'https://meteo.dev.citmatel.cu/',
      note: 'El portal está alojado en infraestructura nacional: solo es accesible desde Cuba.',
    },
  },
  {
    slug: 'bankflow',
    name: 'BankFlow',
    year: '2025',
    status: 'live',
    tagline:
      'Simulador de banca digital: apertura de cuentas, ingresos y retiros con validación en tiempo real e historial por usuario.',
    cover: {
      src: bankFlowCover,
      alt: 'Resumen de BankFlow con los saldos agrupados por moneda y el listado de cuentas del usuario',
    },
    chips: chipsFor(['React', 'TypeScript', 'Tailwind CSS']),
    role: 'Desarrollo completo',
    context: 'Prueba técnica',
    overview:
      'Una prueba técnica que traté como producto. El enunciado pedía cuentas y movimientos; lo interesante era la parte que no pedía: dónde vive el dinero en el estado, qué pasa cuando una operación falla a mitad de camino, y cómo se le dice eso a alguien que está mirando su saldo.',
    features: [
      'Apertura de cuentas y operaciones de ingreso y retiro con validación en tiempo real antes de enviar.',
      'Historial financiero por usuario, ordenado y consultable.',
      'Arquitectura modular por dominio: cada operación conoce su propio estado y sus propios errores.',
      'Estados de carga, error y vacío diseñados, no improvisados — la pantalla nunca queda en blanco sin explicación.',
    ],
    stack: [
      'React · TypeScript · Vite',
      'React Query para sincronización con la API',
      'Zustand para estado de sesión y UI',
      'Tailwind CSS para el sistema visual',
      'MockAPI como backend de la prueba',
    ],
    links: {
      demo: 'https://prueba-tecnica-frontend-simulacion.vercel.app/',
      repo: 'https://github.com/Andywrld/Prueba--Tecnica-Frontend-Simulacion-de-Cuentas-Bancarias-',
    },
  },
];

export const findProject = (slug?: string) =>
  projects.find((project) => project.slug === slug);

/** Wraps around, so the last project points back at the first. */
export const nextProject = (slug: string) => {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return undefined;
  return projects[(index + 1) % projects.length];
};
