import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Experience } from "./components/experience";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Nav } from "./components/nav";
import { Services } from "./components/services";
import { Skills } from "./components/skills";
import { Testimonials } from "./components/testimonials";
import { WhyHire } from "./components/why-hire";

export function PortfolioPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Testimonials />
        <WhyHire />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
