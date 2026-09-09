'use client'

import { useState } from 'react'
import { FAQ_ITEMS } from '@/data/config'

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id || null)

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq" className="section-padding bg-paper border-b border-[rgba(31,39,51,0.08)]">
      <div className="container-main max-w-4xl">
        {/* Section Header */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brass/10 border border-brass/30 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-brass" aria-hidden="true" />
            <span className="font-public-sans text-xs font-semibold text-[#8B6332] uppercase tracking-wider">
              Common Advisory Inquiries
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-fraunces text-ink-navy mb-4">
            Frequently asked questions
          </h2>
          <p className="text-base md:text-lg text-slate font-public-sans">
            Everything you need to know about our research protocols, SLAs, and lead generation standards.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id
            return (
              <div
                key={item.id}
                className="panel-border bg-white overflow-hidden transition-all duration-200 rounded-sm hover:border-brass/40 shadow-xs"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-2"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className="text-xs font-bold text-brass font-public-sans shrink-0">
                      0{idx + 1}.
                    </span>
                    <span className="font-public-sans font-bold text-base md:text-lg text-ink-navy">
                      {item.question}
                    </span>
                  </div>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shrink-0 border transition-transform ${
                    isOpen ? 'bg-brass text-ink-navy border-brass rotate-180' : 'bg-paper text-slate border-[rgba(31,39,51,0.12)]'
                  }`}>
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-6 pb-6 text-sm md:text-base text-charcoal/90 leading-relaxed font-public-sans border-t border-[rgba(31,39,51,0.06)] pt-4 animate-pipeline-in"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
