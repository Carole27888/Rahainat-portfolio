const AboutMeImage = () => {
  return (
    <div className="relative w-full max-w-[320px] h-[390px] sm:h-[450px] md:h-[500px] mx-auto">
      <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-xl">
        <img
          src="/images/Abbie1.jpeg"
          alt="Abigael at work"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-full w-[85%] bg-gradient-to-b from-orange-300 to-orange-200 absolute bottom-[-20px] left-[-18px] rounded-[2.5rem] -z-10" />
    </div>
  )
}

export default AboutMeImage
