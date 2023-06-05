'use client'


import { PageWrapper } from "../../page-wrapper"
import Carousel from '../../components/Carousel'
import Link from "next/link"


function NftMarket() {
const OPTIONS = {}
const SLIDE_COUNT = 2
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <PageWrapper>
      <main className=" min-h-screen mt-5 ">
      <Link className="text-SatinGold ml-5" href='/projects'>Back</Link>
        <div className="flex flex-col justify-center min-w-full items-center mt-14">
          <div className=' w-full'>
            <div className='flex flex-col items-center mt-5'>
            <h1 className='font-bold'>NFT Market</h1>
            <h2 className='w-3/4 mt-2 font-bold mb-5 lg:w-1/4'>App created with React native and Expo, creating a marketpalce to auction NFT's. Features include profiles, likes, placing a bid and more.</h2>
            <Link className="h-10 bg-SatinGold flex items-center p-6 rounded-md mb-3" href='https://github.com/raulg0906/nftMarket'>Github</Link>
            <section className="sandbox__carousel">
            <Carousel slides={SLIDES} options={OPTIONS} />
            </section>
          </div>
          </div>
        </div>
      </main>
    </PageWrapper>
  )
}

export default NftMarket