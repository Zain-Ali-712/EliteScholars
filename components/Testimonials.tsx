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
    <section id="testimonials" className="py-16 md:py-20 bg-gradient-to-b from-[#F8FAFF] via-white to-[#F8FAFF] border-b border-slate-200/80 relative overflow-hidden">
      {/* Background Playful Ambient Glows */}
      <div aria-hidden="true" className="absolute -left-20 top-1/2 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -right-20 top-1/3 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        {/* Centered Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 shadow-xs mb-3.5">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Client Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            What Our <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Clients</span> Say
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-medium">
            Hear directly from M&amp;A advisors and firm principals who scaled listing inventory with Elite Scholars.
          </p>
        </div>

        {/* 3 Video Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-7 max-w-6xl mx-auto items-stretch mb-12">
          {visibleTestimonials.map((item, idx) => {
            const cardThemes = [
              {
                border: 'border-blue-300 hover:border-blue-500 shadow-blue-500/5',
                bg: 'bg-gradient-to-b from-blue-50/60 via-white to-white',
                badge: 'bg-blue-100 text-blue-800 border-blue-200',
                avatarBg: 'bg-gradient-to-tr from-blue-600 to-blue-700',
              },
              {
                border: 'border-amber-300 hover:border-amber-500 shadow-amber-500/5',
                bg: 'bg-gradient-to-b from-amber-50/40 via-white to-white',
                badge: 'bg-amber-100 text-amber-800 border-amber-200',
                avatarBg: 'bg-gradient-to-tr from-amber-500 to-orange-500',
              },
              {
                border: 'border-emerald-300 hover:border-emerald-500 shadow-emerald-500/5',
                bg: 'bg-gradient-to-b from-emerald-50/60 via-white to-white',
                badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
                avatarBg: 'bg-gradient-to-tr from-emerald-600 to-teal-500',
              },
            ]
            const theme = cardThemes[idx % cardThemes.length]

            return (
              <div
                key={`${item.id}-${idx}`}
                className={`${theme.bg} rounded-3xl border-2 ${theme.border} p-5 md:p-4.5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group`}
              >
                <div>
                  {/* Embedded Video Player */}
                  {item.videoUrl && (
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border-2 border-slate-200/80 shadow-xs mb-3.5 group-hover:shadow-md transition-shadow">
                      <video
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                        src={item.videoUrl}
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}

                  {/* 5-Star Rating Row */}
                  <div className="flex items-center gap-1 text-amber-400 mb-2.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <span className="text-[11px] font-bold text-slate-500 ml-1 font-sans">5.0</span>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4 font-medium min-h-[55px] md:min-h-[70px] lg:min-h-[55px]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info & Stat Badge in Same Column */}
                <div className="pt-3.5 border-t border-slate-100 flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2.5 w-full">
                    <div className={`w-9 h-9 rounded-xl ${theme.avatarBg} text-white flex items-center justify-center font-extrabold text-xs shadow-xs shrink-0`}>
                      {item.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-medium truncate">
                        {item.title}, {item.firm}
                      </p>
                    </div>
                  </div>
                  {item.stats && (
                    <span className={`text-[10px] font-extrabold ${theme.badge} border px-2.5 py-0.5 rounded-full self-start shadow-2xs`}>
                      {item.stats}
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Navigation Controls & Rating Metric Badge */}
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors shadow-xs cursor-pointer"
              aria-label="Previous Testimonials"
            >
              <svg className="w-5 h-5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg cursor-pointer"
              aria-label="Next Testimonials"
            >
              <svg className="w-5 h-5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Rating Summary Box */}
          <div className="bg-white rounded-2xl border-2 border-slate-200/80 py-3 px-8 shadow-xs flex items-center gap-8 text-center divide-x divide-slate-100">
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-none">4.9 / 5.0</p>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">Average Satisfaction</p>
            </div>
            <div className="pl-8">
              <p className="text-xl sm:text-2xl font-extrabold text-blue-600 leading-none">60+</p>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">Broker Partners</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
