import React, { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">
            123 Main St<br />
            City, State 12345<br />
            Phone: (123) 456-7890<br />
            Instagram: <a href="https://www.instagram.com/example" className="text-blue-600">example</a><br />
            Email: <a href="mailto:example@gmail.com" className="text-blue-600">example@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name:
              </label>
              <input
                className="border border-gray-400 p-2 w-full rounded-md"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email:
              </label>
              <input
                className="border border-gray-400 p-2 w-full rounded-md"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                Message:
              </label>
              <textarea
                className="border border-gray-400 p-2 w-full rounded-md"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
