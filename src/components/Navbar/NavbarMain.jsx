import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react'

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-3 inset-x-0 z-30 px-3 sm:px-4">
      <div className="relative flex justify-between w-full max-w-[1200px] mx-auto bg-white items-center p-3 sm:p-4 rounded-2xl border border-emerald-100 shadow-md">
        <NavbarLogo />
        <div className="hidden lg:block">
          <NavbarLinks />
        </div>
        <NavbarBtn className="hidden sm:flex" />
        <button
          className="text-emerald-700 text-2xl lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <RxHamburgerMenu />
        </button>

        {menuOpen && (
          <div className="absolute top-[calc(100%+0.6rem)] left-0 right-0 lg:hidden">
            <NavbarLinks isMobile={true} onNavigate={() => setMenuOpen(false)} />
            <div className="mt-3 px-2">
              <NavbarBtn className="w-full justify-center sm:hidden" />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavbarMain
