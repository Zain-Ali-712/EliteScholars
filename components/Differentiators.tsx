'use client'

import { DIFFERENTIATORS } from '@/data/config'

interface DifferentiatorsProps {
  onOpenBooking?: () => void
}

export default function Differentiators({ onOpenBooking }: DifferentiatorsProps) {
  const cardStyles = [
    {
      borderColor: 'border-blue-200 hover:border-blue-400',
      badge: 'bg-blue-50 text-blue-700 border-blue-200',
      iconBg: 'bg-blue-600 text-white',
      accentText: 'text-blue-600',
      bullets: [
        'Verified $500K – $50M revenue bands',
        'Direct equity owners & founders',
        'Active seller motivation confirmed',
      ],
    },
    {
      borderColor: 'border-emerald-200 hover:border-emerald-400',
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconBg: 'bg-emerald-600 text-white',
      accentText: 'text-emerald-600',
      bullets: [
        'Live call recordings for every conversation',
        'Complete owner & business dossier',
        'Real-time calendar sync & alerts',
      ],
    },
    {
      borderColor: 'border-amber-200 hover:border-amber-400',
      badge: 'bg-amber-50 text-amber-700 border-amber-200',
      iconBg: 'bg-amber-600 text-white',
      accentText: 'text-amber-600',
      bullets: [
        'Campaign launches in 48–72 hours',
        '100% done-for-you cold outreach',
        'First meeting booked within 48 hours',
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

        {/* 3 Simple, Playful, Equal-Height Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-10">
          {DIFFERENTIATORS.map((item, idx) => {
            const style = cardStyles[idx]
            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-6 sm:p-7 border-2 ${style.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full`}
              >
                <div>
                  {/* Top Badge & Step */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border ${style.badge}`}>
                      {item.tag}
                    </span>
                    <div className={`w-9 h-9 rounded-xl ${style.iconBg} font-bold text-xs flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}>
                      0{idx + 1}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-medium mb-5 pb-4 border-b border-slate-100">
                    {item.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-6">
                    {style.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                        <span className={`w-4 h-4 rounded-full bg-slate-100 ${style.accentText} flex items-center justify-center shrink-0`}>
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer status */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1.5 text-emerald-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Standard Protocol
                  </span>
                  <span>100% Quality</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Lead Criteria Replacement Guarantee Banner */}
        <div className="max-w-4xl mx-auto mb-10 bg-gradient-to-r from-blue-50/90 via-sky-50/70 to-emerald-50/90 border-2 border-emerald-300/90 rounded-3xl p-6 sm:p-7 shadow-md shadow-emerald-900/5 flex flex-col sm:flex-row items-center gap-5">
          <div className="w-13 h-13 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <svg className="w-7 h-7 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <div className="text-center sm:text-left flex-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 mb-1.5">
              <span>Lead Criteria Replacement Guarantee</span>
            </div>
            <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
              Guaranteed Criteria Match &bull; Free Instant Replacement
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
              We will provide replacement for your lead if it does not satisfy your criteria, like if we mistakenly gave you the wrong lead that does not match your criteria we will give you replacement for that lead.
            </p>
          </div>
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
