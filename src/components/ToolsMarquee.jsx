import profile from '../data/profile'

const ToolsMarquee = () => {
  // The list is rendered twice so the -50% scroll loops seamlessly.
  const loop = [...profile.tools, ...profile.tools]

  return (
    <div className="bg-accent text-ink overflow-hidden py-4" aria-label="Tools I use">
      <ul className="flex w-max items-center gap-10 animate-marquee motion-reduce:animate-none">
        {loop.map((tool, index) => (
          <li
            key={index}
            aria-hidden={index >= profile.tools.length}
            className="flex items-center gap-2 whitespace-nowrap font-display text-lg font-bold"
          >
            <tool.icon className="text-xl" />
            {tool.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToolsMarquee
