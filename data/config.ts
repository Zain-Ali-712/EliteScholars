export interface SiteConfig {
  name: string
  tagline: string
  description: string
  url: string
  phone: string
  email: string
  address: string
  ogImage: string
  ctaLink: string
  primaryKeyword: string
}

export interface StatItem {
  value: string
  label: string
  description?: string
}

export interface Differentiator {
  title: string
  description: string
}

export interface QualifierBullet {
  title: string
  description: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface PricingPlan {
  name: string
  price: string
  period?: string
  description: string
  revenueTarget: string
  appointmentsPerMonth: string
  features: string[]
  recommended?: boolean
  ctaText: string
}

export interface Testimonial {
  id: string
  name: string
  title: string
  firm: string
  location: string
  quote: string
  videoUrl?: string
  thumbnailUrl?: string
  stats?: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface PipelineItem {
  name: string
  industry: string
  revenue: string
  time: string
  tag: string
}

// ==========================================
// MASTER PLACEHOLDER CONFIGURATION
// Swap real client numbers & text here
// ==========================================

export const SITE: SiteConfig = {
  name: 'Elite Scholars',
  tagline: 'Deal flow built on diligence, not guesswork.',
  description: 'Elite Scholars researches, vets, and books qualified seller appointments directly onto your calendar. Built exclusively for business brokers and M&A advisors.',
  url: 'https://elitescholars.com',
  phone: '(800) 555-0198',
  email: 'advisors@elitescholars.com',
  address: '100 Financial Plaza, Suite 400, New York, NY 10005',
  ogImage: '/images/og-image.jpg',
  ctaLink: '#cta',
  primaryKeyword: 'business broker lead generation',
}

export const TRUST_LOGOS = [
  { name: 'MergerCorp International', logo: 'M&A' },
  { name: 'Apex Business Advisors', logo: 'APEX' },
  { name: 'Beacon Equity Partners', logo: 'BEACON' },
  { name: 'Vanguard Capital Group', logo: 'VCG' },
  { name: 'Summit Exit Strategies', logo: 'SUMMIT' },
]

export const HERO_STATS: StatItem[] = [
  { value: '60+', label: 'Brokers & firms served' },
  { value: '48 hrs', label: 'Avg. time to first appointment' },
  { value: '100%', label: 'Appointments pre-qualified' },
  { value: '$50K+', label: 'Avg. broker commission per deal' },
]

export const PIPELINE_MOCK: PipelineItem[] = [
  {
    name: 'Precision CNC Machining Corp',
    industry: 'Industrial Manufacturing',
    revenue: '$4.2M Rev • $850K SDE',
    time: 'Tomorrow, 10:00 AM',
    tag: 'Decision-maker confirmed',
  },
  {
    name: 'LogiTech Regional Fleet',
    industry: 'Transportation & Logistics',
    revenue: '$6.8M Rev • $1.2M SDE',
    time: 'Thursday, 2:30 PM',
    tag: 'Decision-maker confirmed',
  },
  {
    name: 'Apex Commercial HVAC Services',
    industry: 'Specialty Contracting',
    revenue: '$3.1M Rev • $620K SDE',
    time: 'Friday, 11:00 AM',
    tag: 'Decision-maker confirmed',
  },
]

export const DIFFERENTIATORS: Differentiator[] = [
  {
    title: 'We check every lead before you get it',
    description: 'Every potential seller is checked against what you\'re looking for — size, industry, and whether they\'re actually the decision-maker — before it ever reaches your calendar.',
  },
  {
    title: 'You always know what\'s happening',
    description: 'Every appointment is tracked in your dashboard in real time, so you know exactly what\'s been booked.',
  },
  {
    title: 'We do the work, fast',
    description: 'We handle the outreach for you, with most brokers getting their first booked meeting within two weeks.',
  },
]

export const GUARANTEE_DATA = {
  title: '',
  body: '',
}

export const QUALIFIERS: QualifierBullet[] = [
  {
    title: "You're a licensed broker or advisor",
    description: "You've closed deals before and you're ready to take on more listings.",
  },
  {
    title: 'You want real conversations, not just names on a list',
    description: 'You want meetings booked with people who are actually ready to talk.',
  },
  {
    title: 'You want a steady flow of new sellers every month',
    description: 'Not just one good month followed by a dry spell.',
  },
  {
    title: 'You want to know what\'s going on',
    description: 'Full visibility into your pipeline, not a black box.',
  },
]

export const DISQUALIFIER_STATEMENT = "If you want a quick trick with no real process behind it, we're probably not the right fit."

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'We Build Your List',
    description: 'We put together a list of potential sellers that match what you\'re looking for — the right industry, size, and location.',
  },
  {
    step: 2,
    title: 'We Reach Out',
    description: 'Our team calls and contacts every lead on that list directly.',
  },
  {
    step: 3,
    title: 'We Track & Book Meetings',
    description: 'Every lead is marked based on how the conversation goes, and the ones ready to talk get scheduled straight onto your calendar.',
  },
]

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Basic',
    price: '$1,500',
    period: '/month',
    description: 'Ideal for solo business brokers looking to secure a steady stream of mid-market seller listings.',
    revenueTarget: '$500K–$3M revenue sellers',
    appointmentsPerMonth: '10 qualified appointments/mo',
    features: [
      'Targeting $500K–$3M seller revenue',
      '10 qualified appointments / month',
      'Real-time lead tracking dashboard',
      'Dedicated outreach research team',
    ],
    ctaText: 'Select Basic Plan',
  },
  {
    name: 'Pro',
    price: '$2,500',
    period: '/month',
    description: 'Built for high-volume brokers and M&A advisors targeting larger lower-middle-market exits.',
    revenueTarget: '$1M–$20M revenue sellers',
    appointmentsPerMonth: '15 qualified appointments/mo',
    recommended: true,
    features: [
      'Targeting $1M–$20M seller revenue',
      '15 qualified appointments / month',
      'Everything in Basic plan',
      'Priority dashboard support',
      'Monthly strategy & script reviews',
      'Custom CRM pipeline integration',
    ],
    ctaText: 'Select Pro Plan',
  },
  {
    name: 'Pay As You Go',
    price: 'TBD',
    period: '',
    description: 'A flexible plan built around exactly what you need — you only pay for what you use.',
    revenueTarget: 'Custom criteria',
    appointmentsPerMonth: 'Flexible',
    features: [
      'Customized to your exact requirements',
      'Pay only for what you use',
      'Full dashboard access & tracking',
      'Dedicated outreach support',
      '[TBD — client to confirm specifics]',
    ],
    ctaText: 'Contact Us',
  },
]

