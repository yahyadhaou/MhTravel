import Link from "next/link";

const services = [
  {
    icon: "🏨",
    category: "Senior Living",
    title: "Luxury Senior Residences",
    desc: "Full-board accommodation in 4 & 5-star hotels with 24/7 medical supervision, personalised care assistants, and enrichment activities — at a fraction of European costs.",
    features: [
      "Coordinating physician on site",
      "Nurses exclusively administer all medication",
      "Fully equipped medical infirmary",
      "Physiotherapy & rehabilitation room",
      "Adapted dining with nutritionist oversight",
      "Family video-call system",
    ],
    price: "From €1,500 / month",
    href: "/pricing",
  },
  {
    icon: "⚕",
    category: "Medical Tourism",
    title: "Medical & Aesthetic Procedures",
    desc: "Access world-class clinics for dental surgery, aesthetic procedures, orthopaedics and fertility treatment — with up to 50% savings versus European prices.",
    features: [
      "Accredited surgeons & certified clinics",
      "Dental implants & cosmetic dentistry",
      "Aesthetic & reconstructive surgery",
      "Orthopaedic surgery + post-op rehab",
      "Airport transfer & hotel arrangement",
      "Pre- and post-operative follow-up",
    ],
    price: "Up to 50% less than Europe",
    href: "/contact",
  },
  {
    icon: "✈",
    category: "Travel",
    title: "Luxury Travel Packages",
    desc: "Tailored individual and group travel to Tunisia and worldwide destinations. We handle every detail from flights and hotels to excursions and private transfers.",
    features: [
      "Group & individual packages",
      "4 & 5-star hotel reservations",
      "Airport transfers & private drivers",
      "Cultural tours & excursions",
      "Preferential partner rates",
      "Visa assistance on request",
    ],
    price: "Custom quotes available",
    href: "/contact",
  },
  {
    icon: "🤝",
    category: "B2B Partnership",
    title: "Partnership Programmes",
    desc: "Dedicated collaboration models for EHPAD groups, hospitals, insurers and senior care operators seeking high-quality, cost-effective Tunisian solutions.",
    features: [
      "Room-block preferential rates",
      "White-label resident care packages",
      "Long-stay agreements (up to 6 months)",
      "Staff training & quality assurance",
      "Reporting & family liaison services",
      "Scalable to Canadian & EU markets",
    ],
    price: "On request — custom SLA",
    href: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold-500" />
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-gold-400 text-xs tracking-[0.3em] uppercase mb-4">
            What We Offer
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-white font-medium leading-tight">
            Our Services
          </h1>
          <p className="text-white/60 mt-4 max-w-xl text-lg leading-relaxed">
            Four pillars of excellence — all backed by M.H. Travel's 15+ years
            of trusted expertise.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto space-y-10">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid md:grid-cols-2 gap-0 bg-white border border-navy-100 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Info panel */}
              <div className="p-10 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-xs font-mono tracking-widest uppercase text-gold-600 bg-gold-50 border border-gold-200 px-3 py-1 rounded-sm mb-5">
                    {s.category}
                  </span>
                  <h2 className="font-serif text-3xl text-navy-800 font-medium mb-4">
                    {s.title}
                  </h2>
                  <p className="text-navy-600/70 leading-relaxed mb-6">{s.desc}</p>
                  <p className="text-gold-600 font-semibold text-sm mb-6">
                    {s.price}
                  </p>
                  <Link href={s.href} className="btn-gold self-start">
                    {s.href === "/pricing" ? "See Pricing →" : "Get a Quote →"}
                  </Link>
                </div>
              </div>

              {/* Features panel */}
              <div className="bg-navy-800 p-10">
                <p className="font-mono text-xs tracking-widest uppercase text-gold-400/70 mb-6">
                  What's Included
                </p>
                <ul className="space-y-4">
                  {s.features.map((f) => (
                    <li key={f} className="flex gap-3 items-start">
                      <span className="text-gold-400 mt-0.5 text-lg leading-none">
                        ✓
                      </span>
                      <span className="text-white/70 text-sm leading-relaxed">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
