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

  return (
    <section id="how-it-works" className="py-18 md:py-24 bg-gradient-to-br from-[#155EEF] via-[#1D4ED8] to-[#0A225C] relative overflow-hidden text-white">
      {/* Background Dot Texture Pattern */}
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Playful Ambient Lighting Effects */}
      <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[360px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#E87722]/20 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -left-20 top-1/3 w-80 h-80 bg-blue-900/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">

        {/* Centered Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-18">
          <div className="text-xs font-extrabold uppercase tracking-widest text-blue-100/90 mb-3">
            SIMPLE &amp; TRANSPARENT
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Our Process in <span className="text-[#FBBF24]">3 Steps</span>
          </h2>
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal max-w-xl mx-auto">
            No complicated setup, no learning curve. From strategy session to confirmed appointments &mdash; here is exactly how it works.
          </p>
        </div>

        {/* 3 Step Cards Grid with Curved Dotted Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative max-w-6xl mx-auto items-stretch mb-14">
          
          {/* Connecting Curved Dotted Arrow 1 (Desktop/Tablet) */}
          <div 
            aria-hidden="true"
            className="hidden md:block absolute top-9 lg:top-11 left-[33.3%] -translate-x-1/2 w-28 lg:w-36 h-12 text-[#FBBF24] z-20 pointer-events-none select-none drop-shadow-md"
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

          {/* Connecting Curved Dotted Arrow 2 (Desktop/Tablet) */}
          <div 
            aria-hidden="true"
            className="hidden md:block absolute top-9 lg:top-11 left-[66.7%] -translate-x-1/2 w-28 lg:w-36 h-12 text-[#FBBF24] z-20 pointer-events-none select-none drop-shadow-md"
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

          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/35 rounded-3xl p-7 sm:p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl hover:bg-white/[0.14] transition-all duration-300 hover:-translate-y-1.5 relative group overflow-hidden h-full"
            >
              {/* Subtle Card Corner Glow */}
              <div 
                aria-hidden="true" 
                className="absolute -top-12 -right-12 w-28 h-28 bg-[#FBBF24]/10 rounded-full blur-2xl group-hover:bg-[#FBBF24]/20 transition-all duration-500 pointer-events-none" 
              />

              {/* Double Circular Glassmorphic Icon Frame */}
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-white/10 border border-white/25 backdrop-blur-md flex items-center justify-center relative mb-5 shadow-xl group-hover:scale-105 group-hover:border-white/40 transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/10 flex items-center justify-center">
                  {step.icon}
                </div>
                {/* Orange Step Number Badge */}
                <span className="w-6 h-6 rounded-full bg-[#E87722] text-white font-extrabold text-xs flex items-center justify-center absolute top-0 right-0 shadow-md border-2 border-blue-950">
                  {step.num}
                </span>
              </div>

              {/* Glassmorphic Pill Tag */}
              <div className="inline-flex items-center justify-center px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-[#FDE68A] text-[11px] font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
                {step.tag}
              </div>

              {/* Step Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 text-center leading-snug">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed text-center font-normal mb-6">
                {step.description}
              </p>

              {/* Bottom Feature Highlight */}
              <div className="mt-auto pt-4 border-t border-white/15 w-full flex items-center justify-center gap-1.5 text-[11px] font-semibold text-blue-200">
                <svg className="w-3.5 h-3.5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>{step.highlight}</span>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Callout Banner - Translucent Blue Card */}
        <div className="p-6 sm:p-7 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-3xl shadow-xl max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden">
          <div className="text-center sm:text-left">
            <p className="text-base sm:text-lg font-bold text-white leading-snug">
              Ready to review seller availability in your market?
            </p>
            <p className="text-xs sm:text-sm text-blue-200 mt-1 font-medium">
              We limit broker capacity per territory to guarantee outreach exclusivity.
            </p>
          </div>

          <a
            href="#cta"
            className="btn-primary text-xs sm:text-sm py-3 px-6 shrink-0 shadow-lg border border-white/30"
          >
            <span>Check Your Territory</span>
            <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
