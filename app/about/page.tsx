import Link from "next/link";

const team = [
  {
    initials: "HB",
    name: "Hatem Ben Hajel",
    role: "General Manager",
    bio: "Founder and driving force behind M.H. Travel, Hatem brings over 15 years of luxury travel and medical tourism expertise to every client relationship.",
  },
];

const milestones = [
  { year: "2008", event: "M.H. Travel founded in Tunis as a boutique travel agency." },
  { year: "2012", event: "Launched first medical tourism packages in partnership with Tunisian clinics." },
  { year: "2016", event: "Introduced senior long-stay residence programmes for European clients." },
  { year: "2020", event: "Expanded partnerships to include 4 & 5-star hotel networks across Tunisia." },
  { year: "2024", event: "Launched Dream Stays — luxury senior living brand targeting EHPAD partnerships." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold-500" />
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-gold-400 text-xs tracking-[0.3em] uppercase mb-4">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white font-medium leading-tight">About M.H. Travel</h1>
          <p className="text-white/60 mt-4 max-w-xl text-lg leading-relaxed">
            Born in Tunis. Built on trust. Committed to excellence for every client, every journey.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gold-rule" />
            <h2 className="font-serif text-4xl text-navy-800 font-medium mb-6">Our Mission</h2>
            <p className="text-navy-600/70 leading-relaxed mb-4 text-lg">
              M.H. Travel / Société El Ibdaa is a licensed Tunisian travel agency
              (Licence A) dedicated to offering Europeans access to luxury
              hospitality, world-class medical care and dignified senior living —
              at transparent, competitive prices.
            </p>
            <p className="text-navy-600/70 leading-relaxed text-lg">
              We believe that quality of life should never be compromised by
              geography or budget. Our team of specialists designs personalised
              experiences that feel seamless from the moment you contact us to
              the day you return home.
            </p>
          </div>
          <div className="bg-navy-800 rounded-sm p-10 space-y-6">
            {[
              { icon: "🎯", title: "Tailored", desc: "Every package is built around the client's unique needs, health profile and preferences." },
              { icon: "🔒", title: "Trustworthy", desc: "We hold Licence A and operate to the highest ethical and safety standards." },
              { icon: "💎", title: "Premium", desc: "We never compromise on quality — whether in accommodation, care or service." },
            ].map((v) => (
              <div key={v.title} className="flex gap-4">
                <span className="text-2xl mt-0.5">{v.icon}</span>
                <div>
                  <p className="text-gold-400 font-semibold text-sm mb-1">{v.title}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-white border-t border-navy-100">
        <div className="max-w-4xl mx-auto">
          <span className="gold-rule" />
          <h2 className="font-serif text-4xl text-navy-800 font-medium mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-gold-200" />
            <div className="space-y-10">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-8 items-start">
                  <div className="w-14 text-right shrink-0">
                    <span className="font-mono text-sm font-medium text-gold-600">{m.year}</span>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full border-2 border-gold-400 bg-cream" />
                    <p className="text-navy-700 leading-relaxed pl-2">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <span className="gold-rule" />
          <h2 className="font-serif text-4xl text-navy-800 font-medium mb-12">Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((t) => (
              <div key={t.name} className="bg-white border border-navy-100 rounded-sm p-8">
                <div className="w-16 h-16 rounded-full bg-navy-800 flex items-center justify-center text-gold-400 font-serif text-xl font-medium mb-5">
                  {t.initials}
                </div>
                <h3 className="font-serif text-xl text-navy-800 font-medium">{t.name}</h3>
                <p className="text-gold-600 text-xs font-mono tracking-widest uppercase mt-1 mb-4">{t.role}</p>
                <p className="text-navy-600/70 text-sm leading-relaxed">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-navy-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-white font-medium mb-4">Let's Work Together</h2>
          <p className="text-white/60 text-lg mb-8">
            We'd love to learn about your project and show you how M.H. Travel can exceed your expectations.
          </p>
          <Link href="/contact" className="btn-gold">Contact Our Team →</Link>
        </div>
      </section>
    </>
  );
}
