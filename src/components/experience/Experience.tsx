import { RenderExperience, type ExperienceRender } from './RenderExperience';

const experiences: ExperienceRender[] = [
  {
    index: '01',
    position: 'Líder Técnico Frontend',
    company: 'Tecopos',
    companyUrl: 'https://www.tecopos.com/',
    period: '09/2025 — 07/2026',
    summary:
      'Responsable técnico del frontend: planificación, estimaciones, revisión de pull requests y soporte al equipo para mantener entregas estables.',
    achievements: [
      'Diseñé y consolidé una arquitectura de componentes (design system reutilizable) que redujo la deuda técnica y aceleró la entrega de nuevas features.',
      'Lideré refactorizaciones de código para mejorar la escalabilidad de la base y disminuir errores recurrentes en producción.',
    ],
    metric: { value: '6MB → 3MB', label: 'bundle de producción (−50%) tras migrar a Vite' },
    stack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite'],
  },
  {
    index: '02',
    position: 'Desarrollador Frontend',
    company: 'Citmatel',
    companyUrl: 'https://www.citmatel.cu/es',
    period: '01/2025 — 07/2025',
    summary:
      'Desarrollé y lideré la arquitectura frontend del portal oficial de meteorología de Cuba (INSMET), actualmente en producción.',
    achievements: [
      'Implementé interfaces modernas e interactivas orientadas a la experiencia de usuario, aplicando buenas prácticas de desarrollo.',
      'Optimicé el rendimiento de la aplicación para garantizar tiempos de carga rápidos en un servicio de consulta pública.',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Leaflet', 'Docker'],
  },
];

export const Experience = () => {
  return (
    <div className='mx-auto max-w-6xl px-5 sm:px-8'>
      <header className='mb-4 max-w-2xl'>
        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
          Trayectoria profesional
        </h2>
        <p className='mt-3 text-muted-foreground'>
          Más de dos años construyendo y liderando interfaces web en producción.
        </p>
      </header>

      <RenderExperience experiences={experiences} />
      <div className='border-t border-border' />
    </div>
  );
};
