'use client'

import { useState } from 'react'
import { SITE } from '@/data/config'

interface FinalCtaProps {
  onOpenBooking: () => void
}

export default function FinalCta({ onOpenBooking }: FinalCtaProps) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onOpenBooking()
  }

  return (
    <section id="cta" className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-white via-[#F8FAFF] to-white border-t border-slate-200/80 relative overflow-hidden">
      {/* Background Subtle Texture */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(#93C5FD_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-35 pointer-events-none" 
      />

      <div className="container-main max-w-4xl relative z-10">
        {/* Lighter Theme Blue Card */}
        <div className="relative rounded-3xl md:rounded-[32px] overflow-hidden p-6 sm:p-8 md:p-9 shadow-2xl bg-gradient-to-br from-[#EAF2FD] via-[#F6F9FF] to-[#EBF3FE] text-center border-2 border-blue-200/80 ring-1 ring-blue-400/20">
          
          {/* Ambient Lighting (Dominant Blue with Only a Very Subtle Warm Touch) */}
          <div aria-hidden="true" className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[260px] bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
          <div aria-hidden="true" className="absolute -top-12 left-10 w-64 h-64 bg-sky-300/20 rounded-full blur-2xl pointer-events-none" />
          <div aria-hidden="true" className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[220px] bg-blue-500/12 rounded-full blur-3xl pointer-events-none" />
          <div aria-hidden="true" className="absolute -bottom-12 right-10 w-48 h-48 bg-orange-300/10 rounded-full blur-2xl pointer-events-none" />
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(rgba(37,99,235,0.06)_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />

          {/* Centered Content */}
          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
            
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-blue-100 text-blue-700 border border-blue-200/90 rounded-full mb-3 shadow-2xs backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-wider">
                Exclusive Territory Allocation
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-2">
              The <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">#1 Seller Lead System</span> for Business Brokers &amp; M&amp;A Advisors
            </h2>

            {/* Subheading */}
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-md mx-auto mb-5 leading-relaxed">
              Schedule a 15-minute territory review &mdash; lock in dedicated seller appointment outreach in your market.
            </p>

            {/* Signature Pill Capsule (Seamless Round White Input + Button with Proper Arrow) */}
            <form 
              onSubmit={handleSubmit}
              className="w-full max-w-lg mx-auto rounded-full bg-white border-2 border-blue-300/90 p-1.5 shadow-xl shadow-blue-500/10 hover:border-blue-400 focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-500/15 transition-all duration-300 flex flex-col sm:flex-row items-center gap-1.5 group/capsule"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                style={{ outline: 'none', boxShadow: 'none' }}
                className="w-full sm:flex-1 bg-transparent px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 border-none outline-none ring-0 focus:outline-none focus:ring-0 focus:border-none rounded-full text-center sm:text-left"
              />
              <button
                type="submit"
                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-extrabold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] cursor-pointer group shrink-0"
              >
                <span>Book Strategy Call</span>
                {/* Circular Arrow Badge with Proper Arrow */}
                <span className="w-6 h-6 rounded-full bg-white/20 border border-white/30 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                  <svg 
                    className="w-3.5 h-3.5 text-white animate-arrow-blink group-hover:animate-none group-hover:translate-x-0.5 group-hover:opacity-100 transition-all duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </button>
            </form>

            {/* Trust Line Under Capsule */}
            <p className="text-[11px] sm:text-xs text-slate-500 mt-3 font-medium">
              Free 15-minute consultation &bull; No long-term contract &bull; 100% pre-qualified conversations
            </p>

            {/* Direct Contact Links */}
            <div className="mt-4 pt-3.5 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-700">
              <span className="inline-flex items-center gap-1.5 bg-white/80 border border-blue-200 px-3 py-1 rounded-full shadow-2xs">
                Direct Phone: <a href={`tel:${SITE.phone.replace(/[^0-9+]/g, '')}`} className="text-blue-600 hover:text-blue-800 font-bold underline transition-colors">{SITE.phone}</a>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/80 border border-blue-200 px-3 py-1 rounded-full shadow-2xs">
                Direct Email: <a href={`mailto:${SITE.email}`} className="text-blue-600 hover:text-blue-800 font-bold underline transition-colors">{SITE.email}</a>
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}


