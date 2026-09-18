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
    // Approx 10am to 10:15am in UTC format (15 min call)
    const startStr = `${dateStr}T140000Z`
    const endStr = `${dateStr}T141500Z`
    const title = encodeURIComponent('BrokerLeadz 15-Min Strategy Call with Ahsaan Mansha')
    const details = encodeURIComponent(
      `Discovery 15-Min Strategy Session with Ahsaan Mansha, CEO of BrokerLeadz.\nTopic: Brokerage Pipeline & Exclusive Territory Review\nPhone: ${SITE.phone}\nZoom meeting link sent to your work email.`
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
    <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm transition-all">
      
      {/* ── STEP 1: DATE & TIME SELECTION (Minimal Split Layout) ── */}
      {step === 'datetime' && (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-7 items-start">
            
            {/* Left Calendar Grid (7 Cols on sm+) */}
            <div className="sm:col-span-7 flex flex-col justify-between">
              {/* Month Navigation */}
              <div className="flex items-center justify-between mb-4 px-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                  {monthName} {currentYear}
                </h3>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handlePrevMonth}
                    disabled={currentMonth === today.getMonth() && currentYear === today.getFullYear()}
                    className="w-8 h-8 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 flex items-center justify-center text-slate-600 disabled:opacity-25 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    aria-label="Previous Month"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextMonth}
                    className="w-8 h-8 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
                    aria-label="Next Month"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Day Labels */}
              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                  <span key={day} className="text-[10px] font-bold text-slate-400 tracking-wider">
                    {day}
                  </span>
                ))}
              </div>

              {/* Day Numbers Matrix */}
              <div className="grid grid-cols-7 gap-1 text-center mb-4">
                {[...Array(firstDayOfWeek)].map((_, i) => (
                  <div key={`empty-${i}`} className="h-8 sm:h-9" />
                ))}

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
                      className={`w-8 h-8 sm:w-9 sm:h-9 mx-auto rounded-full text-xs sm:text-[13px] font-semibold flex items-center justify-center transition-all cursor-pointer ${
                        active
                          ? 'bg-blue-600 text-white font-bold shadow-xs'
                          : disabled
                          ? 'text-slate-300 cursor-not-allowed bg-transparent'
                          : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600 bg-transparent'
                      }`}
                    >
                      {dayNum}
                    </button>
                  )
                })}
              </div>

              {/* Minimal Timezone Selector */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="9" strokeWidth="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7v5l3 3" />
                </svg>
                <span>Time zone:</span>
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="text-xs font-semibold text-slate-700 bg-transparent border-0 hover:text-blue-600 cursor-pointer focus:outline-hidden py-0 pr-2"
                >
                  {TIMEZONES.map((tz) => (
                    <option key={tz.value} value={tz.value}>
                      {tz.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Right Available Timeslots (5 Cols on sm+) */}
            <div className="sm:col-span-5 sm:border-l sm:border-slate-100 sm:pl-6 pt-4 sm:pt-0">
              <div className="mb-3">
                <p className="text-xs font-bold text-slate-900">
                  {formattedSelectedDate || 'Select a Date'}
                </p>
                <p className="text-[11px] text-slate-500">
                  Available times ({currentTzAbbr})
                </p>
              </div>

              {/* Slots List */}
              <div className="space-y-2 max-h-[250px] overflow-y-auto pr-1">
                {TIME_SLOTS.map((time) => {
                  const isTimeActive = selectedTime === time
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition-all border cursor-pointer text-center ${
                        isTimeActive
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/30'
                      }`}
                    >
                      {time}
                    </button>
                  )
                })}
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={() => setStep('details')}
                className="w-full mt-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Continue</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ── STEP 2: ATTENDEE DETAILS FORM ── */}
      {step === 'details' && (
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Back button & Summary */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <button
              type="button"
              onClick={() => setStep('datetime')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back</span>
            </button>
            <div className="text-right">
              <span className="text-xs font-extrabold text-slate-900 block">
                {formattedSelectedDate} at {selectedTime}
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                15-Min Strategy Call ({currentTzAbbr})
              </span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
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
              <label className="block text-xs font-bold text-slate-800 mb-1">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Brokerage / Firm Name *
              </label>
              <input
                type="text"
                required
                placeholder="Apex M&A Advisors"
                value={firmName}
                onChange={(e) => setFirmName(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs sm:text-sm font-medium focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-hidden transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
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
            <label className="block text-xs font-bold text-slate-800 mb-1">
              Primary Goal or Target Vertical (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Need 3+ verified manufacturing listings in Texas"
              value={challenge}
              onChange={(e) => setChallenge(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs sm:text-sm font-medium focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-hidden transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-3 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {isSubmitting ? (
              <span>Scheduling...</span>
            ) : (
              <>
                <span>Confirm Strategy Session</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>

          <p className="text-[10px] text-slate-400 text-center font-medium">
            Confidential &bull; No obligation &bull; Direct 1-on-1 Zoom with Ahsaan Mansha
          </p>
        </form>
      )}

      {/* ── STEP 3: CONFIRMED STATE ── */}
      {step === 'confirmed' && (
        <div className="text-center py-6 space-y-4">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
            <svg className="w-7 h-7 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>

          <div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 mb-1.5">
              Appointment Confirmed
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Strategy Session Booked!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-sm mx-auto mt-1">
              Thank you, <strong className="text-slate-900">{fullName || 'Broker'}</strong>. Your discovery call with{' '}
              <strong className="text-slate-900">Ahsaan Mansha</strong> is scheduled.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80 text-left space-y-2 max-w-sm mx-auto text-xs text-slate-700 font-medium">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formattedSelectedDate} at {selectedTime} ({currentTzAbbr})</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Ahsaan Mansha, CEO &amp; Founder</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Zoom meeting link sent to {email || 'your email'}</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2 max-w-sm mx-auto">
            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
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
              className="w-full sm:w-auto px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-bold transition-colors cursor-pointer"
            >
              Book Another Time
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
