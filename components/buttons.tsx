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
        <Image
          className="mx-2"
          src={session.user?.image ?? "/avatar-placeholder.svg"}
          height={32}
          width={32}
          alt={"You"}
        />
      </Link>
    )
  return <button className="p-2 border-brandtertiary-300 hover:bg-brandtertiary-100 hover:text-brandsecondary-600 tracking-widest transition duration-300" onClick={() => signIn()}>Sign In</button>
}

export function SignOutButton() {
  return <button className="p-2 border-brandtertiary-300 hover:bg-brandtertiary-100 hover:text-brandsecondary-600 tracking-widest transition duration-300" onClick={() => signOut()}>Sign Out</button>
}

interface ISignInoutButtonProps {
  className?: string
}

export function SignInOutButton({className}: ISignInoutButtonProps) {
  const { data: session, status } = useSession()

  if (status === "loading") return <>...</>
  if (status === "authenticated")
    return (
      <div className={`flex items-center ${className}`}>
        {" "}
        <Image
          className="mx-2"
          src={session.user?.image ?? "/avatar-placeholder.svg"}
          height={32}
          width={32}
          alt={"Your Name"}
        />{" "}
        <SignOutButton />
      </div>
    )
  return <div className={className}>
    <SignInButton />
  </div>
  
}
