import AllSkills from './AllSkills'
import AllSkillsSm from './AllSkillsSm'
import SkillsText from './SkillsText'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const SkillsMain = () => {
  return (
    <section id="skills" className="mt-8">
      <div className="max-w-[1200px] px-4 sm:px-6 md:px-8 mx-auto">
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>
        <div className="hidden lg:block mt-12">
          <AllSkills />
        </div>
        <div className="block lg:hidden mt-8">
          <AllSkillsSm />
        </div>
      </div>
    </section>
  )
}

export default SkillsMain
