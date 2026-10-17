import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <div>
      <div
        className={`flex w-full flex-col-reverse items-center gap-5 ${
          align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
        } justify-between`}
      >
        <div
          className={`flex flex-col items-center text-center gap-2 ${
            align === 'left' ? 'md:items-start md:text-left' : 'md:items-end md:text-right'
          }`}
        >
          <h3 className="text-2xl md:text-3xl text-slate-800 font-special">{name}</h3>
          <p className="text-sm uppercase tracking-wide text-emerald-700 font-semibold">{year}</p>
          <a
            href={link}
            className={`text-base flex gap-2 items-center text-emerald-700 hover:text-orange-500 transition-all duration-300 cursor-pointer ${
              align === 'left' ? 'md:justify-start' : 'md:justify-end'
            }`}
            target="_blank"
            rel="noreferrer"
          >
            View Case
            <HiArrowTopRightOnSquare />
          </a>
        </div>

        <div className="w-full max-w-full sm:max-w-[330px] md:max-w-[430px] rounded-2xl overflow-hidden hover:scale-[1.02] transform transition-all duration-300 relative border border-emerald-100 shadow-md bg-white p-2">
          <img src={image} alt={name} className="w-full h-auto max-h-[260px] object-cover rounded-xl" />
        </div>
      </div>
    </div>
  )
}

export default SingleProject