export const PRICING_SUPPORT_NOTE = 'Average broker commission per closed deal: $50,000+. One placement can cover the cost of any plan here many times over.'

export const ROI_DEFAULTS = {
  leadsPerMonth: 15,
  costPerLead: 350,
  leadToListingRate: 12, // %
  listingToCloseRate: 60, // %
  avgDealValue: 900000, // $
  commissionRate: 10, // %
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Marcus Vance',
    title: 'Managing Director',
    firm: 'Vance & Partners M&A',
    location: 'Chicago, IL',
    quote: 'Elite Scholars delivered 14 verified seller meetings in our first 30 days. We closed a $2.8M manufacturing listing from the second call booked.',
    stats: 'Closed $2.8M Listing in Month 1',
  },
  {
    id: 'test-2',
    name: 'Eleanor Sterling',
    title: 'Senior Business Broker',
    firm: 'Sterling Capital Advisors',
    location: 'Dallas, TX',
    quote: 'Unlike previous lead services that sent us cold contact sheets, every owner Elite Scholars books knows who we are and is actively exploring an exit.',
    stats: '3 listings under contract',
  },
  {
    id: 'test-3',
    name: 'David Reynolds',
    title: 'Principal Advisor',
    firm: 'Apex Exit Group',
    location: 'Atlanta, GA',
    quote: 'The transparency and tracking give us total confidence — we always know exactly what\'s happening with our pipeline.',
    stats: '7.8x ROI on annual spend',
  },
  {
    id: 'test-4',
    name: 'Sarah Jenkins',
    title: 'President',
    firm: 'Midwest Business Alliance',
    location: 'Minneapolis, MN',
    quote: 'Our team spent 60% of their week cold calling. Partnering with Elite Scholars freed our advisors to focus exclusively on pricing businesses and closing transactions.',
    stats: 'Saved 25+ hrs/week per broker',
  },
]

