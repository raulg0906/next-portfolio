'use client'


import Link from "next/link"
import { PageWrapper } from "../page-wrapper"


function OpentableClone() {

  return (
    <PageWrapper>
      <main className=" min-h-screen mt-40">
        <div className="flex flex-col justify-center min-w-full items-center">
           <Link className="h-16 bg-SatinGold flex items-center rounded-md p-3 mb-3" href='/projects/opentableclone'> Open Table Clone </Link>
           <Link className="h-10 bg-SatinGold flex items-center rounded-md p-8 mb-3" href='/projects/nftmarket'> NFT market </Link>
           <Link className="h-10 bg-SatinGold flex items-center rounded-md p-8 mb-3" href='/projects/ecomstore'> E-com Store </Link>
          </div>
      </main>
    </PageWrapper>
  )
}

export default OpentableClone