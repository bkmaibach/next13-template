import Link from "next/link"

interface ICallToActionButtonProps {
  url: string
  children: React.ReactNode
}

export const CallToActionButton = ({ children, url }: ICallToActionButtonProps) => {
  return (
    <button aria-label="Act now" className="w-fit rounded-md mb-3 border-brandsecondary-600 text-brandsecondary-600 bg-brandprimary-100 text-lg p-2 font-medium hover:bg-brandtertiary-100 hover:text-brandsecondary-600 tracking-widest transition duration-300">
      <Link href={url}>{children}</Link>
    </button>
  )
}
