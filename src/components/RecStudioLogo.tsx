import React from 'react';
import recLogo from '../assets/images/rec_logo_metal.png';

interface RecStudioLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const RecStudioLogo: React.FC<RecStudioLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const heightClass =
    size === 'sm'
      ? 'h-8 sm:h-9'
      : size === 'lg'
      ? 'h-12 sm:h-14 md:h-16'
      : size === 'xl'
      ? 'h-16 sm:h-20'
      : 'h-10 sm:h-11 md:h-12';

  return (
    <div
      className={`relative inline-flex items-center select-none group ${className}`}
      title="REC"
    >
      <img
        src={recLogo}
        alt="REC"
        className={`${heightClass} w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_6px_16px_rgba(0,0,0,0.85)]`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
