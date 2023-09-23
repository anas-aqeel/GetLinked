import Navbar from '@/UI/components/Navbar'
import Criteria from '@/UI/sections/Criteria'
import FAQ from '@/UI/sections/FAQ'
import Footer from '@/UI/sections/Footer'
import Header from '@/UI/sections/Header'
import Intro from '@/UI/sections/Intro'
import Partners from '@/UI/sections/Partners'
import Privacy from '@/UI/sections/Privacy'
import Prizes from '@/UI/sections/Prizes'
import Rules from '@/UI/sections/Rules'
import Timeline from '@/UI/sections/Timeline'

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Intro />
      <Rules />
      <Criteria />
      <FAQ />
      <Timeline />
      <Prizes />
      <Partners />
      <Privacy />
      <Footer />
    </>
  )
}
