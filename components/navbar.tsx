'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from './MobileNav'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
const navbar = () => {
  return (
    <main className=' fixed bg-white/60 z-50 shadow-2xl'>
    <nav className=' z-50 w-screen top-0  px-6 py-4 lg:px-10 flex  justify-between'>
      <Link href="/" className='flex items-center gap-1'>
      <Image src="/icons/logo.png" width={100} height={100} alt='logo' className='object-cover max-sm:size-30 '/>
<p className='text-[26px] text-black max-sm:hidden font-bold'> ACM SSCBS</p>
      </Link>
      <div className='flex flex-col place-items-center place-content-center'>
 
          
          <UserButton/>
    <MobileNav/>
    
      </div>
    </nav>
  
   </main>
  )
}

export default navbar