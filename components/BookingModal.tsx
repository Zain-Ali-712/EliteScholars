'use client'

import Link from 'next/link'
import BookingCalendar from './BookingCalendar'

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
        className="bg-white max-w-xl w-full border border-slate-200 p-4 sm:p-6 relative shadow-2xl animate-pipeline-in rounded-3xl my-8"
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

        <div className="mb-3 pr-8">
          <span className="inline-block uppercase text-blue-600 text-[10px] font-extrabold tracking-wider bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 mb-1.5">
            Discovery Call &bull; Ahsaan Mansha
          </span>
          <h3 id="booking-modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Book Your Strategy Call
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            Select a date and time on the calendar to meet directly with Ahsaan Mansha, CEO &amp; Founder.
          </p>
        </div>

        <BookingCalendar onSuccess={() => {}} />

        <div className="mt-3 text-center">
          <Link
            href="/booking"
            onClick={onClose}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 underline underline-offset-2"
          >
            Open in dedicated booking page &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
