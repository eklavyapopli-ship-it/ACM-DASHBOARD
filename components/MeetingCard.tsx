"use client";

import Image from "next/image";
import { Call } from "@stream-io/video-react-sdk";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
// import { avatarImages } from "@/constants";
import { toast} from 'sonner';
import { HomeIcon } from "lucide-react";


interface MeetingCardProps {
  description?: string; 
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
   description,
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => {


  return (
    <section className="flex min-h-[258px] w-full flex-col justify-between rounded-[14px] border m-2  bg-blue-950 px-5 py-8 xl:max-w-[568px]">
      <article className="flex flex-col gap-5">
       <HomeIcon className="w-5 h-5 text-white" />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-white">{title }</h1>
            <p className="text-base font-normal">{date}</p>
          </div>
        </div>
      </article>
      <article className={cn("flex justify-center relative", {})}>
        <div className="relative flex w-full max-sm:hidden">
         
        
        
        </div>
        {!isPreviousMeeting && (
          <div className="flex gap-2">
         
<Button onClick={handleClick} className="rounded bg-black px-6 flex items-center gap-2">
  {buttonIcon1 && <HomeIcon className="w-5 h-5 text-white" />} 
  {buttonText}
</Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast( "Link Copied");
              }}
              className="bg-black px-6"
            >
             <HomeIcon className="w-5 h-5  text-white" />
              &nbsp; Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;