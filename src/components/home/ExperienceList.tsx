import { experiences, type Experience } from '@/data/experience';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { useReveal } from '@/hook/useReveal';

export const ExperienceList = () => (
  <Container>
    <SectionHeading title='Trayectoria' caption='Dónde estuve trabajando' />

    <ol className='mt-6 space-y-6'>
      {experiences.map((experience) => (
        <ExperienceItem key={experience.company} experience={experience} />
      ))}
    </ol>
  </Container>
);

const ExperienceItem = ({ experience }: { experience: Experience }) => {
  const ref = useReveal<HTMLLIElement>();

  return (
    <li
      ref={ref}
      className='reveal rounded-xl border border-border bg-card/40 p-4 transition-colors hover:border-muted-foreground/30'
    >
      <div className='flex flex-wrap items-center justify-between gap-x-3 gap-y-1'>
        <h3 className='font-bold text-foreground'>
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='link-underline'
            >
              {experience.company}
            </a>
          ) : (
            experience.company
          )}
        </h3>
        {experience.current && (
          <span className='flex items-center gap-1.5 text-xs font-medium text-primary'>
            <span className='relative flex size-1.5'>
              <span
                aria-hidden
                className='absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70 motion-reduce:animate-none'
              />
              <span
                aria-hidden
                className='relative inline-flex size-1.5 rounded-full bg-primary'
              />
            </span>
            Actual
          </span>
        )}
      </div>

      <p className='mt-0.5 text-sm font-medium text-foreground'>
        {experience.position}
      </p>
      <p className='text-sm text-muted-foreground'>
        {experience.type}
        <span aria-hidden className='mx-1.5 opacity-50'>
          ·
        </span>
        <span className='font-mono text-xs'>{experience.period}</span>
      </p>

      <ul className='mt-3 space-y-2'>
        {experience.bullets.map((bullet) => (
          <li
            key={bullet}
            className='flex gap-2.5 text-sm leading-relaxed text-muted-foreground'
          >
            <span
              aria-hidden
              className='mt-1.5 size-1 shrink-0 rounded-full bg-muted-foreground/50'
            />
            {bullet}
          </li>
        ))}
      </ul>

      {experience.metric && (
        <p className='mt-3 flex flex-wrap items-baseline gap-2 border-t border-border pt-3'>
          <span className='text-lg font-extrabold tracking-tight text-primary'>
            {experience.metric.value}
          </span>
          <span className='text-sm text-muted-foreground'>
            {experience.metric.label}
          </span>
        </p>
      )}
    </li>
  );
};
