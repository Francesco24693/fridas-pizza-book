import { Button } from "@/components/ui/button";
import { Calendar, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-pizzeria.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Benvenuti da{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Frida
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Dove la tradizione italiana incontra la creatività moderna. 
            Scopri i sapori autentici della nostra cucina nel cuore della città.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-hero-gradient hover:opacity-90 shadow-elegant px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link to="/prenotazioni">
                <Calendar className="mr-2 h-5 w-5" />
                Prenota il Tuo Tavolo
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-foreground px-8 py-6 text-lg font-semibold backdrop-blur-sm"
              asChild
            >
              <Link to="/menu">
                <ChefHat className="mr-2 h-5 w-5" />
                Scopri il Menu
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="text-center">
              <div className="text-3xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                15+
              </div>
              <div className="text-gray-300 font-medium">Anni di Esperienza</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-gray-300 font-medium">Pizze Artigianali</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                1000+
              </div>
              <div className="text-gray-300 font-medium">Clienti Soddisfatti</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;