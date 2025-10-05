export const Experience = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='text-center mb-12 sm:mb-16'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
          Experiencia <span className='text-primary'>Profesional</span>
        </h2>
        <p className='text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
          Mi trayectoria profesional construyendo soluciones digitales
          innovadoras
        </p>
      </div>

      <div className='space-y-8'>
        <div className='text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm p-6 md:p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group opacity-100 translate-x-0'>
          <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4'>
            <div>
              <h3 className='text-xl md:text-2xl font-bold text-Foreground group-hover:text-Primary transition-colors'>
                Desarrollador Fronted
              </h3>
              <p className='text-lg text-Primary font-medium'>Citmatel</p>
            </div>

            <span className='px-3 py-1 text-xs sm:text-sm font-medium bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full border w-fit border-primary/30'>
              Enero 2025 - Presente
            </span>
          </div>

          <p className='text-pretty text-Muted-Foreground font-medium'>
            Desempeño el rol de Fronted siendo el lider principal del equipo de
            desarrollo ,
          </p>

          <div className='flex flex-wrap   gap-5 '>
            <div className='px-3 py-1 text-xs sm:text-sm font-medium bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full border border-primary/30 '>
              HTML
            </div>

            <div className='px-3 py-1 text-xs sm:text-sm font-medium bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full border border-primary/30 '>
              CSS
            </div>

            <div className='px-3 py-1 text-xs sm:text-sm font-medium bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full border border-primary/30 '>
              TailwindCss
            </div>

            <div className='px-3 py-1 text-xs sm:text-sm font-medium bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full border border-primary/30 '>
              TypeScript
            </div>

            <div className='px-3 py-1 text-xs sm:text-sm font-medium bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full border border-primary/30 '>
              React
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
