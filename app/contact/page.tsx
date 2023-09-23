import ContactForm from '@/UI/components/ContactForm'
import Image from 'next/image'
import React from 'react'
import xIcon from '../../public/assets/icons/x.svg'
import fbIcon from '../../public/assets/icons/facebook.svg'
import instaIcon from '../../public/assets/icons/insta.svg'
import inIcon from '../../public/assets/icons/linkedin.svg'

const Page = () => {
  return (
    <div className="bg-[#150E28] py-10 md:py-[130px]">
      <div className="max-w-[1238px] px-5 mx-auto grid md:grid-cols-12 place-content-center">
        <div className="pt-16 md:flex flex-col hidden md:col-span-6">
          <h3 className="text-[#D434FE] font-clash font-bold text-3xl">
            Get in touch
          </h3>
          <div className="flex flex-col space-y-4 mt-8 text-white">
            <div>
              <p>Contact</p>
              <p> Information</p>
            </div>
            <div>
              <p>27,Alara Street</p>
              <p> Yaba 100012</p>
              <p> Lagos State</p>
            </div>
            <div>
              <p>Call Us : 07067981819</p>
            </div>
            <div>
              <p>we are open from Monday-Friday</p>
              <p>08:00am - 05:00pm</p>
            </div>
            <div className="flex flex-col gap-y-4">
              <p className="text-[#D434FE]">Follow on</p>
              <div className="flex space-x-4 items-center">
                <Image src={instaIcon} alt="" className="h-6 w-auto" />
                <Image src={xIcon} alt="" className="h-4 w-auto" />
                <Image src={fbIcon} alt="" className="h-4 w-auto" />
                <Image src={inIcon} alt="" className="h-4 w-auto" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[750px] md:col-span-6">
          <ContactForm />
        </div>
      </div>
      
    </div>
  )
}

export default Page
