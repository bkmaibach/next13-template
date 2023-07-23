import { CallToActionButton } from "./call-to-action-button"

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full z-0 h-96 ">
      <div className="width-full bg-brandprimary-900 h-96 flex justify-center">
        <div className="h-full flex flex-col justify-center text-center items-center gap-4">
          <p className="text-brandsecondary-200">Have a job in mind?</p>
          <CallToActionButton url="/contact">Contact us</CallToActionButton>

          <div className="flex flex-col text-brandsecondary-200">
            <a href="mailto:mightyoakslandscaping@protonmail.com">
              <p>mightyoakslandscaping@protonmail.com</p>
            </a>
            <p>250 891 3762</p>
          </div>

        </div>
        <div className="text-brandsecondary-200 width-full bg-brandprimary-900 flex justify-center items-center h-8 fixed bottom-0">
          Website created with ❤️ by BKM © 2023
        </div>
      </div>
    </div>
  )
}
