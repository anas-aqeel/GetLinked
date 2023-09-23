import React from 'react'
import CheckIcon from '../../public/assets/icons/list.svg'
import Image from 'next/image'
import Button from './Button'

const PrivacyPolicyCard = () => {
  return (
    <div className="max-w-[700px] py-10 px-4 md:px-14 border border-[#D434FE] rounded bg-[#D9D9D9] bg-opacity-[0.03]">
      <p className="text-white leading-[216.4%] text-sm md:text-base">
        At getlinked tech Hackathon 1.0, we value your privacy and are committed
        to protecting your personal information. This Privacy Policy outlines
        how we collect, use, disclose, and safeguard your data when you
        participate in our tech hackathon event. By participating in our event,
        you consent to the practices described in this policy.
      </p>
      <div className='text-left'>

      <h3 className=" font-bold text-base md:text-lg text-[#D434FE] mt-6">
        Licensing Policy
      </h3>
      <h4 className=" font-bold text-sm md:text-base text-[#fff]">
        Here are terms of our Standard License:
      </h4>
      <div className="mt-6">
        <div className="flex items-start gap-x-3.5">
          <Image placeholder="blur"  src={CheckIcon} alt="" className="w-5 h-auto" />
          <p className="text-white leading-[156.4%] md:text-base text-sm">
            The Standard License grants you a non-exclusive right to navigate
            and register for our event
          </p>
        </div>
        <div className="flex items-start gap-x-3.5">
          <Image placeholder="blur"  src={CheckIcon} alt="" className="w-5 h-auto" />
          <p className="text-white leading-[156.4%] md:text-base text-sm">
            You are licensed to use the item available at any free source sites,
            for your project developement
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <Button isSmall={true}>Read More</Button>
        </div>
      </div>
      </div>

    </div>
  )
}

export default PrivacyPolicyCard
