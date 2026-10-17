import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ToolsMarquee from './components/ToolsMarquee'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import WorkSamples from './components/WorkSamples'
import Credentials from './components/Credentials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main className="font-body overflow-x-hidden">
      <Navbar />
      <Hero />
      <ToolsMarquee />
      <About />
      <Skills />
      <Experience />
      <WorkSamples />
      <Credentials />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
