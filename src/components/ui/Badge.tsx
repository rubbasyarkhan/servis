import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'emergency' | 'trust' | 'info' | 'success';
}

export function Badge({
  className,
  variant = 'trust',
  children,
  ...props
}: BadgeProps) {
  const variants = {
    emergency: 'bg-red-50 text-red-700 border-red-200 font-bold',
    trust: 'bg-blue-50 text-blue-900 border-blue-200 font-semibold',
    info: 'bg-amber-50 text-amber-800 border-amber-200 font-semibold',
    success: 'bg-emerald-50 text-emerald-800 border-emerald-200 font-semibold'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs border tracking-wide uppercase',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
