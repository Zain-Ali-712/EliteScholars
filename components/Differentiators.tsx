'use client'

import Image from 'next/image'
import { DIFFERENTIATORS } from '@/data/config'

interface DifferentiatorsProps {
  onOpenBooking?: () => void
}

export default function Differentiators({ onOpenBooking }: DifferentiatorsProps) {
  const cardMetrics = [
    { tag: 'Checked Leads', image: '/images/services-sde.jpg' },
    { tag: 'Live Tracking', image: '/images/services-transcripts.jpg' },
    { tag: 'Fast Activation', image: '/images/services-activation.jpg' },
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
          
          {/* 3 Normal Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {DIFFERENTIATORS.map((item, idx) => {
              const meta = cardMetrics[idx]
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
                >
                  <div>
                    {/* Visual Image Banner */}
                    <div className="rounded-xl h-[170px] sm:h-[190px] w-full relative overflow-hidden shadow-xs border border-slate-100 mb-4 group-hover:border-slate-200 transition-colors">
                      <Image
                        src={meta.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-navy/70 via-transparent to-transparent" />
                      
                      {/* Floating Tag inside image */}
                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <span className="text-[10px] font-bold text-brass uppercase tracking-wider bg-ink-navy/85 backdrop-blur-sm border border-white/15 px-2.5 py-1 rounded-full font-public-sans">
                          {meta.tag}
                        </span>
                      </div>
                    </div>

                    {/* Card Header: Step/Number Badge & Title */}
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-7 h-7 rounded-lg bg-ink-navy text-brass font-fraunces font-bold text-xs flex items-center justify-center border border-brass/30 shrink-0">
                        0{idx + 1}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold font-fraunces text-ink-navy leading-snug group-hover:text-brass-dark transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate leading-relaxed font-public-sans">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-public-sans">
                    <span className="font-bold text-ink-navy flex items-center gap-1.5 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      0{idx + 1}
                    </span>
                  </div>
                </div>
              )
            })}
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
