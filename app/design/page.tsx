import { HalfImageSection } from "@/components/half-image-section"
import styles from "./page.module.css"

export default function Design() {
  return (
    <main className={`${styles.main} bg-brandprimary-100`}>
      <HalfImageSection heading="Our Design services include..." imageSrc="/mightyoaks-3.webp">
        <ul>
          <li>Site Analysis and Assessment</li>
          <li>Conceptual Design</li>
          <li>Plant Selection and Placement</li>
          <li>Landscape Installation</li>
        </ul>
        <p>
          We have the knowledge and experience to bring your landscape design to life. We use only the highest-quality
          materials and employ best practices to ensure that your new outdoor space is not only beautiful, but also
          functional and long-lasting.
        </p>
      </HalfImageSection>
    </main>
  )
}
