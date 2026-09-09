import type { Metadata } from 'next'
import { Fraunces, Public_Sans } from 'next/font/google'
import '@/app/globals.css'
import { SITE, FAQ_ITEMS } from '@/data/config'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${SITE.name} | Qualified Seller Leads for Business Brokers & M&A Advisors`,
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${SITE.name} | Qualified Seller Leads for Business Brokers & M&A Advisors`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: 'website',
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.name} Lead Generation for Business Brokers`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | Qualified Seller Leads for Business Brokers & M&A Advisors`,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    areaServed: 'North America',
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '100 Financial Plaza, Suite 400',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10005',
      addressCountry: 'US',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <html lang="en" className={`${fraunces.variable} ${publicSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body className="bg-paper text-charcoal font-public-sans antialiased">
        {children}
      </body>
    </html>
  )
}
