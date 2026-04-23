import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowUpRight } from 'react-icons/hi2'

export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group card overflow-hidden relative"
    >
      <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-ink-700 relative">
        <img
          src={service.image}
          alt={service.title}
          onError={(e) => { e.currentTarget.style.display = 'none' }}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
        <div className="absolute top-4 left-4 text-xs uppercase tracking-[0.25em] text-gold-300 bg-ink-900/60 px-3 py-1.5 rounded-full border border-gold-400/30">
          {service.short}
        </div>
      </div>

      <h3 className="font-display text-2xl text-white mb-3 group-hover:text-gold-300 transition-colors">
        {service.title}
      </h3>
      <p className="text-ink-200 text-sm leading-relaxed mb-5">{service.description}</p>

      <ul className="space-y-2 mb-6">
        {service.highlights.map((h) => (
          <li key={h} className="text-xs text-ink-100 flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-gold-400" />
            {h}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className="inline-flex items-center gap-2 text-sm text-gold-300 hover:text-gold-200 group/link"
      >
        Enquire about this service
        <HiArrowUpRight className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
      </Link>
    </motion.article>
  )
}
