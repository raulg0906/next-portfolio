

import { PageWrapper } from './page-wrapper'
import Myinfo from "./components/Myinfo";


export default function Home() {
  return (
    <main>
      <PageWrapper>
      <div className="flex min-h-screen w-screen flex-row justify-center">
      <Myinfo />
      </div>
      </PageWrapper>
    </main>
  )
}
