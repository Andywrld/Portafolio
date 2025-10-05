import { Mail, MapPin, Phone, SendIcon } from 'lucide-react';
import { Button } from '../ui/Button';

export const GetInTouch = () => {
  return (
    <section className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      {/* Header */}
      <div className='text-center mb-12 sm:mb-16'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4'>
          Contáctame
        </h2>
        <p className='text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
          Estoy abierto a nuevas oportunidades y colaboraciones. No dudes en
          contactarme para discutir cómo puedo contribuir a tu próximo proyecto.
        </p>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {/* Formulario */}
        <form
          action='https://formspree.io/f/xovklnjl'
          method='POST'
          className='bg-card border border-border rounded-2xl p-8 space-y-6 shadow-sm'
        >
          <div className='grid sm:grid-cols-2 gap-6'>
            <div className='space-y-2'>
              <label
                htmlFor='name'
                className='text-sm font-medium text-foreground'
              >
                Nombre
              </label>
              <input
                id='name'
                name='name'
                type='text'
                placeholder='Tu nombre'
                required
                className='w-full bg-background border border-border rounded-lg p-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none'
              />
            </div>

            <div className='space-y-2'>
              <label
                htmlFor='email'
                className='text-sm font-medium text-foreground'
              >
                Email
              </label>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='tu@email.com'
                required
                className='w-full bg-background border border-border rounded-lg p-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none'
              />
            </div>
          </div>

          <div className='space-y-2'>
            <label
              htmlFor='message'
              className='text-sm font-medium text-foreground'
            >
              Mensaje
            </label>
            <textarea
              id='message'
              name='message'
              placeholder='Cuéntame sobre tu proyecto...'
              rows={6}
              required
              className='w-full bg-background border border-border rounded-lg p-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none resize-none'
            ></textarea>
          </div>

          <Button
            type='submit'
            size='lg'
            className='w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center justify-center gap-2 transition-all'
          >
            <SendIcon className='w-4 h-4' />
            Enviar Mensaje
          </Button>
        </form>

        {/* Información de contacto */}
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
