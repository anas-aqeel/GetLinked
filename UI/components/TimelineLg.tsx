import React from 'react'

const TimelineLg = ({ timelines }: { timelines: TimelineType }) => {
  return (
    <div className="max-w-[1225px] px-2 mx-auto">
      <div className="max-w-[389px] mx-auto text-white text-center">
        <h1 className="font-clash font-bold text-[32px]">Timeline</h1>
        <p className="mt-3">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <div className="mt-[90px] flex flex-col">
        {timelines.map((timeline, i) => {
            return (
              <>
                <div
                  className={`flex gap-x-[90px] items-center ${
                    timeline.alignment == 'left'
                      ? 'flex-row'
                      : 'flex-row-reverse'
                  }`}
                >
                  <div
                    className={`flex flex-col ${
                      timeline.alignment == 'left' ? 'text-right' : 'text-left'
                    }  gap-y-3 max-w-[520px] w-[41%]`}
                  >
                    <h3 className="text-[#D434FE] font-bold text-2xl">
                      {timeline.heading}
                    </h3>
                    <div className="text-white">
                      <p>{timeline.paragraph}</p>
                      <p>{timeline.paragraph2 || ''}</p>
                    </div>
                  </div>
                  <div className="my-3 h-[53px] w-[53px] flex justify-center items-center text-white text-2xl font-bold rounded-full bg-gradient-to-r from-[#903AFF] to-[#D434FE]">
                    {timeline.number}
                  </div>
                  <div
                    className={` ${
                      timeline.alignment == 'left' ? 'text-left' : 'text-right'
                    } w-[41%]`}
                  >
                    <h3 className="text-[#D434FE] font-bold text-2xl">
                      {timeline.date}
                    </h3>
                  </div>
                </div>
                <div
                  className={`bg-[#D434FE] w-1 ${
                    i == 0 ? 'h-[140px]' : 'h-[90px]'
                  }  self-center justify-self-center ${
                    timelines.length - 1 == i ? 'hidden' : 'flex'
                  }`}
                ></div>
              </>
            )
          // else {
          //   return (
          //     <div
          //       className={`bg-[#D434FE] w-1 ${
          //         i == 0 ? 'h-[140px]' : 'h-[90px]'
          //       }  self-center justify-self-center ${
          //         timelines.length - 1 == i ? 'hidden' : 'flex'
          //       }`}
          //     ></div>
          //   )
          // }
        })}
      </div>
    </div>
  )
}

export default TimelineLg
