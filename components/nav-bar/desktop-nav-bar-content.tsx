import { Cormorant_SC } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import styles from "./desktop-nav-bar-content.module.css"
import { SignInButton, SignInOutButton } from "../buttons"
import { NavLink, SignInOutLink } from "../links"

// TODO: Choose a font
const cormorantSc = Cormorant_SC({
  weight: "600",
  subsets: ["latin"],
})

export const DesktopNavBarContent = () => {
  return (
    <div className={`bg-brandprimary-900 w-full z-30 fixed text-brandtertiary-300 ${styles.desktopNavBarContent}`}>
      <div className="flex items-center justify-center py-4 pl-24 pr-4">
        <div className="w-1/3 flex justify-start">
          <a href="/">
            <h2 className={`${cormorantSc.className} mb-0`}>Mighty Oaks Landscaping Professionals</h2>
          </a>
        </div>
        <div className="grow flex justify-center">
          <a href="/">
            <Image alt="company logo" src="/logo-transparent.png" width="133" height="133" />
          </a>
        </div>

        <div className="w-1/3 flex justify-end flex-wrap">
          <NavLink href="/">Home</NavLink>
          &nbsp;|&nbsp;
          <NavLink href="/projects">Projects</NavLink>
          &nbsp;|&nbsp;
          <NavLink href="/design">Design</NavLink>
          &nbsp;|&nbsp;
          <NavLink href="/maintenance">Maintenance</NavLink>
          &nbsp;|&nbsp;
          <NavLink href="/rentals">Rentals</NavLink>
          &nbsp;|&nbsp;
          {/* <NavLink text="Estimator" href="/estimator" />&nbsp;|&nbsp; */}
          <NavLink href="/contact">Contact Us</NavLink>
        </div>
        <div className="w-1/8 pl-2 flex justify-end">
          <SignInOutButton />
        </div>
      </div>
    </div>
  )
}
