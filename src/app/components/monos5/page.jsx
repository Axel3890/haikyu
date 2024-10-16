'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const services = [
  {
    title: "Diseño de Marca",
    description: "Creamos marcas que conectan con las audiencias. Nos enfocamos en contar historias auténticas que resalten en entornos digitales y generen una presencia memorable.",
    image: "https://i.pinimg.com/736x/5e/4a/60/5e4a60b34e6a823ad52350b359c1975b.jpg"
  },
  {
    title: "Diseño Web",
    description: "Diseñamos sitios web estéticamente atractivos y funcionales. Trabajamos estrechamente con nuestros clientes para capturar su visión y ofrecer experiencias cautivadoras.",
    image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/2/26/Maki_Zenin_-_Anime.jpg/revision/latest?cb=20210216084657&path-prefix=es"
  },
  {
    title: "Desarrollo",
    description: "Utilizamos herramientas innovadoras y tecnologías no-code que garantizan un tiempo de desarrollo acelerado y permiten a nuestros clientes gestionar sus plataformas de forma ágil.",
    image: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/9/95/Maki_Zenin_-_Manga.jpg/revision/latest/scale-to-width/360?cb=20210516230002&path-prefix=es"
  }
]

export default function Monos5() {
  const [hoveredService, setHoveredService] = useState(null)
  const [visibleService, setVisibleService] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isFading, setIsFading] = useState(false)

  // Manejar la posición del mouse para el movimiento suave
  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e
    setMousePosition({ x, y })
  }

  // Efecto para manejar la transición suave entre imágenes
  useEffect(() => {
    if (hoveredService !== null) {
      setIsFading(true)
      const timeout = setTimeout(() => {
        setVisibleService(hoveredService)
        setIsFading(false)
      }, 400) // Tiempo de espera para cambiar la imagen
      return () => clearTimeout(timeout)
    }
  }, [hoveredService])

  return (
    <div className="relative min-h-screen p-6" onMouseMove={handleMouseMove}>
      <div className="max-w-6xl mx-auto relative">
        {services.map((service, index) => (
          <div 
            key={index}
            className="flex items-center justify-between py-8 border-t border-gray-200"
            onMouseEnter={() => setHoveredService(index)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <h2 className="text-3xl font-serif italic w-1/3">{service.title}</h2>
            <p className="text-sm w-1/3">{service.description}</p>
          </div>
        ))}

        {/* Imagen flotante con animación y movimiento */}
        {visibleService !== null && (
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#e6f5d0] p-4 rounded-lg shadow-lg z-50 transition-opacity duration-500 ease-in-out ${
              isFading ? 'opacity-0' : 'opacity-100'
            }`}
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
