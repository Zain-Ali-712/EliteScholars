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
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-paper overflow-hidden border-b border-[rgba(31,39,51,0.08)]"
    >
      {/* Background financial grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, var(--ink-navy) 0px, var(--ink-navy) 1px, transparent 1px, transparent 56px),
                            repeating-linear-gradient(90deg, var(--ink-navy) 0px, var(--ink-navy) 1px, transparent 1px, transparent 56px)`,
        }}
      />

      <div className="container-main relative">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">

          {/* Left Column: Copy (~50%) */}
          <div className="flex-1 lg:max-w-[50%]">
            
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-brass/10 border border-brass/30 rounded-full mb-6 shadow-xs">
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
                className="btn-primary text-base py-4 px-8 shadow-md hover:shadow-lg transition-transform active:scale-95"
              >
                Book Your Free Strategy Call &rarr;
              </button>

              <div className="flex items-center gap-3 px-4 py-3 bg-white panel-border rounded-sm shadow-xs">
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

          {/* Right Column: Mobile Device & Floating Glassmorphic Cards (~50%) */}
          <div className="flex-1 lg:max-w-[50%] relative flex justify-center py-6" aria-label="Live Mobile Calendar & Booking Visual" role="region">
            
            {/* Background Circular Rotating Text Badge */}
            <div className="absolute top-2 left-4 md:left-12 w-32 h-32 opacity-70 pointer-events-none z-0 animate-[spin_24s_linear_infinite]">
              <svg viewBox="0 0 100 100" width="120" height="120">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text fontSize="7.2" fill="#B8894F" fontWeight="700" letterSpacing="1.2">
                  <textPath href="#circlePath">
                    • ELITE SCHOLARS • PRE-QUALIFIED DEAL FLOW •
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Main Phone Device Mockup Frame */}
            <div className="relative z-10 w-[290px] sm:w-[320px] bg-[#090D16] p-3.5 rounded-[40px] border-[5px] border-[#1C2536] shadow-2xl transition-transform hover:scale-[1.01]">
              
              {/* Phone Top Notch / Speaker */}
              <div className="w-32 h-4 bg-[#1C2536] mx-auto rounded-b-xl mb-3 flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#090D16]" />
                <span className="w-8 h-1 bg-[#090D16] rounded-full" />
              </div>

              {/* Screen Content: Business Brokerage Advisory App */}
              <div className="bg-[#0C1322] rounded-[28px] overflow-hidden border border-white/10 text-white font-public-sans pb-4">
                
                {/* App Top Bar */}
                <div className="px-4 py-3 bg-[#070B14] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-xs bg-brass text-ink-navy flex items-center justify-center font-bold text-[10px]">
                      ES
                    </div>
                    <span className="text-xs font-bold text-white font-fraunces">
                      Elite Scholars Advisory
                    </span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* Main Appointment Display inside Screen */}
                <div className="p-4 space-y-3">
                  
                  {/* Status Banner */}
                  <div className="flex items-center justify-between text-[11px] text-paper/70 bg-white/5 p-2 rounded-xs border border-white/10">
                    <span>Upcoming Seller Meeting</span>
                    <span className="text-brass font-bold">100% Vetted</span>
                  </div>

                  {/* Confirmed Seller Card */}
                  <div className="bg-[#121B2D] p-3.5 rounded-sm border border-brass/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-brass uppercase bg-brass/10 px-2 py-0.5 rounded-xs border border-brass/25">
                        Decision-Maker Confirmed
                      </span>
                      <span className="text-[11px] text-paper/60">Tomorrow 10:00 AM</span>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-white font-fraunces">
                        Precision CNC Machining Corp
                      </p>
                      <p className="text-xs text-paper/80 font-medium">
                        Industrial Mfg &bull; <span className="text-brass font-bold">$4.2M Rev</span>
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-paper/70">
                      <span>SDE: $850K</span>
                      <span className="text-emerald-400 font-semibold">&check; Valuation Requested</span>
                    </div>
                  </div>

                  {/* Mini Deal Flow Acceleration Chart inside Phone */}
                  <div className="bg-[#090E1A] p-3 rounded-sm border border-white/10">
                    <div className="flex items-center justify-between text-[11px] mb-1.5">
                      <span className="text-paper/70 font-semibold">Deal Volume Growth</span>
                      <span className="text-brass font-bold">+340%</span>
                    </div>
                    <div className="h-12 w-full relative">
                      <svg className="w-full h-full" viewBox="0 0 200 40" preserveAspectRatio="none">
                        <path d="M0 35 Q40 30, 80 20 T140 10 T200 3 L200 40 L0 40 Z" fill="rgba(184,137,79,0.2)" />
                        <path d="M0 35 Q40 30, 80 20 T140 10 T200 3" fill="none" stroke="#B8894F" strokeWidth="2" />
                        <circle cx="140" cy="10" r="3" fill="#B8894F" />
                        <circle cx="200" cy="3" r="4" fill="#FFFFFF" stroke="#B8894F" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>

                  {/* Calendar Sync Button */}
                  <div className="pt-1">
                    <button className="w-full py-2 bg-brass text-ink-navy text-xs font-bold rounded-xs text-center shadow-xs">
                      Confirmed Calendar Sync &rarr;
                    </button>
                  </div>

                </div>

              </div>
            </div>

            {/* FLOATING GLASSMORPHIC CARD 1: Top-Right Progress Badge (The Effect from Reference Image) */}
            <div className="absolute top-4 -right-2 sm:right-0 md:right-4 z-20 backdrop-blur-md bg-ink-navy/85 border border-brass/50 p-3.5 rounded-2xl shadow-2xl flex items-center gap-3.5 text-white max-w-[190px] animate-pipeline-in">
              {/* Circular Progress Ring SVG */}
              <div className="relative w-11 h-11 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-white/10"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-brass"
                    strokeDasharray="100, 100"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="absolute text-[11px] font-extrabold text-white">100%</span>
              </div>

              <div>
                <p className="text-xs font-bold text-white font-public-sans leading-tight">
                  <AnimatedCounter value="100%" /> Pre-Qualified
                </p>
                <p className="text-[10px] text-paper/70 font-public-sans">
                  SDE &amp; Owner Verified
                </p>
              </div>
            </div>

            {/* FLOATING GLASSMORPHIC CARD 2: Bottom-Left Live Booking Card (Gradient Credit/Calendar Card Style from Reference Image) */}
            <div className="absolute -bottom-4 -left-2 sm:left-2 md:left-6 z-20 bg-gradient-to-tr from-[#0C1322] via-[#152033] to-[#B8894F]/25 border border-brass/50 p-4 rounded-2xl shadow-2xl backdrop-blur-lg w-64 text-white animate-pipeline-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-brass/20 text-brass flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-brass uppercase tracking-wider font-public-sans">
                    Live Appointment
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>

              <p className="text-xs font-bold text-white font-fraunces mb-0.5 truncate">
                LogiTech Regional Fleet
              </p>
              <p className="text-[11px] text-paper/70 font-public-sans mb-2">
                Transportation &bull; <span className="text-brass font-semibold">$6.8M Rev</span>
              </p>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px]">
                <span className="font-semibold text-paper/90">Thursday, 2:30 PM</span>
                <span className="px-2 py-0.5 bg-brass text-ink-navy font-bold rounded-xs">
                  Booked
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
