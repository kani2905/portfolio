import { Code, Palette, Database, Wrench, Users, Brain } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'JavaScript', level: 90 },
        { name: 'C++', level: 75 },
        { name: 'C', level: 70 }
      ]
    },
    {
      icon: <Palette size={24} />,
      title: 'Web Development',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'Css', level: 85 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Responsive Design', level: 90 }
      ]
    },
    {
      icon: <Wrench size={24} />,
      title: 'Tools & Frameworks',
      skills: [
        { name: 'Flutter', level: 75 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'MATLAB', level: 70 },
        { name: 'Agile Methodologies', level: 80 }
      ]
    },
    {
      icon: <Brain size={24} />,
      title: 'Problem Solving',
      skills: [
        { name: 'Data Structures', level: 80 },
        { name: 'Algorithms', level: 75 },
        { name: 'LeetCode', level: 70 },
        { name: 'Debugging', level: 85 }
      ]
    },
    {
      icon: <Users size={24} />,
      title: 'Soft Skills',
      skills: [
        { name: 'Team Leadership', level: 90 },
        { name: 'Communication', level: 85 },
        { name: 'Project Management', level: 80 },
        { name: 'Adaptability', level: 90 }
      ]
    },
    {
      icon: <Palette size={24} />,
      title: 'Mern Stack Development',
      skills: [
        { name: 'Node js', level: 95 },
        { name: 'React', level: 85 },
        { name: 'Express js', level: 80 },
        { name: 'Mongodb', level: 90 }
      ]
    },
  ]

  const certifications = [
    {
      name: 'NPTEL Certification',
      issuer: 'NPTEL',
      year: '2024'
    },
    {
      name: 'Programming Fundamentals',
      issuer: 'Infosys',
      year: '2023'
    },
    {
      name: 'MATLAB Certification',
      issuer: 'MathWorks',
      year: '2023'
    }
  ]

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-content">
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category card animate-fadeInUp">
                <div className="category-header">
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="certifications-section animate-fadeInUp">
            <h3 className="subsection-title">Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card card">
                  <div className="cert-icon">
                    <Award size={20} />
                  </div>
                  <div className="cert-info">
                    <h4 className="cert-name">{cert.name}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <span className="cert-year">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .skill-category {
          padding: 2rem;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .category-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: var(--accent-gradient);
          border-radius: 10px;
          color: white;
        }

        .category-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-name {
          font-weight: 500;
          color: var(--text-primary);
        }

        .skill-percentage {
          font-size: 0.9rem;
          color: var(--accent-primary);
          font-weight: 600;
        }

        .skill-bar {
          height: 6px;
          background: var(--bg-tertiary);
          border-radius: 3px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: var(--accent-gradient);
          border-radius: 3px;
          transition: width 1s ease-in-out;
          animation: progressAnimation 2s ease-in-out;
        }

        @keyframes progressAnimation {
          from {
            width: 0%;
          }
        }

        .subsection-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--accent-primary);
          text-align: center;
          margin-bottom: 2rem;
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .certification-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
        }

        .cert-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: var(--accent-secondary);
          border-radius: 8px;
          color: white;
          flex-shrink: 0;
        }

        .cert-info {
          flex: 1;
        }

        .cert-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .cert-issuer {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
        }

        .cert-year {
          font-size: 0.8rem;
          color: var(--accent-primary);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .certifications-grid {
            grid-template-columns: 1fr;
          }

          .skill-category {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

// Import Award icon
const Award = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/>
  </svg>
)

export default Skills