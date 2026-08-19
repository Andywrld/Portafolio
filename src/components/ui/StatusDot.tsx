import type { ProjectStatus } from '@/data/projects';

const meta: Record<ProjectStatus, { label: string; className: string }> = {
  live: { label: 'En vivo', className: 'bg-success' },
  wip: { label: 'En curso', className: 'bg-primary' },
  archived: { label: 'Archivado', className: 'bg-muted-foreground' },
};

/** Live state for a project. The dot only animates while something is running. */
export const StatusDot = ({ status }: { status: ProjectStatus }) => {
  const { label, className } = meta[status];

  return (
    <span className='flex items-center gap-1.5 text-xs'>
      <span className='relative flex size-1.5'>
        {status === 'live' && (
          <span
            aria-hidden
            className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-70 motion-reduce:animate-none ${className}`}
          />
        )}
        <span
          aria-hidden
          className={`relative inline-flex size-1.5 rounded-full ${className}`}
        />
      </span>
      {label}
    </span>
  );
};
