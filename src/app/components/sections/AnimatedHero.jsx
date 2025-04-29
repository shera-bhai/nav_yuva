// components/sections/AnimatedHero.js
'use client'

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import * as THREE from 'three';

export default function AnimatedHero({ title, description, imageSrc, imageAlt }) {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    // GSAP animations for text
    const tl = gsap.timeline();
    tl.from('h1', { opacity: 0, y: 50, duration: 1 })
      .from('p', { opacity: 0, y: 30, duration: 0.8 }, '-=0.5');
    
    // Three.js setup for liquid overlay
    const container = heroRef.current;
    const canvas = canvasRef.current;
    
    // Handle mouse movement for liquid effect
    const handleMouseMove = (e) => {
      mousePosition.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      alpha: true, 
      antialias: true 
    });
    
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    camera.position.z = 5;
    
    // Create liquid effect shader
    const liquidShader = {
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(container.offsetWidth, container.offsetHeight) },
        mousePos: { value: new THREE.Vector2(0, 0) }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 resolution;
        uniform vec2 mousePos;
        varying vec2 vUv;
        
        void main() {
          vec2 uv = vUv;
          vec2 mouse = mousePos * 0.5 + 0.5;
          
          // Create liquid effect based on mouse position
          float dist = length(uv - mouse);
          float ripple = sin(dist * 20.0 - time * 2.0) * 0.05;
          
          // Gradient colors (adjust for your brand colors)
          vec3 color1 = vec3(0.0, 0.4, 0.6); // Primary color
          vec3 color2 = vec3(0.2, 0.0, 0.4); // Secondary color
          
          vec3 color = mix(color1, color2, uv.x + ripple);
          
          // Add opacity gradient
          float opacity = 0.6 - dist * 0.5;
          opacity = max(0.3, opacity);
          
          gl_FragColor = vec4(color, opacity);
        }
      `
    };
    
    // Create plane with liquid shader
    const geometry = new THREE.PlaneGeometry(10, 10);
    const material = new THREE.ShaderMaterial({
      uniforms: liquidShader.uniforms,
      vertexShader: liquidShader.vertexShader,
      fragmentShader: liquidShader.fragmentShader,
      transparent: true
    });
    
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);
    
    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      
      time += 0.01;
      material.uniforms.time.value = time;
      material.uniforms.mousePos.value = new THREE.Vector2(
        mousePosition.current.x,
        mousePosition.current.y
      );
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      material.uniforms.resolution.value = new THREE.Vector2(
        container.offsetWidth,
        container.offsetHeight
      );
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="relative bg-primary h-[50vh] overflow-hidden" ref={heroRef}>
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover opacity-40"
          priority
        />
        <canvas ref={canvasRef} className="absolute inset-0 z-10" />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center flex flex-col justify-center h-full">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}
