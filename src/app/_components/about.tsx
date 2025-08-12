import Image from 'next/image';
import Run2Image from '../../../public/run4.jpg';
import Run3Image from '../../../public/run5.jpg';
import Run4Image from '../../../public/biazin-com-leon.jpg';
import Run5Image from '../../../public/equipe-correr-bem.jpg';
import { Check } from 'lucide-react';

export function About() {
    return (
        <section className="bg-[#1C1C1C] py-2">
            <div className="text-white space-y-4 mt-10 px-8 font-[var(--font-bebas-neue)]">
                {/*<h1 className="text-white text-4xl font-bebas">SOBRE</h1>
                <p className='font-[var(--font-bebas-neue)]'>
                    A corrida é uma atividade física que traz inúmeros benefícios para a saúde e o bem-estar.
                    Ela ajuda a melhorar a resistência cardiovascular, fortalecer os músculos, queimar calorias e reduzir o estresse.
                    Além disso, correr ao ar livre proporciona uma conexão com a natureza e pode ser uma ótima maneira de socializar com amigos ou participar de eventos esportivos.
                </p>*/}
                <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                         Planilhas de treino personalizadas: Desenvolvidas de acordo com seu nível e metas.

                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                        Suporte constante: Tire suas dúvidas e receba orientação sempre que precisar.
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                        Acompanhamento real: Utilizamos o aplicativo SisRUN Elite para controle e análise de treinamento.
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                        WhatsApp do Treinador: Tenha acesso ao contato do Treinador para tirar todas as suas dúvidas!
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                         Avaliações frequentes: Com avaliações físicas personalizadas avaliando frequentemente a evolução nossos alunos.

                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                        Comunidade engajadora: Conecte-se com outros corredores e mantenha-se motivado.
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                        Exercícios de fortalecimento: Exercícios de alongamento, mobilidade e educativos para melhorar a mecânica da corrida!
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                         Resultados comprovados: Mais de 150 alunos satisfeitos atestam a qualidade e profissionalismo da nossa Assessoria.
                    </li>
                    
                    
                </ul>

            </div>


            <div className="container mx-auto flex flex-row gap-2 px-6 py-4 items-center">
                <div className="relative w-[200px] h-[200px] rounded-3xl overflow-hidden">
                    <Image
                        src={Run2Image}
                        alt="Imagem de corrida"
                        fill
                        quality={100}
                        className="object-cover hover:scale-110 duration-300"
                        priority
                    />
                </div>
                
                <div className="relative w-[200px] h-[200px] rounded-3xl overflow-hidden">
                    <Image
                        src={Run4Image}
                        alt="Imagem de corrida"
                        fill
                        quality={100}
                        className="object-cover hover:scale-110 duration-300"
                        priority
                    />
                </div>
                <div className="relative w-[200px] h-[200px] rounded-3xl overflow-hidden">
                    <Image
                        src={Run5Image}
                        alt="Imagem de corrida"
                        fill
                        quality={100}
                        className="object-cover hover:scale-110 duration-300"
                        priority
                    />
                </div>
                
            </div>
            
        </section>
    )
}