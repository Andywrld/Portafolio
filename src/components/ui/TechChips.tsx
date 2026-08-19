import type { TechChip } from '@/data/tech';

/**
 * Overlapping circular marks that fan apart when the row is hovered.
 *
 * Collapsed they read as one compact object rather than a row of loose badges;
 * spread, each mark is legible. The whole set is `aria-hidden` because the same
 * stack is spelled out in words on the project detail page — this is texture,
 * not information a screen reader should have to sit through.
 */
export const TechChips = ({ chips }: { chips: TechChip[] }) => {
  if (chips.length === 0) return null;

  return (
    <div aria-hidden className='flex flex-wrap items-center'>
      {chips.map((chip, index) => (
        <span
          key={chip.name}
          title={chip.name}
          style={{ marginLeft: index === 0 ? 0 : '-0.4rem', zIndex: index + 1 }}
          className='grid size-7 place-items-center rounded-full border border-border bg-muted transition-[margin] duration-300 ease-(--ease-out-expo) group-hover:!ml-0.5'
        >
          <img src={chip.icon} alt='' loading='lazy' className='size-3.5' />
        </span>
      ))}
    </div>
  );
};
