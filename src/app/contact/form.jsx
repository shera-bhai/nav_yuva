'use client';
import { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({}); // 🔴 Error state

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
  
    const response = await fetch('https://formspree.io/f/mjkynzwe', {
      method: 'POST',
      body: formData, // Send the original FormData
      headers: {
        Accept: 'application/json',
      },
    });

    const result = await response.json();

    if (result.ok) {
      alert('Thank you! Your message has been sent.');
      setStatus('success');
      e.target.reset();
      setErrors({});
    } else {
      alert('Oops! Something went wrong.');
      setStatus('error');
    }
  };

    return (
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="First Name"
                        id="first-name"
                        autoComplete="given-name" required
                        className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="Last Name"
                        id="last-name"
                        autoComplete="family-name" required
                        className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border border-gray-300 rounded-md"
                      />
                    </div>
                    {errors.lastName && <p className={errorClass}>{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="Email"
                      type="email"
                      autoComplete="email" required
                      className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border border-gray-300 rounded-md"
                    />
                  </div>
                  {errors.email && <p className={errorClass}>{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="Phone"
                      id="phone"
                      autoComplete="tel" required
                      className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border border-gray-300 rounded-md"
                    />
                  </div>
                  {errors.phone && <p className={errorClass}>{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject" required
                      className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border border-gray-300 rounded-md"
                    />
                  </div>
                  {errors.subject && <p className={errorClass}>{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="Message"
                      rows={4} required
                      className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                  {errors.message && <p className={errorClass}>{errors.message}</p>}
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center py-3 px-6 border border-gray-100 shadow-md text-base font-medium rounded-md hover:bg-background hover:text-white transition duration-300 ease-in-out focus:outline-none focus:ring- focus:ring-offset-2 focus:ring-primary"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
    );
}

export default ContactForm;