import { HERO_STATS } from '@/data/config'
import AnimatedCounter from '@/components/AnimatedCounter'

export default function TrustBar() {
  const statBadges = ['Nationwide', 'Fast Start', 'All Qualified', 'Strong Returns']

  return (
    <section id="trust" className="py-8 sm:py-10 bg-white border-b border-[rgba(31,39,51,0.08)]">
      <div className="container-main">
        {/* Compact, High-Impact Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {HERO_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="relative p-5 sm:p-6 rounded-2xl border border-ink-navy/10 border-t-4 border-t-brass bg-white shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              {/* Background Ambient Glow */}
              <div aria-hidden="true" className="absolute -top-10 -right-10 w-24 h-24 bg-brass/10 rounded-full blur-xl group-hover:bg-brass/20 transition-colors" />

              {/* Icon & Badge Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-ink-navy text-brass flex items-center justify-center shadow-xs border border-brass/30 group-hover:scale-105 transition-transform">
                  {idx === 0 && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {idx === 2 && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {idx === 3 && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  )}
                </div>
                <span className="text-[10px] font-bold text-[#8B6332] bg-brass/10 border border-brass/30 px-2.5 py-0.5 rounded-full font-public-sans tracking-wide">
                  {statBadges[idx]}
                </span>
              </div>

              {/* Glowing Stat Number */}
              <p className="text-3xl sm:text-4xl font-extrabold text-ink-navy font-public-sans tracking-tight mb-1 group-hover:text-brass transition-colors">
                <AnimatedCounter value={stat.value} />
              </p>

              {/* Stat Description Label */}
              <p className="font-public-sans text-xs font-bold text-charcoal/90 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
