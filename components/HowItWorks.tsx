export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      tag: 'QUICK START',
      title: 'Define Your Ideal Seller Profile',
      description:
        'We kick off with a strategy session to lock in your exact target \u2014 revenue range, industry, geography, and owner criteria. Everything is agreed in writing before any outreach begins. No guessing, no grey area.',
      highlight: 'Agreed in Writing Before Outreach',
      // Target / Bullseye icon
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="9" strokeWidth="1.8" stroke="currentColor" />
          <circle cx="12" cy="12" r="5" strokeWidth="1.8" stroke="currentColor" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      num: 2,
      tag: 'FAST ACTIVATION',
      title: 'Your Pipeline Gets Built & Activated',
      description:
        'Using our proprietary multi-channel outreach system, your campaign connects with verified business owners across multiple touchpoints. Every interaction is recorded, tracked, and fully visible through your real-time dashboard.',
      highlight: 'Multi-Channel Verified Outreach',
      // Radio / Broadcast / Signal waves icon
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.5 16.5a5 5 0 010-7m7 0a5 5 0 010 7m-9.5 2.5a8.5 8.5 0 010-12m12 0a8.5 8.5 0 010 12M12 14a2 2 0 100-4 2 2 0 000 4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 16v4" />
        </svg>
      ),
    },
    {
      num: 3,
      tag: 'RESULTS',
      title: 'Confirmed Appointments Land on Your Calendar',
      description:
        'The moment a business owner agrees to talk, the appointment is booked directly on your calendar \u2014 pre-qualified against your agreed criteria and decision-maker confirmed. You just show up and close.',
      highlight: 'Direct to Your Calendar',
      // Calendar checkmark icon
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect x="3" y="4" width="18" height="17" rx="3" strokeWidth="1.8" stroke="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 2v4M8 2v4M3 9h18" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l2 2 4-4" />
        </svg>
      ),
    },
  ]

  const stepThemes = [
    {
      cardBorder: 'border-2 border-blue-200/90 hover:border-blue-500 shadow-blue-500/5 hover:shadow-blue-500/15',
      cardBg: 'bg-gradient-to-b from-blue-50/50 via-white to-white',
      cornerGlow: 'bg-blue-400/20 group-hover:bg-blue-400/35',
      iconOuter: 'bg-blue-50 border-2 border-blue-200 group-hover:border-blue-400 shadow-blue-500/10',
      iconInner: 'bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-blue-500/25',
      badgeBg: 'bg-blue-600 text-white',
      tagBg: 'bg-blue-50 border-blue-200 text-blue-700',
      highlightBg: 'text-blue-700 bg-blue-50/80 border-blue-100',
      checkColor: 'text-blue-600',
    },
    {
      cardBorder: 'border-2 border-amber-300/90 hover:border-amber-500 shadow-amber-500/5 hover:shadow-amber-500/15',
      cardBg: 'bg-gradient-to-b from-amber-50/50 via-white to-white',
      cornerGlow: 'bg-amber-400/25 group-hover:bg-amber-400/40',
      iconOuter: 'bg-amber-50 border-2 border-amber-200 group-hover:border-amber-400 shadow-amber-500/10',
      iconInner: 'bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-orange-500/25',
      badgeBg: 'bg-[#FF8000] text-white',
      tagBg: 'bg-amber-50 border-amber-200 text-amber-800',
      highlightBg: 'text-amber-800 bg-amber-50/80 border-amber-200/70',
      checkColor: 'text-amber-600',
    },
    {
      cardBorder: 'border-2 border-emerald-300/90 hover:border-emerald-500 shadow-emerald-500/5 hover:shadow-emerald-500/15',
      cardBg: 'bg-gradient-to-b from-emerald-50/50 via-white to-white',
      cornerGlow: 'bg-emerald-400/25 group-hover:bg-emerald-400/40',
      iconOuter: 'bg-emerald-50 border-2 border-emerald-200 group-hover:border-emerald-400 shadow-emerald-500/10',
      iconInner: 'bg-gradient-to-tr from-emerald-500 to-teal-600 text-white shadow-emerald-500/25',
      badgeBg: 'bg-emerald-600 text-white',
      tagBg: 'bg-emerald-50 border-emerald-200 text-emerald-800',
      highlightBg: 'text-emerald-800 bg-emerald-50/80 border-emerald-200/70',
      checkColor: 'text-emerald-600',
    },
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-22 bg-gradient-to-br from-[#EAF2FD] via-[#F6F9FF] to-[#EBF3FE] border-b border-slate-200/80 relative overflow-hidden text-slate-800">
      {/* Delicate Dotted Pattern with Smooth Radial Fade Mask */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(rgba(37,99,235,0.14)_1.5px,transparent_1.5px)] bg-[size:1.75rem_1.75rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_40%,transparent_100%)] pointer-events-none" 
      />

      {/* Radiant Ambient Glows (Dominant Blue with Only a Very Subtle Warm Touch) */}
      <div aria-hidden="true" className="absolute top-0 left-1/4 w-[650px] h-[650px] bg-blue-400/20 rounded-full blur-3xl pointer-events-none -translate-y-1/4" />
      <div aria-hidden="true" className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 left-1/3 w-[550px] h-[450px] bg-blue-500/12 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -bottom-10 right-10 w-64 h-64 bg-orange-300/12 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">

        {/* Centered Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 border border-blue-200/90 shadow-2xs mb-3.5">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>SIMPLE &amp; TRANSPARENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3.5 leading-tight">
            Our Process in <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">3 Steps</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl mx-auto">
            No complicated setup, no learning curve. From strategy session to confirmed appointments &mdash; here is exactly how it works.
          </p>
        </div>

        {/* 3 Step Cards Grid with Multi-Color Themed Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative max-w-6xl mx-auto items-stretch mb-12">
          
          {/* Connecting Curved Dotted Arrow 1 (Step 1 Blue -> Step 2 Amber) */}
          <div 
            aria-hidden="true"
            className="hidden md:block absolute top-9 lg:top-11 left-[33.3%] -translate-x-1/2 w-28 lg:w-36 h-12 text-amber-500 z-20 pointer-events-none select-none drop-shadow-sm"
          >
            <svg className="w-full h-full" viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M 10 32 C 45 6, 95 8, 126 21" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeDasharray="6 4" 
                strokeLinecap="round" 
              />
              <path 
                d="M 116 12 L 129 22 L 118 31" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>

          {/* Connecting Curved Dotted Arrow 2 (Step 2 Amber -> Step 3 Emerald) */}
          <div 
            aria-hidden="true"
            className="hidden md:block absolute top-9 lg:top-11 left-[66.7%] -translate-x-1/2 w-28 lg:w-36 h-12 text-emerald-500 z-20 pointer-events-none select-none drop-shadow-sm"
          >
            <svg className="w-full h-full" viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M 10 32 C 45 6, 95 8, 126 21" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeDasharray="6 4" 
                strokeLinecap="round" 
              />
              <path 
                d="M 116 12 L 129 22 L 118 31" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>

          {steps.map((step, idx) => {
            const theme = stepThemes[idx]
            return (
              <div
                key={step.num}
                className={`${theme.cardBg} ${theme.cardBorder} backdrop-blur-md rounded-3xl p-7 sm:p-8 flex flex-col items-center text-center shadow-xl transition-all duration-300 hover:-translate-y-1.5 relative group overflow-hidden h-full text-slate-800`}
              >
                {/* Subtle Card Corner Glow */}
                <div 
                  aria-hidden="true" 
                  className={`absolute -top-12 -right-12 w-28 h-28 ${theme.cornerGlow} rounded-full blur-2xl transition-all duration-500 pointer-events-none`} 
                />

                {/* Double Circular Icon Frame */}
                <div className={`w-20 h-20 sm:w-22 sm:h-22 rounded-full ${theme.iconOuter} flex items-center justify-center relative mb-5 shadow-md group-hover:scale-105 transition-all duration-300`}>
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${theme.iconInner} flex items-center justify-center shadow-md`}>
                    {step.icon}
                  </div>
                  {/* Step Number Badge */}
                  <span className={`w-6 h-6 rounded-full ${theme.badgeBg} font-extrabold text-xs flex items-center justify-center absolute top-0 right-0 shadow-md border-2 border-white`}>
                    {step.num}
                  </span>
                </div>

                {/* Pill Tag */}
                <div className={`inline-flex items-center justify-center px-3.5 py-1 rounded-full ${theme.tagBg} border text-[11px] font-bold uppercase tracking-wider mb-3.5 shadow-2xs`}>
                  {step.tag}
                </div>

                {/* Step Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 text-center leading-snug">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-center font-normal mb-6">
                  {step.description}
                </p>

                {/* Bottom Feature Highlight */}
                <div className={`mt-auto pt-3.5 border-t border-slate-100 w-full flex items-center justify-center gap-1.5 text-[11px] font-semibold ${theme.highlightBg} py-2 px-3 rounded-xl border`}>
                  <svg className={`w-3.5 h-3.5 ${theme.checkColor} shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{step.highlight}</span>
                </div>
              </div>
            )
          })}

        </div>

        {/* Bottom Callout Banner */}
        <div className="p-6 sm:p-7 bg-gradient-to-r from-blue-600 via-[#1A56DB] to-blue-700 border border-blue-400/30 rounded-3xl shadow-xl shadow-blue-500/20 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden text-white">
          <div aria-hidden="true" className="absolute -right-10 -bottom-10 w-32 h-32 bg-orange-400/12 rounded-full blur-2xl pointer-events-none" />
          <div aria-hidden="true" className="absolute top-0 left-10 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />

          <div className="text-center sm:text-left relative z-10">
            <p className="text-base sm:text-lg font-bold text-white leading-snug">
              Ready to review seller availability in your market?
            </p>
            <p className="text-xs sm:text-sm text-blue-100/90 mt-1 font-medium">
              We limit broker capacity per territory to guarantee outreach exclusivity.
            </p>
          </div>

          <a
            href="#cta"
            className="rounded-full bg-white hover:bg-cyan-50 text-blue-700 font-extrabold text-xs sm:text-sm py-3 px-6 shrink-0 shadow-lg inline-flex items-center gap-2.5 group transition-all duration-300 hover:scale-[1.02] border border-white/80 relative z-10"
          >
            <span>Check Your Territory</span>
            <span className="w-6 h-6 rounded-full bg-blue-600/15 border border-blue-600/25 flex items-center justify-center shrink-0 group-hover:bg-blue-600/25 transition-colors">
              <svg className="w-3.5 h-3.5 text-blue-700 animate-arrow-blink group-hover:animate-none group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </a>
        </div>

      </div>
    </section>


  )
}
