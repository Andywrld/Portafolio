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
    company: 'Jade Technology Group',
    position: 'Desarrollador Fullstack',
    type: 'Tiempo completo',
    period: 'Jul 2026 — Actualidad',
    current: true,
    bullets: [
      'Desarrollo fullstack de MaxiHabana, el supermercado online de la empresa, hoy en producción.',
      'Construí el catálogo, la navegación por categorías y el flujo de compra sobre Next.js con App Router, cuidando el rendimiento en conexiones lentas.',
      'Implementé la API en Nest.js que sostiene catálogo, pedidos y autenticación, manteniendo un solo contrato de tipos entre backend y frontend.',
      'Definí la estructura de componentes y las convenciones del proyecto para que el producto siga creciendo sin rehacer lo ya entregado.',
    ],
  },
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
