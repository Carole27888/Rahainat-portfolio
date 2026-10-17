const SectionLabel = ({ index, text, dark = false }) => {
  return (
    <p className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] ${dark ? 'text-accent' : 'text-accentDark'}`}>
      <span>{index}</span>
      <span className={`h-px w-10 ${dark ? 'bg-accent/60' : 'bg-accentDark/60'}`} />
      <span>{text}</span>
    </p>
  )
}

export default SectionLabel
