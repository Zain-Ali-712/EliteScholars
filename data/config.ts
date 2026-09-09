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
  { value: '100+', label: 'Brokers & firms served' },
  { value: '48 hrs', label: 'Avg. time to first appointment' },
  { value: '100%', label: 'Appointments pre-qualified' },
  { value: '$40K+', label: 'Avg. broker commission per deal' },
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
    title: 'Research-grade vetting',
    description: 'Every prospect is checked against your exact criteria — revenue band, industry, ownership status, decision-maker authority — before they ever reach your calendar.',
  },
  {
    title: 'Full transparency, zero black box',
    description: 'Every call is recorded and every appointment is logged in a real-time dashboard. You see exactly who we spoke to and what was said.',
  },
  {
    title: 'Fast, done-for-you activation',
    description: 'Your target profile is locked in during a single strategy session; outreach goes live immediately after, with a first qualified appointment typically inside 2 weeks.',
  },
]

export const GUARANTEE_DATA = {
  title: 'Our standard, in writing.',
  body: 'Before any outreach starts, Elite Scholars agrees in writing with the broker on exactly what a "qualified lead" means for their business — revenue range, business type, decision-maker status. Any appointment that doesn\'t meet that standard gets replaced at no charge; missed appointments reported within 48 hours get rescheduled free.',
}

export const QUALIFIERS: QualifierBullet[] = [
  {
    title: "You're a licensed business broker or M&A advisor",
    description: 'You have real deal experience and the capacity to manage and close active seller listings.',
  },
  {
    title: 'You want qualified conversations, not raw contact lists',
    description: 'You prefer pre-qualified, decision-maker-confirmed appointments booked straight onto your calendar.',
  },
  {
    title: 'You are ready to scale a consistent monthly pipeline',
    description: 'You are looking to build a predictable month-over-month deal acquisition engine, not run a short-term campaign.',
  },
  {
    title: 'You demand full visibility into outreach standards',
    description: 'You want complete transparency with recorded calls, real-time dashboard metrics, and written criteria.',
  },
]

export const DISQUALIFIER_STATEMENT = "If you're looking for a one-time trick with no process behind it, we're probably not the right fit."

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Define your ideal seller profile',
    description: 'A strategy session locks in target revenue range, industry, geography, and owner criteria, agreed in writing.',
  },
  {
    step: 2,
    title: 'Your pipeline goes live',
    description: 'Multi-channel outreach begins against verified business owners; every touchpoint is tracked in your dashboard.',
  },
  {
    step: 3,
    title: 'Qualified appointments land on your calendar',
    description: "The moment a seller agrees to talk, it's booked and pre-qualified against your agreed criteria. You show up and close.",
  },
]

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$3,500',
    period: '/month',
    description: 'Ideal for solo business brokers looking to secure a steady stream of mid-market seller listings.',
    revenueTarget: '$500K–$1M revenue sellers',
    appointmentsPerMonth: '10 qualified appointments/mo',
    features: [
      'Targeting $500K–$1M seller revenue',
      '10 qualified appointments / month',
      'Live call recordings & transcriptions',
      'Real-time lead tracking dashboard',
      'Dedicated outreach research team',
      '3-month minimum term',
    ],
    ctaText: 'Select Starter Plan',
  },
  {
    name: 'Pro',
    price: '$5,500',
    period: '/month',
    description: 'Built for high-volume brokers and M&A advisors targeting larger lower-middle-market exits.',
    revenueTarget: '$1M–$5M revenue sellers',
    appointmentsPerMonth: '15 qualified appointments/mo',
    recommended: true,
    features: [
      'Targeting $1M–$5M seller revenue',
      '15 qualified appointments / month',
      'Everything in Starter plan',
      'Priority dashboard support',
      'Monthly strategy & script reviews',
      'Custom CRM pipeline integration',
    ],
    ctaText: 'Select Pro Plan',
  },
  {
    name: 'Own Your Pipeline',
    price: '$12,500',
    period: 'one-time',
    description: 'For brokerages wanting a custom, proprietary seller acquisition system to run in-house.',
    revenueTarget: 'Custom target criteria',
    appointmentsPerMonth: 'Unlimited (In-house setup)',
    features: [
      'Full CRM & tracking stack setup',
      'Verified proprietary contact databases',
      'Complete outreach playbook & script library',
      'Team onboarding & operational training',
      'Optional $1,500/mo ongoing management',
      'No long-term commitment — you keep the asset',
    ],
    ctaText: 'Build Proprietary System',
  },
]

