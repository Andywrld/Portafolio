import { useEffect, useState } from 'react';
import { scrollToSection } from '@/hook/ScrollToSection';
import { Button } from '../ui/Button';
import { MenuIcon, XIcon } from 'lucide-react';

const navItems = [
  { label: 'Experiencia', id: 'Experiencia' },
  { label: 'Tecnologías', id: 'Tecnologías' },
  { label: 'Proyectos', id: 'Proyecto' },
  { label: 'Contacto', id: 'Contáctame' },
];

export const HeaderComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-nav-slide-in ${
          scrolled
            ? 'py-2'
            : 'py-4'
        }`}
      >
        <div
          className={`container mx-auto px-4 sm:px-6 transition-all duration-500 ${
            scrolled
              ? 'max-w-3xl bg-card/70 backdrop-blur-xl border border-border/60 rounded-2xl shadow-lg shadow-primary/5'
              : ''
          }`}
        >
          <div className='flex items-center justify-between h-14'>
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className='text-lg font-bold text-primary hover:text-primary/80 transition-all hover:scale-105 active:scale-95'
            >
              <span className='inline-flex items-center gap-1'>
                <span className='text-foreground'>&lt;</span>
                <span className='text-gradient'>Dev</span>
                <span className='text-foreground'>/&gt;</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <div className='hidden md:flex items-center gap-1'>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className='nav-link px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-primary/5'
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className='flex items-center gap-3'>
              <Button
                className='hidden sm:inline-flex text-white bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-md shadow-primary/20'
                variant='default'
                size='sm'
              >
                <a href='/Cv-Andy.pdf' download='Cv-Andy.pdf'>
                  Descargar CV
                </a>
              </Button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className='md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all'
                aria-label='Toggle menu'
              >
                {mobileOpen ? (
                  <XIcon className='w-5 h-5' />
                ) : (
                  <MenuIcon className='w-5 h-5' />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className='fixed inset-0 z-40 md:hidden'>
          <div
            className='absolute inset-0 bg-background/80 backdrop-blur-sm'
            onClick={() => setMobileOpen(false)}
          />
          <div className='absolute top-20 left-4 right-4 mobile-menu-enter'>
            <div className='bg-card/95 backdrop-blur-xl border border-border/60 rounded-2xl shadow-2xl shadow-primary/10 p-4 space-y-1'>
              {navItems.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className='w-full text-left px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-xl transition-all animate-fade-in-up'
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {item.label}
                </button>
              ))}
              <div className='pt-2 sm:hidden'>
                <Button
                  className='w-full text-white bg-gradient-to-r from-primary to-accent'
                  variant='default'
                  size='lg'
                >
                  <a href='/Cv-Andy.pdf' download='Cv-Andy.pdf'>
                    Descargar CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
