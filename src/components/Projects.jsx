import { ExternalLink, Github, Smartphone, Globe, Code, Bot } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'GPA Calculator',
      description: 'A comprehensive Flutter application for calculating and tracking academic GPA with intuitive user interface and data persistence.',
      tech: ['Flutter', 'Dart', 'SQLite'],
      icon: <Smartphone size={24} />,
      category: 'Mobile App',
      features: ['Real-time calculation', 'Data persistence', 'Clean UI/UX'],
      github: 'https://github.com/kani2905/GPA-Calculator.git'
    },
    {
      title: 'Online Voting System',
      description: 'Secure web-based voting platform with user authentication, real-time results, and administrative dashboard.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      icon: <Globe size={24} />,
      category: 'Web Application',
      features: ['User authentication', 'Real-time results', 'Admin panel'],
      github: 'https://github.com/kani2905/E-Voting-system.git'
    },
    {
      title: 'Student Report Generator',
      description: 'Java-based application for generating comprehensive student reports with data visualization and export functionality.',
      tech: ['Java', 'Swing', 'MySQL'],
      icon: <Code size={24} />,
      category: 'Desktop Application',
      features: ['Data visualization', 'PDF export', 'Database integration'],
      github: 'https://github.com/kani2905/student-report-generator.git'
    },
    {
      title: 'Music Streaming Website',
      description: 'Modern frontend for a music streaming platform with responsive design and interactive user interface.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      icon: <Globe size={24} />,
      category: 'Frontend',
      features: ['Responsive design', 'Audio controls', 'Playlist management'],
      github: 'https://github.com/kani2905/Music-streaming-website-frontend.git',
    },
    {
      title: 'Gemini AI Chatbot',
      description: 'Intelligent chatbot integration using Google\'s Gemini AI with natural language processing capabilities.',
      tech: ['JavaScript', 'API Integration', 'HTML/CSS'],
      icon: <Bot size={24} />,
      category: 'AI Integration',
      features: ['Natural language processing', 'Real-time responses', 'Context awareness'],
      github: 'https://github.com/kani2905/AI-Chat-Bot.git',
    },
    {
      title: 'Weather App',
      description: 'Built a real-time Weather App using React.js and OpenWeatherMap API to fetch and display live weather data by city, fully responsive and deployed on Vercel.',
      tech: ['ReactJS', 'OpenWeatherMap API', 'HTML/CSS'],
      icon: <Bot size={24} />,
      category: 'API Integration',
      features: ['Weather updates', 'Real-time responses', 'Weather API'],
      github: 'https://github.com/kani2905/Weather-app.git',
    }
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card card animate-fadeInUp">
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-meta">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-features">
                {project.features.map((feature, featureIndex) => (
                  <span key={featureIndex} className="feature-tag">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p className="cta-text">Want to see more of my work?</p>
          <button
            className="btn btn-primary"
            onClick={() => window.open('https://github.com/kani2905', '_blank')}
          >
            <Github size={16} />
            View All Projects
          </button>
        </div>
      </div>

      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .project-card {
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          background: var(--bg-secondary);
          border-radius: 12px;
          border: 1px solid var(--border-color);
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--accent-gradient);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .project-card:hover::before {
          transform: scaleX(1);
        }

        .project-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .project-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: var(--accent-gradient);
          border-radius: 10px;
          color: white;
          flex-shrink: 0;
        }

        .project-meta {
          flex: 1;
        }

        .project-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .project-category {
          font-size: 0.9rem;
          color: var(--accent-primary);
          font-weight: 500;
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .project-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .feature-tag {
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.8rem;
          border: 1px solid var(--border-color);
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          background: var(--accent-primary);
          color: var(--bg-primary);
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: transparent;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .project-link:hover {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          background: rgba(0, 212, 255, 0.1);
        }

        .projects-cta {
          text-align: center;
          padding: 2rem;
          background: var(--bg-secondary);
          border-radius: 12px;
          border: 1px solid var(--border-color);
        }

        .cta-text {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .project-card {
            padding: 1.5rem;
          }

          .project-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .project-links {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  )
}

export default Projects
