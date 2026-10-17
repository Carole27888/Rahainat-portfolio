import { Link } from 'react-scroll'

const links = [
  { link: 'About', section: 'about' },
  { link: 'Skills', section: 'skills' },
  { link: 'Experience', section: 'experience' },
  { link: 'Projects', section: 'projects' },
  { link: 'Contact', section: 'contact' },
]

const NavbarLinks = ({ isMobile = false, onNavigate }) => {
  return (
    <ul
      className={`flex flex-col lg:flex-row gap-6 text-slate-700 text-center text-lg ${
        isMobile
          ? 'bg-white/95 border border-emerald-100 shadow-lg rounded-2xl py-4 px-4'
          : 'lg:bg-transparent lg:border-none lg:shadow-none lg:py-0 lg:px-0'
      }`}
    >
      {links.map((link, index) => (
        <li key={index} className="group">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-110}
            to={link.section}
            onClick={onNavigate}
            className="cursor-pointer hover:text-emerald-700 transition-all duration-300"
          >
            {link.link}
          </Link>
          <div className="mx-auto bg-emerald-600 w-0 group-hover:w-full h-[2px] transition-all duration-300" />
        </li>
      ))}
    </ul>
  )
}

export default NavbarLinks
