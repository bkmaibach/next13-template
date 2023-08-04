import { HalfImageSection } from "@/components/half-image-section"
import styles from "./page.module.css"

export default function Rentals() {
  return (
    <main className={`${styles.main} bg-brandprimary-100`}>
      <HalfImageSection heading="We also offer rental services" imageSrc="/mightyoaks-4.webp">
        <p>
          Details coming soon!
        </p>
      </HalfImageSection>
    </main>
  )
}
