// All personal content for the portfolio lives here.
// To reuse this template for someone else, edit this file and the images in public/images.

import { FaPhoneVolume, FaTasks, FaRegCalendarCheck } from 'react-icons/fa'
import { FaMicrosoft } from 'react-icons/fa6'
import { MdOutlineSms } from 'react-icons/md'
import { BsDiagram3 } from 'react-icons/bs'
import { TbTargetArrow, TbFilter, TbReportAnalytics, TbTool } from 'react-icons/tb'
import { RiCustomerService2Line } from 'react-icons/ri'
import { SlNotebook } from 'react-icons/sl'
import {
  SiCanva,
  SiClickup,
  SiClockify,
  SiGoogle,
  SiGooglegemini,
  SiHootsuite,
  SiHubspot,
  SiLinkedin,
  SiNotion,
  SiOpenai,
  SiSlack,
  SiTrello,
  SiZoom,
} from 'react-icons/si'

const profile = {
  name: 'Rahainat Kazeem',
  initials: 'RK',
  role: 'Lead Generation & Virtual Support Specialist',
  heroText:
    'Remote sales, lead generation, and virtual support professional helping US and UK teams fill their pipelines, book qualified appointments, and keep every follow-up on track.',

  // TODO: add Rahainat's photo to public/images and update this path
  photo: '/images/rahainat-placeholder.svg',

  availability: 'Remote · Supporting US & UK teams',

  stats: [
    { value: '70+', label: 'Outbound calls per day' },
    { value: '300+', label: 'Researched leads per week' },
    { value: '4', label: 'Remote roles since 2025' },
    { value: 'US & UK', label: 'Teams supported' },
  ],

  highlights: ['Lead Generation & Prospecting', 'Cold Calling & Appointment Setting', 'CRM & GoHighLevel Automation'],

  aboutHeadline: 'Turning cold lists into booked calls.',

  about:
    'Rahainat Kazeem is a remote sales, lead generation, and virtual support professional with experience supporting US and UK teams through outbound prospecting, appointment setting, CRM management, customer communication, and workflow automation. She is skilled in GoHighLevel, HubSpot, ClickUp, Slack, JustCall, Apollo, LinkedIn Sales Navigator, and Google Workspace, and is experienced in managing follow-ups, maintaining accurate records, coordinating tasks, and guiding prospective customers from first inquiry to registration.',

  skillsIntro:
    'Rahainat combines high-volume outbound prospecting, clear customer communication, and hands-on CRM and automation skills to keep pipelines full and follow-ups consistent.',

  skills: [
    { skill: 'Lead Generation & Prospecting', icon: TbTargetArrow },
    { skill: 'Cold Calling & Appointment Setting', icon: FaPhoneVolume },
    { skill: 'Lead Qualification & Objection Handling', icon: TbFilter },
    { skill: 'Customer Support & Follow-up', icon: RiCustomerService2Line },
    { skill: 'CRM Management & Pipeline Tracking', icon: TbReportAnalytics },
    { skill: 'GoHighLevel Workflows & Automation', icon: BsDiagram3 },
    { skill: 'Email & SMS Communication', icon: MdOutlineSms },
    { skill: 'Task Coordination', icon: FaTasks },
    { skill: 'Data Entry & Record Management', icon: SlNotebook },
    { skill: 'Executive & Administrative Support', icon: FaRegCalendarCheck },
  ],

  tools: [
    { name: 'GoHighLevel', icon: TbTool },
    { name: 'HubSpot', icon: SiHubspot },
    { name: 'Apollo.io', icon: TbTool },
    { name: 'LinkedIn Sales Navigator', icon: SiLinkedin },
    { name: 'Hunter.io', icon: TbTool },
    { name: 'ContactOut', icon: TbTool },
    { name: 'JustCall', icon: TbTool },
    { name: 'SportsPlus', icon: TbTool },
    { name: 'ClickUp', icon: SiClickup },
    { name: 'Slack', icon: SiSlack },
    { name: 'Clockify', icon: SiClockify },
    { name: 'Google Workspace', icon: SiGoogle },
    { name: 'Microsoft Office', icon: FaMicrosoft },
    { name: 'Zoom', icon: SiZoom },
    { name: 'Trello', icon: SiTrello },
    { name: 'Notion', icon: SiNotion },
    { name: 'Canva', icon: SiCanva },
    { name: 'Hootsuite', icon: SiHootsuite },
    { name: 'HeyGen', icon: TbTool },
    { name: 'ChatGPT', icon: SiOpenai },
    { name: 'Gemini AI', icon: SiGooglegemini },
  ],

  experienceIntro:
    'Remote roles with US and UK teams across B2B lead generation, cold calling, appointment setting, CRM management, and program support.',

  experiences: [
    {
      job: 'Virtual Assistant',
      company: 'Breakaway Hoops',
      location: 'New York, USA (Remote)',
      duration: 'August 2026 - Present',
      responsibilities: [
        'Support day-to-day administration and program operations for a youth basketball training organization using ClickUp and Slack',
        'Use GoHighLevel for CRM records, lead follow-ups, SMS/email communication, and workflow troubleshooting',
        'Follow up with families inquiring about the Weekend Fundamental Clinic and guide them to a trial session or registration',
        'Manage scheduling and participant records in SportsPlus, and phone/SMS outreach through JustCall',
      ],
    },
    {
      job: 'Research Executive',
      company: 'Smart Grid Forums',
      location: 'United Kingdom (Remote)',
      duration: 'May 2026 - Present',
      responsibilities: [
        'Research and cold call prospects to secure sponsors and exhibitors for the SGT27 Geneva conference',
        'Build targeted prospect lists with Apollo, Ensun, LinkedIn Sales Navigator, Hunter, and ContactOut',
        'Make around 70 outbound calls per day and generate 300+ researched leads weekly',
        'Manage pipelines and activity in HubSpot and schedule strategy calls with company executives',
      ],
    },
    {
      job: 'Cold Caller & Lead Generation Specialist',
      company: 'Building Envelope Management',
      location: 'Miami, Florida, USA (Remote)',
      duration: 'January 2026 - April 2026',
      responsibilities: [
        'Made an average of 50 outbound calls daily to property managers and booked meetings with the CEO',
        'Ran cold email campaigns targeting about 30 leads daily',
        'Built GoHighLevel workflows and triggers for lead nurturing and automated follow-ups',
        'Scheduled social content in Hootsuite, designed graphics in Canva, and created AI-avatar videos with HeyGen',
      ],
    },
    {
      job: 'Cold Caller',
      company: 'Mshel Real Estate',
      location: 'Remote',
      duration: 'January 2025 - November 2025',
      responsibilities: [
        'Handled inbound and outbound calls with new and existing clients, including warm follow-ups',
        'Supported lead engagement, customer communication, and remote sales coordination',
        'Maintained professional records of all client interactions',
      ],
    },
  ],

  credentialsIntro: 'Formal education and professional certifications that back up her hands-on experience.',
  education: [{ title: 'Higher National Diploma (HND) in Biochemistry', issuer: '', year: '2024' }],
  certifications: [
    { title: 'Virtual Assistant Certification', issuer: 'Udemy' },
    { title: 'Cold Calling & Appointment Setting Certification', issuer: 'VSavvy Academy' },
    { title: 'English Proficiency Certificate', issuer: 'EF SET' },
  ],

  contactIntro: 'Need someone to fill your pipeline, book appointments, or keep your CRM in order?',
  // TODO: fill in Rahainat's contact details. Empty values are hidden on the site.
  contact: {
    email: '',
    phone: '',
    whatsapp: '', // digits only with country code, e.g. 2348012345678
    location: '',
  },
  // TODO: add Rahainat's social profile URLs. Empty values are hidden on the site.
  socials: {
    linkedin: '',
    instagram: '',
    facebook: '',
  },
}

export default profile
