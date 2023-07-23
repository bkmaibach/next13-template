import { Cormorant_SC } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import styles from "./desktop-nav-bar-content.module.css"
import { SignInButton } from "../buttons"

// TODO: Choose a font
const cormorantSc = Cormorant_SC({
  weight: "600",
  subsets: ["latin"],
})

export const DesktopNavBarContent = () => {
  return (
    <div className={`bg-brandprimary-900 w-full z-30 fixed text-brandtertiary-300 ${styles.desktopNavBarContent}`}>
      <div className="flex items-center justify-center py-4 px-24">
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
          <NavLink text="Home" url="/" />
          &nbsp;|&nbsp;
          <NavLink text="Projects" url="/projects" />
          &nbsp;|&nbsp;
          <NavLink text="Design" url="/design" />
          &nbsp;|&nbsp;
          <NavLink text="Maintenance" url="/maintenance" />
          &nbsp;|&nbsp;
          <NavLink text="Rentals" url="/rentals" />
          &nbsp;|&nbsp;
          {/* <NavLink text="Estimator" url="/estimator" />&nbsp;|&nbsp; */}
          <NavLink text="Contact Us" url="/contact" />

        </div>
          <SignInButton />
      </div>
    </div>
  )
}

interface INavLinkProps {
  text: string
  url: string
}

const NavLink = ({ text, url }: INavLinkProps) => {
  return (
    <Link
      className="text-sm font-medium uppercase mx-2 hover:text-brandprimary-500 tracking-widest transition duration-300"
      href={url}
    >
      {text}
    </Link>
  )
}
