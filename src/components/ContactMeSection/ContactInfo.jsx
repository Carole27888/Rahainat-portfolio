import { MdOutlineMail } from 'react-icons/md'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'
import profile from '../../data/profile'
import SingleInfo from './SingleInfo'

const ContactInfo = () => {
  const { email, phone, whatsapp, location } = profile.contact

  return (
    <div className="flex flex-col gap-4 text-slate-700 w-full">
      {email && <SingleInfo label="Email" text={email} Image={MdOutlineMail} href={`mailto:${email}`} />}
      {phone && <SingleInfo label="Phone" text={phone} Image={FaPhone} href={`tel:${phone.replace(/\s/g, '')}`} />}
      {whatsapp && <SingleInfo label="WhatsApp" text={`+${whatsapp}`} Image={FaWhatsapp} href={`https://wa.me/${whatsapp}`} />}
      {location && <SingleInfo label="Location" text={location} Image={MdLocationPin} />}
    </div>
  )
}

export default ContactInfo
