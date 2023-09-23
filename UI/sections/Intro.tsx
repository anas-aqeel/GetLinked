import Image from 'next/image'
import React from 'react'
import introImg from '../../public/assets/images/intro.svg'
const Intro = () => {
  return (
    <div className="py-[62px] bg-[#140D27] border-y border-white border-opacity-[0.18]">
      <div className="max-w-[1187px] mx-auto px-10 md:px-5 grid md:grid-cols-2 gap-y-3 gap-x-14 place-items-center">
        <Image placeholder="blur"  src={introImg} alt="" className="w-full h-auto" />
        <div>
          <div className="font-clash md:text-left text-center text-xl md:text-3xl font-bold text-white">
            <h1 className="">Introduction to getlinked</h1>
            <h1 className="text-[#D434FE]">tech Hackathon 1.0</h1>
          </div>
          <div className="mt-4 max-w-[535px]">
            <p className="text-white text-sm leading-[27.5px] md:text-left text-center">
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
      </div>
    </div>
  )
}

export default Intro
