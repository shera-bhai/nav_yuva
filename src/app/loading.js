// app/loading.js
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  
  // Foundation's core initiatives for rotating messages
  const messages = [
    "Empowering Communities",
    "Educating Youth",
    "Supporting Women",
    "Planting Trees",
    "Organizing Youth Parliaments",
    "Providing Career Counseling"
  ];

  useEffect(() => {
    // Progress animation
    const duration = 3500; // 3.5 seconds
    const interval = 20; // Update every 20ms for smooth animation
    const step = (100 * interval) / duration;
    
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + step;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, interval);
    
    // Rotate through messages
    const messageTimer = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length);
    }, 800);
    
    // Clean up on unmount
    return () => {
      clearInterval(timer);
      clearInterval(messageTimer);
    };
  }, [messages.length]);
  
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-lightest to-primary-light flex flex-col justify-center items-center z-50">
      {/* Foundation Logo */}
      <div className="animate-pulse mb-8">
        <Image
          src="/assets/navyf.png" 
          alt="NAV Yuva Foundation Logo"
          width={180}
          height={180}
          priority
        />
      </div>
      
      {/* Visual representation of foundation's work */}
      <div className="relative w-24 h-24 mb-8">
        {/* Tree icon representing environmental initiatives */}
        <div className="absolute inset-0 flex items-center justify-center text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.5,2C8.91,2 6,4.91 6,8.5C6,10.57 7.21,12.36 9,13.29V21H16V13.29C17.79,12.36 19,10.57 19,8.5C19,4.91 16.09,2 12.5,2M12.5,4C15,4 17,6 17,8.5C17,10.27 15.89,11.73 14.25,12.36V19H10.75V12.36C9.11,11.73 8,10.27 8,8.5C8,6 10,4 12.5,4Z" />
          </svg>
        </div>
        
        {/* Animated circles representing community */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-3 h-3 rounded-full bg-primary"
              style={{
                top: `${50 + 35 * Math.sin(2 * Math.PI * i / 5)}%`,
                left: `${50 + 35 * Math.cos(2 * Math.PI * i / 5)}%`,
                animation: `pulse 1.5s ease-in-out ${i * 0.3}s infinite alternate`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Rotating messages */}
      <div className="h-8 mb-6 text-center">
        <h2 className="text-xl font-bold text-primary transition-all duration-300">
          {messages[currentMessage]}
        </h2>
      </div>
      
      {/* Progress bar */}
      <div className="w-64 h-2 bg-white bg-opacity-50 rounded-full overflow-hidden mb-2">
        <div 
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Foundation name */}
      <p className="text-primary-dark font-semibold mt-4">
        NAV Yuva Foundation
      </p>
      
      {/* Foundation's mission statement */}
      <p className="text-sm text-primary-dark mt-8 max-w-md text-center px-4">
        "Empowering communities through education, sustainability, and holistic development"
      </p>
      
      {/* Custom animation for keyframes */}
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
