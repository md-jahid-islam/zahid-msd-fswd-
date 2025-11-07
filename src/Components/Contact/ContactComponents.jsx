import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaGithub,
 } from "react-icons/fa";
 import { toast, ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

 const ContactComponents = () => {
  // ============ 🧩 Form State ============ // 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // ========= 🔍 Handle Input Change ========== // 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ========== ✅ Form Validation + Submit ============ // 
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    // ============ Email validation regex =========== // 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !subject || !message) {
      toast.error("⚠️ Please fill in all fields!", {
        position: "top-center",
        theme: "dark",
      });
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("❌ Invalid email address!", {
        position: "top-center",
        theme: "dark",
      });
      return;
    }

    // ========== ✅ Success Message ============== // 
    toast.success("✅ Message sent successfully!", {
      position: "top-center",
      theme: "dark",
    });

    // =========== Clear form fields after submission ========== // 
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-6 md:px-16 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl opacity-30"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Get In <span className="text-blue-500">Touch</span>
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              I’d love to hear from you! Whether you have a question, a project
              idea, or just want to connect — feel free to reach out anytime.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400 text-xl" />
                <span>jahidulislamwebbd@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-cyan-400 text-xl" />
                <span>+880 1540587085</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-purple-400 text-xl" />
                <span>Uttara Azampur, Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 pt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 text-2xl transition">
              <FaFacebook />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 text-2xl transition">
              <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 text-2xl transition">
              <FaGithub />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Contact Form + Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-gray-800/60 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm shadow-md hover:shadow-blue-500/20 transition">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-gray-700/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-gray-700/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full mt-6 bg-gray-700/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full mt-6 bg-gray-700/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-6 w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition transform shadow-md hover:shadow-cyan-500/30"
              >
                Send Message
              </button>
            </form>

            {/* Google Map */}
            <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-700">
              <iframe
                title="Uttara Azampur Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.037944965712!2d90.39848507450977!3d23.78077727864072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c416e3b83b87%3A0x98a52f7988d9e1d1!2sAzampur%2C%20Uttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1707029300000!5m2!1sen!2sbd"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy">
              </iframe>
            </div>
          </motion.div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
 };

 export default ContactComponents;
