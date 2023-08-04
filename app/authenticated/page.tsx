import { Cormorant_SC } from "next/font/google"
import styles from "./page.module.css"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"


const cormorantSc = Cormorant_SC({
  weight: "600",
  subsets: ["latin"],
})

export default async function Authenticated() {

  const session = await getServerSession()

  if (!session) redirect("/api/auth/signin")

  return (
    <main className={`${styles.main} bg-brandprimary-100`}>
      <h1 className={`${cormorantSc.className} text-brandsecondary-600`}>You are authenticated!</h1>
    </main>
  )
}
