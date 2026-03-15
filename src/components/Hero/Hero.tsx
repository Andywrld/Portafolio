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
      className='min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5'
    >
      {/* Animated grid background */}
      <div className='absolute inset-0 -z-10 hero-grid opacity-[0.04] animate-grid-fade' />

      {/* Gradient orbs */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px] animate-pulse' />
        <div className='absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] animate-pulse delay-1000' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] animate-pulse delay-500' />
      </div>

      {/* Radial fade overlay */}
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-background)_70%)]' />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Text content */}
          <div className='space-y-6 sm:space-y-8 text-center lg:text-left'>
            {/* Status badge */}
            <div className='animate-fade-in-up'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm text-sm font-medium text-primary'>
                <span className='relative flex h-2.5 w-2.5'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75' />
                  <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500' />
                </span>
                Disponible para nuevos proyectos
              </span>
            </div>

            {/* Title */}
            <div className='space-y-4'>
              <p className='text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-muted-foreground animate-fade-in-up delay-100'>
                Desarrollador Frontend
              </p>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance animate-fade-in-up delay-200'>
                Soy{' '}
                <span className='text-gradient'>
                  Andy Torres
                </span>
                <br />
                <span className='text-foreground'>creando experiencias</span>{' '}
                <span className='text-gradient'>
                  digitales únicas
                </span>
              </h1>

              <p className='text-base sm:text-lg text-muted-foreground max-w-2xl text-pretty animate-fade-in-up delay-300'>
                Desarrollador apasionado por crear soluciones web innovadoras y
                escalables. Especializado en tecnologías modernas y diseño
                centrado en el usuario.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-400'>
              <Button
                size='lg'
                className='bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-primary/25 active:scale-95'
                onClick={() => scrollToSection('Proyecto')}
              >
                Ver Proyectos
                <ArrowDownIcon className='w-4 h-4 ml-2' />
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='hover:bg-primary/5 hover:border-primary/50 hover:scale-105 transition-all bg-transparent active:scale-95'
                onClick={() => scrollToSection('Contáctame')}
              >
                Contáctame
              </Button>
            </div>

            {/* Social links */}
            <div className='flex gap-3 justify-center lg:justify-start pt-2 animate-fade-in-up delay-500'>
              <a
                href='https://github.com/Andywrld'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all hover:scale-110 active:scale-95'
              >
                <GithubIcon className='w-5 h-5' />
              </a>
              <a
                href='https://www.linkedin.com/in/andy-torres-9a1136259'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all hover:scale-110 active:scale-95'
              >
                <LinkedinIcon className='w-5 h-5' />
              </a>
              <a
                href='mailto:andy18wrld@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2.5 rounded-xl text-muted-foreground hover:text-red-500 hover:bg-red-500/10 transition-all hover:scale-110 active:scale-95'
              >
                <MailIcon className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Hero image with rotating glow */}
          <div className='flex justify-center lg:justify-end animate-fade-in-up delay-600'>
            <div className='relative w-full max-w-md aspect-square'>
              {/* Rotating gradient border glow */}
              <div className='absolute -inset-4 rounded-3xl overflow-hidden'>
                <div className='absolute inset-0 animate-rotate-glow'>
                  <div className='absolute inset-0 bg-[conic-gradient(from_0deg,var(--color-primary),var(--color-accent),var(--color-secondary),var(--color-primary))] opacity-30 blur-2xl' />
                </div>
              </div>

              {/* Image container */}
              <div className='relative animate-float'>
                <div className='absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-xl' />
                <img
                  src={HeroImage}
                  alt='Desarrollo Web Moderno'
                  className='relative z-10 w-full h-full object-contain drop-shadow-2xl'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up delay-800'>
        <button
          onClick={() => scrollToSection('Experiencia')}
          className='flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group'
        >
          <span className='text-xs font-medium tracking-wider uppercase'>Scroll</span>
          <div className='w-6 h-10 rounded-full border-2 border-muted-foreground/30 group-hover:border-primary/50 transition-colors flex justify-center pt-2'>
            <div className='w-1.5 h-1.5 rounded-full bg-primary animate-bounce' />
          </div>
        </button>
      </div>
    </section>
  );
};
