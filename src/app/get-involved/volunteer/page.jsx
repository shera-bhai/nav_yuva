// app/volunteer-registration/page.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// export const metadata = {e
//   title: 'Volunteer Registration | N.A.V Yuva Foundation',
//   description: 'Join N.A.V Yuva Foundation as a volunteer and contribute to community development, education, women empowerment, and environmental initiatives.',
// };

export default function VolunteerRegistrationPage() {
  // Form state management
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    occupation: '',
    education: '',
    dob: '',
    gender: '',
    skills: [],
    otherSkills: '',
    interests: [],
    availability: {
      weekdays: false,
      weekends: false,
      mornings: false,
      afternoons: false,
      evenings: false,
    },
    commitmentLevel: '',
    experience: '',
    motivation: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelation: '',
    referenceSource: '',
    agreeToTerms: false,
    receiveUpdates: false,
  });

  // Form validation state
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Volunteer interest areas based on foundation's focus
  const interestAreas = [
    'Education Support',
    'Women Empowerment',
    'Environmental Initiatives',
    'Health Camps',
    'Digital Content Creation',
    'Youth Development',
    'Career Counselling',
    'Sports Activities',
    'Food Donations',
    'Youth Parliament',
    'Debates and Quizzes',
  ];

  // Skills options
  const skillOptions = [
    'Teaching',
    'Counselling',
    'Event Management',
    'Content Writing',
    'Photography/Videography',
    'Social Media Management',
    'Public Speaking',
    'Computer Skills',
    'Sports Coaching',
    'Environmental Conservation',
    'Healthcare',
    'Leadership',
    'Other',
  ];

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry"
  ];

  // Handle text input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'agreeToTerms' || name === 'receiveUpdates') {
        setFormData({ ...formData, [name]: checked });
      } else if (name.startsWith('availability.')) {
        const availabilityKey = name.split('.')[1];
        setFormData({
          ...formData,
          availability: {
            ...formData.availability,
            [availabilityKey]: checked
          }
        });
      } else if (name === 'interests' || name === 'skills') {
        if (checked) {
          setFormData({
            ...formData,
            [name]: [...formData[name], value]
          });
        } else {
          setFormData({
            ...formData,
            [name]: formData[name].filter(item => item !== value)
          });
        }
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
    
    // Clear error for this field when user makes changes
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: null
      });
    }
  };

  // Validate form before submission
  const validateForm = () => {
    const errors = {};
    
    // Required fields validation
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.address.trim()) errors.address = 'Address is required';
    if (!formData.city.trim()) errors.city = 'City is required';
    if (!formData.state.trim()) errors.state = 'State is required';
    if (!formData.pincode.trim()) errors.pincode = 'PIN Code is required';
    else if (!/^\d{6}$/.test(formData.pincode)) errors.pincode = 'PIN Code must be 6 digits';
    if (!formData.occupation.trim()) errors.occupation = 'Occupation is required';
    if (!formData.education.trim()) errors.education = 'Education is required';
    
    // Validate interests selection
    if (formData.interests.length === 0) errors.interests = 'Please select at least one area of interest';

    if (formData.skills.length === 0) errors.skills = 'Please select at least one skill';

    if (formData.skills.includes('Other') && !formData.otherSkills.trim()) {
      errors.otherSkills = 'Please specify other skills';
    }
    
    // Validate commitment level
    if (!formData.availability.weekdays && !formData.availability.weekends) {
      errors.availability = 'Please indicate your availability';
    }
    if (!formData.commitmentLevel) errors.commitmentLevel = 'Please indicate your time commitment';

    // Validate experience
    if (!formData.experience.trim()) errors.experience = 'Please share your previous experience with volunteering or community service';
    
    // Validate motivation
    if (!formData.motivation.trim()) errors.motivation = 'Please share your motivation for volunteering';
    
    // Validate emergency contact for non-empty fields
    if (formData.emergencyContactName && !formData.emergencyContactPhone) {
      errors.emergencyContactPhone = 'Emergency contact phone is required';
    }
    
    // Validate terms agreement
    if (!formData.agreeToTerms) errors.agreeToTerms = 'You must agree to the terms and conditions';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Simulate API call to backend
        // In production, replace with actual API call:
        // const response = await fetch('/api/volunteer-registration', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(formData)
        // });
        // if (!response.ok) throw new Error('Failed to submit form');
        
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitSuccess(true);
      } catch (error) {
        console.error('Error submitting form:', error);
        setFormErrors({
          ...formErrors,
          submit: 'Failed to submit form. Please try again later.'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // If form submission was successful, show success view
  if (submitSuccess) {
    return (
      <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="py-8 px-4 sm:px-10 text-center">
            <div className="mx-auto h-24 w-24 relative mb-4">
              <Image
                src="/assets/logo.jpg"
                alt="N.A.V Yuva Foundation Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Thank You for Volunteering!
            </h2>
          </div>
          
          <div className="py-12 px-4 sm:px-10">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Your Volunteer Application Has Been Received
              </h3>
              
              <p className="text-gray-600 mb-6">
                Thank you for your interest in volunteering with N.A.V Yuva Foundation. Our team will review your application and contact you within 3-5 business days to discuss the next steps in the volunteer onboarding process.
              </p>
              
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <h4 className="font-medium text-gray-900 mb-2">What Happens Next?</h4>
                <ol className="list-decimal text-left pl-5 text-gray-600 space-y-2">
                  <li>Our volunteer coordinator will review your application</li>
                  <li>You'll receive an email confirmation with your application details</li>
                  <li>We'll schedule an orientation session to discuss volunteer opportunities that match your interests</li>
                  <li>You'll be introduced to our team and receive necessary training</li>
                </ol>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/" className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Return to Homepage
                </Link>
                <Link href="/get-involved" className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Explore Other Ways to Help
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main registration form view
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-black">
        <div className="">
          <Image
            src="/assets/vol.jpg"
            alt="Volunteer with N.A.V Yuva Foundation"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Volunteer Registration
          </h1>
          <p className="mt-4 text-lg text-white max-w-3xl mx-auto">
            Join our team of dedicated volunteers making a difference in rural communities through education, empowerment, and environmental initiatives.
          </p>
        </div>
      </div>

      {/* Registration Form */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-4 py-6 bg-primary-light border-b border-gray-200 sm:px-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Please fill out the form below to register as a volunteer. Fields marked with * are required.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6 space-y-8">
            {/* General error message */}
            {formErrors.submit && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      {formErrors.submit}
                    </h3>
                  </div>
                </div>
              </div>
            )}
            
            {/* Personal Information Section */}
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name *
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md ${formErrors.firstName ? 'border-red-500' : ''}`}
                  />
                  {formErrors.firstName && (
                    <p className="mt-2 text-sm text-red-600">{formErrors.firstName}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name *
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md ${formErrors.lastName ? 'border-red-500' : ''}`}
                  />
                  {formErrors.lastName && (
                    <p className="mt-2 text-sm text-red-600">{formErrors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md ${formErrors.email ? 'border-red-500' : ''}`}
                  />
                  {formErrors.email && (
                    <p className="mt-2 text-sm text-red-600">{formErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md ${formErrors.phone ? 'border-red-500' : ''}`}
                  />
                  {formErrors.phone && (
                    <p className="mt-2 text-sm text-red-600">{formErrors.phone}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address *
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                  {formErrors.address && (
                    <p className="mt-2 text-sm text-red-600">{formErrors.address}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City *
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md ${formErrors.city ? 'border-red-500' : ''}`}
                  />
                  {formErrors.city && (
                    <p className="mt-2 text-sm text-red-600">{formErrors.city}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  State *
                </label>
                <div className="mt-1">
                  <select
                    type="text"
                    name="state"
                    id="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={`shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md ${formErrors.state ? 'border-red-500' : ''}`}
                  >
                  <option value="" disabled hidden>Select State</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                  </select>
                  {formErrors.state && (
                    <p className="mt-2 text-sm text-red-600">{formErrors.state}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
                  PIN Code *
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="pincode"
                    id="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                  {formErrors.pincode && (
                    <p className="mt-2 text-sm text-red-600">{formErrors.pincode}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
                  Occupation
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="occupation"
                    id="occupation"
                    value={formData.occupation}
                    onChange={handleInputChange}
                    className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                  {formErrors.occupation && (
                    <p className="mt-2 text-sm text-red-600">{formErrors.occupation}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="education" className="block text-sm font-medium text-gray-700">
                  Highest Education
                </label>
                <div className="mt-1">
                  <select
                    id="education"
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option value="">Select education level</option>
                    <option value="High School">High School</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="Doctorate">Doctorate</option>
                    <option value="Other">Other</option>
                  </select>
                  {formErrors.education && (
                    <p className="mt-2 text-sm text-red-600">{formErrors.education}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Skills and Interests Section */}
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900 border-b border-gray-200 pb-2 mb-4">
                Skills and Interests
              </h3>
              
              <div className="mt-6">
                <fieldset>
                  <legend className="text-base font-medium text-gray-900">
                    Areas of Interest *
                  </legend>
                  <p className="text-sm text-gray-500">Select all that apply</p>
                  <div className="mt-2 space-y-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2">
                      {interestAreas.map((interest) => (
                        <div key={interest} className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id={`interest-${interest}`}
                              name="interests"
                              type="checkbox"
                              value={interest}
                              checked={formData.interests.includes(interest)}
                              onChange={handleInputChange}
                              className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor={`interest-${interest}`} className="font-medium text-gray-700">
                              {interest}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {formErrors.interests && (
                    <p className="mt-2 text-sm text-red-600">{formErrors.interests}</p>
                  )}
                </fieldset>
              </div>

              <div className="mt-6">
                <fieldset>
                  <legend className="text-base font-medium text-gray-900">
                    Skills & Expertise
                  </legend>
                  <p className="text-sm text-gray-500">Select all that apply</p>
                  <div className="mt-2 space-y-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2">
                      {skillOptions.map((skill) => (
                        <div key={skill} className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id={`skill-${skill}`}
                              name="skills"
                              type="checkbox"
                              value={skill}
                              checked={formData.skills.includes(skill)}
                              onChange={handleInputChange}
                              className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor={`skill-${skill}`} className="font-medium text-gray-700">
                              {skill}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {formErrors.skills && (
                    <p className="mt-2 text-sm text-red-600">{formErrors.skills}</p>
                  )}
                </fieldset>
              </div>

              {formData.skills.includes('Other') && (
                <div className="mt-6">
                  <label htmlFor="otherSkills" className="block text-sm font-medium text-gray-700">
                    Please specify other skills
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="otherSkills"
                      id="otherSkills"
                      value={formData.otherSkills}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                    {formErrors.otherSkills && (
                      <p className="mt-2 text-sm text-red-600">{formErrors.otherSkills}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
            {/* Availability Section */}
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900 border-b border-gray-200 pb-2 mb-4">
                Availability
              </h3>
              
              <div className="mt-6">
                <fieldset>
                  <legend className="text-base font-medium text-gray-900">
                    When are you available to volunteer? *
                  </legend>
                  <p className="text-sm text-gray-500">Select all that apply</p>
                  <div className="mt-2 space-y-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2">
                      {['weekdays', 'weekends', 'mornings', 'afternoons', 'evenings'].map((time) => (
                        <div key={time} className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id={`availability-${time}`}
                              name={`availability.${time}`}
                              type="checkbox"
                              checked={formData.availability[time]}
                              onChange={handleInputChange}
                              className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor={`availability-${time}`} className="font-medium text-gray-700">
                              {time.charAt(0).toUpperCase() + time.slice(1)}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                    {formErrors.availability && (
                      <p className="mt-2 text-sm text-red-600">{formErrors.availability}</p>
                    )}
                </fieldset>
              </div>

              <div className="mt-6">
                <label htmlFor="commitmentLevel" className="block text-sm font-medium text-gray-700">
                  How many hours per week can you commit? *
                </label>
                <select
                  id="commitmentLevel"
                  name="commitmentLevel"
                  value={formData.commitmentLevel}
                  onChange={handleInputChange}
                  className={`shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md ${formErrors.commitmentLevel ? 'border-red-500' : ''}`}
                >
                  <option value="">Select commitment level</option>
                  <option value="<5 hours">5 hours</option>
                  <option value="5-10 hours">5-10 hours</option>
                  <option value="10-15 hours">10-15 hours</option>
                  <option value="15-20 hours">15-20 hours</option>
                  <option value="20+ hours">20+ hours</option>
                </select>
                {formErrors.commitmentLevel && (
                  <p className="mt-2 text-sm text-red-600">{formErrors.commitmentLevel}</p>
                )}
              </div>
            </div>
            {/* Experience Section */}
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900 border-b border-gray-200 pb-2 mb-4">
                Experience
              </h3>
              
              <div className="mt-6">
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                  Do you have any previous volunteering experience? *
                </label>
                <div className="mt-1">
                  <textarea
                    id="experience"
                    name="experience"
                    rows={3}
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                  {formErrors.experience && (
                    <p className="mt-2 text-sm text-red-600">{formErrors.experience}</p>
                  )}
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Please share any relevant experience or skills that you believe would be beneficial for your role as a volunteer.
              </p>
            </div>
            {/* Motivation Section */}
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900 border-b border-gray-200 pb-2 mb-4">
                Motivation
              </h3>
              
              <div className="mt-6">
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700">
                  Why do you want to volunteer with N.A.V Yuva Foundation? *
                </label>
                <div className="mt-1">
                  <textarea
                    id="motivation"
                    name="motivation"
                    rows={3}
                    value={formData.motivation}
                    onChange={handleInputChange}
                    className={`shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md ${formErrors.motivation ? 'border-red-500' : ''}`}
                  />
                </div>
                {formErrors.motivation && (
                  <p className="mt-2 text-sm text-red-600">{formErrors.motivation}</p>
                )}
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Please share your motivation for volunteering with us and how you believe you can contribute to our mission.
              </p>
            </div>
            {/* Emergency Contact Section */}
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900 border-b border-gray-200 pb-2 mb-4">
                Emergency Contact Information
              </h3>
              
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="emergencyContactName" className="block text-sm font-medium text-gray-700">
                    Name *
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="emergencyContactName"
                      id="emergencyContactName"
                      value={formData.emergencyContactName}
                      onChange={handleInputChange}
                      className={`shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md ${formErrors.emergencyContactName ? 'border-red-500' : ''}`}
                    />
                    {formErrors.emergencyContactName && (
                      <p className="mt-2 text-sm text-red-600">{formErrors.emergencyContactName}</p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="emergencyContactPhone" className="block text-sm font-medium text-gray-700">
                    Phone Number *
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      name="emergencyContactPhone"
                      id="emergencyContactPhone"
                      value={formData.emergencyContactPhone}
                      onChange={handleInputChange}
                      className={`shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md ${formErrors.emergencyContactPhone ? 'border-red-500' : ''}`}
                    />
                    {formErrors.emergencyContactPhone && (
                      <p className="mt-2 text-sm text-red-600">{formErrors.emergencyContactPhone}</p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="emergencyContactRelation" className="block text-sm font-medium text-gray-700">
                    Relationship *
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="emergencyContactRelation"
                      id="emergencyContactRelation"
                      value={formData.emergencyContactRelation}
                      onChange={handleInputChange}
                      className={`shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md ${formErrors.emergencyContactRelation ? 'border-red-500' : ''}`}
                    />
                    {formErrors.emergencyContactRelation && (
                      <p className="mt-2 text-sm text-red-600">{formErrors.emergencyContactRelation}</p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="emergencyContactEmail" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="emergencyContactEmail"
                      id="emergencyContactEmail"
                      value={formData.emergencyContactEmail}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="emergencyContactAddress" className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="emergencyContactAddress"
                      id="emergencyContactAddress"
                      value={formData.emergencyContactAddress}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="emergencyContactCity" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="emergencyContactCity"
                      id="emergencyContactCity"
                      value={formData.emergencyContactCity}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="emergencyContactState" className="block text-sm font-medium text-gray-700">
                    State
                  </label>
                  <div className="mt-1">
                    <select
                      type="text"
                      name="emergencyContactState"
                      id="emergencyContactState"
                      value={formData.emergencyContactState}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                    >
                    <option value="" disabled hidden>Select State</option>
                    {indianStates.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="emergencyContactPincode" className="block text-sm font-medium text-gray-700">
                    PIN Code
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="emergencyContactPincode"
                      id="emergencyContactPincode"
                      value={formData.emergencyContactPincode}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Terms and Conditions Section */}
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900 border-b border-gray-200 pb-2 mb-4">
                Terms and Conditions
              </h3>
              
              <div className="mt-6">
                <label htmlFor="terms" className="block text-sm font-medium text-gray-700">
                  I agree to the terms and conditions *
                </label>
                <div className="flex gap-2 items-center mt-1">
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    checked={formData.terms}
                    onChange={handleInputChange}
                    className={`focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded ${formErrors.terms ? 'border-red-500' : ''}`}
                  />
                  {formErrors.terms && (
                    <p className="mt-2 text-sm text-red-600">{formErrors.terms}</p>
                  )}
                  <p className="text-sm text-gray-500">
                    By checking this box, you agree to our terms and conditions.
                  </p>
                </div>
              </div>
            </div>
            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}