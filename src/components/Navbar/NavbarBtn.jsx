import { FiArrowDownRight } from 'react-icons/fi'
import { Link } from 'react-scroll'

const NavbarBtn = ({ className = '' }) => {
  return (
    <Link
      to="contact"
      spy={true}
      smooth={true}
      duration={500}
      offset={-110}
      className={`px-4 py-2 rounded-full text-sm md:text-base font-semibold text-white flex items-center gap-2 bg-gradient-to-r from-emerald-700 to-teal-500 hover:scale-105 transition-all duration-300 cursor-pointer ${className}`}
    >
      Hire Me
      <FiArrowDownRight />
    </Link>
  )
}

export default NavbarBtn
