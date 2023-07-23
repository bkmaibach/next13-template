"use client"

import { useParallax } from "react-scroll-parallax"
import Image from "next/image"
import styles from "./parallax-box.module.css"

import { Cormorant_SC } from "next/font/google"
import { Ref, useState } from "react"

// TODO: Choose font
const cormorantSc = Cormorant_SC({
  weight: "600",
  subsets: ["latin"],
})

interface IParallaxBoxProps {
  imageSrc: string
  text?: string
  startScroll: number
  endScroll: number
  yShiftClass: string
}

export const ParallaxBox = ({ imageSrc, text, startScroll, endScroll, yShiftClass }: IParallaxBoxProps) => {
  const { ref } = useParallax({
    speed: -15,
    startScroll,
    endScroll,
  })

  const imageRef = ref as Ref<HTMLImageElement | null>
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`${styles.parallaxBox}`}>
      <div className="relative h-full w-full">
        <Image
          alt="Parallax image"
          className={`${styles.parallaxImage} ${styles[yShiftClass]} ${isLoaded ? styles.loaded : ""}`}
          src={imageSrc}
          style={{ objectFit: "cover", position: "absolute" }}
          height={1920}
          width={1080}
          onLoad={() => setIsLoaded(true)}
          ref={imageRef}
        />
      </div>
      <div className={`${styles.parallaxOverlay} text-center`}>
        {text && <h1 className={`${cormorantSc.className} text-brandtertiary-100`}>{text}</h1>}
      </div>
    </div>
  )
}
