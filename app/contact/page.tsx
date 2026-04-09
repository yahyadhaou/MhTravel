"use client";
import { useState } from "react";

const inquiryTypes = [
  "Senior Living / Long-Stay Residence",
  "Medical Tourism Package",
  "Luxury Travel Package",
  "B2B / Partnership Proposal",
  "Group Travel",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", type: "", message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to your API route / email service
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold-500" />
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-gold-400 text-xs tracking-[0.3em] uppercase mb-4">Get in Touch</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white font-medium leading-tight">Contact Us</h1>
          <p className="text-white/60 mt-4 max-w-xl text-lg leading-relaxed">
            Our team responds within 24 hours — we'd love to hear about your project.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

          {/* Contact details */}
          <div className="md:col-span-1 space-y-8">
            <div>
              <span className="gold-rule" />
              <h2 className="font-serif text-2xl text-navy-800 font-medium mb-6">Our Office</h2>
            </div>
            {[
              { icon: "📍", label: "Address", value: "Résidence Fatma, Rue Lac Victoria\nLes Berges du Lac, 1053 Tunis" },
              { icon: "📞", label: "Telephone", value: "+216 71 96 03 01" },
              { icon: "📱", label: "Mobile / WhatsApp", value: "+216 52 86 86 54" },
              { icon: "📠", label: "Fax", value: "+216 71 96 03 04" },
              { icon: "✉️", label: "Email", value: "mhtravel@topnet.tn" },
            ].map((c) => (
              <div key={c.label} className="flex gap-4">
                <span className="text-xl mt-0.5">{c.icon}</span>
                <div>
                  <p className="text-xs font-mono text-gold-600 tracking-widest uppercase mb-1">{c.label}</p>
                  <p className="text-navy-700 text-sm leading-relaxed whitespace-pre-line">{c.value}</p>
                </div>
              </div>
            ))}

            <div className="bg-navy-800 rounded-sm p-6 mt-8">
              <p className="text-gold-400 text-xs font-mono tracking-widest uppercase mb-3">Office Hours</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Monday – Friday</span>
                  <span className="text-white font-medium">08:30 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Saturday</span>
                  <span className="text-white font-medium">09:00 – 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Sunday</span>
                  <span className="text-white/40">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2 bg-white border border-navy-100 rounded-sm p-10 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <div className="w-16 h-16 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center text-3xl mb-6">
                  ✓
                </div>
                <h3 className="font-serif text-2xl text-navy-800 font-medium mb-3">
                  Message Received
                </h3>
                <p className="text-navy-600/70 max-w-sm leading-relaxed">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="gold-rule" />
                  <h2 className="font-serif text-2xl text-navy-800 font-medium mb-1">Send Us a Message</h2>
                  <p className="text-navy-600/60 text-sm">All fields marked * are required.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono tracking-widest uppercase text-navy-600/70 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text" name="name" required value={form.name}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      className="w-full border border-navy-200 rounded-sm px-4 py-3 text-sm text-navy-800 placeholder-navy-300 focus:outline-none focus:border-gold-400 transition-colors bg-cream"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono tracking-widest uppercase text-navy-600/70 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email" name="email" required value={form.email}
                      onChange={handleChange}
                      placeholder="jean@example.com"
                      className="w-full border border-navy-200 rounded-sm px-4 py-3 text-sm text-navy-800 placeholder-navy-300 focus:outline-none focus:border-gold-400 transition-colors bg-cream"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono tracking-widest uppercase text-navy-600/70 mb-2">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel" name="phone" value={form.phone}
                      onChange={handleChange}
                      placeholder="+33 6 00 00 00 00"
                      className="w-full border border-navy-200 rounded-sm px-4 py-3 text-sm text-navy-800 placeholder-navy-300 focus:outline-none focus:border-gold-400 transition-colors bg-cream"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono tracking-widest uppercase text-navy-600/70 mb-2">
                      Enquiry Type *
                    </label>
                    <select
                      name="type" required value={form.type}
                      onChange={handleChange}
                      className="w-full border border-navy-200 rounded-sm px-4 py-3 text-sm text-navy-800 focus:outline-none focus:border-gold-400 transition-colors bg-cream appearance-none"
                    >
                      <option value="">Select a type…</option>
                      {inquiryTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono tracking-widest uppercase text-navy-600/70 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message" required value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your needs, preferred dates, number of people, any specific requirements…"
                    className="w-full border border-navy-200 rounded-sm px-4 py-3 text-sm text-navy-800 placeholder-navy-300 focus:outline-none focus:border-gold-400 transition-colors bg-cream resize-none"
                  />
                </div>

                <button type="submit" className="btn-gold w-full justify-center py-4 text-base">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
