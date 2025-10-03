import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 '>
      <div className='flex flex-col items-center gap-4'>
        <span className='text-Muted-Foreground'>Hola , mi nombre es </span>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-balance'>
          Andy Torres
        </h1>

        <p className='text-base sm:text-lg md:text-xl text-Muted-Foreground text-center mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed text-pretty px-4'>
          Soy un desarrollador fronted especializado en crear aplicaciones web
          atractivas, accesibles y de alto rendimiento. Actualmente me centro en
          crear soluciones innovadoras con tecnologías moderna
        </p>

        <div className='space-x-6 flex items-center mb-12 '>
          <Button variant='default' size='lg'>
            Get In Touch
          </Button>

          <Button variant='outline' size='lg'>
            View Resume
          </Button>
        </div>

        <div className='flex gap-4 items-center'>
          <Github size={32} />
          <Linkedin size={32} />
          <Mail size={32} />
        </div>
      </div>
    </div>
  );
};
