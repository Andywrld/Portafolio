import { HeaderComponent } from '@/components/header/Header';
import { Hero } from '@/components/Hero/Hero';

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
      </main>

      <footer>Este es el footer</footer>
    </div>
  );
};
