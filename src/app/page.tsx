"use client";

import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Services } from "./_components/services";
import {Testimonials} from "./_components/testimonials";
import { Footer } from "./_components/footer";
import { AosInit } from "./_components/aos-init";
import { FraseDeEfeito } from "./_components/frasedeefeito";
import { AboutMe } from "./_components/aboutme";
import { Plans } from "./_components/planos";

export default function Home(){
  return (
    <main>
     
      <Hero />
      
      <FraseDeEfeito />
      <About />
      <Testimonials />
      <Services />
      <AboutMe />
      <Plans  />
      <Footer />
    </main>
  );
}