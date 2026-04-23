import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import WhatsAppFloat from '../components/WhatsAppFloat'
import { galleryItems, categories } from '../data/gallery'
import { FaPlay } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = filter === 'All'
    ? galleryItems
    : galleryItems.filter((i) => i.category === filter)

  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Fifteen years, stitched into a single gallery."
        description="A closer look at the machines, details, and finished pieces that come out of our facility every week."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Gallery' }]}
      />

      {/* Filters */}
      <section className="pt-0">
        <div className="container-x">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest transition ${
                  filter === c
                    ? 'bg-gold-400 text-ink-900'
                    : 'border border-white/10 text-ink-200 hover:border-gold-400/60 hover:text-gold-300'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                  className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl bg-ink-700"
                  onClick={() => setLightbox(item)}
                >
                  {item.type === 'video' ? (
                    <div className="relative aspect-[4/5]">
                      <img
                        src={item.poster}
                        alt={item.title}
                        onError={(e) => { e.currentTarget.style.display = 'none' }}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-ink-900/40 group-hover:bg-ink-900/20 transition">
                        <div className="w-16 h-16 rounded-full bg-gold-400 text-ink-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <FaPlay className="ml-1" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-gold-300">{item.category}</div>
                      <div className="font-display text-lg text-white mt-1">{item.title}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-ink-200">
              No pieces in this category yet — check back soon.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink-900/95 backdrop-blur-lg flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-gold-400 hover:text-ink-900 text-white flex items-center justify-center text-2xl transition"
              aria-label="Close"
            >
              <HiX />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {lightbox.type === 'video' ? (
                <video src={lightbox.src} controls autoPlay className="w-full rounded-2xl" />
              ) : (
                <img src={lightbox.src} alt={lightbox.title} className="w-full rounded-2xl" />
              )}
              <div className="mt-5 text-center">
                <div className="text-xs uppercase tracking-[0.3em] text-gold-300">{lightbox.category}</div>
                <div className="font-display text-2xl text-white mt-2">{lightbox.title}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <WhatsAppFloat />
    </>
  )
}
