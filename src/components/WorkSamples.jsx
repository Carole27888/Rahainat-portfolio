import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import profile from '../data/profile'
import { fadeIn } from '../framerMotion/variants'
import SectionLabel from './SectionLabel'

const WorkSamples = () => {
  return (
    <section id="samples" className="bg-sand">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-24">
        <motion.div variants={fadeIn('up', 0)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
          <SectionLabel index="04" text="Work Samples" />
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.05] text-ink">
            See the work in action
          </h2>
          <p className="mt-4 max-w-2xl text-ink/70 leading-relaxed">{profile.samplesIntro}</p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.samples.map(({ title, category, description, image }) => (
            <a
              key={title}
              href={image}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-cream shadow-sm hover:border-accent transition-colors"
            >
              <div className="aspect-[16/10] overflow-hidden border-b border-ink/10 bg-white">
                <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover object-top" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accentDark">{category}</p>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug text-ink">{title}</h3>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">{description}</p>
                <p className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:text-accentDark transition-colors">
                  View full size <FiArrowUpRight />
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkSamples
