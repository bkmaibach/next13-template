"use client"

import styles from "./page.module.css"
import { HalfImageSection } from "@/components/half-image-section"

export default function Maintenace() {
  return (
    <main className={`${styles.main} bg-brandprimary-200`}>
      <HalfImageSection heading="Our Maintenance Services Include" imageSrc="/mightyoaks-1.webp">
        <ul>
          <li>Lawn Care (e.g. mowing, edging, fertilization, etc.)</li>
          <li>Pruning and Trimming</li>
          <li>Weed Control</li>
          <li>Seasonal Clean-up</li>
          <li>Mulching and Soil Conditioning</li>
          <li>Lawn Over-seeding, aeration and dethatching.</li>
        </ul>
        <p>
          Our team of skilled professionals possesses an exceptional expertise in landscape maintenance, ensuring that
          every garden, lawn, and pathway receives the utmost care and attention.
        </p>
      </HalfImageSection>
    </main>
  )
}
