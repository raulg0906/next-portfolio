import Image from "next/image"
import Link from "next/link"
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import { PageWrapper } from "../page-wrapper"

const links = [
    {src:linkedin, alt:'linkedin', href:'https://www.linkedin.com/in/raul-gonzalez-688138184/'},
    {src:github, alt:'github', href:'https://www.github.com/raulg0906'},

]


function Contact() {
  return (
    <PageWrapper>
     <main className=" min-h-screen mt-40">
            <div className="flex flex-col justify-center min-w-full items-center">
            <h1 className=" text-3xl  lg:mt-10">How to get in contact</h1>
            </div>
            <div className="flex justify-center mt-5">
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=raulgonzalez1770@gmail.com&su=&body=">Email: Raulgonzalez1770@gmail.com</Link>
            </div>
            <div className="flex flex-row justify-center mt-5">
                {links.map((l) =>(
                    <Link href={l.href}><Image src={l.src} alt={l.alt} className="w-10 mr-4" /></Link>
                ) )}
            </div>
        </main>
    </PageWrapper>
  )
}

export default Contact