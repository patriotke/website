/**
 *
 * Content
 *
 */
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export type IContentProps = {
  children: ReactNode;
  fullWidth?: boolean;
};

function Content({ children, fullWidth = false }: IContentProps) {
  return (
    <div
      className={clsx({
        'container mx-auto': !fullWidth,
        'w-full': fullWidth,
      })}
    >
      {children}
    </div>
  );
}

export default Content;
