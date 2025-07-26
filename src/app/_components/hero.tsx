import {WhatsappLogoIcon} from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import RunImage from '../../../public/run.png';
import CorredorPng from '../../../public/corredor.png';

export function Hero() {
    return (
        <section className="bg-[#ff5900] text-white relative overflow-hidden">

            <div className='w-[50%]' >
                <Image
                src={CorredorPng}
                alt="Imagem de corrida"
                
                priority
                fill
                className='object-cover  object-center opacity-100 lg:hidden'
            />

            </div>

            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="container mx-auto py-16 px-4  ">
                <article className="grid  grid-cols-1 lg:grid-cols-2 gap-8 relative">

                    <div className="space-y-6">
                        <h1 className="text-3x1 md:text-4x1 lg:text-5x' px-10 font-bold leading-10"
                        data-aos="fade-down">
                            
                            <br />
                            <span className="uppercase px-10 text-2xl font-bold">A corrida é a sua paixão?</span>
                        </h1>
                        <p className="lg:text-lg uppercase">
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
                    
                    <div className=" md:block h-full">
                       <Image 
                            src={RunImage}
                            alt="Imagem de corrida"
                            className="object-contain"
                            quality={100}

                            
                        />
                    </div>

                    */}
                    
                </article>
            
            </div>


        </section>
    )
}