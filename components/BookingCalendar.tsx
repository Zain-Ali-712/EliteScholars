'use client'

import { useState, useMemo } from 'react'
import { SITE } from '@/data/config'

interface BookingCalendarProps {
  onSuccess?: () => void
}

const TIME_SLOTS = [
  '09:00 AM',
  '10:00 AM',
  '11:30 AM',
  '01:00 PM',
  '02:30 PM',
  '04:00 PM',
]

const TIMEZONES = [
  { label: 'Eastern Time (ET)', value: 'America/New_York', abbr: 'ET' },
  { label: 'Central Time (CT)', value: 'America/Chicago', abbr: 'CT' },
  { label: 'Mountain Time (MT)', value: 'America/Denver', abbr: 'MT' },
  { label: 'Pacific Time (PT)', value: 'America/Los_Angeles', abbr: 'PT' },
]

export default function BookingCalendar({ onSuccess }: BookingCalendarProps) {
  const today = useMemo(() => new Date(), [])

  // State
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()) // 0-indexed
  const [selectedDate, setSelectedDate] = useState<Date | null>(() => {
    // Find next available weekday
    const d = new Date(today)
    d.setDate(d.getDate() + 1)
    while (d.getDay() === 0 || d.getDay() === 6) {
      d.setDate(d.getDate() + 1)
    }
    return d
  })
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM')
  const [timezone, setTimezone] = useState(TIMEZONES[0].value)
  const [step, setStep] = useState<'datetime' | 'details' | 'confirmed'>('datetime')

  // Form details
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [firmName, setFirmName] = useState('')
  const [dealSize, setDealSize] = useState('$1M – $5M')
  const [challenge, setChallenge] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Calendar math
  const daysInMonth = useMemo(() => {
    return new Date(currentYear, currentMonth + 1, 0).getDate()
  }, [currentYear, currentMonth])

  const firstDayOfWeek = useMemo(() => {
    // 0 = Sunday, 1 = Monday, etc.
    // Convert so Monday = 0, Sunday = 6
    const day = new Date(currentYear, currentMonth, 1).getDay()
    return (day + 6) % 7
  }, [currentYear, currentMonth])

  const monthName = useMemo(() => {
    return new Date(currentYear, currentMonth, 1).toLocaleString('default', { month: 'long' })
  }, [currentYear, currentMonth])

  const handlePrevMonth = () => {
    if (currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
      return // Can't go before current month
    }
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear((y) => y - 1)
    } else {
      setCurrentMonth((m) => m - 1)
    }
  }

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear((y) => y + 1)
    } else {
      setCurrentMonth((m) => m + 1)
    }
  }

  const isPastDate = (day: number) => {
    const checkDate = new Date(currentYear, currentMonth, day)
    const checkToday = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    return checkDate < checkToday
  }

  const isWeekend = (day: number) => {
    const checkDate = new Date(currentYear, currentMonth, day)
    const dayOfWeek = checkDate.getDay()
    return dayOfWeek === 0 || dayOfWeek === 6 // Sun or Sat
  }

  const isSelected = (day: number) => {
    if (!selectedDate) return false
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth &&
      selectedDate.getFullYear() === currentYear
    )
  }

  const handleSelectDay = (day: number) => {
    if (isPastDate(day) || isWeekend(day)) return
    const newDate = new Date(currentYear, currentMonth, day)
    setSelectedDate(newDate)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setStep('confirmed')
      if (onSuccess) onSuccess()
    }, 600)
  }

  // Google Calendar URL generator
  const getGoogleCalendarUrl = () => {
    if (!selectedDate) return '#'
    const dateStr = selectedDate.toISOString().split('T')[0].replace(/-/g, '')
    // Approx 10am to 10:20am in UTC format
    const startStr = `${dateStr}T140000Z`
    const endStr = `${dateStr}T142000Z`
    const title = encodeURIComponent('Elite Scholars Strategy Call with Ehsan Mansha')
    const details = encodeURIComponent(
      `Discovery Strategy Session with Ehsan Mansha, CEO of Elite Scholars.\nTopic: Brokerage Pipeline & Exclusive Territory Review\nPhone: ${SITE.phone}\nZoom meeting link sent to your work email.`
    )
    const location = encodeURIComponent('Zoom Video Conference')
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startStr}/${endStr}&details=${details}&location=${location}`
  }

  const currentTzAbbr = TIMEZONES.find((t) => t.value === timezone)?.abbr || 'ET'

  const formattedSelectedDate = selectedDate
    ? selectedDate.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : ''

  return (
    <div className="bg-white border-2 border-blue-200/80 rounded-3xl p-4 sm:p-5 shadow-xl shadow-blue-900/5 relative flex flex-col justify-between h-full">
      {/* Step Indicator Header */}
      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold text-slate-800 uppercase tracking-wider">
            Live Calendar &bull; 20-Min Call
          </span>
        </div>
        <div className="text-[10px] sm:text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
          With Ehsan Mansha
        </div>
      </div>

      {/* STEP 1: DATE & TIME SELECTION */}
      {step === 'datetime' && (
        <div className="space-y-3 flex-1 flex flex-col justify-between">
          {/* Timezone Selector */}
          <div className="flex items-center justify-between gap-2 bg-slate-50/80 px-2.5 py-1.5 rounded-xl border border-slate-200/60">
            <label className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7v5l3 3" />
              </svg>
              <span>Timezone:</span>
            </label>
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="text-[11px] font-semibold text-slate-800 bg-white border border-slate-200 rounded-md px-2 py-0.5 focus:outline-hidden focus:border-blue-500 cursor-pointer"
            >
              {TIMEZONES.map((tz) => (
                <option key={tz.value} value={tz.value}>
                  {tz.label}
                </option>
              ))}
            </select>
          </div>

          {/* Month Header & Controls */}
          <div className="flex items-center justify-between px-1">
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight">
              {monthName} {currentYear}
            </h3>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrevMonth}
                disabled={currentMonth === today.getMonth() && currentYear === today.getFullYear()}
                className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                aria-label="Previous Month"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNextMonth}
                className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
                aria-label="Next Month"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Calendar Day Matrix */}
          <div>
            {/* Weekday headers */}
            <div className="grid grid-cols-7 gap-1 text-center mb-1">
              {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
                <span key={day} className="text-[10px] font-bold text-slate-400 uppercase py-0.5">
                  {day}
                </span>
              ))}
            </div>

            {/* Day grid */}
            <div className="grid grid-cols-7 gap-1 text-center">
              {/* Blank offset days for previous month */}
              {[...Array(firstDayOfWeek)].map((_, i) => (
                <div key={`empty-${i}`} className="h-7 sm:h-8" />
              ))}

              {/* Real month days */}
              {[...Array(daysInMonth)].map((_, i) => {
                const dayNum = i + 1
                const past = isPastDate(dayNum)
                const weekend = isWeekend(dayNum)
                const disabled = past || weekend
                const active = isSelected(dayNum)

                return (
                  <button
                    key={dayNum}
                    type="button"
                    onClick={() => handleSelectDay(dayNum)}
                    disabled={disabled}
                    className={`h-7 sm:h-8 rounded-lg text-xs font-semibold flex flex-col items-center justify-center relative transition-all cursor-pointer ${
                      active
                        ? 'bg-blue-600 text-white font-extrabold shadow-sm shadow-blue-500/30 scale-105'
                        : disabled
                        ? 'text-slate-300 bg-transparent cursor-not-allowed'
                        : 'text-slate-800 hover:bg-blue-50 hover:text-blue-700 bg-slate-50/50'
                    }`}
                  >
                    <span>{dayNum}</span>
                    {!disabled && !active && (
                      <span className="w-1 h-1 rounded-full bg-blue-500 absolute bottom-0.5" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Time Slot Picker */}
          {selectedDate && (
            <div className="pt-2.5 border-t border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] sm:text-xs font-bold text-slate-800">
                  Slots for {formattedSelectedDate}:
                </span>
                <span className="text-[10px] font-medium text-slate-500">
                  {currentTzAbbr}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-1.5">
                {TIME_SLOTS.map((time) => {
                  const isTimeActive = selectedTime === time
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all border cursor-pointer flex items-center justify-center gap-1 ${
                        isTimeActive
                          ? 'bg-blue-600 border-blue-600 text-white shadow-xs scale-[1.02]'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50/50'
                      }`}
                    >
                      <span>{time}</span>
                    </button>
                  )
                })}
              </div>

              {/* Next step button */}
              <button
                type="button"
                onClick={() => setStep('details')}
                className="w-full mt-2.5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-1.5 cursor-pointer group"
              >
                <span>Continue &bull; Enter Details</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}

      {/* STEP 2: ATTENDEE DETAILS FORM */}
      {step === 'details' && (
        <form onSubmit={handleSubmit} className="space-y-3 flex-1 flex flex-col justify-between">
          {/* Selected Slot Recap Badge */}
          <div className="bg-blue-50/80 border border-blue-200/80 rounded-xl p-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-extrabold text-slate-900">
                  {formattedSelectedDate} at {selectedTime} ({currentTzAbbr})
                </p>
                <p className="text-[10px] font-medium text-slate-500">
                  20-Min Discovery Session with Ehsan Mansha
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setStep('datetime')}
              className="text-xs font-bold text-blue-700 hover:text-blue-900 underline underline-offset-2 cursor-pointer"
            >
              Change
            </button>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 mb-0.5">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Robert Sterling"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs sm:text-sm font-medium focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-hidden transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-0.5">
                Work Email *
              </label>
              <input
                type="email"
                required
                placeholder="robert@brokerage.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs sm:text-sm font-medium focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-hidden transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-0.5">
                Direct Phone *
              </label>
              <input
                type="tel"
                required
                placeholder="(555) 000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs sm:text-sm font-medium focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-hidden transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-0.5">
                Brokerage / Firm Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Apex M&A Advisors"
                value={firmName}
                onChange={(e) => setFirmName(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs sm:text-sm font-medium focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-hidden transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-0.5">
                Target Deal Size
              </label>
              <select
                value={dealSize}
                onChange={(e) => setDealSize(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs sm:text-sm font-medium bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-hidden transition-colors cursor-pointer"
              >
                <option value="$500K – $1M">$500K – $1M (Main Street)</option>
                <option value="$1M – $5M">$1M – $5M (Lower Mid-Market)</option>
                <option value="$5M – $50M">$5M – $50M (Mid-Market M&A)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 mb-0.5">
              Primary Goal or Bottleneck (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Need 3+ verified manufacturing listings in Texas"
              value={challenge}
              onChange={(e) => setChallenge(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs sm:text-sm font-medium focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-hidden transition-colors"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {isSubmitting ? (
              <span>Scheduling Strategy Session...</span>
            ) : (
              <>
                <span>Confirm Strategy Session with Ehsan Mansha</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>

          <p className="text-[10px] text-slate-500 text-center font-medium">
            Confidential &bull; No obligation &bull; Direct line:{' '}
            <a href={`tel:${SITE.phone.replace(/[^0-9+]/g, '')}`} className="text-blue-600 font-bold hover:underline">
              {SITE.phone}
            </a>
          </p>
        </form>
      )}


      {/* STEP 3: CONFIRMED STATE */}
      {step === 'confirmed' && (
        <div className="text-center py-4 space-y-4">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto border-2 border-emerald-200 shadow-sm">
            <svg className="w-8 h-8 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>

          <div>
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-2">
              Appointment Confirmed
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Strategy Session Booked!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-sm mx-auto mt-1">
              Thank you, <strong className="text-slate-900">{fullName || 'Broker'}</strong>. Your consultation with{' '}
              <strong className="text-slate-900">Ehsan Mansha, CEO</strong> is locked in.
            </p>
          </div>

          {/* Meeting Summary Card */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 text-left space-y-2.5 max-w-md mx-auto">
            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
              <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formattedSelectedDate} at {selectedTime} ({currentTzAbbr})</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
              <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Host: Ehsan Mansha, CEO & Founder</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
              <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Location: Zoom Video Conference (link sent to {email || 'your email'})</span>
            </div>
          </div>

          {/* Calendar action buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-md mx-auto">
            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
              </svg>
              <span>Add to Google Calendar</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setStep('datetime')
                setFullName('')
                setEmail('')
                setPhone('')
                setChallenge('')
              }}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-bold transition-colors cursor-pointer"
            >
              Book Another Time
            </button>
          </div>

          <p className="text-[11px] text-slate-500 pt-2">
            Need immediate assistance? Call Ehsan&apos;s direct desk:{' '}
            <a href={`tel:${SITE.phone.replace(/[^0-9+]/g, '')}`} className="text-blue-600 font-bold hover:underline">
              {SITE.phone}
            </a>
          </p>
        </div>
      )}
    </div>
  )
}
