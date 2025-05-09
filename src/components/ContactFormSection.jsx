import React, { useState, useEffect } from "react";
import Button from "./Button";

const ContactFormSection = ({showMessageBox, setShowMessageBox,setStatus,setProgress}) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        setShowMessageBox(true); // Show the success message box
        setProgress(100); // Reset the progress bar to 100%
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred.");
    }
    setShowMessageBox(true);
    setProgress(100);
    setFormData({
      name: "",
      email: "",
      message:""
  });
  };

  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">Contact Us</h2>
      <p className="text-gray-600 mb-6">For reservations or inquiries, please complete the form below.</p>
      <form className="mb-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent transition"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent transition"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent transition"
            required
          ></textarea>
        </div>
        <Button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition duration-300 transform hover:scale-105"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactFormSection;

