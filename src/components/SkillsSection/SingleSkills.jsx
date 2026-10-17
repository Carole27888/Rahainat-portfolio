const SingleSkills = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-1 transition-all duration-300">
      <div className="flex flex-col items-center gap-3 relative bg-white rounded-2xl border border-emerald-100 shadow-sm px-3 py-5 h-full">
        <div className="bg-emerald-50 text-emerald-700 h-[82px] w-[82px] flex items-center justify-center rounded-xl hover:scale-105 transform transition-all duration-300 text-4xl border border-emerald-100">
          {imgSvg}
        </div>
        <p className="text-slate-700 font-semibold text-center text-sm leading-5">{text}</p>
      </div>
    </div>
  )
}

export default SingleSkills
