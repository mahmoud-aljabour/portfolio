import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Expertise from './components/Expertise'
import Process from './components/Process'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WhyMe from './components/WhyMe'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <Expertise />
        <Projects />
        <WhyMe />
        <Process />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
