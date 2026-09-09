import { TRUST_LOGOS, HERO_STATS } from '@/data/config'
import AnimatedCounter from '@/components/AnimatedCounter'

export default function TrustBar() {
  return (
    <section id="trust" className="py-12 bg-white border-b border-[rgba(31,39,51,0.08)]">
      <div className="container-main">
        {/* Institutional Logos */}
        <div className="mb-10 text-center">
          <p className="eyebrow mb-6 uppercase tracking-wider text-xs font-semibold text-slate">
            Trusted by Business Brokers and M&amp;A Firms Nationwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {TRUST_LOGOS.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 font-fraunces font-bold text-lg md:text-xl text-ink-navy tracking-tight hover:text-brass transition-colors"
                aria-label={item.name}
              >
                <div className="w-6 h-6 rounded-xs bg-ink-navy/10 text-ink-navy text-xs flex items-center justify-center font-bold">
                  {item.logo}
                </div>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Number Stat Strip with Animated Counter */}
        <div className="pt-8 border-t border-[rgba(31,39,51,0.08)] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {HERO_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-sm border border-[rgba(31,39,51,0.08)] bg-paper hover:border-brass/40 transition-colors shadow-xs"
            >
              <p className="stat-number text-3xl sm:text-4xl md:text-5xl mb-2 font-public-sans font-extrabold text-brass">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="font-public-sans text-xs md:text-sm font-semibold text-charcoal/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
