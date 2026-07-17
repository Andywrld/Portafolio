import { RenderProjects, type RenderProject } from './RenderProject';
import BankFlowProject from '@/assets/images/Bank-Flow.webp';
import meterologiaProject from '@/assets/images/home-page-1.png';

const projects: RenderProject[] = [
  {
    index: '01',
    title: 'Portal Meteorológico INSMET',
    context: 'Instituto de Meteorología · Frontend',
    status: 'En producción',
    image: {
      img: meterologiaProject,
      alt: 'Interfaz del portal meteorológico del Instituto de Meteorología de Cuba',
    },
    demo: 'https://meteo.dev.citmatel.cu/',
    description:
      'Rediseño e implementación del portal público del Instituto de Meteorología de Cuba, sustituyendo la UI/UX anterior por una aplicación moderna en React 19 + TypeScript + Vite.',
    highlights: [
      'Módulos de visualización meteorológica: pronósticos, avisos de ciclones, imágenes de satélite y radar, estaciones, sequía y resúmenes climáticos.',
      'Mapas interactivos con Leaflet / React-Leaflet para pronóstico territorial y datos de estaciones.',
      'Dashboard administrativo con gestión de usuarios, roles y artículos, autenticación JWT y control de acceso por permisos.',
    ],
    tecnologies: [
      'React 19',
      'TypeScript',
      'Vite',
      'TanStack Query',
      'Zustand',
      'React Hook Form',
      'Zod',
      'Leaflet',
      'Framer Motion',
    ],
  },
  {
    index: '02',
    image: {
      img: BankFlowProject,
      alt: 'Interfaz de BankFlow, simulador de cuentas bancarias',
    },
    title: 'BankFlow',
    context: 'Prueba técnica · Frontend',
    description:
      'Aplicación web que simula un sistema bancario digital: creación de cuentas, operaciones de ingreso y retiro, e historial financiero por usuario. Destaca por su arquitectura modular, validaciones en tiempo real y una interfaz limpia.',
    tecnologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'React Query',
      'Zustand',
      'MockAPI',
      'Vite',
    ],
    gitHub:
      'https://github.com/Andywrld/Prueba--Tecnica-Frontend-Simulacion-de-Cuentas-Bancarias-',
    demo: 'https://prueba-tecnica-frontend-simulacion.vercel.app/',
  },
];

export const Projects = () => {
  return (
    <div className='mx-auto max-w-6xl px-5 sm:px-8'>
      <header className='mb-8 flex flex-wrap items-end justify-between gap-4'>
        <div className='max-w-2xl'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            Proyectos seleccionados
          </h2>
          <p className='mt-3 text-muted-foreground'>
            Trabajo representativo — calidad, rendimiento y experiencia de
            usuario.
          </p>
        </div>
        <a
          href='https://github.com/Andywrld'
          target='_blank'
          rel='noopener noreferrer'
          className='link-underline font-mono text-sm text-muted-foreground hover:text-foreground'
        >
          github.com/Andywrld ↗
        </a>
      </header>

      <RenderProjects projects={projects} />
    </div>
  );
};
