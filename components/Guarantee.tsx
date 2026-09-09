import { GUARANTEE_DATA } from '@/data/config'

export default function Guarantee() {
  return (
    <section id="guarantee" className="section-padding bg-paper border-b border-[rgba(31,39,51,0.08)]">
      <div className="container-main">
        <div className="panel-border bg-white p-8 md:p-14 relative overflow-hidden shadow-lg">
          <div className="absolute top-0 left-0 w-2 h-full bg-brass" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (~8 Cols) */}
            <div className="lg:col-span-8 pl-2 md:pl-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brass/10 border border-brass/30 rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-brass" aria-hidden="true" />
                <span className="font-public-sans text-xs font-semibold text-[#8B6332] uppercase tracking-wider">
                  Contractual Assurance
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink-navy mb-6 font-fraunces">
                {GUARANTEE_DATA.title}
              </h2>

              <p className="text-base md:text-lg text-charcoal/90 font-public-sans leading-relaxed mb-8">
                {GUARANTEE_DATA.body}
              </p>

              {/* SLA Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#FAF9F7] border border-brass/30 rounded-xs flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brass text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <p className="text-xs font-bold text-ink-navy font-public-sans">Zero-Cost Replacement SLA</p>
                    <p className="text-[11px] text-slate font-public-sans">Non-qualifying appointments replaced free of charge</p>
                  </div>
                </div>

                <div className="p-4 bg-[#FAF9F7] border border-brass/30 rounded-xs flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brass text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <p className="text-xs font-bold text-ink-navy font-public-sans">48-Hour Rescheduling Window</p>
                    <p className="text-[11px] text-slate font-public-sans">Missed calls reported in 48 hours rescheduled immediately</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Seal & Badge (~4 Cols) */}
            <div className="lg:col-span-4 text-center lg:border-l lg:border-[rgba(31,39,51,0.1)] lg:pl-8 py-4">
              <div className="w-28 h-28 mx-auto rounded-full bg-ink-navy text-brass border-4 border-brass p-2 flex flex-col items-center justify-center shadow-md mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-paper/70 font-public-sans">
                  Official
                </span>
                <span className="font-fraunces font-bold text-xl text-brass">
                  100%
                </span>
                <span className="text-[9px] font-semibold text-paper/80 uppercase font-public-sans">
                  Guaranteed
                </span>
              </div>
              <p className="text-xs font-bold text-ink-navy font-public-sans">
                Written Agreement Required
              </p>
              <p className="text-[11px] text-slate font-public-sans max-w-[24ch] mx-auto mt-1">
                Your target revenue, industry, and owner criteria are legally appended to your client contract.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
