import React from 'react'
import TimelineSmCard from './TimelineSmCard'

const TimelineSm = ({ timelines }: { timelines: TimelineType }) => {
  return (
    <div className="max-w-md mx-auto">
      <div className="max-w-[389px] mx-auto text-white text-center">
        <h1 className="font-clash font-bold text-[32px]">Timeline</h1>
        <p className="mt-3">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <div className='mt-16 flex flex-col space-y-3 px-5'>
        {timelines.map((timeline) => <TimelineSmCard content={timeline}/>)}
      </div>
    </div>
  )
}

export default TimelineSm
