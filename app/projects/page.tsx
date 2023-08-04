"use client"

import { Cormorant_SC } from "next/font/google"
import styles from "./page.module.css"
import Image from "next/image"

export default function Projects() {
  return (
    <main className={`${styles.main} bg-brandprimary-100`}>
      <FullImageSection heading="Coming Soon" text="" imageSrc="/mightyoaks-1.webp" />
    </main>
  )
}

interface IFullImageSectionProps {
  heading: string
  text: string
  imageSrc: string
}

const cormorantSc = Cormorant_SC({
  weight: "600",
  subsets: ["latin"],
})


const FullImageSection = ({ heading, text, imageSrc}: IFullImageSectionProps) => (
  <div className="flex flex-col w-full py-10 justify-center align-center p-2 items-center bg-brandprimary-100">
    <Image alt="Project image" src={imageSrc} height="500" width="1000" style={{ objectFit: "contain" }}/>

    <h1 className={`${cormorantSc.className}`}>{heading}</h1>
    <p>{text}</p>
  </div>
)
