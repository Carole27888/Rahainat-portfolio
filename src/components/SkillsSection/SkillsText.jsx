import profile from '../../data/profile'
const SkillsText = () => {
  return (
    <div className="flex flex-col items-center mt-14">
      <h2 className="text-4xl md:text-5xl text-slate-800 mb-6 font-special text-center">Core Strengths</h2>
      <p className="text-base md:text-lg text-center text-slate-600 max-w-3xl">
        {profile.skillsIntro}
      </p>
    </div>
  )
}

export default SkillsText
