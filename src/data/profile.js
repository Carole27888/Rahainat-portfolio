// All personal content for the portfolio lives here.
// To reuse this template for someone else, edit this file and the images in public/images.

import { FaTasks, FaRegCalendarCheck, FaUserTie } from 'react-icons/fa'
import { FaMicrosoft } from 'react-icons/fa6'
import { MdOutlineSms } from 'react-icons/md'
import { BsDiagram3 } from 'react-icons/bs'
import { TbTargetArrow, TbTool, TbSearch } from 'react-icons/tb'
import { RiCustomerService2Line } from 'react-icons/ri'
import { SlNotebook } from 'react-icons/sl'
import {
  SiCanva,
  SiClaude,
  SiClickup,
  SiClockify,
  SiGoogle,
  SiGooglegemini,
  SiHootsuite,
  SiHubspot,
  SiLinkedin,
  SiNotion,
  SiSlack,
  SiTrello,
  SiZoom,
} from 'react-icons/si'

const profile = {
  name: 'Rahainat Kazeem',
  logo: '/images/logo.jpeg',
  role: 'Remote Executive Assistant',
  heroText:
    'Helping busy founders and leaders across the US and UK stay organised, from calendars and meetings to tasks, records, and client communication, with sales and customer support skills to match.',

  // TODO: add Rahainat's photo to public/images and update this path
  photo: '/images/rahainat.jpeg',

  availability: 'Remote · Supporting US & UK teams',

  stats: [
    { value: 'Remote', label: 'Executives & teams supported' },
    { value: '3+', label: 'Years of remote experience' },
    { value: '20+', label: 'Business tools' },
    { value: '3', label: 'Professional certifications' },
  ],

  highlights: ['Executive & Administrative Support', 'Calendar, Meetings & Task Coordination', 'Remote Sales & Customer Support'],

  aboutHeadline: 'Keeping leaders organised, so they can focus on what matters.',

  about:
    'Rahainat Kazeem is a remote executive assistant who supports founders, CEOs, and business teams across the US and UK. She manages schedules and books meetings with executives, coordinates day-to-day tasks and operations in ClickUp and Slack, keeps CRM and client records accurate, and handles professional communication by phone, email, and SMS. Her background in remote sales and customer support means she also understands the business side: she can research prospects, follow up with clients, and guide customers from first inquiry to registration. She works confidently in Google Workspace, Microsoft Office, GoHighLevel, HubSpot, and Zoom.',

  skillsIntro:
    'Executive support comes first: calendars, meetings, tasks, and records handled reliably. On top of that, Rahainat brings sales and customer support experience that keeps clients and follow-ups moving.',

  skills: [
    { skill: 'Executive & Administrative Support', icon: FaUserTie },
    { skill: 'Calendar & Meeting Management', icon: FaRegCalendarCheck },
    { skill: 'Task & Operations Coordination', icon: FaTasks },
    { skill: 'Email, Phone & SMS Communication', icon: MdOutlineSms },
    { skill: 'Records, CRM & Data Management', icon: SlNotebook },
    { skill: 'Research & Reporting', icon: TbSearch },
    { skill: 'Workflow Automation (GoHighLevel)', icon: BsDiagram3 },
    { skill: 'Customer Support & Follow-up', icon: RiCustomerService2Line },
    { skill: 'Lead Generation & Prospecting', icon: TbTargetArrow },
  ],

  tools: [
    { name: 'Google Workspace', icon: SiGoogle },
    { name: 'Microsoft Office', icon: FaMicrosoft },
    { name: 'Slack', icon: SiSlack },
    { name: 'ClickUp', icon: SiClickup },
    { name: 'Zoom', icon: SiZoom },
    { name: 'Notion', icon: SiNotion },
    { name: 'Trello', icon: SiTrello },
    { name: 'Clockify', icon: SiClockify },
    { name: 'GoHighLevel', icon: TbTool },
    { name: 'HubSpot', icon: SiHubspot },
    { name: 'Apollo.io', icon: TbTool },
    { name: 'LinkedIn Sales Navigator', icon: SiLinkedin },
    { name: 'Hunter.io', icon: TbTool },
    { name: 'ContactOut', icon: TbTool },
    { name: 'JustCall', icon: TbTool },
    { name: 'SportsPlus', icon: TbTool },
    { name: 'Canva', icon: SiCanva },
    { name: 'Hootsuite', icon: SiHootsuite },
    { name: 'HeyGen', icon: TbTool },
    { name: 'Claude', icon: SiClaude },
    { name: 'Gemini AI', icon: SiGooglegemini },
  ],

  experienceIntro:
    'Remote roles with US and UK teams covering executive scheduling, administration and operations, CRM and records, plus sales and customer support.',

  experiences: [
    {
      job: 'Virtual Assistant',
      company: 'Breakaway Hoops',
      location: 'New York, USA (Remote)',
      duration: 'August 2026 - Present',
      responsibilities: [
        'Support day-to-day administration and program operations for a youth basketball training organization, coordinating tasks in ClickUp and Slack',
        'Manage scheduling and participant records in SportsPlus',
        'Use GoHighLevel for CRM records, SMS/email communication, follow-ups, and workflow troubleshooting',
        'Follow up with families inquiring about the Weekend Fundamental Clinic by phone and SMS through JustCall, guiding them to a trial session or registration',
      ],
    },
    {
      job: 'Research Executive',
      company: 'Smart Grid Forums',
      location: 'United Kingdom (Remote)',
      duration: 'June 2025 - June 2026',
      responsibilities: [
        'Scheduled strategy calls with company executives and kept pipelines and activity up to date in HubSpot',
        'Researched companies and decision-makers with Apollo, Ensun, LinkedIn Sales Navigator, Hunter, and ContactOut',
        'Secured sponsors and exhibitors for the SGT27 Geneva conference through outreach and follow-up',
        'Generated 300+ researched leads weekly for the outreach team',
      ],
    },
    {
      job: 'Executive Assistant',
      company: 'Building Envelope Management',
      location: 'Miami, Florida, USA (Remote)',
      duration: 'February 2023 - April 2025',
      responsibilities: [
        'Booked meetings directly into the CEO\'s calendar with qualified property managers',
        'Built GoHighLevel workflows and triggers to automate follow-ups and lead nurturing',
        'Scheduled social content in Hootsuite, designed graphics in Canva, and created AI-avatar videos with HeyGen',
        'Ran email outreach campaigns to about 30 leads per day',
      ],
    },
  ],

  samplesIntro:
    'Real screenshots from client work, with private details blurred. Click any sample to view it full size.',

  samples: [
    {
      title: 'Client feedback from the company President',
      category: 'Client Feedback',
      description:
        'Email from the President of Building Envelope Management praising the social media captions she wrote for the business.',
      image: '/samples/client-feedback-email.png',
    },
    {
      title: 'Adding and organising contacts in the CRM',
      category: 'CRM & Records',
      description:
        'Creating a new lead in GoHighLevel with contact type, time zone, and communication preferences set correctly.',
      image: '/samples/crm-add-contact.png',
    },
    {
      title: 'Tagging contacts and scheduling call-backs',
      category: 'CRM & Follow-up',
      description:
        'Contact record in GoHighLevel with tags and a pinned note for a scheduled call-back, so no follow-up is missed.',
      image: '/samples/crm-contact-followup.png',
    },
    {
      title: 'Automating staff onboarding across programs',
      category: 'Workflow Automation',
      description:
        'Back-office onboarding workflow for Breakaway Hoops that branches by program, sends the lesson-plan email, and notifies the right Slack onboarding channel.',
      image: '/samples/workflow-onboarding-branches.png',
    },
    {
      title: 'Timed onboarding steps within business hours',
      category: 'Workflow Automation',
      description:
        'Onboarding sequence that waits for business hours before sending each lesson guide, so new staff get information at the right pace.',
      image: '/samples/workflow-onboarding-sequence.png',
    },
    {
      title: 'Scheduling posts across four platforms',
      category: 'Content Scheduling',
      description:
        'Scheduling a post for Facebook, LinkedIn, Instagram, and TikTok in Hootsuite at a recommended time in the client\'s time zone.',
      image: '/samples/hootsuite-scheduling.png',
    },
    {
      title: 'Writing captions for AI-avatar videos',
      category: 'Content Creation',
      description:
        'Instagram caption and hashtags written for a HeyGen AI-avatar video, ready to publish through Hootsuite.',
      image: '/samples/hootsuite-instagram-post.png',
    },
    {
      title: 'Researching decision-makers on LinkedIn',
      category: 'Research',
      description:
        'Using LinkedIn Sales Navigator and ContactOut to find verified contact details for a property management lead.',
      image: '/samples/linkedin-contactout-research.png',
    },
    {
      title: 'Building prospect lists in Apollo',
      category: 'Lead Generation',
      description: 'Filtering and saving founders, CEOs, and other decision-makers in Apollo.io for outreach.',
      image: '/samples/apollo-prospecting.png',
    },
  ],

  credentialsIntro: 'Formal education and professional certifications that back up her hands-on experience.',
  education: [{ title: 'Higher National Diploma (HND) in Biochemistry', issuer: '', year: '2024' }],
  certifications: [
    {
      title: 'Becoming A Virtual Assistant in the US Training Program',
      issuer: 'Baltimore Win Foundation',
      year: '2026',
      image: '/certificates/becoming-a-va-in-the-us.png',
    },
    { title: 'Virtual Assistant Certification', issuer: 'Udemy' },
    { title: 'English Proficiency Certificate', issuer: 'EF SET' },
  ],

  contactIntro: 'Need someone to manage your calendar, keep tasks moving, and handle the details so you can focus on running the business?',
  // Empty values are hidden on the site.
  contact: {
    email: 'rahainatozavize49@gmail.com',
    phone: '+234 816 449 5131',
    whatsapp: '2348164495131', // digits only with country code
    location: 'Nigeria',
  },
  // Empty values are hidden on the site.
  socials: {
    linkedin: 'https://www.linkedin.com/in/rahainatozavize',
    instagram: '',
    facebook: '',
  },
  // Contact form keys from Rahainat's EmailJS account (https://dashboard.emailjs.com).
  // These are safe to keep in the code: EmailJS public keys are meant to be public.
  emailjs: {
    serviceId: 'service_ej8zwbi', // Email Services tab
    templateId: 'template_nir3w8q', // Email Templates tab
    publicKey: '0VgBnPxH8Io76ndzU', // Account > General > Public Key
  },
}

export default profile
