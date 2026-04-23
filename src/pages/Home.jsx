import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import ClientsMarquee from '../components/ClientsMarquee'
import WhatsAppFloat from '../components/WhatsAppFloat'
import { services, stats } from '../data/services'
import { HiArrowRight } from 'react-icons/hi2'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Clients marquee */}
      <section className="py-12 border-y border-white/5 bg-ink-800/40">
        <div className="container-x">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-ink-300 mb-8">
            Trusted by leading fashion houses
          </p>
          <ClientsMarquee />
        </div>
      </section>

      {/* About teaser */}
      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-ink-700 relative">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/images/about/factory-1.jpg"
                className="w-full h-full object-cover"
              >
                <source src="/videos/video1.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent pointer-events-none" />
            </div>
            <div className="absolute -bottom-8 -right-4 lg:-right-10 w-52 h-52 rounded-3xl overflow-hidden border-8 border-ink-900 shadow-soft hidden md:block">
              <img
                src="/images/image1y.jpeg"
                alt="Detail work"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div>
            <div className="eyebrow mb-4">Our Atelier</div>
            <h2 className="heading text-white">
              Craftsmanship, scaled <span className="italic text-gold-300">without compromise</span>.
            </h2>
            <p className="mt-6 text-ink-200 leading-relaxed">
              For over 15 years, Kasab has stood at the intersection of heritage craft
              and modern manufacturing. From a single head to a 28-head machine — from
              hand-guided Aari to high-density sequin — every piece that leaves our
              floor carries the same obsessive attention to detail.
            </p>
            <p className="mt-4 text-ink-200 leading-relaxed">
              We partner with the most discerning labels in South Asia and beyond to
              turn design intent into finished, production-ready embellishment.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-gold-400 pl-4">
                  <div className="font-display text-3xl text-white">{s.value}</div>
                  <div className="text-xs text-ink-200 uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-primary mt-10 text-sm">
              More about us <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-gradient-to-b from-ink-900 via-ink-800/30 to-ink-900">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <SectionHeading
              eyebrow="Services & Machinery"
              title="Every stitch, engineered for excellence"
              description="From traditional Aari craftsmanship to large-format 28-head production, we bring a complete embroidery capability under one roof."
            />
            <Link to="/services" className="btn-outline shrink-0 text-sm">
              View all services <HiArrowRight />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.slice(0, 6).map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process slider */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Process"
            title="From concept to couture, seamlessly"
            description="A transparent, collaborative workflow that keeps you in control from the first sketch to the final stitch."
            center
          />

          <div className="mt-16">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3500 }}
              pagination={{ clickable: true }}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {[
                { step: '01', title: 'Brief & Design', desc: 'We absorb your vision, swatches, and technical requirements.' },
                { step: '02', title: 'Digitize & Sample', desc: 'Our digitizers convert artwork into production-ready files and sample.' },
                { step: '03', title: 'Production', desc: 'Precision machinery and master artisans execute at volume.' },
                { step: '04', title: 'QC & Dispatch', desc: 'Rigorous quality control, packed and shipped to your warehouse.' },
              ].map((p) => (
                <SwiperSlide key={p.step}>
                  <div className="card h-full">
                    <div className="font-display text-5xl text-gold-400/40 mb-4">{p.step}</div>
                    <h4 className="font-display text-xl text-white mb-3">{p.title}</h4>
                    <p className="text-sm text-ink-200 leading-relaxed">{p.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gold-500 via-gold-600 to-gold-800 p-10 lg:p-16">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gold-300/30 blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-ink-900/70 text-xs uppercase tracking-[0.3em] mb-4">Let's Create</div>
                <h3 className="font-display text-3xl md:text-5xl text-ink-900 leading-tight">
                  Bring your embroidery vision to life.
                </h3>
                <p className="mt-4 text-ink-900/80 max-w-lg">
                  Tell us about your collection — we'll respond within 24 hours with a
                  tailored quote and sample timeline.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link to="/contact" className="btn bg-ink-900 text-white hover:bg-ink-800">
                  Request a Quote <HiArrowRight />
                </Link>
                <a href="https://wa.me/923000000000" target="_blank" rel="noreferrer" className="btn border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-white">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </>
  )
}
