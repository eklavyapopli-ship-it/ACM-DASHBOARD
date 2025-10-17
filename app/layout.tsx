import type { Metadata } from "next";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { SignIn } from "@clerk/nextjs";
import { Toaster,toast } from "sonner";
import 'react-datepicker/dist/react-datepicker.css'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACM SSCBS",
  description: "ACM Dashboard",
  icons:{
    icon:'/icons/logo.png'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
       

      <html lang="en">
        <body>   <Toaster/>{children}
          
        </body>
        
      </html>
    </ClerkProvider>
  )
}

