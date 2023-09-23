import Image from 'next/image'
import React from 'react'
import PrivacyImg from '../../public/assets/images/privacy.svg'
import PrivacyPolicyCard from '../components/PrivacyPolicyCard'
const Privacy = () => {
  return (
    <div className="py-[62px] px-12 md:px-5 bg-[#140D27] border-y border-white border-opacity-[0.18]">
      <div className="max-w-[1232px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-x-4 gap-y-12 place-items-center">
        <div className='md:col-span-5'>
          <div className="font-clash md:text-left text-center text-xl md:text-3xl font-bold text-white">
            <h1 className="">Privacy Policy and </h1>
            <h1 className="text-[#D434FE]">Terms</h1>
          </div>
          <div className="mt-4 max-w-[500px] md:text-left text-center">
            <p className="text-white text-sm leading-[27.5px] opacity-75">
              Last updated on September 12, 2023
            </p>
            <p className="text-white text-sm leading-[27.5px] mt-7">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
            <div className="mt-8 md:mt-[90px]">
              <PrivacyPolicyCard />
            </div>
          </div>
        </div>
        <Image placeholder="blur"  src={PrivacyImg} alt="" className="w-full h-auto md:col-span-7" />
      </div>
    </div>
  )
}

export default Privacy
