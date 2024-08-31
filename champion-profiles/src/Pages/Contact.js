import React, { useState } from "react";
import "./Contact.css";

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    setIsSubmitted(true); // Update state to show submitted message
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <center>
          <h1>Contact Us</h1>
        </center>
      </header>
      <main className="contact-main">
        {isSubmitted ? (
          <section className="submission-confirmation">
            <h2>Thank You!</h2>
            <p>Your message has been successfully submitted. We will get back to you soon.</p>
          </section>
        ) : (
          <>
            <section className="contact-details">
              <p>
                We’d love to hear from you! Whether you have questions, feedback, or just want to connect, feel free to reach out to us.
              </p>
              <p>
                <strong>Email:</strong> support@championsprofile.com
              </p>
              <p>
                <strong>Phone:</strong> +1 234 567 890
              </p>
              <p>
                <strong>Address:</strong> 123 Sports Lane, Champion City, SP 12345
              </p>
            </section>
            <section className="contact-form">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
                <button type="submit">Send</button>
              </form>
            </section>
          </>
        )}
      </main>
      <footer className="contact-footer">
        <p>&copy; 2024 Champions Profile</p>
      </footer>
    </div>
  );
};

export default ContactUs;
