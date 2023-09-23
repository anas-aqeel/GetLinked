import React from 'react'

const TimelineSmCard = ({ content }: { content: Content }) => {
  return (
    <div className="flex space-x-5">
      <div className="flex flex-col items-center">
        <div
          className={`bg-[#D434FE] w-1  min-h-[120px] self-center justify-self-center flex flex-grow-0`}
        ></div>

        <div className="my-3 h-[53px] w-[53px] flex justify-center items-center text-white text-2xl font-bold rounded-full bg-gradient-to-r from-[#903AFF] to-[#D434FE]">
          {content.number}
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-y-4">
          <h3 className="text-[#D434FE] font-bold text-xl">
            {content.heading}
          </h3>
          <p className="text-white">{content.paragraph}</p>
        </div>
        <h3 className="text-[#D434FE] font-bold text-xl mb-5">{content.date}</h3>
      </div>
    </div>
  )
}

export default TimelineSmCard
