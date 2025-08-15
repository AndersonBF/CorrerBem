"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Trophy, Users, MapPin } from 'lucide-react';

const services = [
  {
    title: 'Mais de 200 alunos Assessoradas!',
    icon: <Users size={28} color="orange" />
  },
  {
    title: 'Alunos em mais de 30 cidades e mais de 10 estados do Brasil!',
    icon: <MapPin size={50} color="orange" />
  },
  {
    title: 'Mais de 40 pódios em 2025!',
    icon: <Trophy size={28} color="orange" />
  },
  {
    title: 'A maior Assessoria Esportiva na 1ª Dife Experience Run 2025!',
    icon: <Users size={50} color="orange"  />
  }
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 340px)': { slidesToScroll: 1 }
    }
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_calc(100%/3)] px-3">
                  <article className="bg-[#1e293b] text-white rounded-4xl p-6 space-y-4 h-full flex items-center">
                    <div className="flex items-center gap-4">
                      {item.icon}
                      <h3 className="font-bold text-xl">{item.title}</h3>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 flex-shrink-0" />
          </button>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute right-3 -translate-y-1/2 translate-x-1/2 top-1/2"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-600 flex-shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
}
