'use client'

import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  // State variables for form fields and loading state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Prepare form data
    const body = { name, email, title, content };

    try {
      // Send POST request to server
      const response = await axios.post('http://localhost:8000/contact/', body);

      
        // Display success toast notification
        toast.success('Message sent successfully!', {
          position: toast.POSITION.TOP_CENTER,
        });

        // Clear input fields after successful submission
        setName('');
        setEmail('');
        setTitle('');
        setContent('');
      
    } catch (error) {
      console.error('Error:', error);

      // Display error message based on error type
      if (error.response) {
        // Server returned an error response
        toast.error('Server error. Please try again later.', {
          position: toast.POSITION.TOP_CENTER,
        });
      } else if (error.request) {
        // No response received from server
        toast.error('Network error. Please check your connection.', {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        // Other errors
        toast.error('An error occurred. Please try again later.', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="p-20 w-screen h-screen">
      <div className="">
        <h1 className="mb-10 text-2xl">Contact Us</h1>
      </div>
      <div className="flex m-10 text-gray-500 text-sm">
        <form className="flex flex-col gap-5 w-full">
          {/* Input fields with labels */}
          <label htmlFor="name">Name</label>
          <input
          className='border w-1/2 h-10 rounded-lg'
            id="name"
            type="text"
            autoComplete="name"
            name="name"
            required={true}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label htmlFor="email">Email</label>
          <input
          className='border w-1/2 h-10 rounded-lg'
            id="email"
            type="email"
            autoComplete="email"
            name="email"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="title">Message Title</label>
          <input
          className='border w-1/2 h-10 rounded-lg'
            id="title"
            type="text"
            name="title"
            required={true}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <label htmlFor="content">Message</label>
          <textarea
            id="content"
            name="content"
            className="border w-1/2 h-40 rounded-lg"
            rows="10"
            maxLength={500}
            required={true}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {/* Submit button */}
          <button
            className="border rounded mt-10 p-1 h-10 w-32 bg-blue-600 text-white"
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading} // Disable button while submitting
            aria-label={isLoading ? 'Sending...' : 'Submit'}
          >
            {isLoading ? 'Sending...' : 'Submit'}
          </button>
        </form>
        <ToastContainer /> {/* Toast notifications container */}
      </div>
    </div>
  );
};

export default Contact;
