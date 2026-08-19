import {
  CSSIcon,
  DockerIcon,
  GitIcon,
  HTMLIcon,
  JavaScriptIcon,
  NestIcon,
  Next,
  PostgreSQLIcon,
  PostmanIcon,
  ReactIcon,
  RestIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
} from '@/assets/icon';

/**
 * Single registry for every technology named anywhere on the site.
 *
 * Only entries listed here can render an icon chip. Anything outside the map
 * still renders as text on a project detail page — a stack item without an
 * icon is normal, a broken image is not.
 */
const iconByTech: Record<string, string> = {
  React: ReactIcon,
  TypeScript: TypeScriptIcon,
  JavaScript: JavaScriptIcon,
  'Next.js': Next,
  'Tailwind CSS': TailwindCSSIcon,
  HTML: HTMLIcon,
  CSS: CSSIcon,
  Docker: DockerIcon,
  Git: GitIcon,
  PostgreSQL: PostgreSQLIcon,
  Postman: PostmanIcon,
  'Nest.js': NestIcon,
  'Django REST': RestIcon,
};

export type TechChip = { name: string; icon: string };

/** Keeps chip order stable and silently drops tech we have no mark for. */
export const chipsFor = (names: readonly string[]): TechChip[] =>
  names.flatMap((name) => {
    const icon = iconByTech[name];
    return icon ? [{ name, icon }] : [];
  });

export type TechGroup = { category: string; items: TechChip[] };

const group = (category: string, names: string[]): TechGroup => ({
  category,
  items: chipsFor(names),
});

export const techGroups: TechGroup[] = [
  group('Lenguajes', ['TypeScript', 'JavaScript', 'HTML', 'CSS']),
  group('Frontend', ['React', 'Next.js', 'Tailwind CSS']),
  group('Backend', ['Nest.js', 'Django REST', 'PostgreSQL']),
  group('Herramientas', ['Git', 'Docker', 'Postman']),
];
