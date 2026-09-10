import { GUARANTEE_DATA } from '@/data/config'

export default function Guarantee() {
  return (
    <section id="guarantee" className="py-12 md:py-16 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-[rgba(31,39,51,0.08)] relative overflow-hidden">
      {/* Background ambient radial glow effect */}
      <div aria-hidden="true" className="absolute -left-20 top-1/2 w-64 h-64 bg-brass/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        
        {/* Outer Framed Panel matching FAQ, Qualifier, and Roadmap styling */}
        <div className="bg-[#F4F6F9] rounded-[28px] p-5 sm:p-7 border border-slate-200/60 shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column (~8 Cols) */}
            <div className="lg:col-span-8">
              <div className="agency-pill mb-3">
                <span className="w-2 h-2 rounded-full bg-brass" aria-hidden="true" />
                <span>Contractual Assurance</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ink-navy mb-2.5 font-fraunces">
                Our <span className="text-brass">standard</span>, in writing.
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate font-public-sans leading-relaxed mb-6">
                {GUARANTEE_DATA.body}
              </p>

              {/* SLA Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-4 bg-white border border-slate-200/80 rounded-2xl flex items-start gap-3.5 shadow-xs hover:shadow-sm transition-all">
                  <div className="w-8 h-8 rounded-full bg-brass/10 text-brass border border-brass/30 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-ink-navy font-public-sans">Zero-Cost Replacement SLA</p>
                    <p className="text-[11px] sm:text-xs text-slate font-public-sans mt-0.5">Non-qualifying appointments replaced free of charge</p>
                  </div>
                </div>

                <div className="p-4 bg-white border border-slate-200/80 rounded-2xl flex items-start gap-3.5 shadow-xs hover:shadow-sm transition-all">
                  <div className="w-8 h-8 rounded-full bg-brass/10 text-brass border border-brass/30 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-ink-navy font-public-sans">48-Hour Rescheduling Window</p>
                    <p className="text-[11px] sm:text-xs text-slate font-public-sans mt-0.5">Missed calls reported in 48 hours rescheduled immediately</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Seal & Executive Badge (~4 Cols) */}
            <div className="lg:col-span-4">
              <div className="bg-ink-navy text-white rounded-2xl p-6 border border-brass/30 shadow-lg text-center relative overflow-hidden flex flex-col items-center justify-center">
                <div aria-hidden="true" className="absolute -right-12 -top-12 w-32 h-32 bg-brass/10 rounded-full blur-2xl pointer-events-none" />

                <div className="w-24 h-24 rounded-full bg-brass/10 text-brass border-2 border-brass/40 flex flex-col items-center justify-center mb-3 shadow-md group hover:scale-105 transition-transform">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-paper/70 font-public-sans">
                    Official
                  </span>
                  <span className="font-fraunces font-extrabold text-2xl text-brass leading-none my-0.5">
                    100%
                  </span>
                  <span className="text-[8px] font-extrabold text-paper/80 uppercase font-public-sans tracking-wider">
                    Guaranteed
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-bold text-white font-public-sans mb-1">
                  Written Agreement Required
                </p>
                <p className="text-[11px] text-paper/75 font-public-sans leading-relaxed">
                  Your target revenue, industry, and owner criteria are legally appended to your client contract.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
