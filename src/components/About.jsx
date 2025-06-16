import { GraduationCap, Award, Users, Target } from 'lucide-react'

const About = () => {
  const achievements = [
    {
      icon: <GraduationCap size={24} />,
      title: 'Academic Excellence',
      description: 'Maintaining 8.65/10 GPA in B.Tech Information Technology'
    },
    {
      icon: <Award size={24} />,
      title: 'Certifications',
      description: 'NPTEL, Infosys, MATLAB certified professional'
    },
    {
      icon: <Users size={24} />,
      title: 'Leadership',
      description: 'Active participant in hackathons and tech competitions'
    },
    {
      icon: <Target size={24} />,
      title: 'Problem Solver',
      description: 'Passionate about creating innovative tech solutions'
    }
  ]

  const competitions = [
    'Smart India Hackathon',
    'Apithon',
    'LEAF Competition',
    'MIT Symposium'
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text animate-fadeInLeft">
            <div className="about-intro">
              <p className="intro-text">
                I'm a passionate third-year Information Technology undergraduate at Sona College of Technology, 
                driven by a deep fascination for technology and its potential to solve real-world problems.
              </p>
              
              <p className="intro-text">
                My journey in tech has been marked by hands-on learning, innovative project development, 
                and active participation in national-level competitions. I specialize in frontend development 
                and have a strong foundation in multiple programming languages and frameworks.
              </p>
            </div>

            <div className="education-section">
              <h3 className="subsection-title">Education</h3>
              <div className="education-card">
                <div className="education-header">
                  <h4>B.Tech in Information Technology</h4>
                  <span className="duration">2023 - 2027</span>
                </div>
                <p className="institution">Sona College of Technology</p>
                <p className="gpa">GPA: 8.65/10</p>
              </div>
            </div>

            <div className="competitions-section">
              <h3 className="subsection-title">Competitions & Events</h3>
              <div className="competitions-grid">
                {competitions.map((competition, index) => (
                  <div key={index} className="competition-tag">
                    {competition}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="achievements-grid animate-fadeInRight">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card card">
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <h4 className="achievement-title">{achievement.title}</h4>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .intro-text {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        .subsection-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--accent-primary);
          margin-bottom: 1rem;
          margin-top: 2rem;
        }

        .education-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .education-card:hover {
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }

        .education-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .education-header h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .duration {
          color: var(--accent-primary);
          font-weight: 500;
          font-size: 0.9rem;
        }

        .institution {
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .gpa {
          color: var(--accent-secondary);
          font-weight: 600;
        }

        .competitions-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.5rem;
        }

        .competition-tag {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 0.5rem 1rem;
          text-align: center;
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .competition-tag:hover {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .achievement-card {
          text-align: center;
          padding: 1.5rem;
        }

        .achievement-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: var(--accent-gradient);
          border-radius: 12px;
          margin: 0 auto 1rem;
          color: white;
        }

        .achievement-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .achievement-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .achievements-grid {
            grid-template-columns: 1fr;
          }

          .competitions-grid {
            grid-template-columns: 1fr;
          }

          .education-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default About