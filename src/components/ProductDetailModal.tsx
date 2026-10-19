import React, { useState, useEffect } from 'react';
import { ProductItem, Language } from '../types';
import { COMPANY_INFO } from '../data/somaData';
import { PRODUCT_PHOTO_MAP } from '../data/somaImages';
import { SomaImage } from './SomaImage';
import { WhatsAppIcon, SproutEmblem } from './BotanicalIcons';

interface ProductDetailModalProps {
  product: ProductItem | null;
  lang: Language;
  onClose: () => void;
  onSelectForCalculator: (productId: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  lang,
  onClose,
  onSelectForCalculator,
}) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  useEffect(() => {
    setActivePhotoIndex(0);
  }, [product?.id]);

  if (!product) return null;

  const photoEntry = PRODUCT_PHOTO_MAP[product.id];
  const galleryUrls = photoEntry?.gallery || [];
  const currentPhotoUrl = galleryUrls[activePhotoIndex] || photoEntry?.primary;

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      lang === 'en'
        ? `Hello Soma Annex, I would like to order or inquire about availability for: ${product.nameEn} (${product.variety}) - ${product.unit}. Please advise on current nursery batch readiness.`
        : `Jambo Soma Annex, ninapenda kuagiza au kuuliza kuhusu uwepo wa: ${product.nameSw} (${product.variety}) - ${product.unitSw}. Naomba kujua miche iliyopo kitaluni Juja.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 text-neutral-600 bg-white/90 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors shadow-xs"
          aria-label="Close dialog"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Authentic Product Photo & Gallery Switcher */}
        {currentPhotoUrl && (
          <div className="mb-5">
            <div className="h-56 sm:h-64 w-full rounded-xl overflow-hidden border border-neutral-200 mb-2.5">
              <SomaImage
                src={currentPhotoUrl}
                alt={lang === 'en' ? product.nameEn : product.nameSw}
                className="w-full h-full"
                eager={true}
              />
            </div>
            {galleryUrls.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {galleryUrls.map((url, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`h-14 w-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      activePhotoIndex === idx
                        ? 'border-emerald-600 ring-2 ring-emerald-500/20'
                        : 'border-neutral-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <SomaImage
                      src={url}
                      alt={`${product.nameEn} view ${idx + 1}`}
                      className="w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Clean Unboxed Kicker */}
        <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
          {product.category.replace('-', ' ')} · {product.variety}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-neutral-900 font-display mb-2">
          {lang === 'en' ? product.nameEn : product.nameSw}
        </h3>

        {/* Primary Use Description */}
        <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
          {lang === 'en' ? product.descriptionEn : product.descriptionSw}
        </p>

        {/* Price Strip */}
        <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200 mb-6">
          {product.retailPriceKES ? (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="block text-xs text-neutral-500">
                  {lang === 'en' ? 'Retail Price' : 'Bei ya Rejareja'}
                </span>
                <span className="text-xl font-bold font-mono text-neutral-900">
                  KES {product.retailPriceKES}
                  <span className="text-xs font-normal text-neutral-500"> / {lang === 'en' ? product.unit : product.unitSw}</span>
                </span>
              </div>

              <div>
                <span className="block text-xs text-neutral-500">
                  {lang === 'en' ? 'Wholesale Price (100+ units)' : 'Bei ya Jumla (Miche 100+)'}
                </span>
                <span className="text-xl font-bold font-mono text-emerald-800">
                  {product.wholesalePriceKES ? (
                    <>
                      KES {product.wholesalePriceKES}
                      <span className="text-xs font-normal text-emerald-600"> / {lang === 'en' ? product.unit : product.unitSw}</span>
                    </>
                  ) : (
                    <span className="text-sm font-semibold text-neutral-700">Custom Quote</span>
                  )}
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="block text-xs text-neutral-500">
                  {lang === 'en' ? 'Nursery Pricing' : 'Bei ya Kitalu'}
                </span>
                <span className="text-base font-bold text-emerald-900">
                  {lang === 'en' ? (product.priceNote || 'Official Quote on Request') : (product.priceNoteSw || 'Bei kwa Maombi')}
                </span>
              </div>
              <span className="text-xs text-neutral-500">
                {lang === 'en' ? 'Wholesale tier unlocked at 100+ seedlings' : 'Bei ya jumla huanzia miche 100+'}
              </span>
            </div>
          )}
          <div className="mt-2 text-[11px] text-emerald-800 font-medium">
            {lang === 'en'
              ? 'Payment Notice: Payment details are sent via WhatsApp after order confirmation.'
              : 'Zingatio la Malipo: Maelezo ya malipo hutumwa kupitia WhatsApp baada ya kuthibitisha oda.'}
          </div>
        </div>

        {/* Agronomic Specifications */}
        <div className="space-y-4 mb-6 text-xs text-neutral-700 border-t border-b border-neutral-100 py-4">
          <div className="grid grid-cols-2 gap-3">
            {product.nurseryReadiness && (
              <div>
                <span className="font-semibold text-neutral-900 block mb-0.5">
                  {lang === 'en' ? 'Nursery Readiness:' : 'Muda Kitaluni:'}
                </span>
                <span className="text-neutral-600">{product.nurseryReadiness}</span>
              </div>
            )}
            {product.fieldMaturity && (
              <div>
                <span className="font-semibold text-neutral-900 block mb-0.5">
                  {lang === 'en' ? 'Field Maturity:' : 'Muda wa Mavuno Shambani:'}
                </span>
                <span className="text-neutral-600">{product.fieldMaturity}</span>
              </div>
            )}
          </div>

          {product.agronomyTips && (
            <div className="space-y-2 pt-2 border-t border-neutral-100">
              <span className="font-bold text-emerald-900 block uppercase tracking-wider text-[11px]">
                {lang === 'en' ? 'Agronomist Growing Advisory:' : 'Ushauri wa Mtaalamu wa Kilimo:'}
              </span>
              <div className="grid grid-cols-3 gap-2 text-neutral-600">
                <div>
                  <strong className="block text-neutral-900">Spacing:</strong>
                  {product.agronomyTips.spacing}
                </div>
                <div>
                  <strong className="block text-neutral-900">Sunlight:</strong>
                  {product.agronomyTips.sunlight}
                </div>
                <div>
                  <strong className="block text-neutral-900">Watering:</strong>
                  {product.agronomyTips.watering}
                </div>
              </div>
              {product.agronomyTips.companionPlanting && (
                <div className="text-neutral-600 pt-1">
                  <strong className="text-neutral-900">Companion Planting:</strong>{' '}
                  {product.agronomyTips.companionPlanting}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => {
              onSelectForCalculator(product.id);
              onClose();
            }}
            className="w-full py-2.5 px-4 text-xs font-semibold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors flex items-center justify-center gap-2 border border-emerald-300"
          >
            <SproutEmblem className="w-4 h-4 text-emerald-700" />
            <span>{lang === 'en' ? 'Calculate in Tray Tool' : 'Weka kwenye Kikokotoo'}</span>
          </button>

          <button
            onClick={handleWhatsAppInquiry}
            className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>{lang === 'en' ? 'Inquire on WhatsApp' : 'Agiza kwa WhatsApp'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
