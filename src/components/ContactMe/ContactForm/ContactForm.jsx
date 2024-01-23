import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully!');
        // Optionally, reset the form after successful submission
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          message: '',
        });
      } else {
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Internal Server Error. Please try again later.');
    }
  };

  return (
    <div className="conact-form-content">
      <form onSubmit={handleFormSubmit}>
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            placeholder="Last Name"
          />
        </div>
        <div className="mail-container">
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="email-input"
            placeholder="Email"
          />
          <textarea
            type="text"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="message-input"
            placeholder="Message for Me"
          />
          <button type="submit">SEND ME</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
