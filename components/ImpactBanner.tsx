import { IMPACT_STATS } from '@/data/config'
import AnimatedCounter from '@/components/AnimatedCounter'

export default function ImpactBanner() {
  const cardThemes = [
    {
      iconBg: 'bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/25',
      numColor: 'text-blue-600',
      borderColor: 'border-2 border-blue-200/90 hover:border-blue-400 hover:shadow-blue-500/15',
      badge: 'Brokers Served',
    },
    {
      iconBg: 'bg-gradient-to-tr from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/25',
      numColor: 'text-emerald-600',
      borderColor: 'border-2 border-emerald-300/90 hover:border-emerald-400 hover:shadow-emerald-500/15',
      badge: 'Deal Facilitation',
    },
    {
      iconBg: 'bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-md shadow-orange-500/25',
      numColor: 'text-orange-600',
      borderColor: 'border-2 border-amber-300/90 hover:border-amber-400 hover:shadow-amber-500/15',
      badge: 'Lead Vetting',
    },
  ]

  const icons = [
    // 60+ Brokers & firms served (Building / Agency icon)
    <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4" />
    </svg>,
    // $120M+ Deal value (TrendingUp / Currency icon)
    <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>,
    // 100% Pre-qualified (Shield / Check icon)
    <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ]

  return (
    <section id="impact" className="py-8 sm:py-10 md:py-11 bg-gradient-to-br from-[#EAF2FD] via-[#F6F9FF] to-[#EBF3FE] border-y border-blue-200/60 relative overflow-hidden text-slate-800">
      {/* Subtle Dot Grid Pattern with Blue Micro Accents */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(rgba(37,99,235,0.08)_1.2px,transparent_1.2px)] [background-size:20px_20px] pointer-events-none" 
      />

      {/* Radiant Ambient Glows (Dominant Blue with Only a Very Subtle Warm Touch) */}
      <div aria-hidden="true" className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[300px] bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -left-16 top-0 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[250px] bg-blue-500/12 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -right-16 bottom-0 w-64 h-64 bg-orange-300/12 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10 max-w-5xl">
        
        {/* Centered Compact Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-blue-100 text-blue-700 border border-blue-200/90 shadow-2xs mb-2.5 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>Our Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-1.5 leading-tight">
            Proven Scale for <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Brokers Nationwide</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-lg mx-auto">
            Real performance benchmarks achieved for business brokers and M&amp;A advisory firms nationwide.
          </p>
        </div>

        {/* 3 Stat Cards Container - Compact */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl md:rounded-3xl p-3.5 sm:p-5 border border-blue-200/70 shadow-xl shadow-blue-500/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {IMPACT_STATS.map((stat, idx) => {
              const theme = cardThemes[idx]
              return (
                <div 
                  key={idx} 
                  className={`bg-white/95 rounded-xl md:rounded-2xl p-3.5 sm:p-4.5 flex items-center gap-3.5 shadow-sm hover:shadow-lg transition-all duration-300 group ${theme.borderColor}`}
                >
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${theme.iconBg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                    {icons[idx]}
                  </div>
                  <div className="min-w-0">
                    <p className={`text-2xl sm:text-3xl lg:text-3xl font-extrabold ${theme.numColor} tracking-tight leading-none mb-0.5`}>
                      <AnimatedCounter value={stat.value} />
                    </p>
                    <p className="text-xs sm:text-xs lg:text-sm font-bold text-slate-800 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>

  )
}
