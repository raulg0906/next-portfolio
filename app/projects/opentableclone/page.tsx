'use client'


import { PageWrapper } from "../../page-wrapper"
import OtCarousel from '../../components/OtCarousel'
import Link from "next/link"


function OpentableClone() {
const OPTIONS = {}
const SLIDE_COUNT = 2
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <PageWrapper>
      <main className=" min-h-screen mt-5">
      <Link className="text-SatinGold ml-5" href='/projects'>Back</Link>
        <div className="flex flex-col justify-center min-w-full items-center mt-14">
            <div className='flex flex-col items-center mt-5'>
            <h1 className='font-bold'>OpenTable</h1>
            <h2 className='w-3/4 mt-2 font-bold mb-5 lg:w-1/5'>Web app made with NextJS, PostgreSQL, TailwindCSS. Still a WIP.</h2>
            <Link className="h-10 bg-SatinGold flex items-center p-6 rounded-md mb-3" href='https://github.com/raulg0906/OpenTableClone'>Github</Link>
            <section className="sandbox__carousel w-11/12 lg:w-2/6">
            <OtCarousel slides={SLIDES} options={OPTIONS} />
            </section>
          </div>
          </div>
      </main>
    </PageWrapper>
  )
}

export default OpentableClone