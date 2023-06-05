'use client'

import Image from "next/image"
import profilepic from '../assets/profilepic.png'


function Myinfo() {
  return (
    <main className=" min-h-screen mt-20">
        <div className="flex flex-col justify-center min-w-full items-center">
        <h1 className=" text-3xl mb-10 lg:mt-10">Raul Gonzalez</h1>
        <h1 className=" text-3xl mb-10">Full Stack Developer</h1>
        </div>
        <div className="flex flex-col justify-center min-w-full items-center">
        <Image className=" rounded-full w-3/4 lg:w-1/6 md:w-1/4" src={profilepic} alt="Profile Pic" />
        <p className="mt-7 font-bold text-lg w-3/4 lg:w-1/4 mb-28">Hello, My name is Raul Gonzalez and I am a full stack engineer. I have about 1 year work experience and about 3 years with projects. When I am not Coding, I enjoy spending time with my family and playing video games! </p>
        </div>
    </main>
  )
}

export default Myinfo