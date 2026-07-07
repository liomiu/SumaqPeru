import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "../../imports/1.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src={logoImg} alt="SUMAQ PERÚ" className="h-14 w-14" />
            <div className="ml-3 text-primary-foreground">
              <div className="font-serif tracking-wide">SUMAQ PERÚ</div>
              <div className="text-xs text-secondary">Artesanías Peruanas</div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {["Inicio", "Catálogo", "Nosotros", "Contacto"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-primary-foreground hover:text-secondary transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {["Inicio", "Catálogo", "Nosotros", "Contacto"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-2 text-primary-foreground hover:bg-primary/50 transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
