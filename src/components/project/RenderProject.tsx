import { ArrowUpRight, Github, ImageIcon } from 'lucide-react';
import { useReveal } from '@/hook/useReveal';

export interface RenderProject {
  index: string;
  image?: { img: string; alt: string };
  /** When true, renders a reserved frame instead of an image (photo pending). */
  placeholder?: boolean;
  title: string;
  context: string;
  description: string;
  highlights?: string[];
  tecnologies: string[];
  gitHub?: string;
  demo?: string;
  status?: string;
}

export interface RenderProjectProps {
  projects: RenderProject[];
}

export const RenderProjects = ({ projects }: RenderProjectProps) => {
  return (
    <div className='space-y-6'>
      {projects.map((project, i) => (
        <ProjectBlock key={project.title} project={project} flip={i % 2 === 1} />
      ))}
    </div>
  );
};

const ProjectBlock = ({
  project,
  flip,
}: {
  project: RenderProject;
  flip: boolean;
}) => {
  const ref = useReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className='reveal hover-lift group overflow-hidden rounded-2xl border border-border bg-card'
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 ${
          flip ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        {/* Visual */}
        <div className='relative min-h-[16rem] border-b border-border lg:min-h-[26rem] lg:border-b-0'>
          {project.placeholder ? (
            <PhotoReserved />
          ) : (
            <div className='relative h-full w-full overflow-hidden'>
              <img
                src={project.image?.img}
                alt={project.image?.alt ?? project.title}
                loading='lazy'
                className='h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]'
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className='flex flex-col justify-center gap-5 p-7 sm:p-9 lg:p-11'>
          <div className='flex items-center gap-3 font-mono text-xs text-muted-foreground'>
            <span className='text-primary'>{project.index}</span>
            <span className='h-px w-8 bg-border' />
            <span className='uppercase tracking-[0.14em]'>{project.context}</span>
          </div>

          <div>
            <h3 className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl'>
              {project.title}
            </h3>
            {project.status && (
              <span className='mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-primary'>
                <span className='h-1.5 w-1.5 rounded-full bg-primary' />
                {project.status}
              </span>
            )}
          </div>

          <p className='max-w-xl text-muted-foreground'>{project.description}</p>

          {project.highlights && (
            <ul className='grid gap-2'>
              {project.highlights.map((h) => (
                <li key={h} className='flex gap-3 text-sm text-foreground/85'>
                  <span
                    aria-hidden
                    className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60'
                  />
                  <span className='leading-relaxed'>{h}</span>
                </li>
              ))}
            </ul>
          )}

          <div className='flex flex-wrap gap-2 pt-1'>
            {project.tecnologies.map((tech) => (
              <span
                key={tech}
                className='rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground'
              >
                {tech}
              </span>
            ))}
          </div>

          {(project.demo || project.gitHub) && (
            <div className='flex flex-wrap items-center gap-3 pt-2'>
              {project.demo && (
                <a
                  href={project.demo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='pressable inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90'
                >
                  Ver demo
                  <ArrowUpRight className='h-4 w-4' />
                </a>
              )}
              {project.gitHub && (
                <a
                  href={project.gitHub}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='pressable inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-foreground/[0.03]'
                >
                  <Github className='h-4 w-4' />
                  Código
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

/** Intentionally-reserved frame for the meteorology portal screenshot. */
const PhotoReserved = () => (
  <div className='blueprint relative flex h-full min-h-[16rem] items-center justify-center p-8'>
    <div className='flex flex-col items-center gap-3 rounded-xl border border-dashed border-border bg-background/60 px-8 py-10 text-center backdrop-blur-[2px]'>
      <span className='grid size-11 place-items-center rounded-lg bg-muted text-muted-foreground'>
        <ImageIcon className='h-5 w-5' />
      </span>
      <p className='text-sm font-medium text-foreground'>
        Imagen del proyecto
      </p>
      <p className='max-w-[14rem] font-mono text-[0.7rem] uppercase tracking-wide text-muted-foreground'>
        Espacio reservado · próximamente
      </p>
    </div>
  </div>
);
