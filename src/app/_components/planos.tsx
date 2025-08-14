"use client";

import React from 'react';

export function Plans() {
  const plans = [
    {
      name: 'Trimestral',
      price: 'R$329,90',
      description: '3 meses. Economize e mantenha consistência.',
    },
    {
      name: 'Semestral',
      price: 'R$629,90',
      description: '6 meses. Resultados a longo prazo.',
    },
    {
      name: 'Anual',
      price: 'R$1179,90',
      description: '12 meses. Maior desconto, compromisso completo para evolução máxima.',
    },
  ];

  return (
    <section className="bg-[#1C1C1C] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Nossos Planos</h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 flex-1 max-w-sm mx-auto hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
              <p className="text-2xl font-extrabold mb-4">{plan.price}</p>
              <p className="text-gray-700 mb-6">{plan.description}</p>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white font-bold py-2 px-4 rounded-lg w-full inline-block hover:bg-gray-800 transition-colors"
              >
                Assinar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
