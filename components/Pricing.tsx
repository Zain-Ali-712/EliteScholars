import { PRICING_PLANS, PRICING_SUPPORT_NOTE } from '@/data/config'

interface PricingProps {
  onOpenBooking: () => void
}

export default function Pricing({ onOpenBooking }: PricingProps) {
  return (
    <section id="pricing" className="section-padding bg-white border-b border-[rgba(31,39,51,0.08)]">
      <div className="container-main">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brass/10 border border-brass/30 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-brass" aria-hidden="true" />
            <span className="font-public-sans text-xs font-semibold text-[#8B6332] uppercase tracking-wider">
              Transparent Retainer &amp; System Investment
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-fraunces text-ink-navy mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-base md:text-lg text-slate font-public-sans">
            Every plan includes our written lead quality guarantee, verified call recordings, and live dashboard tracking.
          </p>
        </div>

        {/* 3 Tier Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {PRICING_PLANS.map((plan, idx) => {
            const isRec = plan.recommended
            return (
              <div
                key={idx}
                className={`bg-paper flex flex-col justify-between relative transition-all duration-300 rounded-sm overflow-hidden ${
                  isRec ? 'panel-border-brass shadow-xl bg-white scale-[1.02] z-10' : 'panel-border hover:border-slate/50'
                }`}
              >
                {/* Dark Header Band */}
                <div className={`p-6 border-b ${isRec ? 'bg-ink-navy text-white' : 'bg-[#182234] text-white'}`}>
                  {isRec && (
                    <span className="inline-block mb-3 px-3 py-0.5 bg-brass text-ink-navy text-[10px] font-extrabold font-public-sans uppercase tracking-widest rounded-xs">
                      Most Popular Broker Choice
                    </span>
                  )}
                  <h3 className="text-2xl font-bold font-fraunces mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-paper/70 font-public-sans">
                    {plan.description}
                  </p>
                </div>

                {/* Price & Target Body */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="mb-6 pb-6 border-b border-[rgba(31,39,51,0.1)]">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl md:text-5xl font-extrabold text-ink-navy font-public-sans tracking-tight">
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-sm text-slate font-semibold font-public-sans">
                            {plan.period}
                          </span>
                        )}
                      </div>
                      <div className="mt-3 inline-block px-3 py-1 bg-brass/10 border border-brass/30 text-brass text-xs font-bold font-public-sans rounded-xs">
                        Targeting: {plan.revenueTarget}
                      </div>
                    </div>

                    <ul className="space-y-3.5 mb-8 text-sm font-public-sans text-charcoal">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <svg
                            className="w-4 h-4 text-brass shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <button
                      onClick={onOpenBooking}
                      className={`w-full text-center py-4 text-sm font-bold rounded-xs font-public-sans transition-all ${
                        isRec
                          ? 'btn-primary shadow-md hover:shadow-lg'
                          : 'btn-outline'
                      }`}
                    >
                      {plan.ctaText} &rarr;
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Supporting ROI Payback Banner */}
        <div className="p-6 bg-ink-navy text-white panel-border max-w-4xl mx-auto text-center rounded-sm border-brass/40 shadow-md">
          <p className="text-xs font-semibold text-brass uppercase tracking-wider mb-1 font-public-sans">
            Payback Benchmark
          </p>
          <p className="text-sm md:text-base font-semibold text-white font-public-sans leading-relaxed">
            {PRICING_SUPPORT_NOTE}
          </p>
        </div>
      </div>
    </section>
  )
}
