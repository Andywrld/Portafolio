import { useReveal } from '@/hook/useReveal';

export type ExperienceRender = {
  index: string;
  position: string;
  company: string;
  companyUrl?: string;
  period: string;
  current?: boolean;
  summary: string;
  achievements: string[];
  metric?: { value: string; label: string };
  stack: string[];
};

interface RenderExperienceProps {
  experiences: ExperienceRender[];
}

export const RenderExperience = ({ experiences }: RenderExperienceProps) => {
  return (
    <ol className='relative'>
      {experiences.map((exp) => (
        <ExperienceRow key={exp.company} exp={exp} />
      ))}
    </ol>
  );
};

const ExperienceRow = ({ exp }: { exp: ExperienceRender }) => {
  const ref = useReveal<HTMLLIElement>();

  return (
    <li
      ref={ref}
      className='reveal group grid grid-cols-1 gap-x-10 gap-y-4 border-t border-border py-9 md:grid-cols-[13rem_1fr]'
    >
      {/* Left rail — period + index */}
      <div className='flex items-start justify-between md:flex-col md:justify-start md:gap-2'>
        <span className='font-mono text-sm text-foreground'>{exp.period}</span>
        {exp.current && (
          <span className='inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-primary'>
            <span className='h-1.5 w-1.5 rounded-full bg-primary' />
            Actual
          </span>
        )}
      </div>

      {/* Body */}
      <div>
        <div className='flex flex-wrap items-baseline gap-x-3'>
          <h3 className='text-xl font-bold tracking-tight text-foreground md:text-2xl'>
            {exp.position}
          </h3>
          <span className='text-muted-foreground'>·</span>
          {exp.companyUrl ? (
            <a
              href={exp.companyUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='link-underline text-lg font-medium text-primary'
            >
              {exp.company}
            </a>
          ) : (
            <span className='text-lg font-medium text-primary'>
              {exp.company}
            </span>
          )}
        </div>

        <p className='mt-3 max-w-2xl text-muted-foreground'>{exp.summary}</p>

        <ul className='mt-5 space-y-2.5'>
          {exp.achievements.map((a) => (
            <li key={a} className='flex gap-3 text-sm text-foreground/85'>
              <span
                aria-hidden
                className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60'
              />
              <span className='leading-relaxed'>{a}</span>
            </li>
          ))}
        </ul>

        {exp.metric && (
          <div className='mt-6 inline-flex items-baseline gap-3 rounded-lg border border-border bg-card px-4 py-3'>
            <span className='text-2xl font-black tracking-tight text-primary'>
              {exp.metric.value}
            </span>
            <span className='text-sm text-muted-foreground'>
              {exp.metric.label}
            </span>
          </div>
        )}

        <div className='mt-6 flex flex-wrap gap-2'>
          {exp.stack.map((tech) => (
            <span
              key={tech}
              className='rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
};
