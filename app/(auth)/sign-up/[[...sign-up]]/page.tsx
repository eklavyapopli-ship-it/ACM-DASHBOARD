import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
  <main className='flex h-screen w-full items-center justify-center bg-gradient-to-br from-indigo-900 via-slate-900 to-black'>
    <SignUp/>
    </main>
  )
}

export default SignUpPage;
