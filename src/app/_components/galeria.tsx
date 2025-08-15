"use client";

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  '/galeria2.png',
  '/galeria3.png',
  '/galeria4.png',
  '/run5.jpg',
  '/galeria1.jpg',

];

export function Galeria() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  // Rolamento automático
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000); // troca a cada 3 segundos

    return () => clearInterval(interval);
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="bg-[#1C1C1C] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">Galeria</h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {galleryImages.map((src, index) => (
                <div key={index} className="flex-[0_0_80%] md:flex-[0_0_30%] lg:flex-[0_0_20%] rounded-xl overflow-hidden">
                  <img
                    src={src}
                    alt={`Galeria ${index + 1}`}
                    className="w-full h-64 md:h-48 lg:h-56 object-cover hover:scale-105 transition-transform duration-300"
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
