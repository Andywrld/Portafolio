import { Intro } from '@/components/home/Intro';
import { ProjectIndex } from '@/components/home/ProjectIndex';
import { Stack } from '@/components/home/Stack';
import { ExperienceList } from '@/components/home/ExperienceList';
import { Contact } from '@/components/home/Contact';
import { Belief } from '@/components/home/Belief';
import { Divider } from '@/components/layout/Divider';

export const Home = () => (
  <>
    <section id='inicio' className='scroll-mt-24'>
      <Intro />
    </section>

    <Divider />

    <section id='proyectos' className='scroll-mt-24'>
      <ProjectIndex />
    </section>

    <Divider />

    <section id='herramientas' className='scroll-mt-24'>
      <Stack />
    </section>

    <Divider />

    <section id='trayectoria' className='scroll-mt-24'>
      <ExperienceList />
    </section>

    <Divider />

    <section id='contacto' className='scroll-mt-24'>
      <Contact />
    </section>

    <Divider />

    <Belief />
  </>
);
