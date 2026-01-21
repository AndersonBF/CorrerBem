export function FraseDeEfeito() {
  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] py-10 px-6 md:px-16 lg:px-40">
      
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/imagem_encerramento.png"
          alt="Treino da Correr Bem Toledo"
          className="w-full h-full object-cover"
        />
        {/* Camada escura para contraste */}
        <div className="absolute inset-0 bg-black/1"></div>
      </div>

      {/* Conteúdo sobre a imagem */}
      <div className="relative z-10 flex flex-col md:flex-row items-start justify-start gap-8 h-full pt-10 md:pt-16 lg:pt-20">

        {/* Primeiro texto + botão */}
        <div className="flex flex-col md:w-1/2 gap-6">
          <span className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas tracking-widest text-orange-500">
            Corra Mais rápido e mais longe com a Assessoria Correr Bem!
          </span>

          {/* Botão abaixo do primeiro texto */}
          <a
            href="https://api.whatsapp.com/send?phone=5549998303859&text=Vim%20pelo%20site%20da%20Assessoria%20Correr%20Bem%20e%20queria%20saber%20mais%20sobre%20a%20assessoria"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 px-6 py-3 rounded-md inline-block w-max"
          >
            Saiba mais pelo WhatsApp
          </a>
        </div>

        {/* Segundo texto menor ao lado do primeiro */}
        <div className="md:w-1/2 text-left text-base sm:text-lg md:text-xl lg:text-2xl text-white font-semibold">
          Você sonha em correr sua primeira prova, melhorar seu tempo ou superar seus limites? 
          A Assessoria Esportiva Correr Bem é a assessoria esportiva de corrida de rua que vai te ajudar a transformar esse sonho em realidade!
        </div>

      </div>
    </section>
  );
}
