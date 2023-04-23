import React, { useState } from 'react';
import './index.css';

function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Validate form fields
    if (!name || !email || !message) {
      setFormError('All fields are required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setFormError('Please enter a valid email address');
    } else {
      // Submit form data to backend or take further action
      console.log('Form submitted:', name, email, message);
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
      setFormError('');
    }
  };

  return (
    <div className="contactMe">
      <header className="contact-header">
        <h2>Contact</h2>
      </header>
      <section className="contact-content">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        {formError && <p className="error">{formError}</p>}
      </section>
      <footer className="contact-footer">
        <p>Contact Footer</p>
      </footer>
    </div>
  );
}

export default ContactMe;
