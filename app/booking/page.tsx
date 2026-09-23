import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, TESTIMONIALS } from '@/data/config'
import Footer from '@/components/Footer'
import CalendlyEmbed from '@/components/CalendlyEmbed'

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

          {/* ═══ BROKERPARTNERZ-STYLE 2-COLUMN BOOKING CONTAINER ═══ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-16 sm:mb-20">
            
            {/* ─── LEFT COLUMN: Calendly Direct Booking Hub (~7 Cols) ─── */}
            <div className="lg:col-span-7">
              <div className="mb-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 border border-blue-200 shadow-2xs mb-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>15-Minute Strategy Session</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight mb-2.5">
                  Book a Free Strategy Call with{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600 bg-clip-text text-transparent">
                    Ahsaan Mansha
                  </span>
                </h1>
                
                <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl leading-relaxed">
                  Pick an available slot on Ahsaan&apos;s live schedule to explore your listing pipeline and exclusive territory.
                </p>
              </div>

              {/* Calendly Booking Action Card */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xl shadow-blue-900/5">
                
                {/* Header row with icon & live availability */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20 shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                        Schedule on Calendly
                      </h2>
                      <p className="text-xs text-slate-500 font-medium">
                        Real-time availability with instant invite
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open Slots</span>
                  </span>
                </div>

                {/* 3 Colorful Micro Badges (Amber, Blue, Emerald) */}
                <div className="grid grid-cols-3 gap-2.5 mb-6">
                  <div className="p-2.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-center">
                    <div className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">Duration</div>
                    <div className="text-xs sm:text-sm font-extrabold text-amber-950 mt-0.5">15 Minutes</div>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-blue-50/80 border border-blue-200/80 text-center">
                    <div className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">With</div>
                    <div className="text-xs sm:text-sm font-extrabold text-blue-950 mt-0.5 truncate">Ahsaan Mansha</div>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 text-center">
                    <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Cost</div>
                    <div className="text-xs sm:text-sm font-extrabold text-emerald-950 mt-0.5">100% Free</div>
                  </div>
                </div>

                {/* Embedded Calendly Widget */}
                <div className="space-y-3">
                  <div className="rounded-2xl overflow-hidden border border-slate-100">
                    <CalendlyEmbed url={SITE.calendlyUrl || ''} minHeight={680} />
                  </div>

                  {/* Micro reassurance */}
                  <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5 font-medium text-center pt-1">
                    <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Instant calendar invite sent &bull; Select your local timezone</span>
                  </p>

                  <a
                    href={SITE.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    Having trouble? Open scheduler in a new tab &rarr;
                  </a>
                </div>

              </div>

              {/* Immediate Desk Phone Reassurance */}
              <div className="mt-4 p-3.5 bg-white/90 rounded-2xl border border-slate-200/90 flex items-center justify-between text-xs text-slate-700 font-semibold shadow-2xs">
                <span className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200/80">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <span>Prefer to speak immediately?</span>
                </span>
                <a href={`tel:${SITE.phone.replace(/[^0-9+]/g, '')}`} className="text-blue-700 font-bold hover:underline">
                  {SITE.phone}
                </a>
              </div>
            </div>

            {/* ─── RIGHT COLUMN: Context, Founder Profile & What Happens (~5 Cols) ─── */}
            <div className="lg:col-span-5 space-y-6">

              {/* 1. Meet with Ahsaan Mansha Card (with Professional Headshot Image) */}
              <div className="bg-white/95 backdrop-blur-md border-2 border-blue-200/90 rounded-3xl p-5 sm:p-6 shadow-xl shadow-blue-900/5">
                <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                  <div className="relative shrink-0">
                    <img
                      src="/images/Ahsaan_Professional_Headshot.png"
                      alt="Ahsaan Mansha, CEO & Founder of BrokerLeadz"
                      className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover border-2 border-blue-200 shadow-md"
                    />
                    <span
                      className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"
                      title="Online & Ready for Sessions"
                    />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-1">
                      <span>CEO &bull; 15-Min Discovery</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                      Meet with Ahsaan Mansha
                    </h3>
                    <p className="text-xs font-semibold text-blue-700">
                      Founder &amp; CEO, BrokerLeadz
                    </p>
                  </div>
                </div>

                <div className="py-3.5 space-y-2.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-medium">
                  <p>
                    Ahsaan is the CEO and founder of BrokerLeadz, providing specialized seller lead generation and outbound pipeline infrastructure for the last <strong>5&ndash;6 years</strong> to business brokers and M&amp;A advisors across the US.
                  </p>
                  <p>
                    In this 15-minute discovery call, he will personally analyze if we are the right match, evaluate if your brokerage is fitting, and give clear answers to every concern and anything you want to ask. Once aligned, we proceed directly to the actual business.
                  </p>
                </div>

                {/* Micro Expertise Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    5–6 Years US Broker Experience
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Dedicated US Dialers
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                    Criteria Replacement Guarantee
                  </span>
                </div>
              </div>

              {/* 2. What Happens on the Call? (Shorter & Simpler) */}
              <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100">
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                    What Happens on <span className="text-blue-600">the Call?</span>
                  </h3>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-0.5 rounded-full">
                    15 Mins
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-600 font-medium leading-relaxed">
                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-blue-50/40 border border-blue-100">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-slate-900 block font-bold">Pipeline &amp; Fit Check</strong>
                      We diagnose your target revenue ($500K&ndash;$50M) and ensure we are the right match.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-sky-50/40 border border-sky-100">
                    <span className="w-5 h-5 rounded-full bg-sky-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-slate-900 block font-bold">Direct Answers to Any Concern</strong>
                      Ahsaan answers your questions on dialers, call recordings, criteria, and territory exclusivity.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-emerald-50/40 border border-emerald-100">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-slate-900 block font-bold">Action Plan &amp; Immediate Launch</strong>
                      If aligned, we reserve your exclusive territory and launch outreach within 48 hours.
                    </div>
                  </div>
                </div>

                {/* Compact Reassurance */}
                <div className="mt-3 p-2.5 bg-slate-50 border-l-2 border-blue-600 rounded-r-lg text-[11px] text-slate-600 italic leading-relaxed">
                  &ldquo;If we&apos;re not the right fit, we&apos;ll tell you honestly and point you in the right direction.&rdquo;
                </div>

                {/* Compact Trust Checklist */}
                <div className="mt-3 pt-2.5 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>15 minutes only</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>Direct with Ahsaan</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Zero obligation</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                    <span>Instant invite email</span>
                  </div>
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto px-4 sm:px-6">
              {TESTIMONIALS.map((item, idx) => {
                const cardBorders = [
                  'border-blue-200 hover:border-blue-400 shadow-blue-500/5',
                  'border-emerald-200 hover:border-emerald-400 shadow-emerald-500/5',
                  'border-amber-200 hover:border-amber-400 shadow-amber-500/5',
                ]
                return (
                  <div
                    key={item.id}
                    className={`bg-white/95 backdrop-blur-md border-2 ${cardBorders[idx % cardBorders.length]} rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow`}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 h-full items-stretch">
                      {/* Left: Client Info & Quote */}
                      <div className="sm:col-span-7 flex flex-col justify-between">
                        <div>
                          {/* Name, Company & Stars in same column, different rows */}
                          <div className="flex items-start gap-2.5 pb-2.5 mb-2.5 border-b border-slate-100">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-blue-700 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                              {item.name.split(' ').map((n) => n[0]).join('')}
                            </div>
                            <div className="flex flex-col space-y-0.5">
                              {/* Row 1: Name */}
                              <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">{item.name}</div>
                              {/* Row 2: Company */}
                              <div className="text-[11px] text-blue-700 font-semibold leading-snug">{item.firm}</div>
                              {/* Row 3: Stars */}
                              <div className="flex items-center gap-1 text-amber-400 pt-0.5">
                                <div className="flex items-center gap-0.5">
                                  {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                  ))}
                                </div>
                                <span className="text-[10px] font-bold text-amber-800 ml-0.5">5.0</span>
                              </div>
                            </div>
                          </div>

                          {/* Quote */}
                          <p className="text-xs sm:text-[13px] text-slate-600 italic leading-relaxed font-medium">
                            &ldquo;{item.quote}&rdquo;
                          </p>
                        </div>

                        {item.stats && (
                          <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold">
                            <span className="text-emerald-700 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              Verified Result
                            </span>
                            <span className="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded">
                              {item.stats}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Right: Responsive Video Frame */}
                      <div className="sm:col-span-5 flex items-center justify-center">
                        <div className="relative w-full h-[185px] sm:h-auto sm:aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-inner flex items-center justify-center">
                          {item.videoUrl ? (
                            <video
                              key={item.videoUrl}
                              controls
                              playsInline
                              preload="metadata"
                              className="w-full h-full object-contain sm:object-cover bg-black"
                            >
                              <source src={item.videoUrl} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          ) : null}
                        </div>
                      </div>
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
