'use client';


import Link from 'next/link';
import { ButtonProps } from '@/lib/types';


export default function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  href,
}: ButtonProps) {
  const baseStyle =
    'inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap text-sm sm:text-base';


  const variants = {
    primary:
      'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95',
    secondary:
      'bg-white text-slate-900 border-2 border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm active:scale-95',
    outline:
      'border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm active:scale-95',
  };


  const buttonClasses = `${baseStyle} ${variants[variant]} ${className}`;


  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }


  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
