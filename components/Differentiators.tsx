import Image from 'next/image'
import { DIFFERENTIATORS } from '@/data/config'

export default function Differentiators() {
  const cardMetrics = [
    { tag: 'Verified SDE & Ownership', icon: '01' },
    { tag: 'Recorded Call Transcripts', icon: '02' },
    { tag: '< 14 Days Activation SLA', icon: '03' },
  ]

  return (
    <section id="different" className="section-padding bg-white border-b border-[rgba(31,39,51,0.08)]">
      <div className="container-main">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brass/10 border border-brass/30 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-brass" aria-hidden="true" />
            <span className="font-public-sans text-xs font-semibold text-[#8B6332] uppercase tracking-wider">
              Institutional Advantage
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-fraunces text-ink-navy mb-4">
            What makes Elite Scholars different
          </h2>
          <p className="text-base md:text-lg text-slate font-public-sans">
            We replace vague lead generation with institutional research protocols, written standards, and complete operational transparency.
          </p>
        </div>

        {/* 3 Columns Grid with Advanced Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DIFFERENTIATORS.map((item, idx) => (
            <div
              key={idx}
              className="panel-border bg-paper p-8 flex flex-col justify-between hover:border-brass hover:shadow-lg transition-all duration-300 relative group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-ink-navy group-hover:bg-brass transition-colors" />

              <div>
                {/* Metric Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="w-9 h-9 rounded-xs bg-ink-navy text-paper font-fraunces font-bold text-sm flex items-center justify-center border border-brass/40">
                    {cardMetrics[idx].icon}
                  </span>
                  <span className="text-[11px] font-semibold text-brass bg-brass/10 border border-brass/25 px-2.5 py-1 rounded-xs font-public-sans">
                    {cardMetrics[idx].tag}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl md:text-2xl font-bold text-ink-navy mb-4 font-fraunces">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-charcoal/90 text-sm md:text-base leading-relaxed font-public-sans mb-6">
                  {item.description}
                </p>
              </div>

              {/* Card Footer Feature Line */}
              <div className="pt-4 border-t border-[rgba(31,39,51,0.08)] flex items-center justify-between text-xs text-slate font-public-sans">
                <span className="font-semibold text-ink-navy">Guaranteed Protocol</span>
                <span className="text-brass font-medium">&rarr; Standard in Agreement</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Image Feature Strip */}
        <div className="mt-12 panel-border bg-ink-navy text-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 relative rounded-xs overflow-hidden shrink-0 border border-brass/50">
              <Image
                src="/images/seller-vetting.jpg"
                alt="Elite Scholars Diligence & Seller Vetting"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold text-brass uppercase tracking-wider font-public-sans mb-1">
                Institutional Research Lab
              </p>
              <h4 className="text-lg md:text-xl font-bold font-fraunces text-white">
                Every call verified by senior M&amp;A research analysts
              </h4>
            </div>
          </div>
          <a
            href="#guarantee"
            className="btn-outline border-brass text-brass hover:bg-brass hover:text-ink-navy text-xs py-3 px-6 shrink-0"
          >
            Review Quality Guarantee &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
