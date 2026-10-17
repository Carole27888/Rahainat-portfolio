import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
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

    emailjs
      .sendForm('service_k9jv2py', 'template_mm7jxva', form.current, {
        publicKey: '1cGHRylC2dtLaN7Kh',
      })
      .then(
        () => {
          setName('')
          setEmail('')
          setMessage('')
          setStatus('success')
          setStatusMessage('Message sent successfully.')
        },
        () => {
          setStatus('error')
          setStatusMessage('Message failed to send. Please try again.')
        },
      )
  }

  return (
    <div>
      {statusMessage && <p className={status === 'error' ? 'text-red-600 mb-2' : 'text-emerald-700 mb-2'}>{statusMessage}</p>}
      <form className="flex flex-col gap-4 text-slate-700" ref={form} onSubmit={sendEmail}>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-xl bg-emerald-50/60 border border-emerald-100 px-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-xl bg-emerald-50/60 border border-emerald-100 px-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className="rounded-xl bg-emerald-50/60 border border-emerald-100 p-3"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="w-full rounded-xl text-white h-12 font-semibold bg-gradient-to-r from-emerald-700 to-teal-500 hover:opacity-90 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
