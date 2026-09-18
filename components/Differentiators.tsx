'use client'

import { DIFFERENTIATORS } from '@/data/config'

interface DifferentiatorsProps {
  onOpenBooking?: () => void
}

export default function Differentiators({ onOpenBooking }: DifferentiatorsProps) {
  const cardStyles = [
    {
      borderColor: 'border-blue-200 hover:border-blue-400 shadow-blue-500/5',
      badge: 'bg-blue-50 text-blue-700 border-blue-200',
      iconBg: 'bg-blue-600 text-white',
      accentText: 'text-blue-600',
      footerDot: 'bg-blue-500',
      footerLeft: 'Standard Protocol',
      footerRight: '100% Quality',
      bullets: [
        'Verified $500K – $50M revenue bands',
        'Direct equity owners & founders only',
        'Active seller motivation pre-confirmed',
      ],
    },
    {
      borderColor: 'border-sky-200 hover:border-sky-400 shadow-sky-500/5',
      badge: 'bg-sky-50 text-sky-700 border-sky-200',
      iconBg: 'bg-sky-600 text-white',
      accentText: 'text-sky-600',
      footerDot: 'bg-sky-500',
      footerLeft: 'Complete Visibility',
      footerRight: 'Direct Dossiers',
      bullets: [
        'Live call recordings for every conversation',
        'Complete owner & business dossier included',
        'Real-time calendar sync & instant alerts',
      ],
    },
    {
      borderColor: 'border-amber-200 hover:border-amber-400 shadow-amber-500/5',
      badge: 'bg-amber-50 text-amber-700 border-amber-200',
      iconBg: 'bg-amber-600 text-white',
      accentText: 'text-amber-600',
      footerDot: 'bg-amber-500',
      footerLeft: 'Rapid Activation',
      footerRight: 'Dedicated Dialers',
      bullets: [
        'Campaign launches in 48–72 hours',
        '100% done-for-you targeted cold outreach',
        'First qualified meeting delivered within 48 hours',
      ],
    },
    {
      borderColor: 'border-emerald-200 hover:border-emerald-400 shadow-emerald-500/5',
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconBg: 'bg-emerald-600 text-white',
      accentText: 'text-emerald-600',
      footerDot: 'bg-emerald-500',
      footerLeft: 'Criteria Match Guarantee',
      footerRight: '100% Risk-Free',
      bullets: [
        'Prompt free replacement if lead is off-criteria',
        'Strict matching to your revenue, niche & territory',
        'Zero financial risk on conversation quality',
      ],
    },
  ]

  return (
    <section id="different" className="py-16 md:py-20 bg-gradient-to-b from-[#F7F9FD] via-white to-[#F6F9FE] border-b border-slate-200/80 relative overflow-hidden">
      {/* Light, Soft Ambient Background Glows */}
      <div aria-hidden="true" className="absolute top-0 right-1/4 w-80 h-80 bg-blue-300/12 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 left-1/4 w-72 h-72 bg-emerald-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        
        {/* Centered Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-200 shadow-xs mb-3.5">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Why Brokers Choose Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">BrokerLeadz</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-medium">
            Here&apos;s what sets our targeted broker outreach apart from generic lead services.
          </p>
        </div>

        {/* 4 Cards in a 2x2 Grid with Compact Vertical Height */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch mb-10 max-w-5xl mx-auto">
          {DIFFERENTIATORS.map((item, idx) => {
            const style = cardStyles[idx % cardStyles.length]
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-5 sm:p-6 border-2 ${style.borderColor} shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group h-full`}
              >
                <div>
                  {/* Top Badge & Step Number */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider border ${style.badge}`}>
                      {item.tag}
                    </span>
                    <div className={`w-7 h-7 rounded-lg ${style.iconBg} font-bold text-xs flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform`}>
                      0{idx + 1}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-medium mb-3 pb-2.5 border-b border-slate-100">
                    {item.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-1.5 mb-3.5">
                    {style.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <span className={`w-3.5 h-3.5 rounded-full bg-slate-100 ${style.accentText} flex items-center justify-center shrink-0`}>
                          <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer status */}
                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <span className={`w-2 h-2 rounded-full ${style.footerDot} animate-pulse`} />
                    {style.footerLeft}
                  </span>
                  <span className="font-bold text-slate-700">{style.footerRight}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="max-w-2xl mx-auto text-center p-6 bg-blue-50/80 border border-blue-200/80 rounded-3xl">
          <p className="text-sm font-bold text-slate-800 mb-3">
            Ready to see how our targeted seller pipeline works for your territory?
          </p>
          <button
            onClick={onOpenBooking}
            className="btn-primary text-xs sm:text-sm py-3 px-7 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <span>Schedule Strategy Call</span>
          </button>
        </div>

      </div>
    </section>
  )
}
