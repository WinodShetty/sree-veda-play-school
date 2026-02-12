
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = "",
  children,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-full transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg hover:shadow-xl";
  
  const variants = {
    primary: "bg-brand-pink text-white hover:bg-brand-blue",
    secondary: "bg-brand-yellow text-gray-800 hover:bg-brand-pink hover:text-white",
    outline: "bg-transparent border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
    ghost: "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 shadow-none"
  };

  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-10 py-4 text-lg",
    lg: "px-12 py-5 text-xl"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
