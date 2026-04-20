import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Membership from './components/Membership'
import Trainers from './components/Trainers'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Membership />
        <Trainers />
        <Gallery />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
