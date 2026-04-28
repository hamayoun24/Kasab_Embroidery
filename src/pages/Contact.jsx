import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import WhatsAppFloat from '../components/WhatsAppFloat'
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi2'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    // Replace with your backend endpoint or form service (Formspree, Getform, etc.)
    try {
      await new Promise((r) => setTimeout(r, 900))
      setStatus('success')
      setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Let's bring your next collection to life."
        description="Whether it's a single couture sample or a seasonal run across multiple styles — share your brief and we'll respond within 24 hours."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="section pt-0">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="card">
              <FaMapMarkerAlt className="text-2xl text-gold-400 mb-4" />
              <h4 className="font-display text-lg text-white mb-2">Factory & Head Office</h4>
              <p className="text-sm text-ink-200 leading-relaxed">
                Industrial Gajjumatta Area, Lahore<br />Punjab, Pakistan
              </p>
            </div>

            <div className="card">
              <FaPhoneAlt className="text-2xl text-gold-400 mb-4" />
              <h4 className="font-display text-lg text-white mb-2">Call Us</h4>
              <a href="tel:+923082225565" className="text-sm text-ink-200 hover:text-gold-300 block">+92 30 822 25565</a>
              <a href="tel:+923198406207" className="text-sm text-ink-200 hover:text-gold-300 block">+92 31 984 06207</a>
            </div>

            <a
              href="https://wa.me/923082225565"
              target="_blank"
              rel="noreferrer"
              className="card flex items-center gap-4 hover:border-gold-400/60 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] text-xl shrink-0">
                <FaWhatsapp />
              </div>
              <div className="flex-1">
                <h4 className="font-display text-lg text-white">WhatsApp</h4>
                <p className="text-sm text-ink-200">Fastest way to reach us</p>
              </div>
              <HiArrowRight className="text-gold-300 group-hover:translate-x-1 transition" />
            </a>

            <div className="card">
              <FaEnvelope className="text-2xl text-gold-400 mb-4" />
              <h4 className="font-display text-lg text-white mb-2">Email</h4>
              <a href="mailto:kasabemb94@gmail.com" className="text-sm text-ink-200 hover:text-gold-300 block">kasabemb94@gmail.com</a>
              {/* <a href="mailto:sales@kasabembroideries.com" className="text-sm text-ink-200 hover:text-gold-300 block">sales@kasabembroideries.com</a> */}
            </div>

            <div className="card">
              <FaClock className="text-2xl text-gold-400 mb-4" />
              <h4 className="font-display text-lg text-white mb-2">Working Hours</h4>
              <p className="text-sm text-ink-200 leading-relaxed">
                Mon — Sun : 9:00 AM – 12:00 AM<br />Production runs 24/7
              </p>
            </div>
          </motion.aside>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 card space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Input label="Full name *" name="name" value={form.name} onChange={handleChange} required />
              <Input label="Company" name="company" value={form.company} onChange={handleChange} />
              <Input label="Email *" name="email" type="email" value={form.email} onChange={handleChange} required />
              <Input label="Phone / WhatsApp" name="phone" value={form.phone} onChange={handleChange} />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-ink-200 mb-2">Service of interest</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full bg-ink-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-gold-400 focus:outline-none transition"
              >
                <option value="">Select a service</option>
                <option>Aari Embroidery</option>
                <option>Multi-Head Embroidery</option>
                <option>Single Sequence Embroidery</option>
                <option>Double Sequence</option>
                <option>Laser Embroidery</option>
                <option>Aari Sequence Embroidery</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-ink-200 mb-2">Your brief *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about your collection, quantities, timeline, or attach a design reference."
                className="w-full bg-ink-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-gold-400 focus:outline-none transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary w-full justify-center text-sm disabled:opacity-60"
            >
              {status === 'submitting' ? 'Sending…' : 'Send Enquiry'} <HiArrowRight />
            </button>

            {status === 'success' && (
              <div className="text-sm text-gold-300 text-center">
                Thank you — we've received your message and will respond within 24 hours.
              </div>
            )}
            {status === 'error' && (
              <div className="text-sm text-red-400 text-center">
                Something went wrong. Please try again or WhatsApp us directly.
              </div>
            )}
          </motion.form>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24">
        <div className="container-x">
          <div className="aspect-[16/7] rounded-3xl overflow-hidden border border-white/10">
            <iframe
              title="Kasab Embroideries location"
              src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.6) contrast(1.1) invert(0.88)' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </>
  )
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.25em] text-ink-200 mb-2">{label}</label>
      <input
        {...props}
        className="w-full bg-ink-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-gold-400 focus:outline-none transition"
      />
    </div>
  )
}
