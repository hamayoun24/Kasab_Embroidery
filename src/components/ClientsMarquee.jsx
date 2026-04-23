import { clients } from '../data/services'

export default function ClientsMarquee() {
  const doubled = [...clients, ...clients]
  return (
    <div className="overflow-hidden marquee-mask">
      <div className="flex gap-16 animate-marquee items-center whitespace-nowrap">
        {doubled.map((c, i) => (
          <div key={i} className="shrink-0 h-16 w-40 flex items-center justify-center opacity-70 hover:opacity-100 transition">
            <img
              src={c.logo}
              alt={c.name}
              onError={(e) => {
                e.currentTarget.outerHTML = `<span class="font-display text-xl text-ink-100 tracking-wider">${c.name}</span>`
              }}
              className="max-h-12 max-w-full object-contain filter invert brightness-200 grayscale"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
