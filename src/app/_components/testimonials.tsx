"use client";

import useEmblaCarousel from 'embla-carousel-react';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import { WhatsappLogoIcon } from '@phosphor-icons/react';
import { Clock } from 'lucide-react';
import BiazinImage from '../../../public/biazin.jpg'
import Image from 'next/image';

const testimonials = [{
    author: 'Biazin',
    description: 'Oferecemos uma variedade de serviços para atender às suas necessidades de corrida. Estamos aqui para ajudar você a alcançar seus objetivos.',
    icon: <WhatsappLogoIcon size={24} className="text-green-500" />,
    image: BiazinImage,
   

},
{
    author: 'Biazin',
    description: 'Oferecemos uma variedade de serviços para atender às suas necessidades de corrida. Estamos aqui para ajudar você a alcançar seus objetivos.',
    icon: <WhatsappLogoIcon size={24} className="text-green-500" />,
    image: BiazinImage,
},
{
    author: 'Biazin',
    description: 'Oferecemos uma variedade de serviços para atender às suas necessidades de corrida. Estamos aqui para ajudar você a alcançar seus objetivos.',
    icon: <WhatsappLogoIcon size={24} className="text-green-500" />,
    image: BiazinImage,
},
{
    author: 'Biazin',
    description: 'Oferecemos uma variedade de serviços para atender às suas necessidades de corrida. Estamos aqui para ajudar você a alcançar seus objetivos.',
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
        <section className ="bg-[yellow] py-16">
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
                        className='bg-white-flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute right-6 -translate-y-1/2
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