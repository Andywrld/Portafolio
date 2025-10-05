export type ExperienceRender = {
  position: string;
  company: string;
  period: string;
  description: string;
  tecnologies: string[];
};

interface RenderExperienceProps {
  experiences: ExperienceRender[];
}

export const RenderExperience = ({ experiences }: RenderExperienceProps) => {
  return (
    <>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className='text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm p-6 md:p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group opacity-100 translate-x-0'
        >
          <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4'>
            <div>
              <h3 className='text-xl md:text-2xl font-bold text-Foreground group-hover:text-Primary transition-colors'>
                {exp.position}
              </h3>
              <p className='text-lg text-Primary font-medium'>{exp.company}</p>
            </div>

            <span className='px-3 py-1 text-xs sm:text-sm font-medium bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full border w-fit border-primary/30'>
              {exp.period}
            </span>
          </div>
          <p className='text-pretty text-Muted-Foreground font-medium'>
            {exp.description}
          </p>
          <div className='flex flex-wrap   gap-5 '>
            {exp.tecnologies.map((tech, idx) => (
              <div
                key={idx}
                className='px-3 py-1 text-xs sm:text-sm font-medium bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full border border-primary/30 '
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
