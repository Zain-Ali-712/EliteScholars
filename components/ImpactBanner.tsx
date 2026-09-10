import { IMPACT_STATS } from '@/data/config'
import AnimatedCounter from '@/components/AnimatedCounter'

export default function ImpactBanner() {
  const icons = [
    // 100+ Brokers & firms served (Building / Agency icon)
    <svg key="1" className="w-5 h-5 text-brass shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4" />
    </svg>,
    // $120M+ Deal value (TrendingUp / Currency icon)
    <svg key="2" className="w-5 h-5 text-brass shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>,
    // 100% Pre-qualified (Shield / Check icon)
    <svg key="3" className="w-5 h-5 text-brass shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ]

  return (
    <section id="impact" className="py-8 md:py-10 bg-ink-navy text-paper border-b border-brass/20 relative overflow-hidden">
      {/* Background texture & soft radial glows */}
      <div aria-hidden="true" className="absolute -left-20 -top-20 w-72 h-72 bg-brass/10 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -right-20 -bottom-20 w-72 h-72 bg-brass/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="bg-[#0c1938]/90 backdrop-blur-xl border border-brass/25 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-card">
          
          {/* Header row - compact */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5 pb-4 border-b border-white/10">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brass/10 border border-brass/25 text-brass text-[10px] sm:text-xs font-bold tracking-widest uppercase font-public-sans mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" />
                Aggregate Track Record
              </span>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-fraunces text-white">
                <span className="text-brass">Proven Scale</span> Across North American Brokerages
              </h2>
            </div>
            <span className="text-xs text-white/50 font-public-sans hidden lg:block">
              Updated Real-Time Performance
            </span>
          </div>

          {/* Stat cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {IMPACT_STATS.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-white/5 border border-white/10 hover:border-brass/40 rounded-xl md:rounded-2xl p-4 sm:p-5 flex items-center gap-4 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-brass/10 border border-brass/20 flex items-center justify-center shrink-0 group-hover:bg-brass/20 transition-colors">
                  {icons[idx]}
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brass font-public-sans tracking-tight leading-none mb-1">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-paper/85 font-public-sans leading-tight">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
