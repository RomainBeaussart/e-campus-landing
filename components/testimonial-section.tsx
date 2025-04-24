import { Quote } from "lucide-react"

export function TestimonialSection() {
  return (
    <section className="py-12 my-16 bg-[#EB6D8C]/5 rounded-3xl px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EB6D8C] mb-4">
            Ils ont participé à notre mini-formation
          </h2>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm relative">
          <div className="absolute -top-5 left-8 text-[#EB6D8C]">
            <Quote className="w-10 h-10" />
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
              <img
                src="/placeholder.svg?height=80&width=80"
                alt="Témoignage étudiant"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 italic mb-4">
                "Avant, j&apos;hésitais beaucoup... mais l&apos;équipe m&apos;a tout expliqué. Je me suis senti soutenu
                dès le premier appel. Maintenant je suis en alternance depuis 6 mois et je ne regrette pas mon choix !"
              </p>
              <div>
                <p className="font-semibold text-[#6971CA]">Thomas D.</p>
                <p className="text-sm text-gray-500">Étudiant en BTS Commerce, promotion 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
