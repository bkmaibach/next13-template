"use client"

import { Cormorant_SC } from "next/font/google"
import Image from "next/image"
import { useState } from "react"
import { HeadlessSlideOver } from "./headless-slide-over"
import { GiHamburgerMenu } from "react-icons/gi"
import Link from "next/link"
import styles from "./mobile-nav-bar-content.module.css"

const cormorantSc = Cormorant_SC({
  weight: "600",
  subsets: ["latin"],
})

export const MobileNavBarContent = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  return (
    <nav className={`bg-brandprimary-900 sticky top-0 fixed z-30 ${styles.mobileNavBarContent}`}>
      <div className="flex items-center justify-between py-4 px-8 md:px-24">
        <Link href="/">
          <Image alt="company logo" src="/logo-transparent.png" width="77" height="77" />
        </Link>

        <div>
          <button
            aria-label="Open panel"
            className="border-brandsecondary-800"
            onClick={(e) => {
              setSideBarOpen((current) => !current)
            }}
          >
            <GiHamburgerMenu className="border-brandsecondary-700 text-brandsecondary-800" size={24} />
          </button>
          <HeadlessSlideOver open={sideBarOpen} setOpen={setSideBarOpen}>
            <div className="flex flex-col">
              <MobileNavLink text="Home" url="/" onClick={() => setSideBarOpen(false)} />
              <MobileNavLink text="Projects" url="/projects" onClick={() => setSideBarOpen(false)} />
              <MobileNavLink text="Design" url="/design" onClick={() => setSideBarOpen(false)} />
              <MobileNavLink text="Maintenance" url="/maintenance" onClick={() => setSideBarOpen(false)} />
              <MobileNavLink text="Rentals" url="/rentals" onClick={() => setSideBarOpen(false)} />
              {/* <MobileNavLink text="Estimator" url="/estimator" onClick={() => setSideBarOpen(false)} /> */}
              {/* <MobileNavLink text="About Us" url="/about" onClick={() => setSideBarOpen(false)} /> */}
              <MobileNavLink text="Contact Us" url="/contact" onClick={() => setSideBarOpen(false)} />
            </div>
          </HeadlessSlideOver>
        </div>
      </div>
    </nav>
  )
}

interface IMobileNavLinkProps {
  text: string
  url: string
  onClick?: any
}

const MobileNavLink = ({ text, url, onClick }: IMobileNavLinkProps) => {
  return (
    <Link
      onClick={onClick}
      className="text-lg font-medium uppercase mx-2 hover:text-brandprimary-500 tracking-widest transition duration-300 mt-6"
      href={url}
    >
      {text}
    </Link>
  )
}
