import { GithubIcon } from 'lucide-react';
import { Button } from '../ui/Button';

type img = {
  img: string;
  alt: string;
};

export interface RenderProject {
  image: img;
  title: string;
  description: string;
  tecnologies: string[];
  gitHub: string;
}

export interface RenderProjectProps {
  projects: RenderProject[];
}

export const RenderProjects = ({ projects }: RenderProjectProps) => {
  return (
    <>
      {projects.map((project) => {
        return (
          <article className='text-card-foreground flex flex-col overflow-hidden rounded-xl border shadow-sm bg-card border-border hover:border-primary/50 transition-all duration-300 group'>
            <div className='h-64 overflow-hidden'>
              <img
                src={project.image.img}
                alt={project.image.alt}
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
              />
            </div>

            <div className='p-6 flex flex-col justify-between flex-1'>
              <div className='space-y-4'>
                <h3 className='text-foreground text-xl font-semibold'>
                  {project.title}
                </h3>

                <p className='text-pretty text-muted-foreground'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-3'>
                  {project.tecnologies.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1 text-xs sm:text-sm font-medium bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full border border-primary/30'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className='flex gap-3 mt-6'>
                <a
                  href={project.gitHub}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button variant='outline' size='sm' className='gap-2'>
                    <GithubIcon size={16} />
                    Código
                  </Button>
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};
