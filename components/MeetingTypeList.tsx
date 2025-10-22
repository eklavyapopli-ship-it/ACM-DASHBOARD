"use client"
import ReactDatePicker from 'react-datepicker'
import { Textarea } from './ui/textarea';
import React, { use } from 'react'
import { useState } from 'react';
import HomeCard from './HomeCard';
import { useRouter } from 'next/navigation';
import {Calendar1 , Video, Plus, Contact, Github, GithubIcon, MessageSquare, BookCopy, LibraryBig} from 'lucide-react';
import MeetingModel from './MeetingModel';
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';

import { toast, Toaster, useSonner } from "sonner";

const MeetingTypeList = () => {
const router=useRouter();

 const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()
const {user} = useUser();
const client = useStreamVideoClient();
const [values,setValues]=useState({
   dateTime: new Date(),
   description: '',
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
const description =values.description || 'Instant meeting';

   await call.getOrCreate({
   data:{
      starts_at:startsAt,
      custom:{
          description: values.description || "Instant meeting",
      }
   }
})
setCallDetails(call);
if(!values.description){
   router.push(`/meeting/${call.id}`)
} toast("Meeting Created", {
  description: "",
});
    } catch (error){
      console.log(error);
  

    }
 }

  return (
<section className='grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4 '>
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
<a href="https://acm-chatroom.vercel.app">
    <HomeCard
    icons={<MessageSquare className="h-10 w-10 text-white" />}
       title="Chat Room"
    description="Connect to Connect"
 handleClick={()=>{}}
    className="bg-[#A814EC]"/></a>
    <HomeCard
    icons={<GithubIcon className="h-20 w-20 text-white" />}
       title="GitHub Repos"
    description="ACM - OCs"
    handleClick={()=>router.push('/github')}
    className="bg-[#000000]"/>
    <HomeCard
    icons={<BookCopy className="h-10 w-10 text-white" />}
       title="Resources"
    description="Cheat Sheets"
 handleClick={()=>router.push('/resources')}
    className="bg-[#1c1c41]"/>



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