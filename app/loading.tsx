import { Spinner } from "@/components/spinner"
import "./globals.css"

export default function Loading() {
  return <div className="flex justify-center">
    <div className="flex flex-col justify-center">
      <Spinner />
    </div>
  </div>
}
