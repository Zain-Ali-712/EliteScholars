import { PRICING_PLANS, PRICING_SUPPORT_NOTE } from '@/data/config'

interface PricingProps {
  onOpenBooking: () => void
}

export default function Pricing({ onOpenBooking }: PricingProps) {
  return (
    <section id="pricing" className="py-12 md:py-16 bg-gradient-to-b from-white via-slate-50 to-white border-b border-[rgba(31,39,51,0.08)] relative overflow-hidden">
      {/* Background ambient glow effect */}
      <div aria-hidden="true" className="absolute -right-20 top-1/2 w-72 h-72 bg-brass/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        {/* Section Header - Compact */}
        <div className="max-w-2xl mb-10 text-left">
          <div className="agency-pill mb-3">
            <span className="w-2 h-2 rounded-full bg-brass" aria-hidden="true" />
            <span>Transparent Retainer &amp; System Investment</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-fraunces text-ink-navy mb-2.5">
            Simple, <span className="text-brass">transparent</span> pricing
          </h2>
          <p className="text-sm md:text-base text-slate font-public-sans">
            Every plan includes our written lead quality guarantee, verified call recordings, and live dashboard tracking.
          </p>
        </div>

        {/* 3 Tier Cards Grid - Compact Minimalist Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-10">
          {PRICING_PLANS.map((plan, idx) => {
            const isRec = plan.recommended
            return (
              <div
                key={idx}
                className={`flex flex-col justify-between relative transition-all duration-300 rounded-2xl p-6 sm:p-7 ${
                  isRec
                    ? 'bg-ink-navy text-white border-2 border-brass/70 shadow-xl ring-1 ring-brass/30'
                    : 'bg-white text-ink-navy border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                {/* Popular Badge */}
                {isRec && (
                  <div className="absolute -top-3.5 left-6 inline-flex items-center gap-1.5 px-3 py-0.5 bg-brass text-ink-navy text-[10px] font-extrabold font-public-sans uppercase tracking-wider rounded-full shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink-navy" />
                    Most Popular Broker Choice
                  </div>
                )}

                <div>
                  {/* Card Title & Description */}
                  <div className="mb-5 pb-5 border-b border-current/10">
                    <h3 className={`text-xl font-bold font-fraunces mb-1 ${isRec ? 'text-white' : 'text-ink-navy'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-xs leading-relaxed font-public-sans min-h-[36px] ${isRec ? 'text-paper/75' : 'text-slate'}`}>
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className={`text-3xl sm:text-4xl font-extrabold font-public-sans tracking-tight ${isRec ? 'text-brass' : 'text-ink-navy'}`}>
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className={`text-xs font-semibold font-public-sans ${isRec ? 'text-paper/70' : 'text-slate'}`}>
                          {plan.period}
                        </span>
                      )}
                    </div>

                    {/* Revenue Target Badge */}
                    <div className={`mt-3 inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold font-public-sans rounded-full ${
                      isRec
                        ? 'bg-brass/15 border border-brass/30 text-brass'
                        : 'bg-brass/10 border border-brass/20 text-brass-dark'
                    }`}>
                      Targeting: {plan.revenueTarget}
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5 mb-6 text-xs sm:text-sm font-public-sans">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isRec ? 'bg-brass/20 text-brass' : 'bg-brass/10 text-brass-dark'
                        }`}>
                          <svg
                            className="w-2.5 h-2.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className={`leading-snug ${isRec ? 'text-paper/90' : 'text-charcoal'}`}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <button
                    onClick={onOpenBooking}
                    className={`w-full text-center py-3 px-4 text-xs sm:text-sm font-bold rounded-full font-public-sans transition-all flex items-center justify-center gap-2 ${
                      isRec
                        ? 'btn-primary shadow-lg hover:shadow-xl'
                        : 'bg-ink-navy text-white hover:bg-ink-navy/90 shadow-sm'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Supporting ROI Payback Banner - Compact */}
        <div className="p-5 md:p-6 bg-ink-navy text-white max-w-3xl mx-auto text-center rounded-2xl border border-brass/30 shadow-lg relative overflow-hidden">
          <div aria-hidden="true" className="absolute -right-16 -top-16 w-40 h-40 bg-brass/10 rounded-full blur-2xl pointer-events-none" />

          <p className="text-[10px] sm:text-xs font-bold text-brass uppercase tracking-wider mb-1 font-public-sans relative z-10">
            Payback Benchmark
          </p>
          <p className="text-xs sm:text-sm font-medium text-white/90 font-public-sans leading-relaxed relative z-10">
            {PRICING_SUPPORT_NOTE}
          </p>
        </div>
      </div>
    </section>
  )
}
