'use client'

import { DIFFERENTIATORS } from '@/data/config'

interface DifferentiatorsProps {
  onOpenBooking?: () => void
}

export default function Differentiators({ onOpenBooking }: DifferentiatorsProps) {
  const cardData = [
    {
      step: '01',
      tag: 'Checked Leads',
      title: DIFFERENTIATORS[0].title,
      description: DIFFERENTIATORS[0].description,
      points: [
        {
          label: 'Target Revenue Bands',
          detail: 'Vetted between $500K and $20M+ annual revenue before reaching your calendar.',
        },
        {
          label: 'Direct Equity Decision-Maker',
          detail: 'Confirmed founder, majority owner, or primary shareholder with authority to sell.',
        },
        {
          label: 'Active Exit Motivation',
          detail: 'Screened for genuine openness to valuation, exit planning, or immediate sale.',
        },
        {
          label: 'Territory Alignment',
          detail: 'Filtered strictly to your state, metropolitan market, or specialized broker niche.',
        },
      ],
      footerNote: 'Standard 01',
    },
    {
      step: '02',
      tag: 'Live Tracking',
      title: DIFFERENTIATORS[1].title,
      description: DIFFERENTIATORS[1].description,
      points: [
        {
          label: 'Real-Time Calendar Sync',
          detail: 'Appointments appear directly on your Google or Outlook calendar with instant alerts.',
        },
        {
          label: 'Complete Owner Dossier',
          detail: 'Receive business background, revenue scope, and motivation notes before every call.',
        },
        {
          label: 'Live Outreach Pipeline',
          detail: 'Dashboard access shows accounts contacted, responses, and booked conversations.',
        },
        {
          label: 'Direct Research Team',
          detail: 'Dedicated outreach research team aligned directly with your territory criteria.',
        },
      ],
      footerNote: 'Standard 02',
    },
    {
      step: '03',
      tag: 'Fast Activation',
      title: DIFFERENTIATORS[2].title,
      description: DIFFERENTIATORS[2].description,
      points: [
        {
          label: '48–72 Hour Launch',
          detail: 'From onboarding strategy session to active market outreach in 2 to 3 business days.',
        },
        {
          label: '100% Done-For-You',
          detail: 'Zero cold calling, list buying, or manual follow-ups required from your brokerage.',
        },
        {
          label: 'First Meeting < 14 Days',
          detail: 'Most broker partners conduct their first qualified seller meeting inside two weeks.',
        },
        {
          label: 'Predictable Monthly Deal Flow',
          detail: 'Consistent month-over-month meetings to keep your listing pipeline active.',
        },
      ],
      footerNote: 'Standard 03',
    },
  ]

  return (
    <section id="different" className="py-12 md:py-16 bg-gradient-to-b from-[#F4F6F9]/50 via-white to-[#F4F6F9]/50 border-b border-[rgba(31,39,51,0.08)] relative overflow-hidden">
      {/* Background ambient glow effect */}
      <div aria-hidden="true" className="absolute -right-24 top-1/3 w-80 h-80 bg-brass/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-fraunces text-ink-navy mb-2.5">
            What makes <span className="text-brass">Elite Scholars</span> different
          </h2>
          <p className="text-sm md:text-base text-slate font-public-sans leading-relaxed">
            Here&apos;s what sets us apart from other lead generation services.
          </p>
        </div>

        {/* Outer Framed Container showing all 3 cards in the same row */}
        <div className="bg-[#F4F6F9] rounded-[28px] p-4 sm:p-6 border border-slate-200/60 shadow-xs">
          
          {/* 3 Normal Cards Grid - Same Height */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {cardData.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div>
                  {/* Top Badge & Number Row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-brass uppercase tracking-wider bg-brass/10 border border-brass/25 px-3 py-1 rounded-full font-public-sans">
                      {card.tag}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-ink-navy text-brass font-fraunces font-bold text-xs flex items-center justify-center border border-brass/30 shadow-xs">
                      {card.step}
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-xl font-bold font-fraunces text-ink-navy mb-2.5 leading-snug group-hover:text-brass-dark transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate leading-relaxed font-public-sans mb-5 pb-4 border-b border-slate-100">
                    {card.description}
                  </p>

                  {/* Data / Feature Points Checklist */}
                  <div className="space-y-3 mb-6">
                    {card.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-brass/15 text-brass-dark flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-ink-navy font-public-sans leading-tight">
                            {pt.label}
                          </p>
                          <p className="text-[11px] text-slate font-public-sans leading-relaxed mt-0.5">
                            {pt.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Status */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-public-sans">
                  <span className="font-bold text-ink-navy flex items-center gap-1.5 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {card.footerNote}
                  </span>
                  <span className="text-[10px] font-semibold text-slate uppercase tracking-wider font-public-sans">
                    Standard Protocol
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Strip */}
          <div className="mt-6 pt-5 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-slate font-public-sans text-center sm:text-left">
              Ready to see how our vetted pipeline process works for your brokerage?
            </p>
            {onOpenBooking ? (
              <button
                onClick={onOpenBooking}
                className="btn-primary text-xs py-2.5 px-5 rounded-full flex items-center gap-1.5 shadow-xs hover:shadow-sm shrink-0"
              >
                <span>Schedule Strategy Call</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            ) : (
              <a
                href="#cta"
                className="btn-primary text-xs py-2.5 px-5 rounded-full flex items-center gap-1.5 shadow-xs hover:shadow-sm shrink-0"
              >
                <span>Schedule Strategy Call</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}
