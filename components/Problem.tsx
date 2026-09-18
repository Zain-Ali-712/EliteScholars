import { COMPARISON_LEFT, COMPARISON_RIGHT } from '@/data/config'

export default function Problem() {
  return (
    <section id="problem" className="py-16 md:py-20 bg-gradient-to-b from-amber-100/35 via-[#FAFBFD] to-[#F7F9FD] border-b border-slate-200/80 relative overflow-hidden">
      {/* Warm Orange Ambient Glow at Top */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-48 bg-gradient-to-b from-amber-300/25 via-orange-200/10 to-transparent rounded-full blur-3xl pointer-events-none" 
      />

      {/* Subtle Geometric Grid Pattern & Ambient Glows */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-50" 
      />
      <div aria-hidden="true" className="absolute -left-20 top-1/4 w-80 h-80 bg-rose-400/10 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -right-20 bottom-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        
        {/* Centered Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-50 text-rose-600 border border-rose-200 shadow-xs mb-3.5">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span>The Pipeline Reality</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Spend Time Closing, <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">Not Chasing</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-medium">
            Most brokers spend up to 70% of their workweek chasing bad contact sheets instead of speaking to motivated sellers ready for a valuation.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Redesigned Light & Bright Visual Infographic Card (~5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-white via-blue-50/30 to-blue-50/50 rounded-3xl p-6 sm:p-8 border-2 border-blue-200/80 shadow-xl shadow-blue-500/5 flex flex-col justify-between relative overflow-hidden group">
            
            <div>
              {/* Card Header Pill */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider bg-blue-100/80 border border-blue-200 px-3 py-1 rounded-full">
                  Broker Time Audit
                </span>
                <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Industry Benchmark
                </span>
              </div>

              {/* Big Stat Hero */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-none tracking-tight">
                    70%
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-rose-600 uppercase tracking-wider">
                    Lost Hours
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Of a typical broker&apos;s week is wasted navigating unvetted contact lists and unmotivated leads.
                </p>
              </div>

              {/* Visual Breakdown Bars in Bright Theme */}
              <div className="space-y-3.5 bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm">
                <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                  Typical Weekly Time Breakdown
                </p>

                {/* Bar 1: Cold Lists */}
                <div>
                  <div className="flex justify-between text-xs mb-1 font-medium">
                    <span className="text-slate-600">Cold calling dead contact lists</span>
                    <span className="text-rose-500 font-bold">45%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-500 rounded-full w-[45%]" />
                  </div>
                </div>

                {/* Bar 2: Gatekeepers & Voicemails */}
                <div>
                  <div className="flex justify-between text-xs mb-1 font-medium">
                    <span className="text-slate-600">Gatekeepers &amp; unmotivated owners</span>
                    <span className="text-amber-500 font-bold">25%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full w-[25%]" />
                  </div>
                </div>

                {/* Bar 3: Actual Listing Closing */}
                <div>
                  <div className="flex justify-between text-xs mb-1 font-medium">
                    <span className="text-blue-700 font-bold">Closing qualified business listings</span>
                    <span className="text-blue-600 font-bold">Only 30%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-full w-[30%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Benefit Highlight Box */}
            <div className="mt-6 pt-4 border-t border-blue-100 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">100% Pre-Screened</p>
                  <p className="text-[10px] text-slate-500 font-medium">Real owners ready for valuation</p>
                </div>
              </div>
              <span className="text-[11px] font-extrabold text-blue-600 uppercase shrink-0">
                0 Cold Calls
              </span>
            </div>

          </div>

          {/* Right Column: Copy & The Reality Gap (~7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="mb-5">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                This isn&apos;t an effort problem. It is a targeting problem.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium mb-3">
                When prospect research and verification are handled properly before outreach begins, your calendar fills exclusively with qualified decision-makers ready for serious listing conversations.
              </p>
            </div>

            {/* Reality Gap Comparison Cards */}
            <div className="bg-[#F8FAFF] rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm mb-4">
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  The Pipeline Reality Gap
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Left Card: Other Lead Services */}
                <div className="p-4 bg-white border border-rose-200 rounded-2xl shadow-xs">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                    <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider">
                      Other Lead Services
                    </span>
                    <span className="text-[10px] font-bold text-rose-500 bg-rose-50 px-2 py-0.5 rounded-full">
                      Low Conversion
                    </span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-2.5 font-medium">
                    {COMPARISON_LEFT.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Card: Elite Scholars */}
                <div className="p-4 bg-white border-2 border-blue-400 rounded-2xl shadow-md relative">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                    <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
                      Elite Scholars
                    </span>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                      High Quality
                    </span>
                  </div>
                  <ul className="text-xs text-slate-800 space-y-2.5 font-semibold">
                    {COMPARISON_RIGHT.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* Bottom Summary Strip */}
            <div className="p-3.5 sm:p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl shadow-md flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0 border border-white/25">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                Brokers spend 100% of their time closing listings instead of chasing cold names.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
