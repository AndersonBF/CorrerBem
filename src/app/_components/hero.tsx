import {WhatsappLogoIcon} from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import RunImage from '../../../public/run.png';

export function Hero() {
    return (
        <section className="bg-[#ff5900] text-white relative overflow-hidden">

            <div>
                <Image
                src={RunImage}
                alt="Imagem de corrida"
                priority
                fill
                className='object-cover opacity-10 lg:hidden'
            />

            </div>

            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="container mx-auto py-16 px-4  ">
                <article className="grid  grid-cols-1 lg:grid-cols-2 gap-8 relative">

                    <div className="space-y-6">
                        <h1 className="text-3x1 md:text-4x1 lg:text-5x' px-10 font-bold leading-10"
                        data-aos="fade-down">
                            <span className="text-4xl px-10 font-bold">Correr Bem</span>
                            <br />
                            <span className="text-2xl">A corrida é a sua paixão?</span>
                        </h1>
                        <p className="lg:text-lg">
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
                    <div className="mt-8">
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
                </article>
            
            </div>


        </section>
    )
}