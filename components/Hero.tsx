'use client'

import Image from 'next/image'
import { SITE, PIPELINE_MOCK } from '@/data/config'
import AnimatedCounter from '@/components/AnimatedCounter'

interface HeroProps {
  onOpenBooking: () => void
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative pt-28 pb-16 md:pt-36 md:pb-28 bg-paper overflow-hidden border-b border-[rgba(31,39,51,0.08)]"
    >
      {/* Background financial grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, var(--ink-navy) 0px, var(--ink-navy) 1px, transparent 1px, transparent 56px),
                            repeating-linear-gradient(90deg, var(--ink-navy) 0px, var(--ink-navy) 1px, transparent 1px, transparent 56px)`,
        }}
      />

      <div className="container-main relative">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">

          {/* Left Column: Copy (~55%) */}
          <div className="flex-1 lg:max-w-[55%]">
            
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-brass/10 border border-brass/30 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-brass animate-pulse" aria-hidden="true" />
              <span className="font-public-sans text-xs font-semibold text-[#8B6332] tracking-wide uppercase">
                Built Exclusively for Business Brokers &amp; M&amp;A Advisors
              </span>
            </div>

            <h1 id="hero-heading" className="mb-6 text-ink-navy text-4xl sm:text-5xl lg:text-6xl font-bold font-fraunces leading-[1.1] tracking-tight">
              Deal flow built on diligence, not guesswork.
            </h1>

            <p className="text-lg md:text-xl text-charcoal/90 mb-8 max-w-[62ch] leading-relaxed font-public-sans">
              Elite Scholars researches, vets, and books qualified sellers directly onto your calendar
              &mdash; so every call you take is with a real decision-maker who&apos;s ready to talk.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <button
                onClick={onOpenBooking}
                className="btn-primary text-base py-4 px-8 shadow-md hover:shadow-lg"
              >
                Book Your Free Strategy Call
              </button>

              <div className="flex items-center gap-3 px-4 py-3 bg-white panel-border rounded-sm">
                <div className="w-8 h-8 rounded-full bg-brass/15 text-brass flex items-center justify-center font-bold text-xs shrink-0 border border-brass/30">
                  SLA
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-ink-navy font-public-sans">Written Guarantee</p>
                  <p className="text-[11px] text-slate font-public-sans">Unqualified leads replaced free</p>
                </div>
              </div>
            </div>

            <p className="text-xs md:text-sm text-slate flex items-center gap-2">
              <svg className="w-4 h-4 text-brass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No commitment required &mdash; see if we&apos;re the right fit for your brokerage territory.
            </p>
          </div>

          {/* Right Column: Institutional Dynamic Dashboard (~45%) */}
          <div className="flex-1 lg:max-w-[45%]" aria-label="Sample verified seller pipeline" role="region">
            <div className="panel-border bg-ink-navy text-white overflow-hidden rounded-sm shadow-xl relative">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#070B14]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brass animate-ping" aria-hidden="true" />
                  <span className="font-public-sans text-xs font-semibold text-white uppercase tracking-wider">
                    Verified Seller Pipeline
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-brass bg-brass/10 border border-brass/30 px-2.5 py-0.5 rounded-xs font-public-sans">
                  Live Ledger
                </span>
              </div>

              {/* Top Graph Visual: Deal Flow Trend */}
              <div className="p-5 border-b border-white/10 bg-gradient-to-b from-[#0C1322] to-[#10192C]">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-semibold text-paper/70 font-public-sans">
                    Monthly Deal Flow Acceleration
                  </p>
                  <div className="text-xs font-bold text-brass font-public-sans flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    +340% Growth
                  </div>
                </div>

                {/* SVG Graph Graphic */}
                <div className="h-20 w-full relative">
                  <svg className="w-full h-full" viewBox="0 0 300 70" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#B8894F" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#B8894F" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 60 Q40 50, 80 40 T160 25 T240 15 T300 5 L300 70 L0 70 Z"
                      fill="url(#chartGradient)"
                    />
                    <path
                      d="M0 60 Q40 50, 80 40 T160 25 T240 15 T300 5"
                      fill="none"
                      stroke="#B8894F"
                      strokeWidth="2.5"
                    />
                    {/* Glowing dots */}
                    <circle cx="80" cy="40" r="3.5" fill="#B8894F" />
                    <circle cx="160" cy="25" r="3.5" fill="#B8894F" />
                    <circle cx="240" cy="15" r="3.5" fill="#B8894F" />
                    <circle cx="300" cy="5" r="4.5" fill="#FFFFFF" stroke="#B8894F" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Middle Section: Image Thumbnail & Active Appointments */}
              <div className="relative h-28 w-full overflow-hidden border-b border-white/10">
                <Image
                  src="/images/hero-dashboard.jpg"
                  alt="Elite Scholars Brokerage Analytics Dashboard"
                  fill
                  className="object-cover opacity-30 hover:opacity-40 transition-opacity"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#10192C] via-transparent to-[#10192C]" />
                <div className="absolute inset-0 flex items-center justify-between px-5 z-10">
                  <div>
                    <p className="text-xs font-semibold text-brass font-public-sans uppercase">Active Campaign</p>
                    <p className="text-sm font-bold text-white font-fraunces">Lower-Middle-Market Sellers</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-extrabold text-white font-public-sans">
                      <AnimatedCounter value="14" />
                    </p>
                    <p className="text-[10px] text-paper/70 font-public-sans uppercase">Qualified Calls Booked</p>
                  </div>
                </div>
              </div>

              {/* Appointment rows */}
              <div className="divide-y divide-white/10 bg-[#0C1322]">
                {PIPELINE_MOCK.map((appt, i) => (
                  <div
                    key={i}
                    className="pipeline-row px-5 py-3.5 hover:bg-white/5 transition-colors"
                    style={{ animationDelay: `${0.2 + i * 0.15}s` }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="font-public-sans font-semibold text-xs text-white mb-0.5 tracking-tight">
                          {appt.name}
                        </p>
                        <p className="font-public-sans text-[11px] text-paper/60">
                          {appt.industry} &bull; <span className="text-brass font-medium">{appt.revenue}</span>
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-public-sans text-[11px] font-semibold text-paper/90 mb-1">
                          {appt.time}
                        </p>
                        <span
                          className="inline-block px-2 py-0.5 text-[9px] font-semibold font-public-sans rounded-xs"
                          style={{
                            background: 'rgba(184,137,79,0.15)',
                            color: '#D4A359',
                            border: '1px solid rgba(184,137,79,0.3)',
                          }}
                        >
                          {appt.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Bar */}
              <div className="px-5 py-3 bg-[#070B14] flex items-center justify-between">
                <p className="font-public-sans text-[11px] text-paper/60">
                  Pre-screened revenue, ownership &amp; authority.
                </p>
                <span className="text-[11px] font-semibold text-brass font-public-sans flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brass inline-block" />
                  100% Vetted SLA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
