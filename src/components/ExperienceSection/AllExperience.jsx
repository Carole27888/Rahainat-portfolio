import { FaArrowRight } from 'react-icons/fa'
import SingleExperience from './SingleExperience'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const experiences = [
  {
    job: 'Virtual Assistant',
    company: 'Northbridge Administrative Services',
    duration: 'January 2025 - Present',
    responsibilities: [
      'Manage executive calendars and meeting scheduling across multiple time zones',
      'Coordinate inbox prioritization and draft professional client responses',
      'Track tasks and follow-ups to maintain weekly operational consistency',
    ],
  },
  {
    job: 'Remote Operations Assistant',
    company: 'Stratify Client Solutions',
    duration: 'May 2024 - December 2024',
    responsibilities: [
      'Prepared client-facing reports and maintained CRM records accurately',
      'Supported onboarding workflows, meeting notes, and process documentation',
      'Handled communication handoffs between internal teams and external stakeholders',
    ],
  },
  {
    job: 'Freelance Virtual Assistant',
    company: 'Independent Remote Clients',
    duration: '2023 - 2024',
    responsibilities: [
      'Delivered admin support for entrepreneurs, including file and data management',
      'Provided customer communication support and timely follow-up tracking',
      'Set up lightweight systems for recurring admin tasks and reminders',
    ],
  },
]

const AllExperience = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
      {experiences.map((experience, index) => (
        <div key={index} className="flex items-center gap-3">
          <SingleExperience experience={experience} />
          {index < 2 && (
            <motion.div
              variants={fadeIn('right', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <FaArrowRight className="hidden lg:block text-3xl text-orange-400" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}

export default AllExperience
