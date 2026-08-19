import fallbackAvatar from '@/assets/images/356835990-a3c7ac81-9cff-4e51-8eee-219dd6f63bb9.jpg';

/**
 * Identity that does not come from GitHub.
 *
 * The avatar is fetched live from the GitHub API (see useGitHubProfile) so the
 * portrait follows whatever is on the account; everything here is the copy and
 * the links the API cannot know about.
 */
export const profile = {
  name: 'Andy Torres',
  /** Standalone on purpose: not tied to a current employer. */
  role: 'Desarrollador Frontend & Líder Técnico',
  /** Drives the availability marker next to the role. */
  available: true,
  email: 'andy18wrld@gmail.com',
  phone: '+53 56870848',

  /** IANA zone — drives the live clock next to the location. */
  timeZone: 'America/Havana',
  location: 'La Habana',

  githubUser: 'Andywrld',
  fallbackAvatar,

  bio: [
    'Desarrollador frontend enfocado en arquitectura de interfaces: sistemas de componentes que un equipo puede sostener sin pelearse con ellos.',
    'Me interesan los problemas que se notan en producción — tiempos de carga, deuda técnica, código que se vuelve difícil de cambiar. Ahí es donde el diseño y la ingeniería se tocan.',
  ],

  belief: 'El código se escribe una vez y se lee cien. Optimizá para la segunda.',
} as const;
