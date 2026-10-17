import { Link } from 'react-scroll'
import { FiArrowUp } from 'react-icons/fi'
import profile from '../data/profile'

const Footer = () => {
  return (
    <footer className="bg-ink text-cream/60">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p>
          © {new Date().getFullYear()} <span className="text-cream">{profile.name}</span>. All rights reserved.
        </p>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="inline-flex cursor-pointer items-center gap-2 hover:text-accent transition-colors"
        >
          Back to top <FiArrowUp />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
