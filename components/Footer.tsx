import { SITE, NAV_LINKS } from '@/data/config'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Monogram */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-extrabold text-base shadow-md shadow-blue-500/20">
                ES
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                {SITE.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Done-for-you cold outreach and verified seller appointments engineered exclusively for business brokers and M&amp;A advisors.
            </p>
            <div className="pt-1">
              <span className="inline-block px-3 py-1 bg-blue-900/40 border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
                Verified Quality Standard
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-widest">
              Navigation
            </p>
            <ul className="space-y-2 text-xs font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                    <span className="text-blue-500 text-xs">&rsaquo;</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-widest">
              Direct Contact
            </p>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <span className="block text-slate-500 text-[10px] uppercase font-bold tracking-wider">Phone</span>
                <a href={`tel:${SITE.phone.replace(/[^0-9+]/g, '')}`} className="font-bold text-slate-200 hover:text-blue-400 transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <span className="block text-slate-500 text-[10px] uppercase font-bold tracking-wider">Email</span>
                <a href={`mailto:${SITE.email}`} className="font-bold text-slate-200 hover:text-blue-400 transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="block text-slate-500 text-[10px] uppercase font-bold tracking-wider">Headquarters</span>
                <span className="text-slate-300">{SITE.address}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Connect & Legal */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-widest">
              Connect &amp; Compliance
            </p>
            <div className="flex items-center gap-3 text-xs mb-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500 hover:text-blue-400 transition-colors text-white"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
            <ul className="space-y-1.5 text-[11px] text-slate-500 font-medium">
              <li><a href="#privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium">
          <p>
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0 text-[11px] text-slate-400">
            Built for M&amp;A professionals &amp; business brokers.
          </p>
        </div>
      </div>
    </footer>
  )
}
