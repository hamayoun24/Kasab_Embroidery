import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi2'
import { FaPlay } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background video + fallback image */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero/poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <img
          src="/images/hero/poster.jpg"
          alt=""
          onError={(e) => { e.currentTarget.style.display = 'none' }}
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-900/85 to-ink-900/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,135,30,0.15),transparent_60%)]" />
      </div>

      <div className="container-x relative z-10 grid lg:grid-cols-12 gap-12 items-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8"
        >
          <div className="eyebrow mb-6">Premium Embroidery Manufacturing</div>
          <h1 className="heading text-white">
            Where <span className="italic text-gold-300">Thread</span> Meets
            <br />
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              Timeless Artistry
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-ink-100 text-base md:text-lg leading-relaxed">
            Kasab Embroideries crafts intricate, couture-grade embroidery for the world's
            leading fashion brands. Powered by 28-head precision machinery and decades of
            master craftsmanship.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/services" className="btn-primary">
              Explore Our Services
              <HiArrowRight />
            </Link>
            <Link to="/gallery" className="btn-outline">
              <FaPlay className="text-xs" />
              See the Work
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-4 grid grid-cols-2 gap-4"
        >
          {[
            { k: '15+', v: 'Years crafting' },
            { k: '28', v: 'Heads running' },
            { k: '100K+', v: 'Pieces / month' },
            { k: '50+', v: 'Brand partners' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="glass rounded-2xl p-5"
            >
              <div className="font-display text-3xl text-gold-300">{s.k}</div>
              <div className="text-xs text-ink-200 uppercase tracking-widest mt-1">{s.v}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-200 text-xs tracking-[0.3em] uppercase flex flex-col items-center gap-2"
      >
        <span>Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-gold-400 to-transparent" />
      </motion.div>
    </section>
  )
}
