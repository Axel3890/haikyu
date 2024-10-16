import Image from 'next/image'

export default function Monos8() {
  return (
    <div className="bg-gray-900 text-white p-8 min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
          Somos muy monos,
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="Monkey emoji"
            width={80}
            height={80}
            className="inline-block ml-4 rounded-2xl bg-pink-500"
          />
          <br />
          extremadamente curiosos,
          <br />
          <span className="text-lime-400">resolutivos, adaptativos</span>
          <br />
          <span className="inline-flex items-center bg-purple-600 rounded-full px-6 py-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Monkey emoji"
              width={40}
              height={40}
              className="mr-2"
            />
            <Image
              src="/placeholder.svg?height=24&width=24"
              alt="Banana emoji"
              width={24}
              height={24}
              className="mr-2"
            />
          </span>
          {' '}e irreverentes.
        </h1>

        <p className="mt-12 text-gray-400 max-w-lg ml-auto text-right">
          Nuestro equipo de creativos apasionados ama trabajar desde cualquier lugar del mundo. Nuestra oficina está en todas partes, trabajar con nosotros mola.
        </p>
      </div>
      <div className="absolute bottom-4 right-4">
        <Image
          src="/placeholder.svg?height=50&width=50"
          alt="WhatsApp icon"
          width={50}
          height={50}
          className="bg-green-500 rounded-full p-2"
        />
      </div>
    </div>
  )
}