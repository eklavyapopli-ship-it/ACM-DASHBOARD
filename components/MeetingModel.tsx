import React, { ReactNode } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,

} from "@/components/ui/dialog"
import { Button } from './ui/button';
import HomeCard from './HomeCard';


interface MeetingModelProps{
    isOpen:boolean;
    onClose:()=>void;
    title:string;
    className:string;
    children?:ReactNode;
    handleClick?:()=>void;
    buttonIcon?:string;
    buttonText:string;
}

const MeetingModel = ({isOpen,onClose,title,className,children,handleClick,buttonText,buttonIcon}:MeetingModelProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
<DialogTitle></DialogTitle>
  <DialogContent className='flex w-full max-w-[520px] flex-col gap-6 border-none bg-blue-600 px-6 py-9 text-white'>
    <div className='flex flex-col gap-6'>
     <h1 className='text-2xl text-center'>{title}</h1>
    <Button className='bg-black focus-visible:ring-0 focus-visible:ring-offset-0' onClick={handleClick}>
        {buttonText||'Schedule Meeting'}
    </Button>
    </div>
  </DialogContent>
</Dialog>
  )
}

export default MeetingModel