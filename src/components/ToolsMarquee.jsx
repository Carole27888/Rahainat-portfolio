import profile from '../data/profile'

const ToolsMarquee = () => {
  return (
    <div className="bg-accent text-ink py-6" aria-label="Tools I use">
      <ul className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {profile.tools.map((tool) => (
          <li key={tool.name} className="flex items-center gap-2 whitespace-nowrap font-display text-lg font-bold">
            <tool.icon className="text-xl" />
            {tool.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToolsMarquee
