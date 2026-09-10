import Image from 'next/image'

export default function Problem() {
  return (
    <section id="problem" className="py-12 md:py-16 bg-gradient-to-b from-white via-[#F8FAFC] to-white border-b border-[rgba(31,39,51,0.08)] relative overflow-hidden">
      {/* Background radial glow effect */}
      <div aria-hidden="true" className="absolute -left-20 top-1/4 w-72 h-72 bg-brass/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        
        {/* 2-Column Layout matching Dribbble reference media_1789041758270.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Visual Image Container stretched to match right column height (~5 Cols) */}
          <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-full rounded-[28px] overflow-hidden border border-slate-200/80 shadow-lg group">
            <Image
              src="/images/problem-analytics.jpg"
              alt="M&A Advisory Diligence Strategy Session"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-navy/80 via-transparent to-transparent" />

            {/* Top Floating Glass Badge */}
            <div className="absolute top-5 left-5 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 text-ink-navy flex items-center gap-3 shadow-md z-10">
              <div className="w-8 h-8 rounded-xl bg-ink-navy text-brass flex items-center justify-center shrink-0 shadow-xs">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-ink-navy font-public-sans leading-none">70% Time Saved</p>
                <p className="text-[10px] text-slate font-public-sans mt-0.5">Zero cold outreach required</p>
              </div>
            </div>

            {/* Bottom Floating Dark Glass Badge */}
            <div className="absolute bottom-5 right-5 p-3.5 rounded-2xl bg-ink-navy/85 backdrop-blur-md border border-white/20 text-white flex items-center gap-3 shadow-xl z-10">
              <div className="w-9 h-9 rounded-xl bg-brass/20 text-brass flex items-center justify-center shrink-0 border border-brass/40">
                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-brass uppercase tracking-wider font-public-sans leading-none">100% Diligence</p>
                <p className="text-[10px] text-white/90 font-medium font-public-sans mt-0.5">Pre-screened seller authority</p>
              </div>
            </div>
          </div>

          {/* Right Column: Copy, Problem Breakdown & Reality Gap (~7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="agency-pill mb-3">
                <span className="w-2 h-2 rounded-full bg-brass" aria-hidden="true" />
                <span>Industry Bottleneck Analysis</span>
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
                  This isn&apos;t an effort problem. It is a research and targeting problem. When prospect verification is handled with institutional rigor before outreach begins, your calendar fills exclusively with qualified decision-makers ready for immediate valuation conversations.
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
                <span className="text-[10px] font-bold text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-public-sans">
                  Direct Comparison
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Legacy approach - Clean White Card */}
                <div className="p-4 bg-white border border-slate-200/90 rounded-xl shadow-xs hover:shadow-sm transition-shadow">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                    <span className="text-[11px] font-bold text-slate-700 font-public-sans uppercase tracking-wider">
                      Generic Lead Services
                    </span>
                    <span className="text-[9px] font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full font-public-sans">
                      High Churn
                    </span>
                  </div>
                  <ul className="text-[11px] text-slate-600 space-y-2 font-public-sans">
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span>Unverified numbers &amp; dead emails</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span>Zero visibility into history</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span>Calls with non-owners</span>
                    </li>
                  </ul>
                </div>

                {/* Elite Scholars approach - Clean White Card with Brass Accent */}
                <div className="p-4 bg-white border-2 border-brass/50 rounded-xl shadow-xs hover:shadow-sm transition-shadow relative">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                    <span className="text-[11px] font-bold text-ink-navy font-public-sans uppercase tracking-wider">
                      Elite Scholars Diligence Engine
                    </span>
                    <span className="text-[9px] font-bold text-ink-navy bg-brass/20 border border-brass/40 px-2 py-0.5 rounded-full font-public-sans">
                      Written Guarantee
                    </span>
                  </div>
                  <ul className="text-[11px] text-ink-navy space-y-2 font-public-sans font-medium">
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-brass/15 text-brass-dark flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Pre-qualified SDE &amp; revenue</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-brass/15 text-brass-dark flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>100% recorded call transcripts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-brass/15 text-brass-dark flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Direct decision-maker bookings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Summary Strip */}
            <div className="p-3 sm:p-3.5 bg-ink-navy text-white rounded-xl border border-brass/30 flex items-center gap-3 shadow-md">
              <div className="w-8 h-8 relative rounded-lg overflow-hidden shrink-0 border border-brass/40">
                <Image
                  src="/images/problem-diligence.jpg"
                  alt="Financial Diligence Documents"
                  fill
                  className="object-cover"
                />
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
