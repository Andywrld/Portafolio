import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '@/hook/useTheme';
import { useScrollSpy } from '@/hook/useScrollSpy';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const items = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Proyectos', id: 'proyectos' },
  { label: 'Trayectoria', id: 'trayectoria' },
  { label: 'Contacto', id: 'contacto' },
] as const;

const sectionIds = items.map((item) => item.id);

/**
 * Floating pill nav.
 *
 * Section links are real anchors so they can be opened in a new tab and read by
 * assistive tech, but on the home page the click is intercepted for a smooth
 * scroll. From a project detail page the same link is a normal navigation to
 * `/#section`, which ScrollToHash resolves after the route renders.
 */
export const Nav = () => {
  const { theme, cycleTheme } = useTheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onHome = pathname === '/';
  const active = useScrollSpy(sectionIds, onHome);

  const handleClick = (event: React.MouseEvent, id: string) => {
    // Let the browser handle modified clicks (new tab, new window, download).
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
      return;
    }
    event.preventDefault();

    if (!onHome) {
      navigate(`/#${id}`);
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    // Keep the address bar in step without triggering a second jump.
    window.history.replaceState(null, '', id === 'inicio' ? '/' : `/#${id}`);
  };

  return (
    <div className='fixed inset-x-0 top-3 z-(--z-nav) flex justify-center px-4 sm:top-4'>
      <nav
        aria-label='Principal'
        className='flex items-center gap-0.5 rounded-full border border-border bg-background/80 p-1 shadow-[0_1px_2px_rgb(0_0_0/0.04),0_8px_24px_-12px_rgb(0_0_0/0.12)] backdrop-blur-md'
      >
        {items.map((item) => {
          const isActive = onHome && active === item.id;
          return (
            <Link
              key={item.id}
              to={item.id === 'inicio' ? '/' : `/#${item.id}`}
              onClick={(event) => handleClick(event, item.id)}
              aria-current={isActive ? 'true' : undefined}
              className={`rounded-full px-3 py-1.5 text-[0.8rem] font-medium transition-colors sm:px-3.5 sm:text-sm ${
                isActive
                  ? 'bg-muted text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.label}
            </Link>
          );
        })}

        <span aria-hidden className='mx-1 h-4 w-px bg-border' />

        <ThemeToggle theme={theme} onCycle={cycleTheme} />
      </nav>
    </div>
  );
};
