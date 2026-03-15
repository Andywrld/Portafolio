import { CodeIcon, ServerIcon, WrenchIcon } from 'lucide-react';

export type Technology = {
  name: string;
  icon: string;
};

export type TechnologyGroup = {
  category: string;
  items: Technology[];
};

export interface TechnologyListProps {
  technologies: TechnologyGroup[];
}

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <CodeIcon className='w-5 h-5' />,
  Backend: <ServerIcon className='w-5 h-5' />,
  Herramientas: <WrenchIcon className='w-5 h-5' />,
};

export const TechRender = ({ technologies }: TechnologyListProps) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {technologies.map((group, index) => (
        <div
          key={index}
          className='group relative rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1'
        >
          {/* Hover glow */}
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

          <div className='relative space-y-5'>
            {/* Category header */}
            <div className='flex items-center gap-3'>
              <div className='flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary'>
                {categoryIcons[group.category] ?? <CodeIcon className='w-5 h-5' />}
              </div>
              <h3 className='text-lg font-semibold text-foreground'>
                {group.category}
              </h3>
            </div>

            {/* Divider */}
            <div className='h-px bg-gradient-to-r from-border/80 via-primary/20 to-transparent' />

            {/* Tech items */}
            <div className='grid grid-cols-2 gap-3'>
              {group.items.map((tech, idx) => (
                <div
                  key={idx}
                  className='flex items-center gap-3 px-3 py-2.5 rounded-xl bg-background/50 border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-200 group/item'
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className='w-7 h-7 transition-transform duration-200 group-hover/item:scale-110'
                  />
                  <span className='text-sm font-medium text-muted-foreground group-hover/item:text-foreground transition-colors'>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
