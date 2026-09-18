'use client'

import Link from 'next/link'
import { SITE } from '@/data/config'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        className="bg-white max-w-md w-full border border-slate-200 p-6 sm:p-7 relative shadow-2xl animate-pipeline-in rounded-3xl my-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors focus-visible:outline-2 cursor-pointer z-10"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Founder Avatar & Badge */}
        <div className="flex flex-col items-center mb-4">
          <div className="relative mb-3">
            <img
              src="/images/Ahsaan_Professional_Headshot.png"
              alt="Ahsaan Mansha"
              className="w-20 h-20 rounded-2xl object-cover border-2 border-blue-200 shadow-md"
            />
            <span
              className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"
              title="Available"
            />
          </div>
          <span className="inline-block uppercase text-blue-600 text-[10px] font-extrabold tracking-wider bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 mb-1.5">
            15-Min Discovery Call
          </span>
          <h3 id="booking-modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Book with Ahsaan Mansha
          </h3>
          <p className="text-xs text-slate-500 font-medium max-w-xs mx-auto mt-1">
            Pick a time directly on Calendly for an honest pipeline review with our founder.
          </p>
        </div>

        {/* Micro Pill Badges matching our design */}
        <div className="flex flex-wrap items-center justify-center gap-2 my-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200/80">
            <svg className="w-3 h-3 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>15 Minutes</span>
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/80">
            <svg className="w-3 h-3 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            <span>100% Free</span>
          </span>
        </div>

        {/* Action Button */}
        <div className="space-y-3">
          <a
            href={SITE.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="btn-primary w-full text-sm py-3.5 px-6 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all flex items-center justify-center gap-2 cursor-pointer font-extrabold"
          >
            <span>Book Strategy Call on Calendly</span>
            <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <Link
            href="/booking"
            onClick={onClose}
            className="block text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors"
          >
            View dedicated booking page &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
