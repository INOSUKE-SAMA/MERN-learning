import React from 'react';

const Contact = ({ darkMode }) => {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-8 h-screen">
       <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Login</h2>
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
      
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full mb-3 p-2 border rounded"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
