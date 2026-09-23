'use client'

import { useEffect, useRef, useState } from 'react'

interface CalendlyEmbedProps {
  url: string
  className?: string
  minHeight?: number
}

const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'

export default function CalendlyEmbed({ url, className = '', minHeight = 700 }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    const initWidget = () => {
      if (cancelled || !containerRef.current) return
      const w = window as typeof window & {
        Calendly?: { initInlineWidget: (opts: { url: string; parentElement: HTMLElement; prefill?: object; utm?: object }) => void }
      }
      if (w.Calendly) {
        containerRef.current.innerHTML = ''
        w.Calendly.initInlineWidget({
          url,
          parentElement: containerRef.current,
        })
        setIsLoading(false)
      }
    }

    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_SCRIPT_SRC}"]`)

    if (existingScript) {
      if ((window as typeof window & { Calendly?: unknown }).Calendly) {
        initWidget()
      } else {
        existingScript.addEventListener('load', initWidget)
      }
    } else {
      const script = document.createElement('script')
      script.src = CALENDLY_SCRIPT_SRC
      script.async = true
      script.addEventListener('load', initWidget)
      document.body.appendChild(script)
    }

    return () => {
      cancelled = true
      existingScript?.removeEventListener('load', initWidget)
    }
  }, [url])

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-white/60 rounded-2xl"
          style={{ minHeight }}
        >
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            <span className="text-xs font-semibold">Loading available times...</span>
          </div>
        </div>
      )}
      <div ref={containerRef} style={{ minWidth: '280px', height: minHeight }} />
    </div>
  )
}
