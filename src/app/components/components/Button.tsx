import React from 'react';

import { LogoGray } from '../../svg/SvgIcons';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  icon,
  onClick,
}) => {
  const baseClasses =
    'bg-hero border border-herotext border-dashed h-0 text-herotext text-lg uppercase font-bold flex items-center justify-center px-4 py-6 transition-all duration-300 ease-in-out hover:scale-110';

  return (
    <button className={`${baseClasses} ${className}`} onClick={onClick}>
      {icon && <span className="mr-4">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
