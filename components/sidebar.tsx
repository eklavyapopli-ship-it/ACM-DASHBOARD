'use client'
import React from 'react';
import {sidebarLinks} from '@/constants/index';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {cn} from '@/lib/utils';
import Image from 'next/image';
import { House } from 'lucide-react';
const Sidebar = () => {
  const pathname= usePathname();
  return (
    <section className='sticky right-3 top-0 flex h-fit w-fit flex-col justify-between mt-40 p-6 text-white max-sm:hidden '>
        <div className='flex flex-col gap-6'>
{sidebarLinks.map((link) => {
 const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
return (
    <Link
      href={link.route}
      key={link.label}
      className={cn('flex gap-4 items-center p-4 rounded-lg justify-start',{'bg-blue-600':isActive})}
    >
      
      <link.imgUrl className='text-black' size={20}/>
     
     <p className='text-lg font-semibold max-lg:hidden text-black'>{link.label}</p>
    </Link>
  );
}

)}
        </div>
    </section>
  )
}

export default Sidebar