export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          GDPR Compliance for WordPress
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Auto-scan WordPress sites for{" "}
          <span className="text-[#58a6ff]">GDPR cookie violations</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Continuously crawls your WordPress pages, detects rogue cookies and tracking scripts, and alerts you before regulators come knocking.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start scanning — $13/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">No credit card trials. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🔍", title: "Headless Browser Scans", body: "Real browser automation detects cookies that only fire on actual page loads." },
            { icon: "⚠️", title: "Instant Violation Alerts", body: "Email and dashboard alerts the moment a new non-compliant cookie is found." },
            { icon: "📋", title: "Compliance Reports", body: "Exportable reports mapped to GDPR categories for your DPA or clients." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Agency Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$13</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Up to 10 WordPress sites",
              "Daily automated scans",
              "Email + dashboard alerts",
              "Cookie category mapping",
              "Exportable PDF reports",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the scanner detect cookies?",
              a: "We use headless Chromium to load each page exactly as a real visitor would, capturing all cookies set by first- and third-party scripts — including those loaded asynchronously."
            },
            {
              q: "What counts as a GDPR violation?",
              a: "Any cookie or tracking script that fires before user consent, or that isn't disclosed in your cookie policy, is flagged. We cross-reference against known tracker databases (IAB, Open Cookie Database)."
            },
            {
              q: "Do I need to install anything on my WordPress site?",
              a: "No plugin or server access required. Just add your site URL and we handle the rest from our scanning infrastructure."
            }
          ].map((item) => (
            <details key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 group">
              <summary className="font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                {item.q}
                <span className="text-[#58a6ff] ml-4">+</span>
              </summary>
              <p className="mt-3 text-sm text-[#8b949e]">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} GDPR Cookie Scanner. All rights reserved.
      </footer>
    </main>
  );
}
