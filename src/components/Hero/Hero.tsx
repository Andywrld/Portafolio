import {
  ArrowDownIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from 'lucide-react';
import { Button } from '../ui/Button';
import HeroImage from '@/assets/images/modern-abstract-3d-geometric-shapes-representing-w.webp';
import { scrollToSection } from '@/hook/ScrollToSection';

export const Hero = () => {
  return (
    <section
      id='hero'
      className='min-h-screen flex items-center justify-center relative overflow-hidden   bg-gradient-to-br from-background via-background to-primary/5'
    >
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/15 rounded-full blur-3xl animate-pulse delay-500' />
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6 sm:space-y-8 text-center lg:text-left'>
            <div className='space-y-4'>
              <p className='text-sm sm:text-base font-medium text-muted-fo uppercase tracking-wider'>
                Desarrollador Fronted
              </p>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance'>
                Soy <span className='text-primary'>Andy Torres</span>, creando
                experiencias{' '}
                <span className='text-primary'>digitales únicas</span>
              </h1>

              <p className='text-base sm:text-lg text-muted-foreground max-w-2xl text-pretty'>
                Desarrollador apasionado por crear soluciones web innovadoras y
                escalables. Especializado en tecnologías modernas y diseño
                centrado en el usuario.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <Button
                size='lg'
                className='bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform shadow-lg shadow-primary/25'
                onClick={() => scrollToSection('Proyecto')}
              >
                Ver Proyectos
                <ArrowDownIcon className='w-4 h-4 ml-2' />
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='hover:bg-accent/10 hover:border-accent hover:scale-105 transition-all bg-transparent'
                onClick={() => scrollToSection('Contáctame')}
              >
                Contáctame
              </Button>
            </div>

            <div className='flex gap-4 justify-center lg:justify-start pt-4'>
              <Button
                size='icon'
                variant='ghost'
                className='hover:text-primary hover:bg-primary/10 transition-colors'
              >
                <a
                  href='https://github.com/Andywrld'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <GithubIcon className='w-5 h-5' />
                </a>
              </Button>
              <Button
                size='icon'
                variant='ghost'
                className='hover:text-primary hover:bg-secondary/10 transition-colors'
              >
                <a
                  href=' https://www.linkedin.com/in/andy-torres-9a1136259'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <LinkedinIcon className='w-5 h-5' />
                </a>
              </Button>
              <Button
                size='icon'
                variant='ghost'
                className='hover:text-red-500 hover:bg-accent/10 transition-colors'
              >
                <a
                  href='mailto:andy18wrld@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <MailIcon className='w-5 h-5' />
                </a>
              </Button>
            </div>
          </div>

          <div className='flex justify-center lg:justify-end'>
            <div className='relative w-full max-w-md aspect-square'>
              <div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl animate-pulse' />
              <img
                src={HeroImage}
                alt='Desarrollo Web Moderno'
                className='relative z-10 w-full h-full object-contain drop-shadow-2xl'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
