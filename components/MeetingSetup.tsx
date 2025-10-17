"use client";
import { Button } from './ui/button';
import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import { Target } from 'lucide-react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const MeetingSetup = ({setIsSetupComplete}:{setIsSetupComplete:(type:boolean)=>void}) => {
    const [ismMicCamToggleOn, setIsMicCamToggleOn]=useState(false);

    const call=useCall();

    if(!call){
        throw new Error('use call must be in the streamcall component')
    }


    useEffect(()=>{
if(ismMicCamToggleOn){
     call?.camera.disable()
    call?.microphone.disable()


}
else{
    call?.camera.enable()
    call?.microphone.enable()
}

    },[ismMicCamToggleOn, call?.camera,call?.microphone])
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center  gap-3 text-black'>
        <h1 className='text-2xl font-bold'>Setup</h1>


      <VideoPreview />
 

        <div className='flex h-16 items-center justify-center gap-3'>
            <label className='flex items-center justify-center gap-2 font-medium'>
                <input type="checkbox" checked={ismMicCamToggleOn} onChange={(e)=>setIsMicCamToggleOn(e.target.checked)} />
                Join With Mic and Camera off
            </label>
            <DeviceSettings/>
        </div>
        <Button className="rounded-md bg-green-500 px-4 py-2.5" onClick={()=>{call.join();
            setIsSetupComplete(true);
        }}>
            Join Meeting
        </Button>
    </div>
  )
}

export default MeetingSetup