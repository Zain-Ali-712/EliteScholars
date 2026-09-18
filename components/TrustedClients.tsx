'use client'

import { TRUSTED_CLIENTS } from '@/data/config'

export default function TrustedClients() {
  // Duplicate the clients array to provide a seamless continuous marquee loop
  const marqueeClients = [...TRUSTED_CLIENTS, ...TRUSTED_CLIENTS]

  return (
    <section id="trusted-clients" className="py-12 sm:py-16 bg-gradient-to-b from-white via-slate-50/60 to-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div aria-hidden="true" className="absolute -left-20 top-1/2 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -right-20 top-1/2 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-7 sm:space-y-9 text-center relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Proven Broker Partnerships</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Trusted <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Clients</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base font-medium leading-relaxed max-w-xl mx-auto">
            Leading business brokerages, M&amp;A advisory networks, and acquisition firms that rely on our targeted seller deal flow.
          </p>
        </div>

        {/* Seamless Continuous Moving Marquee with Edge Gradient Masks */}
        <div className="relative w-full overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent_0,black_64px,black_calc(100%-64px),transparent_100%)]">
          <div className="animate-marquee flex items-center gap-4 sm:gap-6 hover:[animation-play-state:paused] cursor-pointer">
            {marqueeClients.map((client, idx) => (
              <div
                key={idx}
                className="px-5 py-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-400/80 transition-all duration-200 flex items-center gap-3.5 shrink-0 group select-none"
              >
                {/* Logo Frame */}
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 p-1.5 flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-transform duration-200">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain filter drop-shadow-2xs"
                    loading="lazy"
                  />
                </div>

                {/* Text Info */}
                <div className="text-left space-y-0.5">
                  <div className="font-bold text-sm md:text-base text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight whitespace-nowrap">
                    {client.name}
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {client.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

