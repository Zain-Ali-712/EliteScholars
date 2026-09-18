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
  color?: string
}

export interface Differentiator {
  title: string
  description: string
  tag?: string
  accentColor?: string
  iconType?: string
}

export interface QualifierBullet {
  title: string
  description: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
  tag?: string
}

export interface PricingPlan {
  name: string
  price: string
  period?: string
  quarterlyPrice?: string
  quarterlyPeriod?: string
  quarterlyCommitment?: string
  setupFee?: string
  revenueTarget: string
  perLeadCost: string
  perLeadCosts?: string[]
  leadsPerMonth: string
  commitment: string
  description: string
  features: string[]
  recommended?: boolean
  ctaText: string
}

export interface TrustedClient {
  name: string
  logo: string
  category: string
  abbr: string
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
// MASTER CONFIGURATION
// ==========================================

export const SITE: SiteConfig = {
  name: 'Elite Scholars',
  tagline: 'STOP CHASING YOUR NEXT LISTING. START TALKING TO BUSINESS OWNERS READY TO SELL.',
  description: 'We help business brokers and M&A advisors generate qualified seller conversations through targeted cold outreach.',
  url: 'https://elitescholars.com',
  phone: '(510) 392 3699',
  email: 'advisors@elitescholars.com',
  address: '100 Financial Plaza, Suite 400, New York, NY 10005',
  ogImage: '/images/og-image.jpg',
  ctaLink: '#cta',
  primaryKeyword: 'business broker lead generation',
}

export const HERO_PROOF = {
  headline: 'Trusted by Business Brokers & M&A Professionals Across the U.S.',
  subline: 'Targeted Outreach • Qualified Seller Conversations • Listing Opportunities',
}

export const TRUST_LOGOS = [
  { name: 'MergerCorp International', logo: 'M&A' },
  { name: 'Apex Business Advisors', logo: 'APEX' },
  { name: 'Beacon Equity Partners', logo: 'BEACON' },
  { name: 'Vanguard Capital Group', logo: 'VCG' },
  { name: 'Summit Exit Strategies', logo: 'SUMMIT' },
]

export const TRUSTED_CLIENTS: TrustedClient[] = [
  { name: 'First Choice Business Brokers', logo: '/images/clients/fisrtchoicebrokers.png', category: 'Business Brokerage', abbr: 'FCBB' },
  { name: 'Transworld Business Advisors', logo: '/images/clients/transworld.png', category: 'Business M&A', abbr: 'TBA' },
  { name: 'Sunbelt Business Brokers', logo: '/images/clients/sunbelt.svg', category: 'Business Brokerage', abbr: 'SBB' },
  { name: 'Murphy Business', logo: '/images/clients/Murphy.png', category: 'Business Brokerage', abbr: 'MBA' },
  { name: 'VR Business Brokers', logo: '/images/clients/vrbuisness.webp', category: 'Business Mergers', abbr: 'VR' },
  { name: 'BizEx Business Brokers', logo: '/images/clients/Bizex.png', category: 'Business Sales', abbr: 'BizEx' },
  { name: 'Green & Co', logo: '/images/clients/Green-Co-Logo.png', category: 'M&A Advisors', abbr: 'G&Co' },
  { name: 'Pacific Mergers & Acquisitions', logo: '/images/clients/pacific-ma.svg', category: 'M&A Sourcing', abbr: 'PMA' },
  { name: 'Business Brokers of Florida', logo: '/images/clients/bbf.png', category: 'Broker Association', abbr: 'BBF' },
  { name: 'Strategic Business Brokers', logo: '/images/clients/strategicbb.png', category: 'Business Brokerage', abbr: 'SBBA' },
  { name: 'Business Brokers of Arizona', logo: '/images/clients/azbba.svg', category: 'Broker Association', abbr: 'BBA' },
  { name: 'Trustmont Business Advisors', logo: '/images/clients/trustmont.svg', category: 'Business Advisors', abbr: 'TBA' },
  { name: 'Simple Capital Group', logo: '/images/clients/simplehousecapital.jpeg', category: 'Real Estate Capital', abbr: 'SCG' },
  { name: 'UMK Home Buyers', logo: '/images/clients/UMKhomebuyers.jpeg', category: 'Real Estate Acquisitions', abbr: 'UMK' },
  { name: 'Kukla Capital Partners', logo: '/images/clients/kakulacaptial.jpeg', category: 'Private Equity', abbr: 'KCP' },
  { name: 'EagleView Land Sales', logo: '/images/clients/eagleview.webp', category: 'Land Acquisitions', abbr: 'EVL' },
  { name: 'LCMD', logo: '/images/clients/lcmd.svg', category: 'Management & Consulting', abbr: 'LCMD' },
  { name: 'Roof Masters', logo: '/images/clients/roofmasters.png', category: 'Commercial Services', abbr: 'RM' },
  { name: 'Wellness Growth', logo: '/images/clients/wellnessgrowth.jpeg', category: 'Healthcare & Growth', abbr: 'WG' },
  { name: 'S3DA Design', logo: '/images/clients/s3da.png', category: 'Engineering & Design', abbr: 'S3DA' },
]

export const HERO_STATS: StatItem[] = [
  { value: '60+', label: 'Brokers & Firms Served', description: 'Active nationwide broker network', color: 'blue' },
  { value: '48 hrs', label: 'Avg. Time to First Meeting', description: 'Fast onboarding and campaign launch', color: 'sky' },
  { value: '100%', label: 'Pre-Qualified Conversations', description: 'Verified decision-maker authority', color: 'emerald' },
  { value: '$50K+', label: 'Avg. Broker Commission', description: 'Strong multi-fold deal return', color: 'orange' },
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
    tag: 'Checked Leads',
    accentColor: 'blue',
  },
  {
    title: 'You always know what\'s happening',
    description: 'Every appointment is tracked in your dashboard in real time, with recorded calls and verified details, so you always know what\'s been booked.',
    tag: 'Live Tracking',
    accentColor: 'sky',
  },
  {
    title: 'We do the work, fast',
    description: 'We handle the outreach for you with dedicated US-timezone dialers, with most brokers getting their first booked meeting within 48 hours.',
    tag: 'Fast Activation',
    accentColor: 'orange',
  },
]

