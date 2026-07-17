import { Experience } from '@/components/experience/Experience';
import { GetInTouch } from '@/components/getInTouch/GetInTouch';
import { HeaderComponent } from '@/components/header/Header';
import { Hero } from '@/components/Hero/Hero';
import { Projects } from '@/components/project/Experience-Project';
import { TechStack } from '@/components/Tech-Stack/Tech-Stack';

export const Home = () => {
  return (
    <div className='flex min-h-dvh flex-col'>
      <HeaderComponent />

      <main className='flex-1'>
        <Hero />

        <section id='experiencia' className='scroll-mt-24 py-24 sm:py-32'>
          <Experience />
        </section>

        <section id='stack' className='scroll-mt-24 pb-24 sm:pb-32'>
          <TechStack />
        </section>

        <section id='proyectos' className='scroll-mt-24 py-24 sm:py-32'>
          <Projects />
        </section>

        <section id='contacto' className='scroll-mt-24 py-24 sm:py-32'>
          <GetInTouch />
        </section>
      </main>

      <footer className='border-t border-border'>
        <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 sm:flex-row sm:px-8'>
          <div className='flex items-center gap-2.5'>
            <span className='grid h-7 w-7 place-items-center rounded-md bg-foreground text-[0.7rem] font-bold text-background'>
              AT
            </span>
            <span className='text-sm text-muted-foreground'>
              © {new Date().getFullYear()} Andy Torres
            </span>
          </div>
          <p className='font-mono text-xs text-muted-foreground'>
            React · Vite · Tailwind CSS — desplegado en Vercel
          </p>
        </div>
      </footer>
    </div>
  );
};
