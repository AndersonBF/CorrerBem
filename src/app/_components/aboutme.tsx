import Image from 'next/image';
import SobreMim from '../../../public/sobremim.png';
import { Check } from 'lucide-react';

export function AboutMe() {
  return (
    <section className="bg-[#1C1C1C] py-10 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">

        {/* Imagem à esquerda */}
        <div className="relative w-[180px] sm:w-[220px] md:w-[200px] lg:w-[250px] h-[225px] sm:h-[300px] md:h-[200px] lg:h-[300px] flex-shrink-0">
          <Image
            src={SobreMim}
            alt="Imagem de corrida"
            fill
            className="object-cover rounded-md"
            quality={100}
            priority
          />
        </div>

        {/* Conteúdo à direita */}
        <div className="text-white flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-6">
            Mateus Biazin
          </h2>
          <ul className="space-y-3 text-sm sm:text-base md:text-lg lg:text-lg">
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4 flex-shrink-0" />
              Treinador da Assessoria Esportiva Correr Bem
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4 flex-shrink-0" />
              Profissional de Educação Física (CREF 045187-G/PR)
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4 flex-shrink-0" />
              Formado na Universidade Estadual do Oeste do Paraná
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4 flex-shrink-0" />
              Atleta de corrida de rua
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4 flex-shrink-0" />
              Maratonista
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4 flex-shrink-0" />
              + de 300 alunos transformados
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
