import { QUALIFIERS, DISQUALIFIER_STATEMENT } from '@/data/config'

export default function Qualifier() {
  return (
    <section id="qualifier" className="section-padding bg-white border-b border-[rgba(31,39,51,0.08)]">
      <div className="container-main">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brass/10 border border-brass/30 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-brass" aria-hidden="true" />
            <span className="font-public-sans text-xs font-semibold text-[#8B6332] uppercase tracking-wider">
              Broker Eligibility Filter
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-fraunces text-ink-navy mb-4">
            Is Elite Scholars right for your brokerage?
          </h2>
          <p className="text-base md:text-lg text-slate font-public-sans">
            We partner exclusively with serious brokers built to scale listing volume. Review our standard criteria below.
          </p>
        </div>

        {/* 4 Qualifier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {QUALIFIERS.map((item, idx) => (
            <div
              key={idx}
              className="panel-border p-6 bg-paper hover:bg-white hover:border-brass/50 transition-all duration-200 flex items-start gap-4 shadow-xs"
            >
              <div className="w-8 h-8 rounded-xs bg-ink-navy text-brass flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 border border-brass/40 shadow-xs">
                ✓
              </div>
              <div>
                <h3 className="text-base font-bold text-ink-navy mb-1.5 font-public-sans">
                  {item.title}
                </h3>
                <p className="text-sm text-slate leading-relaxed font-public-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Disqualifier Box */}
        <div className="p-6 md:p-8 panel-border bg-ink-navy text-white max-w-4xl mx-auto rounded-sm border-l-4 border-l-brass shadow-lg relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-brass/20 text-brass flex items-center justify-center font-bold text-lg shrink-0 border border-brass/40">
              !
            </div>
            <div>
              <p className="text-xs font-semibold text-brass uppercase tracking-wider font-public-sans mb-1">
                Honest Disqualification Standard
              </p>
              <p className="text-base md:text-lg font-semibold text-white font-public-sans leading-snug">
                &ldquo;{DISQUALIFIER_STATEMENT}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
