import { RenderExperience, type ExperienceRender } from './RenderExperience';

const experiences: ExperienceRender[] = [
  {
    position: 'Desarrollador Frontend',
    company: 'CITMATEL',
    period: 'Septiembre 2024 - Enero 2025',
    description:
      'Encargado de liderar el desarrollo del portal oficial de meteorología de Cuba, supervisando la arquitectura frontend, las buenas prácticas de desarrollo, la optimización de rendimiento y la implementación de interfaces modernas e interactivas orientadas a la experiencia del usuario.',
    tecnologies: [
      'HTML',
      'CSS',
      'TypeScript',
      'TailwindCSS',
      'React',
      'Docker',
    ],
  },
  {
    position: 'Líder Técnico Frontend',
    company: 'Tecopos',
    period: 'Septiembre - Presente',
    description:
      'Responsable técnico del frontend: planificación técnica, estimaciones, revisión de PRs y soporte al equipo para mantener entregas estables.Diseñé y consolidé una arquitectura de componentes moderna (design system / UIreusable) para mantener coherencia visual y reducir deuda técnica.Lideré refactorizaciones para mejorar escalabilidad del código y disminuir errores recurrentes en producción.',
    tecnologies: [
      'HTML',
      'CSS',
      'TypeScript',
      'TailwindCSS',
      'React',
      'Docker',
    ],
  },
];

export const Experience = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='text-center mb-12 sm:mb-16'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
          Experiencia <span className='text-primary'>Profesional</span>
        </h2>
        <p className='text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
          Mi trayectoria profesional construyendo soluciones digitales
          innovadoras
        </p>
      </div>

      <div className='space-y-8'>
        <RenderExperience experiences={experiences} />
      </div>
    </div>
  );
};
