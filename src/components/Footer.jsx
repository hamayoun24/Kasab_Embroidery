import { Link } from 'react-router-dom'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-ink-900">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-300 to-gold-600 flex items-center justify-center">
              <span className="font-display text-ink-900 font-bold">K</span>
            </div>
            <div>
              <div className="font-display text-lg text-white">KASAB</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold-400">Embroideries</div>
            </div>
          </div>
          <p className="text-ink-200 text-sm leading-relaxed">
            Premium embroidery manufacturing — crafting intricate designs for leading
            fashion brands with precision machinery and master artisans.
          </p>
        </div>

        <div>
          <h4 className="text-white text-sm uppercase tracking-widest mb-5">Explore</h4>
          <ul className="space-y-3 text-sm text-ink-200">
            <li><Link to="/" className="hover:text-gold-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold-300">About</Link></li>
            <li><Link to="/services" className="hover:text-gold-300">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-gold-300">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gold-300">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm uppercase tracking-widest mb-5">Services</h4>
          <ul className="space-y-3 text-sm text-ink-200">
            <li>Aari </li>
            <li>Multi-head </li>
            <li>Single Sequence </li>
            <li>Double Sequence</li>
            <li>Laser </li>
            <li>Aari Sequence </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm uppercase tracking-widest mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-ink-200">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-gold-400 mt-1 shrink-0" />
              <span>Lahore, Pakistan</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-gold-400" />
              <a href="tel:+923082225565" className="hover:text-gold-300">+92 30 822 25565</a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-gold-400" />
              <a href="mailto:info@kasabembroideries.com" className="hover:text-gold-300">kasabemb94@gmail.com</a>
            </li>
          </ul>
          {/* <div className="flex gap-3 mt-5">
            {[FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-ink-100 hover:bg-gold-400 hover:text-ink-900 hover:border-gold-400 transition"
              >
                <Icon />
              </a>
            ))}
          </div> */}
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-300">
          <p>© 2012 Kasab Embroideries. All rights reserved.</p>
          <p>Crafted with precision. Delivered with passion.</p>
        </div>
      </div>
    </footer>
  )
}
