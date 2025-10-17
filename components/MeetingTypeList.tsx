"use client"

import React, { use } from 'react'
import { useState } from 'react';
import HomeCard from './HomeCard';
import { useRouter } from 'next/navigation';
import {Calendar1 , Video, Plus, Contact, Github, GithubIcon, MessageSquare, BookCopy, LibraryBig} from 'lucide-react';
import MeetingModel from './MeetingModel';
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { Description } from '@radix-ui/react-dialog';
import { toast, Toaster, useSonner } from "sonner";

const MeetingTypeList = () => {
const router=useRouter();

 const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()
const {user} = useUser();
const client = useStreamVideoClient();
const [values,setValues]=useState({
   dateTime: new Date(),
   Description: '',
   link:'',
})
const [callDetails, setCallDetails] = useState<Call>();
const {toasts} = useSonner();
 const createMeeting=async()=>{
    if(!client || !user) return ;
    try{
      if(!values.dateTime){
         toast("Please select a date and time",{
           
         });return;
      }
const id=crypto.randomUUID();
const call = client.call('default', id);
if(!call) throw new Error('faild to connect call')
   const startsAt= values.dateTime.toISOString()|| new Date(Date.now()).toISOString();
const description =values.Description || 'Instant meeting';

   await call.getOrCreate({
   data:{
      starts_at:startsAt,
      custom:{
         Description
      }
   }
})
setCallDetails(call);
if(!values.Description){
   router.push(`/meeting/${call.id}`)
} toast("Meeting Created", {
  description: "",
});
    } catch (error){
      console.log(error);
  

    }
 }
  return (
<section className='grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4'>
    <HomeCard
    title="New Meeting"
   icons={<Plus className="h-10 w-10 text-white" />}
    description="Start an Instant Meeting"
    handleClick={()=>setMeetingState('isInstantMeeting')}
    className="bg-[#ec7214]"
    />

    <HomeCard
    icons={<MessageSquare className="h-10 w-10 text-white" />}
       title="Join Meeting"
    description="Join an Ongoing Meeting"
 handleClick={()=>router.push('/recordings')}
    className="bg-[#1766FD]"/>
     <HomeCard
    title="Knowledge Sharing Sessions"
   icons={<LibraryBig className="h-10 w-10 text-white" />}
    description="Schedule"
handleClick={()=>setMeetingState('isScheduleMeeting')}
    className="bg-yellow-400 "
    />
    <HomeCard
    icons={<MessageSquare className="h-10 w-10 text-white" />}
       title="Chat Room"
    description="Connect to Connect"
 handleClick={()=>router.push('/recordings')}
    className="bg-[#A814EC]"/>
    <HomeCard
    icons={<GithubIcon className="h-20 w-20 text-white" />}
       title="GitHub Repos"
    description="ACM - OCs"
    handleClick={()=>router.push('/recordings')}
    className="bg-[#14EC63]"/>
    <HomeCard
    icons={<BookCopy className="h-10 w-10 text-white" />}
       title="Resources"
    description="Cheat Sheets"
 handleClick={()=>router.push('/recordings')}
    className="bg-black"/>


    <MeetingModel
    isOpen={meetingState === 'isInstantMeeting' }
    onClose={()=>setMeetingState(undefined)}
    title="Start an Instant Meeting"
    className="text-center"
    buttonText="Start Meeting"
    handleClick={createMeeting}/>
</section>
  )
}

export default MeetingTypeList