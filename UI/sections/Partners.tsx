import React from 'react'
import partnerImg from "../../public/assets/images/partners.svg"
import partnerSmImg from "../../public/assets/images/partners-sm.svg"
import Image from 'next/image'

const Partners = () => {
  return (
    <div className="py-[120px] px-8 md:px-5 bg-[#140D27] border-b border-white border-opacity-[0.18]">
      <div className="max-w-[1255px] px-2 mx-auto">
        <div className="max-w-[479px] mx-auto text-white text-center">
          <h1 className="font-clash font-bold  text-xl md:text-[32px]">
            Partners and Sponsors
          </h1>
          <p className="mt-3">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <Image src={partnerImg} alt="" className='w-full h-auto mt-6 hidden md:flex'/>
        <Image src={partnerSmImg} alt="" className='w-full h-auto flex md:hidden mt-10'/>
      </div>
    </div>
  )
}

export default Partners
