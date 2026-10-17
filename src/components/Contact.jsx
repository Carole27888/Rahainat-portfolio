import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaFacebook, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'
import { MdLocationPin, MdOutlineMail } from 'react-icons/md'
import profile from '../data/profile'
import SectionLabel from './SectionLabel'

const InfoRow = ({ Icon, label, text, href }) => (
  <li className="flex items-center gap-4">
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-accent text-lg">
      <Icon />
    </span>
    <div>
      <p className="text-xs uppercase tracking-wider text-cream/50">{label}</p>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className="text-cream hover:text-accent transition-colors break-all">
          {text}
        </a>
      ) : (
        <p className="text-cream">{text}</p>
      )}
    </div>
  </li>
)

const inputClass =
  'w-full border-0 border-b-2 border-ink/15 bg-transparent px-0 py-3 text-ink placeholder:text-ink/40 focus:border-accent focus:outline-none focus:ring-0 transition-colors'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('sending')
    setStatusMessage('')

    const { serviceId, templateId, publicKey } = profile.emailjs
    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      setStatusMessage(`The contact form isn't set up yet. Please email ${profile.contact.email} directly.`)
      return
    }

    // The form field names (name, email, message) must match the {{variables}} in the EmailJS template.
    emailjs.sendForm(serviceId, templateId, form.current, { publicKey }).then(
      () => {
        setName('')
        setEmail('')
        setMessage('')
        setStatus('success')
        setStatusMessage('Message sent successfully.')
      },
      () => {
        setStatus('error')
        setStatusMessage('Message failed to send. Please try again or email me directly.')
      },
    )
  }

  const { email: contactEmail, phone, whatsapp, location } = profile.contact
  const { linkedin, instagram, facebook } = profile.socials
  const socials = [
    { link: linkedin, Icon: FaLinkedin, label: 'LinkedIn' },
    { link: instagram, Icon: FaSquareInstagram, label: 'Instagram' },
    { link: facebook, Icon: FaFacebook, label: 'Facebook' },
  ].filter((social) => social.link)

  return (
    <section id="contact" className="max-w-[1200px] mx-auto px-4 sm:px-6 py-24">
      <SectionLabel index="06" text="Contact" />

      <div className="mt-8 grid lg:grid-cols-[1fr_1.2fr] overflow-hidden rounded-[28px] shadow-xl">
        <div className="bg-navy text-cream p-8 sm:p-12">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold leading-[1.05]">
            Let&apos;s lighten your <span className="text-accent">workload.</span>
          </h2>
          <p className="mt-4 text-cream/70 leading-relaxed">{profile.contactIntro}</p>

          <ul className="mt-10 flex flex-col gap-5">
            {contactEmail && <InfoRow Icon={MdOutlineMail} label="Email" text={contactEmail} href={`mailto:${contactEmail}`} />}
            {phone && <InfoRow Icon={FaPhone} label="Phone" text={phone} href={`tel:${phone.replace(/\s/g, '')}`} />}
            {whatsapp && <InfoRow Icon={FaWhatsapp} label="WhatsApp" text={`+${whatsapp}`} href={`https://wa.me/${whatsapp}`} />}
            {location && <InfoRow Icon={MdLocationPin} label="Location" text={location} />}
          </ul>

          {socials.length > 0 && (
            <div className="mt-10 flex gap-3">
              {socials.map(({ link, Icon, label }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-lg hover:bg-accent hover:text-ink hover:border-accent transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white p-8 sm:p-12">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            <input
              name="name"
              type="text"
              placeholder="Your name"
              aria-label="Your name"
              required
              className={inputClass}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              aria-label="Your email"
              required
              className={inputClass}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="message"
              placeholder="Tell me about your team and goals"
              aria-label="Message"
              required
              rows={5}
              className={`${inputClass} resize-none`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-2 self-start rounded-full bg-ink px-8 py-3.5 font-semibold text-cream hover:bg-accent hover:text-ink transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {statusMessage && (
              <p role="status" className={status === 'error' ? 'text-red-600' : 'text-emerald-700'}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
