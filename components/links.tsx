"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"

interface INavLinkProps {
  href?: string
  onClick?: () => any
  children?: React.ReactNode
}

export const NavLink = ({ children, href, onClick }: INavLinkProps) => {
  return (
    <Link
      className="text-sm font-medium uppercase mx-2 hover:text-brandprimary-500 tracking-widest transition duration-300"
      href={href!}
      onClick={onClick ? onClick : undefined}
    >
      {children}
    </Link>
  )
}

export function SignInLink() {
  return <NavLink onClick={() => signIn()} href={"#"}>SIGN IN</NavLink>
}

export function SignOutLink() {
  return <NavLink onClick={() => signOut()} href={"#"}>SIGN OUT</NavLink>
}

export function SignInOutLink() {
  const { data: session, status } = useSession()

  if (status === "loading") return <>...</>
  if (status === "authenticated") return <div className="flex"> <Image className="mx-4" src={session.user?.image ?? "/avatar-placeholder.svg"} height={32} width={32} alt={"Your Name"} /> <SignOutLink /></div>
  return <SignInLink />
}

