import React, { useState } from 'react';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/somaData';
import { WhatsAppIcon, MPesaBadge } from './BotanicalIcons';

interface ContactPageProps {
  lang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Seedling Inquiry & Availability');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const googleMapsUrl =
    'https://www.google.com/maps/place/Soma+annex+nurseries+and+groceries/@-1.0821408,37.0065749,17z/data=!4m9!1m2!2m1!1ssomaanex+,+gashororo!3m5!1s0x182f49fa08a2869f:0x4e9c792e7bfd9a35!8m2!3d-1.0821408!4d37.0113385!16s%2Fg%2F11zx2_y69r?entry=ttu';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!message.trim()) {
      setErrorMsg('Please enter your message.');
      return;
    }

    // Format WhatsApp message as real fallback option
    const text = encodeURIComponent(
      `📬 *NEW CONTACT FORM SUBMISSION - SOMA ANNEX FARM*\n\n` +
      `*Name:* ${name.trim()}\n` +
      `*Email:* ${email.trim()}\n` +
      `*Subject:* ${subject}\n\n` +
      `*Message:*\n${message.trim()}`
    );

    window.open(`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div id="contact" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page / Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
            <span>Direct Communications Desk</span>
            <span aria-hidden="true">·</span>
            <span>Gachororo, Juja</span>
            <span aria-hidden="true">·</span>
            <span>Kiambu County</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-neutral-900 mb-4" style={{ textWrap: 'balance' }}>
            {lang === 'en' ? 'Contact Soma Annex Planters' : 'Wasiliana na Soma Annex Planters'}
          </h1>

          <p className="text-base text-neutral-600 leading-relaxed">
            {lang === 'en'
              ? 'Have questions about seedling batch availability, commercial nursery setup, fresh cut flowers, or university student attachments? Reach out through our direct form, WhatsApp desk, or visit our Juja farm campus.'
              : 'Una maswali kuhusu miche iliyopo, maua ya sherehe, au mafunzo ya vitendo ya vyuo vikuu? Wasiliana nasi kupitia fomu hii, WhatsApp, au tembelea shamba letu Juja.'}
          </p>
        </div>

        {/* 2-Column Responsive Layout: Form on Left, Contact Details & Live Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Column 1: Contact Form (6 cols) */}
          <div className="lg:col-span-6 bg-neutral-50 rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-xs">
            <h2 className="text-xl font-bold font-display text-neutral-900 mb-2">
              {lang === 'en' ? 'Send Us a Message' : 'Tuma Ujumbe Wako'}
            </h2>
            <p className="text-xs text-neutral-500 mb-6">
              {lang === 'en'
                ? 'Our agronomic advisory desk responds within standard business hours (Mon–Sat 8:00 AM – 6:00 PM).'
                : 'Wataalamu wetu wa kilimo watajibu ndani ya saa za kazi (Jumatatu–Jumamosi 8:00 Asubuhi – 12:00 Jioni).'}
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-300 rounded-xl space-y-4">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <span>✓ Thank you, {name}!</span>
                </div>
                <p className="text-xs text-emerald-900 leading-relaxed">
                  Your message has been received and formatted for our nursery dispatch team. If WhatsApp didn't open automatically, you can also email us directly at <strong>{COMPANY_INFO.email}</strong> or call <strong>{COMPANY_INFO.phones[0]}</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="px-4 py-2 text-xs font-semibold text-emerald-950 bg-white border border-emerald-300 rounded-lg"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg">
                    {errorMsg}
                  </div>
                )}

                {/* Name Field */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    {lang === 'en' ? 'Full Name' : 'Jina Kamili'} <span className="text-emerald-700">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Samuel Kariuki"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none text-neutral-900 transition-all"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    {lang === 'en' ? 'Email Address' : 'Barua Pepe (Email)'} <span className="text-emerald-700">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="e.g. samuel@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none text-neutral-900 transition-all"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    {lang === 'en' ? 'Subject' : 'Mada ya Ujumbe'} <span className="text-emerald-700">*</span>
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none text-neutral-900 transition-all"
                  >
                    <option value="Seedling Inquiry & Availability">Seedling Availability & 128-Tray Orders</option>
                    <option value="Commercial Farm Planning">Commercial Farm Planning & Advance Contracts</option>
                    <option value="Fresh Cut Flowers & Bouquets">Fresh Cut Roses & Chrysanthemums</option>
                    <option value="Botanical Wellness & Sachets">Antistress Relaxation Sachets & Herbs</option>
                    <option value="Termite Poultry Feed">Termite Production Live Feed Starter Kits</option>
                    <option value="Student Attachment / Mentorship">JKUAT / College Student Attachment Placements</option>
                    <option value="General Farm Tour & Directions">Juja Nursery Visit & Demonstrations</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    {lang === 'en' ? 'Message' : 'Ujumbe Wako'} <span className="text-emerald-700">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder={
                      lang === 'en'
                        ? 'Describe your crop requirements, acreage, preferred delivery date, or questions...'
                        : 'Eleza unachohitaji, eneo la shamba, au tarehe unayopanga kuchukua miche...'
                    }
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none text-neutral-900 transition-all"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-98 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-5 h-5 text-emerald-200" />
                  <span>{lang === 'en' ? 'Send Message & Connect' : 'Tuma Ujumbe & Ungana Nasi'}</span>
                </button>
              </form>
            )}

            {/* Direct Phone Assistance Note */}
            <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
              <span>Need immediate assistance?</span>
              <a href={`tel:${COMPANY_INFO.primaryPhoneDigits}`} className="font-semibold text-emerald-700 hover:underline">
                Call {COMPANY_INFO.phones[0]}
              </a>
            </div>
          </div>

          {/* Column 2: Details & Interactive Google Map (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-7 shadow-xs space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-emerald-50 text-emerald-800 rounded-xl shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wide">
                    {lang === 'en' ? 'Physical Nursery Campus' : 'Eneo Rasmi la Shamba Juja'}
                  </h3>
                  <p className="text-base font-bold text-neutral-900 mt-0.5 font-display">
                    {COMPANY_INFO.campus}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    Operating as <strong>Soma Annex Nurseries and Groceries</strong>. Located in Gachororo, Juja along the Thika Superhighway corridor, directly adjacent to St. Paul's Catholic Church.
                  </p>
                </div>
              </div>

              {/* Operating Hours & M-Pesa Strip */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-neutral-100 text-xs">
                <div>
                  <span className="text-neutral-500 block">Working Hours</span>
                  <span className="font-semibold text-neutral-900">{COMPANY_INFO.workingHours.days}</span>
                  <span className="text-emerald-700 font-bold block">{COMPANY_INFO.workingHours.hours}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Sunday Status</span>
                  <span className="font-semibold text-neutral-600">{COMPANY_INFO.workingHours.sunday}</span>
                  <span className="text-[11px] text-neutral-400 block">Pre-booked collection only</span>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between flex-wrap gap-2">
                <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wide">
                  Lipa na M-Pesa
                </span>
                <span className="text-xs font-bold font-mono text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  Buy Goods Till: 3289066
                </span>
              </div>
            </div>

            {/* Embedded Interactive Google Map */}
            <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs">
              <div className="p-4 border-b border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                  <span className="text-xs font-bold text-neutral-800 uppercase tracking-wider font-display">
                    Interactive Google Map · Gachororo Juja
                  </span>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 hover:underline"
                >
                  <span>Open Full Maps</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Responsive Iframe Embed with Coordinates -1.0821408, 37.0113385 */}
              <div className="relative w-full h-72 sm:h-80 bg-neutral-100">
                <iframe
                  title="Soma Annex Nurseries and Groceries Location Map"
                  src="https://maps.google.com/maps?q=-1.0821408,37.0113385&hl=en&z=16&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="p-4 bg-neutral-50 flex items-center justify-between text-xs text-neutral-600">
                <span>Coordinates: -1.0821408, 37.0113385</span>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  Get Directions →
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
