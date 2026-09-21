import { SITE, NAV_LINKS } from '@/data/config'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-[#0A1A3F] via-[#102B66] to-[#061126] text-blue-100/80 pt-16 pb-12 border-t border-white/15 relative overflow-hidden">
      {/* Playful Ambient Background Lighting */}
      <div aria-hidden="true" className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -left-20 top-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/15">
          
          {/* Col 1: Brand & Monogram */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-500 to-blue-600 text-white flex items-center justify-center font-extrabold text-base shadow-md shadow-blue-500/20 border border-white/20">
                BL
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                {SITE.name}
              </span>
            </div>
            <p className="text-xs text-blue-200/80 leading-relaxed font-medium">
              We deliver guaranteed, pre-vetted seller conversations directly to Business Brokers and M&amp;A Advisors - so you focus purely on closing deals.
            </p>
            <div className="pt-1">
              <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 text-blue-200 text-[10px] font-bold uppercase tracking-wider rounded-full backdrop-blur-xs">
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
                  <a href={link.href} className="text-blue-200/80 hover:text-amber-300 transition-colors flex items-center gap-1.5">
                    <span className="text-amber-400 text-xs">&rsaquo;</span>
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
                <span className="block text-blue-300/70 text-[10px] uppercase font-bold tracking-wider">Phone</span>
                <a href={`tel:${SITE.phone.replace(/[^0-9+]/g, '')}`} className="font-bold text-white hover:text-amber-300 transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <span className="block text-blue-300/70 text-[10px] uppercase font-bold tracking-wider">Email</span>
                <a href={`mailto:${SITE.email}`} className="font-bold text-white hover:text-amber-300 transition-colors">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Connect & Legal */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-widest">
              Legal &amp; Compliance
            </p>
            <ul className="space-y-1.5 text-[11px] text-blue-200/70 font-medium mt-4">
              <li><a href="/privacy" className="hover:text-amber-300 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-amber-300 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-200/70 font-medium">
          <p>
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0 text-[11px] text-blue-300/80">
            Built for M&amp;A professionals &amp; business brokers.
          </p>
        </div>
      </div>
    </footer>
  )
}
