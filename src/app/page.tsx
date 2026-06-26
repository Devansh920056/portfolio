import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhatIBring } from "@/components/sections/WhatIBring";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { ContinuousLearning } from "@/components/sections/ContinuousLearning";
import { Profiles } from "@/components/sections/Profiles";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhatIBring />
      <Skills />
      <Projects />
      <ContinuousLearning />
      <Profiles />
      <Contact />
      <Footer />
    </main>
  );
}
