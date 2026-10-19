import React, { useState } from 'react';
import { Language } from '../types';
import { PRODUCTS, DELIVERY_ZONES, COMPANY_INFO } from '../data/somaData';
import { calculateSeedlingPrice, calculateGrandTotal } from '../utils/pricing';
import { Tray128GridIcon, WhatsAppIcon, SproutEmblem } from './BotanicalIcons';

interface TrayCalculatorProps {
  lang: Language;
  preselectedProductId?: string;
  onClose?: () => void;
  isModal?: boolean;
}

export const TrayCalculator: React.FC<TrayCalculatorProps> = ({
  lang,
  preselectedProductId,
  onClose,
  isModal = false,
}) => {
  const seedlingCrops = PRODUCTS.filter(
    (p) => p.category === 'leafy-greens' || p.category === 'herbs-succulents' || p.id === 'marigold-african-tall'
  );

  const [selectedCropId, setSelectedCropId] = useState<string>(
    preselectedProductId || seedlingCrops[0]?.id || 'cabbage-gloria'
  );
  const [quantity, setQuantity] = useState<number>(128); // Default 1 full 128-cell tray
  const [deliveryZoneId, setDeliveryZoneId] = useState<string>('juja-campus');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerNotes, setCustomerNotes] = useState<string>('');
  const [orderSent, setOrderSent] = useState<boolean>(false);

  const selectedCrop = PRODUCTS.find((p) => p.id === selectedCropId) || seedlingCrops[0];
  const selectedDelivery = DELIVERY_ZONES.find((z) => z.id === deliveryZoneId) || DELIVERY_ZONES[0];

  const minWholesale = selectedCrop.minWholesaleQty || 100;
  const pricing = calculateSeedlingPrice(
    quantity,
    selectedCrop.retailPriceKES,
    selectedCrop.wholesalePriceKES,
    minWholesale
  );

  const { hasPrice, isWholesale: isWholesaleUnlocked, unitPrice, subtotal, savings, fullTrays, remainderPlugs } = pricing;
  const total = calculateGrandTotal(subtotal, selectedDelivery.feeKES);

  const handleWhatsAppSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const trayBreakdown = fullTrays > 0 
      ? `${fullTrays} full 128-cell tray(s)${remainderPlugs > 0 ? ` + ${remainderPlugs} extra plugs` : ''}`
      : `${quantity} plugs`;

    const pricingInfo = hasPrice && subtotal
      ? `*Pricing:* KES ${unitPrice} each (Total: KES ${total ? total.toLocaleString() : subtotal.toLocaleString()})\n`
      : `*Pricing:* Quote requested for ${quantity >= minWholesale ? 'Wholesale (100+)' : 'Retail'} batch\n`;

    const message = 
      `🌱 *ORDER / TRAY INQUIRY - SOMA ANNEX FARM*\n\n` +
      `*Item:* ${selectedCrop.nameEn} (${selectedCrop.variety})\n` +
      `*Quantity:* ${quantity} ${selectedCrop.unit}s (${trayBreakdown})\n` +
      pricingInfo +
      `*Collection / Destination:* ${selectedDelivery.nameEn} (${selectedDelivery.feeNote || 'Standard dispatch'})\n\n` +
      `*Customer Name:* ${customerName.trim() || 'Nursery Customer'}\n` +
      `*Customer Contact:* ${customerPhone.trim() || 'Via WhatsApp'}\n` +
      (customerNotes.trim() ? `*Special Request:* ${customerNotes.trim()}\n\n` : '\n') +
      `_Please confirm nursery batch readiness, quote, and send payment details._`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${encoded}`, '_blank');
    setOrderSent(true);
  };

  return (
    <div className={`bg-white ${isModal ? 'p-6 sm:p-8 rounded-2xl max-w-2xl w-full' : 'p-6 sm:p-8 rounded-xl border border-neutral-200 shadow-sm'}`}>
      
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <Tray128GridIcon className="w-6 h-6 text-emerald-700" />
            <h3 className="text-xl font-bold text-neutral-900 font-display">
              {lang === 'en' ? 'Seedling Tray & Order Calculator' : 'Kikokotoo cha Trei za Miche & Maagizo'}
            </h3>
          </div>
          <p className="text-xs text-neutral-500 mt-1">
            {lang === 'en' 
              ? 'Calculates 128-cell plug trays. Wholesale tier unlocked at 100+ seedlings per variety.' 
              : 'Inapiga hesabu ya trei za chemba 128. Bei ya jumla inaanza kuanzia miche 100+.'}
          </p>
        </div>

        {isModal && onClose && (
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      <div className="space-y-6">
        
        {/* Step 1: Crop Selection */}
        <div>
          <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
            {lang === 'en' ? '1. Select Crop / Seedling Variety' : '1. Chagua Mmea au Miche'}
          </label>
          <select
            value={selectedCropId}
            onChange={(e) => setSelectedCropId(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-all font-medium text-neutral-900"
          >
            {seedlingCrops.map((crop) => (
              <option key={crop.id} value={crop.id}>
                {crop.nameEn} ({crop.variety}) — {crop.retailPriceKES ? `KES ${crop.retailPriceKES}` : (crop.priceNote || 'Price on Request')}
              </option>
            ))}
          </select>
          <div className="mt-1.5 flex items-center justify-between text-xs text-neutral-500">
            <span>{lang === 'en' ? 'Maturity:' : 'Muda wa Mavuno:'} {selectedCrop.fieldMaturity || 'Seasonal'}</span>
            <span>{lang === 'en' ? 'Nursery time:' : 'Kitaluni:'} {selectedCrop.nurseryReadiness || 'Ready'}</span>
          </div>
        </div>

        {/* Step 2: Quantity Input & Quick Presets */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
              {lang === 'en' ? '2. Seedling Quantity (Plugs / Cells)' : '2. Idadi ya Miche'}
            </label>
            <span className="text-xs font-mono font-medium text-emerald-800">
              {fullTrays > 0 ? `${fullTrays} Full Tray${fullTrays > 1 ? 's' : ''}` : 'Kitchen Garden Plugs'}
              {remainderPlugs > 0 ? ` + ${remainderPlugs} plugs` : ''}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="number"
              min="10"
              max="10000"
              step="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 0))}
              className="w-32 px-3 py-2 text-sm font-mono font-bold bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none text-neutral-900"
            />
            
            {/* Quick Presets */}
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => setQuantity(50)}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-md border transition-all ${
                  quantity === 50 ? 'border-emerald-600 bg-emerald-50 text-emerald-900' : 'border-neutral-200 text-neutral-600 hover:bg-neutral-50'
                }`}
              >
                50 (Retail)
              </button>
              <button
                type="button"
                onClick={() => setQuantity(128)}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-md border transition-all ${
                  quantity === 128 ? 'border-emerald-600 bg-emerald-50 text-emerald-900' : 'border-neutral-200 text-neutral-600 hover:bg-neutral-50'
                }`}
              >
                1 Tray (128)
              </button>
              <button
                type="button"
                onClick={() => setQuantity(256)}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-md border transition-all ${
                  quantity === 256 ? 'border-emerald-600 bg-emerald-50 text-emerald-900' : 'border-neutral-200 text-neutral-600 hover:bg-neutral-50'
                }`}
              >
                2 Trays (256)
              </button>
              <button
                type="button"
                onClick={() => setQuantity(640)}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-md border transition-all ${
                  quantity === 640 ? 'border-emerald-600 bg-emerald-50 text-emerald-900' : 'border-neutral-200 text-neutral-600 hover:bg-neutral-50'
                }`}
              >
                5 Trays (640)
              </button>
            </div>
          </div>

          {/* Wholesale Status Notice */}
          <div className="mt-2.5 text-xs">
            {quantity >= minWholesale ? (
              <span className="font-semibold text-emerald-700 flex items-center gap-1.5">
                <SproutEmblem className="w-3.5 h-3.5 text-emerald-600" />
                {lang === 'en' 
                  ? `Wholesale Tier Unlocked (${quantity} seedlings >= 100). Bulk nursery rates apply.`
                  : `Kiwango cha Jumla Kimewashwa (miche ${quantity} >= 100). Bei ya jumla inatumika.`}
              </span>
            ) : (
              <span className="text-neutral-500">
                {lang === 'en'
                  ? `Retail kitchen garden order. Order ${minWholesale - quantity} more seedlings to unlock wholesale tier.`
                  : `Agizo la rejareja la bustani ya nyumbani. Ongeza miche ${minWholesale - quantity} zaidi kupata bei ya jumla.`}
              </span>
            )}
          </div>
        </div>

        {/* Step 3: Delivery Location */}
        <div>
          <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
            {lang === 'en' ? '3. Collection or Delivery Destination' : '3. Eneo la Kupokelea Miche'}
          </label>
          <select
            value={deliveryZoneId}
            onChange={(e) => setDeliveryZoneId(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-all font-medium text-neutral-900"
          >
            {DELIVERY_ZONES.map((zone) => (
              <option key={zone.id} value={zone.id}>
                {lang === 'en' ? zone.nameEn : zone.nameSw} — {zone.feeNote || 'Standard dispatch'} ({zone.estimatedTime})
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-neutral-500 italic">
            {selectedDelivery.dispatchNote}
          </p>
        </div>

        {/* Step 4: Customer Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1">
              {lang === 'en' ? 'Your Name' : 'Jina Lako'}
            </label>
            <input
              type="text"
              placeholder="e.g. Samuel Kariuki"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none text-neutral-900"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1">
              {lang === 'en' ? 'Phone / WhatsApp' : 'Nambari ya Simu'}
            </label>
            <input
              type="tel"
              placeholder="e.g. 0712 345 678"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none text-neutral-900"
            />
          </div>
        </div>

        {/* Order Summary Box */}
        <div className="bg-neutral-50 rounded-xl p-4 sm:p-5 border border-neutral-200">
          <div className="space-y-2 text-xs">
            <div className="flex justify-between text-neutral-700">
              <span className="font-medium">
                {quantity} × {selectedCrop.nameEn} ({quantity >= minWholesale ? 'Wholesale Tier' : 'Retail Tier'})
              </span>
              <span className="font-mono font-semibold text-neutral-900">
                {hasPrice && subtotal ? `KES ${subtotal.toLocaleString()}` : (selectedCrop.priceNote || 'Price on Request')}
              </span>
            </div>

            <div className="flex justify-between text-neutral-600">
              <span>Packaging Breakdown:</span>
              <span className="font-mono font-medium text-emerald-800">
                {fullTrays > 0 ? `${fullTrays} Tray(s) (128 cells each)` : 'Loose Nursery Plugs'}
                {remainderPlugs > 0 ? ` + ${remainderPlugs} plugs` : ''}
              </span>
            </div>

            <div className="flex justify-between text-neutral-600">
              <span>Handover Option:</span>
              <span className="font-medium text-neutral-800">
                {selectedDelivery.feeNote || 'Scheduled on dispatch'}
              </span>
            </div>

            <div className="pt-3 border-t border-neutral-300 flex justify-between items-baseline text-neutral-900">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider">
                  {lang === 'en' ? 'Order Status:' : 'Hali ya Agizo:'}
                </span>
                <span className="block text-[11px] text-emerald-800 font-medium">
                  {lang === 'en' ? 'Payment details sent on WhatsApp after order & batch verification' : 'Maelezo ya malipo hutumwa WhatsApp baada ya kukagua miche'}
                </span>
              </div>
              <span className="text-base font-bold font-mono text-emerald-800">
                {hasPrice && total ? `KES ${total.toLocaleString()}` : (selectedCrop.priceNote || 'Official Quote on WhatsApp')}
              </span>
            </div>
          </div>
        </div>

        {/* Submit Actions */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => handleWhatsAppSubmit()}
            className="w-full py-3.5 px-4 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-99 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <WhatsAppIcon className="w-5 h-5 text-emerald-200" />
            <span>
              {lang === 'en' ? 'Send Tray Inquiry to WhatsApp (+254 115 864 901)' : 'Tuma Ombi la Trei kwa WhatsApp (+254 115 864 901)'}
            </span>
          </button>

          <p className="text-center text-xs text-neutral-500">
            {lang === 'en'
              ? 'Our Juja nursery agronomist will inspect seedling root cohesion and reply immediately with collection/dispatch time.'
              : 'Mtaalamu wetu Juja atakagua afya ya mizizi na kukutumia uthibitisho papo hapo.'}
          </p>

          {orderSent && (
            <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-lg text-xs text-emerald-900 text-center font-medium">
              ✓ WhatsApp connection opened! You can also reach our Juja desk directly at <strong>+254 115 864 901</strong> or <strong>+254 705 016 758</strong>.
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
