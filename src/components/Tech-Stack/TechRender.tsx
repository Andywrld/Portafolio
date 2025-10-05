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

export const TechRender = ({ technologies }: TechnologyListProps) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2  gap-4'>
      {technologies.map((group, index) => (
        <div
          key={index}
          className='px-4 py-2 border rounded-lg bg-card border-border'
        >
          <div className='text-center text-lg font-semibold mb-4 text-accent'>
            {group.category}
          </div>

          <div className='flex flex-wrap gap-4 '>
            {group.items.map((tech, idx) => (
              <div key={idx} className='flex flex-col items-center w-20'>
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className='w-10 h-10 mb-2'
                />
                <span className='text-sm text-foreground text-center'>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
