import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import profile from '../data/profile'
import { fadeIn } from '../framerMotion/variants'
import SectionLabel from './SectionLabel'

const About = () => {
  return (
    <section id="about" className="max-w-[1200px] mx-auto px-4 sm:px-6 py-24 grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
      <motion.div variants={fadeIn('up', 0)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
        <SectionLabel index="01" text="About" />
        <h2 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.05] text-ink">{profile.aboutHeadline}</h2>
      </motion.div>

      <motion.div variants={fadeIn('up', 0.15)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <p className="text-lg leading-relaxed text-ink/75">{profile.about}</p>
        <ul className="mt-8 grid sm:grid-cols-3 gap-3">
          {profile.highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-xl border border-ink/10 bg-white p-4 text-sm font-semibold text-ink">
              <FiCheck className="mt-0.5 shrink-0 text-accentDark" />
              {item}
            </li>
          ))}
        </ul>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-72}
          className="mt-8 inline-flex cursor-pointer items-center gap-2 font-semibold text-ink border-b-2 border-accent pb-1 hover:text-accentDark transition-colors"
        >
          Let&apos;s talk about your pipeline <FiArrowRight />
        </Link>
      </motion.div>
    </section>
  )
}

export default About
