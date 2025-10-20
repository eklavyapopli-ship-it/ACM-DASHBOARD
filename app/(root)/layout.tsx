
import { Metadata } from 'next';
import StreamVideoProvider from '@/Providers/StreamClientProvider'
import React, { ReactNode } from 'react'
export const metadata: Metadata = {
  title: "ACM SSCBS",
  description: "ACM Dashboard",
  icons:{
    icon:'/icons/logo.png'
  }
};

const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    
    <main>
<StreamVideoProvider>
        {children}
        
   </StreamVideoProvider>
        </main>
  )
}

export default RootLayout
// hi