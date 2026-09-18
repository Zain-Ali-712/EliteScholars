import { QUALIFIERS, DISQUALIFIERS, DISQUALIFIER_STATEMENT } from '@/data/config'

export default function Qualifier() {
  return (
    <section id="qualifier" className="py-16 md:py-20 bg-gradient-to-b from-white via-[#F8FAFC] to-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Playful Ambient Dual Glows & Dot Texture */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:22px_22px] opacity-60 pointer-events-none" 
      />
      <div aria-hidden="true" className="absolute -left-20 top-1/2 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -right-20 top-1/2 w-80 h-80 bg-rose-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        
        {/* Centered Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-xs mb-3.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Eligibility Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Is BrokerLeadz <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Right for You?</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-medium">
            We work best with business brokers and advisors who are serious about growing their deal flow. Here&apos;s who we are built for.
          </p>
        </div>

        {/* 2-Column Comparison Layout (Side-by-side on tablet & desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Card 1: Who This Is For (Emerald Accent) */}
          <div className="bg-gradient-to-br from-white to-emerald-50/20 rounded-3xl p-6 sm:p-8 border-2 border-emerald-200/80 shadow-md flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-100">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-sm shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Who We Work Best With</h3>
                  <p className="text-xs text-emerald-700 font-semibold">Ideal Broker Partner Profile</p>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-4">
                {QUALIFIERS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-medium">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-100 flex items-center justify-between text-xs font-bold text-emerald-700">
              <span>High Fit Profile</span>
              <span>1 Broker Per Territory</span>
            </div>
          </div>

          {/* Card 2: Who This Is NOT For (Rose Accent) */}
          <div className="bg-gradient-to-br from-white to-rose-50/20 rounded-3xl p-6 sm:p-8 border-2 border-rose-200/80 shadow-md flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-rose-100">
                <div className="w-10 h-10 rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-sm shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Who This Is Not Built For</h3>
                  <p className="text-xs text-rose-600 font-semibold">Honest Disqualification Standard</p>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-4 mb-6">
                {DISQUALIFIERS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-medium">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Disqualifier Statement Callout */}
              <div className="p-4 bg-rose-50 border border-rose-200/80 rounded-2xl">
                <p className="text-xs font-bold text-rose-800 uppercase tracking-wider mb-1">
                  Our Commitment
                </p>
                <p className="text-xs text-rose-700 font-medium leading-relaxed italic">
                  &ldquo;{DISQUALIFIER_STATEMENT}&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-100 flex items-center justify-between text-xs font-bold text-rose-600">
              <span>Quality Over Quantity</span>
              <span>100% Real Conversations</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
