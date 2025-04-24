import { Calendar, MessageCircle, Compass } from "lucide-react"

export function ProgramOverview() {
  return (
    <section className="py-12 bg-[#6971CA]/5 rounded-3xl px-6 my-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#6971CA] mb-4">
          3 jours pour tout comprendre sur l&apos;alternance
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Un programme simple et efficace pour t&apos;aider à déterminer si l&apos;alternance à distance est faite pour
          toi
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="w-12 h-12 bg-[#6971CA] rounded-full flex items-center justify-center text-white mb-4">
            <Calendar className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-[#6971CA]">Jour 1</h3>
          <p className="text-gray-700">Découvre comment fonctionne l&apos;alternance chez eCampusLive</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="w-12 h-12 bg-[#EB6D8C] rounded-full flex items-center justify-center text-white mb-4">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-[#EB6D8C]">Jour 2</h3>
          <p className="text-gray-700">Pose toutes tes questions à notre équipe (via chat ou visio)</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="w-12 h-12 bg-[#6971CA] rounded-full flex items-center justify-center text-white mb-4">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-[#6971CA]">Jour 3</h3>
          <p className="text-gray-700">On t&apos;aide à imaginer ton parcours personnalisé</p>
        </div>
      </div>
    </section>
  )
}
