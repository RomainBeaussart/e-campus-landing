export function AdvisorSection() {
  return (
    <section className="py-12 my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=160&width=160"
                alt="Conseiller eCampusLive"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden mt-8">
              <img
                src="/placeholder.svg?height=160&width=160"
                alt="Conseillère eCampusLive"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=160&width=160"
                alt="Conseiller eCampusLive"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden mt-8">
              <img
                src="/placeholder.svg?height=160&width=160"
                alt="Conseillère eCampusLive"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl md:text-3xl font-bold text-[#6971CA] mb-6">
            Un accompagnement humain et bienveillant
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Notre équipe est là pour te guider pas à pas, même si tu pars de zéro.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Chez eCampusLive, nous croyons que l&apos;apprentissage à distance ne doit pas être synonyme de solitude.
            C&apos;est pourquoi nos conseillers sont disponibles pour répondre à toutes tes questions et
            t&apos;accompagner dans ton parcours.
          </p>
          <div className="flex items-center gap-3 text-[#EB6D8C]">
            <span className="text-2xl">👋</span>
            <p className="font-medium">Pas de stress, on est là pour toi !</p>
          </div>
        </div>
      </div>
    </section>
  )
}
