import { About, Experiences, Footer, Header, Navbar, Services } from '../constants/components'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Experiences />
      <Footer />
    </div>
  )
}
