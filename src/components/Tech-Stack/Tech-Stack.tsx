import { technologies } from './contanst/tech';
import { TechRender } from './TechRender';

export const TechStack = () => {
  return (
    <div className='container mx-auto px-6'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-primary'>
          Tecnologías
        </h2>
      </div>
      <div className='max-w-2xl mx-auto'>
        <p className='text-lg text-muted-foreground mb-12 text-center leading-relaxed'>
          Estas son algunas de las tecnologías con las que he estado trabajando
          recientemente:
        </p>

        <TechRender technologies={technologies} />
      </div>
    </div>
  );
};
