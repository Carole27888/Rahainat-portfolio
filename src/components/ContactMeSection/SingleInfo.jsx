const SingleInfo = ({ label, text, Image, href }) => {
  return (
    <div className="flex gap-4 items-center justify-start">
      <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
        <Image className="text-xl text-emerald-700" />
      </div>
      <div className="flex flex-col leading-tight">
        {label && <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>}
        {href ? (
          <a className="text-slate-700 hover:underline hover:text-emerald-700" href={href} target="_blank" rel="noreferrer">
            {text}
          </a>
        ) : (
          <p className="text-slate-700">{text}</p>
        )}
      </div>
    </div>
  )
}

export default SingleInfo
