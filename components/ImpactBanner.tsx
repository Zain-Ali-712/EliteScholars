import { IMPACT_STATS } from '@/data/config'
import AnimatedCounter from '@/components/AnimatedCounter'

export default function ImpactBanner() {
  return (
    <section id="impact" className="py-20 bg-[#070B14] text-paper border-b border-brass/30 relative overflow-hidden">
      {/* Background texture line pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, var(--brass) 0px, var(--brass) 1px, transparent 1px, transparent 40px)`,
        }}
      />

      <div className="container-main relative">
        <div className="text-center mb-12">
          <p className="eyebrow uppercase text-brass text-xs font-bold tracking-widest font-public-sans">
            Aggregate Track Record
          </p>
          <h2 className="text-2xl md:text-3xl font-bold font-fraunces text-white mt-1">
            Proven Scale Across North American Brokerages
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {IMPACT_STATS.map((stat, idx) => (
            <div key={idx} className="pt-6 md:pt-0 px-4">
              <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brass font-public-sans tracking-tight mb-2">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="text-sm md:text-base font-semibold text-paper/85 font-public-sans max-w-[28ch] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
