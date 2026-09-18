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
    <section id="faq" className="py-10 md:py-14 bg-gradient-to-b from-[#F8FAFF] via-white to-[#F8FAFF] border-b border-slate-200/80 relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div aria-hidden="true" className="absolute -right-20 top-1/3 w-72 h-72 bg-sky-400/12 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -left-20 bottom-1/3 w-72 h-72 bg-blue-400/12 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        
        {/* Centered Section Header - Compact */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100/80 text-blue-700 border border-blue-200 shadow-2xs mb-2.5">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Questions? We&apos;ve Got <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Answers</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            Clear answers about how Elite Scholars fuels your pipeline with verified seller meetings.
          </p>
        </div>

        {/* Compact Accordion Stack Container */}
        <div className="max-w-3xl mx-auto bg-white p-3.5 sm:p-5 md:p-6 rounded-3xl border-2 border-slate-200/80 shadow-sm space-y-2.5 mb-6">
          {FAQ_ITEMS.map((item, qIdx) => {
            const isOpen = openId === item.id
            const itemAccents = [
              'border-blue-300 bg-blue-50/20',
              'border-sky-300 bg-sky-50/20',
              'border-emerald-300 bg-emerald-50/20',
              'border-amber-300 bg-amber-50/20',
            ]
            const activeAccent = itemAccents[qIdx % itemAccents.length]

            return (
              <div
                key={item.id}
                className={`rounded-2xl overflow-hidden transition-all duration-200 border-2 ${
                  isOpen ? activeAccent : 'border-slate-200/60 hover:border-slate-300 bg-slate-50/30'
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between text-left focus-visible:outline-2 cursor-pointer gap-3.5"
                >
                  <span className="font-bold text-xs sm:text-sm md:text-base text-slate-900 leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 font-bold ${
                      isOpen ? 'bg-gradient-to-tr from-blue-600 to-blue-700 text-white shadow-xs' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                    }`}
                  >
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-4 pb-3.5 sm:px-5 sm:pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium border-t border-current/10 pt-2.5 animate-pipeline-in"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Compact Bottom Support Banner */}
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 via-sky-50/60 to-blue-50 rounded-2xl p-4 sm:p-4.5 border-2 border-blue-200 text-center flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
          <div className="text-center sm:text-left">
            <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">Have a specific question about your territory?</h4>
            <p className="text-[11px] text-slate-500 font-medium">Talk with our strategy lead to review target volume in your market.</p>
          </div>
          <button
            onClick={onOpenBooking}
            className="btn-primary text-xs py-2.5 px-5 shrink-0 shadow-sm"
          >
            Book Strategy Call
          </button>
        </div>

      </div>
    </section>
  )
}
