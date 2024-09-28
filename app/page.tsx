"use client"
import React, { useState } from 'react'
import { languages } from '@/languages';
import Editor  from "@monaco-editor/react";
const Home = () => {
  const [lagnuage,setLanguage] = useState("javascript");
   
  const [code,setCode] = useState(`const name = "Hello,World"`);
  return (
    <div className='flex flex-col gap-2 '>
      <div className='flex flex-col space-y-1 w-full max-w-xs px-2'>
        <label>Select Programming Language</label>
        <select className='py-1.5 rounded-md outline-none border' onChange={(e)=>setLanguage(e.target.value.toLowerCase())}>
        {languages.map((item)=>(
          <option key={item}>{item}</option>
        ))}
        </select>
      </div>
      <Editor className='h-[91vh]' language={lagnuage} value={code} onChange={(e)=>setCode(e||"")} theme='vs-dark'/>
    </div>
  )
}

export default Home