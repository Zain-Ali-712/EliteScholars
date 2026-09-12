'use client'

import { PIPELINE_MOCK } from '@/data/config'

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
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-14">

          {/* Left Column: Copy (~50%) */}
          <div className="flex-1 lg:max-w-[50%]">
            
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

            {/* Value Highlights */}
            <div className="space-y-3 mb-7 font-public-sans">
              <div className="flex items-center gap-3 text-sm text-ink-navy font-semibold">
                <div className="w-5 h-5 rounded-full bg-brass/20 text-brass-dark flex items-center justify-center shrink-0 border border-brass/40">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Direct calendar integration &mdash; zero manual outreach needed</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-ink-navy font-semibold">
                <div className="w-5 h-5 rounded-full bg-brass/20 text-brass-dark flex items-center justify-center shrink-0 border border-brass/40">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Only verified business owners with $500K to $20M+ revenue</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-ink-navy font-semibold">
                <div className="w-5 h-5 rounded-full bg-brass/20 text-brass-dark flex items-center justify-center shrink-0 border border-brass/40">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Territory exclusivity &mdash; 1 active broker partner per territory</span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
              <button
                onClick={onOpenBooking}
                className="btn-primary text-xs sm:text-sm py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Book Your Free Strategy Call</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            <p className="text-xs text-slate flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-brass shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>No commitment required &mdash; see if we&apos;re the right fit for your brokerage territory.</span>
            </p>

          </div>

          {/* Right Column: Static Calendar & Pipeline Performance Dashboard Graphic (~50%) */}
          <div className="flex-1 lg:max-w-[50%] flex justify-center py-2">
            
            <div className="w-full max-w-[500px] bg-white rounded-[28px] border-2 border-brass/40 shadow-[0_25px_60px_rgba(26,43,76,0.18)] p-5 sm:p-6 relative overflow-hidden backdrop-blur-xs group">
              
              {/* Subtle ambient light in card */}
              <div aria-hidden="true" className="absolute -right-20 -top-20 w-48 h-48 bg-brass/10 rounded-full blur-2xl pointer-events-none" />

              {/* 1. Header Bar: Advisor Calendar Title & Live Sync Status */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-ink-navy text-brass flex items-center justify-center border border-brass/40 shadow-xs shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold font-fraunces text-ink-navy leading-tight">
                      Broker Pipeline Schedule
                    </h3>
                    <p className="text-[11px] text-slate font-public-sans">
                      Live Calendar &bull; Week of Sep 15–19
                    </p>
                  </div>
                </div>

                {/* Live Sync Status Pill */}
                <div className="text-right">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold font-public-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Synced
                  </span>
                  <p className="text-[9px] text-slate-400 font-public-sans mt-0.5">Google / Outlook</p>
                </div>
              </div>

              {/* 2. Mini Graphs & Pipeline Metrics Row */}
              <div className="grid grid-cols-2 gap-3 mb-4 relative z-10">
                
                {/* Metric A: Appointments Volume + Bar Graph */}
                <div className="p-3 bg-[#F8FAFC] rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-public-sans">
                      Booked Meetings
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600 font-public-sans">
                      ▲ +27%
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="text-2xl font-bold font-fraunces text-ink-navy">14</span>
                    <span className="text-[10px] text-slate font-public-sans">this month</span>
                  </div>

                  {/* Static Mini SVG Bar Chart */}
                  <div className="flex items-end justify-between gap-1.5 h-8 pt-1 px-1 border-t border-slate-200/60">
                    <div className="w-full bg-slate-200 rounded-t-xs h-[40%]" title="Week 1" />
                    <div className="w-full bg-slate-300 rounded-t-xs h-[60%]" title="Week 2" />
                    <div className="w-full bg-ink-navy/70 rounded-t-xs h-[75%]" title="Week 3" />
                    <div className="w-full bg-brass rounded-t-xs h-[100%]" title="Week 4" />
                    <div className="w-full bg-emerald-500 rounded-t-xs h-[90%]" title="Projected" />
                  </div>
                </div>

                {/* Metric B: Pipeline SDE Value + Sparkline Graph */}
                <div className="p-3 bg-[#F8FAFC] rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-public-sans">
                      Pipeline SDE
                    </span>
                    <span className="text-[10px] font-bold text-brass uppercase font-public-sans">
                      Verified
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="text-2xl font-bold font-fraunces text-ink-navy">$4.2M</span>
                    <span className="text-[10px] text-slate font-public-sans">active deals</span>
                  </div>

                  {/* Static Mini SVG Sparkline Trend Graph */}
                  <div className="h-8 pt-1 flex items-center border-t border-slate-200/60">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 24" fill="none">
                      <path
                        d="M0 20 L22 16 L45 18 L68 9 L90 4 L100 2"
                        stroke="var(--brass)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <circle cx="100" cy="2" r="3" fill="#1A2B4C" stroke="var(--brass)" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>

              </div>

              {/* 3. Static Weekly Calendar Strip */}
              <div className="mb-4 relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ink-navy font-public-sans">
                    Weekly Schedule
                  </span>
                  <span className="text-[10px] text-slate font-public-sans">
                    September 2026
                  </span>
                </div>

                <div className="grid grid-cols-5 gap-1.5 bg-[#FAF6ED] p-1.5 rounded-xl border border-brass/25">
                  <div className="p-1.5 rounded-lg text-center bg-white border border-slate-200/60">
                    <p className="text-[9px] font-bold text-slate-500 uppercase font-public-sans">Mon 15</p>
                    <div className="w-1.5 h-1.5 rounded-full bg-brass mx-auto mt-1" />
                  </div>
                  <div className="p-1.5 rounded-lg text-center bg-ink-navy text-white border border-ink-navy shadow-xs">
                    <p className="text-[9px] font-bold text-brass uppercase font-public-sans">Tue 16</p>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mx-auto mt-1 animate-pulse" />
                  </div>
                  <div className="p-1.5 rounded-lg text-center bg-white border border-slate-200/60">
                    <p className="text-[9px] font-bold text-slate-500 uppercase font-public-sans">Wed 17</p>
                    <div className="w-1.5 h-1.5 rounded-full bg-brass mx-auto mt-1" />
                  </div>
                  <div className="p-1.5 rounded-lg text-center bg-white border border-slate-200/60">
                    <p className="text-[9px] font-bold text-slate-500 uppercase font-public-sans">Thu 18</p>
                    <div className="w-1.5 h-1.5 rounded-full bg-brass mx-auto mt-1" />
                  </div>
                  <div className="p-1.5 rounded-lg text-center bg-white border border-slate-200/60">
                    <p className="text-[9px] font-bold text-slate-500 uppercase font-public-sans">Fri 19</p>
                    <div className="w-1.5 h-1.5 rounded-full bg-brass mx-auto mt-1" />
                  </div>
                </div>
              </div>

              {/* 4. Booked Seller Meetings Schedule List */}
              <div className="space-y-2.5 relative z-10 mb-4">
                {PIPELINE_MOCK.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-brass/50 transition-colors flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-ink-navy/5 text-ink-navy flex items-center justify-center font-bold text-xs font-fraunces border border-slate-200/60 shrink-0">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-ink-navy font-public-sans leading-snug">
                          {item.name}
                        </h4>
                        <p className="text-[10px] text-slate font-public-sans">
                          {item.revenue} &bull; <span className="text-slate-600">{item.industry}</span>
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="inline-block px-2 py-0.5 rounded-md bg-brass/10 border border-brass/25 text-brass-dark text-[9px] font-bold font-public-sans">
                        {item.time}
                      </span>
                      <p className="text-[9px] text-emerald-600 font-semibold font-public-sans mt-0.5 flex items-center justify-end gap-1">
                        <span className="w-1 h-1 rounded-full bg-emerald-500" />
                        Confirmed
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 5. Bottom Verification Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate font-public-sans relative z-10">
                <span className="flex items-center gap-1.5 font-medium text-ink-navy">
                  <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Direct Calendar Sync (Google &amp; Outlook)
                </span>
                <span className="font-bold text-brass uppercase">
                  100% Pre-Screened
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
