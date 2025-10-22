"use client"

import React from "react"

const page = () => {
    const handleClick=async()=>{
        let data= {
  "students": [
    {
      "id": 1,
      "name": "Eklavya Popli",
      "age": 17,
      "course": "B.Sc (Hons.) Computer Science",
      "skills": ["HTML", "CSS", "JavaScript"]
    },
    {
      "id": 2,
      "name": "Dev Sharma",
      "age": 18,
      "course": "B.Tech in AI & ML",
      "skills": ["Python", "React", "Node.js"]
    },
    {
      "id": 3,
      "name": "Aarav Singh",
      "age": 19,
      "course": "BCA",
      "skills": ["C++", "Data Structures", "DBMS"]
    }
  ]
}

        let a = await fetch('/api/create',{method:"POST", headers:{"Content-Type":"application/json",}, body: JSON.stringify(data),
        })
        let res = await a.json()
        console.log(res)
    }
  return (
    <div className='mt-10'>
        <h1 className='text-xl font-bold'>NEXT JS API ROUTE</h1>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default page;

