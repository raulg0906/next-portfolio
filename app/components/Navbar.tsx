'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'


const links = [
  {href:'/', text:'About'},
  {href:'/experience', text:'Experience'},
  {href:'/projects', text:'Projects'},
  {href:'/contact', text:'Contact'}
]


function Navbar() {
  const path = usePathname();
  return (
    <main className="bg-SatinGold p-2 max-w-screen m-auto">
    <nav className="text-base flex justify-between">
   <Link href="/" className="font-bold text-Ivory lg:text-2xl">RG</Link>
   <div>
    <div className="flex">
    {links.map((l) => (
        <Link href={l.href} className={`${l.href === path ? "font-bold text-Night opacity-80" : ""} lg:text-xl mr-3`}>{l.text}</Link>
      ))}
    </div>
   </div>
   </nav>
   </main>
  
  )
}

export default Navbar



"font-bold lg:text-xl mr-3"
{/* <nav className="text-base">
    <ul className="m-0 h-14 bg-SatinGold sm:flex sm:flex-row">
      <li className="mt-3 absolute ml-2"><a className="">RG</a>
      </li>
      <li className="mt-3 sm:absolute sm:right-2 2xl:float-right"><a className="">Resume</a>
      </li>
      <li className="mt-3 sm:absolute sm:right-20 lg:float-right"><a className="">Contact</a>
      </li>
      <li className="mt-3 sm:absolute sm:left-40"><a className="">Experience</a>
      </li>
      <li className="mt-3 absolute left-24"><a className="">About</a>
      </li>
    </ul>
  </nav> */}