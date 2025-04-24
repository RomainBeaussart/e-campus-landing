export function HeroSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#6971CA] leading-tight mb-6">
            L&apos;alternance à distance, ça t&apos;intrigue ? Viens poser toutes tes questions.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Pendant 3 jours, on t&apos;accompagne gratuitement pour t&apos;aider à y voir clair. Pas de jargon, pas de
            stress. Juste toi, nous, et les réponses à tes questions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#inscription"
              className="px-6 py-3 bg-[#EB6D8C] hover:bg-[#d55c7a] text-white font-medium rounded-full transition-colors duration-300"
            >
              Je m&apos;inscris à l&apos;accompagnement gratuit 🙋
            </a>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px]">
          <div className="absolute top-0 right-0 w-[280px] h-[180px] bg-[#6971CA]/10 rounded-lg p-4 shadow-md">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#6971CA] flex items-center justify-center text-white">
                <span>👩‍🏫</span>
              </div>
              <div className="bg-[#6971CA]/20 p-3 rounded-lg rounded-tl-none">
                <p className="text-sm">Bonjour ! Tu as des questions sur l&apos;alternance ?</p>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-end">
              <div className="bg-[#EB6D8C]/20 p-3 rounded-lg rounded-tr-none">
                <p className="text-sm">Oui ! Comment ça fonctionne à distance ?</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#EB6D8C] flex items-center justify-center text-white">
                <span>👨‍🎓</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-[280px] h-[180px] bg-[#EB6D8C]/10 rounded-lg p-4 shadow-md">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#6971CA] flex items-center justify-center text-white">
                <span>👩‍🏫</span>
              </div>
              <div className="bg-[#6971CA]/20 p-3 rounded-lg rounded-tl-none">
                <p className="text-sm">On t&apos;explique tout pendant notre mini-formation gratuite !</p>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-end">
              <div className="bg-[#EB6D8C]/20 p-3 rounded-lg rounded-tr-none">
                <p className="text-sm">Super, je m&apos;inscris tout de suite !</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#EB6D8C] flex items-center justify-center text-white">
                <span>👨‍🎓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
