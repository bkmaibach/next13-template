"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"

export function SignInButton() {
  const { data: session, status } = useSession()

  if (status === "loading") return <>...</>
  if (status === "authenticated")
    return (
      <Link href="/dashboard">
        <Image src={session.user?.image ?? "/avatar-placeholder.svg"} height={32} width={32} alt={"Your Name"} />
      </Link>
    )
  return <button onClick={() => signIn()}>Sign In</button>
}

export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign Out</button>
}

