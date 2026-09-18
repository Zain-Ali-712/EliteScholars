'use client'

import { useState, useEffect } from 'react'
import { SITE, NAV_LINKS } from '@/data/config'

interface NavigationProps {
  onOpenBooking: () => void
}

export default function Navigation({ onOpenBooking }: NavigationProps) {
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => link.href.substring(1))
      const scrollPosition = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const top = section.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="relative z-50 w-full bg-white border-b border-slate-200/80 py-4 shadow-xs"
    >
      <div className="container-main flex items-center justify-between">
        {/* Monogram logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group text-decoration-none focus-visible:outline-2"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-blue-700 flex items-center justify-center text-white font-extrabold text-base tracking-tight shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            ES
          </div>
          <span className="font-extrabold text-xl tracking-tight text-slate-900">
            {SITE.name}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.substring(1)
            const isActive = activeSection === sectionId
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-blue-600 font-bold underline underline-offset-8 decoration-blue-600 decoration-2'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Right CTA + Phone */}
        <div className="hidden sm:flex items-center gap-5">
          <a
            href={`tel:${SITE.phone.replace(/[^0-9+]/g, '')}`}
            className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors"
          >
            {SITE.phone}
          </a>
          <button
            onClick={onOpenBooking}
            className="btn-primary text-xs py-2.5 px-5 shadow-sm"
          >
            Book Strategy Call
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-blue-600 focus-visible:outline-2 cursor-pointer"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md px-5 pt-4 pb-6 shadow-xl animate-pipeline-in">
          <nav className="flex flex-col gap-3 mb-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-blue-600 py-1.5 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-2">
            <a
              href={`tel:${SITE.phone.replace(/[^0-9+]/g, '')}`}
              className="text-sm font-bold text-slate-600 text-center"
            >
              Direct: {SITE.phone}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenBooking()
              }}
              className="btn-primary w-full text-center text-sm py-3"
            >
              Book Strategy Call
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
