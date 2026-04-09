import Link from "next/link";

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "4★ / 5★", label: "Hotel Partners" },
  { value: "24/7", label: "Medical Support" },
  { value: "50%", label: "Savings vs Europe" },
];

const highlights = [
  {
    icon: "✈",
    title: "Luxury Travel Packages",
    desc: "Curated journeys to Tunisia's finest destinations — tailored to your pace, preferences and budget.",
  },
  {
    icon: "⚕",
    title: "Medical Tourism",
    desc: "World-class dental, aesthetic and orthopaedic procedures at up to 50% less than European prices.",
  },
  {
    icon: "🏨",
    title: "Senior Living",
    desc: "4 & 5-star residences with round-the-clock medical care, personalised nutrition and enrichment programmes.",
  },
  {
    icon: "🤝",
    title: "Partnership Programmes",
    desc: "Dedicated schemes for EHPAD groups, hospitals and care operators seeking Tunisian solutions.",
  },
];

const testimonials = [
  {
    quote:
      "Exceptional care and extraordinary comfort. The team at M.H. Travel made every detail seamless for my mother's long stay.",
    name: "Marie-Claire D.",
    origin: "Lyon, France",
  },
  {
    quote:
      "I combined a dental procedure with a relaxing hotel stay. The savings were remarkable and quality was superb.",
    name: "Thomas B.",
    origin: "Brussels, Belgium",
  },
  {
    quote:
      "Our entire group trip was handled with professionalism and warmth from start to finish.",
    name: "Isabelle R.",
    origin: "Paris, France",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-hero-pattern overflow-hidden">
        {/* Decorative diagonal */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #c5a55a 0, #c5a55a 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Gold left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold-500" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-24 grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="fade-up font-mono text-gold-400 text-xs tracking-[0.3em] uppercase mb-6">
              Agence de Voyage Licence A
            </p>
            <h1 className="fade-up delay-100 font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight font-medium">
              Where Luxury
              <br />
              <em className="text-gold-400 not-italic">Meets Care</em>
            </h1>
            <p className="fade-up delay-200 mt-6 text-white/60 text-lg leading-relaxed max-w-lg">
              Premium travel, medical tourism and senior living experiences in
              Tunisia — crafted with the precision of a 5-star concierge.
            </p>
            <div className="fade-up delay-300 flex flex-wrap gap-4 mt-10">
              <Link href="/services" className="btn-gold">
                Explore Services →
              </Link>
              <Link href="/contact" className="btn-outline">
                Request a Proposal
              </Link>
            </div>
          </div>

          {/* Stats card */}
          <div className="fade-up delay-400 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/5 border border-white/10 rounded-sm p-6 backdrop-blur-sm hover:border-gold-500/40 transition-colors"
              >
                <p className="font-serif text-3xl text-gold-400 font-medium">
                  {s.value}
                </p>
                <p className="text-white/50 text-sm mt-1 leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <span className="gold-rule" />
          <h2 className="font-serif text-4xl md:text-5xl text-navy-800 font-medium mb-4">
            Our Services
          </h2>
          <p className="text-navy-600/70 max-w-xl mb-14 text-lg leading-relaxed">
            From bespoke travel itineraries to full-time senior care — M.H.
            Travel covers every step of your journey.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="group bg-white border border-navy-100 p-8 rounded-sm hover:border-gold-400 hover:shadow-lg hover:shadow-navy-100/50 transition-all duration-300"
              >
                <div className="text-3xl mb-5">{h.icon}</div>
                <h3 className="font-serif text-xl text-navy-800 font-medium mb-3 group-hover:text-gold-600 transition-colors">
                  {h.title}
                </h3>
                <p className="text-navy-600/70 text-sm leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="btn-gold">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="py-24 px-6 bg-navy-800 relative overflow-hidden">
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #c5a55a 0, #c5a55a 1px, transparent 0, transparent 30px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative">
          <div>
            <span className="gold-rule" />
            <h2 className="font-serif text-4xl text-white font-medium mb-6">
              Trusted Since Day One
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Based in Les Berges du Lac, Tunis, M.H. Travel — Société El Ibdaa
              — is a licensed travel agency combining the warmth of Tunisian
              hospitality with European standards of care and professionalism.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Whether you are a senior seeking a dignified long-stay residence, a
              medical traveller looking for affordable expertise, or a family
              planning a group escape — we deliver a flawless experience every
              time.
            </p>
            <Link href="/about" className="btn-outline">
              Learn About Us →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "12+", t: "Destination cities" },
              { n: "200+", t: "Partner hotels" },
              { n: "1,000+", t: "Happy clients" },
              { n: "5★", t: "Service rating" },
            ].map((s) => (
              <div
                key={s.t}
                className="border border-gold-500/20 rounded-sm p-6 bg-white/5 text-center"
              >
                <p className="font-serif text-4xl text-gold-400 font-medium">
                  {s.n}
                </p>
                <p className="text-white/50 text-sm mt-1">{s.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <span className="gold-rule" />
          <h2 className="font-serif text-4xl text-navy-800 font-medium mb-14">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white border border-navy-100 p-8 rounded-sm relative"
              >
                <div className="absolute top-6 right-8 font-serif text-6xl text-gold-200 leading-none select-none">
                  "
                </div>
                <p className="text-navy-700 leading-relaxed italic font-serif text-lg mb-6 relative z-10">
                  "{t.quote}"
                </p>
                <div className="border-t border-navy-100 pt-4">
                  <p className="font-semibold text-navy-800 text-sm">{t.name}</p>
                  <p className="text-navy-500/60 text-xs font-mono mt-0.5">{t.origin}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 px-6 bg-white border-t border-navy-100">
        <div className="max-w-3xl mx-auto text-center">
          <span className="gold-rule mx-auto" />
          <h2 className="font-serif text-4xl text-navy-800 font-medium mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-navy-600/70 text-lg mb-10 leading-relaxed">
            Whether you represent a care group, a hospital, or are an individual
            traveller — we have a tailored solution waiting for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/pricing" className="btn-gold">
              View Pricing →
            </Link>
            <Link
              href="/contact"
              className="btn-outline !text-navy-800 !border-navy-300 hover:!bg-navy-50"
            >
              Request a Proposal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
