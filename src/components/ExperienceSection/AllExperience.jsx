import profile from '../../data/profile'
import SingleExperience from './SingleExperience'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const AllExperience = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {profile.experiences.map((experience, index) => (
        <motion.div
          key={index}
          variants={fadeIn('up', 0.1 * (index % 2))}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SingleExperience experience={experience} />
        </motion.div>
      ))}
    </div>
  )
}

export default AllExperience
