import { useEffect, useState } from 'react';
import { scrollToSection } from '@/hook/ScrollToSection';
import { ArrowDownToLine, MenuIcon, XIcon } from 'lucide-react';

const navItems = [
  { label: 'Experiencia', id: 'experiencia', index: '01' },
  { label: 'Stack', id: 'stack', index: '02' },
  { label: 'Proyectos', id: 'proyectos', index: '03' },
  { label: 'Contacto', id: 'contacto', index: '04' },
];

export const HeaderComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? 'border-b border-border bg-background/90 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8'>
          {/* Wordmark */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='pressable group flex items-center gap-2.5'
            aria-label='Ir al inicio'
          >
            <span className='grid h-8 w-8 place-items-center rounded-md bg-foreground text-[0.8rem] font-bold tracking-tight text-background'>
              AT
            </span>
            <span className='hidden font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-foreground sm:inline'>
              andy·torres
            </span>
          </button>

          {/* Desktop nav */}
          <div className='hidden items-center gap-1 md:flex'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className='group flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
              >
                <span className='font-mono text-[0.65rem] text-primary/70'>
                  {item.index}
                </span>
                <span className='link-underline'>{item.label}</span>
              </button>
            ))}
          </div>

          {/* CV + mobile toggle */}
          <div className='flex items-center gap-2'>
            <a
              href='/Cv-Andy.pdf'
              download='Andy-Torres-CV.pdf'
              className='pressable hidden items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-foreground/[0.03] sm:inline-flex'
            >
              <ArrowDownToLine className='h-4 w-4' />
              CV
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className='pressable grid size-10 place-items-center rounded-md text-foreground hover:bg-foreground/[0.05] md:hidden'
              aria-label='Abrir menú'
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <XIcon className='h-5 w-5' />
              ) : (
                <MenuIcon className='h-5 w-5' />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className='fixed inset-0 z-40 md:hidden'>
          <button
            className='absolute inset-0 bg-background/70 backdrop-blur-sm'
            onClick={() => setMobileOpen(false)}
            aria-label='Cerrar menú'
          />
          <div className='absolute inset-x-4 top-20 rounded-xl border border-border bg-background p-3 shadow-xl'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className='flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-base font-medium text-foreground transition-colors hover:bg-foreground/[0.05]'
              >
                <span className='font-mono text-xs text-primary'>
                  {item.index}
                </span>
                {item.label}
              </button>
            ))}
            <a
              href='/Cv-Andy.pdf'
              download='Andy-Torres-CV.pdf'
              className='mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-3 text-base font-medium text-background'
            >
              <ArrowDownToLine className='h-4 w-4' />
              Descargar CV
            </a>
          </div>
        </div>
      )}
    </>
  );
};
