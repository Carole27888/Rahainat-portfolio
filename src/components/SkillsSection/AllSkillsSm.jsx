import profile from '../../data/profile'

const AllSkillsSm = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 my-12">
      {profile.skills.map((item, index) => (
        <div key={index} className="flex flex-col items-center bg-white rounded-2xl border border-emerald-100 p-4 shadow-sm">
          <item.icon className="text-4xl text-emerald-700" />
          <p className="text-center mt-3 text-sm md:text-base font-medium text-slate-700">{item.skill}</p>
        </div>
      ))}
    </div>
  )
}

export default AllSkillsSm
