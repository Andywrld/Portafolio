/**
 * Section title plus a "tagged" subtitle: the caption sits inside a highlight
 * swatch with four live corner handles, the way a selected element looks in a
 * design tool. It reads as a page still on the workbench rather than a finished
 * brochure, which is the whole posture of the site.
 *
 * The handle geometry lives in `.tagged` (index.css). Two handles are
 * pseudo-elements; the other two need real nodes, hence the spans.
 */
export const SectionHeading = ({
  title,
  caption,
  id,
}: {
  title: string;
  caption: string;
  id?: string;
}) => (
  <header>
    <h2
      id={id}
      className='text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl'
    >
      {title}
    </h2>
    <p className='tagged mt-2 text-sm font-medium tracking-tight text-muted-foreground'>
      {caption}
      <span aria-hidden className='tagged-handle' />
      <span aria-hidden className='tagged-handle' />
    </p>
  </header>
);
