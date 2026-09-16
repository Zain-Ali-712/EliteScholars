'use client'

import { HERO_PROOF } from '@/data/config'

interface HeroProps {
  onOpenBooking: () => void
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-b from-[#EFF4FF]/70 via-[#F8FAFF] to-white overflow-hidden border-b border-slate-200/80"
    >
      {/* Light & Playful Background Glows */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-400/15 rounded-full blur-3xl pointer-events-none -translate-y-1/3"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-400/15 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-300/15 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container-main relative z-10">
        {/* 2-Column Hero Grid: Left Copy, Right Video */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Exact Client Copy */}
          <div className="lg:col-span-6 text-left">
            
            {/* Playful Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-200 shadow-xs mb-5">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" aria-hidden="true" />
              <span>For Business Brokers &amp; M&amp;A Advisors</span>
            </div>

            {/* Main Headlines */}
            <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 leading-[1.18] tracking-tight mb-5">
              STOP CHASING YOUR NEXT LISTING.{' '}
              <span className="block mt-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                START TALKING TO BUSINESS OWNERS READY TO SELL.
              </span>
            </h1>

            {/* Sub-paragraphs per exact prompt */}
            <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed font-medium mb-7">
              <p>
                We help business brokers and M&amp;A advisors generate qualified seller conversations through targeted cold outreach.
              </p>
              <p>
                We find the right business owners, qualify their interest, and book conversations directly on your calendar.
              </p>
              <p className="font-bold text-slate-900 text-base sm:text-lg">
                You close. We keep your pipeline full.
              </p>
            </div>

            {/* CTA Button Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <button
                onClick={onOpenBooking}
                className="btn-primary text-sm sm:text-base py-3.5 px-8 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <span>Book a Free Strategy Call</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Micro reassurance line */}
            <p className="text-xs text-slate-500 flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>No long-term commitment &bull; 15-minute introductory consultation</span>
            </p>

          </div>

          {/* Right Column: Video Showcase Frame */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[540px] bg-white rounded-3xl p-2.5 sm:p-3 border-2 border-blue-200/80 shadow-2xl shadow-blue-500/10 relative group">
              
              {/* Playful Floating Top Pill */}
              <div className="absolute -top-3.5 left-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold px-3.5 py-1 rounded-full shadow-md z-20 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>Watch How We Build Your Pipeline</span>
              </div>

              {/* Video Player Container */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video shadow-inner flex items-center justify-center">
                <video
                  src="/Star Techlogix - Careers & BPO Portal.mp4"
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full h-full object-cover rounded-2xl"
                  title="Elite Scholars Seller Pipeline Video"
                >
                  Your browser does not support HTML5 video.
                </video>
              </div>

              {/* Bottom Quick Feature Tag Bar */}
              <div className="mt-3 px-2 py-1.5 flex items-center justify-between text-[11px] text-slate-600 font-semibold">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Call Recordings
                </span>
                <span>US-Timezone Dialers</span>
                <span className="text-blue-600 font-bold">100% Pre-Screened</span>
              </div>

            </div>
          </div>

        </div>

        {/* Proof Line Below Hero - Compact with only user-provided data */}
        <div className="mt-8 pt-6 border-t border-slate-200/60 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-extrabold text-slate-800 tracking-tight mb-2.5">
            {HERO_PROOF.headline}
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/80 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Targeted Outreach
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200/80 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
              Qualified Seller Conversations
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Listing Opportunities
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
