"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Monos8() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 300); // Delay before showing the text

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#f3e8f9] text-[#5c37c0] p-8 min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className={`text-4xl md:text-6xl font-bold leading-tight mb-8 transition-opacity duration-1000 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Creamos soluciones innovadoras,
          <Image
            src="/gato.png"
            alt="Monkey emoji"
            width={80}
            height={80}
            className="inline-block ml-4 rounded-2xl bg-[#9c6fe9]"
          />
          <br />
          apasionados por el diseño,
          <br />
          <span className="text-[#724dc6]">tecnología y creatividad</span>
          <br />
          <span className="inline-flex items-center bg-[#bcaee2] rounded-full px-6 py-2">
            <Image
              src="/gato.png"
              alt="Monkey emoji"
              width={40}
              height={40}
              className="mr-2"
            />
            <Image
              src="/gato.png"
              alt="Banana emoji"
              width={24}
              height={24}
              className="mr-2"
            />
          </span>
          {' '}listos para cualquier reto.
        </h1>

        <p className={`mt-12 text-[#7054af] max-w-lg ml-auto text-right transition-opacity duration-1000 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Nuestro equipo está preparado para abordar tus proyectos más ambiciosos. No importa dónde estés, ¡trabajar con nosotros es una aventura!
        </p>
      </div>
    </div>
  )
}
