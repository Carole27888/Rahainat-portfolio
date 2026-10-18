import { useState } from 'react'
import { Link } from 'react-scroll'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
import profile from '../data/profile'

const links = [
  { name: 'About', section: 'about' },
  { name: 'Skills', section: 'skills' },
  { name: 'Experience', section: 'experience' },
  { name: 'Samples', section: 'samples' },
  { name: 'Credentials', section: 'credentials' },
  { name: 'Contact', section: 'contact' },
]

const scrollProps = { spy: true, smooth: true, duration: 500, offset: -72 }

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-30 bg-ink/85 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">
        <Link to="home" {...scrollProps} className="flex items-center gap-3 cursor-pointer">
          <img src={profile.logo} alt={`${profile.name} logo`} className="h-10 w-10 rounded-lg object-cover ring-1 ring-white/15" />
          <span className="hidden sm:block font-display font-bold text-lg text-cream">{profile.name}</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-sm text-cream/70">
          {links.map((link) => (
            <li key={link.section}>
              <Link
                to={link.section}
                {...scrollProps}
                activeClass="!text-accent"
                className="cursor-pointer hover:text-cream transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="book"
            {...scrollProps}
            className="hidden sm:inline-flex cursor-pointer rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink hover:bg-cream transition-colors"
          >
            Book a Call
          </Link>
          <button
            className="lg:hidden text-cream text-2xl p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className="lg:hidden border-t border-white/10 bg-ink px-4 py-4 flex flex-col gap-1">
          {[...links].map((link) => (
            <li key={link.section}>
              <Link
                to={link.section}
                {...scrollProps}
                onClick={() => setMenuOpen(false)}
                className="block cursor-pointer rounded-lg px-3 py-3 text-cream/80 hover:bg-white/5 hover:text-cream"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
