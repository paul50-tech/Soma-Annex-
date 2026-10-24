import React from 'react';
import { Download, Share, PlusSquare, X, Smartphone, Check } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  variant?: 'navbar' | 'banner' | 'floating';
  className?: string;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  variant = 'navbar',
  className = '',
}) => {
  const {
    isInstallable,
    isInstalled,
    showIOSPrompt,
    promptInstall,
    closeIOSPrompt,
  } = usePWAInstall();

  // If already installed in standalone mode, we can omit the install trigger
  if (isInstalled) {
    return null;
  }

  // Show if browser fired beforeinstallprompt OR if on iOS (where prompt is manual)
  if (!isInstallable) {
    return null;
  }

  return (
    <>
      {variant === 'navbar' && (
        <button
          onClick={promptInstall}
          type="button"
          aria-label="Install Soma Annex Planters App"
          className={`group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-700/90 hover:bg-emerald-600 text-white shadow-sm hover:shadow-md transition-all duration-200 border border-emerald-500/30 active:scale-95 ${className}`}
        >
          <Download className="w-3.5 h-3.5 text-emerald-200 group-hover:translate-y-0.5 transition-transform" />
          <span>Install App</span>
        </button>
      )}

      {variant === 'banner' && (
        <div className={`p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-900 to-green-950 text-white border border-emerald-700/50 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${className}`}>
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-800/80 border border-emerald-600/40 flex items-center justify-center text-emerald-300 shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Install Soma Nursery App</h4>
              <p className="text-xs text-emerald-200/90 mt-0.5 max-w-md">
                Fast offline access to 50+ seedling varieties, planting seasons, and agronomic support in the field.
              </p>
            </div>
          </div>
          <button
            onClick={promptInstall}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white text-emerald-950 hover:bg-emerald-50 shadow-sm active:scale-95 transition-all shrink-0"
          >
            <Download className="w-4 h-4 text-emerald-800" />
            <span>Install on Device</span>
          </button>
        </div>
      )}

      {variant === 'floating' && (
        <button
          onClick={promptInstall}
          type="button"
          aria-label="Install App"
          className={`fixed bottom-20 right-5 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-800 text-white text-xs font-medium shadow-2xl border border-emerald-500/30 hover:bg-emerald-700 active:scale-95 transition-all ${className}`}
        >
          <Download className="w-4 h-4 text-emerald-300" />
          <span>Install App</span>
        </button>
      )}

      {/* iOS Safari Instruction Modal */}
      {showIOSPrompt && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="ios-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={closeIOSPrompt}
        >
          <div
            className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-neutral-100 text-neutral-900 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeIOSPrompt}
              className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4 mx-auto shadow-inner">
              <Smartphone className="w-7 h-7" />
            </div>

            <h3 id="ios-modal-title" className="text-lg font-bold text-center text-neutral-900 mb-1">
              Install Soma Planters App
            </h3>
            <p className="text-xs text-center text-neutral-600 mb-5">
              Enjoy instant offline access on your iPhone or iPad in 2 easy steps:
            </p>

            <div className="space-y-3.5 bg-neutral-50 rounded-2xl p-4 border border-neutral-200/60 mb-5">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  1
                </div>
                <div className="text-xs text-neutral-700 leading-relaxed">
                  Tap the <strong className="inline-flex items-center gap-1 text-emerald-800 font-semibold px-1 py-0.5 bg-emerald-100/70 rounded"><Share className="w-3.5 h-3.5 inline" /> Share</strong> button in Safari's bottom toolbar.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  2
                </div>
                <div className="text-xs text-neutral-700 leading-relaxed">
                  Scroll down and tap <strong className="inline-flex items-center gap-1 text-emerald-800 font-semibold px-1 py-0.5 bg-emerald-100/70 rounded"><PlusSquare className="w-3.5 h-3.5 inline" /> Add to Home Screen</strong>.
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-emerald-700 font-medium mb-4">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Full catalog and photos available offline</span>
            </div>

            <button
              onClick={closeIOSPrompt}
              type="button"
              className="w-full py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-xs sm:text-sm transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};
