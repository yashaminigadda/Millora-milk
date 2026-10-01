import React from 'react';

interface MiloraLogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'badge' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export const MiloraLogo: React.FC<MiloraLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  showTagline = false
}) => {
  // SVG Cow Head + Green Leaf from official Milora branding
  const CowLeafIcon = ({ iconSize = 28 }: { iconSize?: number }) => (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform group-hover:scale-105"
    >
      {/* Cow Head Base Silhouette (Deep Navy / Gold Accent) */}
      <path
        d="M28 26C24 16 16 14 12 18C8 22 14 30 20 34C15 42 16 56 22 66C26 73 34 82 50 82C66 82 74 73 78 66C84 56 85 42 80 34C86 30 92 22 88 18C84 14 76 16 72 26C66 22 58 20 50 20C42 20 34 22 28 26Z"
        fill="#071A2B"
      />
      {/* Cow Horns - Left & Right */}
      <path
        d="M26 24C20 12 12 8 8 12C6 14 6 18 10 24C16 28 22 28 26 24Z"
        fill="#D4AF37"
      />
      <path
        d="M74 24C80 12 88 8 92 12C94 14 94 18 90 24C84 28 78 28 74 24Z"
        fill="#D4AF37"
      />
      {/* White Forehead Blaze */}
      <path
        d="M50 22C44 22 41 28 41 38C41 46 45 52 50 56C55 52 59 46 59 38C59 28 56 22 50 22Z"
        fill="#FCFBF7"
      />
      {/* Eyes */}
      <circle cx="35" cy="46" r="4.5" fill="#FCFBF7" />
      <circle cx="35" cy="46" r="2" fill="#071A2B" />
      <circle cx="65" cy="46" r="4.5" fill="#FCFBF7" />
      <circle cx="65" cy="46" r="2" fill="#071A2B" />
      {/* Snout Muzzle */}
      <ellipse cx="50" cy="68" rx="16" ry="11" fill="#FCFBF7" stroke="#D4AF37" strokeWidth="1.5" />
      <ellipse cx="44" cy="68" rx="2.5" ry="3.5" fill="#071A2B" />
      <ellipse cx="56" cy="68" rx="2.5" ry="3.5" fill="#071A2B" />
      
      {/* Vibrant Fresh Green Leaf on Right Ear / Cheek */}
      <g transform="translate(68, 38) rotate(15)">
        <path
          d="M0 24C4 14 14 4 28 0C28 14 18 24 0 24Z"
          fill="#4EAB6E"
        />
        {/* Leaf Central Vein */}
        <path
          d="M0 24C10 16 18 8 26 2"
          stroke="#FCFBF7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );

  if (variant === 'icon') {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <CowLeafIcon iconSize={size === 'sm' ? 24 : size === 'lg' ? 44 : size === 'xl' ? 64 : 32} />
      </div>
    );
  }

  const iconSizes = {
    sm: 24,
    md: 32,
    lg: 44,
    xl: 60
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-4xl sm:text-5xl'
  };

  return (
    <div className={`flex items-center gap-2.5 ${className} group`}>
      {/* Icon Frame with Gold Border */}
      <div className="relative p-1.5 rounded-xl bg-[#071A2B] border border-[#D4AF37]/50 shadow-md flex items-center justify-center">
        <CowLeafIcon iconSize={iconSizes[size]} />
      </div>

      <div className="flex flex-col text-left">
        <span className={`font-black tracking-tight font-heading leading-none ${textSizes[size]} text-white`}>
          MILORA <span className="text-[#D4AF37]">MILK</span>
        </span>
        {showTagline && (
          <span className="text-[11px] sm:text-xs text-[#F5D77F] font-script tracking-wide mt-1">
            Fresh Milk. Delivered to Your Door.
          </span>
        )}
      </div>
    </div>
  );
};
