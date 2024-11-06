import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section className="contact">
      <h2>Get In Touch</h2>
      
      <div className="contact-content">
        <div className="contact-text">
          <p>
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hello, I'll try my best 
            to get back to you!
          </p>
        </div>

        <div className="contact-methods">
          {/* Email */}
          <div className="contact-method">
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </div>

          {/* LinkedIn */}
          <div className="contact-method">
            <i className="fab fa-linkedin"></i>
            <h3>LinkedIn</h3>
            <a 
              href="https://linkedin.com/in/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>

          {/* GitHub */}
          <div className="contact-method">
            <i className="fab fa-github"></i>
            <h3>GitHub</h3>
            <a 
              href="https://github.com/your-username" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View GitHub Profile
            </a>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send a Message</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                placeholder="Your message here..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact