import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { StatusDot } from '@/components/ui/StatusDot';
import { TechChips } from '@/components/ui/TechChips';
import { useReveal } from '@/hook/useReveal';

/**
 * Project index — one row per project, each row a link into its detail page.
 *
 * Deliberately not a card grid: rows keep the reading rhythm of the rest of the
 * document and let the eye scan names first, detail second.
 */
export const ProjectIndex = () => (
  <Container>
    <SectionHeading
      id='proyectos-titulo'
      title='Proyectos'
      caption='Lo que construí y por qué'
    />

    <ul className='mt-6 divide-y divide-border border-y border-border'>
      {projects.map((project) => (
        <ProjectRow key={project.slug} project={project} />
      ))}
    </ul>
  </Container>
);

const ProjectRow = ({ project }: { project: (typeof projects)[number] }) => {
  const ref = useReveal<HTMLLIElement>();

  return (
    <li ref={ref} className='reveal'>
      <Link
        to={`/proyectos/${project.slug}`}
        className='group -mx-3 block rounded-lg px-3 py-4 transition-colors hover:bg-muted/60'
      >
        <div className='flex flex-wrap items-center justify-between gap-x-3 gap-y-1'>
          <h3 className='flex items-center gap-1.5 font-bold text-foreground'>
            {project.name}
            <ArrowRight
              aria-hidden
              className='size-3.5 -translate-x-1 text-primary opacity-0 transition-all duration-300 ease-(--ease-out-expo) group-hover:translate-x-0 group-hover:opacity-100'
            />
          </h3>
          <span className='flex items-center gap-3 text-sm font-medium text-muted-foreground sm:gap-5'>
            <StatusDot status={project.status} />
            <span>{project.year}</span>
          </span>
        </div>

        <p className='mt-1 mb-2 text-sm leading-snug tracking-tight text-muted-foreground'>
          {project.tagline}
        </p>

        <TechChips chips={project.chips} />
      </Link>
    </li>
  );
};
