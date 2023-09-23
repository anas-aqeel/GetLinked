'use client'
import React, { useRef } from 'react'
import Button from './Button'
import Image from 'next/image'
import xIcon from '../../public/assets/icons/x.svg'
import fbIcon from '../../public/assets/icons/facebook.svg'
import instaIcon from '../../public/assets/icons/insta.svg'
import inIcon from '../../public/assets/icons/linkedin.svg'
import backImg from '../../public/assets/images/button.svg'
import Link from 'next/link'

const ContactForm = () => {
  const formRef = useRef<any>(null)
  const handleSubmit = async () => {
    // Access the form DOM element using the ref
    const form = formRef.current

    // Extract values from specific form fields and save them into formData object
    const formData = {
      email: form.elements.email.value,
      first_name: form.elements.first_name.value,
      message: form.elements.message.value,
    }
    let response = await fetch('/api/hackathon/registeration', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
    let responseData = await response.json()
    let data = JSON.parse(responseData)
    console.log(data)
  }
  return (
    <div className="">
      <div className="flex md:hidden py-11 px-10">
        <Link href={'/'}>
          <Image src={backImg} alt="" />
        </Link>
      </div>
      <div className="md:bg-white md:bg-opacity-[0.03] rounded-xl px-10 md:py-16 ">
        <div className="text-[#D434FE] text-base md:text-xl font-clash max-w-[195px] md:max-w-max">
          <p>Questions or need assistance?</p>
          <p>Let us know about it!</p>
        </div>
        <div className="text-white mt-7 text-sm md:text-base">
          Email us below to any question related to our event
        </div>
        <form action="" className="mt-8 flex flex-col gap-y-10">
          <div className="border-white border rounded text-lg py-3 px-7">
            <input
              placeholder="First Name"
              name="first_name"
              className="bg-transparent w-full border-none outline-none text-white"
            />
          </div>
          <div className="border-white border rounded text-lg py-3 px-7">
            <input
              placeholder="Mail"
              name="email"
              className="bg-transparent w-full border-none outline-none text-white"
            />
          </div>
          <div className="border-white border rounded text-lg py-3 px-7">
            <textarea
              rows={3}
              name="message"
              placeholder="Message"
              className="bg-transparent w-full border-none outline-none text-white"
            />
          </div>
          <div className="flex justify-center">
            <Button onClick={handleSubmit}>Sumbit</Button>
          </div>
        </form>
        <div className="flex flex-col gap-y-4 mt-10 md:hidden">
          <p className="text-[#D434FE] text-center">Follow on</p>
          <div className="flex space-x-4 items-center justify-center">
            <Image src={instaIcon} alt="" className="h-6 w-auto" />
            <Image src={xIcon} alt="" className="h-4 w-auto" />
            <Image src={fbIcon} alt="" className="h-4 w-auto" />
            <Image src={inIcon} alt="" className="h-4 w-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
