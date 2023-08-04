import Image from "next/image"
import { Cormorant_SC } from "next/font/google"
import { CallToActionButton } from "./call-to-action-button"

interface IHalfImageSectionProps {
  heading: string
  imageSrc: string
  children: React.ReactNode
}

const cormorantSc = Cormorant_SC({
  weight: "600",
  subsets: ["latin"],
})


export const HalfImageSection = ({ heading, children, imageSrc }: IHalfImageSectionProps) => (
  <div className="flex flex-col lg:flex-row w-full h-full py-10 justify-center align-center p-2 items-center bg-brandprimary-100">
    <Image
      alt="Project image"
      src={imageSrc}
      height="500"
      width="500"
      style={{ objectFit: "contain", marginBottom: "24px" }}
    />
    <div className="flex flex-col ml-10 align-center">
      <h1 className={`${cormorantSc.className} text-brandsecondary-600`}>{heading}</h1>
      {children}
      <div className="flex flex-row justify-center">
        <CallToActionButton url="/contact">Get in Touch</CallToActionButton>
      </div>
    </div>
  </div>
)
