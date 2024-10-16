import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Monos7() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 overflow-hidden">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
        ¿Te gusta lo que ves?
      </h2>
      <p className="text-2xl md:text-4xl text-purple-300 italic mb-8">
        empecemos a trabajar
      </p>
      <Button className="bg-yellow-300 text-black hover:bg-yellow-400 rounded-full px-6 py-3 text-lg font-semibold shadow-lg transition-colors">
        → Solicitar presupuesto
      </Button>

    </div>
  )
}