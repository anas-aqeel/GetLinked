import Image from 'next/image'
import React from 'react'
import trophyImg from '../../public/assets/images/prize-trophy.svg'
import trophySmImg from '../../public/assets/images/prize-sm.svg'
import awardsImg from '../../public/assets/images/prize-awards.svg'

const Prizes = () => {
  return (
    <div className="pt-[80px] pb-[107px] px-10 md:px-5 bg-[#140D27] bg-image bg-cover border-t border-white border-opacity-[0.18]">
      <div className="max-w-[1187px] mx-auto grid md:grid-cols-2 gap-x-14 gap-y-10 place-items-center">
        <div className="self-center block md:hidden">
          <div className="text-center font-clash text-xl font-bold text-white">
            <h1 className="">Prizes and</h1>
            <h1 className="text-[#D434FE]">Rewards</h1>
          </div>
          <div className="mt-4 max-w-[350px] text-center">
            <p className="text-white text-sm leading-[27.5px]">
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>
        </div>

        <Image src={trophyImg} alt="" className="w-full h-auto hidden md:flex" />
        <Image src={trophySmImg} alt="" className="w-full h-auto flex md:hidden" />
        <div className="flex-col ">
          <div className="self-center hidden md:block">
            <div className="font-clash text-3xl font-bold text-white ">
              <h1 className="">Prizes and</h1>
              <h1 className="text-[#D434FE]">Rewards</h1>
            </div>
            <div className="mt-4 max-w-[350px]">
              <p className="text-white text-sm leading-[27.5px]">
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>
          </div>

          <div className="md:mt-[56px]">
            <Image src={awardsImg} alt="" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prizes
