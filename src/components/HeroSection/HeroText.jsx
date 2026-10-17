import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'
import { Link } from 'react-scroll'

const HeroText = () => {
  return (
    <div className="flex flex-col gap-5 h-full justify-center text-center lg:text-left">
      <motion.p
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-sm md:text-base uppercase tracking-[0.2em] text-emerald-700 font-semibold"
      >
        Virtual Assistant / SMM
      </motion.p>

      <motion.h1
        variants={fadeIn('right', 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-4xl md:text-6xl text-slate-800 font-special leading-tight"
      >
        Abigael Ngotho
      </motion.h1>

      <motion.p
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-base md:text-lg text-slate-600 max-w-xl"
      >
        Organized, proactive, and detail-driven Virtual Assistant / SMM helping teams stay focused, clients stay informed, and social channels stay active.
      </motion.p>

      <motion.div
        variants={fadeIn('up', 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex flex-col sm:flex-row gap-3 mt-2"
      >
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-110}
          className="inline-block px-6 py-3 rounded-xl bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition duration-300 cursor-pointer"
        >
          Book a Consultation
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          offset={-110}
          className="inline-block px-6 py-3 rounded-xl border border-emerald-700 text-emerald-800 font-semibold hover:bg-emerald-50 transition duration-300 cursor-pointer"
        >
          View Portfolio
        </Link>
      </motion.div>
    </div>
  )
}

export default HeroText
