import { prisma } from "@/lib/prisma"
import styles from "./page.module.css"

export default async function Users() {

  const users = await prisma.user.findMany()

  return (
    <main className={`${styles.main} bg-brandprimary-100`}>
      {/* {users.map((u) => {
        return <p>{u.id}</p>
      })} */}
    </main>
  )
}