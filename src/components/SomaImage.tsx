import React, { useState } from 'react';
import { SproutEmblem } from './BotanicalIcons';

interface SomaImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}

export const SomaImage: React.FC<SomaImageProps> = ({
  src,
  alt,
  className = '',
  imgClassName = 'w-full h-full object-cover',
  eager = false,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`bg-gradient-to-br from-emerald-50 via-neutral-50 to-emerald-100/50 flex flex-col items-center justify-center p-4 text-center ${className}`}
      >
        <SproutEmblem className="w-8 h-8 text-emerald-700/70 mb-1.5" />
        <span className="text-[11px] font-medium text-emerald-900/70 line-clamp-2 max-w-[180px]">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden bg-neutral-100 ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={eager ? 'eager' : 'lazy'}
        onError={() => setHasError(true)}
        className={imgClassName}
      />
    </div>
  );
};
