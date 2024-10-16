'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from 'next/image'

const features = [
  {
    title: "Diseño encantador",
    description: "Creamos sitios con personalidad, diseñamos a tu medida. Nada de plantillas y clichés, solo autenticidad y buen gusto.",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    title: "Desarrollo ágil",
    description: "Implementamos tu sitio web con las últimas tecnologías, asegurando rapidez, seguridad y escalabilidad.",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    title: "Soporte continuo",
    description: "No te dejamos solo. Ofrecemos soporte continuo para mantener tu sitio actualizado y funcionando perfectamente.",
    image: "/placeholder.svg?height=200&width=200"
  }
]

export default function Monos4() {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [scrollingEnabled, setScrollingEnabled] = useState(false)

  useEffect(() => {
    const handleScroll = (event) => {
      if (!scrollingEnabled) return; // Bloquear el scroll si no está habilitado

      if (event.deltaY > 0) {
        // Scroll hacia abajo
        setCurrentFeature((prev) => (prev + 1) % features.length)
      } else {
        // Scroll hacia arriba
        setCurrentFeature((prev) => (prev - 1 + features.length) % features.length)
      }
    }

    window.addEventListener('wheel', handleScroll, { passive: false })

    const enableScrolling = () => setScrollingEnabled(true)
    window.addEventListener('scroll', enableScrolling, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('scroll', enableScrolling)
    }
  }, [scrollingEnabled])

  return (
    <div className="relative min-h-screen bg-gray-900 text-white px-4 md:px-6 py-8">
      <div className="max-w-6xl mx-auto pt-12 md:pt-20 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 px-4 md:px-0">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-600 rounded-full flex items-center justify-center mr-4">
              <span className="text-xl md:text-2xl">?</span>
            </div>
            <h2 className="text-lg md:text-xl font-semibold">WHY MONOS?</h2>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 md:mb-6">
            Enamora a tus <span className="text-purple-400">clientes</span> desde el primer click
          </h1>
          <p className="text-base md:text-xl mb-4 md:mb-6">
            ¿Por qué tu empresa debería confiar en monos?
          </p>
        </div>
        <div className="w-full md:w-1/2 relative h-[300px] sm:h-[400px] px-4 md:px-0">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`absolute top-0 left-0 w-full bg-gray-800 border-pink-500 p-4 md:p-6 transition-all duration-500 ease-in-out ${
                index === currentFeature ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
              }`}
            >
              <h3 className="text-xl md:text-2xl font-bold text-pink-500 mb-2 md:mb-4">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6">{feature.description}</p>
              <Image
                src={feature.image}
                alt={feature.title}
                width={150}
                height={150}
                className="mx-auto"
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
