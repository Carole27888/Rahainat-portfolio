import HeroText from './HeroText'
import HeroPic from './HeroPic'

const HeroMain = () => {
  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-20">
      <div className="flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto items-center justify-between px-4 sm:px-6 md:px-10 gap-10">
        <HeroText />
        <HeroPic />
      </div>
    </section>
  )
}

export default HeroMain
