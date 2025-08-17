import { About, Experiences, Header, Navbar, Services } from '../constants/components'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Experiences />
    </div>
  )
}
