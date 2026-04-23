import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { HiArrowRight } from 'react-icons/hi2'
import { FaPlay } from 'react-icons/fa'

export default function Hero() {
  const [videoReady, setVideoReady] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Cinematic background video */}
      <div className="absolute inset-0">
        {/* Fallback image under the video (shows until video is ready) */}
        <img
          src="/images/image1y.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <motion.video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/image1y.jpeg"
          onCanPlay={() => setVideoReady(true)}
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{
            scale: videoReady ? 1 : 1.08,
            opacity: videoReady ? 1 : 0,
          }}
          transition={{
            opacity: { duration: 1.4, ease: 'easeOut' },
            scale: { duration: 18, ease: 'linear' },
          }}
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          style={{ filter: 'saturate(1.05) contrast(1.05) brightness(0.92)' }}
        >
          <source src="/videos/video3.mp4" type="video/mp4" />
        </motion.video>

        {/* Layered cinematic overlays for readability + depth */}
        {/* 1. Dark base gradient — left to right so text side is richer */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/90 via-ink-900/60 to-ink-900/30" />
        {/* 2. Bottom-up fade for scroll transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
        {/* 3. Warm gold highlight from top-right (brand accent) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(223,165,52,0.18),transparent_55%)]" />
        {/* 4. Vignette for cinematic framing */}
        <div className="absolute inset-0 shadow-[inset_0_0_200px_60px_rgba(10,9,11,0.9)] pointer-events-none" />
        {/* 5. Subtle film grain */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />
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
            leading fashion brands and decades of
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
            // { k: '28', v: 'Heads running' },
            // { k: '100K+', v: 'Pieces / month' },
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
