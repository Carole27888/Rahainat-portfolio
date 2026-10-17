import { Link } from 'react-scroll'

const FooterMain = () => {
  const footerLinks = [
    { name: 'About', section: 'about' },
    { name: 'Skills', section: 'skills' },
    { name: 'Experience', section: 'experience' },
    { name: 'Projects', section: 'projects' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="px-4 sm:px-6 md:px-8">
      <div className="w-full h-[1px] bg-emerald-100 mt-24" />
      <div className="hidden md:flex justify-between mt-6 max-w-[1200px] mx-auto items-center">
        <p className="text-2xl text-slate-800 font-special">Abigael Ngotho</p>
        <ul className="flex gap-5 text-slate-600 text-base">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-110}
                to={item.section}
                className="hover:text-emerald-700 transition-all duration-300 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden max-w-[1200px] mx-auto mt-6">
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-slate-600 text-sm">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-110}
                to={item.section}
                className="hover:text-emerald-700 transition-all duration-300 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-center md:text-right mt-4 mb-12 text-sm text-slate-500">
        © {currentYear} Abigael Ngotho | All Rights Reserved.
      </p>
    </footer>
  )
}

export default FooterMain
