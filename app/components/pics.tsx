'use client'
import Image from "next/image"
import react from '../assets/react.png'
import next from '../assets/next.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import tailwind from '../assets/tailwind.png'
import firebase from '../assets/firebase.png'
import postgres from '../assets/postgres.png'
import mysql from '../assets/mysql.png'
import expo from '../assets/expo.png'



function Pics() {
  return (
    <main className=" min-h-screen mt-10 flex flex-col">
        <div className="flex flex-row justify-center min-w-full items-center">
            <div className=" flex flex-col items-center mr-4 lg:mr-10">
                <Image className="w-8 lg:w-12" src={react} alt="react" />
                <p className="text-sm lg:text-base font-bold">ReactJS</p>
            </div>
         <div className="flex flex-col items-center mr-4 lg:mr-10">
             <Image className="w-8 lg:w-12" src={next} alt="Next" />
             <p className="text-sm lg:text-base font-bold">NextJS</p>
         </div>
         <div className="flex flex-col items-center mr-4 lg:mr-10">
              <Image className="w-8 lg:w-12" src={html} alt="html" />
              <p className="text-sm lg:text-base font-bold">HTML</p>
         </div>
         <div className="flex flex-col items-center mr-4 lg:mr-8">
              <Image className="w-8 lg:w-12" src={css} alt="CSS" />
              <p className="text-sm lg:text-base font-bold">CSS3</p>
         </div>
            <div className="flex flex-col items-center">
                <Image className="w-8 lg:w-12 mt-1" src={tailwind} alt="Tailwind" />
                <p className="text-sm mt-2 lg:text-base font-bold">TailwindCSS</p>
            </div>
        </div>
        <div className="flex flex-row justify-center min-w-full items-center mt-5">
            <div className=" flex flex-col items-center mr-4 lg:mr-10">
                <Image className="w-8 lg:w-12" src={firebase} alt="firebase" />
                <p className="text-sm lg:text-base font-bold">Firebase</p>
            </div>
            <div className=" flex flex-col items-center mr-4 lg:mr-10">
                <Image className="w-8 lg:w-12" src={postgres} alt="postgres" />
                <p className="text-sm lg:text-base font-bold">PostgreSQL</p>
            </div>
            <div className=" flex flex-col items-center mr-4 lg:mr-10">
                <Image className="w-8 lg:w-12" src={mysql} alt="mysql" />
                <p className="text-sm lg:text-base font-bold">MySQL</p>
            </div>
            <div className=" flex flex-col items-center mr-4 lg:mr-10">
                <Image className="w-7 lg:mt-2 lg:w-10" src={expo} alt="mysql" />
                <p className="text-sm lg:text-base font-bold mt-1">Expo</p>
            </div>
        </div>
        <div className=" flex items-center justify-center mt-7">
            <p className="w-3/4 lg:w-2/4 font-bold">I have 1 year of professional Front-end development Experience, and 3 years on personal project. Currently working with NextJS and PostgreSQL on a personal project. </p>
        </div>
    </main>
  )
}

export default Pics