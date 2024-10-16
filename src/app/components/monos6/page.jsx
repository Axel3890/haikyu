import Image from 'next/image'

const showcaseItems = [
  { src: "https://i.pinimg.com/736x/5e/4a/60/5e4a60b34e6a823ad52350b359c1975b.jpg", alt: "Mobile app designs", large: true },
  { src: "https://i.pinimg.com/736x/5e/4a/60/5e4a60b34e6a823ad52350b359c1975b.jpg", alt: "Mattress technology website", large: false },
  { src: "https://i.pinimg.com/736x/5e/4a/60/5e4a60b34e6a823ad52350b359c1975b.jpg", alt: "Natural product branding", large: false },
  { src: "https://i.pinimg.com/736x/5e/4a/60/5e4a60b34e6a823ad52350b359c1975b.jpg", alt: "Music player interface", large: true },
  { src: "https://i.pinimg.com/736x/5e/4a/60/5e4a60b34e6a823ad52350b359c1975b.jpg", alt: "Web design mockups", large: true },
  { src: "https://i.pinimg.com/736x/5e/4a/60/5e4a60b34e6a823ad52350b359c1975b.jpg", alt: "App logo", large: false },
]

export default function Component() {
  return (
    <div className="bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Creamos diseños que cautivan</h1>
        </header>

        <div className="grid grid-cols-3 gap-4">
          {/* Primera fila: imagen ancha y pequeña con misma altura */}
          <div className="col-span-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src={showcaseItems[0].src}
                alt={showcaseItems[0].alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src={showcaseItems[1].src}
                alt={showcaseItems[1].alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Segunda fila: imagen pequeña y ancha con misma altura */}
          <div className="col-span-1">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src={showcaseItems[2].src}
                alt={showcaseItems[2].alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="col-span-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src={showcaseItems[3].src}
                alt={showcaseItems[3].alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Tercera fila: igual que la primera */}
          <div className="col-span-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src={showcaseItems[4].src}
                alt={showcaseItems[4].alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src={showcaseItems[5].src}
                alt={showcaseItems[5].alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
