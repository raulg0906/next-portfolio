'use client'


import { PageWrapper } from "../../page-wrapper"
import EcomCarousel from '../../components/EcomCarousel'
import Link from "next/link"


function EcomStore() {
const OPTIONS = {}
const SLIDE_COUNT = 2
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <PageWrapper>
      <main className=" min-h-screen mt-5">
      <Link className="text-SatinGold ml-5" href='/projects'>Back</Link>
        <div className="flex flex-col justify-center min-w-full items-center mt-14">
          <div className=' w-full'>
            <div className='flex flex-col items-center mt-5'>
            <h1 className='font-bold'>E-commerce Store</h1>
            <h2 className='w-3/4 mt-2 font-bold mb-5 lg:w-1/5'>Web App Responsive E-commerce store created with NextJS, Stripe, and Google auth. Still a WIP </h2>
            <section className="sandbox__carousel">
            <EcomCarousel slides={SLIDES} options={OPTIONS} />
            </section>
          </div>
          </div>
        </div>
      </main>
    </PageWrapper>
  )
}

export default EcomStore