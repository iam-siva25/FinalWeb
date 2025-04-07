import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_33p4jfm',    // Replace with your EmailJS service ID
      'template_s9vb5f5',   // Replace with your EmailJS template ID
      formData,
      'FGs4GPrCHWFLEof9V'   // Replace with your EmailJS public key
    )
    .then((result) => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      console.error('Error sending email: ', error); // Log the error for better debugging
      alert('Failed to send message, please try again.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section className="contact-form" id="connect">
      <div className="contact-container">
        <div className="section-header">
          <p className="section-title">Get in Touch</p>
          <h2 className="section-heading">Let’s Connect</h2>
          <p className="section-description">
            Have a question or ready to start your next project? Reach out to us!
          </p>
        </div>
        <form onSubmit={sendEmail} className="form-grid">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group full-width">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            ></textarea>
          </div>
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
