import { RenderExperience, type ExperienceRender } from './RenderExperience';

const experiences: ExperienceRender[] = [
  {
    position: 'Desarrollador Frontend',
    company: 'CITMATEL',
    period: 'Septiembre 2024 - Enero 2025',
    description:
      'Lideré el desarrollo del portal oficial de meteorología de Cuba, definiendo la arquitectura frontend y estableciendo estándares de calidad en el código. Implementé estrategias de optimización de rendimiento que mejoraron significativamente los tiempos de carga. Diseñé interfaces interactivas centradas en el usuario, garantizando accesibilidad y una experiencia fluida en múltiples dispositivos.',
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
      'Dirijo la estrategia técnica del frontend, incluyendo planificación, estimaciones y revisión de código mediante pull requests para asegurar entregas de alta calidad. Diseñé e implementé un design system con componentes reutilizables que unificó la identidad visual del producto y redujo la deuda técnica. Lideré refactorizaciones clave que mejoraron la escalabilidad de la aplicación y disminuyeron los errores recurrentes en producción.',
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
