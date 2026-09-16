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
      borderColor: 'border-purple-200 hover:border-purple-400',
      badge: 'bg-purple-50 text-purple-700 border-purple-200',
      iconBg: 'bg-purple-600 text-white',
      accentText: 'text-purple-600',
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
        'First meeting booked inside 14 days',
      ],
    },
  ]

  return (
    <section id="different" className="py-16 md:py-20 bg-gradient-to-b from-white via-[#F8FAFF] to-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="container-main relative z-10">
        
        {/* Centered Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-purple-600 border border-purple-200 shadow-xs mb-3.5">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <span>Why Brokers Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            What Makes <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Elite Scholars</span> Different
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-medium">
            Here&apos;s what sets our targeted broker outreach apart from generic lead services.
          </p>
        </div>

        {/* 3 Simple, Playful, Equal-Height Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-12">
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
