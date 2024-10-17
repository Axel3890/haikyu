'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from 'next/image'

const features = [
  {
    title: "Diseño a Medida",
    description: "Creamos soluciones de software personalizadas, adaptadas a las necesidades y objetivos de tu negocio.",
    image: "https://img.freepik.com/fotos-premium/fondo-color-gradiente-ui-ux_1165404-46804.jpg"
  },
  {
    title: "Desarrollo Eficiente",
    description: "Implementamos con tecnologías modernas para asegurar rendimiento, seguridad y escalabilidad en cada proyecto.",
    image: "https://www.movapps.com.ar/wp-content/uploads/2023/05/Disenador-UI-para-Aplicaciones-Web-1.png"
  },
  {
    title: "Soporte Continuo",
    description: "Te acompañamos a largo plazo con mantenimiento y soporte para asegurar que tu solución esté siempre optimizada.",
    image: "https://noticias.atura.mx/api/ckfinder/files/alianza-estrategia-del-seo-y-uxui-para-posicionar-tu-sitio-web-contenido-relevante-calidad.png"
  }
]

export default function AuraFeatures() {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [scrollingEnabled, setScrollingEnabled] = useState(false)

  useEffect(() => {
    const handleScroll = (event) => {
      if (!scrollingEnabled) return;

      if (event.deltaY > 0) {
        setCurrentFeature((prev) => (prev + 1) % features.length)
      } else {
        setCurrentFeature((prev) => (prev - 1 + features.length) % features.length)
      }
    }

    const enableScrolling = () => setScrollingEnabled(true)

    window.addEventListener('wheel', handleScroll, { passive: false })
    window.addEventListener('scroll', enableScrolling, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('scroll', enableScrolling)
    }
  }, [scrollingEnabled])

  return (
    <div className="relative min-h-screen bg-[#180822] text-[#4A148C] px-4 md:px-6 py-8">
      <div className="max-w-6xl mx-auto pt-12 md:pt-20 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 px-4 md:px-0">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#7B1FA2] rounded-full flex items-center justify-center mr-4">
              <span className="text-xl md:text-2xl text-white">?</span>
            </div>
            <h2 className="text-lg md:text-xl font-semibold text-[#6A1B9A]">¿Por qué Aura?</h2>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 md:mb-6">
            Soluciones <span className="text-[#7B1FA2]">innovadoras</span> para tu negocio
          </h1>
          <p className="text-base md:text-xl mb-4 md:mb-6">
            Descubre por qué las empresas confían en Aura para desarrollar soluciones de software personalizadas.
          </p>
        </div>
        <div className="w-full md:w-1/2 relative h-[300px] sm:h-[400px] px-4 md:px-0">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`absolute top-0 left-0 w-full bg-white border-[#6A1B9A] p-4 md:p-6 transition-all duration-500 ease-in-out ${
                index === currentFeature ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
              }`}
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#4A148C] mb-2 md:mb-4">{feature.title}</h3>
              <p className="text-sm md:text-base text-[#6A1B9A] mb-4 md:mb-6">{feature.description}</p>
              <Image
                src={feature.image}
                alt={feature.title}
                width={300}
                height={350}
                className="mx-auto"
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}