import { useState, useEffect } from 'react'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const roles = [
    'IT Undergraduate',
    'Frontend Developer', 
    'Problem Solver',
    'Tech Enthusiast'
  ]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length
      const fullText = roles[i]

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, roles])

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text animate-fadeInLeft">
            <h1 className="hero-title">
              Hello, I'm <span className="name-highlight">Kanihska</span>
            </h1>
            <div className="hero-subtitle">
              <span className="typing-text">{text}</span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-description">
              Third-year Information Technology student passionate about creating innovative 
              tech solutions through hands-on projects and hackathon participation.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToProjects}>
                View Projects
              </button>
              <button className="btn btn-secondary" onClick={scrollToContact}>
                Contact Me
              </button>
            </div>
            <div className="social-links">
              <a href="mailto:kanishka.it27@gmail.com" className="social-link">
                <Mail size={20} />
              </a>
              <a href="#" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-link">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div className="hero-image animate-fadeInRight">
            <div className="image-container">
              <img 
                src="/image.jpg" 
                alt="Kanihska" 
                className="profile-image animate-float"
              />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <ChevronDown size={24} className="scroll-arrow" />
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.3;
          animation: float 6s ease-in-out infinite;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: var(--accent-primary);
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 300px;
          height: 300px;
          background: var(--accent-secondary);
          top: 60%;
          right: 20%;
          animation-delay: 2s;
        }

        .orb-3 {
          width: 200px;
          height: 200px;
          background: #ff6b6b;
          bottom: 20%;
          left: 60%;
          animation-delay: 4s;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          min-height: 70vh;
          width: 100%;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .name-highlight {
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.8rem;
          color: var(--accent-primary);
          margin-bottom: 2rem;
          min-height: 2.5rem;
        }

        .typing-text {
          font-weight: 500;
        }

        .cursor {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .hero-description {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          line-height: 1.6;
          max-width: 500px;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--accent-primary);
          color: var(--bg-primary);
          transform: translateY(-2px);
        }

        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-container {
          position: relative;
          width: 400px;
          height: 400px;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid var(--accent-primary);
          position: relative;
          z-index: 2;
        }

        .image-glow {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          background: var(--accent-gradient);
          border-radius: 50%;
          filter: blur(20px);
          opacity: 0.3;
          z-index: 1;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          color: var(--text-secondary);
        }

        .scroll-arrow {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        /* Large Desktop Styles */
        @media (min-width: 1200px) {
          .hero-content {
            gap: 8rem;
          }
          
          .hero-title {
            font-size: 5rem;
          }
          
          .hero-subtitle {
            font-size: 2.2rem;
          }
          
          .hero-description {
            font-size: 1.3rem;
            max-width: 600px;
          }
          
          .image-container {
            width: 450px;
            height: 450px;
          }
          
          .orb-1 {
            width: 500px;
            height: 500px;
          }
          
          .orb-2 {
            width: 350px;
            height: 350px;
          }
        }

        /* Extra Large Desktop Styles */
        @media (min-width: 1600px) {
          .hero-content {
            gap: 10rem;
          }
          
          .hero-title {
            font-size: 5.5rem;
          }
          
          .hero-subtitle {
            font-size: 2.5rem;
          }
          
          .image-container {
            width: 500px;
            height: 500px;
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .hero-buttons {
            justify-content: center;
            flex-wrap: wrap;
          }

          .social-links {
            justify-content: center;
          }

          .image-container {
            width: 250px;
            height: 250px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .image-container {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero