import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'
import profile from '../data/profile'
import { fadeIn } from '../framerMotion/variants'
import SectionLabel from './SectionLabel'

const Credentials = () => {
  const items = [
    ...profile.education.map((item) => ({ ...item, type: 'Education', Icon: FaGraduationCap })),
    ...profile.certifications.map((item) => ({ ...item, type: 'Certification', Icon: TbCertificate })),
  ]

  return (
    <section id="credentials" className="bg-ink text-cream">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-24">
        <motion.div variants={fadeIn('up', 0)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
          <SectionLabel index="05" text="Credentials" dark />
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.05]">Education & Certifications</h2>
          <p className="mt-4 max-w-2xl text-cream/65 leading-relaxed">{profile.credentialsIntro}</p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ title, issuer, year, image, type, Icon }, index) => (
            <motion.div
              key={title}
              variants={fadeIn('up', 0.1 * index)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:border-accent/60 transition-colors"
            >
              <Icon className="text-3xl text-accent" />
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">{type}</p>
              <p className="mt-2 font-display text-lg font-bold leading-snug">{title}</p>
              {(issuer || year) && (
                <p className="mt-auto pt-4 text-sm text-cream/60">{[issuer, year].filter(Boolean).join(' · ')}</p>
              )}
              {image && (
                <a
                  href={image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm font-semibold text-accent hover:text-accentDark transition-colors"
                >
                  View certificate →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Credentials
