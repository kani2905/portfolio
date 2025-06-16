
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'Email',
      value: 'kanishka.it27@gmail.com',
      link: 'mailto:kanishka.it27@gmail.com'
    },
    {
      icon: <Phone size={20} />,
      title: 'Phone',
      value: '+91 9629039922',
      link: 'tel:+91 9629039922'
    },
    {
      icon: <MapPin size={20} />,
      title: 'Location',
      value: 'Tamil Nadu, India',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: 'GitHub',
      url: 'https://github.com/kani2905',
      color: '#333'
    },
    {
      icon: <Linkedin size={20} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kanishka-it/',
      color: '#0077b5'
    },
    {
      icon: <Mail size={20} />,
      name: 'Email',
      url: 'mailto:kanishka.it27@gmail.com',
      color: '#ea4335'
    }
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-intro">
          <p className="intro-text">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology. Feel free to reach out!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info animate-fadeInLeft">
            <div className="info-section">
              <h3 className="info-title">
                <MessageCircle size={24} />
                Let's Connect
              </h3>
              <p className="info-description">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link} 
                  className="contact-item"
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <span className="contact-title">{info.title}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-section">
              <h4 className="social-title">Follow Me</h4>
             <div className="social-section">
  <h4 className="social-title">Follow Me</h4>
  <div className="social-links">
    <a href="mailto:kanishka.it27@gmail.com" className="social-link" target="_blank">
      <Mail size={20} />
    </a>
    <a href="https://www.linkedin.com/in/kanishka-it/" className="social-link" target="_blank">
      <Linkedin size={20} />
    </a>
    <a href="https://github.com/kani2905" className="social-link" target="_blank">
      <Github size={20} />
    </a>
  </div>
</div>

            </div>
          </div>

          <div className="contact-form-section animate-fadeInRight">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-intro {
          text-align: center;
          margin-bottom: 3rem;
        }

        .intro-text {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .info-section {
          margin-bottom: 2rem;
        }

        .info-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .info-description {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          border-color: var(--accent-primary);
          transform: translateX(5px);
        }

        .contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: var(--accent-gradient);
          border-radius: 8px;
          color: white;
          flex-shrink: 0;
        }

        .contact-text {
          display: flex;
          flex-direction: column;
        }

        .contact-title {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .contact-value {
          font-size: 1rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .social-section {
          margin-top: 2rem;
        }

        .social-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          border-color: var(--social-color);
          color: var(--social-color);
          transform: translateX(5px);
        }

        .contact-form {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          color: var(--text-primary);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          justify-content: center;
          position: relative;
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-form {
            padding: 1.5rem;
          }

          .social-links {
            flex-direction: row;
            flex-wrap: wrap;
          }

          .social-link {
            flex: 1;
            min-width: 120px;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact