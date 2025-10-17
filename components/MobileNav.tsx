import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import {sidebarLinks} from '@/constants/index';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react'
import Link from 'next/link'
import {cn} from '@/lib/utils';
import Image from 'next/image';

const MobileNav = () => {
      const pathname= usePathname();
    const icon={
        hamburger:Menu,
    }
  return (
    <section className='w-full max-w-[264px]  flex flex-col place-items-end place-content-center'>

   <Sheet>
  <SheetTrigger asChild className='text-black'><icon.hamburger size={30} className='cursor-pointer sm:hidden m-3.5'/></SheetTrigger>
  <SheetContent className="border-none bg-black" side='left'>
    <SheetHeader>
      <SheetTitle></SheetTitle>
     {sidebarLinks.map((link) => {
 const isActive = pathname === link.route ;
return (
    <Link
      href={link.route}
      key={link.label}
      className={cn('flex gap-4 items-center p-4 rounded-lg justify-start',{'bg-blue-600':isActive})}
    >
      
      <link.imgUrl size={20} className='text-white'/>
     {/* <Image src={link.imgUrl} alt={link.label} width={24} height={24}/> */}
     <p className='text-lg font-semibold text-white'>{link.label}</p>
    </Link>
  );
}

)}
    </SheetHeader>
  </SheetContent>
</Sheet>
    </section>
  )
}

export default MobileNav