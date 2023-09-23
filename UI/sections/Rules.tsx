import Image from 'next/image'
import React from 'react'
import rulesImg from '../../public/assets/images/rules.svg'
const Rules = () => {
  return (
    <div className="py-8 md:py-[62px] bg-[#140D27] border-y border-white border-opacity-[0.18]">
      <div className="max-w-[1187px] mx-auto flex flex-col-reverse md:flex-row  gap-x-4 place-items-center px-8 md:px-5">
        <div className='w-full md:w-1/2'>
          <div className="font-clash md:text-left text-center text-xl sm:text-3xl font-bold text-white">
            <h1 className="">Rules and</h1>
            <h1 className="text-[#D434FE]">Guidelines</h1>
          </div>
          <div className="mt-4 max-w-[535px] mx-auto md:mx-0 md:text-left text-center">
            <p className="text-white text-sm leading-[27.5px]">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
        </div>
        <Image placeholder="blur"  src={rulesImg} alt="" className="w-full md:w-1/2 h-auto" />
      </div>
    </div>
  )
}

export default Rules
