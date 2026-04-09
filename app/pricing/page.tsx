import Link from "next/link";

const plans = [
  {
    name: "Temporary Residence",
    subtitle: "Short-stay / Convalescence",
    price: "From €1,500",
    per: "/ month",
    highlight: false,
    desc: "Ideal for post-operative recovery or waiting-list periods before a permanent placement in Europe.",
    features: [
      "Full-board in 4-star hotel",
      "Daily nursing visits",
      "Basic physiotherapy access",
      "Nutritionist-supervised dining",
      "Family video-call setup",
      "Airport transfer (arrival)",
    ],
    cta: "Request a Quote",
  },
  {
    name: "Long-Stay Residence",
    subtitle: "Up to 6 months — EHPAD equivalent",
    price: "From €2,000",
    per: "/ month",
    highlight: true,
    desc: "Our most popular option. Combines luxury accommodation with full personalised medical oversight.",
    features: [
      "Full-board in 4 or 5-star hotel",
      "24/7 nursing & care assistant team",
      "Coordinating physician included",
      "Full physiotherapy programme",
      "Specialist medical consultations",
      "Anti-bedsore mattress if required",
      "Enrichment & activity programme",
      "Family visit package option",
    ],
    cta: "Request a Quote",
  },
  {
    name: "Premium Medical Package",
    subtitle: "Medical tourism + recovery",
    price: "On request",
    per: "",
    highlight: false,
    desc: "Combine a medical or aesthetic procedure at an accredited Tunisian clinic with a luxury hotel recovery stay.",
    features: [
      "Pre-op consultation included",
      "Accredited surgeon assignment",
      "Airport & clinic transfers",
      "Recovery accommodation (5-star)",
      "Post-op nursing follow-up",
      "Concierge & interpretation service",
    ],
    cta: "Contact Us",
  },
];

const comparison = [
  { feature: "Accommodation quality", tunisia: "4 & 5-star hotel", europe: "Standard room" },
  { feature: "Monthly cost (full care)", tunisia: "€1,500 – €2,700", europe: "€3,500 – €6,000+" },
  { feature: "Nurse-to-resident ratio", tunisia: "High (low labour cost)", europe: "Regulated minimum" },
  { feature: "Aesthetic surgery savings", tunisia: "Up to 50% less", europe: "Full price" },
  { feature: "Waiting list", tunisia: "Immediate availability", europe: "Months to years" },
  { feature: "Medical standards", tunisia: "International-grade clinics", europe: "National standards" },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold-500" />
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-gold-400 text-xs tracking-[0.3em] uppercase mb-4">
            Transparent Pricing
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-white font-medium leading-tight">
            Plans & Pricing
          </h1>
          <p className="text-white/60 mt-4 max-w-xl text-lg leading-relaxed">
            Exceptional value without compromise. All packages include
            personalised care coordination and family liaison.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-sm overflow-hidden border transition-shadow hover:shadow-xl ${
                  p.highlight
                    ? "border-gold-400 shadow-lg shadow-gold-200/40 scale-[1.02]"
                    : "border-navy-100 bg-white shadow-sm"
                }`}
              >
                {p.highlight && (
                  <div className="bg-gold-500 text-navy-900 text-center py-2 text-xs font-semibold tracking-widest uppercase font-mono">
                    Most Popular
                  </div>
                )}
                <div
                  className={`p-8 ${
                    p.highlight ? "bg-navy-800 text-white" : "bg-white"
                  }`}
                >
                  <span
                    className={`text-xs font-mono tracking-widest uppercase ${
                      p.highlight ? "text-gold-400" : "text-gold-600"
                    }`}
                  >
                    {p.subtitle}
                  </span>
                  <h2
                    className={`font-serif text-2xl font-medium mt-2 mb-1 ${
                      p.highlight ? "text-white" : "text-navy-800"
                    }`}
                  >
                    {p.name}
                  </h2>
                  <div className="flex items-baseline gap-1 mt-4 mb-4">
                    <span
                      className={`font-serif text-4xl font-medium ${
                        p.highlight ? "text-gold-400" : "text-navy-800"
                      }`}
                    >
                      {p.price}
                    </span>
                    {p.per && (
                      <span
                        className={`text-sm ${
                          p.highlight ? "text-white/50" : "text-navy-500/60"
                        }`}
                      >
                        {p.per}
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      p.highlight ? "text-white/60" : "text-navy-600/70"
                    }`}
                  >
                    {p.desc}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2 items-start text-sm">
                        <span className="text-gold-400 mt-0.5">✓</span>
                        <span
                          className={
                            p.highlight ? "text-white/70" : "text-navy-600/80"
                          }
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={p.highlight ? "btn-gold w-full justify-center" : "btn-outline !text-navy-700 !border-navy-300 w-full justify-center hover:!bg-navy-50"}
                  >
                    {p.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 px-6 bg-white border-t border-navy-100">
        <div className="max-w-5xl mx-auto">
          <span className="gold-rule" />
          <h2 className="font-serif text-4xl text-navy-800 font-medium mb-4">
            Tunisia vs Europe — Cost Comparison
          </h2>
          <p className="text-navy-600/70 mb-10 text-lg">
            See why over 1,000 European families choose Tunisia for quality care.
          </p>
          <div className="overflow-x-auto rounded-sm border border-navy-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy-800 text-white">
                  <th className="text-left px-6 py-4 font-medium">Feature</th>
                  <th className="text-left px-6 py-4 font-medium text-gold-400">
                    Tunisia (M.H. Travel)
                  </th>
                  <th className="text-left px-6 py-4 font-medium text-white/50">
                    Typical Europe
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-cream" : "bg-white"}
                  >
                    <td className="px-6 py-4 font-medium text-navy-800">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-gold-700 font-medium">
                      {row.tunisia}
                    </td>
                    <td className="px-6 py-4 text-navy-500/60">{row.europe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-navy-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-white font-medium mb-4">
            Not sure which plan fits?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Our team will assess your needs and recommend the right package — at
            no obligation.
          </p>
          <Link href="/contact" className="btn-gold">
            Talk to Our Team →
          </Link>
        </div>
      </section>
    </>
  );
}
