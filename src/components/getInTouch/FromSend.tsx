import { CheckCircle2, SendIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { useState } from 'react';

const fieldClass =
  'w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25';

export const FormTouch = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle'
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;

    try {
      const response = await fetch('https://formspree.io/f/xovklnjl', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('sent');
        form.reset();
      } else {
        throw new Error('Error al enviar');
      }
    } catch (error) {
      setStatus('error');
      throw error;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8'
    >
      <div className='grid gap-5 sm:grid-cols-2'>
        <div className='space-y-2'>
          <label
            htmlFor='name'
            className='font-mono text-xs uppercase tracking-wide text-muted-foreground'
          >
            Nombre
          </label>
          <input
            id='name'
            name='name'
            type='text'
            placeholder='Tu nombre'
            required
            className={fieldClass}
          />
        </div>
        <div className='space-y-2'>
          <label
            htmlFor='email'
            className='font-mono text-xs uppercase tracking-wide text-muted-foreground'
          >
            Email
          </label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='tu@email.com'
            required
            className={fieldClass}
          />
        </div>
      </div>

      <div className='space-y-2'>
        <label
          htmlFor='message'
          className='font-mono text-xs uppercase tracking-wide text-muted-foreground'
        >
          Mensaje
        </label>
        <textarea
          id='message'
          name='message'
          placeholder='Contame sobre tu proyecto…'
          rows={6}
          required
          className={`${fieldClass} resize-none`}
        />
      </div>

      <Button
        type='submit'
        size='lg'
        disabled={status === 'sending'}
        className='w-full'
      >
        {status === 'sending' ? (
          'Enviando…'
        ) : (
          <>
            <SendIcon className='h-4 w-4' /> Enviar mensaje
          </>
        )}
      </Button>

      {status === 'sent' && (
        <p className='flex items-center justify-center gap-2 text-sm font-medium text-primary'>
          <CheckCircle2 className='h-4 w-4' /> Mensaje enviado. Te respondo
          pronto.
        </p>
      )}
      {status === 'error' && (
        <p className='text-center text-sm font-medium text-destructive'>
          Hubo un error al enviar. Probá de nuevo o escribime por email.
        </p>
      )}
    </form>
  );
};
