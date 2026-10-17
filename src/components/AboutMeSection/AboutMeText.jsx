import profile from '../../data/profile'
import { Link } from 'react-scroll'

const AboutMeText = () => {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left bg-white border border-emerald-100 rounded-3xl p-8 shadow-sm">
      <h2 className="text-4xl md:text-5xl text-slate-800 mb-6 font-special">About {profile.name.split(' ')[0]}</h2>
      <p className="text-slate-600 leading-8">
        {profile.about}
      </p>
      <Link
        to="credentials"
        spy={true}
        smooth={true}
        duration={500}
        offset={-110}
        className="mt-8 border border-emerald-700 rounded-xl py-3 px-5 text-base font-semibold text-emerald-800 hover:bg-emerald-50 transition-all duration-300 cursor-pointer"
      >
        View Credentials
      </Link>
    </div>
  )
}

export default AboutMeText
