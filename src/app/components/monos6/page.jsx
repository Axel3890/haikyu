import Image from 'next/image'

const showcaseItems = [
  { src: "https://img.freepik.com/fotos-premium/fondo-color-gradiente-ui-ux_1165404-46804.jpg", alt: "Mobile app designs", large: true },
  { src: "https://agenciavirtualpy.com/wp-content/uploads/2020/12/ux-ui-diseno-web-scaled.jpg", alt: "Mattress technology website", large: false },
  { src: "https://noticias.atura.mx/api/ckfinder/files/alianza-estrategia-del-seo-y-uxui-para-posicionar-tu-sitio-web-contenido-relevante-calidad.png", alt: "Natural product branding", large: false },
  { src: "https://www.optimizacion-online.com/wp-content/uploads/2023/10/website-mobile-ui-app-templates-scaled-1.jpg", alt: "Music player interface", large: true },
  { src: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/241219388/original/6bebd6af4f378f347cdcf2885082e929e8e2712d/do-mobile-app-ui-ux-design-for-ios-and-android.png", alt: "Web design mockups", large: true },
  { src: "https://img.freepik.com/fotos-premium/fondo-color-gradiente-ui-ux_1165404-46804.jpg", alt: "App logo", large: false },
]

export default function Showcase() {
  return (
    <div className="bg-[#F3E5F5] p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-[#4A148C]">Creamos diseños que cautivan</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Primera fila: imagen ancha y pequeña con misma altura */}
          <div className="col-span-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg transition-transform transform hover:scale-105">
              <Image
                src={showcaseItems[0].src}
                alt={showcaseItems[0].alt}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#4A148C] bg-opacity-95 text-white p-2 text-center rounded-xl">{showcaseItems[0].alt}</div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative h-[400px] overflow-hidden rounded-lg transition-transform transform hover:scale-105">
              <Image
                src={showcaseItems[1].src}
                alt={showcaseItems[1].alt}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#4A148C] bg-opacity-95 text-white p-2 text-center rounded-xl">{showcaseItems[1].alt}</div>
            </div>
          </div>

          {/* Segunda fila: imagen pequeña y ancha con misma altura */}
          <div className="col-span-1">
            <div className="relative h-[400px] overflow-hidden rounded-lg transition-transform transform hover:scale-105">
              <Image
                src={showcaseItems[2].src}
                alt={showcaseItems[2].alt}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#4A148C] bg-opacity-95 text-white p-2 text-center rounded-xl">{showcaseItems[2].alt}</div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg transition-transform transform hover:scale-105">
              <Image
                src={showcaseItems[3].src}
                alt={showcaseItems[3].alt}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#4A148C] bg-opacity-95 text-white p-2 text-center rounded-xl">{showcaseItems[3].alt}</div>
            </div>
          </div>

          {/* Tercera fila: igual que la primera */}
          <div className="col-span-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg transition-transform transform hover:scale-105">
              <Image
                src={showcaseItems[4].src}
                alt={showcaseItems[4].alt}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#4A148C] bg-opacity-95 text-white p-2 text-center rounded-xl">{showcaseItems[4].alt}</div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative h-[400px] overflow-hidden rounded-lg transition-transform transform hover:scale-105">
              <Image
                src={showcaseItems[5].src}
                alt={showcaseItems[5].alt}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#4A148C] bg-opacity-95 text-white p-2 text-center rounded-xl">{showcaseItems[5].alt}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
