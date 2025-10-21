import React from 'react'
import { GithubIcon } from 'lucide-react'
import Image from 'next/image'
const Previous = () => {
  const icons=[
    {id:1,
      name:'Jawanth',
      img:'/profiles/jaswanth.png',
      links:'https://github.com/sleeping-jazz'
    },
    {id:2,
      name:'Aman',
      img:'/profiles/aman.png',
      links:'https://github.com/am4nnn'
    },
    {id:3,
      name:'Abhinav',
      img:'/profiles/abhinav.png',
      links:'https://github.com/Abhinavo07'
    },
    {id:4,
      name:'Lokesh',
      img:'/profiles/lokesh.png',
      links:''
    },
    {id:5,
      name:'Poorvanshi',
      img:'/profiles/poorvanshi.png',
      links:'https://github.com/poorvanshirawat-debug'
    },
    {id:6,
      name:'Yogesh',
      img:'/profiles/yogesh.png',
      links:'https://github.com/remmocoss'
    },
    {id:7,
      name:'Niket Aggarwal',
      img:'/profiles/abhinav.png',
      links:'https://github.com/Niket-Aggarwal'
    },
    {id:8,
      name:'Arnav',
      img:'/profiles/jaswanth.png',
      links:'https://github.com/arnav25710'
    },
    {id:9,
      name:'Bhoomi',
      img:'/profiles/lokesh.png',
      links:'https://github.com/bhoomi2203-creator'
    },
    {id:10,
      name:'Vani',
      img:'/profiles/aman.png',
      links:'https://github.com/heyvani'
    },
    {id:11,
      name:'Joy Karmakar',
      img:'/profiles/poorvanshi.png',
      links:'https://github.com/RenItsuki'
    },
    {id:12,
      name:'Kalpana',
      img:'/profiles/poorvanshi.png',
      links:'https://github.com/kalpanachauhann'
    },
    {id:13,
      name:'Anjali',
      img:'/profiles/poorvanshi.png',
      links:'https://github.com/anjali-12784'
    },
    {id:14,
      name:'Eklavya',
      img:'/profiles/poorvanshi.png',
      links:'https://github.com/eklavyapopli-ship-it'
    },
   
  ]

  return (
     <section className='flex size-full flex-col gap-10 text-white mt-10'>
     <div className=' flex place-content-center'><img src="/GITHUB.png" alt="" className='lg:h-23 lg:w-65 h-15 w-40'  /></div>
      
      <div className=' md:gap-20 gap-10  grid md:grid-cols-5 grid-cols-2'>
        
      
      {icons.map((icon)=>{
        return(
          
         <a href={icon.links}  key={icon.id}> <div  className=' md:w-60 md:h-80 h-40 w-30 bg-black rounded-2xl place-content-start place-items-center flex flex-col '>
            <div  className=''>
            
    <img src={icon.img} alt="" className='md:h-32 md:w-32 w-10 h-10 m-10 rounded-full' /></div>
    <div className=' flex flex-col flex-1 mb-3 place-content-center'><h1 className='md:text-lg text-sm flex place-items-center'><GithubIcon className='h-5 w-5'/> {icon.name}</h1></div>
          </div></a>
        )
      })}</div>
    </section>
  )
}

export default Previous