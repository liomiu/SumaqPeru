import { motion } from "motion/react";
import { Heart, Users, Award, Globe } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Hecho con Amor",
    description: "Cada pieza es elaborada con dedicación y pasión por nuestras artesanas"
  },
  {
    icon: Users,
    title: "Equipo de 5 Artesanas",
    description: "Rosa lidera un equipo de 4 talentosas artesanas de San Sebastián, Cusco"
  },
  {
    icon: Award,
    title: "Calidad Garantizada",
    description: "Productos de alta calidad con técnicas tradicionales andinas"
  },
  {
    icon: Globe,
    title: "Alcance Global",
    description: "Apreciados por turistas, tiendas de souvenirs y compradores online"
  }
];

export function About() {
  return (
    <section id="nosotros" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            Sobre Nosotros
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-serif text-primary mb-6">
              Tradición Andina, Calidad Artesanal
            </h3>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              En <span className="text-accent font-semibold">SUMAQ PERÚ</span>, somos un equipo apasionado de 5 artesanas del distrito de San Sebastián en Cusco, Perú. Bajo el liderazgo de Rosa, creamos textiles, cerámicas y bisutería artesanal que capturan la esencia de nuestras tradiciones andinas.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Cada pieza es única y refleja el cuidado, la habilidad y el amor que ponemos en nuestro trabajo. Utilizamos técnicas ancestrales transmitidas de generación en generación, combinándolas con diseños contemporáneos para crear productos que conectan el pasado con el presente.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Nuestros productos tienen alta demanda entre turistas que visitan Cusco, tiendas de souvenirs que buscan autenticidad, y compradores online de todo el mundo que aprecian la artesanía genuina.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="text-accent" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
