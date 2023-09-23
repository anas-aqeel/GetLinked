import React, { useState } from 'react'
import Button from '../components/Button'
import headerImg from '../../public/assets/images/header.svg'
import headerSmImg from '../../public/assets/images/header-sm.svg'
import underlineImg from '../../public/assets/images/underline.svg'
import chainImg from '../../public/assets/images/chain.svg'
import sparkImg from '../../public/assets/images/spark.svg'
import Image from 'next/image'
const Header = () => {
  return (
    <div className="bg-[#180E2C]">
      <section className="">
        <div className="pl-4 sm:pl-6 xl:pl-20">
          <div className="flex flex-col md:flex-row items-center  pr-0">
            <div className="relative w-fit md:hidden flex mt-8">
              <h2 className="italic font-bold text-white text-[36px] text-base">
                Igniting a Revolution in HR Innovation
              </h2>
              <Image
                alt=""
                src={underlineImg}
                className="absolute -bottom-2 right-0 h-[8px] w-auto"
              />
            </div>
            <div className="w-full xl:w-[40%] h-fit py-10 sm:py-16 lg:py-24 px-8 sm:px-0">
              <div className="flex flex-col gap-y-1 max-w-[590px] font-clash mx-auto md:mx-0">
                <h1 className="text-center md:text-left text-3xl font-bold text-white sm:text-6xl lg:text-[70px]">
                  getlinked Tech
                </h1>
                <h1 className="text-center flex justify-center items-center md:text-left text-3xl font-bold text-white sm:text-6xl lg:text-[70px]">
                  Hackathon{' '}
                  <span className="text-[#D434FE] flex ml-2 items-center">
                    1.0{' '}
                    <Image
                      src={chainImg}
                      alt=""
                      className=" sm:w-auto w-8 h-auto"
                    />{' '}
                    <Image
                      src={sparkImg}
                      alt=""
                      className=" sm:w-auto w-8 h-auto"
                    />
                  </span>
                </h1>
              </div>

              <p className="mt-2 text-sm text-center md:text-left text-white sm:text-xl max-w-[520px] mx-auto md:mx-0">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>

              <div className="mt-10 flex w-full justify-center md:justify-start">
                <Button>Register</Button>
              </div>
              <div className='text-white text-center md:text-left text-6xl mt-14 font-unica'>00<span className='font-mont text-base'>M</span> 00<span className='font-mont text-base'>H</span> 00<span className='font-mont text-base'>S</span></div>
            </div>

            <div className="flex flex-col w-full xl:w-[60%] gap-4 sm:gap-y-6 pt-8">
              <div className=" w-fit md:flex hidden">
                <h2 className="italic font-bold text-white text-[36px]">
                  Igniting a Revolution in HR{' '}
                  <span className="relative">
                    Innovation
                    <Image
                      alt=""
                      src={underlineImg}
                      className="absolute -bottom-2 right-0 h-[17px] w-auto"
                    />
                  </span>
                </h2>
              </div>
              <Image
                className="md:w-full h-auto hidden md:flex"
                src={headerImg}
                alt=""
              />
              <Image
                className="w-full h-auto flex md:hidden"
                src={headerSmImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Header
