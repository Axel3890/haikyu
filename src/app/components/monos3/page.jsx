import { Button } from "@/components/ui/button"

export default function Heromonos() {
  return (
    <div className="relative min-h-screen  p-6">
      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Diseñamos y desarrollamos{' '}
          <span className="inline-flex items-center">
            <span role="img" aria-label="monkey" className="mr-2">🐵</span>
            <span role="img" aria-label="banana" className="mr-2">🍌</span>
          </span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-light text-purple-400 mb-6">
          Sitios web centrados en el usuario
        </h2>
        <p className="text-2xl md:text-4xl font-semibold leading-snug">
          que capturan a la <span className="text-purple-400 italic">perfección</span> <br />
          la esencia{' '}
          <span className="inline-flex items-center">
            <span role="img" aria-label="monkey" className="mx-2">🐵</span>
            <span role="img" aria-label="banana" className="mr-2">🍌</span>
          </span>{' '}
          y el valor de <span className="font-bold">tu marca</span>
        </p>
      </div>
    </div>
  )
}