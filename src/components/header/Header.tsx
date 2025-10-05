import { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import { scrollToSection } from '@/hook/ScrollToSection';

export const HeaderComponent = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-Background/80 backdrop-blur-lg border-b border-border'
          : ''
      }`}
    >
      <div className='container mx-auto px-4 sm:px-6 py-4'>
        <div className='flex items-center justify-between'>
          <button className='text-xl font-bold text-primary hover:text-primary/80 transition-colors'>
            {'<Dev />'}
          </button>

          <div className='hidden md:flex gap-8'>
            <button
              onClick={() => scrollToSection('Experiencia')}
              className='text-sm text-Muted-Foreground hover:text-Foreground transition-colors'
            >
              Experiencia
            </button>

            <button
              onClick={() => scrollToSection('Tecnologías')}
              className='text-sm text-Muted-Foreground hover:text-Foreground transition-colors'
            >
              Tecnologías
            </button>
            <button
              onClick={() => scrollToSection('Proyecto')}
              className='text-sm text-Muted-Foreground hover:text-Foreground transition-colors'
            >
              Proyecto
            </button>
          </div>

          <Button className='text-white ' variant='default' size='lg'>
            Descargar CV
          </Button>
        </div>
      </div>
    </nav>
  );
};
