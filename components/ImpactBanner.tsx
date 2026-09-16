import { IMPACT_STATS } from '@/data/config'
import AnimatedCounter from '@/components/AnimatedCounter'

export default function ImpactBanner() {
  const cardThemes = [
    {
      iconBg: 'bg-gradient-to-tr from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20',
      numColor: 'text-blue-600',
      borderColor: 'border-blue-200 hover:border-blue-400 hover:shadow-blue-500/10',
      bgCard: 'bg-gradient-to-b from-blue-50/40 via-white to-white',
      badge: 'Brokers Served',
    },
    {
      iconBg: 'bg-gradient-to-tr from-purple-500 to-pink-500 text-white shadow-md shadow-purple-500/20',
      numColor: 'text-purple-600',
      borderColor: 'border-purple-200 hover:border-purple-400 hover:shadow-purple-500/10',
      bgCard: 'bg-gradient-to-b from-purple-50/40 via-white to-white',
      badge: 'Deal Facilitation',
    },
    {
      iconBg: 'bg-gradient-to-tr from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/20',
      numColor: 'text-emerald-600',
      borderColor: 'border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-500/10',
      bgCard: 'bg-gradient-to-b from-emerald-50/40 via-white to-white',
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
    <section id="impact" className="py-12 md:py-16 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Background Playful Glows */}
      <div aria-hidden="true" className="absolute -left-20 top-1/2 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -right-20 top-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        
        {/* Centered Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-200 shadow-xs mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Our Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2.5">
            Proven Scale Across <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">North American Brokerages</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Real performance benchmarks achieved for business brokers and M&amp;A advisory firms nationwide.
          </p>
        </div>

        {/* 3 Stat Cards Container */}
        <div className="bg-gradient-to-r from-blue-50/80 via-purple-50/50 to-emerald-50/80 rounded-3xl p-5 sm:p-6 md:p-5 lg:p-8 border-2 border-blue-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 lg:gap-5">
            {IMPACT_STATS.map((stat, idx) => {
              const theme = cardThemes[idx]
              return (
                <div 
                  key={idx} 
                  className={`bg-white border-2 ${theme.borderColor} ${theme.bgCard} rounded-2xl p-4 sm:p-5 md:p-3.5 lg:p-5 flex items-center gap-3 lg:gap-4 transition-all duration-300 shadow-sm hover:shadow-lg group`}
                >
                  <div className={`w-11 h-11 lg:w-13 lg:h-13 rounded-2xl ${theme.iconBg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                    {icons[idx]}
                  </div>
                  <div className="min-w-0">
                    <p className={`text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold ${theme.numColor} tracking-tight leading-none mb-1`}>
                      <AnimatedCounter value={stat.value} />
                    </p>
                    <p className="text-xs lg:text-sm font-bold text-slate-700 leading-snug">
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
