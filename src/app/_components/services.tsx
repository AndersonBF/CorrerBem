"use client";

import useEmblaCarousel from 'embla-carousel-react';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import { WhatsappLogoIcon } from '@phosphor-icons/react';
import { Clock } from 'lucide-react';

const services = [{
    title: 'Mais de 200 alunos Assessoradas!'
    //description: 'Mais de 150 alunos Assessoradas!',
    //icon: <WhatsappLogoIcon size={24} className="text-green-500" />
   

},
{
    title: 'Alunos em mais de 30 cidades e mais de 10 estados do Brasil!'
    //description: 'Treinamento individualizado para melhorar seu desempenho.',
    //icon: <WhatsappLogoIcon size={24} className="text-green-500" />
},
{
    title: 'Mais de 40 pódios em 2025!'
    //description: 'Acompanhamento profissional para otimizar seus treinos.',
    //icon: <WhatsappLogoIcon size={24} className="text-green-500" />
},
{
    title: 'A maior Assessoria Esportiva na 1ª Dife Experience Run 2025!'
    //description: 'Orientação nutricional para potencializar seus resultados.',
    //icon: <WhatsappLogoIcon size={24} className="text-green-500" />
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
    
    function scrollPrev(){
        emblaApi?.scrollPrev();
    }

    function scrollNext(){
        emblaApi?.scrollNext();
    }


    return (
        <section className ="bg-white py-16">
            <div className="container mx-auto px-4">
                <div> 
                    

                    <div className="relative">  
                        <div className='overflow-hidden' ref={emblaRef}>
                            <div className='flex'>
                                {services.map((item, index) => (
                                    <div key={index} className="flex-[0_0_100%] nub-w-0 md:flex-[0_0_calc(100%/3)] px-3 ">
                                        <article className="bg-[#1e293b] text-white rounded-4xl p-6 space-y-4 h-full flex">
                                            <div className='flex-1 flex items-start justify-between'>
                                                
                                                <div className='flex gap-3'>
                                                    
                                                    <div>
                                                        <h3 className='font-bold text-x1 my-1'>{item.title}</h3>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                               
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </div>    

                        <button
                        className='bg-white-flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2
                        -translate-x-1/2 top-1/2'
                        onClick={scrollPrev}>
                                <ChevronLeft  className='w-6 h-6 text-gray-600'   
                                />

                        </button>

                                                <button
                        className='bg-white-flex items-center justify-center rounded-full shadow-lg w-3 h-10 absolute right-0 -translate-y-1/2
                        -translate-x-1/2 top-1/2'
                        onClick={scrollNext}>
                                <ChevronRight  className='w-6 h-6 text-gray-600'   
                                />

                        </button>


                    </div>
                </div>
            </div>
        </section>
    )
}