"use client"

import type React from "react"

import { useState } from "react"
import { registerStudent } from "@/lib/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string

    try {
      await registerStudent({ firstName, lastName, email })
      toast({
        title: "Inscription réussie !",
        description: "Tu recevras bientôt un email avec toutes les informations.",
      })
      ;(event.target as HTMLFormElement).reset()
    } catch (error) {
      toast({
        title: "Erreur lors de l'inscription",
        description: "Merci de réessayer ultérieurement.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="inscription" className="py-12 my-16">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#6971CA] mb-6 text-center">
            Prêt(e) à en savoir plus sur l&apos;alternance ?
          </h2>
          <p className="text-center text-gray-600 mb-8">Inscris-toi gratuitement à notre mini-formation de 3 jours</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom *</Label>
                <Input id="firstName" name="firstName" placeholder="Ton prénom" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom *</Label>
                <Input id="lastName" name="lastName" placeholder="Ton nom" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" placeholder="ton.email@exemple.com" required />
            </div>

            <Button
              type="submit"
              className="w-full py-6 bg-[#EB6D8C] hover:bg-[#d55c7a] text-white font-medium rounded-full transition-colors duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Inscription en cours..." : "Je m'inscris à l'accompagnement gratuit 🙋"}
            </Button>

            <p className="text-xs text-center text-gray-500 mt-4">
              En t&apos;inscrivant, tu acceptes de recevoir des informations sur notre mini-formation. Tes données
              personnelles ne seront jamais partagées avec des tiers.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
