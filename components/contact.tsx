import { MessageCircle, Mail, Clock, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"

const CONTACT_INFO = [
  { icon: MessageCircle, label: "WhatsApp", value: "+1 (555) 012-7842", href: "https://wa.me/15550127842", cta: "Escríbenos" },
  { icon: Mail, label: "Correo", value: "hola@marcafirmeusa.com", href: "mailto:hola@marcafirmeusa.com", cta: "Enviar correo" },
  { icon: Clock, label: "Horario", value: "Lun a Vie: 9:00 AM – 6:00 PM (ET)", href: "https://pagina-marca-firme.vercel.app/#contacto", cta: ""},
  { icon: MapPin, label: "Dirección", value: "1200 Brickell Ave, Suite 900, Miami, FL 33131", href: "https://maps.google.com/?q=1200+Brickell+Ave+Suite+900+Miami+FL+33131", cta: "Ver mapa" },
]

const ICON_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-512-CFQRB65qULMyjExUTQoV1zzs4aacbJ.png"

export function Contact() {
  return (
    <section id="contacto" className="py-20 lg:py-20 bg-[#0C1937]">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Contacto</h2>
          <p className="text-white/70 text-lg">Estamos aquí para ayudarte</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CONTACT_INFO.map((item) => {
            const isClickable = !!item.href
            const Card = (
              <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center h-full transition-all duration-300 ${isClickable ? "hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-[#29D3D3]/10 cursor-pointer group" : ""}`}>
                <div className={`w-12 h-12 rounded-full bg-[#29D3D3]/20 flex items-center justify-center mx-auto mb-4 transition-colors ${isClickable ? "group-hover:bg-[#29D3D3]/40" : ""}`}>
                  <item.icon className="h-6 w-6 text-[#29D3D3]" />
                </div>
                <p className="text-white/50 text-sm mb-1">{item.label}</p>
                <p className="text-white font-medium text-sm leading-relaxed mb-3">{item.value}</p>
                {item.cta && (
                  <span className="inline-flex items-center gap-1.5 text-[#29D3D3] text-sm font-medium group-hover:underline">
                    {item.cta}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                )}
              </div>
            )
            return item.href ? (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block">{Card}</a>
            ) : (
              <div key={item.label}>{Card}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
