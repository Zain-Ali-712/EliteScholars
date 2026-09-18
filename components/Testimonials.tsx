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

      <div className="container-main relative z-10">
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

        {/* ═══ 3D Stage Slider ═══ */}
        <div className="relative max-w-5xl mx-auto min-h-[520px] sm:min-h-[540px] flex items-center justify-center">
          
          {/* Navigation Prev Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-0 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 border-2 border-slate-200/90 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-lg hover:shadow-xl flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <svg className="w-5 h-5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Navigation Next Button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-0 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 border-2 border-slate-200/90 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-lg hover:shadow-xl flex items-center justify-center transition-all cursor-pointer"
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
                  'z-10 opacity-40 sm:opacity-55 scale-[0.84] -translate-x-[50%] sm:-translate-x-[62%] md:-translate-x-[70%] shadow-md border-2 border-slate-200 bg-slate-50/90 hover:opacity-75 cursor-pointer hidden sm:block select-none'
              } else if (isRight) {
                positionStyles =
                  'z-10 opacity-40 sm:opacity-55 scale-[0.84] translate-x-[50%] sm:translate-x-[62%] md:translate-x-[70%] shadow-md border-2 border-slate-200 bg-slate-50/90 hover:opacity-75 cursor-pointer hidden sm:block select-none'
              }

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (isLeft) handlePrev()
                    if (isRight) handleNext()
                  }}
                  className={`absolute transition-all duration-500 ease-out w-[92%] sm:w-[460px] md:w-[490px] rounded-3xl overflow-hidden flex flex-col justify-between ${positionStyles}`}
                >
                  {/* 1. TOP: Client Name & Company */}
                  <div className="p-5 sm:p-6 pb-0">
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-blue-700 text-white flex items-center justify-center font-extrabold text-sm shadow-md shadow-blue-500/20 shrink-0">
                          {item.name.split(' ').map((n) => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-tight">
                            {item.name}
                          </h3>
                          <p className="text-xs sm:text-sm font-bold text-blue-700">
                            {item.firm}
                          </p>
                        </div>
                      </div>

                      {/* 5-Star Rating */}
                      <div className="flex items-center gap-1 text-amber-400 shrink-0 bg-amber-50/80 px-2.5 py-1 rounded-full border border-amber-200/80">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                        <span className="text-[11px] font-bold text-slate-600 ml-0.5">5.0</span>
                      </div>
                    </div>
                  </div>

                  {/* 2. MIDDLE: Video Player (A little bigger size) */}
                  <div className="px-5 sm:px-6 my-3.5">
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border-2 border-slate-200 shadow-inner">
                      {isCenter ? (
                        <video
                          controls
                          playsInline
                          preload="metadata"
                          src={item.videoUrl}
                          className="w-full h-full object-cover"
                        >
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <div className="w-full h-full relative flex items-center justify-center bg-slate-900">
                          <video
                            preload="metadata"
                            src={item.videoUrl}
                            className="w-full h-full object-cover opacity-60"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <div className="w-12 h-12 rounded-full bg-white/90 text-blue-600 flex items-center justify-center shadow-lg">
                              <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 3. BOTTOM: Client's Words (Written Form 2-3 Lines Only) */}
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed font-medium line-clamp-3">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    {item.stats && (
                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
                        <span className="inline-flex items-center gap-1 text-emerald-700">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          Verified Result
                        </span>
                        <span className="text-blue-700 font-semibold bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/80">
                          {item.stats}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
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

