// Contact.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = { ...formData };

    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL,
        dataToSend,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      toast.success('submitted successfully! 🎉');
    } catch (error) {
      toast.error('Failed to submit . Please try again later. 😢');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="h-full w-screen flex items-center justify-center p-4">
        <form
          onSubmit={handleSubmit}
          className="form-container bg-black border border-gray-700 shadow-lg rounded-lg p-4 w-full max-w-md flex flex-col space-y-4"
        >
          <h2 className="text-lg font-semibold text-center text-[#bad3ef] mb-4">
            Message Me
          </h2>

          <label className="flex flex-col text-[#bad3ef]">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="mt-1 p-2 bg-black border border-gray-600 rounded text-[#bad3ef] placeholder-[#bad3ef] focus:outline-none focus:ring focus:ring-[#bad3ef]"
            />
          </label>

          <label className="flex flex-col text-[#bad3ef]">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="mt-1 p-2 bg-black border border-gray-600 rounded text-[#bad3ef] placeholder-[#bad3ef] focus:outline-none focus:ring focus:ring-[#bad3ef]"
            />
          </label>

          <label className="flex flex-col text-[#bad3ef]">
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="mt-1 p-2 bg-black border border-gray-600 rounded text-[#bad3ef] placeholder-[#bad3ef] focus:outline-none focus:ring focus:ring-[#bad3ef]"
            />
          </label>

          <label className="flex flex-col text-[#bad3ef]">
            Subject:
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="mt-1 p-2 bg-black border border-gray-600 rounded text-[#bad3ef] placeholder-[#bad3ef] focus:outline-none focus:ring focus:ring-[#bad3ef]"
            />
          </label>

          <label className="flex flex-col text-[#bad3ef]">
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="mt-1 p-2 bg-black border border-gray-600 rounded text-[#bad3ef] placeholder-[#bad3ef] h-24 resize-none focus:outline-none focus:ring focus:ring-[#bad3ef]"
            ></textarea>
          </label>

          <button
            type="submit"
            className="bg-[#bad3ef] text-black py-2 px-4 rounded hover:bg-opacity-90 focus:outline-none focus:ring focus:ring-[#bad3ef]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
