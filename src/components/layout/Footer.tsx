import { profile } from '@/data/profile';
import { Container } from './Container';

export const Footer = () => (
  <footer className='border-t border-border py-6'>
    <Container className='flex flex-wrap items-center justify-between gap-2'>
      <p className='text-xs text-muted-foreground'>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className='font-mono text-xs text-muted-foreground'>
        React · Vite · Tailwind
      </p>
    </Container>
  </footer>
);
