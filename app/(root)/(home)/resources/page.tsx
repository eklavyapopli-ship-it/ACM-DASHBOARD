
"use client"
import React from 'react'
import { useState , useEffect} from 'react'
import { BookCheck } from 'lucide-react'
const Resources = () => {
  interface ResourseItem{
id: number;
  name: string;
  link:string;
  }
    const [data, setData] = useState<ResourseItem[]>([]) 
    const GettingData= async()=>{
        const a = await fetch ("/api/fetch", {method:"GET", headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },})
        const res = await a.json()
        
        setData(res)
    }
   useEffect(()=>{
    GettingData()
   },[])
   
  return (
    <section className='mt-20'>
    <div><h1 className='text-2xl text-white font-bold  flex place-content-center place-items-center gap-10'><div ><BookCheck size={30}/></div>KSS RESOURCES</h1></div>
   
    <div className=" mt-10 grid grid-cols-2">
    

  {data.map((item)=>(
    
        <div key={item.id} className=' flex gap-1 bg-white h-30 text-xl text-black font-bold max-w-[500px] rounded-2xl m-5'>
            <div className='w-20 flex place-content-center place-items-center' ><BookCheck/></div>
            <div className='w-fit flex place-items-center'>{item.name}</div>
            </div>
       ))}
      </div>
</section>
  )
}

export default Resources
