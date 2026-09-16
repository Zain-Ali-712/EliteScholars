import { HERO_STATS } from '@/data/config'
import AnimatedCounter from '@/components/AnimatedCounter'

export default function TrustBar() {
  const cardThemes = [
    {
      borderColor: 'border-blue-200 hover:border-blue-400',
      iconBg: 'bg-blue-50 text-blue-600',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      numColor: 'text-blue-600',
      tag: 'Nationwide',
    },
    {
      borderColor: 'border-purple-200 hover:border-purple-400',
      iconBg: 'bg-purple-50 text-purple-600',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
      numColor: 'text-purple-600',
      tag: 'Fast Start',
    },
    {
      borderColor: 'border-emerald-200 hover:border-emerald-400',
      iconBg: 'bg-emerald-50 text-emerald-600',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      numColor: 'text-emerald-600',
      tag: 'Pre-Screened',
    },
    {
      borderColor: 'border-amber-200 hover:border-amber-400',
      iconBg: 'bg-amber-50 text-amber-600',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
      numColor: 'text-amber-600',
      tag: 'High Return',
    },
  ]

  return (
    <section id="stats" className="py-14 sm:py-16 bg-white border-b border-slate-200/80">
      <div className="container-main">
        
        {/* Centered Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-200 shadow-xs mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Predictable Deal Flow, Measured in Real Numbers
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            How our targeted outreach consistently fuels seller pipelines for business brokers nationwide.
          </p>
        </div>

        {/* Small, Playful Stats Cards Grid (Matching Reference Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HERO_STATS.map((stat, idx) => {
            const theme = cardThemes[idx]
            return (
              <div
                key={idx}
                className={`p-5 sm:p-6 rounded-2xl border-2 ${theme.borderColor} bg-white shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between`}
              >
                <div>
                  {/* Icon & Badge Row */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className={`w-10 h-10 rounded-xl ${theme.iconBg} flex items-center justify-center font-bold text-sm shadow-xs group-hover:scale-105 transition-transform`}>
                      {idx === 0 && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      )}
                      {idx === 1 && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )}
                      {idx === 2 && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      )}
                      {idx === 3 && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-[10px] font-bold ${theme.badgeBg} border px-2.5 py-0.5 rounded-full uppercase tracking-wider`}>
                      {theme.tag}
                    </span>
                  </div>

                  {/* Big Number */}
                  <p className={`text-3xl sm:text-4xl font-extrabold ${theme.numColor} tracking-tight mb-1`}>
                    <AnimatedCounter value={stat.value} />
                  </p>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-slate-900 leading-snug mb-1">
                    {stat.label}
                  </h3>
                </div>

                {/* Subtitle / Description */}
                <p className="text-xs text-slate-500 font-medium pt-2 border-t border-slate-100 mt-2">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
