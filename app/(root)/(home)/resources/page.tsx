
"use client"
import React from 'react'
import { useState , useEffect} from 'react'
import { BookCheck } from 'lucide-react'
const Resources = () => {
  interface ResourceItem {
  _id: string;
  name: string;
  link: string;
}
 const [data, setData] = useState<ResourceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/fetch");
        const json = await res.json();

        if (Array.isArray(json)) {
          setData(json);
        } else {
          console.warn("Expected array, got:", json);
          setData([]);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading data...</p>;

  return (
    <section className='mt-20'>
    <div><h1 className='text-2xl text-white font-bold  flex place-content-center place-items-center gap-10'><div ><BookCheck size={30}/></div>KSS RESOURCES</h1></div>
   
    <div className=" mt-10 grid grid-cols-2">
    

  {data.map((item)=>(
    
       <a href={item.link} className=' max-w-[400px]  ' key={item._id} target='_blank'> <div className=' md:flex place-items-center md:place-content-start  place-content-center  bg-white h-30 md:text-xl text-sm text-black font-bold max-w-[400px] rounded-2xl m-5'>
            <div className='w-20 flex place-content-center place-items-center' ><BookCheck/></div>
            <div className='w-fit flex place-items-center'>{item.name}</div>
            </div></a>
       ))}
      </div>
</section>
  )
}

export default Resources
