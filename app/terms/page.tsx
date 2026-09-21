import { SITE } from '@/data/config'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container-main max-w-4xl mx-auto bg-white p-8 sm:p-12 md:p-16 rounded-[32px] shadow-sm border border-slate-200/60">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">Terms of Service</h1>
        
        <div className="max-w-none text-slate-600 space-y-8">
          <p className="text-lg font-medium text-slate-500">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
            <p className="leading-relaxed mb-4">
              By accessing our website at {SITE.url}, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
            <p className="leading-relaxed">
              If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use License</h2>
            <p className="leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on {SITE.name}'s website for personal, non-commercial transitory viewing only.
            </p>
            <p className="leading-relaxed mb-4">
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on {SITE.name}'s website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Disclaimer</h2>
            <p className="leading-relaxed">
              The materials on {SITE.name}'s website are provided on an 'as is' basis. {SITE.name} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Limitations</h2>
            <p className="leading-relaxed">
              In no event shall {SITE.name} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on {SITE.name}'s website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contact Information</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mt-4 font-semibold text-slate-800">
              {SITE.name}<br/>
              Email: {SITE.email}<br/>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
