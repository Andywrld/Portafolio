import { technologies } from './contanst/tech';
import { TechRender } from './TechRender';

export const TechStack = () => {
  return (
    <div className='mx-auto max-w-6xl px-5 sm:px-8'>
      <header className='mb-4 max-w-2xl'>
        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
          Herramientas
        </h2>
        <p className='mt-3 text-muted-foreground'>
          Tecnologías con las que construyo y mantengo productos en producción.
        </p>
      </header>

      <TechRender technologies={technologies} />
    </div>
  );
};
