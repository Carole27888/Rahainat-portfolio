import { FaRegCalendarCheck, FaTasks } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import { HiOutlineDocumentText } from 'react-icons/hi2'
import { BsPeople } from 'react-icons/bs'
import { TbReportAnalytics } from 'react-icons/tb'
import { RiCustomerService2Line } from 'react-icons/ri'
import { FiClock } from 'react-icons/fi'
import { SlNotebook } from 'react-icons/sl'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import SingleSkills from './SingleSkills'

const skills = [
  { skill: 'Calendar Management', icon: FaRegCalendarCheck },
  { skill: 'Inbox Management', icon: MdOutlineMailOutline },
  { skill: 'Task Coordination', icon: FaTasks },
  { skill: 'Client Follow-ups', icon: BsPeople },
  { skill: 'Meeting Documentation', icon: HiOutlineDocumentText },
  { skill: 'Report Preparation', icon: TbReportAnalytics },
  { skill: 'Customer Support', icon: RiCustomerService2Line },
  { skill: 'Time Management', icon: FiClock },
  { skill: 'Data Organization', icon: SlNotebook },
  { skill: 'Process Execution', icon: IoCheckmarkDoneCircleOutline },
]

const AllSkills = () => {
  return (
    <div className="grid grid-cols-5 gap-6 max-w-[1000px] mx-auto">
      {skills.map((item, index) => (
        <SingleSkills key={index} text={item.skill} imgSvg={<item.icon />} />
      ))}
    </div>
  )
}

export default AllSkills
