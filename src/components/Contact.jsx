import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/contact.css';


const Contact = () => {
return (
<section id="contact" className="contact">
<div className="contact-inner">
<h2 className="section-title">Get In Touch</h2>


<div className="contact-grid">
<div className="contact-info">
<h3>Contact Info</h3>


<div className="contact-row">
<FaEnvelope className="ci-icon" />
<div>
<p className="muted">Email:</p>
<a href="mailto:binethellepola@gmail.com" className="contact-link">binethellepola@gmail.com</a>
</div>
</div>


<div className="contact-row">
<FaPhone className="ci-icon" />
<div>
<p className="muted">Phone:</p>
<a href="tel:0710586108" className="contact-link">0710586108</a>
</div>
</div>


<div className="contact-row">
<FaMapMarkerAlt className="ci-icon" />
<div>
<p className="muted">Location:</p>
<p>Gampaha, Sri Lanka</p>
</div>
</div>
</div>


<form action="YOUR_FORMSPREE_ENDPOINT" method="POST" className="contact-form">
<h3>Send a Message</h3>
<input type="text" name="name" placeholder="Your Name" required />
<input type="email" name="_replyto" placeholder="Your Email" required />
<textarea name="message" rows="5" placeholder="Your Message" required></textarea>
<button type="submit" className="btn primary full">Send Message</button>
</form>
</div>
</div>
</section>
);
};


export default Contact;