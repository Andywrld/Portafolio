import { ArrowUpRightIcon, GithubIcon } from 'lucide-react';

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
  demo?: string;
  featured?: boolean;
}

export interface RenderProjectProps {
  projects: RenderProject[];
}

export const RenderProjects = ({ projects }: RenderProjectProps) => {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className='space-y-8'>
      {/* Featured project - full width */}
      {featured && <ProjectCard project={featured} variant='featured' />}

      {/* Other projects - 2 columns */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {rest.map((project) => (
          <ProjectCard key={project.title} project={project} variant='default' />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({
  project,
  variant,
}: {
  project: RenderProject;
  variant: 'featured' | 'default';
}) => {
  const isFeatured = variant === 'featured';

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 ${
        isFeatured ? 'md:grid md:grid-cols-2' : 'flex flex-col'
      }`}
    >
      {/* Hover glow overlay */}
      <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />

      {/* Image */}
      <div
        className={`relative overflow-hidden ${
          isFeatured ? 'h-72 md:h-full' : 'h-56'
        }`}
      >
        <img
          src={project.image.img}
          alt={project.image.alt}
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
        />
        {/* Image gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60' />

        {/* Demo badge on image */}
        {project.demo && (
          <a
            href={project.demo}
            target='_blank'
            rel='noopener noreferrer'
            className='absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm hover:bg-primary transition-colors shadow-lg'
          >
            <span className='relative flex h-2 w-2'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75' />
              <span className='relative inline-flex h-2 w-2 rounded-full bg-green-400' />
            </span>
            Live Demo
          </a>
        )}
      </div>

      {/* Content */}
      <div className='relative p-6 flex flex-col justify-between flex-1 space-y-4'>
        <div className='space-y-3'>
          <h3
            className={`font-bold text-foreground ${
              isFeatured ? 'text-2xl' : 'text-xl'
            }`}
          >
            {project.title}
          </h3>

          <p
            className={`text-muted-foreground leading-relaxed ${
              isFeatured ? 'text-base' : 'text-sm'
            }`}
          >
            {project.description}
          </p>

          {/* Technologies */}
          <div className='flex flex-wrap gap-2 pt-1'>
            {project.tecnologies.map((tech) => (
              <span
                key={tech}
                className='px-2.5 py-1 text-xs font-medium rounded-lg bg-primary/10 text-primary border border-primary/20 transition-colors hover:bg-primary/20'
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className='flex items-center gap-3 pt-2'>
          <a
            href={project.gitHub}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground bg-background/50 border border-border/60 hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all'
          >
            <GithubIcon className='w-4 h-4' />
            Código
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-primary-foreground bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all shadow-md shadow-primary/20'
            >
              Ver proyecto
              <ArrowUpRightIcon className='w-4 h-4' />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
