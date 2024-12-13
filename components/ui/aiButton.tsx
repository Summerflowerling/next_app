import { ButtonHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

export const AiButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={clsx(
        'px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-gray-400',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

AiButton.displayName = 'Button';
