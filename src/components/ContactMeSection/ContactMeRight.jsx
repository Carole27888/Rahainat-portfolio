import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-6 w-full">
      <img src="/images/email-image.png" alt="Contact" className="max-w-[280px] rounded-2xl border border-emerald-100" />
      <ContactInfo />
      <ContactSocial />
    </div>
  )
}

export default ContactMeRight
