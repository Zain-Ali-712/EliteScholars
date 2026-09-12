'use client'

import Image from 'next/image'
import { SITE } from '@/data/config'
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
            </div>

            <p className="text-xs text-slate flex items-center gap-1.5 mb-7">
              <svg className="w-3.5 h-3.5 text-brass shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>No commitment required &mdash; see if we&apos;re the right fit for your brokerage territory.</span>
            </p>


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

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
