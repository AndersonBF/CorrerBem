import Image from 'next/image';
import Run2Image from '../../../public/run4.jpg';
import Run4Image from '../../../public/biazin-com-leon.jpg';
import Run5Image from '../../../public/equipe-correr-bem.jpg';
import Run6Image from '../../../public/run6.png';
import Run7Image from '../../../public/run7.png';
import { Check } from 'lucide-react';

export function About() {
    const blocks = [
        {
            img: Run6Image,
            texts: [
                `A Nossa Metodologia de Treino é focada em você, nas suas metas e no seu ritmo. Não usamos planos genéricos, mas sim um processo personalizado para garantir que sua jornada na corrida de rua seja segura, prazerosa e acima de tudo eficaz.`,
                `Primeiramente, enviamos um questionário completo para entender sua história, seu nível de experiência, seus objetivos (seja completar 5k, melhorar seu tempo nos 10k, ou simplesmente ter mais qualidade de vida) e sua rotina. É a partir dessas informações que construímos a base do seu sucesso.`
            ]
        },
        {
            img: Run7Image,
            texts: [
                `Tecnologia a seu favor: Após entendermos seus objetivos, você fará um cadastro no SisRUN Elite, nosso aplicativo exclusivo para gerenciamento de treinos. É nessa plataforma que você recebe seus treinos e sincroniza diretamente em seu relógio! Inteligência, modernidade e praticidade.`,
                `Processo Individual: Nosso treinador irá elaborar e enviar a você uma planilha de treino 100% individualizada. Isso significa que cada sessão de treino, cada quilômetro e cada tempo de descanso é pensado exclusivamente para suas necessidades.`,
                `Avaliações frequentes: Com avaliações físicas personalizadas avaliamos frequentemente a evolução nossos alunos.`
            ]
        },
        {
            img: Run5Image,
            texts: [
                `Comunidade engajadora: Conecte-se com outros corredores e mantenha-se motivado.`,
                `Exercícios de fortalecimento: Exercícios de alongamento, mobilidade e educativos para melhorar a mecânica da corrida!`,
                `Resultados comprovados: Mais de 200 alunos satisfeitos atestam a qualidade e profissionalismo da nossa Assessoria.`
            ]
        }
    ];

    return (
        <section className="bg-[#1C1C1C] py-8">
            <div className="space-y-12 px-10 md:px-40">
                {blocks.map((block, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-start gap-6 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Imagem */}
                        <div className="relative w-full md:w-1/3 h-[250px] rounded-3xl overflow-hidden flex-shrink-0">
                            <Image
                                src={block.img}
                                alt="Imagem de corrida"
                                fill
                                quality={100}
                                className="object-cover [object-position:center_40%] hover:scale-110 duration-300"
                            />
                        </div>

                        {/* Texto com múltiplos parágrafos */}
                        <div className="text-white md:w-1/2 font-[var(--font-bebas-neue)] text-lg space-y-4">
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
