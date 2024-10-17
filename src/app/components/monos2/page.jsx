"use client";
import React, { useState, useEffect, useRef } from 'react';

const ThreeColumnScrollingGallery = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const galleryRef = useRef(null);

  const columns = [
    {
      images: ['https://agenciavirtualpy.com/wp-content/uploads/2020/12/ux-ui-diseno-web-scaled.jpg', 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/307882851/original/baf1c61ba46e80794acd676eef34268736ad8a9d/do-minimalist-and-modern-mobile-desktop-app-ui-ux-design.jpg', 'https://img.freepik.com/fotos-premium/fondo-color-gradiente-ui-ux_1165404-46804.jpg'],
      direction: -1
    },
    {
      images: ['https://img.freepik.com/psd-premium/desarrollo-web-ilustracion-concepto-diseno-ui-ux-plantilla-pagina-destino-fondo-idea-negocio_1375-4110.jpg', 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/241219388/original/6bebd6af4f378f347cdcf2885082e929e8e2712d/do-mobile-app-ui-ux-design-for-ios-and-android.png', 'https://www.movapps.com.ar/wp-content/uploads/2023/05/Disenador-UI-para-Aplicaciones-Web-1.png'],
      direction: 0.5 // Ajustamos la velocidad para la columna del medio
    },
    {
      images: ['https://www.optimizacion-online.com/wp-content/uploads/2023/10/website-mobile-ui-app-templates-scaled-1.jpg', 'https://www.maxcf.es/wp-content/uploads/2023/11/tendencias-diseno-web-2024-mascaras-patrones.jpeg', 'https://noticias.atura.mx/api/ckfinder/files/alianza-estrategia-del-seo-y-uxui-para-posicionar-tu-sitio-web-contenido-relevante-calidad.png'],
      direction: -1
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (galleryRef.current) {
        const position = window.scrollY;
        setScrollPosition(position);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={galleryRef} className="flex justify-between h-[700px] overflow-hidden bg-[#252125]">

      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="w-1/3 relative h-[1000px] overflow-hidden">
          {column.images.map((src, imageIndex) => (
            <div
              key={imageIndex}
              className="absolute w-full flex items-center justify-center"
              style={{
                height: '33.33%',
                top: `${imageIndex * 33.33}%`,
                transform: `translateY(${scrollPosition * 0.1 * column.direction}px)`, // Mantiene el desplazamiento en diferentes direcciones
                transition: 'transform 0.1s ease-out',
              }}
            >
              <img
                src={src}
                alt={`Columna ${columnIndex + 1} imagen ${imageIndex + 1}`}
                className="w-full h-full object-cover rounded-3xl mx-auto"
                style={{ padding: 8 }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ThreeColumnScrollingGallery;
