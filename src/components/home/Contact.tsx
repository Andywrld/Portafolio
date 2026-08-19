import { useState } from 'react';
import { ArrowDownToLine, Check, Loader2, SendHorizontal } from 'lucide-react';
import { profile } from '@/data/profile';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/layout/SectionHeading';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xovklnjl';

const fieldClass =
  'w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/25 focus:outline-none';

const labelClass = 'text-xs font-medium text-muted-foreground';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export const Contact = () => {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error(`Formspree respondió ${response.status}`);

      form.reset();
      setStatus('sent');
    } catch {
      // Network down or the endpoint rejected it: the address below still works.
      setStatus('error');
    }
  };

  return (
    <Container>
      <SectionHeading
        title='Hablemos'
        caption='¿Tenés un proyecto o una vacante? Escribime.'
      />

      <form
        onSubmit={handleSubmit}
        className='mt-6 space-y-3 rounded-2xl border border-border bg-card/40 p-4 transition-colors hover:border-muted-foreground/30'
      >
        <div className='grid gap-3 sm:grid-cols-2'>
          <div className='space-y-1.5'>
            <label htmlFor='name' className={labelClass}>
              Nombre
            </label>
            <input
              id='name'
              name='name'
              type='text'
              required
              autoComplete='name'
              placeholder='Tu nombre'
              className={fieldClass}
            />
          </div>
          <div className='space-y-1.5'>
            <label htmlFor='email' className={labelClass}>
              Email
            </label>
            <input
              id='email'
              name='email'
              type='email'
              required
              autoComplete='email'
              placeholder='tu@email.com'
              className={fieldClass}
            />
          </div>
        </div>

        <div className='space-y-1.5'>
          <label htmlFor='message' className={labelClass}>
            Mensaje
          </label>
          <textarea
            id='message'
            name='message'
            rows={4}
            required
            placeholder='Contame en qué estás trabajando…'
            className={`${fieldClass} resize-none`}
          />
        </div>

        <button
          type='submit'
          disabled={status === 'sending'}
          className='pressable inline-flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90 disabled:opacity-60'
        >
          {status === 'sending' ? (
            <>
              <Loader2 aria-hidden className='size-4 animate-spin' />
              Enviando…
            </>
          ) : (
            <>
              <SendHorizontal aria-hidden className='size-4' />
              Enviar mensaje
            </>
          )}
        </button>

        {/* Reserved slot: the result never pushes the layout around. */}
        <p aria-live='polite' className='min-h-5 text-center text-xs'>
          {status === 'sent' && (
            <span className='inline-flex items-center gap-1.5 font-medium text-primary'>
              <Check aria-hidden className='size-3.5' />
              Mensaje enviado. Te respondo pronto.
            </span>
          )}
          {status === 'error' && (
            <span className='font-medium text-destructive'>
              No se pudo enviar. Escribime directo a {profile.email}.
            </span>
          )}
        </p>
      </form>

      <div className='mt-4 flex flex-wrap items-center justify-between gap-3'>
        <p className='font-mono text-xs text-muted-foreground'>
          {profile.location} · {profile.phone}
        </p>
        <a
          href='/Cv-Andy.pdf'
          download='Andy-Torres-CV.pdf'
          className='pressable inline-flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted'
        >
          <ArrowDownToLine aria-hidden className='size-3.5' />
          Descargar CV
        </a>
      </div>
    </Container>
  );
};
