/* eslint-disable @next/next/no-html-link-for-pages */

'use client'
import '../css/header.css'
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
//   ArrowPathIcon,
  Bars3Icon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon} from '@heroicons/react/20/solid'



export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-blue-800 text-yellow-100 font-sans absolute z-10 w-full  " id='fixing' >
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1  "  id='header-flex' >
            <div className='flex flex-col  pt-1  ' >
                <span className="">jahansanaat</span>
                <span className="">شرکت ایده پرداز جهان صنعت</span>    
            </div>
           {/* <div> <img
              alt=""
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            /></div> */}

        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-yellow-100"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            
             <a href="/CallUs" className='text-md' >تماس باما</a>
              

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
             
                
            </PopoverPanel>
          </Popover>

          <a href="/Products" className="text-md/6  text-yellow-100">
            لیست محصوالات
          </a>
          <a href="/AboutUs" className="text-md/6  text-yellow-100">
            درباره ما
          </a>
          <a href="/" className="text-md/6  text-yellow-100">
           خانه
          </a>
        </PopoverGroup>
        <div className="hidden text-sm  lg:flex lg:flex-1 lg:justify-end">
         تجیهزات کافی شاپ و رستوران
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-blue-800 text-yellow-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <div>
              <span className="">jahansanaat</span>
              <br />
              <span className=''>شرکت ایده پرداز جهان صنعت</span>
              </div>
              {/* <img
                alt=""
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              /> */}
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-yellow-100"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-yellow-100-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-yellow-100 hover:bg-gray-50">
                  <a href="/">خانه</a>
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/AboutUs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-yellow-100 hover:bg-gray-50"
                >
                درباره ما
                </a>
                <a
                  href="/Products"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-yellow-100 hover:bg-gray-50"
                >
                    لیست محصوالات
                </a>
                <a
                  href="/CallUs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-yellow-100 hover:bg-gray-50"
                >
                 تماس باما
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-yellow-100 hover:bg-gray-50"
                >
             
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}