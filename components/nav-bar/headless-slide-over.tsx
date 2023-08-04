import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { GrClose } from "react-icons/gr"

interface IHeadlessSlideOverProps {
  open: boolean
  setOpen: (any: any) => void
  title?: string
  children: React.ReactNode
}

export function HeadlessSlideOver({ open, setOpen, title, children }: IHeadlessSlideOverProps) {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-brandsecondary-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md mt-24">
                  <div className="flex h-full flex-col overflow-y-scroll bg-brandtertiary-100 my-1 shadow-xl z-10">
                  {/* <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="ml-4 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        aria-label="Close panel"
                        type="button"
                        className="rounded-md text-brandsecondary-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <GrClose size={24} aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child> */}
                    <div className="px-4 sm:px-6">
                      {title && <Dialog.Title className="text-base font-semibold leading-6 text-brandsecondary-900">
                        {title}
                      </Dialog.Title>}
                    </div>
                    <div className="relative flex-1 px-4 sm:px-6">{children}</div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}