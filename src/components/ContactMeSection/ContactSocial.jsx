import { FaLinkedin, FaFacebook } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'
import profile from '../../data/profile'
import Social from './Social'

const ContactSocial = () => {
  const { linkedin, instagram, facebook } = profile.socials

  return (
    <div className="flex gap-3">
      {linkedin && <Social link={linkedin} Icon={FaLinkedin} />}
      {instagram && <Social link={instagram} Icon={FaSquareInstagram} />}
      {facebook && <Social link={facebook} Icon={FaFacebook} />}
    </div>
  )
}

export default ContactSocial
