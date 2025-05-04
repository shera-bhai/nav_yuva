'use client';
import { useEffect, useState } from 'react';
import ParticleBackground from './components/ui/ParticleBackground';

export default function Loading() {
  const [progress, setProgress] = useState<number>(0);
  const [currentPhrase, setCurrentPhrase] = useState<number>(0);
  
  const phrases: string[] = [
    "Empowering Communities",
    "Educating Youth",
    "Empowering Women",
    "Planting Trees",
    "Building Futures"
  ];

  // Simulate loading progress over 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress: number) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 100); // Increment every 100ms (100 increments over 10 seconds)

    return () => clearInterval(interval);
  }, []);

  // Rotate through phrases every 2 seconds
  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setCurrentPhrase((prev: number) => (prev + 1) % phrases.length);
    }, 2000);

    return () => clearInterval(phraseInterval);
  }, [phrases.length]);

  const [currentQuote, setCurrentQuote] = useState<number>(0);
  
  const quotes: string[] = [
    "\"Education is the most powerful weapon which you can use to change the world.\" — Nelson Mandela",
    "\"The best way to find yourself is to lose yourself in the service of others.\" — Mahatma Gandhi",
    "\"When you educate a girl, you educate a nation.\" — African Proverb",
    "\"The greatness of a community is most accurately measured by the compassionate actions of its members.\" — Coretta Scott King",
    "\"Someone is sitting in the shade today because someone planted a tree a long time ago.\" — Warren Buffett"
  ];

  // Rotate through quotes every 5 seconds
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev: number) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(quoteInterval);
  }, [quotes.length]);

  return (
    <>
      <ParticleBackground />
      <div className="fixed inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 flex flex-col items-center justify-center z-50">
        <div className="w-full max-w-md px-4 flex flex-col items-center">
          <div className="relative w-32 h-32 mb-8">
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ 
                opacity: progress > 25 ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                filter: 'drop-shadow(0 0 8px rgba(126, 34, 206, 0.3))'
              }}
            >
              <path 
                d="M50 10 L65 40 L80 25 L70 55 L90 50 L60 70 L75 85 L50 80 L25 85 L40 70 L10 50 L30 55 L20 25 L35 40 L50 10Z" 
                fill="url(#treeGradient)" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{
                  transform: `scale(${progress > 25 ? 1 : 0.5})`,
                  transformOrigin: 'center',
                  transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              />
              <rect 
                x="45" 
                y="80" 
                width="10" 
                height="15" 
                fill="#8B5A2B" 
                style={{
                  transform: `scaleY(${progress > 30 ? 1 : 0})`,
                  transformOrigin: 'top',
                  transition: 'transform 0.5s ease-out'
                }}
              />
              <defs>
                <linearGradient id="treeGradient" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#10B981" />
                  <stop offset="1" stopColor="#059669" />
                </linearGradient>
              </defs>
            </svg>

            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ 
                opacity: progress > 50 ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                filter: 'drop-shadow(0 0 8px rgba(217, 70, 239, 0.3))'
              }}
            >
              <path 
                d="M30 30 L70 30 L70 70 L30 70 Z" 
                fill="#f3f4f6" 
                stroke="#d1d5db" 
                strokeWidth="2"
                style={{
                  transform: `scale(${progress > 50 ? 1 : 0.5}) rotate(${progress > 50 ? 0 : -30}deg)`,
                  transformOrigin: 'center',
                  transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              />
              <path 
                d="M35 40 L65 40 M35 50 L65 50 M35 60 L55 60" 
                stroke="#6b21a8" 
                strokeWidth="3" 
                strokeLinecap="round"
                strokeDasharray="30"
                strokeDashoffset={progress > 60 ? "0" : "30"}
                style={{
                  transition: 'stroke-dashoffset 0.8s ease-out'
                }}
              />
            </svg>

            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ 
                opacity: progress > 75 ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                filter: 'drop-shadow(0 0 8px rgba(14, 165, 233, 0.3))'
              }}
            >
              <circle 
                cx="50" 
                cy="35" 
                r="10" 
                fill="#7e22ce"
                style={{
                  transform: `scale(${progress > 75 ? 1 : 0})`,
                  transformOrigin: 'center',
                  transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              />
              <path 
                d="M50 45 L50 65 M40 55 L60 55" 
                stroke="#7e22ce" 
                strokeWidth="4" 
                strokeLinecap="round"
                style={{
                  strokeDasharray: 30,
                  strokeDashoffset: progress > 80 ? 0 : 30,
                  transition: 'stroke-dashoffset 0.5s ease-out'
                }}
              />
              
              <circle 
                cx="30" 
                cy="35" 
                r="8" 
                fill="#d946ef"
                style={{
                  transform: `translateX(${progress > 85 ? 0 : -20}px) scale(${progress > 85 ? 1 : 0})`,
                  transformOrigin: 'center',
                  transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              />
              <path 
                d="M30 43 L30 60 M25 50 L35 50" 
                stroke="#d946ef" 
                strokeWidth="3" 
                strokeLinecap="round"
                style={{
                  strokeDasharray: 25,
                  strokeDashoffset: progress > 90 ? 0 : 25,
                  transition: 'stroke-dashoffset 0.5s ease-out'
                }}
              />
              
              <circle 
                cx="70" 
                cy="35" 
                r="8" 
                fill="#0ea5e9"
                style={{
                  transform: `translateX(${progress > 85 ? 0 : 20}px) scale(${progress > 85 ? 1 : 0})`,
                  transformOrigin: 'center',
                  transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              />
              <path 
                d="M70 43 L70 60 M65 50 L75 50" 
                stroke="#0ea5e9" 
                strokeWidth="3" 
                strokeLinecap="round"
                style={{
                  strokeDasharray: 25,
                  strokeDashoffset: progress > 90 ? 0 : 25,
                  transition: 'stroke-dashoffset 0.5s ease-out'
                }}
              />
            </svg>
            
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ 
                opacity: progress > 95 ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
              }}
            >
              <text 
                x="50" 
                y="50" 
                fontFamily="Arial" 
                fontSize="24" 
                fontWeight="bold" 
                fill="#7e22ce" 
                textAnchor="middle"
                className="animate-pulse"
                style={{
                  filter: 'drop-shadow(0 0 2px rgba(126, 34, 206, 0.5))'
                }}
              >
                NAV
              </text>
            </svg>
          </div>
          
          <div className="h-8 overflow-hidden mb-8">
            <div 
              className="text-xl font-bold text-primary text-center transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${currentPhrase * 2}rem)` }}
            >
              {phrases.map((phrase: string, index: number) => (
                <div key={index} className="h-8">{phrase}</div>
              ))}
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="max-w-md text-center mt-6 h-16 overflow-hidden">
            <div 
              className="transition-opacity duration-1000"
              style={{ opacity: progress > 60 ? 1 : 0 }}
            >
              <p className="text-gray-600 text-sm italic">
                {quotes[currentQuote]}
              </p>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm font-medium" aria-live="polite">
            {progress < 100 ? 'Loading...' : 'Ready!'}
          </p>
        </div>
      </div>
    </>
  );
}