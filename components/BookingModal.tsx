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
      className="fixed inset-0 z-50 bg-ink-navy/85 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        className="bg-white max-w-lg w-full panel-border p-6 md:p-8 relative shadow-2xl animate-pipeline-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate hover:text-ink-navy font-bold text-xl p-1 focus-visible:outline-2"
          aria-label="Close modal"
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <p className="eyebrow uppercase text-brass text-xs font-semibold tracking-wider mb-1">
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
                <label className="block text-xs font-semibold text-charcoal mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Miller"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-[rgba(31,39,51,0.18)] rounded-sm text-sm focus:border-brass focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Direct Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-[rgba(31,39,51,0.18)] rounded-sm text-sm focus:border-brass focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@brokerage.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-[rgba(31,39,51,0.18)] rounded-sm text-sm focus:border-brass focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">
                  Target Seller Revenue Range
                </label>
                <select
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-[rgba(31,39,51,0.18)] rounded-sm text-sm bg-white focus:border-brass focus:outline-hidden"
                >
                  <option value="$500K–$1M">$500K – $1M Revenue</option>
                  <option value="$1M–$5M">$1M – $5M Revenue (Recommended)</option>
                  <option value="$5M+">$5M+ Revenue (Lower Middle Market)</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3.5 text-sm font-semibold mt-2"
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
            <div className="w-12 h-12 bg-brass/15 text-brass rounded-full flex items-center justify-center mx-auto mb-4 border border-brass/30 font-bold text-xl">
              ✓
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
