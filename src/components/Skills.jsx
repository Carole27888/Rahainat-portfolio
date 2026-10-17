import { motion } from 'framer-motion'
import profile from '../data/profile'
import { fadeIn } from '../framerMotion/variants'
import SectionLabel from './SectionLabel'

const Skills = () => {
  return (
    <section id="skills" className="bg-sand">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-24">
        <motion.div
          variants={fadeIn('up', 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="grid lg:grid-cols-2 gap-6 lg:items-end"
        >
          <div>
            <SectionLabel index="02" text="Skills" />
            <h2 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.05] text-ink">
              What I bring to your team
            </h2>
          </div>
          <p className="text-ink/70 leading-relaxed lg:max-w-md lg:justify-self-end">{profile.skillsIntro}</p>
        </motion.div>

        <ol className="mt-14 grid sm:grid-cols-2 gap-x-12 border-t border-ink/15">
          {profile.skills.map((item, index) => (
            <li key={item.skill} className="group flex items-center gap-5 border-b border-ink/15 py-5">
              <span className="w-8 font-display text-sm font-bold text-ink/35">{String(index + 1).padStart(2, '0')}</span>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink text-accent text-xl transition-transform group-hover:-rotate-6">
                <item.icon />
              </span>
              <span className="font-semibold text-ink">{item.skill}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Skills
