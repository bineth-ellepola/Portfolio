// src/components/Contact.jsx
import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-gray-100 border-t border-slate-800">
      <div className="w-full max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Details Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Contact Info</h3>
            
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-500 w-6 h-6" />
              <div>
                <p className="text-gray-400">Email:</p>
                <a href="mailto:binethellepola@gmail.com" className="text-gray-100 hover:text-blue-500 transition duration-300">
                  binethellepola@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <FaPhone className="text-blue-500 w-6 h-6" />
              <div>
                <p className="text-gray-400">Phone:</p>
                <a href="tel:0710586108" className="text-gray-100 hover:text-blue-500 transition duration-300">
                  0710586108
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-blue-500 w-6 h-6" />
              <div>
                <p className="text-gray-400">Location:</p>
                <p className="text-gray-100">Gampaha, Srilanka</p>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Send a Message</h3>
            <form 
              // *** IMPORTANT: Replace with your Formspree or Netlify Forms endpoint ***
              action="YOUR_FORMSPREE_ENDPOINT" 
              method="POST" 
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-gray-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition duration-300"
              />
              <input
                type="email"
                name="_replyto" // Required for Formspree to set reply-to address
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-gray-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition duration-300"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-gray-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition duration-300"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-[1.01]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;