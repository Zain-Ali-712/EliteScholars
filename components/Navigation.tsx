'use client'

import { useState, useEffect } from 'react'
import { SITE, NAV_LINKS } from '@/data/config'

interface NavigationProps {
  onOpenBooking: () => void
}

export default function Navigation({ onOpenBooking }: NavigationProps) {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAFAF9]/95 backdrop-blur-md border-b border-[rgba(31,39,51,0.12)] py-3 shadow-xs'
          : 'bg-[#FAFAF9] border-b border-[rgba(31,39,51,0.08)] py-4'
      }`}
    >
      <div className="container-main flex items-center justify-between">
        {/* Monogram logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group text-decoration-none focus-visible:outline-2"
        >
          <div className="w-8 h-8 rounded-sm bg-ink-navy flex items-center justify-center text-paper font-fraunces font-bold text-sm tracking-widest border border-brass/40 transition-colors group-hover:bg-brass">
            ES
          </div>
          <span className="font-fraunces font-bold text-lg tracking-tight text-ink-navy">
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
                className={`font-public-sans text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-ink-navy font-semibold underline underline-offset-4 decoration-brass'
                    : 'text-slate hover:text-ink-navy'
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
            className="font-public-sans text-xs font-semibold text-charcoal hover:text-brass transition-colors"
          >
            {SITE.phone}
          </a>
          <button
            onClick={onOpenBooking}
            className="btn-primary text-xs py-2.5 px-4"
          >
            Book a Strategy Call
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-ink-navy focus-visible:outline-2"
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
        <div className="lg:hidden border-b border-[rgba(31,39,51,0.1)] bg-paper px-4 pt-3 pb-6 animate-pipeline-in">
          <nav className="flex flex-col gap-3 mb-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-public-sans text-base text-charcoal hover:text-brass py-1 border-b border-[rgba(31,39,51,0.05)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-2">
            <a
              href={`tel:${SITE.phone.replace(/[^0-9+]/g, '')}`}
              className="font-public-sans text-sm font-medium text-slate text-center"
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
              Book a Strategy Call
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
