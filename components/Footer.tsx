import { SITE, NAV_LINKS } from '@/data/config'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#121F38] text-paper pt-16 pb-12 font-public-sans border-t-2 border-brass/40">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Monogram */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-brass text-ink-navy flex items-center justify-center font-fraunces font-bold text-sm shadow-xs">
                ES
              </div>
              <span className="font-fraunces font-bold text-xl text-white">
                {SITE.name}
              </span>
            </div>
            <p className="text-xs text-paper/70 leading-relaxed font-public-sans">
              Done-for-you lead generation and verified seller appointment-setting engineered exclusively for business brokers and M&amp;A advisors.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-brass/10 border border-brass/30 text-brass text-[10px] font-bold uppercase tracking-wider rounded-full">
                Institutional Quality Standard
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-brass uppercase tracking-widest font-public-sans">
              Navigation
            </p>
            <ul className="space-y-2 text-xs text-paper/80 font-public-sans">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-brass transition-colors flex items-center gap-1.5">
                    <span className="text-brass/60 text-[10px]">&rsaquo;</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-brass uppercase tracking-widest font-public-sans">
              Direct Contact
            </p>
            <ul className="space-y-2.5 text-xs text-paper/80 font-public-sans">
              <li>
                <span className="block text-paper/50 text-[10px] uppercase font-semibold">Phone</span>
                <a href={`tel:${SITE.phone.replace(/[^0-9+]/g, '')}`} className="font-bold text-white hover:text-brass transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <span className="block text-paper/50 text-[10px] uppercase font-semibold">Email</span>
                <a href={`mailto:${SITE.email}`} className="font-bold text-white hover:text-brass transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="block text-paper/50 text-[10px] uppercase font-semibold">Headquarters</span>
                <span className="text-paper/80">{SITE.address}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Connect & Legal */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-brass uppercase tracking-widest font-public-sans">
              Connect &amp; Compliance
            </p>
            <div className="flex items-center gap-3 text-xs mb-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:border-brass hover:text-brass transition-colors text-white"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
            <ul className="space-y-1.5 text-[11px] text-paper/60 font-public-sans">
              <li><a href="#privacy" className="hover:text-brass transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-brass transition-colors">Terms of Service</a></li>
              <li><a href="#guarantee" className="hover:text-brass transition-colors">Lead Quality SLA Guarantee</a></li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-paper/50 font-public-sans">
          <p>
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0 text-[11px] text-paper/60">
            Engineered with research-grade diligence for M&amp;A professionals.
          </p>
        </div>
      </div>
    </footer>
  )
}
