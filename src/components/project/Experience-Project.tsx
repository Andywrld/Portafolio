import { RenderProjects, type RenderProject } from './RenderProject';
import SalonProject from '@/assets/images/salon.webp';
import QBabelProject from '@/assets/images/Qbabel.webp';
import BankFlowProject from '@/assets/images/Bank-Flow.webp';

const projects: RenderProject[] = [
  {
    image: {
      img: BankFlowProject,
      alt: 'Interfaz principal de BankFlow, simulador de cuentas bancarias',
    },
    title: 'BankFlow - Simulación Bancaria',
    description:
      'Aplicación web desarrollada como parte de una prueba técnica que simula el funcionamiento de un sistema bancario digital. Permite crear cuentas, registrar operaciones de ingreso y retiro, y visualizar el historial financiero de cada usuario. El proyecto destaca por su arquitectura modular, validaciones en tiempo real y una interfaz limpia y moderna construida con React y Tailwind CSS.',
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
    featured: true,
  },
  {
    image: {
      img: SalonProject,
      alt: 'Panel administrativo del sistema de gestión de salones de belleza',
    },
    title: 'Sistema de Gestión - Salones de Belleza',
    description:
      'Aplicación web moderna diseñada para optimizar la administración de salones de belleza, barberías y spas. Permite gestionar reservas, empleados, servicios, horarios y clientes desde un panel centralizado, incluyendo la gestión de inventarios y reportes.',
    tecnologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Tailwind CSS',
      'Django REST Framework',
      'PostgreSQL',
    ],
    gitHub: 'https://github.com/Andywrld/beauty-salon-system',
  },
  {
    image: {
      img: QBabelProject,
      alt: 'Página principal de Qbabel, aplicación de lectura y escritura de historias',
    },
    title: 'Qbabel - Comunidad Narrativa',
    description:
      'Plataforma narrativa inspirada en Wattpad, creada junto a un compañero de la universidad. Qbabel permite a lectores y escritores compartir, publicar y descubrir historias originales dentro de una comunidad creativa. La aplicación incluye autenticación, gestión de usuarios, publicación de obras y exploración de contenido literario.',
    tecnologies: [
      'HTML',
      'CSS',
      'React',
      'PostgreSQL',
      'Tailwind CSS',
      'JavaScript',
      'Django REST Framework',
    ],
    gitHub: 'https://github.com/Jose-luis-echemendia/QBabel',
  },
];

export const Projects = () => {
  return (
    <section className='container mx-auto px-4 sm:px-6 lg:px-8'>
      {/* Section header */}
      <div className='text-center mb-16 space-y-4'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
          Proyectos <span className='text-gradient'>destacados</span>
        </h2>
        <p className='text-lg text-muted-foreground max-w-xl mx-auto'>
          Una selección de proyectos que reflejan mi enfoque en la calidad,
          el rendimiento y la experiencia de usuario.
        </p>
      </div>

      <RenderProjects projects={projects} />
    </section>
  );
};
