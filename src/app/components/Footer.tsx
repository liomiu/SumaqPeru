import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logoImg from "../../../1.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={logoImg} alt="SUMAQ PERÚ" className="h-16 w-16" />
              <div className="ml-3">
                <div className="font-serif text-xl tracking-wide">SUMAQ PERÚ</div>
                <div className="text-sm text-secondary">Artesanías Peruanas</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Artesanías auténticas hechas a mano con amor por artesanas del distrito de San Sebastián, Cusco.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4 text-secondary">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Distrito de San Sebastián, Cusco, Perú
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">+51 984 153 457</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">contacto@sumaqperu.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4 text-secondary">Síguenos</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Mantente conectado con nuestras novedades y productos
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 hover:bg-secondary p-3 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/sumaq.art.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 hover:bg-secondary p-3 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contacto@sumaqperu.com"
                className="bg-primary-foreground/10 hover:bg-secondary p-3 rounded-full transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-primary-foreground/60 text-sm">
            &copy; {currentYear} SUMAQ PERÚ. Todos los derechos reservados. Hecho con{" "}
            <span className="text-secondary">❤</span> en Cusco, Perú
          </p>
        </div>
      </div>
    </footer>
  );
}
