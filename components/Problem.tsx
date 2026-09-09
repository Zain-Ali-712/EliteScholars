import Image from 'next/image'

export default function Problem() {
  return (
    <section id="problem" className="section-padding bg-paper border-b border-[rgba(31,39,51,0.08)] relative">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy (~7 Cols) */}
          <div className="lg:col-span-7">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ink-navy/5 border border-ink-navy/15 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ink-navy" aria-hidden="true" />
              <span className="font-public-sans text-xs font-semibold text-ink-navy uppercase tracking-wider">
                Industry Bottleneck Analysis
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-fraunces text-ink-navy mb-6 leading-tight">
              Most of your pipeline time isn&apos;t spent selling.
            </h2>

            <div className="space-y-4 text-base md:text-lg text-charcoal/90 leading-relaxed font-public-sans max-w-content">
              <p>
                Most business brokers lose up to 70% of their week chasing unvetted contact sheets, navigating gatekeepers, and holding initial discovery calls with unmotivated owners who have no real intention to exit.
              </p>
              <p>
                This isn&apos;t an effort problem. It is a research and targeting problem. When prospect verification is handled with institutional rigor before outreach begins, your calendar fills exclusively with qualified decision-makers ready for immediate valuation conversations.
              </p>
            </div>

            {/* Quick Contrast Metrics */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-[rgba(31,39,51,0.1)]">
              <div className="p-4 bg-white panel-border">
                <p className="text-2xl font-bold text-slate font-public-sans">70% Time Wasted</p>
                <p className="text-xs text-slate/80 font-public-sans mt-1">Generic lead lists &amp; cold outreach</p>
              </div>
              <div className="p-4 bg-white panel-border-brass">
                <p className="text-2xl font-bold text-brass font-public-sans">100% Diligence</p>
                <p className="text-xs text-charcoal font-public-sans mt-1">Pre-screened revenue &amp; seller authority</p>
              </div>
            </div>
          </div>

          {/* Right Column: Comparative Ledger Box (~5 Cols) */}
          <div className="lg:col-span-5">
            <div className="panel-border bg-white p-6 md:p-8 shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-ink-navy" aria-hidden="true" />
              
              <h3 className="text-xl font-bold font-fraunces text-ink-navy mb-6 pb-4 border-b border-[rgba(31,39,51,0.1)]">
                The Pipeline Reality Gap
              </h3>

              {/* Legacy Vendors vs Elite Scholars */}
              <div className="space-y-6">
                
                {/* Legacy approach */}
                <div className="p-4 bg-red-50/50 border border-red-200/60 rounded-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-red-900 font-public-sans uppercase">
                      Generic Lead Services
                    </span>
                    <span className="text-[10px] font-semibold text-red-700 bg-red-100 px-2 py-0.5 rounded-xs">
                      High Churn
                    </span>
                  </div>
                  <ul className="text-xs text-red-800 space-y-1.5 font-public-sans">
                    <li className="flex items-center gap-1.5">✕ Unverified contact numbers &amp; dead emails</li>
                    <li className="flex items-center gap-1.5">✕ Zero visibility into conversation history</li>
                    <li className="flex items-center gap-1.5">✕ Calls with non-owners or zero-revenue businesses</li>
                  </ul>
                </div>

                {/* Elite Scholars approach */}
                <div className="p-4 bg-emerald-50/50 border border-emerald-300/80 rounded-xs relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-emerald-950 font-public-sans uppercase">
                      Elite Scholars Diligence Engine
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-xs">
                      Written Guarantee
                    </span>
                  </div>
                  <ul className="text-xs text-emerald-900 space-y-1.5 font-public-sans font-medium">
                    <li className="flex items-center gap-1.5">✓ Pre-qualified against exact SDE &amp; revenue bands</li>
                    <li className="flex items-center gap-1.5">✓ 100% recorded call transcripts &amp; dashboard tracking</li>
                    <li className="flex items-center gap-1.5">✓ Direct decision-maker seller appointments</li>
                  </ul>
                </div>

              </div>

              {/* Image thumbnail callout */}
              <div className="mt-6 pt-4 border-t border-[rgba(31,39,51,0.08)] flex items-center gap-3">
                <div className="w-12 h-12 relative rounded-xs overflow-hidden shrink-0 border border-brass/40">
                  <Image
                    src="/images/broker-closing.jpg"
                    alt="Broker Closing Deal"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs font-semibold text-charcoal font-public-sans leading-tight">
                  Advisors spend 100% of their time closing listings instead of chasing cold names.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
