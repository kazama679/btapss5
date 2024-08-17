"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Home() {
  const router = useRouter();
  const loginUser=()=>{
    router.push("/auth/login"); 
  }
  return (
    <div>
      Home
      <button onClick={loginUser}>login</button>
      <button>register</button>
    </div>
  )
}
