import { useEffect, useState } from 'react';

const format = (timeZone: string) =>
  new Intl.DateTimeFormat('es', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone,
  }).format(new Date());

/**
 * My local clock, ticking. It answers the question a recruiter in another
 * timezone actually has — "is this person awake right now?" — which a static
 * "GMT-4" label never does.
 *
 * Resolution is minutes, so it re-renders twice a minute rather than 60 times.
 */
export const useLocalTime = (timeZone: string) => {
  const [time, setTime] = useState(() => format(timeZone));

  useEffect(() => {
    setTime(format(timeZone));
    const id = window.setInterval(() => setTime(format(timeZone)), 30_000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return time;
};
