import profile from '../../data/profile'

const SubSkills = () => {
  return (
    <div className="mt-20 border-y border-emerald-100 relative overflow-hidden py-10">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-white to-orange-50" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        <p className="text-slate-600 text-center tracking-[0.18em] uppercase text-xs md:text-sm font-semibold mb-5">
          Tools I Use
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {profile.tools.map((tool) => (
            <span
              key={tool.name}
              className="px-4 py-2 rounded-full bg-white border border-emerald-100 text-slate-700 text-sm shadow-sm inline-flex items-center gap-2"
            >
              <tool.icon className="text-emerald-700 text-base" />
              {tool.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SubSkills
