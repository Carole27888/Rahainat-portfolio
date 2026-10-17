import { FaRegCalendarCheck, FaTasks } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import { HiOutlineDocumentText } from 'react-icons/hi2'
import { BsPeople } from 'react-icons/bs'
import { TbReportAnalytics } from 'react-icons/tb'
import { RiCustomerService2Line } from 'react-icons/ri'
import { FiClock } from 'react-icons/fi'
import { SlNotebook } from 'react-icons/sl'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'

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

const AllSkillsSm = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 my-12">
      {skills.map((item, index) => (
        <div key={index} className="flex flex-col items-center bg-white rounded-2xl border border-emerald-100 p-4 shadow-sm">
          <item.icon className="text-4xl text-emerald-700" />
          <p className="text-center mt-3 text-sm md:text-base font-medium text-slate-700">{item.skill}</p>
        </div>
      ))}
    </div>
  )
}

export default AllSkillsSm
