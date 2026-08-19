import { profile } from '@/data/profile';
import { Container } from '@/components/layout/Container';

/**
 * Closing note. The one place on the page that is not a credential — it says
 * how I work rather than what I have shipped, and it earns the last word.
 */
export const Belief = () => (
  <Container className='my-12'>
    <figure className='flex flex-col items-center gap-3 text-center'>
      <figcaption className='text-[0.65rem] font-semibold tracking-[0.28em] text-muted-foreground uppercase'>
        Algo en lo que creo
      </figcaption>
      <blockquote className='tagged max-w-md px-5 py-4 text-base font-medium tracking-tight text-balance text-foreground'>
        “{profile.belief}”
        <span aria-hidden className='tagged-handle' />
        <span aria-hidden className='tagged-handle' />
      </blockquote>
    </figure>
  </Container>
);
