import {
  ArrowDownToLine,
  BadgeCheck,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import { profile } from '@/data/profile';
import { useCopy } from '@/hook/useCopy';
import { useGitHubProfile } from '@/hook/useGitHubProfile';
import { useLocalTime } from '@/hook/useLocalTime';
import { Container } from '@/components/layout/Container';

const socialLinks = [
  { icon: Github, href: `https://github.com/${profile.githubUser}`, label: 'GitHub' },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/andy-torres-9a1136259',
    label: 'LinkedIn',
  },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Escribirme' },
];

/**
 * The identity block. Portrait, name, what I do, how to reach me — everything a
 * visitor needs in the first screen, without a hero that makes them scroll to
 * find out who this is.
 *
 * The portrait comes from the live GitHub account so it never drifts out of
 * date; the bundled image is the fallback when the API is rate-limited.
 */
export const Intro = () => {
  const { data, loading } = useGitHubProfile(profile.githubUser);
  const { copied, copy } = useCopy();
  const time = useLocalTime(profile.timeZone);

  const avatar = data?.avatarUrl ?? profile.fallbackAvatar;

  return (
    <Container className='pt-24 sm:pt-28'>
      <div className='flex items-center gap-4'>
        <a
          href={data?.htmlUrl ?? `https://github.com/${profile.githubUser}`}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`Perfil de GitHub de ${profile.name}`}
          className='pressable group relative size-20 shrink-0 overflow-hidden rounded-full ring-1 ring-border sm:size-24'
        >
          {/* Holds the circle while the request is in flight — no layout jump. */}
          <span
            aria-hidden
            className={`absolute inset-0 bg-muted transition-opacity duration-500 ${
              loading ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <img
            src={avatar}
            alt={`Retrato de ${profile.name}`}
            width={96}
            height={96}
            className='relative h-full w-full object-cover transition-transform duration-500 ease-(--ease-out-expo) group-hover:scale-105'
          />
        </a>

        <div className='min-w-0'>
          <h1 className='flex items-center gap-1.5 text-2xl font-extrabold tracking-tight sm:text-3xl'>
            {profile.name}
            <BadgeCheck
              aria-hidden
              className='size-5 shrink-0 text-primary sm:size-6'
            />
          </h1>

          <p className='mt-0.5 flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground'>
            {profile.role}
            {profile.available && (
              <span className='inline-flex items-center gap-1.5 text-xs font-medium text-primary'>
                <span className='relative flex size-1.5'>
                  <span
                    aria-hidden
                    className='absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70 motion-reduce:animate-none'
                  />
                  <span
                    aria-hidden
                    className='relative inline-flex size-1.5 rounded-full bg-primary'
                  />
                </span>
                Disponible
              </span>
            )}
          </p>

          <div className='mt-1 flex items-center gap-1.5'>
            <a
              href={`mailto:${profile.email}`}
              className='link-underline truncate text-sm text-muted-foreground hover:text-foreground'
            >
              {profile.email}
            </a>
            <button
              type='button'
              onClick={() => copy(profile.email)}
              aria-label={copied ? 'Correo copiado' : 'Copiar correo'}
              className='pressable grid size-6 shrink-0 place-items-center rounded text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
            >
              {copied ? (
                <Check className='size-3.5 text-primary' />
              ) : (
                <Copy className='size-3.5' />
              )}
            </button>
            {/* Announced without stealing focus from the button. */}
            <span aria-live='polite' className='sr-only'>
              {copied ? 'Correo copiado al portapapeles' : ''}
            </span>
          </div>
        </div>
      </div>

      <div className='mt-4 flex flex-wrap items-center gap-2'>
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel='noopener noreferrer'
            aria-label={label}
            className='pressable grid size-8 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
          >
            <Icon className='size-4' />
          </a>
        ))}

        <a
          href='/Cv-Andy.pdf'
          download='Andy-Torres-CV.pdf'
          className='pressable inline-flex h-8 items-center gap-1.5 rounded-lg border border-border px-2.5 text-xs font-medium text-foreground transition-colors hover:bg-muted'
        >
          <ArrowDownToLine aria-hidden className='size-3.5' />
          CV
        </a>

        <p className='ml-1 font-mono text-xs font-medium text-muted-foreground'>
          <time>{time}</time>
          <span aria-hidden className='mx-1.5 opacity-50'>
            //
          </span>
          {profile.location}
        </p>
      </div>

      <div className='mt-5 space-y-2.5 text-sm leading-relaxed text-muted-foreground'>
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Container>
  );
};
