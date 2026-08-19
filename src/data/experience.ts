export type Experience = {
  company: string;
  companyUrl?: string;
  position: string;
  type: string;
  period: string;
  current?: boolean;
  bullets: string[];
  /** One number worth remembering. Omit rather than invent one. */
  metric?: { value: string; label: string };
};

export const experiences: Experience[] = [
  {
    company: 'Tecopos',
    companyUrl: 'https://www.tecopos.com/',
    position: 'Líder Técnico Frontend',
    type: 'Tiempo completo',
    period: 'Sep 2025 — Jul 2026',
    current: false,
    bullets: [
      'Responsable técnico del frontend: planificación, estimaciones, revisión de pull requests y soporte al equipo para sostener entregas estables.',
      'Diseñé y consolidé una arquitectura de componentes reutilizables que redujo la deuda técnica y acortó el tiempo de entrega de nuevas funcionalidades.',
      'Lideré refactorizaciones orientadas a escalabilidad, bajando la tasa de errores recurrentes en producción.',
    ],
    metric: {
      value: '6 MB → 3 MB',
      label: 'bundle de producción tras migrar el build a Vite',
    },
  },
  {
    company: 'Citmatel',
    companyUrl: 'https://www.citmatel.cu/es',
    position: 'Desarrollador Frontend',
    type: 'Tiempo completo',
    period: 'Ene 2025 — Jul 2025',
    bullets: [
      'Desarrollé y lideré la arquitectura frontend del portal oficial de meteorología de Cuba (INSMET), hoy en producción.',
      'Implementé las interfaces de consulta pública priorizando legibilidad de datos y comportamiento en conexiones lentas.',
      'Optimicé el rendimiento de carga para un servicio de consulta masiva.',
    ],
  },
];
