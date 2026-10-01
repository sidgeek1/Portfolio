import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Studio } from "@/components/portfolio/Studio";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    window.__lenis = lenis;
    let id;
    const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); window.__lenis = null; };
  }, []);

  return (
    <div className="grain relative" data-testid="portfolio-root">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Studio />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Toaster theme="dark" position="bottom-center" />
    </div>
  );
}

export default App;
