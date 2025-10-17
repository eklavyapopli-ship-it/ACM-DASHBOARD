'use client';
import React, { useState,useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import Meeting from "../meeting/[id]/page";
import MeetingTypeList from "@/components/MeetingTypeList";
import HomeCard from "@/components/HomeCard";
import { Plus, LibraryBig, LoaderPinwheel } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCall } from "@stream-io/video-react-sdk";

import ReactDatePicker from 'react-datepicker'
import { Textarea } from "@/components/ui/textarea";



import {Calendar1 , Video,  Contact, Github, GithubIcon, MessageSquare, BookCopy} from 'lucide-react';
import MeetingModel from "@/components/MeetingModel";

import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';

import { toast, Toaster, useSonner } from "sonner";


const Home = () => {
const router=useRouter();

 const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()

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
          creatorId: user.id,
      }
   }
});



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
 const meetingLink=`${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`
  const now = new Date();
  const hour = now.getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  const { user, isLoaded } = useUser();

  if (!isLoaded) return null;

  return (
    <main className="px-4 md:px-8 lg:px-16">
      {/* Top Section */}
      <section className="md:flex flex-col lg:flex-row size-full gap-3 text-white mt-8  flex  ">
        <div
          className="h-[400px] md:h-[500px] w-full rounded-[20px] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/icons/laptop.jpg')] bg-cover bg-center flex items-center">
          <div className="mt-20 md:mt-0 ml-6 md:ml-20 font-bold text-4xl md:text-6xl flex flex-col  ">
            <div className="">{greeting} {user?.firstName || user?.fullName || "there"}</div>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col gap-4 lg:-mt-10 justify-start md:justify-center ">
       <HomeCard
    title="Knowledge Sharing Sessions"
   icons={<LibraryBig className="h-10 w-10 text-white" />}
    description="Schedule"
handleClick={()=>setMeetingState('isScheduleMeeting')}
    className="bg-blue-600 "
    />
            <HomeCard
    title="Knowledge Sharing Sessions"
   icons={<LoaderPinwheel className="h-10 w-10 text-white" />}
    description="My Progress"
handleClick={()=>{}}
    className="bg-[#EC14AB]"
    />
        </div>
        {!callDetails ? (
   <MeetingModel
    isOpen={meetingState === 'isScheduleMeeting' }
    onClose={()=>setMeetingState(undefined)}
    title="Create Meeting"
    
    buttonText=''
    className=''
    handleClick={createMeeting} >
      <div className='flex flex-col gap-2.5'>
         <label className='text-base text-normal leading-[22px]'>Add a description</label>
         <Textarea className='border-none bg-black/80 focus-visible:ring-0 focus-visible-ring-offset-0' onChange={(e)=>{
            setValues({...values,description:e.target.value})
         }}/>
      </div>
      <div className='w-full flex flex-col gap-2.5'>
          <label className='text-base text-normal leading-[22px]'>Add a description</label>
          <ReactDatePicker
          selected={values.dateTime}
          onChange={(date)=>setValues({...values, dateTime:date!})}
          showTimeSelect
          timeFormat='HH:mm'
          timeIntervals={15}
          timeCaption='time'
          dateFormat="MMM d, yyyy h:mm aa"
          className='w-full rounded bg-black/80 p-2 focus:outline-none'/>
      </div>
    </MeetingModel>
):<MeetingModel
    isOpen={meetingState === 'isScheduleMeeting' }
    onClose={()=>setMeetingState(undefined)}
    title={values.description || "Untitled Meeting"}
   
    className="text-center"
    buttonText="Copy Meeting Link"
    handleClick={()=>{
      navigator.clipboard.writeText(meetingLink);
      toast("meeting link copied")
    }}
    />}
      </section>

      {/* Bottom Section */}
  <MeetingTypeList/>
    </main>
  );
};

export default Home;
