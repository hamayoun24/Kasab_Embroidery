import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description, center = false, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
      <h2 className={`sub-heading ${light ? 'text-white' : 'text-white'}`}>{title}</h2>
      {description && (
        <p className="mt-5 text-ink-200 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
