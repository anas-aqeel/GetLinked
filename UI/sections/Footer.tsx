import React from 'react'
import logoImg from '../../public/assets/images/logo.svg'
import Image from 'next/image'
import xIcon from '../../public/assets/icons/x.svg'
import fbIcon from '../../public/assets/icons/facebook.svg'
import instaIcon from '../../public/assets/icons/insta.svg'
import inIcon from '../../public/assets/icons/linkedin.svg'
import phoneIcon from '../../public/assets/icons/phone.svg'
import locationIcon from '../../public/assets/icons/location.svg'
import diamondIcon from '../../public/assets/icons/diamond.svg'

const Footer = () => {
  return (
    <div className="pt-[70px] pb-10 bg-[#100B20]">
      <div className="max-w-[1232px]  px-16 md:px-5 mx-auto grid sm:grid-cols-2 lg:grid-cols-12 gap-x-20 gap-y-10">
        <div className="sm:col-span-2 lg:col-span-6 flex flex-col justify-between gap-y-10">
          <div className=''>
            <Image src={logoImg} alt="" className="h-8 w-auto" />
            <p className="text-white text-sm md:text-base leading-[1.72] mt-3 sm:max-w-[480px] max-w-[400px]">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>
          <div className="text-sm  text-white">Terms of Use Privacy Policy</div>
        </div>
        <div className="sm:col-span-1 lg:col-span-4 flex flex-col space-y-4 text-sm text-white">
          <h5 className="text-[#D434FE] font-semibold text-base">
            Useful Links
          </h5>
          <p>Overview</p>
          <p>Timeline</p>
          <p>FAQs</p>
          <p>Register</p>
          <div className="flex gap-x-4 items-center">
            <p className="text-[#D434FE]">Follow us</p>
            <div className="flex space-x-4">
              <Image src={instaIcon} alt="" className="h-7 w-auto" />
              <Image src={xIcon} alt="" className="h-6 w-auto" />
              <Image src={fbIcon} alt="" className="h-6 w-auto" />
              <Image src={inIcon} alt="" className="h-6 w-auto" />
            </div>
          </div>
        </div>
        <div className="sm:col-span-1 lg:col-span-2 flex flex-col space-y-4 text-sm text-white max-w-[200px] sm:max-w-[150px]">
          <h5 className="text-[#D434FE] font-semibold text-base">Contact Us</h5>
          <div className="flex items-start space-x-4">
            <Image src={phoneIcon} alt="" />
            <p>+234 679 81819</p>
          </div>
          <div className="flex items-start space-x-4">
            <Image src={locationIcon} alt="" />
            <p>27,Alara Street Yaba 100012 Lagos State</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-between items-center gap-y-6 text-sm text-white mt-7'>
        <Image src={diamondIcon} alt=''/>
        All rights reserved. © getlinked Ltd.</div>
    </div>
  )
}

export default Footer


