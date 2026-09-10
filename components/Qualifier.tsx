'use client'

import { useState } from 'react'
import { QUALIFIERS, DISQUALIFIER_STATEMENT } from '@/data/config'

export default function Qualifier() {
  const [activeIndex, setActiveIndex] = useState(0)

  const icons = [
    // 1. Licensed Broker (User / Badge icon)
    <svg key="1" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>,
    // 2. Qualified Conversations (Chat / Target icon)
    <svg key="2" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>,
    // 3. Scale Monthly Pipeline (TrendingUp icon)
    <svg key="3" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>,
    // 4. Full Visibility (Eye / Shield icon)
    <svg key="4" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ]

  return (
    <section id="qualifier" className="py-12 md:py-16 bg-gradient-to-b from-[#F4F6F9]/60 via-white to-[#F4F6F9]/60 border-b border-[rgba(31,39,51,0.08)] relative overflow-hidden">
      {/* Background glow effect */}
      <div aria-hidden="true" className="absolute -right-20 top-1/2 w-72 h-72 bg-brass/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 text-left">
          <div className="agency-pill mb-3">
            <span className="w-2 h-2 rounded-full bg-brass" aria-hidden="true" />
            <span>Broker Eligibility Filter</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-fraunces text-ink-navy mb-2.5">
            Is Elite Scholars <span className="text-brass">right</span> for your brokerage?
          </h2>
          <p className="text-sm md:text-base text-slate font-public-sans">
            We partner exclusively with serious brokers built to scale listing volume. Review our standard criteria below.
          </p>
        </div>

        {/* 2-Column Main Layout matching Dribbble reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Stacked Cards Panel */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-[#F4F6F9] rounded-[28px] p-4 sm:p-6 border border-slate-200/60 shadow-sm">
              <div className="space-y-3">
                {QUALIFIERS.map((item, idx) => {
                  const isExpanded = activeIndex === idx
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`transition-all duration-300 rounded-2xl cursor-pointer ${
                        isExpanded
                          ? 'bg-white p-5 sm:p-6 shadow-md border border-slate-200/90'
                          : 'bg-white/80 hover:bg-white p-4 shadow-xs hover:shadow-sm border border-slate-200/50'
                      }`}
                    >
                      {/* Expanded View */}
                      {isExpanded ? (
                        <div>
                          <div className="flex items-center justify-between gap-4 mb-3">
                            <div className="w-10 h-10 rounded-full bg-ink-navy text-brass flex items-center justify-center shadow-md border border-brass/30">
                              {icons[idx]}
                            </div>
                            <div className="w-8 h-8 rounded-full bg-ink-navy text-white flex items-center justify-center shrink-0">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                          <h3 className="text-base sm:text-lg font-bold font-public-sans text-ink-navy mb-1.5">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate leading-relaxed font-public-sans">
                            {item.description}
                          </p>
                        </div>
                      ) : (
                        /* Collapsed View */
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#F1F5F9] text-ink-navy flex items-center justify-center shrink-0">
                              {icons[idx]}
                            </div>
                            <h3 className="text-xs sm:text-sm font-bold text-ink-navy font-public-sans leading-snug">
                              {item.title}
                            </h3>
                          </div>
                          <div className="w-7 h-7 rounded-full bg-[#F1F5F9] text-ink-navy flex items-center justify-center shrink-0 group-hover:bg-ink-navy group-hover:text-white transition-colors">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Honest Disqualifier Box */}
            <div className="mt-4 p-5 sm:p-6 bg-ink-navy text-white rounded-2xl border-l-4 border-l-brass border border-white/10 shadow-lg relative overflow-hidden">
              <div aria-hidden="true" className="absolute -right-16 -bottom-16 w-48 h-48 bg-brass/15 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-start gap-3.5 relative z-10">
                <div className="w-9 h-9 rounded-xl bg-brass/20 text-brass flex items-center justify-center shrink-0 border border-brass/40 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3.75m0 3.75h.008v.008H12v-.008zM12 3a9 9 0 100 18 9 9 0 000-18z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold text-brass uppercase tracking-wider font-public-sans mb-1">
                    Honest Disqualification Standard
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-white font-public-sans leading-snug">
                    &ldquo;{DISQUALIFIER_STATEMENT}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Quality Image Card */}
          <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full rounded-[28px] overflow-hidden border border-slate-200/80 shadow-lg group">
            <img
              src="/images/qualifier-broker.jpg"
              alt="Senior Business Broker Evaluation Session"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-navy/90 via-ink-navy/30 to-transparent" />

            {/* Floating Glass Overlay Card */}
            <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-ink-navy/85 backdrop-blur-md border border-white/20 text-white flex items-center gap-3 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-brass/20 text-brass flex items-center justify-center shrink-0 border border-brass/40">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-bold text-brass uppercase tracking-wider font-public-sans">Strict Vetting Standard</p>
                <p className="text-xs text-white/90 font-medium font-public-sans">100% Pre-Qualified Seller Appointments</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
