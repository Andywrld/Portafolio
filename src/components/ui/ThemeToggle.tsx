import { Monitor, Moon, Sun, type LucideIcon } from 'lucide-react';
import type { Theme } from '@/hook/useTheme';

const THEME_META: Record<Theme, { icon: LucideIcon; label: string }> = {
  system: { icon: Monitor, label: 'Sistema' },
  light: { icon: Sun, label: 'Claro' },
  dark: { icon: Moon, label: 'Oscuro' },
};

type ThemeToggleProps = {
  theme: Theme;
  onCycle: () => void;
};

export const ThemeToggle = ({ theme, onCycle }: ThemeToggleProps) => {
  const { icon: Icon, label } = THEME_META[theme];

  return (
    <button
      type='button'
      onClick={onCycle}
      className='pressable grid size-8 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
      aria-label={`Tema: ${label}. Cambiar tema`}
      title={`Tema: ${label}`}
    >
      {/* Keyed so each change replays the swap animation */}
      <span key={theme} className='theme-icon'>
        <Icon className='h-4 w-4' />
      </span>
    </button>
  );
};
