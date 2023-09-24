import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true); // Set loading state to true when starting to send email

    const { name, email, desc } = e.target.elements;

    const templateParams = {
      from_name: name.value,
      reply_to: email.value,
      message: desc.value
    };

    emailjs
      .send(
        "service_3ek5xjc",
        "template_2yo4fss",
        templateParams,
        "dW3K8h0h-3ineGRPJ"
      )
      .then(
        (result) => {
          alert(
            "Thank you for filling out the form . I will get back to you soon"
          );
        },
        (error) => {
          alert("Failed to submit. Please try again later.");
        }
      )
      .finally(() => {
        setLoading(false); // Set loading state to false after email is sent or on error
      });

    e.target.reset();
  };

  return (
    <section id="Contact-form">
      <div className="contact-left">
        <span className="contact-title">Contact Me</span>
        <span className="contact-desc">
          If you loved my work and want me in your team, feel free to contact me
          by filling the following details, and I will get back to you soon.
        </span>
      </div>
      <div className="contact-right">
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="desc">Description</label>
            <textarea
              id="desc"
              name="desc"
              placeholder="Your message"
            ></textarea>
          </div>
          <button type="submit">{loading ? "Sending..." : "Submit"}</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
