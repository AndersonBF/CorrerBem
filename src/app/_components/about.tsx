import Image from 'next/image';
import Run2Image from '../../../public/run4.jpg';
import Run4Image from '../../../public/biazin-com-leon.jpg';
import Run5Image from '../../../public/equipe-correr-bem.jpg';
import Run6Image from '../../../public/run6.png';
import Run7Image from '../../../public/run7.png';
import Run8Image from '../../../public/galeria3.png';
import Run9Image from '../../../public/galeria8.png';
import { Check } from 'lucide-react';

export function About() {
    const blocks = [
        {
            img: Run8Image,
            texts: [
                `A Nossa Metodologia de Treino utiliza um processo personalizado para garantir que sua jornada na corrida de rua seja segura, prazerosa e acima de tudo eficiente!`,
                `Primeiramente, enviamos um questionário completo para entender seus objetivos. Após isso, você fará um cadastro no SisRUN Elite, nosso aplicativo exclusivo para gerenciamento de treinos. É nessa plataforma que você recebe seus treinos e sincroniza diretamente em seu relógio! Inteligência, modernidade e praticidade.`
            ]
        },
        {
            img: Run9Image,
            texts: [
                `Tecnologia a seu favor: Após entendermos seus objetivos, você fará um cadastro no SisRUN Elite, nosso aplicativo exclusivo para gerenciamento de treinos. É nessa plataforma que você recebe seus treinos e sincroniza diretamente em seu relógio! Inteligência, modernidade e praticidade.`,
                
            ]
        },
        {
            img: Run5Image,
            texts: [
              `Processo Individual: Nosso treinador irá elaborar e enviar a você uma planilha de treino 100% individualizada. Isso significa que cada sessão de treino, cada quilômetro e cada tempo de descanso é pensado exclusivamente para suas necessidades.`,
                `Avaliações frequentes: Com avaliações físicas personalizadas avaliamos frequentemente a evolução nossos alunos.`
            ]
        }
    ];

    return (
        <section className="bg-[#ffffff] py-8">
            <div className="space-y-8 px-10 md:px-50">
                {blocks.map((block, index) => (
                   <div
  key={index}
  className={`flex flex-col md:flex-row items-center gap-2 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
>
  {/* Imagem */}
  <div className="relative w-full md:w-5/12 h-[250px] rounded-3xl overflow-hidden flex-shrink-0">
    <Image
      src={block.img}
      alt="Imagem de corrida"
      fill
      quality={100}
      className="object-cover [object-position:center_40%] hover:scale-110 duration-300"
    />
  </div>

  {/* Texto com múltiplos parágrafos */}
  <div className="text-black md:w-7/12 font-[var(--font-bebas-neue)] text-lg space-y-4">
    {block.texts.map((t, i) => (
      <div key={i} className="flex items-start">
        <Check className="text-red-500 flex-shrink-0 mt-1 mr-2" />
        <p>{t}</p>
      </div>
    ))}
  </div>
</div>
                ))}
            </div>
        </section>
    );
}
