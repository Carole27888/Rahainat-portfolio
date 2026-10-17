import AllExperience from './AllExperience'
import ExperienceText from './ExperienceText'
import ExperienceTop from './ExperienceTop'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const ExperienceMain = () => {
  return (
    <section id="experience" className="max-w-[1200px] mx-auto px-4 mt-8">
      <motion.div
        variants={fadeIn('down', 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ExperienceText />
      </motion.div>
      <motion.div
        variants={fadeIn('down', 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ExperienceTop />
      </motion.div>
      <div className="hidden lg:block w-full h-[1px] mt-8 bg-emerald-100" />
      <AllExperience />
    </section>
  )
}

export default ExperienceMain
