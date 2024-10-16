"use client";
import React, { useState, useEffect, useRef } from 'react';

const ThreeColumnScrollingGallery = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const galleryRef = useRef(null);

  const columns = [
    {
      images: ['https://brainfoodmkt.com/wp-content/uploads/2021/07/tipos-de-paginas-web.png', 'https://www.decimoarte.com/wp-content/uploads/2022/04/tipos-de-paginas-web.jpg', 'https://www.marketerdigital.com.mx/wp-content/uploads/2021/11/para-que-sirve-una-pagina-web.png'],
      direction: -1
    },
    {
      images: ['https://www.o10media.es/blog/wp-content/uploads/2023/01/tipos-paginas-web.jpg', 'https://www.ecommerceefectivo.com/wp-content/uploads/2016/12/Pautas-para-dise%C3%B1ar-tu-p%C3%A1gina-Web-de-empresa-1.jpg', 'https://massnegocios.com/images/pagina-web-1.jpg'],
      direction: 0.1 // Ajustamos la velocidad para la columna del medio
    },
    {
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_1t-s_Vzwlc3JVxO-Bib8o7gfDxa75-2jyg&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcv5Ebon9GOx5YSH85lmSCtxS-hWbJTUxww&s', 'https://inbound.actualizaweb.com/hs-fs/hubfs/20171018-9-pasos-para-p%C3%A1gina-web/Dise%C3%B1ar%20p%C3%A1ginas%20Web,%20Dise%C3%B1o%20P%C3%A1ginas%20Web.jpg?width=640&name=Dise%C3%B1ar%20p%C3%A1ginas%20Web,%20Dise%C3%B1o%20P%C3%A1ginas%20Web.jpg'],
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
    <div ref={galleryRef} className="flex justify-between h-[200vh] overflow-hidden">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="w-1/3 relative h-full overflow-hidden">
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
                className="w-full h-full object-cover rounded-lg"
                style={{ padding: 5 }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ThreeColumnScrollingGallery;
