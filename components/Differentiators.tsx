'use client'

import { useState } from 'react'
import Image from 'next/image'
import { DIFFERENTIATORS } from '@/data/config'

interface DifferentiatorsProps {
  onOpenBooking?: () => void
}

export default function Differentiators({ onOpenBooking }: DifferentiatorsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState(0)

  const categories = ['Solo Brokers', 'M&A Advisory Firms', 'LMM Equity Groups']

  const cardMetrics = [
    { tag: 'Verified SDE & Ownership', image: '/images/services-sde.jpg', icon: '01' },
    { tag: 'Recorded Call Transcripts', image: '/images/services-transcripts.jpg', icon: '02' },
    { tag: '< 14 Days Activation SLA', image: '/images/services-activation.jpg', icon: '03' },
  ]

  const activeItem = DIFFERENTIATORS[activeIndex]
  const activeMeta = cardMetrics[activeIndex]

  return (
    <section id="different" className="py-12 md:py-16 bg-gradient-to-b from-[#F4F6F9]/50 via-white to-[#F4F6F9]/50 border-b border-[rgba(31,39,51,0.08)] relative overflow-hidden">
      {/* Background ambient glow effect */}
      <div aria-hidden="true" className="absolute -right-24 top-1/3 w-80 h-80 bg-brass/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        
        {/* 2-Column Main Section Layout matching Dribbble reference media_1789041525828.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Section Header & Vertical Tabs Selector */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <div className="agency-pill mb-3">
                <span className="w-2 h-2 rounded-full bg-brass" aria-hidden="true" />
                <span>Institutional Advantage</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-fraunces text-ink-navy mb-2.5">
                What makes <span className="text-brass">Elite Scholars</span> different
              </h2>
              <p className="text-xs sm:text-sm text-slate font-public-sans leading-relaxed mb-6">
                We replace vague lead generation with institutional research protocols, written standards, and complete operational transparency.
              </p>
            </div>

            {/* Vertical Interactive Tabs Selector */}
            <div className="bg-[#F4F6F9] rounded-2xl p-2 sm:p-2.5 border border-slate-200/60 shadow-xs space-y-1.5">
              {DIFFERENTIATORS.map((item, idx) => {
                const isActive = activeIndex === idx
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-full text-left p-3 sm:p-3.5 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                      isActive
                        ? 'bg-white text-ink-navy font-bold shadow-sm border border-slate-200/80'
                        : 'text-slate font-semibold hover:bg-white/60 hover:text-ink-navy'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-lg text-xs font-bold font-fraunces flex items-center justify-center ${
                        isActive ? 'bg-ink-navy text-brass' : 'bg-slate-200/70 text-slate-600'
                      }`}>
                        0{idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-public-sans leading-snug">
                        {item.title}
                      </span>
                    </div>
                    <span className={`w-2 h-2 rounded-full transition-colors ${
                      isActive ? 'bg-brass animate-pulse' : 'bg-slate-300 group-hover:bg-slate-400'
                    }`} />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Feature Display Card */}
          <div className="lg:col-span-8">
            
            {/* Top Horizontal Category Selector */}
            <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
              <div className="bg-[#F4F6F9] p-1.5 rounded-full border border-slate-200/60 inline-flex items-center gap-1">
                {categories.map((cat, cIdx) => {
                  const isCatActive = activeCategory === cIdx
                  return (
                    <button
                      key={cIdx}
                      onClick={() => setActiveCategory(cIdx)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold font-public-sans transition-all flex items-center gap-1.5 ${
                        isCatActive
                          ? 'bg-white text-ink-navy shadow-xs border border-slate-200/80'
                          : 'text-slate hover:text-ink-navy'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isCatActive ? 'bg-brass' : 'bg-slate-300'}`} />
                      {cat}
                    </button>
                  )
                })}
              </div>

              <span className="text-xs font-semibold text-brass bg-brass/10 border border-brass/25 px-3 py-1 rounded-full font-public-sans hidden sm:inline-block">
                {activeMeta.tag}
              </span>
            </div>

            {/* Main Feature Display Frame */}
            <div className="bg-[#F4F6F9] rounded-[28px] p-4 sm:p-6 border border-slate-200/60 shadow-sm relative overflow-hidden transition-all duration-500">
              
              {/* Rich Visual Image Banner */}
              <div className="rounded-2xl h-[200px] sm:h-[250px] w-full relative overflow-hidden shadow-sm border border-slate-200/80 mb-5 group">
                <Image
                  src={activeMeta.image}
                  alt={activeItem.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-navy/80 via-transparent to-transparent" />
                
                {/* Floating Tag inside image */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                  <span className="text-[11px] font-bold bg-ink-navy/80 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full font-public-sans">
                    Standard Protocol 0{activeIndex + 1}
                  </span>
                  <span className="text-[11px] font-semibold text-brass bg-black/40 backdrop-blur-md px-3 py-1 rounded-full font-public-sans">
                    Guaranteed in Writing
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-ink-navy text-brass font-fraunces font-bold text-xs flex items-center justify-center border border-brass/30 shrink-0">
                    0{activeIndex + 1}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-fraunces text-ink-navy">
                    {activeItem.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate leading-relaxed font-public-sans">
                  {activeItem.description}
                </p>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-4 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-3">
                <a
                  href="#guarantee"
                  className="bg-white hover:bg-slate-50 text-ink-navy border border-slate-200 rounded-full px-4 py-2.5 text-xs font-bold shadow-xs transition-all flex items-center gap-1.5"
                >
                  <span>Review Quality Guarantee</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {onOpenBooking ? (
                  <button
                    onClick={onOpenBooking}
                    className="btn-primary text-xs py-2.5 px-5 rounded-full flex items-center gap-1.5 shadow-md hover:shadow-lg"
                  >
                    <span>Schedule Strategy Call</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                ) : (
                  <a
                    href="#cta"
                    className="btn-primary text-xs py-2.5 px-5 rounded-full flex items-center gap-1.5 shadow-md hover:shadow-lg"
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

        </div>

      </div>
    </section>
  )
}
