import { Button } from "@/components/ui/button"

export default function HeroAura() {
  return (
    <div className="relative min-h-screen bg-[#F3E5F5] p-6">
      <div className="max-w-4xl mx-auto pt-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-[#4A148C]">
          Diseñamos y desarrollamos{' '}
          <span className="text-[#7B1FA2]">soluciones de software</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-light text-[#6A1B9A] mb-6">
          Pensadas para tus necesidades
        </h2>
        <p className="text-2xl md:text-4xl font-semibold leading-snug text-[#4A148C]">
          Capturamos a la <span className="text-[#7B1FA2] italic">perfección</span> <br />
          la esencia de tu <span className="font-bold text-[#6A1B9A]">negocio</span> y te ayudamos a <br />
          <span className="text-[#7B1FA2]">impulsarlo</span> con tecnología de vanguardia.
        </p>
        <div className="mt-8">
          <Button className="bg-[#00BCD4] text-white px-8 py-4 text-xl font-bold rounded-full shadow-md hover:bg-[#00ACC1] transition-colors">
            Contáctanos
          </Button>
        </div>
      </div>
    </div>
  )
}