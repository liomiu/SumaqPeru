import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { imgMachupicchu } from "./productImages";

export function Hero() {
  const scrollToCatalog = () => {
    const element = document.getElementById("catálogo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${imgMachupicchu})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif text-primary-foreground mb-6 tracking-wide">
            SUMAQ PERÚ
          </h1>
          <div className="w-32 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-xl md:text-3xl text-secondary mb-4">
            Artesanías Peruanas Hechas a Mano
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Textiles, cerámicas y bisutería artesanal andina elaborados con amor por Rosa y su equipo de artesanas del distrito de San Sebastián, Cusco
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12"
        >
          <button
            onClick={scrollToCatalog}
            className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explorar Catálogo
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-primary-foreground animate-bounce" size={32} />
        </motion.div>
      </div>
    </section>
  );
}
