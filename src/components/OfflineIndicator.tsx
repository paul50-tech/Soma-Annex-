import React from 'react';
import { WifiOff, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const { isOnline, showReconnectedToast } = useOnlineStatus();

  if (isOnline && !showReconnectedToast) {
    return null;
  }

  if (showReconnectedToast) {
    return (
      <div 
        role="status"
        aria-live="polite"
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-2.5 bg-emerald-900/95 text-white text-xs sm:text-sm font-medium rounded-full shadow-xl border border-emerald-500/40 backdrop-blur-md animate-fade-in"
      >
        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>Connected — Soma Annex Planters catalog updated in real-time.</span>
      </div>
    );
  }

  return (
    <div 
      role="status"
      aria-live="polite"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 max-w-[92vw] sm:max-w-md w-full bg-stone-900/95 text-stone-100 px-4 py-3 rounded-2xl shadow-2xl border border-amber-500/30 backdrop-blur-md flex items-center justify-between gap-3 animate-fade-in"
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
          <WifiOff className="w-4 h-4" />
        </div>
        <div>
          <p className="text-xs sm:text-sm font-semibold text-white flex items-center gap-1.5">
            Offline Mode Active
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-500/20 text-emerald-300">
              <ShieldCheck className="w-3 h-3 mr-0.5 inline" /> Cached
            </span>
          </p>
          <p className="text-[11px] sm:text-xs text-stone-300">
            Catalog &amp; nursery guides available offline without data.
          </p>
        </div>
      </div>
    </div>
  );
};
