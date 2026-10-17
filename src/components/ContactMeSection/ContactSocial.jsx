import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'
import Social from './Social'

const ContactSocial = () => {
  return (
    <div className="flex gap-3">
      {/* <Social link="https://github.com/placeholder" Icon={FaGithub} /> */}
      <Social link="https://www.linkedin.com/in/abigael-ngotho-081b93308?utm_source=share_via&utm_content=profile&utm_medium=member_android" Icon={FaLinkedin} />
      <Social link="https://www.instagram.com/abigael.abie?igsh=MWM3Y29haG5xMzVkbQ==" Icon={FaSquareInstagram} />
      <Social link="https://www.facebook.com/placeholder" Icon={FaFacebook} />
    </div>
  )
}

export default ContactSocial
