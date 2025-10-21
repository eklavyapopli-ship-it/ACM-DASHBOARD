import React, { ReactNode } from 'react'
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import { ClerkProvider } from '@clerk/nextjs'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: "ACM SSCBS",
  description: "ACM Dashboard",
  icons:{
    icon:'/icons/logo.png'
  }
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (

        <main className=''>
            <Navbar/>
            <div className='flex'>
                
                <section className='flex min-h-screen mt-8 flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
                    <div>
                        {children}
                    </div>
                </section>
                <Sidebar/>
            </div>

        </main>
    )
}

export default HomeLayout