import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

emailjs.init('QD9RTL04KOgrpvHNR'); // Initialize EmailJS with your public key

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    topic: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_4hzd4ya', 'template_hh2r7wn', formData)
      .then(() => {
        alert('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          topic: '',
          message: '',
        });
      })
      .catch((error) => {
        alert('Failed to send the message, please try again.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          If you want to know more about me or my previous work, fill out the form below!
        </p>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              name="firstName"
              id="first-name"
              className="contact--input text-md"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              name="lastName"
              id="last-name"
              className="contact--input text-md"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              name="email"
              id="email"
              className="contact--input text-md"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone number</span>
            <input
              type="number"
              name="phoneNumber"
              id="phone-number"
              className="contact--input text-md"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select
            id="choose-topic"
            name="topic"
            className="contact--input text-md"
            value={formData.topic}
            onChange={handleChange}
            required
          >
            <option value="">Select One...</option>
            <option value="Job">Job inquiry</option>
            <option value="Question">Questions</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            id="message"
            name="message"
            className="contact--input text-md"
            rows="8"
            placeholder="Type your message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>

        <div>
          <button className="btn btn-primary contact--form--btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
