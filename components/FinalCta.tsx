import { SITE } from '@/data/config'

interface FinalCtaProps {
  onOpenBooking: () => void
}

export default function FinalCta({ onOpenBooking }: FinalCtaProps) {
  return (
    <section id="cta" className="section-padding bg-white border-b border-[rgba(31,39,51,0.08)]">
      <div className="container-main max-w-5xl text-center">
        <div className="panel-border-brass bg-ink-navy text-white p-10 md:p-16 relative overflow-hidden shadow-2xl rounded-sm">
          {/* Subtle background line graphic */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(90deg, var(--brass) 0px, var(--brass) 1px, transparent 1px, transparent 48px)`,
            }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brass/15 border border-brass/40 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-brass animate-ping" aria-hidden="true" />
              <span className="font-public-sans text-xs font-semibold text-brass uppercase tracking-wider">
                Reserved Brokerage Territory
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-6 font-fraunces max-w-3xl mx-auto leading-tight">
              See if Elite Scholars is the right fit for your brokerage.
            </h2>

            <p className="text-base md:text-lg text-paper/85 font-public-sans max-w-2xl mx-auto mb-8 leading-relaxed">
              Schedule a 15-minute strategy call to review your target revenue criteria and explore guaranteed seller appointment allocation in your market.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={onOpenBooking}
                className="btn-primary text-base py-4 px-8 shadow-lg hover:shadow-xl"
              >
                Book Your Free Strategy Call &rarr;
              </button>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm font-semibold text-paper/70 font-public-sans">
              <span>Direct Line: <a href={`tel:${SITE.phone.replace(/[^0-9+]/g, '')}`} className="text-brass hover:underline font-bold">{SITE.phone}</a></span>
              <span>&bull;</span>
              <span>Email: <a href={`mailto:${SITE.email}`} className="text-brass hover:underline font-bold">{SITE.email}</a></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
