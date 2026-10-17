import { FaGraduationCap } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'
import profile from '../../data/profile'

const CredentialCard = ({ Icon, title, issuer, year }) => {
  return (
    <div className="flex gap-4 items-start bg-white border border-emerald-100 rounded-2xl p-5 shadow-sm">
      <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
        <Icon className="text-2xl text-emerald-700" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-slate-800 font-semibold">{title}</p>
        {(issuer || year) && <p className="text-sm text-slate-500">{[issuer, year].filter(Boolean).join(' · ')}</p>}
      </div>
    </div>
  )
}

const CredentialsMain = () => {
  return (
    <section id="credentials" className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col items-center mt-24"
      >
        <h2 className="text-4xl md:text-5xl font-special text-center mb-4 text-slate-800">Education & Certifications</h2>
        <p className="text-base md:text-lg text-center text-slate-600 max-w-3xl">{profile.credentialsIntro}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1000px] mx-auto mt-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-sm uppercase tracking-[0.18em] text-emerald-700 font-semibold">Education</h3>
          {profile.education.map((item) => (
            <CredentialCard key={item.title} Icon={FaGraduationCap} {...item} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-sm uppercase tracking-[0.18em] text-emerald-700 font-semibold">Certifications</h3>
          {profile.certifications.map((item) => (
            <CredentialCard key={item.title} Icon={TbCertificate} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CredentialsMain
