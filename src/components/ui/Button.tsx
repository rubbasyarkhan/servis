import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'emergency' | 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-bold transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer text-center';

    const variants = {
      emergency:
        'bg-[#FF6500] hover:bg-[#E05600] text-white shadow-lg shadow-orange-500/20 focus:ring-orange-500 uppercase tracking-wide',
      primary:
        'bg-[#0B192C] hover:bg-[#1E3E62] text-white shadow-md focus:ring-[#0B192C]',
      secondary:
        'bg-slate-100 hover:bg-slate-200 text-slate-900 focus:ring-slate-400',
      outline:
        'border-2 border-[#0B192C] text-[#0B192C] hover:bg-[#0B192C] hover:text-white focus:ring-[#0B192C]',
      ghost:
        'text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:ring-slate-300'
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-sm sm:text-base px-5 py-2.5 gap-2',
      lg: 'text-base sm:text-lg px-7 py-3.5 gap-3'
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
