export function FraseDeEfeito() {
    return (
        <section className="py-10 px-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                
                {/* Coluna de texto */}
                <div className="text-left md:w-2/5">
                    <span className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bebas tracking-widest block py-0.5 md:py-1 text-orange-500">
                        Corra Mais rápido e mais longe com a Assessoria Correr Bem!
                    </span>
                   

                    {/* Botão com mais espaço antes */}
                    <a
                        href="https://api.whatsapp.com/send?phone=5549998303859"
                        className="bg-green-500 px-5 py-3 rounded-md mt-8 inline-block"
                    >
                        Saiba mais pelo WhatsApp
                    </a>

                    <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold py-6 text-orange-500">
                        Você sonha em correr sua primeira prova, melhorar seu tempo ou superar seus limites? 
                        A Correr Bem Toledo é a assessoria esportiva que vai te ajudar a transformar esse sonho em realidade!
                    </p>
                </div>

                {/* Coluna da imagem */}
                <div className="md:w-5/10 flex justify-center">
                    <img 
                        src="/correr-bem-treianao.jpg" 
                        alt="Treino da Correr Bem Toledo" 
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
