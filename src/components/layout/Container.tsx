import type { ReactNode } from 'react';

/**
 * The one measure everything hangs off. The whole site is a single narrow
 * column — a document you read top to bottom, not a landing page with sections
 * competing for the fold.
 */
export const Container = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`mx-auto w-full max-w-(--container-doc) px-5 ${className}`}>
    {children}
  </div>
);
