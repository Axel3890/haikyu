import Image from 'next/image'
import Link from 'next/link'

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-4 md:p-6">
        <div className="flex items-center">
          <Image
            src="https://png.pngtree.com/png-clipart/20220228/original/pngtree-animate-monkey-png-image_7323152.png"
            alt="Monos logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-xl font-bold">monos</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#" className="text-gray-600 hover:text-gray-900">Servicios</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">Nuestro trabajo</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">Metodología</Link>
        </nav>
        <button className="bg-yellow-300 text-black px-4 py-2 rounded-full shadow-md hover:bg-yellow-400 transition-colors">
          → Solicitar presupuesto
        </button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-8">
          Una marca <span className="bg-yellow-300 px-2">increíble</span><br />
          necesita un sitio web increíble
        </h1>
        <div className="relative">
          <div className="text-[15vw] font-bold leading-none">monos</div>
          <Image
            src="https://png.pngtree.com/png-clipart/20220228/original/pngtree-animate-monkey-png-image_7323152.png"
            alt="Monkey mascot"
            width={300}
            height={300}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4"
          />
        </div>
      </main>

      <footer className="bg-yellow-300 p-4 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee">
          Tu sitio web puede verse más guay que nunca 🙈 Tu sitio web puede verse más guay que nunca 🙈 Tu sitio web puede verse más guay que nunca 🙈
        </div>
      </footer>
    </div>
  )
}