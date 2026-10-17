import NavbarMain from './components/Navbar/NavbarMain'
import HeroMain from './components/HeroSection/HeroMain'
import HeroGradient from './components/HeroSection/HeroGradient'
import SubHeroSection from './components/HeroSection/SubHeroSection'
import AboutMeMain from './components/AboutMeSection/AboutMeMain'
import HelperSection from './components/HelperSection'
import SkillsMain from './components/SkillsSection/SkillsMain'
import SubSkills from './components/SkillsSection/SubSkills'
import ExperienceMain from './components/ExperienceSection/ExperienceMain'
import ProjectsMain from './components/ProjectsSection/ProjectsMain'
import ContactMeMain from './components/ContactMeSection/ContactMeMain'
import FooterMain from './components/FooterSection/FooterMain'

function App() {
  return (
    <main className="font-body overflow-x-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <HelperSection />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  )
}

export default App