export const IMPACT_STATS: StatItem[] = [
  { value: '60+', label: 'Brokers & firms served' },
  { value: '$120M+', label: 'In total deal value facilitated' },
  { value: '100%', label: 'Appointments pre-qualified against criteria' },
]

export const COMPARISON_LEFT = [
  'Old contact lists that don\'t answer',
  'No idea who you\'re actually talking to',
  'Calls with people who can\'t say yes',
]

export const COMPARISON_RIGHT = [
  'Leads matched to your exact criteria',
  'Meetings booked with the actual decision-maker',
  'Clear tracking so you always know what\'s happening',
]

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What counts as a "qualified" seller lead?',
    answer: 'A qualified lead is a verified business owner or authorized decision-maker within your target revenue band and geography who has confirmed an interest in discussing a business valuation or potential sale. Every criterion is discussed and confirmed before outreach begins.',
  },
  {
    id: 'faq-2',
    question: 'How much does a business broker lead generation service cost?',
    answer: 'Our done-for-you lead generation plans start at $1,500/month for Basic ($500K–$3M sellers) and $2,500/month for Pro ($1M–$20M sellers). We also offer a flexible Pay As You Go option. Considering an average commission of $50,000+ per closed deal, a single transaction typically yields a multi-fold return.',
  },
  {
    id: 'faq-3',
    question: 'How long does it take to get my first appointment?',
    answer: 'Once our onboarding strategy session locks in your target profile, multi-channel outreach launches immediately. Brokers typically receive their first qualified appointment booked directly onto their calendar within 48 hours to 2 weeks.',
  },
  {
    id: 'faq-4',
    question: 'What happens if a booked appointment doesn\'t show up or isn\'t qualified?',
    answer: 'If an appointment doesn\'t meet your agreed criteria, we\'ll replace it at no additional cost. No-shows reported within 48 hours are rescheduled free of charge.',
  },
  {
    id: 'faq-5',
    question: 'Do you work with brokers outside the US?',
    answer: 'Currently, Elite Scholars specializes in supporting licensed business brokers, M&A advisors, and exit planners across North America (United States & Canada), where our business database and verification protocols operate with maximum accuracy.',
  },
  {
    id: 'faq-6',
    question: 'What\'s the difference between the Basic and Pro plans?',
    answer: 'Basic is designed for solo brokers targeting sellers with $500K–$3M in annual revenue, delivering 10 qualified appointments per month. Pro targets lower-middle-market sellers with $1M–$20M in revenue, providing 15 appointments monthly, priority dashboard support, and monthly strategic script reviews.',
  },
  {
    id: 'faq-7',
    question: 'Can I cancel if it\'s not working?',
    answer: 'Plans can be paused or modified with 30 days notice. We want to make sure you have enough time for the campaign to ramp up and start delivering results.',
  },
  {
    id: 'faq-8',
    question: 'How do you protect our brokerage brand during outreach?',
    answer: 'We conduct all research and preliminary engagement using professional, highly customized communications that reflect your brokerage\'s standards. We never use aggressive sales tactics or spam methods. Every prospect experiences a polished, corporate introduction.',
  },
]

export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#problem' },
  { label: 'Services', href: '#different' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'ROI Calculator', href: '#roi-calculator' },
  { label: 'FAQ', href: '#faq' },
]
