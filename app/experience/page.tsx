'use client'

import Pics from "../components/pics"
import { PageWrapper } from "../page-wrapper"

function Experience() {
  return (
    <PageWrapper>
      <main className=" min-h-screen mt-40">
        <div className="flex flex-col justify-center min-w-full items-center">
          <h1 className=" text-3xl  lg:mt-10">My Experience</h1>
          <Pics />
        </div>
      </main>
    </PageWrapper>
  )
}

export default Experience