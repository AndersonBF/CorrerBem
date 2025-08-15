"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Leon',
    src: '/depoimento1.mp4'
  },
  {
    name: 'Larissa',
    src: '/depoimento2.mp4'
  },
  {
    name: 'Leticia',
    src: '/depoimento3.mp4'
  }
];

export function Videost() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 1 }
    }
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-[#1C1C1C] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">Histórias de Sucesso</h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%)] lg:flex-[0_0_calc(33.33%)] flex justify-center"
                >
                  <div className="bg-[#2A2A2A] rounded-3xl overflow-hidden shadow-lg w-48 md:w-56 lg:w-64">
                    <video
                      className="w-full h-auto aspect-[9/16] object-cover"
                      src={item.src}
                      controls
                    />
                    <div className="p-4">
                      <h3 className="text-white font-bold text-center">{item.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botões do carrossel */}
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