export const GUARANTEE_DATA = {
  title: '',
  body: '',
}

export const QUALIFIERS: QualifierBullet[] = [
  {
    title: "Licensed business broker or M&A advisor",
    description: "You've closed deals before and you have the advisory capacity to take on more active listings.",
  },
  {
    title: 'You want real conversations, not just cold lists',
    description: 'You want meetings scheduled directly on your calendar with owners who are actually ready to discuss valuation.',
  },
  {
    title: 'You want steady monthly listing deal flow',
    description: 'A predictable stream of new seller conversations every month, not feast-and-famine cycles.',
  },
  {
    title: 'You want complete pipeline transparency',
    description: 'Full visibility, call recordings, and live tracking so you know exactly how every lead was qualified.',
  },
]

export const DISQUALIFIERS: QualifierBullet[] = [
  {
    title: 'Looking for raw cold phone lists',
    description: 'We do not sell raw phone sheets or unverified contact data. Every conversation is qualified.',
  },
  {
    title: 'No follow-up process in place',
    description: 'Pre-qualified seller meetings require prompt follow-through within 24–48 hours of calendar booking.',
  },
  {
    title: 'Looking for a magic button without a sales process',
    description: 'We handle all research and outreach to deliver the meeting; your role is conducting the valuation consultation.',
  },
]

