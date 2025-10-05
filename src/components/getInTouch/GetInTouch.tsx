import { Mail, MapPin, Phone } from 'lucide-react';
import { FormTouch } from './FromSend';

export const GetInTouch = () => {
  return (
    <section className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div className='text-center mb-12 sm:mb-16'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4'>
          Contáctame
        </h2>
        <p className='text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto'>
          Estoy abierto a nuevas oportunidades y colaboraciones. No dudes en
          contactarme para discutir cómo puedo contribuir a tu próximo proyecto.
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
      
        <FormTouch />
       
        <div className='flex flex-col gap-6'>
          <div className='p-6 flex flex-col items-center justify-center border border-border rounded-2xl bg-card text-center gap-3'>
            <div className='rounded-full bg-primary/10 h-10 w-10 flex items-center justify-center'>
              <Mail className='w-5 h-5 text-primary' />
            </div>
            <p className='text-sm font-medium text-foreground'>Email</p>
            <span className='text-muted-foreground text-sm'>
              andy18wrld@gmail.com
            </span>
          </div>

          <div className='p-6 flex flex-col items-center justify-center border border-border rounded-2xl bg-card text-center gap-3'>
            <div className='rounded-full bg-primary/10 h-10 w-10 flex items-center justify-center'>
              <Phone className='w-5 h-5 text-primary' />
            </div>
            <p className='text-sm font-medium text-foreground'>Teléfono</p>
            <span className='text-muted-foreground text-sm'>+53 56870848</span>
          </div>

          <div className='p-6 flex flex-col items-center justify-center border border-border rounded-2xl bg-card text-center gap-3'>
            <div className='rounded-full bg-primary/10 h-10 w-10 flex items-center justify-center'>
              <MapPin className='w-5 h-5 text-primary' />
            </div>
            <p className='text-sm font-medium text-foreground'>Ubicación</p>
            <span className='text-muted-foreground text-sm'>
              La Habana, Cuba
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