export const PRICING_SUPPORT_NOTE = 'Average broker commission per closed deal: $40,000–$100,000+. One placement can cover the cost of any plan here many times over.'

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
    quote: 'The call recordings and vetting transparency give us total confidence. Their written guarantee is real — if a call isn\'t qualified, it\'s replaced instantly.',
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
  { value: '100+', label: 'Brokers & firms served' },
  { value: '$120M+', label: 'In total deal value facilitated' },
  { value: '100%', label: 'Appointments pre-qualified against criteria' },
]

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What counts as a "qualified" seller lead?',
    answer: 'A qualified lead is a verified business owner or authorized decision-maker within your target revenue band and geography who has confirmed an interest in discussing a business valuation or potential sale. Every criterion is agreed upon in writing before outreach begins.',
  },
  {
    id: 'faq-2',
    question: 'How much does a business broker lead generation service cost?',
    answer: 'Our done-for-you lead generation plans range from $3,500/month for Starter ($500K–$1M sellers) to $5,500/month for Pro ($1M–$5M sellers). We also offer a proprietary "Own Your Pipeline" setup for $12,500 one-time. Considering an average commission of $40,000–$100,000+ per closed deal, a single transaction typically yields a multi-fold return.',
  },
  {
    id: 'faq-3',
    question: 'How long does it take to get my first appointment?',
    answer: 'Once our onboarding strategy session locks in your target profile, multi-channel outreach launches immediately. Brokers typically receive their first qualified appointment booked directly onto their calendar within 48 hours to 2 weeks.',
  },
  {
    id: 'faq-4',
    question: 'What happens if a booked appointment doesn\'t show up or isn\'t qualified?',
    answer: 'We back our service with a written guarantee. Any appointment that fails to meet your agreed revenue, industry, or decision-maker criteria will be replaced at no additional cost. No-shows reported within 48 hours are rescheduled free of charge.',
  },
  {
    id: 'faq-5',
    question: 'Do you work with brokers outside the US?',
    answer: 'Currently, Elite Scholars specializes in supporting licensed business brokers, M&A advisors, and exit planners across North America (United States & Canada), where our proprietary business database and verification protocols operate with maximum accuracy.',
  },
  {
    id: 'faq-6',
    question: 'What\'s the difference between the Starter and Pro plans?',
    answer: 'Starter is designed for solo brokers targeting sellers with $500K–$1M in annual revenue, delivering 10 qualified appointments per month. Pro targets lower-middle-market sellers with $1M–$5M in revenue, providing 15 appointments monthly, priority dashboard support, and monthly strategic script reviews.',
  },
  {
    id: 'faq-7',
    question: 'Can I cancel if it\'s not working?',
    answer: 'Our standard subscription terms require a 3-month initial commitment to allow sufficient campaign optimization and pipeline maturation. After the initial term, plans revert to month-to-month and can be paused or modified with 30 days notice.',
  },
  {
    id: 'faq-8',
    question: 'How do you protect our brokerage brand during outreach?',
    answer: 'We conduct all research and preliminary engagement using professional, highly customized communications that reflect your brokerage\'s standards. We never use aggressive sales tactics or spam methods. Every prospect experiences a polished, corporate introduction.',
  },
]

export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#problem' },
  { label: 'Services', href: '#different' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'ROI Calculator', href: '#roi-calculator' },
  { label: 'FAQ', href: '#faq' },
]
