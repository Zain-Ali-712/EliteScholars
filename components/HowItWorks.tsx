import { PROCESS_STEPS } from '@/data/config'

export default function HowItWorks() {
  const stepThemes = [
    {
      pill: 'bg-blue-50 text-blue-600 border-blue-200',
      numBg: 'bg-blue-600 text-white',
      borderHover: 'hover:border-blue-300 hover:shadow-blue-500/10',
      tag: 'Step 01',
    },
    {
      pill: 'bg-purple-50 text-purple-600 border-purple-200',
      numBg: 'bg-purple-600 text-white',
      borderHover: 'hover:border-purple-300 hover:shadow-purple-500/10',
      tag: 'Step 02',
    },
    {
      pill: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      numBg: 'bg-emerald-600 text-white',
      borderHover: 'hover:border-emerald-300 hover:shadow-emerald-500/10',
      tag: 'Step 03',
    },
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-gradient-to-b from-[#F8FAFF] via-white to-[#F8FAFF] border-b border-slate-200/80 relative overflow-hidden">
      {/* Playful Ambient Glows */}
      <div aria-hidden="true" className="absolute -left-20 top-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -right-20 bottom-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">

        {/* Centered Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-200 shadow-xs mb-3.5">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Our 3-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            How We <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Build</span> Your Pipeline
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-medium">
            A simple, predictable done-for-you workflow engineered to put qualified sellers directly on your calendar.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-12">
          {PROCESS_STEPS.map((step, idx) => {
            const theme = stepThemes[idx]
            return (
              <div
                key={step.step}
                className={`bg-white rounded-3xl p-7 sm:p-8 border-2 border-slate-200/80 shadow-sm hover:shadow-xl ${theme.borderHover} transition-all duration-300 relative group flex flex-col justify-between`}
              >
                <div>
                  {/* Top Step Number Badge */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${theme.numBg} font-extrabold text-base flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      0{step.step}
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border ${theme.pill}`}>
                      {theme.tag}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Step Footer Status */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Phase 0{step.step} Active
                  </span>
                  <span>100% Done-For-You</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Callout Banner - Light & Playful Gradient Card */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-3xl shadow-xl shadow-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div aria-hidden="true" className="absolute -right-20 -top-20 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center gap-4 relative z-10 text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/15 text-white flex items-center justify-center shrink-0 border border-white/25 shadow-sm">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-base sm:text-lg font-bold text-white leading-snug">
                Ready to review seller availability in your market?
              </p>
              <p className="text-xs sm:text-sm text-blue-100 mt-1 font-medium">
                We limit broker capacity per territory to guarantee outreach exclusivity and high response rates.
              </p>
            </div>
          </div>

          <a
            href="#cta"
            className="w-full md:w-auto px-6 py-3.5 bg-white text-blue-600 font-bold text-sm rounded-full hover:bg-blue-50 transition-all shadow-md flex items-center justify-center gap-2 shrink-0 relative z-10"
          >
            <span>Check Your Territory</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
