import { Cormorant_SC } from "next/font/google"
import Image from "next/image"
import { Spinner } from "../spinner"
import styles from "./nav-bar-placeholder.module.css"

// TODO: Choose a font
const cormorantSc = Cormorant_SC({
  weight: "600",
  subsets: ["latin"],
})

export const NavBarPlaceholder = () => {
  return (
    <nav className={`bg-brandprimary-900 z-30 w-full fixed ${styles.navBarPlaceholder}`}>
      <div className="flex items-center justify-center py-4 px-24">
        <Spinner />
        <div className="grow flex justify-center">
          <Image alt="company logo" src="/logo-transparent.png" width="133" height="133" />
        </div>
        <Spinner />
      </div>
    </nav>
  )
}
