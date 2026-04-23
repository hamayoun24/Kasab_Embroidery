import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ServiceCard from '../components/ServiceCard'
import SectionHeading from '../components/SectionHeading'
import WhatsAppFloat from '../components/WhatsAppFloat'
import { services } from '../data/services'
import { HiArrowRight } from 'react-icons/hi2'

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services & Machinery"
        title="A complete embroidery capability, under one roof."
        description="From hand-guided Aari to 28-head sequin production, every stitch passes through the same quality-obsessed team."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />

      <section className="section pt-0">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Alternating feature rows */}
      <section className="section bg-ink-800/30 border-y border-white/5">
        <div className="container-x space-y-24">
          {services.slice(0, 4).map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              <div className="aspect-[5/4] rounded-3xl overflow-hidden bg-ink-700 relative">
                <img
                  src={s.image}
                  alt={s.title}
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 text-xs uppercase tracking-[0.25em] text-gold-300 bg-ink-900/60 px-3 py-1.5 rounded-full border border-gold-400/30">
                  0{i + 1}
                </div>
              </div>
              <div>
                <div className="eyebrow mb-4">{s.short}</div>
                <h3 className="sub-heading text-white">{s.title}</h3>
                <p className="mt-6 text-ink-200 leading-relaxed">{s.description}</p>
                <ul className="mt-8 space-y-3">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-ink-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-outline mt-10 text-sm">
                  Enquire about {s.title} <HiArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Frequently Asked"
            title="Quick answers before you reach out"
            center
          />
          <div className="mt-14 max-w-3xl mx-auto space-y-4">
            {[
              { q: 'What is your minimum order quantity?', a: 'MOQs vary by service and design complexity. For bulk multi-head runs we typically start at 500 pieces; for Aari / couture pieces we take on single-unit orders. Message us with your brief — we will guide you honestly.' },
              { q: 'Can you handle sampling?', a: 'Yes. Standard sampling turnaround is 48-72 hours after artwork approval, with a sample fee that is adjusted against bulk invoices.' },
              { q: 'What fabrics can you embroider on?', a: 'Silks, chiffons, organzas, cottons, denim, knits — most woven and some knitted fabrics. For unusual fabrics we always sample first.' },
              { q: 'Do you offer digitizing?', a: 'Yes. Our in-house digitizers convert hand-drawn or vector artwork into production-ready embroidery files with stitch-path optimization.' },
              { q: 'How do you price?', a: 'Pricing is a function of stitch count, sequin density, thread type, and fabric. Share your tech pack or a sample image and we will quote within 24 hours.' },
            ].map((item, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group card cursor-pointer"
              >
                <summary className="flex items-center justify-between list-none cursor-pointer">
                  <span className="font-display text-lg text-white pr-6">{item.q}</span>
                  <span className="w-8 h-8 rounded-full border border-gold-400/40 flex items-center justify-center text-gold-300 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-4 text-ink-200 text-sm leading-relaxed">{item.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section pt-0">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink-800 to-ink-700 border border-gold-400/20 p-10 lg:p-14 text-center">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gold-500/20 blur-3xl" />
            <div className="relative">
              <h3 className="sub-heading text-white">Ready to begin your collection?</h3>
              <p className="mt-4 text-ink-200 max-w-xl mx-auto">
                Share your tech pack or design reference — we'll come back with a quote and sample plan within 24 hours.
              </p>
              <Link to="/contact" className="btn-primary mt-8 text-sm">
                Start the Conversation <HiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </>
  )
}
