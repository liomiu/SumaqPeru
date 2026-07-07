import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowLeft, Tag } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

import {
  imgMantaInca,
  imgCaminoDeMesa,
  imgBolso,
  imgChalina,
  imgVasija,
  imgToro,
  imgPlato,
  imgMacetero,
  imgRetablo,
  imgMates,
  imgLlama,
  imgPackCeramica,
  imgPeluche,
  imgCollar,
  imgPulsera,
  imgAretes,
  imgSet,
} from "./productImages";

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
};

type Category = {
  id: string;
  name: string;
  subtitle: string;
  coverImage: string;
  products: Product[];
};

const categories: Category[] = [
  {
    id: "textiles",
    name: "Textiles Andinos",
    subtitle: "Tejidos tradicionales con diseños ancestrales",
    coverImage: imgMantaInca,
    products: [
      {
        id: 1,
        name: "Manta Inca",
        description: "Manta tejida a mano con lana de alpaca, diseños geométricos ancestrales en colores naturales.",
        price: "S/. 180",
        image: imgMantaInca,
      },
      {
        id: 2,
        name: "Camino de Mesa Andino",
        description: "Camino de mesa tejido en telar con motivos de Cusco, ideal para decoración del hogar.",
        price: "S/. 95",
        image: imgCaminoDeMesa,
      },
      {
        id: 3,
        name: "Bolso Wayra",
        description: "Bolso artesanal tejido con diseños de la sierra cusqueña. Resistente y colorido.",
        price: "S/. 120",
        image: imgBolso,
      },
      {
        id: 4,
        name: "Chalina de Alpaca",
        description: "Suave chalina tejida con fibra de alpaca 100% natural, diseños con iconografía andina.",
        price: "S/. 140",
        image: imgChalina,
      },
    ],
  },
  {
    id: "ceramicas",
    name: "Cerámicas Artesanales",
    subtitle: "Piezas únicas modeladas y pintadas a mano",
    coverImage: imgVasija,
    products: [
      {
        id: 5,
        name: "Vasija Inca",
        description: "Réplica de vasija inca elaborada en arcilla cusqueña con acabado en pigmentos naturales.",
        price: "S/. 75",
        image: imgVasija,
      },
      {
        id: 6,
        name: "Toro de Pucará",
        description: "Símbolo de prosperidad andina. Elaborado en arcilla y pintado con diseños tradicionales.",
        price: "S/. 55",
        image: imgToro,
      },
      {
        id: 7,
        name: "Plato Decorativo",
        description: "Plato en cerámica pintado a mano con iconografía andina del Cusco imperial.",
        price: "S/. 65",
        image: imgPlato,
      },
      {
        id: 8,
        name: "Macetero Floral",
        description: "Macetero de cerámica artesanal con relieve de flores andinas y esmalte brillante.",
        price: "S/. 85",
        image: imgMacetero,
      },
    ],
  },
  {
    id: "bisuteria",
    name: "Bisutería Artesanal",
    subtitle: "Collares, pulseras y aretes con cuentas tradicionales",
    coverImage:
      "https://images.unsplash.com/photo-1629481995102-ff98d306dd8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    products: [
      {
        id: 9,
        name: "Collar Qori",
        description: "Collar tejido con cuentas de vidrio en colores andinos y dijes de plata alpaca.",
        price: "S/. 45",
        image: imgCollar,
      },
      {
        id: 10,
        name: "Pulsera Chakana",
        description: "Pulsera tejida con el símbolo de la cruz andina. Varios colores disponibles.",
        price: "S/. 25",
        image:
          imgPulsera,
      },
      {
        id: 11,
        name: "Aretes Andinos",
        description: "Aretes tejidos con hilos de colores naturales y cuentas de turquesa.",
        price: "S/. 30",
        image:
          imgAretes,
      },
    ],
  },
  {
    id: "artesanias",
    name: "Artesanías Diversas",
    subtitle: "Recuerdos únicos hechos a mano con alma cusqueña",
    coverImage: imgRetablo,
    products: [
      {
        id: 13,
        name: "Retablo Ayacuchano",
        description: "Caja artesanal que representa escenas de la vida andina con figuras modeladas a mano.",
        price: "S/. 110",
        image: imgRetablo,
      },
      {
        id: 14,
        name: "Mates Burilados",
        description: "Calabazas decoradas con escenas costumbristas del Cusco, técnica ancestral de burilado.",
        price: "S/. 60",
        image: imgMates,
      },
      {
        id: 15,
        name: "Llama de Alpaca",
        description: "Figura decorativa de llama tejida con lana de alpaca. Souvenir auténtico del Perú.",
        price: "S/. 35",
        image: imgPeluche,
      },
      {
        id: 16,
        name: "Cuadro en Tela",
        description: "Pintura artesanal sobre tela con paisajes y tradiciones del Cusco.",
        price: "S/. 150",
        image:
          "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
    ],
  },
  {
    id: "promociones",
    name: "Promociones",
    subtitle: "Ofertas especiales y packs de temporada",
    coverImage: imgPackCeramica,
    products: [
      {
        id: 17,
        name: "Pack Souvenir Básico",
        description: "Incluye 1 pulsera, 1 llavero y 1 mate burilado pequeño. Ideal para turistas.",
        price: "S/. 50  (antes S/. 70)",
        image:
          "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        id: 18,
        name: "Pack Regalo Premium",
        description: "Caja con manta de alpaca, collar y vasija. Presentación especial con papel artesanal.",
        price: "S/. 290  (antes S/. 370)",
        image:
          "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        id: 19,
        name: "Trío de Cerámicas",
        description: "3 piezas de cerámica a elegir entre nuestro catálogo. Descuento especial por pack.",
        price: "S/. 160  (antes S/. 210)",
        image: imgPackCeramica,
      },
      {
        id: 20,
        name: "Kit Bisutería Completo",
        description: "Collar, pulsera y aretes en el mismo diseño. Oferta de temporada alta.",
        price: "S/. 75  (antes S/. 100)",
        image:
          imgSet,
      },
    ],
  },
];

