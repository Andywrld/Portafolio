import { useReveal } from '@/hook/useReveal';

export type Technology = {
  name: string;
  icon: string;
};

export type TechnologyGroup = {
  category: string;
  items: Technology[];
};

export interface TechnologyListProps {
  technologies: TechnologyGroup[];
}

export const TechRender = ({ technologies }: TechnologyListProps) => {
  return (
    <div>
      {technologies.map((group) => (
        <TechRow key={group.category} group={group} />
      ))}
      <div className='border-t border-border' />
    </div>
  );
};

const TechRow = ({ group }: { group: TechnologyGroup }) => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className='reveal grid grid-cols-1 gap-x-10 gap-y-4 border-t border-border py-8 md:grid-cols-[11rem_1fr]'
    >
      <div className='flex items-baseline gap-3'>
        <h3 className='font-mono text-sm uppercase tracking-[0.14em] text-muted-foreground'>
          {group.category}
        </h3>
        <span className='font-mono text-xs text-primary/70'>
          {String(group.items.length).padStart(2, '0')}
        </span>
      </div>

      <ul className='flex flex-wrap gap-2.5'>
        {group.items.map((tech) => (
          <li
            key={tech.name}
            className='hover-lift group inline-flex items-center gap-2.5 rounded-lg border border-border bg-card px-3.5 py-2.5'
          >
            <img
              src={tech.icon}
              alt=''
              aria-hidden
              className='h-5 w-5 shrink-0'
              loading='lazy'
            />
            <span className='text-sm font-medium text-foreground'>
              {tech.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
