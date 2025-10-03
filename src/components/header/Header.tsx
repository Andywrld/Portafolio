import { Button } from '../ui/Button';

export const HeaderComponent = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50'>
      <div className='container mx-auto px-4 sm:px-6 py-4'>
        <div className='flex items-center justify-between'>
          <button className='text-xl font-bold text-primary hover:text-primary/80 transition-colors'>
            {'<Dev />'}
          </button>

          <div className='hidden md:flex gap-8'>
            <button className='text-sm text-Muted-Foreground hover:text-Foreground transition-colors'>
              About
            </button>

            <button className='text-sm text-Muted-Foreground hover:text-Foreground transition-colors'>
              Experience
            </button>

            <button className='text-sm text-Muted-Foreground hover:text-Foreground transition-colors'>
              Tech Stack
            </button>
            <button className='text-sm text-Muted-Foreground hover:text-Foreground transition-colors'>
              Projects
            </button>

            <Button className='text-white' variant='default' size='lg'>
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
