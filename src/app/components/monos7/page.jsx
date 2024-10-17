"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react'

export default function Monos7() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 300); // Delay before showing the text

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#4A148C] text-white flex flex-col items-center justify-center p-6 overflow-hidden">
      <h2 className={`text-4xl md:text-6xl font-bold text-center mb-4 transition-opacity duration-1000 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        ¿Te gusta lo que ves?
      </h2>
      <p className={`text-2xl md:text-4xl text-[#E1BEE7] italic mb-8 transition-opacity duration-1000 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        empecemos a trabajar
      </p>
      <Button 
        className={`bg-[#00BCD4] text-white hover:bg-[#00ACC1] rounded-full px-6 py-3 text-lg font-semibold shadow-lg transition-all transform ${show ? 'scale-100' : 'scale-50'} duration-500`}
        onMouseEnter={(e) => e.currentTarget.classList.add('scale-110')} 
        onMouseLeave={(e) => e.currentTarget.classList.remove('scale-110')}
      >
        → Solicitar presupuesto
      </Button>
    </div>
  )
}