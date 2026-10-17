import AboutMeImage from './AboutMePic'
import AboutMeText from './AboutMeText'

const AboutMeMain = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row gap-12 px-4 max-w-[1200px] mx-auto mt-20 justify-between items-center"
    >
      <AboutMeText />
      <AboutMeImage />
    </section>
  )
}

export default AboutMeMain
