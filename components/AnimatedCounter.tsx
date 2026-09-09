'use client'

import { useEffect, useState, useRef } from 'react'

interface AnimatedCounterProps {
  value: string // e.g. "100+", "48 hrs", "100%", "$40K+", "$120M+", "14"
  duration?: number // duration in ms
  className?: string
}

export default function AnimatedCounter({
  value,
  duration = 1500,
  className = '',
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState('0')
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animate()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [hasAnimated, value])

  const animate = () => {
    // Extract prefix (e.g. "$"), numeric part (e.g. "100", "48", "40", "120"), and suffix (e.g. "+", " hrs", "%", "K+", "M+")
    const match = value.match(/^([^0-9]*)([0-9,.]+)(.*)$/)

    if (!match) {
      setDisplayValue(value)
      return
    }

    const prefix = match[1] || ''
    const targetNum = parseFloat(match[2].replace(/,/g, ''))
    const suffix = match[3] || ''

    const startTime = performance.now()

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out expo formula
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      const currentNum = Math.floor(easeProgress * targetNum)

      setDisplayValue(`${prefix}${currentNum.toLocaleString()}${suffix}`)

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setDisplayValue(value)
      }
    }

    requestAnimationFrame(step)
  }

  return (
    <span ref={elementRef} className={className}>
      {hasAnimated ? displayValue : '0'}
    </span>
  )
}
