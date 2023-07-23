import { useMediaQuery } from "react-responsive"

interface IResponsiveWrapperProps {
  children: React.ReactNode
}



export function Desktop({ children }: IResponsiveWrapperProps) {
  const useDesktopMediaQuery = () =>
    useMediaQuery({
      minWidth: 769,
    })

  return <>{useDesktopMediaQuery() ? children : null}</>
}

export function Mobile({ children }: IResponsiveWrapperProps) {
  const useDesktopMediaQuery = () =>
    useMediaQuery({
      maxWidth: 769,
    })

  return <>{useDesktopMediaQuery() ? children : null}</>
}
