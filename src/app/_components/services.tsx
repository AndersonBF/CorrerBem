"use client";

import useEmblaCarousel from 'embla-carousel-react';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import { WhatsappLogoIcon } from '@phosphor-icons/react';

const services = [{
    title: 'Serviços',
    description: 'Oferecemos uma variedade de serviços para atender às suas necessidades de corrida. Estamos aqui para ajudar você a alcançar seus objetivos.',
    icon: <WhatsappLogoIcon size={24} className="text-green-500" />

},
{
    title: 'Treinamento Personalizado',
    description: 'Treinamento individualizado para melhorar seu desempenho.',
    icon: <WhatsappLogoIcon size={24} className="text-green-500" />
},
{
    title: 'Assessoria Esportiva',
    description: 'Acompanhamento profissional para otimizar seus treinos.',
    icon: <WhatsappLogoIcon size={24} className="text-green-500" />
},
{
    title: 'Nutrição Esportiva',
    description: 'Orientação nutricional para potencializar seus resultados.',
    icon: <WhatsappLogoIcon size={24} className="text-green-500" />
}
]

export function Services() {
    const[emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 340px)': {slidesToScroll: 1,}
            }
        })

    return (
        <section className ="bg-white py-16">
            <div className="container mx-auto px-4">
                <div> 
                    <h2 className="font-4x1 font-bold">Serviços</h2>

                    <div className="relative">  
                        <div className='overflow-hidden' ref={emblaRef}>
                            <div className='flex'>
                                {services.map((item, index) => (
                                    <div key={index} className="flex-[0_0_100%] nub-w-0 md:flex-[0_0_calc(100%/3)] px-3 ">
                                        <article className="bg-[#1e293b] text-white rounded-4xl p-6 space-y-4 h-full flex">
                                            <div className='flex-1 flex items-start justify-between'>
                                                <div>
                                                    <span className='text-3x1'>{item.icon}</span>
                                                    <div>
                                                        <h3>{item.title}</h3>
                                                        <p>
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </div>    

                    </div>
                </div>
            </div>
        </section>
    )
}