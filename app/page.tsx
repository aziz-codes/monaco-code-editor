"use client"
import React, { useState } from 'react'
import { languages } from '@/languages';
import Editor  from "@monaco-editor/react";
const Home = () => {
  const [lagnuage,setLanguage] = useState("javascript");
   
  const [code,setCode] = useState(`const name = "Hello,World"`);
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-col space-y-1'>
        <label>Select Programming Language {lagnuage}</label>
        <select onChange={(e)=>setLanguage(e.target.value.toLowerCase())}>
        {languages.map((item)=>(
          <option key={item}>{item}</option>
        ))}
        </select>
      </div>
      <Editor className=' h-[90vh]'  language={lagnuage} value={code} onChange={(e)=>setCode(e||"")}/>
    </div>
  )
}

export default Home