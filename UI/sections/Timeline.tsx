import React from 'react'
import TimelineLg from '../components/TimelineLg'
import TimelineSm from '../components/TimelineSm'

const Timeline = () => {
  let timelines: TimelineType = [
    // { type: 'line' },

    {
      type: 'content',
      heading: 'Hackathon Announcement',
      number: 1,
      date: 'November 18, 2023',
      paragraph:
        'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to registe',
      alignment: 'left',
    },
    // { type: 'line' },

    {
      type: 'content',
      heading: 'Teams Registration begins',
      number: 2,
      date: 'November 18, 2023',
      paragraph:
        'Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register',
      alignment: 'right',
    },
    // { type: 'line' },
    {
      type: 'content',
      heading: 'Teams Registration begins',
      number: 3,
      date: 'November 18, 2023',
      paragraph: 'Interested Participants are no longer Allowed to\n register',
      alignment: 'left',
    },
    // { type: 'line' },
    {
      type: 'content',
      heading: 'Announcement of the accepted teams\n and ideas',
      number: 4,
      date: 'November 18, 2023',
      paragraph:
        'All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced',
      alignment: 'right',
    },
    // { type: 'line' },
    {
      type: 'content',
      heading: 'Getlinked Hackathon 1.0 Offically Begins',
      number: 5,
      date: 'November 18, 2023',
      paragraph:
        'Accepted teams can now proceed to build their ground breaking skill driven solutions',
      alignment: 'left',
    },
    // { type: 'line' },
    {
      type: 'content',
      heading: 'Demo Day',
      number: 6,
      date: 'November 18, 2023',
      paragraph: 'Teams get the opportunity to pitch their projects to judges.',
      paragraph2:
        'The winner of the hackathon will also be announced on\n this day',
      alignment: 'left',
    },
    // { type: 'line' },
  ]
  return (
    <div className="pt-[72px] pb-[100px] bg-[#140D27] border-y border-white border-opacity-[0.18]">
      <div className="md:block hidden">
        <TimelineLg timelines={timelines} />
      </div>
      <div className="md:hidden block">
        <TimelineSm timelines={timelines} />
      </div>
    </div>
  )
}

export default Timeline
