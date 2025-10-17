'use client';
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import Meeting from "../meeting/[id]/page";
import MeetingTypeList from "@/components/MeetingTypeList";
import HomeCard from "@/components/HomeCard";
import { Plus, LibraryBig, LoaderPinwheel } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCall } from "@stream-io/video-react-sdk";

const Home = () => {

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
const router = useRouter();
  if (!isLoaded) return null;

  return (
    <main className="px-4 md:px-8 lg:px-16">
      {/* Top Section */}
      <section className="md:flex flex-col lg:flex-row size-full gap-8 text-white mt-8">
        <div
          className="h-[400px] md:h-[500px] w-full rounded-[20px] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/icons/laptop.jpg')] bg-cover bg-center flex items-center">
          <div className="mt-28 md:mt-0 ml-6 md:ml-20 font-bold text-4xl md:text-6xl flex flex-col  ">
            <div className="">{greeting} {user?.firstName || user?.fullName || "there"}</div>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col gap-4 -mt-10 justify-start md:justify-center">
       <HomeCard
    title="Knowledge Sharing Sessions"
   icons={<LibraryBig className="h-10 w-10 text-white" />}
    description="Schedule"
handleClick={()=>(router.push('/'))}
    className="bg-blue-600 w-2xs "
    />
            <HomeCard
    title="Knowledge Sharing Sessions"
   icons={<LoaderPinwheel className="h-10 w-10 text-white" />}
    description="My Progress"
handleClick={()=>router.push('/')}
    className="bg-[#EC14AB]"
    />
        </div>
      </section>

      {/* Bottom Section */}
  <MeetingTypeList/>
    </main>
  );
};

export default Home;
