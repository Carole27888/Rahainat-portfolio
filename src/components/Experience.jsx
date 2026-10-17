import { motion } from 'framer-motion'
import profile from '../data/profile'
import { fadeIn } from '../framerMotion/variants'
import SectionLabel from './SectionLabel'

const Dates = ({ experience, className = '' }) => (
  <div className={className}>
    <p className="font-semibold text-ink">{experience.duration}</p>
    <p className="text-sm text-ink/55">{experience.location}</p>
  </div>
)

const Experience = () => {
  return (
    <section id="experience" className="max-w-[1200px] mx-auto px-4 sm:px-6 py-24">
      <motion.div variants={fadeIn('up', 0)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
        <SectionLabel index="03" text="Experience" />
        <h2 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.05] text-ink">Track record</h2>
        <p className="mt-4 max-w-2xl text-ink/70 leading-relaxed">{profile.experienceIntro}</p>
      </motion.div>

      <ol className="mt-14">
        {profile.experiences.map((experience, index) => {
          const isCurrent = experience.duration.includes('Present')
          const isLast = index === profile.experiences.length - 1

          return (
            <motion.li
              key={`${experience.company}-${experience.job}`}
              variants={fadeIn('up', 0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid sm:grid-cols-[210px_1fr] sm:gap-8"
            >
              <Dates experience={experience} className="hidden sm:block text-right pt-0.5" />

              <div className={`relative pl-8 ${isLast ? 'pb-0' : 'pb-12'}`}>
                <span className={`absolute left-[7px] top-2 bottom-0 w-0.5 bg-ink/10 ${isLast ? 'hidden' : ''}`} aria-hidden="true" />
                <span className="absolute left-0 top-1 h-4 w-4 rounded-full bg-accent ring-4 ring-cream" aria-hidden="true" />

                <Dates experience={experience} className="sm:hidden mb-2" />
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-2xl font-bold text-ink">{experience.job}</h3>
                  {isCurrent && (
                    <span className="rounded-full bg-mint/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">Current</span>
                  )}
                </div>
                <p className="mt-1 font-semibold text-accentDark">{experience.company}</p>
                <ul className="mt-4 space-y-2.5 text-ink/75">
                  {experience.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink/40" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          )
        })}
      </ol>
    </section>
  )
}

export default Experience
