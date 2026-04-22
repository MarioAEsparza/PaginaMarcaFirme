import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 bg-brand-dark border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-512-CFQRB65qULMyjExUTQoV1zzs4aacbJ.png"
              alt="MarcaFirme USA"
              className="h-8 w-8"
            />
            <span className="text-white/50 text-sm">
              © 2026 MarcaFirme USA. Todos los derechos reservados.
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link 
              href="#" 
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Política de privacidad
            </Link>
            <Link 
              href="#" 
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
