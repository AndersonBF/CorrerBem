"use client";

import React from "react";

export function Plans() {
  const plans = [
    {
      name: "Trimestral",
      price: "R$329,70",
      description: "3 meses. Economize e mantenha consistência.",
      linkPix:
        "https://pix.sejaefi.com.br/pagar/fb964debff9e0f627823acb068602d3ed6c72676.html",
      linkCartao:
        "https://pagamento.sejaefi.com.br/fdc5cc7f-5cf4-43af-ac34-34674a475af1",
    },
    {
      name: "Semestral",
      price: "R$623,40",
      description: "6 meses. Ótimo equilíbrio entre duração e preço.",
      linkPix:
        "https://pix.sejaefi.com.br/pagar/432068100459c661ffc0d19b177ca9df3305afab.html",
      linkCartao:
        "https://pagamento.sejaefi.com.br/b1a04c42-d3db-482a-a799-99cea3ff8384",
    },
    {
      name: "Anual",
      price: "R$1174,80",
      description:
        "12 meses. Maior desconto, compromisso completo para evolução máxima.",
      linkPix:
        "https://pix.sejaefi.com.br/pagar/d2a6abc58b21353bf7a6116df7358edc0be59511.html",
      linkCartao:
        "https://pagamento.sejaefi.com.br/9bbfc0cb-cd61-4d07-9def-d809fc28d67b",
    },
  ];

  const whatsappLink =
    "https://api.whatsapp.com/send?phone=5549998303859&text=Vim%20pelo%20site%20da%20Assessoria%20Correr%20Bem%20e%20queria%20saber%20mais%20sobre%20a%20assessoria";

  // Função para enviar eventos para o GTM
  const pushGTMEvent = (eventName: string, plan?: string) => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: eventName, plan });
    }
  };

  // Função auxiliar para abrir link após disparar evento
  const handleLinkClick = (url: string, eventName: string, plan?: string) => {
    pushGTMEvent(eventName, plan);
    window.open(url, "_blank");
  };

  return (
    <section className="bg-[#1C1C1C] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Nossos Planos
        </h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 flex-1 w-full hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
              <p className="text-2xl font-extrabold mb-4">{plan.price}</p>
              <p className="text-gray-700 mb-6">{plan.description}</p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() =>
                    handleLinkClick(plan.linkPix, "pix_click", plan.name)
                  }
                  className="bg-orange-500 text-black font-bold py-2 px-4 rounded-lg w-full hover:bg-orange-600 transition-colors"
                >
                  Pagar com PIX (5% de desconto)
                </button>

                <button
                  onClick={() =>
                    handleLinkClick(plan.linkCartao, "cartao_click", plan.name)
                  }
                  className="bg-orange-500 text-black font-bold py-2 px-4 rounded-lg w-full hover:bg-orange-600 transition-colors"
                >
                  Pagar com Cartão
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-white">
          <p className="mb-4 text-lg">
            Após o pagamento, envie o comprovante pelo WhatsApp:
          </p>
          <button
            onClick={() => handleLinkClick(whatsappLink, "whatsapp_click")}
            className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg inline-block hover:bg-green-600 transition-colors"
          >
            Enviar Comprovante
          </button>
        </div>
      </div>
    </section>
  );
}
