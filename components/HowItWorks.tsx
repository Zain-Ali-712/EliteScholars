import Image from 'next/image'
import { PROCESS_STEPS } from '@/data/config'

export default function HowItWorks() {
  const stepTags = [
    'Step 1',
    'Step 2',
    'Step 3',
  ]

  const stepIcons = [
    // Step 1: Target / Adjustments icon
    <svg key="1" className="w-5 h-5 text-brass" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>,
    // Step 2: Lightning / Live Outreach icon
    <svg key="2" className="w-5 h-5 text-brass" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>,
    // Step 3: Calendar / Verified Booking icon
    <svg key="3" className="w-5 h-5 text-brass" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>,
  ]

  return (
    <section id="how-it-works" className="py-12 md:py-16 bg-gradient-to-b from-white via-slate-50/60 to-white border-b border-[rgba(31,39,51,0.08)] relative overflow-hidden">
      {/* Background ambient radial glow effect */}
      <div aria-hidden="true" className="absolute -left-24 top-1/3 w-72 h-72 bg-brass/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">

        {/* Section Header */}
        <div className="max-w-2xl mb-10 text-left">
          <div className="agency-pill mb-3">
            <span className="w-2 h-2 rounded-full bg-brass" aria-hidden="true" />
            <span>Our Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-fraunces text-ink-navy mb-2.5">
            How we <span className="text-brass">build</span> your pipeline
          </h2>
          <p className="text-sm md:text-base text-slate font-public-sans">
            Here&apos;s how we get qualified sellers onto your calendar, step by step.
          </p>
        </div>

        {/* Outer Container Frame for Roadmap */}
        <div className="bg-[#F4F6F9] rounded-[28px] p-4 sm:p-6 border border-slate-200/60 shadow-xs mb-8">

          {/* 3 Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 relative group flex flex-col justify-between overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brass via-brass-light to-brass opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Background Watermark Step Number */}
                <span className="text-6xl font-extrabold font-fraunces text-slate-100 absolute right-4 top-2 select-none pointer-events-none group-hover:text-brass/10 transition-colors">
                  0{step.step}
                </span>

                <div>
                  {/* Step Header: Icon Badge + Phase Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-ink-navy text-brass flex items-center justify-center border border-brass/40 shadow-xs group-hover:scale-105 transition-transform">
                      {stepIcons[idx]}
                    </div>
                    <span className="text-[10px] font-bold text-brass uppercase tracking-wider bg-brass/10 border border-brass/20 px-2.5 py-1 rounded-full font-public-sans">
                      {stepTags[idx]}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base sm:text-lg font-bold text-ink-navy mb-2 font-fraunces relative z-10 group-hover:text-brass-dark transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-slate leading-relaxed font-public-sans mb-5 relative z-10 min-h-[52px]">
                    {step.description}
                  </p>
                </div>

                {/* Step Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-public-sans relative z-10">
                  <span className="font-bold text-ink-navy flex items-center gap-1.5 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Step 0{step.step}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Callout Banner - Sleek Dark Pill Card */}
        <div className="p-4 sm:p-5 bg-ink-navy text-white rounded-2xl border border-brass/30 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
          <div aria-hidden="true" className="absolute -right-16 -top-16 w-36 h-36 bg-brass/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center gap-3.5 relative z-10">
            <div className="w-10 h-10 relative rounded-xl overflow-hidden shrink-0 border border-brass/40 shadow-xs">
              <Image
                src="/images/roadmap-team.jpg"
                alt="M&A Advisory Deal Team"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white font-fraunces">
                Ready to review your territory&apos;s seller availability?
              </p>
              <p className="text-[11px] sm:text-xs text-paper/75 font-public-sans">
                Our onboarding research team limits active broker capacity per geographic market to maintain pipeline quality.
              </p>
            </div>
          </div>

          <a href="#cta" className="btn-primary text-xs py-2.5 px-5 shrink-0 rounded-full flex items-center gap-1.5 shadow-md hover:shadow-lg relative z-10">
            <span>Check Territory Availability</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