export const DISQUALIFIER_STATEMENT = "If you want a quick trick with no real process behind it, we're probably not the right fit."

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'We Build Your Targeted List',
    description: 'We identify business owners in your exact territory matching your preferred revenue size, industry, and owner profile.',
    tag: 'Targeting',
  },
  {
    step: 2,
    title: 'Direct Multi-Channel Outreach',
    description: 'Our dedicated US-timezone dialers contact every qualified decision-maker using proven business-broker positioning.',
    tag: 'Outreach',
  },
  {
    step: 3,
    title: 'Qualified Meetings on Your Calendar',
    description: 'Motivated sellers who confirm interest are booked straight into your calendar with call recordings and dossier notes.',
    tag: 'Booked Calls',
  },
]

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Basic',
    price: '$1,500',
    period: '/month',
    quarterlyPrice: '$1,200',
    quarterlyPeriod: '/month',
    quarterlyCommitment: '3 Months (Save 20%)',
    revenueTarget: '$500k - $1M',
    perLeadCost: '$150 per lead',
    leadsPerMonth: '10 leads delivered per month',
    commitment: 'No Commitment',
    description: 'Ideal for independent brokers securing quality listings in the $500k – $1M revenue range.',
    features: [
      'Live call recordings for every conversation',
      'Full transparency and quality control',
      'Dedicated US-timezone dialers',
      'Trained specifically for business-broker outreach',
      'Industry-specific seller leads',
      'Targeted by revenue, business type, and owner profile',
    ],
    ctaText: 'Select Basic Plan',
  },
  {
    name: 'Pro',
    price: '$2,000',
    period: '/month',
    quarterlyPrice: '$1,600',
    quarterlyPeriod: '/month',
    quarterlyCommitment: '3 Months (Save 20%)',
    revenueTarget: '$1M - $50M',
    perLeadCost: '$200 per lead',
    leadsPerMonth: '10 leads delivered per month',
    commitment: 'No Commitment',
    recommended: true,
    description: 'Our most popular package for active brokers and M&A advisors scaling mid-market exits.',
    features: [
      'Live call recordings for every conversation',
      'Full transparency and quality control',
      'Dedicated US-timezone dialers',
      'Trained specifically for business-broker outreach',
      'Industry-specific seller leads',
      'Targeted by revenue, business type, and owner profile',
    ],
    ctaText: 'Select Pro Plan',
  },
  {
    name: 'Pay Per Lead',
    price: '$699',
    period: 'one-time setup fee',
    quarterlyPrice: '$699',
    quarterlyPeriod: 'one-time setup fee',
    quarterlyCommitment: 'No Commitment - Pay as you go',
    setupFee: '$699 One-time Set up Fees',
    revenueTarget: '$500k - $50M',
    perLeadCost: '$100 / lead ($500k-$1M) • $150 / lead ($1M-$50M)',
    perLeadCosts: [
      '$100 / lead ($500k-$1M)',
      '$150 / lead ($1M-$50M)',
    ],
    leadsPerMonth: 'Pay as you go',
    commitment: 'No Commitment - Pay as you go',
    description: 'Maximum flexibility with zero recurring monthly retainer — pay only for verified conversations delivered.',
    features: [
      'Live call recordings for every conversation',
      'Full transparency and quality control',
      'Dedicated US-timezone dialers',
      'Trained specifically for business-broker outreach',
      'Industry-specific seller leads',
      'Targeted by revenue, business type, and owner profile',
    ],
    ctaText: 'Start Pay Per Lead',
  },
]

export const PRICING_SUPPORT_NOTE = 'Average broker commission per closed deal: $50,000+. One listing placement can cover the cost of any plan many times over.'

