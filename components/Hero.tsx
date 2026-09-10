'use client'

import Image from 'next/image'
import { SITE, TRUST_LOGOS } from '@/data/config'
import AnimatedCounter from '@/components/AnimatedCounter'

interface HeroProps {
  onOpenBooking: () => void
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FAF6ED] via-[#F2E8D5] to-[#E5D7BF] overflow-hidden border-b border-[rgba(31,39,51,0.12)]"
    >
      {/* Prominent Theme Radial Glows */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-brass/35 rounded-full blur-3xl pointer-events-none -translate-y-1/2"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-ink-navy/20 rounded-full blur-3xl pointer-events-none translate-y-1/3"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brass/15 rounded-full blur-3xl pointer-events-none"
      />

      {/* Subtle Financial Grid Pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, var(--ink-navy) 0px, var(--ink-navy) 1px, transparent 1px, transparent 48px),
                            repeating-linear-gradient(90deg, var(--ink-navy) 0px, var(--ink-navy) 1px, transparent 1px, transparent 48px)`,
        }}
      />

      <div className="container-main relative">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">

          {/* Left Column: Copy (~48%) */}
          <div className="flex-1 lg:max-w-[48%]">
            
            {/* Section Badge */}
            <div className="agency-pill mb-4">
              <span className="w-2 h-2 rounded-full bg-brass animate-pulse" aria-hidden="true" />
              <span>Built Exclusively for Business Brokers &amp; M&amp;A Advisors</span>
            </div>

            {/* Consistent Heading */}
            <h1 id="hero-heading" className="mb-4 text-ink-navy text-3xl sm:text-4xl lg:text-5xl font-bold font-fraunces leading-[1.15] tracking-tight">
              Deal flow built on <span className="text-brass">diligence</span>, not guesswork.
            </h1>

            {/* Consistent Subtitle */}
            <p className="text-base md:text-lg text-slate mb-7 max-w-[60ch] leading-relaxed font-public-sans">
              Elite Scholars researches, vets, and books qualified sellers directly onto your calendar
              &mdash; so every call you take is with a real decision-maker who&apos;s ready to talk.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
              <button
                onClick={onOpenBooking}
                className="btn-primary text-xs sm:text-sm py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span>Book Your Free Strategy Call</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <div className="flex items-center gap-3 px-4 py-2.5 bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-full shadow-xs">
                <div className="w-6 h-6 rounded-full bg-brass/15 text-brass flex items-center justify-center font-bold text-[10px] shrink-0 border border-brass/30">
                  SLA
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-ink-navy font-public-sans leading-none">Written Guarantee</p>
                  <p className="text-[10px] text-slate font-public-sans mt-0.5">Unqualified leads replaced free</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate flex items-center gap-1.5 mb-7">
              <svg className="w-3.5 h-3.5 text-brass shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>No commitment required &mdash; see if we&apos;re the right fit for your brokerage territory.</span>
            </p>

            {/* TRUSTED BY BROKERS AT */}
            <div className="pt-4 border-t border-[rgba(31,39,51,0.1)]">
              <p className="text-[10px] font-bold text-slate/70 uppercase tracking-widest font-public-sans mb-2">
                Trusted By Brokers At
              </p>
              <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-xs font-bold text-slate/75 uppercase font-public-sans">
                {TRUST_LOGOS.map((item, idx) => (
                  <span key={idx} className="flex items-center gap-3.5">
                    <span>{item.name}</span>
                    {idx < TRUST_LOGOS.length - 1 && <span className="text-slate/40 font-normal">&bull;</span>}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Executive Photo + Custom Floating Cards (~52%) */}
          <div className="flex-1 lg:max-w-[52%] relative flex justify-center py-6" aria-label="Executive Advisor & Floating UI Cards" role="region">
            
            {/* Real Executive Studio Photo Showcase */}
            <div className="relative z-10 w-[320px] sm:w-[370px] lg:w-[400px] h-[440px] sm:h-[500px] lg:h-[520px] rounded-[32px] overflow-hidden border-2 border-brass/60 shadow-[0_25px_60px_rgba(26,43,76,0.3)] group">
              <Image
                src="/images/advisor-hero.jpg"
                alt="Executive Business Broker Working on Seller Pipeline"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-navy/90 via-transparent to-transparent" />

              {/* In-Frame Executive Tag */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 bg-ink-navy/90 backdrop-blur-md p-3 rounded-2xl border border-brass/40 text-white flex items-center justify-between shadow-md">
                <div>
                  <p className="text-xs font-bold font-fraunces text-white">David Reynolds</p>
                  <p className="text-[10px] text-paper/70 font-public-sans">Managing Director &bull; Apex Exit Group</p>
                </div>
                <span className="text-[9px] font-bold text-brass bg-brass/20 border border-brass/40 px-2.5 py-0.5 rounded-full font-public-sans">
                  Active Client
                </span>
              </div>
            </div>

            {/* CARD STYLE 1: Left Floating Arch/Speedometer Success Rate Card */}
            <div className="absolute top-6 -left-3 sm:-left-8 z-20 bg-white/95 backdrop-blur-md border border-slate-200/80 p-3.5 rounded-2xl shadow-xl w-44 sm:w-48 text-center text-ink-navy">
              <p className="text-[10px] font-bold text-slate font-public-sans mb-1">
                Diligence SLA Standard
              </p>

              {/* Semi-circular Speedometer Arch Gauge SVG */}
              <div className="relative w-28 h-14 mx-auto mb-0.5 flex flex-col items-center justify-end">
                <svg className="w-full h-full" viewBox="0 0 100 55">
                  <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="10"
                    strokeDasharray="4 3"
                  />
                  <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    fill="none"
                    stroke="#1A2B4C"
                    strokeWidth="10"
                    strokeDasharray="4 3"
                    strokeDashoffset="15"
                  />
                </svg>
                <div className="absolute bottom-0 text-center">
                  <span className="text-base sm:text-lg font-extrabold font-public-sans text-ink-navy leading-none">
                    <AnimatedCounter value="100%" />
                  </span>
                  <p className="text-[8px] font-bold text-slate uppercase tracking-wider">
                    Pre-Qualified
                  </p>
                </div>
              </div>

              {/* Bottom Pill Badge */}
              <div className="mt-1 inline-flex items-center gap-1 px-2 py-0.5 bg-ink-navy/5 border border-ink-navy/15 rounded-full text-[9px] font-bold text-ink-navy">
                <svg className="w-2.5 h-2.5 text-ink-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span>Verified Owners</span>
              </div>
            </div>

            {/* CARD STYLE 2: Center/Right Floating Theme Navy & Gold Bar Chart Card */}
            <div className="absolute top-2 -right-3 sm:-right-8 z-20 bg-ink-navy border border-brass/50 p-3.5 sm:p-4 rounded-2xl shadow-xl w-36 sm:w-40 text-white">
              <p className="text-[9px] font-bold text-brass uppercase tracking-wider mb-2 font-public-sans">
                Seller Call Volume
              </p>
              
              {/* Theme Brass/Navy Gradient Bar Chart */}
              <div className="h-16 w-full flex items-end justify-between gap-1 pt-1">
                <div className="w-full bg-gradient-to-t from-brass/30 to-brass h-[35%] rounded-t-sm" />
                <div className="w-full bg-gradient-to-t from-brass/30 to-brass h-[55%] rounded-t-sm" />
                <div className="w-full bg-gradient-to-t from-brass/30 to-brass h-[75%] rounded-t-sm" />
                <div className="w-full bg-gradient-to-t from-brass/50 to-brass-light h-[100%] rounded-t-sm shadow-md animate-pulse" />
                <div className="w-full bg-gradient-to-t from-brass/30 to-brass h-[85%] rounded-t-sm" />
                <div className="w-full bg-gradient-to-t from-brass/30 to-brass h-[92%] rounded-t-sm" />
              </div>
            </div>

            {/* CARD STYLE 3: Bottom Right Clean Floating Metric Card */}
            <div className="absolute -bottom-4 -right-1 sm:right-2 md:right-4 z-30 bg-white/95 backdrop-blur-md border border-slate-200/80 p-3.5 sm:p-4 rounded-2xl shadow-xl w-50 sm:w-54 text-ink-navy">
              
              {/* Top Floating Pill Badges */}
              <div className="flex items-center justify-between mb-2 gap-1">
                <div className="px-2 py-0.5 bg-brass/10 border border-brass/30 rounded-full flex items-center gap-1 text-[9px] font-bold text-brass-dark">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>+15.6%</span>
                  <span className="text-slate font-medium">Deal Flow</span>
                </div>
              </div>

              {/* Main Metric Section */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-bold text-slate uppercase font-public-sans">
                    Pipeline SDE Value
                  </p>
                  <p className="text-lg sm:text-xl font-extrabold text-ink-navy font-public-sans tracking-tight mt-0.5">
                    $4.2M SDE
                  </p>
                </div>
                <div className="w-6 h-6 rounded-full bg-ink-navy text-brass flex items-center justify-center font-bold text-[10px] shadow-sm border border-brass/40">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              {/* Bottom Year Growth Pill */}
              <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[9px]">
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 font-bold rounded-full border border-emerald-200">
                  ▲ +18.4%
                </span>
                <span className="text-slate font-medium">This Calendar Year</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
