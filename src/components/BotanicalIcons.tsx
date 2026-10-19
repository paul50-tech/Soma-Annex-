import React from 'react';

export const SproutEmblem = ({ className = "w-6 h-6 text-emerald-600" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 20h10" />
    <path d="M10 20c0-4.5 1.5-7 2-10" />
    <path d="M12 10c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6z" fill="currentColor" fillOpacity="0.15" />
    <path d="M12 13c0-3-2-5-5-5 0 3 2 5 5 5z" fill="currentColor" fillOpacity="0.15" />
    <path d="M12 20v-3" />
  </svg>
);

export const RootPlugIcon = ({ className = "w-8 h-8 text-emerald-700" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {/* Stem & Leaves */}
    <path d="M16 14V6" stroke="currentColor" strokeWidth="2" />
    <path d="M16 8C19 6 23 7 24 10C21 11 17 10 16 8Z" fill="currentColor" fillOpacity="0.25" />
    <path d="M16 11C13 9 9 10 8 13C11 14 15 13 16 11Z" fill="currentColor" fillOpacity="0.25" />
    {/* Cocopeat Cell Plug */}
    <path d="M10 14H22L20 23H12L10 14Z" fill="#3D2817" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.8" />
    {/* Fibrous root filaments */}
    <path d="M13 23C12 26 10 28 8 30" stroke="#059669" />
    <path d="M16 23C16 27 15 29 14 31" stroke="#059669" />
    <path d="M16 23C17 26 18 29 19 31" stroke="#059669" />
    <path d="M19 23C20 26 22 28 24 30" stroke="#059669" />
  </svg>
);

export const Tray128GridIcon = ({ className = "w-8 h-8 text-emerald-800" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 36 28" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.04" />
    {/* 4x3 cells grid preview */}
    <rect x="6" y="5" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.2" />
    <rect x="13" y="5" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.2" />
    <rect x="20" y="5" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.2" />
    <rect x="27" y="5" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.2" />
    <rect x="6" y="12" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.2" />
    <rect x="13" y="12" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.35" />
    <rect x="20" y="12" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.35" />
    <rect x="27" y="12" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.2" />
    <rect x="6" y="19" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.2" />
    <rect x="13" y="19" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.2" />
    <rect x="20" y="19" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.2" />
    <rect x="27" y="19" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

export const SachetAromaIcon = ({ className = "w-8 h-8 text-emerald-700" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8">
    {/* Tea / Sniff sachet packet */}
    <rect x="8" y="10" width="16" height="18" rx="2" stroke="currentColor" fill="#10B981" fillOpacity="0.1" />
    {/* Sachet fold top */}
    <path d="M8 10L16 6L24 10" stroke="currentColor" />
    <path d="M16 6V3" stroke="currentColor" strokeDasharray="1 1" />
    {/* Botanical seal */}
    <circle cx="16" cy="19" r="4" stroke="currentColor" fill="#047857" fillOpacity="0.2" />
    {/* Aroma waves */}
    <path d="M12 4C12 2 14 2 14 1" stroke="#059669" strokeLinecap="round" />
    <path d="M16 4C16 1.5 18 1.5 18 0.5" stroke="#059669" strokeLinecap="round" />
    <path d="M20 4C20 2 22 2 22 1" stroke="#059669" strokeLinecap="round" />
  </svg>
);

export const WhatsAppIcon = ({ className = "w-5 h-5 text-emerald-500 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.716 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
  </svg>
);

export const MPesaBadge = () => (
  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-700 text-white rounded text-xs font-semibold tracking-wide">
    <span className="font-mono text-emerald-200">M-PESA</span>
    <span>Buy Goods Till</span>
  </div>
);

export const FlowerBudIcon = ({ className = "w-8 h-8 text-rose-500" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9s-9 4.03-9 9a9 9 0 0 0 9 9z" fill="currentColor" fillOpacity="0.1" />
    <path d="M12 3a6 6 0 0 1 6 6c0 3.31-2.69 6-6 6s-6-2.69-6-6a6 6 0 0 1 6-6z" fill="currentColor" fillOpacity="0.15" />
    <path d="M12 15v6" />
    <path d="M8 18c2 0 4 3 4 3s2-3 4-3" />
  </svg>
);
