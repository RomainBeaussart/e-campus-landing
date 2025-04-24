import { HeroSection } from "@/components/hero-section"
import { ProgramOverview } from "@/components/program-overview"
import { AdvisorSection } from "@/components/advisor-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { RegistrationForm } from "@/components/registration-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <HeroSection />
        <RegistrationForm />
        <ProgramOverview />
        <TestimonialSection />
        <AdvisorSection />
      </div>
    </main>
  )
}
