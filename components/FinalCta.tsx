import { SITE } from '@/data/config'

interface FinalCtaProps {
  onOpenBooking: () => void
}

export default function FinalCta({ onOpenBooking }: FinalCtaProps) {
  return (
    <section id="cta" className="py-8 sm:py-10 md:py-12 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="container-main max-w-4xl">
        <div className="relative rounded-3xl overflow-hidden p-6 sm:p-8 md:p-10 shadow-xl bg-gradient-to-br from-[#155EEF] via-[#1D4ED8] to-[#0A225C] text-white text-center">
          
          {/* Subtle Ambient Light Orbs */}
          <div aria-hidden="true" className="absolute -right-16 -top-16 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div aria-hidden="true" className="absolute -left-16 -bottom-16 w-60 h-60 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />

          {/* Centered Content - Compact */}
          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 backdrop-blur-md border border-white/25 rounded-full mb-3.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                Ready to Get Started?
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-2.5 tracking-tight">
              See If Elite Scholars Is the <span className="underline decoration-amber-400 decoration-wavy underline-offset-4">Right Fit</span> for You
            </h2>

            <p className="text-xs sm:text-sm text-white/90 font-medium max-w-md mx-auto mb-5 leading-relaxed">
              Schedule a 15-minute territory review to explore dedicated seller appointment allocation in your market.
            </p>

            {/* Pill CTA Action Button */}
            <button
              onClick={onOpenBooking}
              className="btn-primary text-xs sm:text-sm px-8 py-3.5 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer group hover:scale-105 border-2 border-white/40"
            >
              <span>Book Strategy Call</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            {/* Direct Line / Contact Sub-bar */}
            <div className="mt-4 pt-3.5 border-t border-white/20 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-white/90">
              <span>Direct: <a href={`tel:${SITE.phone.replace(/[^0-9+]/g, '')}`} className="text-white hover:text-amber-300 underline font-bold">{SITE.phone}</a></span>
              <span>&bull;</span>
              <span>Email: <a href={`mailto:${SITE.email}`} className="text-white hover:text-amber-300 underline font-bold">{SITE.email}</a></span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
