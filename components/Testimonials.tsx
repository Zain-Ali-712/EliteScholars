'use client'

import { useState } from 'react'
import { TESTIMONIALS } from '@/data/config'

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0)

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  // Display 3 testimonials in rotation
  const visibleTestimonials = [
    TESTIMONIALS[startIndex % TESTIMONIALS.length],
    TESTIMONIALS[(startIndex + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(startIndex + 2) % TESTIMONIALS.length],
  ]

  return (
    <section id="testimonials" className="py-10 md:py-14 bg-gradient-to-b from-[#F4F6F9]/70 via-white to-[#F4F6F9]/70 border-b border-[rgba(31,39,51,0.08)] relative overflow-hidden">
      {/* Background glow effect */}
      <div aria-hidden="true" className="absolute -left-20 top-1/2 w-72 h-72 bg-brass/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        {/* Centered Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="agency-pill mb-3 inline-flex">
            <span className="w-2 h-2 rounded-full bg-brass" aria-hidden="true" />
            <span>Verified Advisor Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-fraunces text-ink-navy leading-tight">
            What Our <span className="text-brass">Clients</span> Say
          </h2>
          <p className="text-xs sm:text-sm text-slate font-public-sans leading-relaxed mt-2">
            Hear directly from M&amp;A advisors and firm principals who scaled listing inventory with Elite Scholars.
          </p>
        </div>

        {/* 3 Compact Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto pt-4">
          {visibleTestimonials.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="bg-white rounded-[24px] border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-brass/40 transition-all duration-300 relative flex flex-col justify-between group overflow-visible"
            >
              {/* Top Right Circular Monogram Badge */}
              <div className="w-11 h-11 rounded-full border-2 border-brass bg-ink-navy text-brass flex items-center justify-center font-fraunces font-bold text-sm shadow-md absolute -top-4 right-6 shrink-0 group-hover:scale-105 transition-transform select-none">
                {item.name.split(' ').map((n) => n[0]).join('')}
              </div>

              <div>
                {/* 5-Star Rating Row */}
                <div className="flex items-center gap-1 text-brass mb-3 pt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-charcoal/90 leading-relaxed font-public-sans italic mb-4">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info & Stat Badge */}
              <div className="pt-3 border-t border-slate-100">
                <h3 className="text-xs sm:text-sm font-bold text-ink-navy font-public-sans">
                  {item.name}
                </h3>
                <p className="text-[11px] text-slate font-public-sans">
                  {item.title}, {item.firm}
                </p>
                {item.stats && (
                  <span className="inline-block mt-2 text-[10px] font-bold text-brass bg-brass/10 border border-brass/30 px-2.5 py-0.5 rounded-full font-public-sans">
                    {item.stats}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrow Controls & Rating Metric Badge */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full bg-slate-100 text-ink-navy flex items-center justify-center hover:bg-ink-navy hover:text-white transition-colors shadow-xs cursor-pointer"
              aria-label="Previous Testimonials"
            >
              <svg className="w-4 h-4 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full bg-ink-navy text-white flex items-center justify-center hover:bg-brass transition-colors shadow-xs cursor-pointer"
              aria-label="Next Testimonials"
            >
              <svg className="w-4 h-4 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Rating Summary Box */}
          <div className="bg-white rounded-[20px] border border-slate-200/80 p-3.5 px-6 shadow-xs flex items-center gap-6 text-center divide-x divide-slate-100">
            <div className="pr-3">
              <p className="text-lg sm:text-xl font-extrabold text-ink-navy font-public-sans leading-none">4.9/5</p>
              <p className="text-[10px] font-bold text-slate font-public-sans uppercase tracking-wider mt-1">Average Rating</p>
            </div>
            <div className="pl-6">
              <p className="text-lg sm:text-xl font-extrabold text-brass font-public-sans leading-none">60+</p>
              <p className="text-[10px] font-bold text-slate font-public-sans uppercase tracking-wider mt-1">Verified Reviews</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
