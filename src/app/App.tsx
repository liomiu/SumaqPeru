import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Catalog } from "./components/Catalog";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Catalog />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}