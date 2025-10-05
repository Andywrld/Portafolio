import { SendIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { useState } from 'react';

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
        headers: {
          Accept: 'application/json',
        },
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
      action='https://formspree.io/f/xovklnjl'
      className='bg-card border border-border rounded-2xl p-8 space-y-6 shadow-sm'
    >
      <div className='grid sm:grid-cols-2 gap-6'>
        <div className='space-y-2'>
          <label htmlFor='name' className='text-sm font-medium text-foreground'>
            Nombre
          </label>
          <input
            id='name'
            name='name'
            type='text'
            placeholder='Tu nombre'
            required
            className='w-full bg-background border border-border rounded-lg p-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none'
          />
        </div>
        <div className='space-y-2'>
          <label
            htmlFor='email'
            className='text-sm font-medium text-foreground'
          >
            Email
          </label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='tu@email.com'
            required
            className='w-full bg-background border border-border rounded-lg p-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none'
          />
        </div>
      </div>

      <div className='space-y-2'>
        <label
          htmlFor='message'
          className='text-sm font-medium text-foreground'
        >
          Mensaje
        </label>
        <textarea
          id='message'
          name='message'
          placeholder='Cuéntame sobre tu proyecto...'
          rows={6}
          required
          className='w-full bg-background border border-border rounded-lg p-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none resize-none'
        ></textarea>
      </div>

      <Button
        type='submit'
        size='lg'
        disabled={status === 'sending'}
        className='w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center justify-center gap-2 transition-all'
      >
        {status === 'sending' ? (
          'Enviando...'
        ) : (
          <>
            <SendIcon className='w-4 h-4' /> Enviar Mensaje
          </>
        )}
      </Button>

      {status === 'sent' && (
        <p className='text-green-600 text-sm text-center'>
          ✅ Mensaje enviado correctamente.
        </p>
      )}
      {status === 'error' && (
        <p className='text-red-600 text-sm text-center'>
          ❌ Error al enviar el mensaje.
        </p>
      )}
    </form>
  );
};
