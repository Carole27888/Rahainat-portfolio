import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn('left', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative h-full flex items-center justify-center mt-10 lg:mt-0"
    >
      <div className="absolute -top-6 -left-6 w-28 h-28 rounded-3xl bg-orange-100 -z-10" />
      <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-emerald-100 -z-10" />
      <img
        src="/images/Abbie1.jpeg"
        alt="Abigael Ngotho"
        className="h-[280px] w-[280px] md:h-[390px] md:w-[390px] rounded-[2.5rem] object-cover border-8 border-white shadow-2xl"
      />
    </motion.div>
  )
}

export default HeroPic
