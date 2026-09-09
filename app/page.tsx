'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Problem from '@/components/Problem'
import Differentiators from '@/components/Differentiators'
import Guarantee from '@/components/Guarantee'
import Qualifier from '@/components/Qualifier'
import HowItWorks from '@/components/HowItWorks'
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

        {/* 3. Trust bar / stat strip */}
        <TrustBar />

        {/* 4. The problem */}
        <Problem />

        {/* 5. What makes Elite Scholars different */}
        <Differentiators />

        {/* 6. The guarantee */}
        <Guarantee />

        {/* 7. Is this right for you */}
        <Qualifier />

        {/* 8. How it works */}
        <HowItWorks />

        {/* 9. Pricing */}
        <Pricing onOpenBooking={handleOpenBooking} />

        {/* 10. Interactive ROI calculator */}
        <RoiCalculator />

        {/* 11. Testimonials */}
        <Testimonials />

        {/* 12. Impact stats banner */}
        <ImpactBanner />

        {/* 13. FAQ */}
        <FaqAccordion />

        {/* 14. Final CTA banner */}
        <FinalCta onOpenBooking={handleOpenBooking} />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* Interactive Booking Strategy Call Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </>
  )
}
