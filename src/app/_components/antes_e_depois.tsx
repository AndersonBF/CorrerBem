"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  "/antesdepois1.png",
  "/antesdepois2.png",
  "/antesdepois3.png",
  "/antesdepois4.png",
  "/antesdepois5.png",
];

export function AntesEDepois() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  // Rolamento automático
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000); // troca a cada 4 segundos
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="bg-[#111111] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          Antes e Depois
        </h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {galleryImages.map((src, index) => (
                <div
                  key={index}
                  className="flex-[0_0_70%] md:flex-[0_0_25%] lg:flex-[0_0_30%] rounded-xl overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`Antes e Depois ${index + 1}`}
                    className="w-full h-96 md:h-[30rem] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Botões */}
          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"
            onClick={() => emblaApi?.scrollPrev()}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
            onClick={() => emblaApi?.scrollNext()}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
