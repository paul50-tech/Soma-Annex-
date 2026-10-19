import React from 'react';
import { Language } from '../types';
import { COMPANY_INFO, GUIDING_PILLARS, YOUTH_GLEAM_TEAM } from '../data/somaData';
import { NURSERY_SHOWCASE_GALLERY } from '../data/somaImages';
import { SomaImage } from './SomaImage';
import { SproutEmblem, RootPlugIcon, WhatsAppIcon } from './BotanicalIcons';

interface AboutSectionProps {
  lang: Language;
  onOpenOrderModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, onOpenOrderModal }) => {
  const coreValues = [
    {
      titleEn: 'Scientific Propagation Rigor',
      titleSw: 'Sayansi ya Vitalu ya Kiwango cha Juu',
      descEn: 'We reject poor-quality nursery practices. Every batch is germinated in triple-washed, low-EC (<0.5 mS/cm) buffered cocopeat in 128-cell UV-stabilized plug trays, completely eliminating damping-off fungi, root rot, and soil-borne nematodes before transplanting.',
      descSw: 'Hatutumii udongo wenye maambukizi. Miche yote inaoteshwa kwenye cocopeat safi isiyo na ukungu wala minyoo, ikilindwa na jua hatua kwa hatua.',
    },
    {
      titleEn: 'Agronomic Accountability & Guarantee',
      titleSw: 'Uaminifu na Dhamana ya Mche',
      descEn: 'We operate on full transparency: our Juja nursery team conducts physical root-plug inspections before requesting payment via M-Pesa. Any seedling damaged in transit is replaced on the spot—zero arguments, 100% grower peace of mind.',
      descSw: 'Hulipii mche kabla ya kukaguliwa na mtaalamu wetu. Mche wowote unaoharibika njiani unabadilishwa papo hapo bila malipo ya ziada.',
    },
    {
      titleEn: 'Eco-Friendly & Circular Agriculture',
      titleSw: 'Kilimo Asilia na Uhifadhi Mazingira',
      descEn: 'We champion sustainable food systems: chemical-free organic demonstration plots, biological pest management using companion marigolds and aromatic herbs, and circular termite production providing 45% crude protein live poultry feed.',
      descSw: 'Tunakuza mazao ya asili bila sumu hatari, tukitumia mimea rafiki kufukuza wadudu na uzalishaji wa mchwa kama chakula chenye protini ya kuku.',
    },
    {
      titleEn: 'Community & Youth Empowerment',
      titleSw: 'Kuinua Jamii na Malezi ya Vijana',
      descEn: 'Through the Soma Annex Boys Gleam Team and university attachments (including nearby JKUAT), we mentor young men in commercial agribusiness ethics, hands-on nursery engineering, and community cleanliness under the banner "Tusitupe Taka Ovyo".',
      descSw: 'Kupitia Soma Annex Boys Gleam Team na mafunzo ya vitendo ya wanafunzi wa chuo kikuu cha JKUAT, tunalea vijana kuwa wazalishaji na walinzi wa mazingira safi.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
            <span>Corporate & Agronomic Profile</span>
            <span aria-hidden="true">·</span>
            <span>Est. November 2024</span>
            <span aria-hidden="true">·</span>
            <span>Gachororo, Juja</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-neutral-900 mb-6" style={{ textWrap: 'balance' }}>
            {lang === 'en' ? (
              <>
                About Soma Annex Planters: <br />
                <span className="text-emerald-700">Where Farming Begins.</span>
              </>
            ) : (
              <>
                Kuhusu Soma Annex Planters: <br />
                <span className="text-emerald-700">Kilimo Kinapoanzia.</span>
              </>
            )}
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed">
            {lang === 'en'
              ? 'Soma Annex Planters (operating as Soma Annex Farm) is a premier horticultural nursery, organic produce supplier, and agricultural training hub located in Gachororo, Juja, Kiambu County, Kenya.'
              : 'Soma Annex Planters ni kitalu kikuu cha kisasa cha miche ya mboga na matunda, muuzaji wa mboga za asili, na kituo cha mafunzo ya kilimo kilichopo Gachororo, Juja, Kaunti ya Kiambu.'}
          </p>
        </div>

        {/* Founding Narrative & Origin Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-7 space-y-5 text-neutral-700 text-sm sm:text-base leading-relaxed">
            <h3 className="text-2xl font-bold text-neutral-900 font-display">
              {lang === 'en' ? 'Our Founding Story: Tackling Early Crop Failure' : 'Mwanzo Wetu: Kukomesha Hasara za Awali za Mkulima'}
            </h3>

            <p>
              {lang === 'en' ? (
                <>
                  In Kenya’s vibrant agricultural landscape, the difference between a bumper harvest and an abandoned field is decided in the first 21 days of seedling life. Founded in <strong>November 2024</strong> adjacent to St. Paul’s in Gachororo, Juja, Soma Annex Planters was established to address an acute crisis: <em>over 35% of smallholder and commercial vegetable farmers suffer devastating crop losses before their first harvest</em> due to poor seed germination, unsterilized soil-borne pathogens, damping-off fungi, and fatal transplant shock.
                </>
              ) : (
                <>
                  Nchini Kenya, tofauti kati ya mavuno tele na hasara kubwa huamuliwa katika siku 21 za mwanzo za maisha ya mche. Ilianzishwa mnamo <strong>Novemba 2024</strong> karibu na Kanisa la St. Paul, Gachororo, Juja, Soma Annex Planters ilianzishwa ili kutatua janga linalowapata wakulima wengi: miche kufa kabla ya kuanza kukua kutokana na udongo wenye magonjwa na miche isiyostahimili jua.
                </>
              )}
            </p>

            <p>
              {lang === 'en' ? (
                <>
                  By pairing modern scientific propagation methods—such as 128-cell UV-stabilized plug trays and triple-washed coconut coir substrates—with structured open-field hardening protocols, Soma Annex Planters supplies vigorous, disease-screened planting stock with dense fibrous root systems that anchor instantly into the soil with near-zero field mortality.
                </>
              ) : (
                <>
                  Kwa kutumia teknolojia ya vitalu vya kisasa vya cocopeat na mifumo ya kustahimisha miche kwenye jua la Kenya, tunahakikisha mkulima anapata mche wenye mizizi imara inayoshika ardhi bila mshtuko na kupunguza vifo vya miche shambani.
                </>
              )}
            </p>

            <div className="p-5 bg-emerald-50/80 rounded-xl border border-emerald-200 text-sm text-emerald-950 italic">
              “Every successful harvest begins in the nursery. When a farmer plants a seedling with a resilient, unbroken root plug, they cut time-to-harvest by up to three weeks and protect their household food security.”
              <span className="block not-italic font-bold text-emerald-800 text-xs mt-2">— Soma Annex Planters</span>
            </div>
          </div>

          {/* Right Column: Mission & Vital Stats Bento */}
          <div className="lg:col-span-5 bg-neutral-50 rounded-2xl p-7 border border-neutral-200 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
              <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
                CORE COMMITMENT
              </span>
              <RootPlugIcon className="w-8 h-8 text-emerald-700" />
            </div>

            <div>
              <h4 className="text-lg font-bold text-neutral-900 font-display mb-2">
                {lang === 'en' ? 'Our Core Mission' : 'Dhamira Yetu Kuu'}
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {lang === 'en'
                  ? 'To bridge the gap between scientific plant propagation and practical high-yield farming by delivering sun-hardened, disease-free seedlings, fresh chemical-free organic produce, and hands-on agronomic training that elevates farmer productivity across East Africa.'
                  : 'Kujenga daraja kati ya sayansi ya maabara ya vitalu na kilimo cha vitendo cha mavuno mengi, kwa kutoa miche safi, mboga za asili, na mafunzo thabiti ya kilimo.'}
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-neutral-200">
                <span className="text-neutral-600">Founded Location</span>
                <span className="font-bold text-neutral-900">Gachororo, Juja (Kiambu)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-neutral-200">
                <span className="text-neutral-600">Standard Tray Geometry</span>
                <span className="font-mono font-bold text-emerald-800">128-Cell UV-Stabilized</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-neutral-200">
                <span className="text-neutral-600">Propagation Substrate</span>
                <span className="font-bold text-neutral-900">Low-EC Buffered Cocopeat</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-neutral-200">
                <span className="text-neutral-600">University Placement</span>
                <span className="font-bold text-neutral-900">JKUAT & Agricultural Colleges</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenOrderModal}
                className="w-full py-3 px-4 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <SproutEmblem className="w-4 h-4 text-emerald-200" />
                <span>{lang === 'en' ? 'Order Sun-Hardened Seedlings' : 'Agiza Miche ya Kitaluni'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Authentic Juja Nursery & Demonstration Plot Photo Showcase */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1.5">
              {lang === 'en' ? 'Inside Gachororo Campus · Juja' : 'Picha za Shambani · Gachororo, Juja'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900">
              {lang === 'en' ? 'Our Propagation Beds, Trays & Innovations' : 'Vitalu Vyetu, Trei na Ubunifu Shambani'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1.5">
              {lang === 'en'
                ? 'Every seedling tray, herbal sachet, and cut flower bunch is nurtured under strict hygienic protocols at our Juja farm.'
                : 'Kila trei ya miche, kifurushi cha mitishamba na maua yanatunzwa kwa usafi wa hali ya juu shambani mwetu Juja.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {NURSERY_SHOWCASE_GALLERY.map((item) => (
              <div
                key={item.id}
                className="bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden shadow-xs group flex flex-col justify-between"
              >
                <div className="h-52 overflow-hidden">
                  <SomaImage
                    src={item.url}
                    alt={lang === 'en' ? item.titleEn : item.titleSw}
                    className="w-full h-full"
                    imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3.5 bg-white border-t border-neutral-100">
                  <p className="text-xs font-semibold text-neutral-800 leading-snug">
                    {lang === 'en' ? item.titleEn : item.titleSw}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Four Key Organizational Values Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-2">
              Guiding Principles
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900">
              {lang === 'en' ? 'Our Four Key Values' : 'Maadili Makuu Manne ya Soma Annex'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-2">
              The foundational pillars steering our agronomy practices, customer service, and community partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-neutral-50 rounded-2xl p-7 border border-neutral-200 hover:border-emerald-500/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-200 mb-4">
                    <span className="text-xs font-mono font-bold text-emerald-800">
                      VALUE 0{idx + 1}
                    </span>
                    <SproutEmblem className="w-5 h-5 text-emerald-600" />
                  </div>

                  <h4 className="text-lg font-bold text-neutral-900 font-display mb-3">
                    {lang === 'en' ? val.titleEn : val.titleSw}
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {lang === 'en' ? val.descEn : val.descSw}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200/80 flex items-center justify-between text-xs text-neutral-500">
                  <span>Standardized nursery SOP</span>
                  <span className="text-emerald-700 font-semibold">100% Quality Audited</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Youth & Community Mentorship Spotlight: Soma Annex Boys Gleam Team */}
        <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 border border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <span>Youth Agribusiness Initiative</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span>Community Stewardship</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                {YOUTH_GLEAM_TEAM.titleEn}
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {YOUTH_GLEAM_TEAM.visionEn}
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs">
                <div className="p-3 bg-neutral-800 rounded-lg border border-neutral-700">
                  <strong className="block text-white font-semibold mb-0.5">Tusitupe Taka Ovyo</strong>
                  <span className="text-neutral-400">Community waste segregation & organic composting</span>
                </div>
                <div className="p-3 bg-neutral-800 rounded-lg border border-neutral-700">
                  <strong className="block text-white font-semibold mb-0.5">Practical Apprenticeship</strong>
                  <span className="text-neutral-400">Greenhouse management, seeding, and customer care</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <a
                href={`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${encodeURIComponent('Hello Soma Annex, I would like to learn more about the Boys Gleam Team youth mentorship program.')}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-xl transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-700" />
                <span>Support the Gleam Team</span>
              </a>
              <span className="text-[11px] text-neutral-400 mt-2 block">
                Located in Gachororo, Juja
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
