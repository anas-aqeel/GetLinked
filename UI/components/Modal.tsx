import Image from 'next/image'
import React from 'react'
import modalImg from '../../public/assets/images/modalImg.svg'
import Button from '@/UI/components/Button'
import Link from 'next/link'

const Modal = ({ openModal }: { openModal: boolean }) => {
  return (
    <div
      className={`fixed ${
        openModal ? 'opacity-100 z-50' : 'opacity-0 -z-50'
      } transition-all duration-300  top-0 bottom-0 w-screen h-screen flex justify-center items-center z-50 px-8 bg-[#150E28] bg-opacity-90`}
    >
      <div className="border border-[#D434FE] rounded-md max-w-2xl mx-auto my-auto flex flex-col items-center gap-y-5 px-14 pt-8 py-8 md:pb-16 ">
        <Image src={modalImg} alt="" />
        <div className="text-white font-semibold text-lg md:text-3xl text-center">
          <p>Congratulations</p>
          <p>you have successfully Registered!</p>
        </div>
        <div className="text-white text-sm text-center">
          <p>Yes, it was easy and you did it!</p>
          <p>check your mail box for next step</p>
        </div>
        <Link href={'/'} className="w-full">
          <Button fullWidth>Back</Button>
        </Link>
      </div>
    </div>
  )
}

export default Modal
