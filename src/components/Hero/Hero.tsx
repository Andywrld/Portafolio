import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { scrollToSection } from '@/hook/ScrollToSection';
import { useReveal } from '@/hook/useReveal';

const socials = [
  { icon: Github, href: 'https://github.com/Andywrld', label: 'GitHub' },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/andy-torres-9a1136259',
    label: 'LinkedIn',
  },
  { icon: Mail, href: 'mailto:andy18wrld@gmail.com', label: 'Email' },
];

export const Hero = () => {
  const ref = useReveal<HTMLDivElement>({ threshold: 0 });

  return (
    <section
      id='inicio'
      className='relative flex min-h-[100svh] items-center overflow-hidden pt-24'
    >
      {/* Blueprint texture, fading out toward the bottom */}
      <div
        aria-hidden
        className='blueprint pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]'
      />

      <div
        ref={ref}
        data-stagger
        className='reveal relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-16'
      >
        {/* Statement */}
        <div>
          <div className='mb-6 flex items-center gap-3 font-mono text-xs text-muted-foreground'>
            <span className='relative flex h-2 w-2'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70' />
              <span className='relative inline-flex h-2 w-2 rounded-full bg-primary' />
            </span>
            <span className='uppercase tracking-[0.16em]'>
              Disponible para proyectos
            </span>
          </div>

          <h1 className='text-[clamp(2.75rem,8vw,5.5rem)] font-black leading-[0.92] tracking-[-0.04em]'>
            Andy Torres
          </h1>

          <p className='mt-5 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl'>
            Desarrollador Frontend y{' '}
            <span className='font-semibold text-foreground'>Líder Técnico</span>.
            Diseño la arquitectura de interfaces{' '}
            <span className='text-primary'>modernas, reutilizables y escalables</span>{' '}
            con React, TypeScript y Next.js.
          </p>

          <div className='mt-9 flex flex-wrap items-center gap-3'>
            <button
              onClick={() => scrollToSection('proyectos')}
              className='pressable inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90'
            >
              Ver proyectos
              <ArrowUpRight className='h-4 w-4' />
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className='pressable inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-foreground/[0.03]'
            >
              Contacto
            </button>

            <div className='ml-1 flex items-center gap-1'>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={label}
                  className='pressable grid size-10 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-foreground/[0.05] hover:text-foreground'
                >
                  <Icon className='h-[1.15rem] w-[1.15rem]' />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Spec sheet — real signal instead of a decorative image */}
        <aside className='relative'>
          <div className='rounded-xl border border-border bg-card'>
            <div className='flex items-center justify-between border-b border-border px-5 py-3'>
              <span className='font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground'>
                perfil
              </span>
              <span className='font-mono text-[0.7rem] text-primary'>· 2026</span>
            </div>
            <dl className='divide-y divide-border'>
              {[
                ['Experiencia', '2+ años'],
                ['Ubicación', 'La Habana, Cuba'],
                ['Formación', 'Ing. Ciencias Informáticas'],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className='flex items-baseline justify-between gap-4 px-5 py-3.5'
                >
                  <dt className='font-mono text-xs uppercase tracking-wide text-muted-foreground'>
                    {k}
                  </dt>
                  <dd className='text-right text-sm font-medium text-foreground'>
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          {/* Offset accent frame for depth */}
          <div
            aria-hidden
            className='absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-xl border border-primary/30'
          />
        </aside>
      </div>
    </section>
  );
};
