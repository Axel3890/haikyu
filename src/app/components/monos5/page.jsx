'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const services = [
  {
    title: "Diseño de Marca",
    description: "Creamos marcas que conectan con las audiencias. Nos enfocamos en contar historias auténticas que resalten en entornos digitales y generen una presencia memorable.",
    image: "https://agenciavirtualpy.com/wp-content/uploads/2020/12/ux-ui-diseno-web-scaled.jpg"
  },
  {
    title: "Diseño Web",
    description: "Diseñamos sitios web estéticamente atractivos y funcionales. Trabajamos estrechamente con nuestros clientes para capturar su visión y ofrecer experiencias cautivadoras.",
    image: "https://img.freepik.com/psd-premium/desarrollo-web-ilustracion-concepto-diseno-ui-ux-plantilla-pagina-destino-fondo-idea-negocio_1375-4110.jpg"
  },
  {
    title: "Desarrollo",
    description: "Utilizamos herramientas innovadoras y tecnologías no-code que garantizan un tiempo de desarrollo acelerado y permiten a nuestros clientes gestionar sus plataformas de forma ágil.",
    image: "https://www.optimizacion-online.com/wp-content/uploads/2023/10/website-mobile-ui-app-templates-scaled-1.jpg",
    border: true
  }
]

export default function AuraServices() {
  const [hoveredService, setHoveredService] = useState(null)
  const [visibleService, setVisibleService] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isFading, setIsFading] = useState(false)

  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e
    setMousePosition({ x, y })
  }

  useEffect(() => {
    if (hoveredService !== null) {
      setIsFading(true)
      const timeout = setTimeout(() => {
        setVisibleService(hoveredService)
        setIsFading(false)
      }, 400)
      return () => clearTimeout(timeout)
    }
  }, [hoveredService])

  const handleMouseLeave = () => {
    setHoveredService(null)
    setVisibleService(null)
  }

  return (
    <div className="relative h-[60vh] p-6 bg-[#F3E5F5]" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="max-w-6xl mx-auto relative overflow-visible">
        {services.map((service, index) => (
          <div 
            key={index}
            className={`flex flex-col md:flex-row items-start md:items-center justify-between py-8 border-t border-[#6A1B9A] ${service.border ? 'border-b border-[#6A1B9A]' : ''}`}
            onMouseEnter={() => setHoveredService(index)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <h2 className="text-3xl font-serif italic w-full md:w-1/3 text-[#4A148C]">{service.title}</h2>
            <p className="text-sm w-full md:w-1/3 text-[#6A1B9A]">{service.description}</p>
          </div>
        ))}

        {visibleService !== null && (
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg z-50 transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
            style={{
              transition: 'opacity 0.5s ease-in-out, transform 0.2s ease',
              transform: `translate(-50%, -50%) translate(${(mousePosition.x - window.innerWidth / 2) * 0.05}px, ${(mousePosition.y - window.innerHeight / 2) * 0.05}px)`
            }}
          >
            <Image
              src={services[visibleService].image}
              alt={services[visibleService].title}
              width={300}
              height={300}
              className="object-contain transition-opacity duration-500 ease-in-out"
            />
          </div>
        )}
      </div>
    </div>
  )
}
