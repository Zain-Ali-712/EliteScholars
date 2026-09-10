'use client'

import { useState } from 'react'
import { SITE } from '@/data/config'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [revenue, setRevenue] = useState('$1M–$5M')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-ink-navy/85 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        className="bg-white max-w-lg w-full border border-ink-navy/10 p-6 md:p-8 relative shadow-2xl animate-pipeline-in rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate hover:text-ink-navy p-1.5 rounded-full hover:bg-slate-100 transition-colors focus-visible:outline-2"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <div>
            <p className="eyebrow uppercase text-brass text-xs font-bold tracking-wider mb-1 font-public-sans">
              Strategy Session
            </p>
            <h3 id="booking-modal-title" className="text-2xl font-bold font-fraunces text-ink-navy mb-2">
              Book Your Strategy Call
            </h3>
            <p className="text-xs text-slate font-public-sans mb-6">
              Reserve a 15-minute consultation with our lead researcher to review your territory and seller target criteria.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 font-public-sans">
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Miller"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:border-brass focus:outline-hidden transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1.5">
                    Direct Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:border-brass focus:outline-hidden transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@brokerage.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:border-brass focus:outline-hidden transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1.5">
                  Target Seller Revenue Range
                </label>
                <select
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white focus:border-brass focus:outline-hidden transition-colors"
                >
                  <option value="$500K–$1M">$500K – $1M Revenue</option>
                  <option value="$1M–$5M">$1M – $5M Revenue (Recommended)</option>
                  <option value="$5M+">$5M+ Revenue (Lower Middle Market)</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3.5 text-sm font-semibold mt-2 shadow-lg"
              >
                Confirm Strategy Call Request
              </button>
            </form>

            <p className="text-[11px] text-slate text-center mt-4">
              Or call directly: <a href={`tel:${SITE.phone.replace(/[^0-9+]/g, '')}`} className="text-ink-navy font-semibold">{SITE.phone}</a>
            </p>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-brass/15 text-brass rounded-full flex items-center justify-center mx-auto mb-4 border border-brass/30">
              <svg className="w-7 h-7 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold font-fraunces text-ink-navy mb-2">
              Strategy Call Requested
            </h3>
            <p className="text-sm text-charcoal font-public-sans max-w-sm mx-auto mb-6">
              Thank you, {name}. Our team has received your request and will reach out to confirm your calendar slot within 2 business hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                onClose()
              }}
              className="btn-primary text-xs py-2.5 px-6"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
