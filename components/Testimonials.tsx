'use client'

import { useState } from 'react'
import { TESTIMONIALS, Testimonial } from '@/data/config'

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<Testimonial | null>(null)

  return (
    <section id="testimonials" className="section-padding bg-white border-b border-[rgba(31,39,51,0.08)]">
      <div className="container-main">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brass/10 border border-brass/30 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-brass" aria-hidden="true" />
            <span className="font-public-sans text-xs font-semibold text-[#8B6332] uppercase tracking-wider">
              Verified Advisor Testimonials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-fraunces text-ink-navy mb-4">
            Proven results for business brokers
          </h2>
          <p className="text-base md:text-lg text-slate font-public-sans">
            Hear directly from M&amp;A advisors and firm principals who scaled listing inventory with Elite Scholars.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="panel-border bg-paper p-8 flex flex-col justify-between hover:border-brass hover:shadow-md transition-all duration-300 rounded-sm"
            >
              <div>
                {/* Star Rating & Stat Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-brass text-sm">
                    ★★★★★
                  </div>
                  {item.stats && (
                    <span className="text-[11px] font-bold text-brass px-2.5 py-1 bg-brass/10 border border-brass/30 rounded-xs">
                      {item.stats}
                    </span>
                  )}
                </div>

                {/* Quote */}
                <p className="text-charcoal/90 text-base font-public-sans italic mb-6 leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Video Facade Thumbnail */}
                <div
                  onClick={() => setActiveVideo(item)}
                  className="mb-6 relative rounded-xs overflow-hidden bg-ink-navy h-36 flex items-center justify-center cursor-pointer group border border-[rgba(31,39,51,0.15)] shadow-inner"
                  role="button"
                  tabIndex={0}
                  aria-label={`Watch video testimonial from ${item.name}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveVideo(item)
                    }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-navy via-ink-navy/40 to-transparent opacity-90" />
                  
                  {/* Play Button Icon */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-brass text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg border border-white/20">
                    <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>

                  <span className="absolute bottom-3 left-4 text-xs font-semibold text-white/90 z-10 font-public-sans flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brass" />
                    Watch Verified Case Study (1:45)
                  </span>
                </div>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-[rgba(31,39,51,0.08)] flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-ink-navy font-public-sans">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate font-public-sans">
                    {item.title}, {item.firm} ({item.location})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Facade */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-ink-navy/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Video player for ${activeVideo.name}`}
        >
          <div
            className="bg-white max-w-2xl w-full panel-border p-6 relative shadow-2xl animate-pipeline-in rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[rgba(31,39,51,0.1)]">
              <div>
                <h3 className="text-base font-bold text-ink-navy font-public-sans">
                  {activeVideo.name} &mdash; {activeVideo.firm}
                </h3>
                <p className="text-xs text-slate">{activeVideo.location}</p>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="text-slate hover:text-ink-navy font-bold text-xl px-2 focus-visible:outline-2"
                aria-label="Close video"
              >
                ✕
              </button>
            </div>

            {/* Video Player Placeholder / Frame */}
            <div className="aspect-video bg-ink-navy rounded-xs flex flex-col items-center justify-center text-center p-6 border border-brass/30">
              <div className="w-14 h-14 rounded-full bg-brass/20 text-brass flex items-center justify-center mb-3">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-sm font-bold text-white font-public-sans mb-1">
                Client Video Testimonial Player
              </p>
              <p className="text-xs text-paper/60 font-public-sans max-w-md">
                Lazy-loaded facade video. In production, this embeds your verified Vimeo/YouTube case study for {activeVideo.name}.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
