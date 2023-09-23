'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import RegisterationForm from '@/UI/components/RegisterationForm'
import registerImg from '../../public/assets/images/register.svg'
import registerSmImg from '../../public/assets/images/register-sm.svg'
import Modal from '@/UI/components/Modal'

const Page = () => {
  let [openModal, setOpenModal] = useState(false)
  return (
    <div className="bg-[#150E28] py-10 md:py-[130px]">
      <div className="max-w-[1280px] px-16 md:px-5 mx-auto grid md:grid-cols-11">
        <div className="md:flex flex-col hidden md:col-span-5">
          <Image src={registerImg} alt="" />
        </div>
        <div className="md:hidden flex-col items-center w-full flex md:col-span-5">
          <Image src={registerSmImg} className="w-full h-auto" alt="" />
        </div>
        <div className="w-full max-w-[750px] md:col-span-6">
          <RegisterationForm setOpenModal={setOpenModal}/>
        </div>
      </div>
      <Modal openModal={openModal} />
    </div>
  )
}

export default Page