export const ROI_DEFAULTS = {
  leadsPerMonth: 15,
  costPerLead: 200,
  leadToListingRate: 15, // %
  listingToCloseRate: 60, // %
  avgDealValue: 1200000, // $
  commissionRate: 10, // %
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dwight Harrison',
    title: 'Managing Principal',
    firm: 'Simple House Capital',
    location: 'Houston, TX',
    quote: 'Working with Star Techlogix was an absolute game-changer. They completely outperformed expectations on our cold outreach campaigns across multiple niches—including investor outreach, real estate, property management, and business acquisitions. Their deep market knowledge led to outstanding results, allowing us to close several deals in record time.',
    videoUrl: '/TestimonialVideos/IMG_1404.MP4',
    stats: 'Closed Several Deals in Record Time',
  },
  {
    id: 'test-2',
    name: 'Mike Krieger',
    title: 'Senior Business Broker',
    firm: 'Transworld Business Advisors',
    location: 'Charlotte, NC',
    quote: 'We’ve worked with Star Techlogix for over a year now, and we are satisfied with the results. They handle our cold outreach seamlessly, delivering a consistent volume of booked appointments every single month. This has transformed our sales pipeline and helped us close significantly more business year after year. I strongly recommend Star Techlogix to any business or brokerage looking for real growth.',
    videoUrl: '/TestimonialVideos/IMG_2478 (2).MOV',
    stats: 'Consistent Monthly Appointments',
  },
  {
    id: 'test-3',
    name: 'Proctor Trivette',
    title: 'Principal Broker',
    firm: 'First Choice Business Brokers',
    location: 'Denver, CO',
    quote: 'Star Techlogix ran targeted cold calling campaigns to business owners on our behalf, securing 3 solid business listings in just 5 months. The Star Techlogix team is reliable, transparent, and delivers real results. Highly recommended for any broker looking to expand their listing pipeline.',
    videoUrl: '/TestimonialVideos/IMG_5792.MP4',
    stats: '3 Solid Listings in 5 Months',
  },
  {
    id: 'test-4',
    name: 'Mike Kanu',
    title: 'Managing Director',
    firm: 'UMK Home Buyers',
    location: 'Atlanta, GA',
    quote: "I've personally worked with Star Techlogix for almost 2 years on real estate lead generation and acquisitions. Through their targeted campaigns, we closed 3 properties in a single month. Star Techlogix is a persistent, professional, and outstanding partner.",
    videoUrl: '/TestimonialVideos/IMG_8146.MP4',
    stats: 'Closed 3 Properties in 1 Month',
  },
  {
    id: 'test-5',
    name: 'Sven Dunker',
    title: 'Head of Growth',
    firm: 'LCMD (Lead Construction Management Digital)',
    location: 'Dallas, TX',
    quote: 'Star Techlogix handled cold outreach for our SaaS platform and booked 52 qualified product demos in just one month. The Star Techlogix team is fast-learning, highly effective, and we are still actively working with them.',
    videoUrl: '/TestimonialVideos/IMG_8176.MP4',
    stats: '52 Qualified Demos in 1 Month',
  },
  {
    id: 'test-6',
    name: 'Mike Connolly',
    title: 'Acquisition Specialist',
    firm: 'Eagle View Lands',
    location: 'Phoenix, AZ',
    quote: "Extremely satisfied with Star Techlogix's market research, skip tracing, and cold calling work for our land acquisitions. They helped us connect directly with motivated landowners and consistently scale our closing pipeline.",
    videoUrl: '/TestimonialVideos/IMG_8191.MP4',
    stats: 'Scaled Motivated Landowner Pipeline',
  },
  {
    id: 'test-7',
    name: 'Vishal Goel',
    title: 'Managing Member',
    firm: 'VG Energy LLC',
    location: 'Chicago, IL',
    quote: 'Star Techlogix handled our business acquisition outreach and seller prospecting with utmost professionalism. They built accurate data lists and qualified sellers before setting calls on our calendar.',
    videoUrl: '/TestimonialVideos/IMG_8193.MP4',
    stats: 'Targeted Seller Prospecting',
  },
  {
    id: 'test-8',
    name: 'Allen Faradineh',
    title: 'Principal & M&A Advisor',
    firm: 'Pacific Mergers & Acquisitions',
    location: 'Vancouver, BC',
    quote: 'Our deal pipeline expanded significantly after hiring Star Techlogix for M&A deal sourcing. Their cold callers speak with authority and build real rapport with middle-market business owners.',
    videoUrl: '/Star Techlogix - Careers & BPO Portal.mp4',
    stats: 'Expanded Middle-Market Deal Pipeline',
  },
  {
    id: 'test-9',
    name: 'Andre Meyer',
    title: 'Managing Principal',
    firm: 'S3DA Designs',
    location: 'San Francisco, CA',
    quote: 'Outstanding web development and lead generation capabilities. Star Techlogix built a custom, high-speed digital platform that consistently drives high-intent B2B inquiries.',
    videoUrl: '/Star Techlogix - Careers & BPO Portal.mp4',
    stats: 'High-Intent Inquiries Platform',
  },
]


