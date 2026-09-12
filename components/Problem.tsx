export default function Problem() {
  return (
    <section id="problem" className="py-12 md:py-16 bg-gradient-to-b from-white via-[#F8FAFC] to-white border-b border-[rgba(31,39,51,0.08)] relative overflow-hidden">
      {/* Background radial glow effect */}
      <div aria-hidden="true" className="absolute -left-20 top-1/4 w-72 h-72 bg-brass/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        
        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Visual Data Card - Replacing AI image with high-impact Infographic Card (~5 Cols) */}
          <div className="lg:col-span-5 bg-ink-navy text-white rounded-[28px] p-6 sm:p-8 border border-brass/30 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            {/* Subtle background ambient mesh & technical grid */}
            <div aria-hidden="true" className="absolute -right-16 -top-16 w-56 h-56 bg-brass/15 rounded-full blur-3xl pointer-events-none" />
            <div aria-hidden="true" className="absolute -left-16 -bottom-16 w-56 h-56 bg-brass/10 rounded-full blur-3xl pointer-events-none" />
            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="relative z-10">
              {/* Card Header Pill */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold text-brass uppercase tracking-wider bg-brass/15 border border-brass/30 px-3 py-1 rounded-full font-public-sans">
                  Broker Time Audit
                </span>
                <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5 font-public-sans">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Benchmark
                </span>
              </div>

              {/* Big Stat Hero */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl sm:text-6xl font-extrabold font-fraunces text-white leading-none">
                    70%
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-brass font-public-sans uppercase tracking-wider">
                    Lost Hours
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-paper/80 font-public-sans leading-relaxed">
                  Of a typical broker&apos;s workweek is spent chasing unvetted contacts, gatekeepers, and dead-end seller lists.
                </p>
              </div>

              {/* Visual Time Breakdown Graphic */}
              <div className="space-y-3.5 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-xs">
                <p className="text-[11px] font-bold text-paper/90 uppercase tracking-wider font-public-sans">
                  Typical Weekly Time Breakdown
                </p>

                {/* Bar 1: Cold Lists */}
                <div>
                  <div className="flex justify-between text-xs font-public-sans mb-1">
                    <span className="text-paper/75">Cold outreach &amp; bad contact sheets</span>
                    <span className="text-rose-400 font-bold">45%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-400/90 rounded-full w-[45%]" />
                  </div>
                </div>

                {/* Bar 2: Gatekeepers & Voicemails */}
                <div>
                  <div className="flex justify-between text-xs font-public-sans mb-1">
                    <span className="text-paper/75">Gatekeepers &amp; unmotivated owners</span>
                    <span className="text-amber-400 font-bold">25%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400/90 rounded-full w-[25%]" />
                  </div>
                </div>

                {/* Bar 3: Actual Listing Closing */}
                <div>
                  <div className="flex justify-between text-xs font-public-sans mb-1">
                    <span className="text-brass font-bold">Closing qualified business listings</span>
                    <span className="text-brass font-bold">Only 30%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-brass rounded-full w-[30%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Benefit Highlight Box */}
            <div className="relative z-10 mt-6 pt-4 border-t border-white/15 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brass/20 text-brass flex items-center justify-center border border-brass/40 shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-white font-public-sans">100% Checked Leads</p>
                  <p className="text-[10px] text-paper/70 font-public-sans">Direct to verified decision-makers</p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-brass uppercase font-public-sans shrink-0">
                0 Cold Calls
              </span>
            </div>

          </div>

          {/* Right Column: Copy, Problem Breakdown & Reality Gap (~7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="agency-pill mb-3">
                <span className="w-2 h-2 rounded-full bg-brass" aria-hidden="true" />
                <span>The Problem</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-fraunces text-ink-navy mb-3 leading-tight">
                Most of your <span className="text-brass">pipeline time</span> isn&apos;t spent selling.
              </h2>

              {/* Story Paragraphs */}
              <div className="space-y-3 text-xs sm:text-sm text-slate font-public-sans leading-relaxed mb-5">
                <p>
                  Most business brokers lose up to 70% of their week chasing unvetted contact sheets, navigating gatekeepers, and holding initial discovery calls with unmotivated owners who have no real intention to exit.
                </p>
                <p>
                  This isn&apos;t an effort problem. It is a research and targeting problem. When every prospect is properly checked before outreach begins, your calendar fills exclusively with qualified decision-makers ready for immediate valuation conversations.
                </p>
              </div>
            </div>

            {/* Pipeline Reality Gap Framing Box - Pure White Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-md mb-4">
              <div className="flex items-center justify-between gap-2 mb-3.5 pb-2.5 border-b border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider font-public-sans text-ink-navy flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brass" />
                  The Pipeline Reality Gap
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Legacy approach - Clean White Card */}
                <div className="p-4 bg-white border border-slate-200/90 rounded-xl shadow-xs hover:shadow-sm transition-shadow">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                    <span className="text-[11px] font-bold text-slate-700 font-public-sans uppercase tracking-wider">
                      Other Lead Services
                    </span>
                  </div>
                  <ul className="text-[11px] text-slate-600 space-y-2 font-public-sans">
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span>Old contact lists that don&apos;t answer</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span>No idea who you&apos;re actually talking to</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span>Calls with people who can&apos;t say yes</span>
                    </li>
                  </ul>
                </div>

                {/* Elite Scholars approach - Clean White Card with Brass Accent */}
                <div className="p-4 bg-white border-2 border-brass/50 rounded-xl shadow-xs hover:shadow-sm transition-shadow relative">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                    <span className="text-[11px] font-bold text-ink-navy font-public-sans uppercase tracking-wider">
                      Elite Scholars
                    </span>
                  </div>
                  <ul className="text-[11px] text-ink-navy space-y-2 font-public-sans font-medium">
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-brass/15 text-brass-dark flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Leads matched to your exact criteria</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-brass/15 text-brass-dark flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Meetings booked with the actual decision-maker</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-brass/15 text-brass-dark flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Clear tracking so you always know what&apos;s happening</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Summary Strip - Clean Vector Badge Replacing Tiny AI Photo */}
            <div className="p-3 sm:p-3.5 bg-ink-navy text-white rounded-xl border border-brass/30 flex items-center gap-3 shadow-md">
              <div className="w-8 h-8 rounded-lg bg-brass/20 text-brass flex items-center justify-center shrink-0 border border-brass/40 shadow-xs">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-xs font-semibold text-white/90 font-public-sans leading-snug">
                Advisors spend 100% of their time closing listings instead of chasing cold names.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
