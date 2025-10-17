import React from 'react'
import { useState } from 'react'
const copy = () => {
  const [meetingState, setMeetingState] =
    useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()
  return (
    <section className="mt-10 grid grid-cols-2 md:justify-center justify-start sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 md:gap-2 gap-4">
      <div className="flex justify-center  cursor-pointer" onClick={() => { }}>
        <img src="/icons/START.png" alt="Start" className="h-50 md:h-70 w-40 md:w-55" />
      </div>
      <div className="flex cursor-pointer" onClick={() => { }}>

        <img src="/icons/join.png" alt="Join" className="h-50 md:h-70 w-40 md:w-55" />

      </div>
      <div className="flex justify-center  cursor-pointer">
        <a href="">
          <img src="/icons/REPO.png" alt="Start" className="h-50 md:h-70 w-40 md:w-55" /></a>
      </div>
      <div className="flex  ">
        <a href="">
          <img src="/icons/chatroom.png" alt="Join" className="h-50 md:h-70 w-40 md:w-55" />
        </a>
      </div>
      <div className="flex justify-center  cursor-pointer">
        <a href="">
          <img src="/icons/resources.png" alt="Start" className="h-50 md:h-70 w-40 md:w-55" /></a>
      </div>


    </section>
  )
}

export default copy