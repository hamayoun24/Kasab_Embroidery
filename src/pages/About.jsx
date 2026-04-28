import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import ClientsMarquee from '../components/ClientsMarquee'
import WhatsAppFloat from '../components/WhatsAppFloat'
import { stats } from '../data/services'
import { HiArrowRight } from 'react-icons/hi2'
import { FaAward, FaCogs, FaHandSparkles, FaLeaf } from 'react-icons/fa'

const values = [
  { icon: FaAward, title: 'Heritage Craft', desc: 'Generations of master embroiderers passing technique to apprentice — the human touch behind every stitch.' },
  { icon: FaCogs, title: 'Precision Machinery', desc: 'Modern 28-head, sequin, and double-sequin systems tuned for high-density, high-accuracy output.' },
  { icon: FaHandSparkles, title: 'Couture Finish', desc: 'Every piece passes through rigorous QC — because our clients\' labels deserve nothing less.' },
  { icon: FaLeaf, title: 'Responsible Production', desc: 'Fair working conditions, ethical sourcing of threads and beads, minimal waste workflows.' },
]

const leadership = [
  { name: 'Hafiz Ali Mushtaq', role: 'Chief Executive Officer', initials: 'HA' },
  { name: 'Ahsan Mushtaq', role: 'Chief Technology Officer', initials: 'AM' },
  { name: 'Zeeshan Mushtaq', role: 'Chief Operating Officer', initials: 'ZM' },
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Kasab"
        title="A house built on thread, time, and trust."
        description="Kasab Embroideries began as a small atelier in Lahore and has grown into one of South Asia's most trusted embroidery manufacturers — serving the region's leading fashion houses without losing the craft that started it all."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      {/* Story */}
      <section className="section pt-0">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-ink-700 relative">
              <img
                src="/images/image1y.jpeg"
                alt="Kasab atelier"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
            </div>
          </motion.div>

          <div>
            <div className="eyebrow mb-4">Our Story</div>
            <h2 className="sub-heading text-white">Built stitch by stitch, over fifteen years.</h2>
            <div className="mt-6 space-y-5 text-ink-200 leading-relaxed">
  <p>
    From a single machine to a fully equipped production setup, we have grown into a
    reliable embroidery service provider with advanced multi-head and sequence machines
    operating around the clock.
  </p>
  <p>
    We specialize in embroidery on client-supplied fabrics. Whether it's cloth or
    custom material, our team transforms it into high-quality embroidered products using
    Aari and modern machine techniques.
  </p>
  <p>
    With a strong focus on craftsmanship, consistency, and on-time delivery, we serve
    fashion brands, manufacturers, and businesses looking for dependable embroidery
    solutions.
  </p>
</div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-gold-400 pl-4">
                  <div className="font-display text-3xl text-white">{s.value}</div>
                  <div className="text-xs text-ink-200 uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-ink-800/30 border-y border-white/5">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we stand for"
            title="The principles behind every piece"
            description="These four ideas are non-negotiable. They shape hiring, machinery choices, sampling standards, and the way we treat every partner."
            center
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card"
              >
                <v.icon className="text-3xl text-gold-400 mb-5" />
                <h4 className="font-display text-xl text-white mb-3">{v.title}</h4>
                <p className="text-sm text-ink-200 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="eyebrow mb-4">Capabilities</div>
            <h2 className="sub-heading text-white">Scale when you need it. Nuance when you don't.</h2>
            <p className="mt-6 text-ink-200 leading-relaxed">
              Our facility can absorb seasonal peaks — a full retail collection, thousands
              of units per style — while still dedicating a dedicated floor to single-piece
              couture and bridal sampling. You get consistency at volume and care at detail.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'High production capacity with multi-head embroidery machines running 24/7',
                'Sampling turnaround: 48-72 hours on standard artwork',
                'Expert handling of all fabric types including cotton, silk, chiffon, organza, denim, and knitwear',
                'In-house digitizing, color matching, and QC teams',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink-100">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
            <Link to="/services" className="btn-primary mt-10 text-sm">
              See our services <HiArrowRight />
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 grid grid-cols-2 gap-4"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-ink-700">
              <img src="/images/laser.jpeg" alt="" onError={(e) => { e.currentTarget.style.display = 'none' }} className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-ink-700 mt-8">
              <img src="/images/sequence.jpeg" alt="" onError={(e) => { e.currentTarget.style.display = 'none' }} className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-ink-700">
              <img src="/images/image1y.jpeg" alt="" onError={(e) => { e.currentTarget.style.display = 'none' }} className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-ink-700 mt-8">
              <img src="/images/single.jpeg" alt="" onError={(e) => { e.currentTarget.style.display = 'none' }} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section bg-ink-800/30 border-y border-white/5">
        <div className="container-x">
          <SectionHeading
            eyebrow="Leadership"
            title="The people steering the house"
            description="A family-led team combining executive vision, technical depth, and operational rigor."
            center
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {leadership.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card text-center"
              >
                <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-400/5 border border-gold-400/30 flex items-center justify-center mb-5">
                  <span className="font-display text-2xl text-gold-400">{person.initials}</span>
                </div>
                <h4 className="font-display text-xl text-white mb-2">{person.name}</h4>
                <div className="text-xs text-gold-400 uppercase tracking-widest">{person.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 bg-ink-800/30 border-y border-white/5">
        <div className="container-x">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-ink-300 mb-8">
            Proud to partner with
          </p>
          <ClientsMarquee />
        </div>
      </section>

      <WhatsAppFloat />
    </>
  )
}
