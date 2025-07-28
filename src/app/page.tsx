"use client";

import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Services } from "./_components/services";
import {Testimonials} from "./_components/testimonials";
import { Footer } from "./_components/footer";
import { AosInit } from "./_components/aos-init";
import { FraseDeEfeito } from "./_components/frasedeefeito";

export default function Home(){
  return (
    <main>
     
      <Hero />
      
      <FraseDeEfeito />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}