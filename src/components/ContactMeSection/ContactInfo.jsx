import { MdOutlineMail } from 'react-icons/md'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'
import SingleInfo from './SingleInfo'

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-slate-700 w-full">
      <SingleInfo label="Email" text="Katwiliabigael@gmail.com" Image={MdOutlineMail} href="mailto:Katwiliabigael@gmail.com" />
      <SingleInfo label="Phone" text="+254 768528328" Image={FaPhone} href="tel:+254 768528328" />
      <SingleInfo label="WhatsApp" text="+254 768528328" Image={FaWhatsapp} href="https://wa.me/254768528328" />
      <SingleInfo label="Location" text="Nairobi, Kenya" Image={MdLocationPin} />
    </div>
  )
}

export default ContactInfo
