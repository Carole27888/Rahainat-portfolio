import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'

const projects = [
  {
    name: 'Email Management',
    year: '2026',
    align: 'right',
    image: '/images/EMAILMANAGE.jpeg',
    link: '/images/Email management.pdf',
  },
  {
    name: 'Customer Relationship Management',
    year: '2025',
    align: 'left',
    image: '/images/website-img-2.webp',
    link: '/images/CUSTOMER RELATIONS.pdf',
  },
  {
    name: 'Project Management',
    year: '2024',
    align: 'right',
    image: '/images/website-img-3.jpg',
    link: '/images/PROJECT MANAGEMENT.pdf',
  },
  {
    name: 'Leads Generation',
    year: '2024',
    align: 'left',
    image: '/images/LEADS.jpeg',
    link: '/images/LEADS GENERATION.pdf',
  },
]

const ProjectsMain = () => {
  return (
    <section id="projects" className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
      <ProjectsText />

      <div className="flex flex-col gap-16 max-w-full sm:max-w-[700px] md:max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsMain
