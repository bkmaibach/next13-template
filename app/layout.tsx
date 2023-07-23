import "./globals.css"
import { NavBar } from "@/components/nav-bar/nav-bar"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import Loading from "./loading"
import AuthProvider from "./auth-provider"

export const metadata = {
  title: "Mighty Oaks",
  description: "Professional landscapers serving the greater Victoria area.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className="overflow-x-hidden bg-brandprimary-900">
          <Suspense fallback={<Loading />}>
            <NavBar />
            <div className="w-screen z-10 relative bg-brandprimary-200">
              <div className="container flex flex-col w-full m-auto mb-96 z-10 relative">{children}</div>
            </div>
            <Footer />
          </Suspense>
        </body>
      </html>
    </AuthProvider>
  )
}
