import profile from '../../data/profile'
import ContactForm from './ContactForm'

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col text-center gap-4 w-full">
      <div>
        <h2 className="text-2xl md:text-3xl text-slate-800 mb-2 font-special">Get In Touch</h2>
        <p className="text-slate-600">{profile.contactIntro}</p>
      </div>
      <ContactForm />
    </div>
  )
}

export default ContactMeLeft
