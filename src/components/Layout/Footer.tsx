import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import fridaLogo from "@/assets/frida-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-warm-gradient border-t">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={fridaLogo} 
                alt="Frida Pizzeria" 
                className="h-12 w-12 rounded-full object-cover shadow-elegant"
              />
              <span className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                Frida
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Una pizzeria dove tradizione e creatività si incontrano per offrire 
              un'esperienza culinaria unica nel cuore della città.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Link Rapidi</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/menu" className="text-muted-foreground hover:text-primary transition-colors">
                Menu
              </Link>
              <Link to="/prenotazioni" className="text-muted-foreground hover:text-primary transition-colors">
                Prenotazioni
              </Link>
              <Link to="/galleria" className="text-muted-foreground hover:text-primary transition-colors">
                Galleria
              </Link>
              <Link to="/eventi" className="text-muted-foreground hover:text-primary transition-colors">
                Eventi
              </Link>
              <Link to="/contatti" className="text-muted-foreground hover:text-primary transition-colors">
                Contatti
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contatti</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Via Roma 123<br />
                  00100 Roma, Italia
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+39 06 1234567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@fridapizzeria.it</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Orari di Apertura</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div className="font-medium">Lun - Dom</div>
                  <div>18:00 - 00:00</div>
                  <div className="text-sm mt-2">
                    Chiuso il Martedì
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>© 2024 Frida Pizzeria. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;