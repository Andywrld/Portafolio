import { Mail, MapPin, Phone } from 'lucide-react';
import { FormTouch } from './FromSend';

const contact = [
  { icon: Mail, label: 'Email', value: 'andy18wrld@gmail.com', href: 'mailto:andy18wrld@gmail.com' },
  { icon: Phone, label: 'Teléfono', value: '+53 56870848', href: 'tel:+5356870848' },
  { icon: MapPin, label: 'Ubicación', value: 'La Habana, Cuba' },
];

export const GetInTouch = () => {
  return (
    <div className='mx-auto max-w-6xl px-5 sm:px-8'>
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16'>
        {/* Left — invitation + channels */}
        <div>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            Hablemos
          </h2>
          <p className='mt-4 max-w-md text-lg text-muted-foreground'>
            ¿Tenés un proyecto o una vacante? Escribime y te respondo pronto.
          </p>

          <ul className='mt-10 divide-y divide-border border-y border-border'>
            {contact.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    className='group flex items-center gap-4 py-4 transition-colors hover:text-primary'
                  >
                    <span className='grid size-10 shrink-0 place-items-center rounded-lg border border-border text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary'>
                      <Icon className='h-[1.15rem] w-[1.15rem]' />
                    </span>
                    <span className='flex flex-col'>
                      <span className='font-mono text-xs uppercase tracking-wide text-muted-foreground'>
                        {label}
                      </span>
                      <span className='font-medium text-foreground group-hover:text-primary'>
                        {value}
                      </span>
                    </span>
                  </a>
                ) : (
                  <div className='flex items-center gap-4 py-4'>
                    <span className='grid size-10 shrink-0 place-items-center rounded-lg border border-border text-muted-foreground'>
                      <Icon className='h-[1.15rem] w-[1.15rem]' />
                    </span>
                    <span className='flex flex-col'>
                      <span className='font-mono text-xs uppercase tracking-wide text-muted-foreground'>
                        {label}
                      </span>
                      <span className='font-medium text-foreground'>
                        {value}
                      </span>
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — form */}
        <FormTouch />
      </div>
    </div>
  );
};
