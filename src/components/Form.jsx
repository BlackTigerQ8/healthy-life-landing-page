import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., sending data to an API or server.
    console.log(formData);
    alert("Thank you for your message. We will get back to you shortly.");
    setFormData({ name: "", email: "", message: "" }); // Clear form after submission
  };

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-16"
    >
      <div className="bg-neutralSilver py-16 md:py-8">
        <div className="md:w-3/4 lg:w-1/2 mx-auto text-center">
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-6">
            Contact Us
          </h2>
          <p className="text-neutralGrey mb-8">
            If you have any questions, please feel free to reach out to us.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 border-none rounded-md text-neutralGrey"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 border-none rounded-md text-neutralGrey"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border-none rounded-md text-neutralGrey"
                required
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full sm:w-auto bg-neutralDGrey text-white py-2 px-4 rounded hover:bg-brandPrimary transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Form;
