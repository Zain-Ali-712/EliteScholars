import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, TESTIMONIALS } from '@/data/config'
import BookingCalendar from '@/components/BookingCalendar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Book a Strategy Call with Ahsaan Mansha | BrokerLeadz',
  description:
    'Schedule an exclusive 1-on-1 discovery session with Ahsaan Mansha, CEO of BrokerLeadz. Diagnose your seller pipeline and explore exclusive territory availability.',
}

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#DFEDFE] via-[#F4F8FE] to-[#E9F3FE] text-slate-800 relative overflow-hidden">
      {/* ── Big-Box Geometric Grid Pattern covering upper area with smooth fade mask ── */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.09)_1.5px,transparent_1.5px),linear-gradient(to_bottom,rgba(37,99,235,0.09)_1.5px,transparent_1.5px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_15%,#000_30%,transparent_100%)] pointer-events-none" 
      />

      {/* ── Stronger Ambient Color Ratio Glows (Blue, Sky & Soft Warm Touch) ── */}
      <div aria-hidden="true" className="absolute top-0 left-1/4 w-[650px] h-[650px] bg-blue-500/18 rounded-full blur-3xl pointer-events-none -translate-y-1/3" />
      <div aria-hidden="true" className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-sky-400/18 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/12 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute top-12 right-1/4 w-72 h-72 bg-amber-300/15 rounded-full blur-3xl pointer-events-none" />

      {/* 1. Header Bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-2xs relative">
        <div className="container-main py-2.5 sm:py-3 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 group text-decoration-none focus-visible:outline-2"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-700 flex items-center justify-center text-white font-extrabold text-sm tracking-tight shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              BL
            </div>
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900">
              {SITE.name}
            </span>
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/"
              className="text-xs sm:text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Home</span>
            </Link>

            <a
              href={`tel:${SITE.phone.replace(/[^0-9+]/g, '')}`}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 px-3 py-1.5 rounded-xl transition-colors border border-slate-200"
            >
              <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{SITE.phone}</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. Main Content */}
      <main className="py-8 sm:py-10 md:py-12 relative z-10">
        <div className="container-main">

          {/* ═══ TOP SECTION: Headline & Value on LEFT, Interactive Calendar on RIGHT ═══ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-16 sm:mb-20">
            
            {/* Left: Value Proposition, Guarantees & Stats */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 border border-blue-200 shadow-2xs mb-3">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>Exclusive 1-on-1 Strategy Session</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                Book Your Strategy Call with{' '}
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600 bg-clip-text text-transparent">
                  Ahsaan Mansha
                </span>
              </h1>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium mb-5 max-w-xl">
                Select a date and time on the calendar to reserve your 20-minute consultation directly with our founder. We&apos;ll evaluate your territory, diagnose pipeline bottlenecks, and discover how our targeted cold outreach generates pre-qualified seller listings.
              </p>

              {/* Core Benefits Checklist */}
              <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-700 font-semibold">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Direct 1-on-1 Zoom with Founder &amp; CEO Ahsaan Mansha</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Confidential review of your territory &amp; target verticals</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>100% Free consultation &bull; Zero pitch pressure or obligation</span>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 max-w-lg mb-5">
                <div className="p-3 bg-white/95 backdrop-blur-xs rounded-2xl border-2 border-blue-200/90 shadow-sm text-center">
                  <div className="text-base sm:text-lg font-extrabold text-blue-700">60+</div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-500">Brokers Scaled</div>
                </div>
                <div className="p-3 bg-white/95 backdrop-blur-xs rounded-2xl border-2 border-emerald-200/90 shadow-sm text-center">
                  <div className="text-base sm:text-lg font-extrabold text-emerald-700">$100M+</div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-500">Deal Volume</div>
                </div>
                <div className="p-3 bg-white/95 backdrop-blur-xs rounded-2xl border-2 border-amber-200/90 shadow-sm text-center">
                  <div className="text-base sm:text-lg font-extrabold text-amber-700">100%</div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-500">Pre-Qualified</div>
                </div>
              </div>

              {/* Quick Direct Desk Banner */}
              <div className="p-3 bg-blue-50/70 rounded-2xl border border-blue-200/80 flex items-center justify-between text-xs text-slate-700 font-semibold max-w-lg">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Prefer to speak immediately?</span>
                </span>
                <a href={`tel:${SITE.phone.replace(/[^0-9+]/g, '')}`} className="text-blue-700 font-bold hover:underline">
                  {SITE.phone}
                </a>
              </div>
            </div>

            {/* Right: Customized Interactive Calendar (Prominent Above-the-Fold Position) */}
            <div className="lg:col-span-6">
              <BookingCalendar />
            </div>

          </div>

          {/* ═══ BOTTOM SECTION: "Meet Ahsaan Mansha" & "What Happens On The Call" (Side-by-Side) ═══ */}
          <div className="mt-8 pt-12 border-t border-slate-200/90 mb-16 sm:mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 mb-2">
                <span>Session Blueprint &bull; Leadership Profile</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Who You&apos;re Meeting &amp; What Happens On The Call
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-2">
                Complete transparency into our executive leadership and what to expect on your discovery session.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              
              {/* ─── LEFT: Meet Ahsaan Mansha Executive Card ─── */}
              <div className="lg:col-span-6 bg-white/95 backdrop-blur-md border-2 border-blue-200/90 rounded-3xl p-5 sm:p-6 shadow-xl shadow-blue-900/5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3.5 pb-3 border-b border-slate-100">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-blue-700 text-white flex items-center justify-center font-extrabold text-base shadow-md shadow-blue-500/20 shrink-0 border border-blue-400/30">
                      AM
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Direct Founder Access</span>
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                        Meet Ahsaan Mansha
                      </h3>
                      <p className="text-xs font-semibold text-blue-700">
                        Founder &amp; CEO, BrokerLeadz
                      </p>
                    </div>
                  </div>

                  <div className="py-4 space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    <p>
                      Ahsaan is the Founder &amp; CEO of BrokerLeadz, partnering directly with boutique M&amp;A advisory firms and business brokers to build high-conversion seller listing pipelines.
                    </p>
                    <p>
                      He personally architects outreach campaign strategies, oversees proprietary data verification, and trains our dedicated US calling team so brokers connect exclusively with qualified owners ready to sell.
                    </p>
                    <p>
                      Drawing on extensive background in executive outbound sourcing, Ahsaan ensures complete campaign transparency—every call recorded, every lead diligence-checked.
                    </p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 pt-1 pb-3">
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      M&amp;A Pipeline Strategy
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Proprietary Sourcing
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                      US Dialing Operations
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span className="text-blue-700 font-bold">Personal Desk: {SITE.phone}</span>
                  <span>Zoom Video Conference</span>
                </div>
              </div>

              {/* ─── RIGHT: What Happens On The Call (5 Simple Steps) ─── */}
              <div className="lg:col-span-6 bg-white/95 backdrop-blur-md border-2 border-blue-200/90 rounded-3xl p-5 sm:p-6 shadow-xl shadow-blue-900/5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200 mb-1 inline-block">
                        Agenda &amp; Structure
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                        What Happens On <span className="text-blue-600">The Call?</span>
                      </h3>
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-0.5 rounded-full">
                      5 Simple Steps
                    </span>
                  </div>

                  <div className="space-y-2 py-0.5">
                    {/* Step 1: Blue Card */}
                    <div className="p-2.5 rounded-2xl border-2 border-blue-200/90 bg-blue-50/30 hover:border-blue-400 transition-colors flex items-center gap-3">
                      <div className="w-7 h-7 rounded-xl bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs">
                        1
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                          Pipeline &amp; Territory Diagnosis
                        </h4>
                        <p className="text-xs text-slate-600 font-medium mt-0.5">
                          Review your target deal size ($500K–$50M), target verticals, and active sourcing bottlenecks.
                        </p>
                      </div>
                    </div>

                    {/* Step 2: Amber Card */}
                    <div className="p-2.5 rounded-2xl border-2 border-amber-300/90 bg-amber-50/30 hover:border-amber-400 transition-colors flex items-center gap-3">
                      <div className="w-7 h-7 rounded-xl bg-amber-500 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs">
                        2
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                          Exclusive Territory Verification
                        </h4>
                        <p className="text-xs text-slate-600 font-medium mt-0.5">
                          Confirm whether your geographic market and industry focus qualify for dedicated exclusivity.
                        </p>
                      </div>
                    </div>

                    {/* Step 3: Emerald Card */}
                    <div className="p-2.5 rounded-2xl border-2 border-emerald-300/90 bg-emerald-50/30 hover:border-emerald-400 transition-colors flex items-center gap-3">
                      <div className="w-7 h-7 rounded-xl bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs">
                        3
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                          Zero-Cost Strategy Session
                        </h4>
                        <p className="text-xs text-slate-600 font-medium mt-0.5">
                          100% free and transparent discovery. No high-pressure sales pitches, tactics, or obligations.
                        </p>
                      </div>
                    </div>

                    {/* Step 4: Sky/Cyan Card */}
                    <div className="p-2.5 rounded-2xl border-2 border-sky-300/90 bg-sky-50/30 hover:border-sky-400 transition-colors flex items-center gap-3">
                      <div className="w-7 h-7 rounded-xl bg-sky-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs">
                        4
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                          System &amp; QA Transparency
                        </h4>
                        <p className="text-xs text-slate-600 font-medium mt-0.5">
                          Inspect our data sources, US dialers, qualification criteria, and call recording QA.
                        </p>
                      </div>
                    </div>

                    {/* Step 5: Orange Card */}
                    <div className="p-2.5 rounded-2xl border-2 border-orange-300/90 bg-orange-50/30 hover:border-orange-400 transition-colors flex items-center gap-3">
                      <div className="w-7 h-7 rounded-xl bg-orange-500 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs">
                        5
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                          Actionable Launch Roadmap
                        </h4>
                        <p className="text-xs text-slate-600 font-medium mt-0.5">
                          Agree on onboarding to initiate outreach and deliver your first seller call within 48 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Guarantee summary bar */}
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1 text-emerald-700">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Confidential &bull; Zero Obligation
                  </span>
                  <span>Direct Desk: {SITE.phone}</span>
                </div>
              </div>

            </div>
          </div>

          {/* 3. Proof Strip: Real Client Video Testimonials */}
          <div className="mt-16 sm:mt-20 pt-12 border-t border-slate-200/90">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 mb-2">
                <span>Verified Client Experiences</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Hear Directly From Brokers Who Work With Ahsaan
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-2">
                Real M&amp;A advisors and business brokers share their results and experience partnering with Ahsaan Mansha and BrokerLeadz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {TESTIMONIALS.map((item, idx) => {
                const cardBorders = [
                  'border-blue-200 hover:border-blue-400 shadow-blue-500/5',
                  'border-emerald-200 hover:border-emerald-400 shadow-emerald-500/5',
                  'border-amber-200 hover:border-amber-400 shadow-amber-500/5',
                ]
                return (
                  <div
                    key={item.id}
                    className={`bg-white/95 backdrop-blur-md border-2 ${cardBorders[idx % cardBorders.length]} rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between`}
                  >
                    <div>
                      {/* Top: Client Name, Firm, and Star Rating */}
                      <div className="flex items-start justify-between gap-3 pb-3 mb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-blue-700 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs">
                            {item.name.split(' ').map((n) => n[0]).join('')}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900">{item.name}</div>
                            <div className="text-[10px] text-blue-700 font-semibold">{item.firm}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-0.5 text-amber-400 bg-amber-50/80 px-2 py-0.5 rounded-full border border-amber-200/60 shrink-0">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                          <span className="text-[10px] font-bold text-amber-800 ml-0.5">5.0</span>
                        </div>
                      </div>

                      {/* Middle: Video */}
                      {item.videoUrl && (
                        <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 mb-3.5 shadow-xs">
                          <video
                            controls
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover"
                            src={item.videoUrl}
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      )}

                      {/* Bottom: Quote (2-3 lines) */}
                      <p className="text-xs text-slate-600 italic leading-relaxed line-clamp-3">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  )
}
