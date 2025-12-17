import type { Route } from "./+types/home";
import { Header } from "~/components/Header";
import { Hero } from "~/components/Hero";
import { About } from "~/components/About";
import { Skills } from "~/components/Skills";
import { Projects } from "~/components/Projects";
import { Contact } from "~/components/Contact";
import { Footer } from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Si Thu | Portfolio" },
    { name: "description", content: "Welcome to Si Thu's portfolio website." },
  ];
}

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
