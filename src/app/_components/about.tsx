import Image from 'next/image';
import Run2Image from '../../../public/run2.jpg';
import Run3Image from '../../../public/run3.jpg';
import { Check } from 'lucide-react';

export function About() {
    return (
        <section className="bg-amber-100 py-16">
            <div className="container mx-auto flex flex-row gap-12 items-center">
                <div className="relative w-[400px] h-[400px] rounded-3xl overflow-hidden">
                    <Image
                        src={Run2Image}
                        alt="Imagem de corrida"
                        fill
                        quality={100}
                        className="object-cover hover:scale-110 duration-300"
                        priority
                    />
                </div>
                <div className="relative w-[400px] h-[400px] rounded-3xl overflow-hidden">
                    <Image
                        src={Run3Image}
                        alt="Imagem de corrida"
                        fill
                        quality={100}
                        className="object-cover hover:scale-110 duration-300"
                        priority
                    />
                </div>
            </div>
            <div className="space-y-4 mt-10 px-8">
                <h1 className="text-4xl font-bold">SOBRE</h1>
                <p>
                    A corrida é uma atividade física que traz inúmeros benefícios para a saúde e o bem-estar.
                    Ela ajuda a melhorar a resistência cardiovascular, fortalecer os músculos, queimar calorias e reduzir o estresse.
                    Além disso, correr ao ar livre proporciona uma conexão com a natureza e pode ser uma ótima maneira de socializar com amigos ou participar de eventos esportivos.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                        Aberto
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                        Mais de 70 alunos assessorados
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                        Mais de 70 alunos assessorados
                    </li>
                </ul>
            </div>
        </section>
    )
}