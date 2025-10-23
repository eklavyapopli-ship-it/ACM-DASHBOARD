import React, { ReactNode } from 'react'
import { House ,Calendar1 , CircleArrowLeft, Video, Plus, Contact} from 'lucide-react';
import { cn } from '@/lib/utils';
interface HomeCardProps{
    icons?:ReactNode,
    className:string;
    title:string;
    description:string;
    handleClick:()=>void;
}

const HomeCard = ({icons,className,title,description,handleClick}:HomeCardProps) => {
  
  return (
    
<div className={cn('  mt-10 px-3 sm:px-4 py-6 flex flex-col justify-between w-full xl:w-[300px] min-h-[220px]  rounded-[14px] cursor-pointer',className)} onClick={handleClick}>
        <div className='flex place-content-center place-items-center size-10 rounded-[10px]'>{icons}
            
        </div>
        <div className='flex flex-col gap-2 text-white'>
<h1 className='text-2xl font-bold '>{title}</h1>
<p className=''>{description}</p>
        </div>
    </div>
  )
}

export default HomeCard