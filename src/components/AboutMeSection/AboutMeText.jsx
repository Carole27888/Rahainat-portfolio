import { Link } from 'react-scroll'

const AboutMeText = () => {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left bg-white border border-emerald-100 rounded-3xl p-8 shadow-sm">
      <h2 className="text-4xl md:text-5xl text-slate-800 mb-6 font-special">About Abigael</h2>
      <p className="text-slate-600 leading-8">
        Abigael Ngotho is a reliable and detail-oriented virtual assistant who supports entrepreneurs, startups, and busy professionals with day-to-day operations. She specializes in managing inboxes, calendars, scheduling, documentation, and client follow-ups to keep workflows organized and deadlines on track. With a strong sense of ownership and clear communication style, Abigael helps teams reduce admin pressure, improve response times, and stay focused on high-impact work.
      </p>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
        offset={-110}
        className="mt-8 border border-emerald-700 rounded-xl py-3 px-5 text-base font-semibold text-emerald-800 hover:bg-emerald-50 transition-all duration-300 cursor-pointer"
      >
        Explore Services
      </Link>
    </div>
  )
}

export default AboutMeText
