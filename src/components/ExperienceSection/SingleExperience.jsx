const SingleExperience = ({ experience }) => {
  return (
    <article className="md:min-h-[330px] md:w-[320px] w-full border border-emerald-100 rounded-2xl mt-10 p-6 flex flex-col gap-3 bg-white shadow-sm">
      <p className="font-semibold text-emerald-700">{experience.job}</p>
      <p className="text-slate-800 font-medium">{experience.company}</p>
      <p className="text-slate-500 text-sm">{experience.duration}</p>
      <ul className="list-disc mt-2 pl-5 text-slate-600 space-y-2">
        {experience.responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  )
}

export default SingleExperience
