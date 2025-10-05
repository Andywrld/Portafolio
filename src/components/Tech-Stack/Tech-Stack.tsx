import { TechRender, type TechnologyGroup } from './TechRender';
import {
  ReactIcon,
  AngularIcon,
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
} from '@/assets/icon/index';

export const TechStack = () => {
  const technologies: TechnologyGroup[] = [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML', icon: HTMLIcon },
        { name: 'CSS', icon: CSSIcon },

        { name: 'Tailwind CSS', icon: TailwindCSSIcon },
        { name: 'JavaScript', icon: JavaScriptIcon },
        { name: 'TypeScript', icon: TypeScriptIcon },
        { name: 'React', icon: ReactIcon },

        { name: 'Angular', icon: AngularIcon },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'PostgreSQL', icon: PostgreSQLIcon },
        { name: 'NestJS', icon: NestIcon },
      ],
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', icon: GitIcon },
        { name: 'Docker', icon: DockerIcon },
        { name: 'Postman', icon: PostmanIcon },
      ],
    },
  ];

  return (
    <div className='container mx-auto px-6'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold'>
          <span className='font-mono'></span>
          Tecnologias
        </h2>
      </div>
      <div className='max-w-2xl mx-auto'>
        <p className='text-lg text-muted-foreground mb-12 text-center leading-relaxed'>
          Estas son algunas de las tecnologías con las que he estado trabajando
          recientemente:
        </p>

        <TechRender technologies={technologies} />
      </div>
    </div>
  );
};
