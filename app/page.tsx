"use client"

import { Cormorant_SC } from "next/font/google"
import styles from "./page.module.css"
import { ParallaxProvider } from "react-scroll-parallax"
import { ParallaxBox } from "@/components/parallax-box/parallax-box"
import { CallToActionButton } from "@/components/call-to-action-button"

export default function Home() {
  return (
    <main className={`${styles.main} bg-brandprimary-200`}>
      <ParallaxProvider>
        <ParallaxBox
          text="Mighty Oaks Landscaping"
          imageSrc="/parallax1.webp"
          yShiftClass="yShift1"
          startScroll={0}
          endScroll={1400}
        />
        <HomeBlurbSection
          heading="At Mightyoaks Landscaping..."
          url="/projects"
          text="we offer a wide range of landscaping services to help you create and maintain the perfect outdoor space. We are dedicated to providing high-quality workmanship and exceptional customer service, no matter the size or complexity of the project."
          buttonText="See Our Work"
        />
        <ParallaxBox
          text="Serving the Greater Victoria Area"
          imageSrc="/parallax2.webp"
          yShiftClass="yShift2"
          startScroll={0}
          endScroll={1400}
        />
        <HomeBlurbSection
          heading="We Specialize in Designing Custom Landscapes..."
          url="/design"
          text="that are tailored to meet the unique needs and preferences of each of our clients. From conceptualization to implementation, we work closely with you to create a stunning outdoor space that reflects your personal style and enhances the natural beauty of your property."
          buttonText="Design Services"
        />
        <ParallaxBox
          text="Locally Owned"
          imageSrc="/parallax3.webp"
          yShiftClass="yShift3"
          startScroll={600}
          endScroll={2000}
        />
        <HomeBlurbSection
          heading="Comprehensive Maintenance Services"
          url="/maintenance"
          text="We believe that landscaping is an ongoing process that requires consistent attention and care. That's why we offer comprehensive maintenance services tailored to your specific needs. Our team of skilled professionals will handle all the heavy lifting, ensuring your outdoor space remains healthy and vibrant year-round."
          buttonText="Maintenace Services"
        />
        <ParallaxBox
          text="Family Business"
          imageSrc="/parallax4.webp"
          yShiftClass="yShift4"
          startScroll={1250}
          endScroll={2800}
        />
        <div className="w-full py-12 flex justify-center bg-brandprimary-200">
          <p className="w-2/3 strong text-2xl">
            Whether you're interested in a new landscape design, need help with installation, or are looking for ongoing
            maintenance services, we're here to help. Contact us today to schedule a consultation and let us help you
            create the outdoor space of your dreams.
          </p>
        </div>
      </ParallaxProvider>
    </main>
  )
}

interface IHomeBlurbSectionProps {
  heading: string
  text?: string
  url: string
  buttonText: string
  children?: React.ReactNode
}

const cormorantSc = Cormorant_SC({
  weight: "600",
  subsets: ["latin"],
})

const HomeBlurbSection = ({ heading, text, url, buttonText, children }: IHomeBlurbSectionProps) => {
  return (
    <div className="flex flex-col lg:flex-row w-full py-10 justify-center p-2 bg-brandprimary-200">
      <div className="w-full lg:w-1/3">
        <h1 className={`${cormorantSc.className} text-brandsecondary-600`}>{heading}</h1>
        {text && <p>{text}</p>}
        {children}
      </div>
      <div className="w-full mt-4 lg:mt-0 lg:w-1/3 flex items-center justify-center">
        <CallToActionButton url={url}>{buttonText}</CallToActionButton>
      </div>
    </div>
  )
}
