export function Cases() {
  const cases = [
    {
      image: "https://imgv2-2-f.scribdassets.com/img/document/520829068/298x396/e053d412f8/1718114935?v=1",
      alt: "Caso de registro de marca 1",
    },
    {
      image: "https://imgv2-2-f.scribdassets.com/img/document/735494814/298x396/4da36eb183/1716495092?v=1",
      alt: "Caso de registro de marca 2",
    },
    {
      image: "https://imgv2-1-f.scribdassets.com/img/document/695368860/298x396/2fbcbede75/1710591243?v=1",
      alt: "Caso de registro de marca 3",
    },
  ]
  
  return (
    <section className="py-20 lg:py-25 bg-white">
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
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {cases.map((caseItem, index) => (
            <div 
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={caseItem.image}
                alt={caseItem.alt}
                className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}