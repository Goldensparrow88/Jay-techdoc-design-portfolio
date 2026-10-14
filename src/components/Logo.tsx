import React from 'react';

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showWordmark = true,
  size = 'md'
}) => {
  const sizeMap = {
    sm: { icon: 28, text: 'text-base' },
    md: { icon: 34, text: 'text-lg' },
    lg: { icon: 44, text: 'text-2xl' }
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-2.5 group cursor-pointer ${className}`}>
      {/* Geometric J Monogram with Split-Shape Construction in Teal */}
      <svg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 ease-out group-hover:scale-105"
        aria-hidden="true"
      >
        {/* Background container with subtle border */}
        <rect width="40" height="40" rx="10" fill="#0B1220" className="dark:fill-[#0B1220] fill-slate-900" />
        <rect width="40" height="40" rx="10" stroke="rgba(45, 212, 191, 0.3)" strokeWidth="1.5" />
        
        {/* Split Shape 1: Vertical Stem with geometric angle */}
        <path
          d="M23 10V22C23 22.5 22.8 23 22.4 23.4L20 25.8V10H23Z"
          fill="#34E0C4"
        />
        
        {/* Split Shape 2: Lower sweeping hook curve with crisp geometric terminus */}
        <path
          d="M24 13V24C24 28.4183 20.4183 32 16 32C12.5 32 9.5 29.8 8.4 26.6L12.2 24.8C12.8 26.2 14.3 27.2 16 27.2C17.7673 27.2 19.2 25.7673 19.2 24V21.5L24 13Z"
          fill="#2DD4BF"
        />

        {/* Precision focal geometric accent square/dot */}
        <rect x="25" y="9" width="4" height="4" rx="1" fill="#34E0C4" />
      </svg>

      {showWordmark && (
        <span
          className={`font-display font-medium tracking-tight text-white dark:text-white text-slate-900 transition-colors duration-200 lowercase ${currentSize.text}`}
        >
          jayakumar
        </span>
      )}
    </div>
  );
};
