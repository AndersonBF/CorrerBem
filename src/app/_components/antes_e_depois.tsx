"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const galleryImages = [
  "/antesdepois1.png",
  "/antesdepois2.png",
  "/antesdepois3.png",
  "/antesdepois4.png",
  "/antesdepois5.png",
  "/antesdepois6.png",
  "/antesdepois7.png",
  "/antesdepois8.png",
  "/antesdepois9.png",
  "/antesdepois10.png",
];

export function AntesEDepois() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  // Atualiza índice quando muda de slide
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Rolamento automático
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="bg-[#1C1C1C] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-5xl font-bold mb-8 text-center">
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
                    className="w-full h-70 md:h-[35rem] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Botões (Dots) */}
          <div className="flex justify-center mt-6 gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  selectedIndex === index ? "bg-orange-500" : "bg-gray-400"
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
