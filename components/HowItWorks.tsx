import Image from 'next/image'
import { PROCESS_STEPS } from '@/data/config'

export default function HowItWorks() {
  const stepTags = [
    'Strategy & Alignment',
    'Active Outreach',
    'Closed Transactions',
  ]

  return (
    <section id="how-it-works" className="section-padding bg-paper border-b border-[rgba(31,39,51,0.08)]">
      <div className="container-main">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brass/10 border border-brass/30 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-brass" aria-hidden="true" />
            <span className="font-public-sans text-xs font-semibold text-[#8B6332] uppercase tracking-wider">
              Operational Roadmap
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-fraunces text-ink-navy mb-4">
            How Elite Scholars builds your pipeline
          </h2>
          <p className="text-base md:text-lg text-slate font-public-sans">
            A 3-step done-for-you execution framework engineered to deliver verified seller appointments into your calendar.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div
            className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-brass/30 -z-0"
            aria-hidden="true"
          />

          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="panel-border bg-white p-8 relative z-10 flex flex-col justify-between hover:border-brass hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* Step Circle & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xs bg-ink-navy text-brass font-fraunces font-bold text-xl flex items-center justify-center border-2 border-brass shadow-md group-hover:scale-105 transition-transform">
                    0{step.step}
                  </div>
                  <span className="text-[11px] font-semibold text-slate bg-paper px-2.5 py-1 border border-[rgba(31,39,51,0.1)] rounded-xs font-public-sans">
                    {stepTags[idx]}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-xl md:text-2xl font-bold text-ink-navy mb-3 font-fraunces">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm md:text-base text-charcoal/90 leading-relaxed font-public-sans mb-6">
                  {step.description}
                </p>
              </div>

              {/* Step Footer */}
              <div className="pt-4 border-t border-[rgba(31,39,51,0.08)] flex items-center justify-between text-xs text-slate font-public-sans">
                <span className="font-semibold text-ink-navy">Phase 0{step.step}</span>
                <span className="text-brass font-medium">&check; Written Approval</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout banner with image */}
        <div className="mt-12 p-6 md:p-8 panel-border bg-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 relative rounded-xs overflow-hidden shrink-0 border border-brass/40">
              <Image
                src="/images/broker-closing.jpg"
                alt="Business Broker Closing Deal"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-ink-navy font-fraunces">
                Ready to review your territory&apos;s seller availability?
              </p>
              <p className="text-xs text-slate font-public-sans">
                Our onboarding research team limits active broker capacity per geographic market to maintain pipeline quality.
              </p>
            </div>
          </div>
          <a href="#cta" className="btn-primary text-xs py-3 px-6 shrink-0">
            Check Territory Availability &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
