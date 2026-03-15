import { technologies } from './contanst/tech';
import { TechRender } from './TechRender';

export const TechStack = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6'>
      {/* Section header */}
      <div className='text-center mb-16 space-y-4'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
          Tecnologías que <span className='text-gradient'>domino</span>
        </h2>
        <p className='text-lg text-muted-foreground max-w-xl mx-auto'>
          Herramientas y lenguajes con los que construyo experiencias digitales
          modernas y escalables.
        </p>
      </div>

      <div className='max-w-4xl mx-auto'>
        <TechRender technologies={technologies} />
      </div>
    </div>
  );
};
