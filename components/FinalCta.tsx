import { SITE } from '@/data/config'

interface FinalCtaProps {
  onOpenBooking: () => void
}

export default function FinalCta({ onOpenBooking }: FinalCtaProps) {
  return (
    <section id="cta" className="py-8 md:py-12 bg-white border-b border-[rgba(31,39,51,0.08)]">
      <div className="container-main max-w-5xl">
        <div className="relative rounded-[32px] overflow-hidden p-6 sm:p-10 md:p-12 shadow-2xl border border-ink-navy/20">
          
          {/* Luxury Geometric Dark Mesh & Technical Grid Background */}
          <div className="absolute inset-0 z-0 bg-ink-navy">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(197,160,89,0.3),rgba(255,255,255,0))]" />
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brass/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-80 h-80 bg-brass/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          </div>

          {/* Center Glassmorphic Card Container */}
          <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/25 rounded-[28px] p-6 sm:p-8 md:p-10 text-center max-w-3xl mx-auto shadow-2xl">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brass/20 border border-brass/40 rounded-full mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brass animate-ping" aria-hidden="true" />
              <span className="font-public-sans text-xs font-bold text-brass uppercase tracking-wider">
                Ready to Get Started
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold font-fraunces max-w-2xl mx-auto leading-snug mb-3">
              See if Elite Scholars is the <span className="text-brass">right fit</span> for your brokerage.
            </h2>

            <p className="text-xs sm:text-sm text-paper/90 font-public-sans max-w-xl mx-auto mb-6 leading-relaxed">
              Schedule a 15-minute strategy call to review your target revenue criteria and explore dedicated seller appointment allocation in your market.
            </p>

            {/* Pill CTA Action Bar (Matching Reference Image) */}
            <div className="p-1.5 bg-white/15 backdrop-blur-lg border border-white/25 rounded-full flex items-center justify-between max-w-md mx-auto shadow-xl">
              <span className="text-xs font-semibold text-white/90 pl-4 font-public-sans hidden sm:inline">
                Territory Consultation
              </span>
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto bg-white text-ink-navy font-bold text-xs sm:text-sm px-6 py-3 rounded-full hover:bg-brass hover:text-white transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Book Strategy Call</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Direct Line / Contact Footer */}
            <div className="mt-5 pt-3 border-t border-white/15 flex flex-wrap items-center justify-center gap-4 text-[11px] font-semibold text-paper/80 font-public-sans">
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
