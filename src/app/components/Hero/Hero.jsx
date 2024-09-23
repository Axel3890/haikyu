import React from 'react'
import Link from "next/link";
import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] text-white">
    <video
      autoPlay
      loop
      muted
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: '-1',
      }}
    >
      <source src="https://www.youtube.com/watch?v=Iby7PLeVUBs" type="video/mp4" />
      Tu navegador no soporta la etiqueta de video.
    </video>
  
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
    <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
        Reach for the Sky!
      </h1>
      <p className="text-xl sm:text-2xl md:text-3xl mb-8 max-w-3xl mx-auto">
        Follow Shoyo Hinata's journey from underdog to volleyball champion in this thrilling sports anime.
      </p>
      <a
        href="https://www.youtube.com/watch?v=Iby7PLeVUBs"
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 transition duration-150 ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        Watch Now
        <ArrowRight className="ml-2 h-5 w-5" />
      </a>
    </div>
  </section>
  )
}

export default Hero