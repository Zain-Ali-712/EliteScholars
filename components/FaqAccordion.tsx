'use client'

import { useState } from 'react'
import { FAQ_ITEMS } from '@/data/config'

interface FaqAccordionProps {
  onOpenBooking?: () => void
}

export default function FaqAccordion({ onOpenBooking }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id || null)

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq" className="py-8 md:py-12 bg-paper border-b border-[rgba(31,39,51,0.08)]">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: FAQ Accordion Stack (~7 Cols) */}
          <div className="lg:col-span-7 bg-[#F4F6F9] p-3 sm:p-4 rounded-[28px] border border-slate-200/60 shadow-xs">
            <div className="space-y-2.5">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openId === item.id
                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-[20px] overflow-hidden transition-all duration-200 border shadow-xs ${
                      isOpen ? 'border-brass shadow-xs' : 'border-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                      className="w-full px-4.5 py-3.5 sm:px-5 sm:py-4 flex items-center justify-between text-left focus-visible:outline-2"
                    >
                      <span className="font-public-sans font-bold text-sm sm:text-base text-ink-navy leading-snug pr-3">
                        {item.question}
                      </span>
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                          isOpen ? 'bg-ink-navy text-white shadow-xs' : 'bg-[#F0F4F8] text-ink-navy hover:bg-slate-200'
                        }`}
                      >
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isOpen ? 'rotate-90' : 'rotate-0'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M7 17L17 7M17 7H7M17 7V17"
                          />
                        </svg>
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-answer-${item.id}`}
                        className="px-4.5 pb-4 sm:px-5 text-xs sm:text-sm text-slate leading-relaxed font-public-sans border-t border-slate-100 pt-3 animate-pipeline-in"
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column: Title, Subtitle, CTA, Middle Visual Card & Bottom Contact Box (~5 Cols) */}
          <div className="lg:col-span-5 space-y-4 lg:pl-2 flex flex-col justify-between h-full">
            
            {/* Top Title & Copy */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-fraunces text-ink-navy leading-tight mb-1.5">
                Questions <br />
                <span className="text-brass">Answered</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate font-public-sans leading-relaxed mb-4 mt-2">
                Got questions? We've got clear answers about how Elite Scholars works.
              </p>
              <button
                onClick={onOpenBooking}
                className="btn-primary text-xs py-3 px-6 shadow-sm"
              >
                Book a Strategy Call
              </button>
            </div>

            {/* Middle Visual Feature Card */}
            <div className="bg-[#F4F6F9] p-3.5 sm:p-4 rounded-[28px] border border-slate-200/60 shadow-xs">
              <div className="bg-white p-3.5 sm:p-4 rounded-[20px] border border-slate-100 shadow-xs flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-ink-navy text-brass flex items-center justify-center shrink-0 border border-brass/30 shadow-xs">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-brass bg-brass/10 border border-brass/30 px-2 py-0.5 rounded-full font-public-sans uppercase">
                    Quality Standard
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-ink-navy font-public-sans mt-1 leading-snug">
                    100% Pre-Screened Revenue &amp; Seller Authority
                  </h4>
                  <p className="text-[11px] text-slate font-public-sans mt-0.5">
                    Senior M&amp;A analysts verify every lead before calendar booking.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Contact Card ("Have more questions?") */}
            <div className="bg-[#F4F6F9] p-3.5 sm:p-4.5 rounded-[28px] border border-slate-200/60 shadow-xs">
              <div className="bg-white p-4 sm:p-4.5 rounded-[20px] border border-slate-100 shadow-xs space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ink-navy text-brass flex items-center justify-center shrink-0 border-2 border-brass/50 shadow-xs">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate uppercase tracking-wider font-public-sans">
                      Have more questions?
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-ink-navy font-public-sans">
                      Book a free discovery call
                    </p>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-4 bg-ink-navy text-white text-xs font-bold font-public-sans rounded-full hover:bg-brass transition-colors shadow-sm text-center flex items-center justify-center gap-2"
                >
                  <span>Let&apos;s Talk Elite Scholars</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