export function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="catálogo" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            Nuestro Catálogo
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selecciona una categoría para explorar nuestra colección de artesanías auténticas
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            <motion.div
              key="categories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {categories.map((cat, index) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group cursor-pointer ${index === 4 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-72 relative">
                    <ImageWithFallback
                      src={cat.coverImage}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    {cat.id === "promociones" && (
                      <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        <Tag size={12} />
                        Ofertas
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-serif text-white mb-1">{cat.name}</h3>
                      <p className="text-white/80 text-sm mb-3">{cat.subtitle}</p>
                      <span className="inline-flex items-center gap-1 text-accent text-sm group-hover:gap-2 transition-all duration-200">
                        Ver productos →
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="products"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-4 mb-10">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="flex items-center gap-2 text-primary hover:text-accent transition-colors duration-200 group"
                >
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-200" />
                  <span>Todas las categorías</span>
                </button>
                <div className="h-px flex-1 bg-border" />
                <h3 className="text-2xl font-serif text-primary">{selectedCategory.name}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {selectedCategory.products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="h-52 overflow-hidden relative">
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-serif text-primary mb-1">{product.name}</h4>
                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
                        <span className="text-accent font-semibold">{product.price}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-72">
                <ImageWithFallback
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors duration-200 shadow"
                >
                  <X size={18} className="text-primary" />
                </button>
                <div className="absolute bottom-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm">
                  {selectedCategory?.name}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-primary mb-2">{selectedProduct.name}</h3>
                <p className="text-muted-foreground mb-4">{selectedProduct.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl text-accent font-bold">{selectedProduct.price}</span>
                  <a
                    href="#contacto"
                    onClick={() => setSelectedProduct(null)}
                    className="bg-primary text-white px-6 py-2 rounded-full hover:bg-accent transition-colors duration-200"
                  >
                    Consultar
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
