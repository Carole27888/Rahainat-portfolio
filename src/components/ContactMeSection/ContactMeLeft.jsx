import ContactForm from './ContactForm'

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col text-center gap-4 w-full">
      <div>
        <h2 className="text-2xl md:text-3xl text-slate-800 mb-2 font-special">Get In Touch</h2>
        <p className="text-slate-600">Need dependable virtual support for your business operations?</p>
      </div>
      <ContactForm />
    </div>
  )
}

export default ContactMeLeft
