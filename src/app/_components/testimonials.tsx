"use client";

import useEmblaCarousel from 'embla-carousel-react';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import { WhatsappLogoIcon } from '@phosphor-icons/react';
import { Clock } from 'lucide-react';
import BiazinImage from '../../../public/biazin.jpg'
import LeonImagem from '../../../public/rosto-leon.jpg'
import CarlaImagem from '../../../public/rosto-carla.jpg';
import GabrielleImagem from '../../../public/rosto-gabrielle.jpg';
import EligeImagem from '../../../public/rosto-elige.jpg';
import RavenaImagem from '../../../public/rosto-ravena.png';
import LuanaImagem from '../../../public/rosto-luana.png';
import AlexImagem from '../../../public/rosto-alex.jpg';
import VanessaImagem from '../../../public/rosto-vanessa.png';
import GabiImagem from '../../../public/rosto-gabi.jpg';
import Image from 'next/image';

const testimonials = [{
    
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
    author: 'Carla',
    description: 'Eu amo a Assessoria, recebemos várias dicas para a evolução que sozinhos não iriamos conseguir.',
    icon: <WhatsappLogoIcon size={24} className="text-green-500" />,
    image: CarlaImagem,
},
{
    author: 'Elige',
    description: 'Estou evoluindo, aumentando minha resistência e melhorando meu tempo também.',
    icon: <WhatsappLogoIcon size={24} className="text-green-500" />,
    image: EligeImagem,
},
{
    author: 'Ravena',
    description: 'Graças a Assessoria consegui 1° Lugar na Categoria e 6° Lugar Geral na Corrida do Sesc em Toledo.',
    icon: <WhatsappLogoIcon size={24} className="text-green-500" />,
    image: RavenaImagem,
},
{
    author: 'Luana',
    description: 'Com as planilhas tenho um objetivo e disciplina maior, tendo um rumo para os treinos.',
    icon: <WhatsappLogoIcon size={24} className="text-green-500" />,
    image: LuanaImagem,
},
{
    author: 'Alex',
    description: 'Sai de um pace de 06:40 para 05:40 em pouco tempo e sem me lesionar, além de ter saído de 97kg para 90kg mesmo sem dieta.',
    icon: <WhatsappLogoIcon size={24} className="text-green-500" />,
    image: AlexImagem,
},
{
    author: 'Vanessa',
    description: 'Antes da Assessoria eu não sabia meus limites, minhas zonas de frequência cardíaca e nunca pensei que conseguiria ir tão longe! Com a Assessoria corro com mais tranquilidade, sabendo meus limites e com um ótimo profissional orientando.',
    icon: <WhatsappLogoIcon size={24} className="text-green-500" />,
    image: VanessaImagem,
},
{
    author: 'Gabi',
    description: 'Além de evoluir na velocidade, melhorei minha capacidade cardiorrespiratória, conseguindo realizar os treinos propostos e demais atividades com muito mais facilidade.',
    icon: <WhatsappLogoIcon size={24} className="text-green-500" />,
    image: GabiImagem,
},



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
        <section className="bg-[linear-gradient(180deg,_rgba(255,255,255,1)_7%,_rgba(255,89,0,1)_33%,_rgba(28,28,28,1)_100%)] py-16">




            <div className="container mx-auto px-4">
               
                    <h2 className="text-4xl font-bold text-center mb-12">Depoimentos</h2>

                    <div className="relative max-4xl mx-auto">  

                        <div className='overflow-hidden' ref={emblaRef}>
                            <div className='flex'>
                                {testimonials.map((item, index) => (
                                    <div key={index} className="flex-[0_0_100%] nub-w-0 md:flex-[0_0_calc(100%/3)] px-3 ">
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