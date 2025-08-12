"use client";

import useEmblaCarousel from 'embla-carousel-react';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import { WhatsappLogoIcon } from '@phosphor-icons/react';
import { Clock } from 'lucide-react';
import BiazinImage from '../../../public/biazin.jpg'
import LeonImagem from '../../../public/rosto-leon.jpg'
import CarlaImagem from '../../../public/rosto-carla.jpg';
import GabrielleImagem from '../../../public/rosto-gabrielle.jpg';
import Image from 'next/image';

const testimonials = [{
    author: 'Carla',
    description: 'Eu amo a Assessoria, recebemos várias dicas para a evolução que sozinhos não iriamos conseguir.',
    icon: <WhatsappLogoIcon size={24} className="text-green-500" />,
    image: CarlaImagem,
   

},
{
    author: 'Gabrielle',
    description: 'Eu corria mas não via evolução, estava estagnada. Hoje, em apenas 3 meses de acompanhamento, vejo resultados que não alcancei sozinha. Ter um bom direcionamento faz toda diferença.',
    icon: <WhatsappLogoIcon size={24} className="text-green-500" />,
    image: GabrielleImagem,
},
{
    author: 'Leon',
    description: 'O Treinador Mateus é bastante atencioso e disciplinado, sempre passa treinos específicos para cada tipo de objetivo.',
    icon: <WhatsappLogoIcon size={24} className="text-green-500" />,
    image: LeonImagem,
},
{
    author: 'Claudineia',
    description: 'A Assessoria me ajudou a ter constância nos treinos. Criei uma rotina de treinos que antes não tinha.',
    icon: <WhatsappLogoIcon size={24} className="text-green-500" />,
    image: BiazinImage,
},
{
    author: 'Maria',
    description: 'Além de evoluir na velocidade, melhorei minha capacidade cardiorrespiratória, conseguindo realizar os treinos propostos e demais atividades com muito mais facilidade.',
    icon: <WhatsappLogoIcon size={24} className="text-green-500" />,
    image: BiazinImage,
}
]


export function Testimonials() {
    const[emblaRef, emblaApi] = useEmblaCarousel({
        loop: true
        
        
        
    })
    
    function scrollPrev(){
        emblaApi?.scrollPrev();
    }
    
    function scrollNext(){
        emblaApi?.scrollNext();
    }


    return (
        <section className ="bg-[#ff8800] py-16">
            <div className="container mx-auto px-4">
               
                    <h2 className="font-4xl font-bold text-center mb-12">Depoimentos </h2>

                    <div className="relative max-4xl mx-auto">  

                        <div className='overflow-hidden' ref={emblaRef}>
                            <div className='flex'>
                                {testimonials.map((item, index) => (
                                    <div key={index} className="flex-[0_0_100%] nub-w-0  px-3 ">
                                        <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                            <div className='flex flex-col items-center text-center space-y-4'>
                                                <div className='relative w-24 h-24'>
                                                    <Image
                                                        src={item.image}
                                                        alt={item.author}
                                                        fill
                                                        sizes='96px'
                                                        className='rounded-full object-cover'
                                                        />
                                                </div>
                                            <p className='text-gray-300 text-sm'>{item.description}</p>
                                            
                                            <p className='font-bold'>{item.author}</p>
                                            
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
        </section>
    )
}