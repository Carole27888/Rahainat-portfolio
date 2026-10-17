import profile from '../../data/profile'
import SingleSkills from './SingleSkills'

const AllSkills = () => {
  return (
    <div className="grid grid-cols-5 gap-6 max-w-[1000px] mx-auto">
      {profile.skills.map((item, index) => (
        <SingleSkills key={index} text={item.skill} imgSvg={<item.icon />} />
      ))}
    </div>
  )
}

export default AllSkills
