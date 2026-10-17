import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiArrowRight, FiBriefcase } from 'react-icons/fi'
import profile from '../data/profile'
import { fadeIn } from '../framerMotion/variants'

const Hero = () => {
  const [firstName, ...rest] = profile.name.split(' ')
  const badgeStat = profile.stats[0]

  return (
    <section id="home" className="relative overflow-hidden bg-ink text-cream">
      <div className="absolute inset-0 bg-grid opacity-[0.05]" aria-hidden="true" />
      <div className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 pt-32 pb-16 lg:pt-40 lg:pb-24 grid lg:grid-cols-[1.3fr_1fr] gap-14 items-center">
        <motion.div variants={fadeIn('up', 0.1)} initial="hidden" animate="show">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-cream/80">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-mint opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-mint" />
            </span>
            {profile.availability}
          </p>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight">
            {firstName}
            <br />
            <span className="text-accent">{rest.join(' ')}</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl font-semibold text-cream">{profile.role}</p>
          <p className="mt-4 max-w-xl text-cream/65 leading-relaxed">{profile.heroText}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-72}
              className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-ink hover:bg-cream transition-colors"
            >
              Book a Call <FiArrowRight />
            </Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              offset={-72}
              className="cursor-pointer inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 font-semibold text-cream hover:border-cream transition-colors"
            >
              See My Track Record
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          animate="show"
          className="relative mx-auto w-full max-w-[340px]"
        >
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] border-2 border-accent" aria-hidden="true" />
          <img
            src={profile.photo}
            alt={profile.name}
            className="relative aspect-[4/5] w-full rounded-[28px] object-cover bg-navy"
          />
          <div className="absolute left-3 sm:-left-8 -bottom-12 flex items-center gap-3 rounded-2xl bg-cream px-4 py-3 text-ink shadow-2xl">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-ink">
              <FiBriefcase />
            </span>
            <div>
              <p className="font-display text-2xl font-extrabold leading-none">{badgeStat.value}</p>
              <p className="text-xs text-ink/60">{badgeStat.label}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative border-t border-white/10">
        <dl className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="bg-ink px-4 sm:px-6 py-7">
              <dd className="font-display text-3xl sm:text-4xl font-extrabold text-accent">{stat.value}</dd>
              <dt className="mt-1 text-sm text-cream/60">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Hero
