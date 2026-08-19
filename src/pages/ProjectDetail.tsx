import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import { findProject, nextProject } from '@/data/projects';
import { Container } from '@/components/layout/Container';
import { Divider } from '@/components/layout/Divider';
import { StatusDot } from '@/components/ui/StatusDot';
import { TechChips } from '@/components/ui/TechChips';
import { useDocumentTitle } from '@/hook/useDocumentTitle';

export const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = findProject(slug);

  useDocumentTitle(project ? `${project.name} — Andy Torres` : undefined);

  // An unknown slug is a bad link, not a page. Send it home rather than
  // rendering an empty shell.
  if (!project) return <Navigate to='/' replace />;

  const next = nextProject(project.slug);
  const { demo, repo } = project.links;

  return (
    <article>
      <Container className='pt-24 sm:pt-28'>
        <div className='flex items-center justify-between gap-3'>
          <Link
            to='/#proyectos'
            className='group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground'
          >
            <ArrowLeft
              aria-hidden
              className='size-3.5 transition-transform duration-300 ease-(--ease-out-expo) group-hover:-translate-x-0.5'
            />
            Volver a proyectos
          </Link>

          <div className='flex items-center gap-1.5'>
            {repo && (
              <a
                href={repo}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Ver código en GitHub'
                className='pressable grid size-8 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
              >
                <Github className='size-4' />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Abrir el sitio en producción'
                className='pressable grid size-8 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
              >
                <ExternalLink className='size-4' />
              </a>
            )}
          </div>
        </div>

        <h1 className='mt-5 text-2xl font-extrabold tracking-tight sm:text-3xl'>
          {project.name}
        </h1>

        <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
          {project.tagline}
        </p>

        <div className='mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-muted-foreground'>
          <StatusDot status={project.status} />
          <span aria-hidden className='opacity-40'>
            ·
          </span>
          <span>{project.year}</span>
          <span aria-hidden className='opacity-40'>
            ·
          </span>
          <span>{project.context}</span>
        </div>

        <div className='group mt-3'>
          <TechChips chips={project.chips} />
        </div>

        {project.cover && (
          <figure className='mt-6 overflow-hidden rounded-2xl border border-border bg-muted'>
            <img
              src={project.cover.src}
              alt={project.cover.alt}
              className='w-full object-cover'
            />
          </figure>
        )}
      </Container>

      <Container className='mt-9 space-y-8'>
        <Block title='Resumen'>
          <p className='text-sm leading-relaxed text-muted-foreground'>
            {project.overview}
          </p>
        </Block>

        <Block title='Mi rol'>
          <p className='text-sm leading-relaxed text-muted-foreground'>
            {project.role}
          </p>
        </Block>

        <Block title='Qué hace'>
          <BulletList items={project.features} />
        </Block>

        <Block title='Stack'>
          <BulletList items={project.stack} />
        </Block>
      </Container>

      {next && (
        <>
          <Divider />
          <Container className='mb-12'>
            <Link
              to={`/proyectos/${next.slug}`}
              className='group -mx-3 flex items-center justify-between gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-muted/60'
            >
              <span>
                <span className='block text-xs text-muted-foreground'>
                  Siguiente proyecto
                </span>
                <span className='font-bold text-foreground'>{next.name}</span>
              </span>
              <ArrowRight
                aria-hidden
                className='size-4 shrink-0 text-primary transition-transform duration-300 ease-(--ease-out-expo) group-hover:translate-x-1'
              />
            </Link>
          </Container>
        </>
      )}
    </article>
  );
};

const Block = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section>
    <h2 className='text-lg font-bold tracking-tight text-foreground'>{title}</h2>
    <div className='mt-2'>{children}</div>
  </section>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className='space-y-2'>
    {items.map((item) => (
      <li
        key={item}
        className='flex gap-2.5 text-sm leading-relaxed text-muted-foreground'
      >
        <span
          aria-hidden
          className='mt-1.5 size-1 shrink-0 rounded-full bg-primary/60'
        />
        {item}
      </li>
    ))}
  </ul>
);
