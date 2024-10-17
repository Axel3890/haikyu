"use client"

import Link from "next/link";
import Image from "next/image";

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-4 md:p-6 bg-[#4A148C] text-white">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Aura logo"
            width={100}
            height={10}
            className="mr-2"
          />
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#" className="hover:text-[#E1BEE7] transition-colors">
            Servicios
          </Link>
          <span className="border-l border-[#E1BEE7]"></span> {/* Línea divisoria */}
          <Link href="#" className="hover:text-[#E1BEE7] transition-colors pl-6">
            Nuestro trabajo
          </Link>
          <span className="border-l border-[#E1BEE7]"></span> {/* Línea divisoria */}
          <Link href="#" className="hover:text-[#E1BEE7] transition-colors pl-6">
            Metodología
          </Link>
        </nav>
        <button className="bg-[#00ACC1] hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-neutral-950 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
          → Contáctanos
        </button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-4 pb-80 md:pb-0 sm:pb-0 text-center bg-[#F3E5F5] text-[#4A148C] relative">
        <h1 className="text-3xl md:text-5xl font-bold mb-8">
          Tu software{" "}
          <span className="bg-[#7B1FA2] px-2 text-white">increíble</span>
          <br />
          necesita un equipo increíble
        </h1>
        <div className="">
          <div className="text-[15vw] font-bold leading-none text-[#6A1B9A]">
            Aura
          </div>
          <Image
            src="/gato.png"
            alt="Aura mascot"
            width={400}
            height={400}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4"
            style={{ marginBottom: 52 }}
          />
        </div>
      </main>

      <div className="bg-[#4A148C] text-white p-3 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          <span className="inline-block mr-4">
            Soluciones de software a medida para impulsar tu negocio 🚀
          </span>
          <span className="inline-block mr-4">
            Soluciones de software a medida para impulsar tu negocio 🚀
          </span>
          <span className="inline-block mr-4">
            Soluciones de software a medida para impulsar tu negocio 🚀
          </span>
          <span className="inline-block mr-4">
            Soluciones de software a medida para impulsar tu negocio 🚀
          </span>
          <span className="inline-block mr-4">
            Soluciones de software a medida para impulsar tu negocio 🚀
          </span>
          <span className="inline-block mr-4">
            Soluciones de software a medida para impulsar tu negocio 🚀
          </span>
          {/* Se duplica el contenido para que el movimiento sea continuo */}
          <span className="inline-block mr-4">
            Soluciones de software a medida para impulsar tu negocio 🚀
          </span>
          <span className="inline-block mr-4">
            Soluciones de software a medida para impulsar tu negocio 🚀
          </span>
          <span className="inline-block mr-4">
            Soluciones de software a medida para impulsar tu negocio 🚀
          </span>
          <span className="inline-block mr-4">
            Soluciones de software a medida para impulsar tu negocio 🚀
          </span>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          main {
            padding-top: 1rem; /* Reducir espacio en la parte superior */
          }
        }
      `}</style>
    </div>
  );
}
