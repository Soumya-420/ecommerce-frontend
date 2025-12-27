import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'destructive';
};

export function Button({ className = '', variant = 'default', ...rest }: ButtonProps) {
  const variants: Record<string, string> = {
    default: 'ui-btn',
    outline: 'ui-btn bg-transparent text-gray-800 border border-gray-300 hover:bg-gray-100',
    destructive: 'ui-btn bg-red-600 hover:bg-red-700',
  };
  return <button className={`${variants[variant]} ${className}`} {...rest} />;
}


