import profile from '../../data/profile'
const NavbarLogo = () => {
  return (
    <div>
      <h1 className="hidden md:block text-slate-800 text-2xl font-special tracking-wide">
        {profile.name}
      </h1>
      <h1 className="block md:hidden text-slate-800 font-special font-semibold text-3xl">
        {profile.initials}
      </h1>
    </div>
  )
}

export default NavbarLogo
