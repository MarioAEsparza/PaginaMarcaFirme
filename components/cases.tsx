export function Cases() {
  const cases = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case-1-Ms6hK02nwXIW0vaqVDdk84tmkxrkC6.png",
      alt: "Caso de registro de marca 1",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case-2-th0FDM2dpIMIPWvnU9qOzmnWVVxbkv.png",
      alt: "Caso de registro de marca 2",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case-3-cCKlRDed1BwPsLVt2FHeLQuzyxvdzO.png",
      alt: "Caso de registro de marca 3",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-(family-name:--font-poppins) text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Documentos claros y ordenados
          </h2>
          <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
            Cada trámite queda documentado para tu tranquilidad
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cases.map((caseItem, index) => (
            <div 
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={caseItem.image}
                alt={caseItem.alt}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
