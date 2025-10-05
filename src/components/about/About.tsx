import FotoPerfil from '@/assets/images/356835990-a3c7ac81-9cff-4e51-8eee-219dd6f63bb9.jpg';

export const About = () => {
  return (
    <div className='container mx-auto  px-6 mt-20'>
      <div className='flex items-center gap-4 mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold'>
          {' '}
          <span className='text-Primary font-mono'>01 .</span>Sobre mi
        </h2>

        <span className='flex-1 h-px bg-Border'></span>
      </div>

      <div className='grid md:grid-cols-2 gap-12 items-center'>
        <div className='space-y-4'>
          <p className='text-lg text-muted-foreground leading-relaxed'>
            Soy un estudiante apasionado de 4to año de la Universidad de las
            Ciencias Informáticas en Cuba. Desde que inicié mi carrera, me ha
            motivado comprender cómo la tecnología puede transformar la forma en
            que interactuamos con la información y los servicios en internet.
            Mis primeros pasos fueron creando pequeñas aplicaciones con HTML,
            CSS y JavaScript, lo que despertó en mí el interés por profundizar
            en el desarrollo web y de software.
          </p>

          <p className='text-lg text-muted-foreground leading-relaxed'>
            A lo largo de mi formación he tenido la oportunidad de participar en
            proyectos académicos y colaborativos utilizando tecnologías como
            Python, Django, PostgreSQL, React y entornos de virtualización con
            Docker. Estas experiencias me han permitido enfrentar problemas
            reales, aplicar buenas prácticas de desarrollo y reforzar mi interés
            en áreas como la automatización, la gestión de entornos y las
            metodologías modernas de desarrollo.
          </p>
        </div>

        <div className='text-card-Foreground flex flex-col gap-6 rounded-xl border shadow-sm p-8 bg-card border-border relative group'>
          <div className='relative aspect-square bg-Muted rounded-lg overflow-hidden'>
            <img
              src={FotoPerfil}
              alt='Profile'
              className='w-full h-full object-cover  transition-all duration-300'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
