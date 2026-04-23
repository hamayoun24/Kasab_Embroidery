import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFloat({ phone = '923000000000' }) {
  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-50 animate-ping" />
    </a>
  )
}
