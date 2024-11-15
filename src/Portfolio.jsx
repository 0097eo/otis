import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Briefcase, 
  User, 
  Code2,
  Phone,
  MapPin,
  ExternalLink,
  Menu,
  X,
  GraduationCap,
  Database,
  Layout
} from 'lucide-react';
import profile from './assets/profile.jpg';

// NavLink Component with PropTypes
const NavLink = ({ href, children }) => (
  <a href={href}
    className="hover:text-blue-500 transition-colors duration-300"
    >
    {children}
  </a>
);

// Skillbar component 
const SkillBar = ({ skill, percentage }) => {
    const [width, setWidth] = useState(0);
  
    useEffect(() => {
      // Animate the progress bar on component mount
      setTimeout(() => setWidth(percentage), 100);
    }, [percentage]);
  
    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700 font-medium">{skill}</span>
          <span className="text-blue-500 font-medium">{percentage}%</span>
        </div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${width}%` }}
          />
        </div>
      </div>
    );
  };
  
  SkillBar.propTypes = {
    skill: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  };

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

// ContactItem Component with PropTypes
const ContactItem = ({ icon: Icon, title, content, href }) => (
  <a 
    href={href}
    className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="p-3 bg-blue-100 rounded-full">
      <Icon size={24} className="text-blue-500" />
    </div>
    <div>
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </a>
);

ContactItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

// Project type for the projects array
const projectType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired
});

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const skills = [
    { name: "React", percentage: 70 },
    { name: "Flask", percentage: 75 },
    { name: "Django", percentage: 70 },
    { name: "PostgreSQL", percentage: 85 },
    { name: "MongoDB", percentage: 80 },
    { name: "Node.js", percentage: 65 },
    { name: "Express", percentage: 75 }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Built a full-stack e-commerce platform using React, Flask, and SQLite",
      tech: ["React", "Flask", "SQLite", "Daraja API 2.0"],
      link: "https://github.com/0097eo/ideal_furniture"
    },
    {
      title: "SendIt",
      description: "Developed a ourier service platform that allows users to send parcels to different destinations.",
      tech: ["React", "Flask", "SQLite"],
      link: "https://github.com/0097eo/sendit"
    },
    {
      title: "MsaadaPlus",
      description: "A web application developed to address educational challenges faced by school-going girls in Sub-Saharan Africa, who miss significant school time due to lack of access to sanitary products. ",
      tech: ["React", "Flask", "SQLite", "Daraja API 2.0"],
      link: "https://github.com/0097eo/msaadaplus"
    }
  ];

  // Validate projects array structure
  Portfolio.propTypes = {
    projects: PropTypes.arrayOf(projectType)
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-br from-blue-500 via-white to-blue-50 backdrop-blur-md fixed w-full z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800">Emmanul Otieno</div>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex space-x-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#tech-stack">Tech Stack</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden px-4 py-2 space-y-2 bg-white">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#tech-stack">Tech Stack</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-500 z-0">
          <svg className="absolute w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)"/>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Hi, I'm Emmanuel Otieno
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Software Engineer
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://github.com/0097eo " 
                    className="p-2 text-gray-600 hover:text-blue-500 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/emmanuel-otieno-4b7108234/" 
                    className="p-2 text-gray-600 hover:text-blue-500 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                  <Linkedin size={24} />
                </a>
                <a href="https://mail.gmail.com" 
                    className="p-2 text-gray-600 hover:text-blue-500 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img 
                    src={profile}
                    alt="John Doe" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <User size={32} className="text-blue-500 mr-2" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
                My journey has been marked by a relentless pursuit of excellence in software development, 
                driven by a deep-seated belief in the power of clear, well-documented code. I am deeply 
                invested in adhering to best practices that enhance readability, scalability, and reliability
                of applications. When I'm not coding, you can find me contributing to open-source projects 
                or writing tech articles.My goal is to create intuitive and performant applications that solve 
                real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <GraduationCap size={32} className="text-blue-500 mr-2" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">BSc Computer Science</h3>
                  <p className="text-blue-500">Kenyatta University</p>
                  <p className="text-gray-600 mt-2">2023</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                  Completed
                </span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Full Stack Software Development</h3>
                  <p className="text-blue-500">Moringa School</p>
                  <p className="text-gray-600 mt-2">2024</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                  Completed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Tech Stack Section */}
      <section id="tech-stack" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Layout size={32} className="text-blue-500 mr-2" />
            <h2 className="text-3xl font-bold">Tech Stack</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Code2 className="text-blue-500 mr-2" size={24} />
                  Frontend & Backend
                </h3>
                {skills.slice(0, 3).map((skill) => (
                  <SkillBar 
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Database className="text-blue-500 mr-2" size={24} />
                  Databases & APIs
                </h3>
                {skills.slice(3).map((skill) => (
                  <SkillBar 
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Code2 size={32} className="text-blue-500 mr-2" />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Briefcase size={32} className="text-blue-500 mr-2" />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Information Systems Intern</h3>
                  <p className="text-green-500 mb-4">Evidence Action</p>
                  <p className="text-blue-500 mb-4">2024 - Present</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                  Current
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Worked with senior developers</li>
                <li>Built and maintained web applications</li>
                <li>Implemented CI/CD pipelines</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold">Software Engineer (Industrial Attachment)</h3>
              <p className="text-green-500 mb-4">Herufi Technologies</p>
              <p className="text-blue-500 mb-4">2023 - 2023</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Built and maintained multiple web applications</li>
                <li>Worked directly with clients</li>
                <li>Improved application performance by 40%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Mail size={32} className="text-blue-500 mr-2" />
            <h2 className="text-3xl font-bold">Get in Touch</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <ContactItem 
              icon={Mail}
              title="Email"
              content="emmanuelokello294@gmail.com"
              href="mailto:emmanuelokello294@gmail.com"
            />
            <ContactItem 
              icon={Phone}
              title="Phone"
              content="0706446211"
              href="tel:+254706446211"
            />
            <ContactItem 
              icon={MapPin}
              title="Location"
              content="Nairobi, Kenya"
              href="#"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-50 via-white to-blue-500">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://github.com/0097eo/" 
                className="text-gray-600 hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                >
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/emmanuel-otieno-4b7108234/" 
                className="text-gray-600 hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                >
              <Linkedin size={20} />
            </a>
            <a href="https://mail.google.com" 
                className="text-gray-600 hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-gray-600">© {new Date().getFullYear()} Emmanuel Otieno. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;