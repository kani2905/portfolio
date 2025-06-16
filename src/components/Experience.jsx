import { Calendar, MapPin, Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'Vault For Code',
      location: 'Delhi (Virtual)',
      duration: 'July 2025 - August 2025',
      type: 'Internship',
      description: 'Developed responsive web applications with focus on enhancing user interface and user experience. Collaborated with cross-functional teams to deliver client-focused solutions.',
      achievements: [
        'Built responsive web applications using modern frameworks',
        'Enhanced UI/UX design for improved client functionality',
        'Collaborated with development teams on multiple projects',
        'Implemented best practices for web development'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap']
    }
  ]

  const timeline = [
    {
      year: '2025',
      title: 'Web Developer Intern',
      company: 'Vault For Code',
      description: 'Started internship focusing on web development and UI/UX enhancement'
    },
    {
      year: '2024',
      title: 'Hackathon Participation',
      company: 'Various Competitions',
      description: 'Participated in Smart India Hackathon, Apithon, LEAF, and MIT Symposium'
    },
    {
      year: '2023',
      title: 'Certification Achievement',
      company: 'NPTEL, Infosys, MATLAB',
      description: 'Completed multiple professional certifications in programming and development'
    },
    {
      year: '2022',
      title: 'Started B.Tech',
      company: 'Sona College of Technology',
      description: 'Began Information Technology undergraduate program'
    }
  ]

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience & Journey</h2>
        
        <div className="experience-content">
          <div className="experience-details animate-fadeInLeft">
            <h3 className="subsection-title">Professional Experience</h3>
            
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card card">
                <div className="experience-header">
                  <div className="experience-icon">
                    <Briefcase size={24} />
                  </div>
                  <div className="experience-meta">
                    <h4 className="experience-title">{exp.title}</h4>
                    <div className="experience-company">
                      <span className="company-name">{exp.company}</span>
                      <span className="experience-type">{exp.type}</span>
                    </div>
                    <div className="experience-info">
                      <div className="info-item">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="info-item">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="experience-description">{exp.description}</p>
                
                <div className="achievements-section">
                  <h5 className="achievements-title">Key Achievements:</h5>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="experience-tech">
                  <span className="tech-label">Technologies:</span>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="timeline-section animate-fadeInRight">
            <h3 className="subsection-title">Journey Timeline</h3>
            
            <div className="timeline">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                    <div className="timeline-year">{item.year}</div>
                  </div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-company">{item.company}</p>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .subsection-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--accent-primary);
          margin-bottom: 2rem;
        }

        .experience-card {
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .experience-header {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .experience-icon {
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

        .experience-meta {
          flex: 1;
        }

        .experience-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .experience-company {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .company-name {
          font-size: 1.1rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .experience-type {
          background: var(--accent-secondary);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .experience-info {
          display: flex;
          gap: 1.5rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .experience-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .achievements-section {
          margin-bottom: 1.5rem;
        }

        .achievements-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .achievements-list {
          list-style: none;
          padding: 0;
        }

        .achievement-item {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .achievement-item::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: var(--accent-primary);
          font-weight: bold;
        }

        .experience-tech {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .tech-label {
          font-weight: 500;
          color: var(--text-primary);
          font-size: 0.9rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: var(--bg-tertiary);
          color: var(--accent-primary);
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.8rem;
          border: 1px solid var(--border-color);
        }

        .timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 1rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--accent-gradient);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2rem;
        }

        .timeline-marker {
          position: absolute;
          left: -2rem;
          top: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .timeline-dot {
          width: 12px;
          height: 12px;
          background: var(--accent-primary);
          border-radius: 50%;
          border: 3px solid var(--bg-primary);
          z-index: 1;
        }

        .timeline-year {
          background: var(--bg-secondary);
          color: var(--accent-primary);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-top: 0.5rem;
          border: 1px solid var(--border-color);
        }

        .timeline-content {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          border-color: var(--accent-primary);
          transform: translateX(5px);
        }

        .timeline-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .timeline-company {
          color: var(--accent-primary);
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .timeline-description {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .experience-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .experience-header {
            flex-direction: column;
            gap: 0.5rem;
          }

          .experience-company {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .experience-info {
            flex-direction: column;
            gap: 0.5rem;
          }

          .experience-tech {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .timeline {
            padding-left: 1.5rem;
          }

          .timeline-marker {
            left: -1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Experience