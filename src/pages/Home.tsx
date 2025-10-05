import { Experience } from '@/components/experience/Experience';
import { GetInTouch } from '@/components/getInTouch/GetInTouch';
import { HeaderComponent } from '@/components/header/Header';
import { Hero } from '@/components/Hero/Hero';
import { Projects } from '@/components/proje/Experience-Project';

import { TechStack } from '@/components/Tech-Stack/Tech-Stack';

export const Home = () => {
  return (
    <div className='flex flex-col min-h-dvh'>
      <header>
        <HeaderComponent />
      </header>

      <main className='flex-1 mt-20'>
        <section className=' flex items-center justify-center relative overflow-hidden px-4'>
          <Hero />
        </section>
        {/* <section className='py-24 sm:py-32 relative overflow-hidden  '>
          <About />
        </section>*/}

        <section
          id='Experiencia'
          className=' py-24 sm:py-32 relative overflow-hidden'
        >
          <Experience />
        </section>

        <section
          id='Tecnologías'
          className='py-24 sm:py-32 relative overflow-hidden'
        >
          <TechStack />
        </section>

        <section
          id='Proyecto'
          className='py-24 sm:py-32 relative overflow-hidden'
        >
          <Projects />
        </section>

        <section
          id='Contáctame'
          className='py-24 sm:py-32 relative overflow-hidden'
        >
          <GetInTouch />
        </section>
      </main>

      <footer className='bg-card border-t border-border py-6 mt-10'>
        <div className='container mx-auto px-4 text-center text-sm text-muted-foreground'>
          <p>
            © {new Date().getFullYear()} Hecho con 💙 por{' '}
            <span className='font-medium text-primary'>Andy Torres</span>
          </p>
          <p className='mt-1 text-xs'>
            Construido con React, Vite y Tailwind CSS · Desplegado en Vercel
          </p>
        </div>
      </footer>
    </div>
  );
};
