import React from 'react'
import Image from 'next/image'
const Loader = () => {
  return (
    <div className='flex-center h-screen w-full'>
        <Image src="/load.png" alt='' width={20} height={20}/>
    </div>
  )
}

export default Loader