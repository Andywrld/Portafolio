import { techGroups } from '@/data/tech';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { useReveal } from '@/hook/useReveal';

/**
 * Compact stack index. Kept as label-plus-inline-list rows instead of a card
 * grid so it stays a reference table inside the document, not a second gallery
 * competing with the projects above it.
 */
export const Stack = () => {
  const ref = useReveal<HTMLDListElement>();

  return (
    <Container>
      <SectionHeading title='Herramientas' caption='Con lo que trabajo a diario' />

      <dl ref={ref} className='reveal mt-6 divide-y divide-border border-y border-border'>
        {techGroups.map((group) => (
          <div
            key={group.category}
            className='grid grid-cols-1 gap-x-6 gap-y-2 py-3.5 sm:grid-cols-[7rem_1fr] sm:items-baseline'
          >
            <dt className='text-sm font-medium text-foreground'>
              {group.category}
            </dt>
            <dd className='flex flex-wrap gap-x-2 gap-y-2'>
              {group.items.map((tech) => (
                <span
                  key={tech.name}
                  className='inline-flex items-center gap-1.5 rounded-full border border-border bg-card/50 py-1 pr-2.5 pl-1.5 text-xs font-medium text-muted-foreground'
                >
                  <img
                    src={tech.icon}
                    alt=''
                    aria-hidden
                    loading='lazy'
                    className='size-3.5'
                  />
                  {tech.name}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Container>
  );
};
