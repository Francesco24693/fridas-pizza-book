import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/ui/hero-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone, Star, ChefHat, Utensils, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Features Section */}
        <section className="py-20 bg-warm-gradient">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-6">La Nostra Filosofia</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Da oltre 15 anni, creiamo pizze autentiche utilizzando solo ingredienti 
                di prima qualità e ricette tradizionali tramandate di generazione in generazione.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center shadow-elegant hover:shadow-warm-glow transition-all duration-300">
                <CardHeader>
                  <ChefHat className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle>Maestri Pizzaioli</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    I nostri pizzaioli esperti creano ogni pizza a mano con passione e dedizione, 
                    garantendo sempre il massimo della qualità.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-elegant hover:shadow-warm-glow transition-all duration-300">
                <CardHeader>
                  <Utensils className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle>Ingredienti Premium</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Selezioniamo solo i migliori ingredienti locali e importati, 
                    dalla mozzarella di bufala al pomodoro San Marzano DOP.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-elegant hover:shadow-warm-glow transition-all duration-300">
                <CardHeader>
                  <Award className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle>Tradizione & Innovazione</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Rispettiamo la tradizione napoletana mentre esploriamo nuovi sapori 
                    per offrire un'esperienza culinaria unica e memorabile.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">Informazioni Utili</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Dove Trovarci</h3>
                      <p className="text-muted-foreground">
                        Via Roma 123, 00100 Roma<br />
                        Facilmente raggiungibile con i mezzi pubblici
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Orari di Apertura</h3>
                      <p className="text-muted-foreground">
                        Lunedì - Domenica: 18:00 - 00:00<br />
                        Chiuso il Martedì
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Prenotazioni</h3>
                      <p className="text-muted-foreground">
                        +39 06 1234567<br />
                        Prenota online per garantirti il tavolo
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-hero-gradient shadow-elegant" asChild>
                  <Link to="/prenotazioni">
                    Prenota Ora
                  </Link>
                </Button>
              </div>
              
              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Recensioni Clienti</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground italic mb-2">
                      "La migliore pizza di Roma! Ingredienti freschi, impasto perfetto 
                      e servizio eccellente. Ci torniamo sempre!"
                    </p>
                    <p className="font-semibold">- Maria R.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground italic mb-2">
                      "Atmosfera accogliente e pizza straordinaria. 
                      Il personale è molto professionale e gentile."
                    </p>
                    <p className="font-semibold">- Giuseppe M.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
