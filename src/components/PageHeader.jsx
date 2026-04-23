import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function PageHeader({ eyebrow, title, description, breadcrumbs = [] }) {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,135,30,0.18),transparent_60%)]" />
      <div className="container-x relative">
        {breadcrumbs.length > 0 && (
          <nav className="text-xs uppercase tracking-[0.25em] text-ink-300 mb-6">
            {breadcrumbs.map((b, i) => (
              <span key={b.to || b.label}>
                {b.to ? <Link to={b.to} className="hover:text-gold-300">{b.label}</Link> : <span className="text-gold-300">{b.label}</span>}
                {i < breadcrumbs.length - 1 && <span className="mx-3 text-ink-500">/</span>}
              </span>
            ))}
          </nav>
        )}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
          <h1 className="heading text-white">{title}</h1>
          {description && <p className="mt-6 text-ink-200 text-lg leading-relaxed">{description}</p>}
        </motion.div>
      </div>
    </section>
  )
}
