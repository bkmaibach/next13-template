"use client"

import { Cormorant_SC } from "next/font/google"
import styles from "./page.module.css"
import Image from "next/image"


const cormorantSc = Cormorant_SC({
  weight: "600",
  subsets: ["latin"],
})

export default function Contact() {
  return (
    <main className={`${styles.main} bg-brandprimary-200`}>
      <h1 className={`${cormorantSc.className} text-brandsecondary-600`}>Get in Touch</h1>
      <p><strong>We would be happy to connect with you</strong></p>
      <h3 className={`${cormorantSc.className} text-brandsecondary-600`}>Email:</h3>
      <a href="mailto:mightyoakslandscaping@protonmail.com">
        <p><strong>mightyoakslandscaping@protonmail.com</strong></p>
      </a>
      <h3 className={`${cormorantSc.className} text-brandsecondary-600`}>Phone:</h3>
      <p><strong>250 891 3762</strong></p>
    </main>
  )
}
