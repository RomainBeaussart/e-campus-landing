"use server"

interface StudentData {
  firstName: string
  lastName: string
  email: string
}

export async function registerStudent(data: StudentData) {
  // Validation des données
  if (!data.firstName || !data.lastName || !data.email) {
    throw new Error("Tous les champs sont obligatoires")
  }

  // Vérification basique du format email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    throw new Error("Format d'email invalide")
  }

  // Simulation d'un délai d'envoi
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Ici, vous intégreriez votre logique d'enregistrement réelle
  // Par exemple, envoyer les données à une API, les stocker dans une base de données, etc.
  console.log("Inscription d'un nouvel étudiant:", data)

  // Simulation de succès
  return { success: true }
}