export const IMPACT_STATS: StatItem[] = [
  { value: '60+', label: 'Brokers & Firms Served' },
  { value: '$120M+', label: 'In Total Deal Value Facilitated' },
  { value: '100%', label: 'Appointments Pre-Qualified' },
]

export const COMPARISON_LEFT = [
  'Old contact lists that don\'t answer',
  'No idea who you\'re actually talking to',
  'Calls with people who can\'t say yes',
  'Zero call recordings or transparency',
]

export const COMPARISON_RIGHT = [
  'Leads matched to your exact revenue & industry criteria',
  'Meetings booked with the actual decision-maker',
  'Clear tracking so you always know what\'s happening',
  'Live call recordings for every conversation',
]

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What counts as a "qualified" seller lead?',
    answer: 'A qualified lead is a verified business owner or majority equity decision-maker within your target revenue range and geography who has confirmed an interest in discussing valuation or a potential sale. Every criterion is confirmed before the call reaches your calendar.',
  },
  {
    id: 'faq-2',
    question: 'How much does the service cost?',
    answer: 'Our plans start at $1,500/month for Basic ($500k–$1M revenue sellers, 10 leads/mo), $2,000/month for Pro ($1M–$50M revenue sellers, 10 leads/mo), and a flexible Pay Per Lead plan ($699 setup fee + $100 or $150 per lead). We offer both flexible Monthly and discounted 3-Month options (20% off).',
  },
  {
    id: 'faq-3',
    question: 'How long does it take to get my first appointment?',
    answer: 'Once your onboarding session locks in your target profile and territory, outreach begins immediately. Brokers typically receive their first qualified appointment booked directly onto their calendar within 48–72 hours.',
  },
  {
    id: 'faq-list-building',
    question: 'How Do We Build the List?',
    answer: 'We use multiple industry-leading tools, including ZoomInfo, RocketReach, ContactOut, LinkedIn Sales Navigator, and Clay, together to build and enrich targeted lead lists. Based on the criteria you provide, we identify the right businesses and decision-makers, then use these tools to find and verify accurate contact information, including direct mobile numbers whenever available.',
  },
  {
    id: 'faq-4',
    question: 'Do I get to listen to the call recordings?',
    answer: 'Yes! Every conversation booked on your calendar comes with live call recordings and notes so you can review the owner\'s exact situation and motivation before you speak with them.',
  },
  {
    id: 'faq-5',
    question: 'Do you work with brokers outside the US?',
    answer: 'Currently, Elite Scholars specializes in supporting licensed business brokers, M&A advisors, and exit planners across North America (United States & Canada), where our dialers and data operate with maximum precision.',
  },
  {
    id: 'faq-6',
    question: 'Can I cancel if I need to pause?',
    answer: 'All our plans are on a "No Commitment" basis. You can pause or adjust your campaign at any time with straightforward notice.',
  },
  {
    id: 'faq-7',
    question: 'How do you protect our brokerage brand during outreach?',
    answer: 'Our US-timezone dialers are trained specifically for business-broker positioning. We use respectful, consultative dialogue that elevates your brand and positions you as the trusted local M&A authority.',
  },
]

export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Us', href: '#different' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'ROI Calculator', href: '#roi-calculator' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]
