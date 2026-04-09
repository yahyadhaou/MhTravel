import Link from "next/link";

const services = [
  "Luxury Travel Packages",
  "Medical Tourism",
  "Senior Living",
  "Hotel Partnerships",
  "Group Travel",
  "Visa Assistance",
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/70">
      {/* Top CTA band */}
      <div className="border-t-2 border-gold-500 bg-navy-800 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-2xl text-white font-medium">
              Ready to start your journey?
            </p>
            <p className="text-white/60 mt-1 text-sm">
              Let us craft your perfect travel experience in Tunisia and beyond.
            </p>
          </div>
          <Link href="/contact" className="btn-gold whitespace-nowrap">
            Contact Us Today →
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <p className="font-serif text-2xl text-white font-semibold">
            M.H. <span className="text-gold-500">Travel</span>
          </p>
          <p className="text-[11px] tracking-[0.2em] text-gold-500/60 uppercase font-mono mb-4">
            Agence de Voyage Licence A
          </p>
          <p className="text-sm leading-relaxed text-white/50">
            Société El Ibdaa — Luxury travel, medical tourism and senior living
            experiences across Tunisia and the world.
          </p>
          <div className="flex gap-3 mt-6">
            {["f", "in", "tw"].map((s) => (
              <div
                key={s}
                className="w-8 h-8 rounded-sm border border-gold-500/30 flex items-center justify-center text-gold-500/60 text-xs font-mono hover:border-gold-500 hover:text-gold-400 transition-colors cursor-pointer"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
            Services
          </h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s}>
                <span className="text-sm text-white/50 hover:text-gold-400 transition-colors cursor-pointer">
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-white/50 hover:text-gold-400 transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
            Contact
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <span className="text-gold-500 mt-0.5">📍</span>
              <span className="text-white/50 leading-relaxed">
                Résidence Fatma, Rue Lac Victoria<br />
                Les Berges du Lac, 1053 Tunis
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500">📞</span>
              <span className="text-white/50">+216 71 96 03 01</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500">📱</span>
              <span className="text-white/50">+216 52 86 86 54</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500">✉️</span>
              <a
                href="mailto:mhtravel@topnet.tn"
                className="text-gold-400 hover:text-gold-300 transition-colors"
              >
                mhtravel@topnet.tn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/30">
          <p>© {new Date().getFullYear()} M.H. Travel / Société El Ibdaa. All rights reserved.</p>
          <p className="font-mono">Agence de Voyage Licence A · Tunis, Tunisia</p>
        </div>
      </div>
    </footer>
  );
}
