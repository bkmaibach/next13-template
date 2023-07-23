"use client"

import { ReactNode } from "react"
import { SessionProvider } from "next-auth/react"

interface IAuthProviderProps {
  children: ReactNode
}

export default function AuthProvider({ children }: IAuthProviderProps) {
  return <SessionProvider>{children}</SessionProvider>
}
