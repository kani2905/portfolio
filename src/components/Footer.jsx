import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="brand-name">Kanihska</h3>
              <p className="brand-tagline">
                Building the future, one line of code at a time.
              </p>
            </div>
            
            <div className="footer-links">
              <div className="link-group">
                <h4 className="link-title">Navigation</h4>
                <ul className="link-list">
                  <li><a href="#home" className="footer-link">Home</a></li>
                  <li><a href="#about" className="footer-link">About</a></li>
                  <li><a href="#skills" className="footer-link">Skills</a></li>
                  <li><a href="#projects" className="footer-link">Projects</a></li>
                </ul>
              </div>
              
              <div className="link-group">
                <h4 className="link-title">Connect</h4>
                <ul className="link-list">
                  <li><a href="#" className="footer-link">GitHub</a></li>
                  <li><a href="#" className="footer-link">LinkedIn</a></li>
                  <li><a href="mailto:kanishka.it27@gmail.com" className="footer-link">Email</a></li>
                  <li><a href="#contact" className="footer-link">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="copyright">
              <p>
                © {currentYear} Kanihska. Made with <Heart size={16} className="heart-icon" /> 
                using React & Vite
              </p>
            </div>
            
            <button className="scroll-top" onClick={scrollToTop}>
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          padding: 3rem 0 1rem;
          margin-top: 4rem;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .footer-brand {
          max-width: 400px;
        }

        .brand-name {
          font-size: 1.8rem;
          font-weight: 700;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .brand-tagline {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 1rem;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .link-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .link-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .link-list li {
          margin-bottom: 0.5rem;
        }

        .footer-link {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 0.9rem;
        }

        .footer-link:hover {
          color: var(--accent-primary);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
        }

        .copyright {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .copyright p {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .heart-icon {
          color: #ff6b6b;
          animation: heartbeat 2s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .scroll-top {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: var(--accent-gradient);
          border: none;
          border-radius: 8px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .scroll-top:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-medium);
        }

        @media (max-width: 768px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .copyright {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer