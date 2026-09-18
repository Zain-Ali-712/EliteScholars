'use client'

import { useState } from 'react'
import { TESTIMONIALS, SITE } from '@/data/config'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const count = TESTIMONIALS.length

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % count)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + count) % count)
  }

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-gradient-to-b from-[#F8FAFF] via-white to-[#F8FAFF] border-b border-slate-200/80 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div aria-hidden="true" className="absolute -left-20 top-1/2 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -right-20 top-1/3 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10 px-4 sm:px-6 md:px-10">
        {/* Centered Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 shadow-xs mb-3.5">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Verified Broker Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            What Our <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Clients</span> Say
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-medium">
            Hear directly from M&amp;A advisors and firm principals who scaled listing inventory with {SITE.name}.
          </p>
        </div>

        {/* ═══ 3D Stage Slider (Responsive & Mobile-Optimized) ═══ */}
        <div className="relative max-w-5xl mx-auto min-h-[480px] sm:min-h-[410px] flex items-center justify-center px-2 sm:px-8">
          
          {/* Desktop Navigation Prev Button (Hidden on Mobile to prevent overlapping card) */}
          <button
            type="button"
            onClick={handlePrev}
            className="hidden sm:flex absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 border-2 border-slate-200/90 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-md hover:shadow-lg items-center justify-center transition-all cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <svg className="w-5 h-5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Desktop Navigation Next Button (Hidden on Mobile to prevent overlapping card) */}
          <button
            type="button"
            onClick={handleNext}
            className="hidden sm:flex absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 border-2 border-slate-200/90 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-md hover:shadow-lg items-center justify-center transition-all cursor-pointer"
            aria-label="Next Testimonial"
          >
            <svg className="w-5 h-5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Cards Stack */}
          <div className="relative w-full h-full flex items-center justify-center">
            {TESTIMONIALS.map((item, idx) => {
              const diff = (idx - activeIndex + count) % count
              const isCenter = diff === 0
              const isRight = diff === 1
              const isLeft = diff === count - 1

              if (!isCenter && !isRight && !isLeft) {
                return null
              }

              // Position & 3D styling rules
              let positionStyles = ''
              if (isCenter) {
                positionStyles =
                  'z-30 opacity-100 scale-100 translate-x-0 shadow-2xl border-2 border-blue-400/90 bg-white ring-4 ring-blue-500/10'
              } else if (isLeft) {
                positionStyles =
                  'z-10 opacity-40 sm:opacity-55 scale-[0.84] -translate-x-[30%] sm:-translate-x-[36%] md:-translate-x-[42%] shadow-md border-2 border-slate-200 bg-slate-50/90 hover:opacity-75 cursor-pointer hidden sm:block select-none'
              } else if (isRight) {
                positionStyles =
                  'z-10 opacity-40 sm:opacity-55 scale-[0.84] translate-x-[30%] sm:translate-x-[36%] md:translate-x-[42%] shadow-md border-2 border-slate-200 bg-slate-50/90 hover:opacity-75 cursor-pointer hidden sm:block select-none'
              }

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (isLeft) handlePrev()
                    if (isRight) handleNext()
                  }}
                  className={`absolute transition-all duration-500 ease-out w-[95%] max-w-sm sm:max-w-none sm:w-[490px] md:w-[550px] lg:w-[590px] rounded-3xl overflow-hidden ${positionStyles}`}
                >
                  <div className="flex flex-col sm:grid sm:grid-cols-12 h-full">
                    {/* LEFT / TOP SIDE: Name, Firm, Stars, Quote & Stats */}
                    <div className="sm:col-span-7 p-4 sm:p-5 md:p-6 flex flex-col justify-between shrink-0">
                      <div>
                        {/* Top: Avatar + (Name, Company, Stars in same column, different rows) */}
                        <div className="flex items-start gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-blue-700 text-white flex items-center justify-center font-extrabold text-xs sm:text-sm shadow-md shadow-blue-500/20 shrink-0 mt-0.5">
                            {item.name.split(' ').map((n) => n[0]).join('')}
                          </div>
                          <div className="flex flex-col space-y-0.5 min-w-0">
                            {/* Row 1: Client Name */}
                            <h3 className="text-sm sm:text-base md:text-lg font-extrabold text-slate-900 tracking-tight leading-snug truncate">
                              {item.name}
                            </h3>

                            {/* Row 2: Company Name */}
                            <p className="text-[11px] sm:text-xs md:text-sm font-bold text-blue-700 leading-snug truncate">
                              {item.firm}
                            </p>

                            {/* Row 3: Star Rating */}
                            <div className="flex items-center gap-1 text-amber-400 pt-0.5">
                              <div className="flex items-center gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-[10px] sm:text-[11px] font-bold text-slate-600 ml-0.5">5.0</span>
                            </div>
                          </div>
                        </div>

                        {/* Quote in written form */}
                        <div className="my-1.5 sm:my-2 py-0.5 sm:py-1">
                          <p className="text-xs sm:text-[13px] md:text-sm text-slate-600 italic leading-relaxed font-medium line-clamp-3 sm:line-clamp-none">
                            &ldquo;{item.quote}&rdquo;
                          </p>
                        </div>
                      </div>

                      {/* Bottom Result Stat */}
                      {item.stats && (
                        <div className="mt-2.5 sm:mt-3 pt-2 sm:pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs font-semibold">
                          <span className="inline-flex items-center gap-1 text-emerald-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Verified Result
                          </span>
                          <span className="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded text-[10px] sm:text-xs border border-blue-200/80">
                            {item.stats}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* RIGHT / BOTTOM SIDE: Video in Portrait / Responsive Frame */}
                    <div className="sm:col-span-5 p-3 sm:p-4 bg-slate-900/5 sm:border-l sm:border-slate-100 flex items-center justify-center flex-1 min-h-0">
                      <div className="relative w-full h-[185px] sm:h-auto sm:aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 border-2 border-slate-200 shadow-inner flex items-center justify-center">
                        {isCenter ? (
                          <video
                            key={item.videoUrl}
                            controls
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-contain sm:object-cover bg-black"
                          >
                            <source src={item.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <div className="w-full h-full relative flex items-center justify-center bg-slate-900">
                            <video
                              key={item.videoUrl}
                              preload="metadata"
                              muted
                              playsInline
                              className="w-full h-full object-contain sm:object-cover opacity-60 pointer-events-none bg-black"
                            >
                              <source src={item.videoUrl} type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 text-blue-600 flex items-center justify-center shadow-lg">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Navigation Controls (Dedicated Prev / Next + Dots under card) */}
        <div className="flex sm:hidden items-center justify-between gap-3 mt-5 px-4 max-w-xs mx-auto">
          <button
            type="button"
            onClick={handlePrev}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs shadow-xs active:bg-slate-100"
            aria-label="Previous Testimonial"
          >
            <svg className="w-3.5 h-3.5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <span>Prev</span>
          </button>

          <div className="flex items-center gap-1.5">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIndex ? 'w-5 h-2 bg-blue-600' : 'w-2 h-2 bg-slate-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs shadow-xs active:bg-slate-100"
            aria-label="Next Testimonial"
          >
            <span>Next</span>
            <svg className="w-3.5 h-3.5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Desktop Pagination Dots */}
        <div className="hidden sm:flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                i === activeIndex ? 'w-8 h-2.5 bg-blue-600 shadow-xs' : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Rating Summary Metric Strip */}
        <div className="mt-8 max-w-xs mx-auto bg-white rounded-2xl border-2 border-slate-200/80 py-2.5 px-6 shadow-xs flex items-center justify-around text-center divide-x divide-slate-100">
          <div>
            <p className="text-lg sm:text-xl font-extrabold text-slate-900 leading-none">5.0 / 5.0</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">Client Rating</p>
          </div>
          <div className="pl-6">
            <p className="text-lg sm:text-xl font-extrabold text-blue-600 leading-none">60+</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">Active Brokers</p>
          </div>
        </div>

      </div>
    </section>
  )
}

