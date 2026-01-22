import { FacebookLogoIcon, InstagramLogoIcon, YoutubeLogoIcon } from '@phosphor-icons/react/dist/ssr';
import Runimage from '../../../public/run.png';
import Image from 'next/image';

// ...restante do código...

const brands = [
    { name: "Nike", logo: Runimage },
    { name: "Adidas", logo: Runimage },
    { name: "Puma", logo: Runimage },
    { name: "Reebok", logo: Runimage },
    { name: "Under Armour", logo: Runimage },
];

export function Footer() {
    return (
        <section className="bg-[#ff3c00] py-4 text-white">
            <div className="container mx-auto px-4">

              {/*}  <div className="border-b border-white/20 pb-8">
                    <h4 className="text-3xl font-semibold mb-8 text-center text-white">Nossas Marcas</h4>
                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                        {brands.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center">
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={50}
                                    quality={100}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                */}

                <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-white">Correr Bem</h3>
                        <p className="mb-4 text-gray-200">
                            A Correr Bem é uma assessoria esportiva especializada em corrida, oferecendo treinos personalizados e acompanhamento profissional para corredores de todos os níveis.
                        </p>
                        <a
                            href="https://api.whatsapp.com/send?phone=5549998303859&text=Vim%20pelo%20site%20da%20Assessoria%20Correr%20Bem%20e%20queria%20saber%20mais%20sobre%20a%20assessoria"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 px-4 py-2 rounded-md"
                        >
                            Contato via WhatsApp
                        </a>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
                        <p>Email: assessoriacorrerbem@outlook.com</p>
                        <p>Telefone: (49) 99830-3859</p>
                        <p>Endereço: Toledo, PR</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
                        <div className="flex gap-4">
                            {/*<a href="#">
                                <FacebookLogoIcon className='w-8 h-8'/>
                            </a>*/}
                            <a href="https://www.instagram.com/correrbemtoledo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                                <InstagramLogoIcon className='w-8 h-8' />
                            </a>
                            {/*<a href="#">
                                <YoutubeLogoIcon className='w-8 h-8'/>
                            </a>*/}
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
}