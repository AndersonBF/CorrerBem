"use client";

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  '/galeria8.png',
  '/galeria2.png',
  '/galeria10.png',
  '/galeria7.png',
  '/galeria9.png',
  '/galeria3.png',
  '/galeria4.png',
  '/podio4.png',
  '/podio5.png',
  '/podio6.png',
  '/podio7.png',
  '/podio8.jpeg',
  '/podio9.png',
  '/podio10.png',
  '/podio11.png',
  '/podio12.png',
  '/treinao.JPG',
  '/corredores.jpg',
  '/corredor1.jpg',

];

export function Galeria() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    skipSnaps: false, // ajuda no loop suave
     containScroll: 'trimSnaps', // evita que o último slide grude no primeiro
    
  });

  // Rolamento automático
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="bg-[#1C1C1C] py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-5xl font-bold mb-8 text-center">Galeria</h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            {/* Viewport com padding lateral para não grudar nas bordas */}
            <div className="flex gap-4 pl-2 pr-2 md:pl-4 md:pr-4 lg:pl-6 lg:pr-6">
              {galleryImages.map((src, index) => (
                <div
                  key={index}
                  className="flex-[0_0_auto] rounded-xl overflow-hidden"
                  style={{
                    width: '250px', // largura fixa, ajusta o tamanho das imagens
                  }}
                >
                  <img
                    src={src}
                    alt={`Galeria ${index + 1}`}
                    className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Botões de navegação */}
          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
