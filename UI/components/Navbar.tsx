'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'
import Image from 'next/image'
import logo from '../../public/assets/images/logo.svg'
import linesIcon from '../../public/assets/icons/3lines.svg'
import closeIcon from '../../public/assets/icons/close.svg'

const Navbar = () => {
  let [openNavbar, setOpenNavbar] = useState(false)
  let navItems = [
    { label: 'Timeline', href: '' },
    { label: 'Overview', href: '' },
    { label: 'FAQS', href: '' },
    { label: 'Contact', href: '/contact' },
  ]
  return (
    <div className="relative bg-[#170E2A] md:pt-[30px] border-b border-white border-opacity-[18%]">
      <header className=" py-5 md:py-[30px] px-10">
        <div className="px-4 mx-auto max-w-[1384px] sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link
                href="/"
                title=""
                className="flex rounded outline-none border-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                <Image className="w-[170px] h-auto" src={logo} alt="" />
              </Link>
            </div>

            <div className="flex lg:hidden">
              <button
                type="button"
                className=""
                onClick={() => setOpenNavbar(true)}
              >
                <Image src={linesIcon} alt="" />
              </button>
            </div>

            <div className="hidden lg:flex  lg:items-center lg:justify-center lg:gap-x-14">
              <div className="flex lg:items-center lg:justify-center lg:space-x-10">
                <div className="flex items-center space-x-12">
                  {navItems.map((navItem) => (
                    <Link
                      href={navItem.href}
                      title=""
                      className="text-lg font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                    >
                      {' '}
                      {navItem.label}{' '}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="ml-16">
                <Link href={'/register'} className="border-none outline-none">
                  <Button>Register</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`fixed top-0 bottom-0 w-screen transition-all duration-300 z-50 py-10  bg-[#170E2A] px-10 ${
          openNavbar ? 'right-0' : 'right-[-100vw]'
        }`}
      >
        <div className="flex justify-between mb-16">
          <Image src={logo} alt="" />
          <button onClick={() => setOpenNavbar(false)}>
            <Image src={closeIcon} alt="" />
          </button>
        </div>
        <div className="text-white  flex flex-col space-y-6">
          {navItems.map((item) => (
            <Link href={item.href}>{item.label}</Link>
          ))}
          <Link href={'/register'}>
            <Button isSmall>Register</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Navbar
