import { PRICING_PLANS, PRICING_SUPPORT_NOTE } from '@/data/config'

interface PricingProps {
  onOpenBooking: () => void
}

export default function Pricing({ onOpenBooking }: PricingProps) {
  const cardAccents = [
    {
      borderColor: 'border-blue-300 hover:border-blue-500 hover:shadow-blue-500/10',
      cardBg: 'bg-gradient-to-b from-blue-50/60 via-white to-blue-50/20',
      badgeBg: 'bg-blue-100/80 text-blue-800 border-blue-300',
      priceColor: 'text-blue-600',
      highlight: false,
      tag: 'Core Deal Flow',
      checkColor: 'bg-blue-100 text-blue-700',
      buttonStyle: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-blue-500/25',
    },
    {
      borderColor: 'border-purple-400 ring-4 ring-purple-500/10 shadow-xl shadow-purple-500/10',
      cardBg: 'bg-gradient-to-b from-purple-50/80 via-white to-indigo-50/30',
      badgeBg: 'bg-purple-100/90 text-purple-800 border-purple-300',
      priceColor: 'bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent',
      highlight: true,
      tag: 'Mid-Market Focus',
      checkColor: 'bg-purple-100 text-purple-700',
      buttonStyle: 'bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:opacity-95 text-white shadow-lg shadow-purple-500/25 hover:scale-[1.02]',
    },
    {
      borderColor: 'border-amber-300 hover:border-amber-500 hover:shadow-amber-500/10',
      cardBg: 'bg-gradient-to-b from-amber-50/60 via-white to-orange-50/20',
      badgeBg: 'bg-amber-100/80 text-amber-800 border-amber-300',
      priceColor: 'text-amber-600',
      highlight: false,
      tag: 'On-Demand Flow',
      checkColor: 'bg-amber-100 text-amber-800',
      buttonStyle: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md hover:shadow-orange-500/25',
    },
  ]

  return (
    <section id="pricing" className="py-14 md:py-18 bg-gradient-to-b from-white via-[#F8FAFF] to-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Background Playful Ambient Glows */}
      <div aria-hidden="true" className="absolute -right-20 top-1/3 w-80 h-80 bg-purple-400/15 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -left-20 bottom-1/3 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        
        {/* Centered Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-purple-600 border border-purple-200 shadow-xs mb-3">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <span>Simple, Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Predictable Plans for <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Every Broker</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Every plan includes verified call recordings, dedicated US-timezone dialers, and real-time pipeline tracking.
          </p>
        </div>

        {/* 3 Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-7 items-stretch mb-10">
          {PRICING_PLANS.map((plan, idx) => {
            const accent = cardAccents[idx]
            const isRec = plan.recommended

            return (
              <div
                key={idx}
                className={`flex flex-col justify-between relative transition-all duration-300 rounded-3xl p-5 sm:p-6 md:p-4.5 lg:p-7 border-2 ${accent.borderColor} ${accent.cardBg} shadow-sm hover:shadow-xl`}
              >
                {/* Popular Pill Badge */}
                {isRec && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-extrabold uppercase tracking-wider rounded-full shadow-md whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  {/* Card Header & Description */}
                  <div className="mb-5 pb-5 border-b border-slate-200/70">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-bold text-slate-600">{accent.tag}</span>
                      <span className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider border ${accent.badgeBg}`}>
                        {plan.revenueTarget}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-extrabold text-slate-900 mb-1">
                      {plan.name}
                    </h3>
                    
                    <p className="text-xs text-slate-500 font-medium leading-relaxed min-h-[34px] md:min-h-[44px] lg:min-h-[34px]">
                      {plan.description}
                    </p>

                    {/* Big Price Display */}
                    <div className="mt-3.5 flex items-baseline gap-1.5">
                      <span className={`text-3xl sm:text-5xl md:text-3xl lg:text-5xl font-extrabold tracking-tight ${accent.priceColor}`}>
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-xs font-bold text-slate-500">
                          {plan.period}
                        </span>
                      )}
                    </div>

                    {/* Key Specs Breakdown Grid */}
                    <div className="mt-4 space-y-1.5 bg-white/80 backdrop-blur-sm rounded-2xl p-2.5 sm:p-3 border border-slate-200/80 shadow-2xs">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-500 font-medium">Cost Per Lead:</span>
                        <span className="font-bold text-slate-900">{plan.perLeadCost}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs pt-1.5 border-t border-slate-100">
                        <span className="text-slate-500 font-medium">Monthly Volume:</span>
                        <span className="font-bold text-slate-900">{plan.leadsPerMonth}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs pt-1.5 border-t border-slate-100">
                        <span className="text-slate-500 font-medium">Commitment:</span>
                        <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 text-[11px]">
                          {plan.commitment}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Features List with 6 client bullets */}
                  <div className="mb-6">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      Everything Included:
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <div className={`w-4 h-4 rounded-full ${accent.checkColor} flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]`}>
                            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-slate-700 leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <button
                    onClick={onOpenBooking}
                    className={`w-full py-3.5 px-4 sm:px-5 text-xs sm:text-sm font-bold rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${accent.buttonStyle}`}
                  >
                    <span>{plan.ctaText}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Supporting Payback Benchmark Banner in Bright Theme */}
        <div className="p-6 sm:p-7 bg-gradient-to-r from-blue-50 via-indigo-50/50 to-purple-50 max-w-3xl mx-auto text-center rounded-3xl border-2 border-blue-200 shadow-sm relative overflow-hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-blue-200 rounded-full text-blue-700 text-[11px] font-extrabold uppercase tracking-wider mb-2 shadow-2xs">
            <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Payback Benchmark</span>
          </div>
          <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed max-w-xl mx-auto">
            {PRICING_SUPPORT_NOTE}
          </p>
        </div>

      </div>
    </section>
  )
}
