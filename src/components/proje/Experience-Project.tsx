import { RenderProjects, type RenderProject } from './RenderProject';
import SalonProject from '@/assets/images/salon.png';
import QBabelProject from '@/assets/images/Qbabel.png';

const projects: RenderProject[] = [
  {
    image: {
      img: SalonProject,
      alt: 'Panel administrativo del sistema de gestión de salones de belleza',
    },
    title: 'Sistema de Gestión para Salones de Belleza',
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
      'Django REST Framework    ',
    ],
    gitHub: 'https://github.com/Jose-luis-echemendia/QBabel',
  },
];

export const Projects = () => {
  return (
    <section className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-primary'>
          Proyectos
        </h2>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
        <RenderProjects projects={projects} />
      </div>
    </section>
  );
};
