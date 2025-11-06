import type { TechnologyGroup } from '../TechRender';
import {
  ReactIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  PostgreSQLIcon,
  GitIcon,
  DockerIcon,
  HTMLIcon,
  CSSIcon,
  PostmanIcon,
  NestIcon,
  RestIcon,
  Next,
} from '@/assets/icon/index';

export const technologies: TechnologyGroup[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', icon: HTMLIcon },
      { name: 'CSS', icon: CSSIcon },

      { name: 'Tailwind CSS', icon: TailwindCSSIcon },
      { name: 'JavaScript', icon: JavaScriptIcon },
      { name: 'TypeScript', icon: TypeScriptIcon },
      { name: 'React', icon: ReactIcon },

      { name: 'Next.js', icon: Next },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'PostgreSQL', icon: PostgreSQLIcon },
      { name: 'NestJS', icon: NestIcon },
      { name: 'Django REST Framework', icon: RestIcon },
    ],
  },
  {
    category: 'Herramientas',
    items: [
      { name: 'Git', icon: GitIcon },
      { name: 'Docker', icon: DockerIcon },
      { name: 'Postman', icon: PostmanIcon },
    ],
  },
];
