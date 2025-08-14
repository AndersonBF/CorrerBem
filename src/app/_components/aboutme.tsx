import Image from 'next/image';
import SobreMim from '../../../public/sobremim.png';
import { Check } from 'lucide-react';

export function AboutMe() {
    return (
        <section className="bg-[#1C1C1C] py-6 px-0 relative overflow-hidden">
            {/* Imagem de fundo fixa na esquerda, ocupando toda a altura */}
            <div className="absolute left-0 top-0 h-full  z-0">
                <Image
                    src={SobreMim}
                    alt="Imagem de corrida"
                    width={300} //largura
                    height={400} //altura
                    
                    quality={100}
                    className="object-cover opacity-100"
                    priority
                />
            </div>
            {/* Conteúdo acima da imagem */}
            <div className="relative  pl-[280px] justify-end px-10 py-1  z-10 sm:pl-[300px] md:pl-[300px] lg:pl-[200px]">
                <ul className="text-white space-y-1 text-xs  max-w-xl w-full pr-0 text-1xl sm:text-1xl md:text-2xl ml-auto lg:text-2xl  mx-auto">
                <h2 className=" text-2xl font-bold text-white mb-4 lg:text-4xl sm:text-2xl md:text-3xl  ">Sobre Mim</h2>
                     <li className="flex items-center gap-1 sm:gap-2">
            <Check className="text-green-500 w-2 h-2 sm:w-4 sm:h-4 flex-shrink-0" />
            Profissional de Educação Física (CREF 045187-G/PR)
          </li>
          <li className="flex items-center gap-1 sm:gap-2">
            <Check className="text-green-500 w-2 h-2 sm:w-4 sm:h-4 flex-shrink-0" />
            Formado na UNIOESTE
          </li>
          <li className="flex items-center gap-1 sm:gap-2">
            <Check className="text-green-500 w-2 h-2 sm:w-4 sm:h-4 flex-shrink-0" />
            Atleta de corrida de rua
          </li>
          <li className="flex items-center gap-1 sm:gap-2">
            <Check className="text-green-500 w-2 h-2 sm:w-4 sm:h-4 flex-shrink-0" />
            Cristão/Presbiteriano
          </li>
          <li className="flex items-center gap-1 sm:gap-2">
            <Check className="text-green-500 w-2 h-2 sm:w-4 sm:h-4 flex-shrink-0" />
            Fundador da Assessoria Esportiva Correr Bem
          </li>
          <li className="flex items-center gap-1 sm:gap-2">
            <Check className="text-green-500 w-2 h-2 sm:w-4 sm:h-4 flex-shrink-0" />
            Meio Maratonista (20.10.24)
          </li>
                </ul>
            </div>
        </section>
    )
}