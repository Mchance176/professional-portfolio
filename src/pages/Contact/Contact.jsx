import { useState } from 'react'
import './Contact.css'

function Contact() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // State for validation errors
  const [errors, setErrors] = useState({})

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  // Validate email format
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    // Validate fields
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    // Display errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Clear errors if validation passes
    setErrors({})

    // Handle form submission (you can add your logic here)
    console.log('Form submitted:', formData)
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      
      <form onSubmit={handleSubmit} className="contact-form">
        {/* Name field */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        {/* Email field */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        {/* Message field */}
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className={errors.message ? 'error' : ''}
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        {/* Submit button */}
        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      {/* Additional contact information */}
      <div className="contact-info">
        <h3>Other Ways to Connect</h3>
        <ul>
          <li>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:matt.chance176@gmail.com">
              matt.chance176@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact