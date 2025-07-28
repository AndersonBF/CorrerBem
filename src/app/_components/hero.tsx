import {WhatsappLogoIcon} from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import RunImage from '../../../public/run.png';
import CorredorPng from '../../../public/corredor.png';
import EquipeCorrerBem from '../../../public/equipe-correr-bem.jpg';
import { Bebas_Neue} from 'next/font/google';



export function Hero() {
    return (
       

        <section className="bg-[#ff5900] text-white relative overflow-hidden">

            <div className='w-[50%]' >
                <Image
                src={EquipeCorrerBem}
                alt="Imagem de corrida"
                
                priority
                fill
                className='object-cover  object-center opacity-10'
            />

            </div>

            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="container mx-auto py-0 px-2  ">
                <article className="grid grid-cols-2 lg:grid-cols-2 relative">

                    <div className="flex items-center  ">
                       <Image 
                            src={RunImage}
                            alt="Imagem de corrida"
                            className=" w-[150px] h-[100px]] object-center"
                            
                            quality={100}

                            
                        />
                    </div>

                    <div className="space-y-0 text-left">
                        <h1 className="text-3x1 md:text-5x1 lg:text-6xl font-bold leading-tight"
                        data-aos="fade-up">
                            
                            <br />
                            <span className="uppercase text-4xl font-bebas text-left tracking-widest">A corrida é a sua paixão?</span>
                        </h1>
                        <p className="font-bebas lg:text-lg ">
                            Então você está no lugar certo! Aqui você encontra tudo o que precisa para correr bem.
                        </p>
   

                    </div>

                    {/*<div>
                        <a href="#"
                        className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center
                        justify-center w-fit gap-2">
                            <WhatsappLogoIcon className="w-5 h-5" />
                            Contato via Whatsapp
                        </a>
                    </div>
                    */}
                    {/*v className="mt-8">
                        <p className="text-sm mb-4">
                            <b className="bg-black text-white py-1 rounded-md">5% de desconto na sua primeira compra</b>
                        </p>
                    </div>
                    */}
                    
                    

                  
                    
                </article>
            
            </div>


        </section>
    )
}