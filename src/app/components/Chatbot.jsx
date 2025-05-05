'use client';
import { useEffect } from 'react';

export default function Chatbot() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script1 = document.createElement('script');
      script1.src = 'https://cdn.botpress.cloud/webchat/v2.4/inject.js';
      script1.async = true;
      
      const script2 = document.createElement('script');
      script2.src = 'https://files.bpcontent.cloud/2025/05/04/12/20250504122153-AIVLUGZH.js';
      script2.async = true;

      document.body.appendChild(script1);
      script1.onload = () => document.body.appendChild(script2);
    }
  }, []);

  return null;
}