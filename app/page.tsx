'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import HowItWorks from '@/components/HowItWorks'
import Problem from '@/components/Problem'
import Differentiators from '@/components/Differentiators'
import Qualifier from '@/components/Qualifier'
import Pricing from '@/components/Pricing'
import RoiCalculator from '@/components/RoiCalculator'
import Testimonials from '@/components/Testimonials'
import ImpactBanner from '@/components/ImpactBanner'
import FaqAccordion from '@/components/FaqAccordion'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'
import BookingModal from '@/components/BookingModal'

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const handleOpenBooking = () => setIsBookingOpen(true)
  const handleCloseBooking = () => setIsBookingOpen(false)

  return (
    <>
      {/* 1. Navigation */}
      <Navigation onOpenBooking={handleOpenBooking} />

      <main className="min-h-screen">
        {/* 2. Hero */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 3. Trust bar & stats strip */}
        <TrustBar />

        {/* 4. How we build your pipeline (moved up) */}
        <HowItWorks />

        {/* 5. The problem */}
        <Problem />

        {/* 6. What makes Elite Scholars different */}
        <Differentiators onOpenBooking={handleOpenBooking} />

        {/* 7. Who we work with */}
        <Qualifier />

        {/* 8. Pricing */}
        <Pricing onOpenBooking={handleOpenBooking} />

        {/* 9. Interactive ROI calculator */}
        <RoiCalculator />

        {/* 10. Testimonials */}
        <Testimonials />

        {/* 11. Impact stats banner */}
        <ImpactBanner />

        {/* 12. FAQ */}
        <FaqAccordion onOpenBooking={handleOpenBooking} />

        {/* 13. Final CTA banner */}
        <FinalCta onOpenBooking={handleOpenBooking} />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* Interactive Booking Strategy Call Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </>
  )
}
