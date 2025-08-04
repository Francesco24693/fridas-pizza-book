import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Navigation } from "lucide-react";

const Contatti = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="container px-4">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-hero-gradient bg-clip-text text-transparent">Contattaci</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Siamo qui per te! Contattaci per prenotazioni, informazioni o semplicemente per condividere la tua esperienza.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Dove Siamo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Indirizzo</h4>
                    <p className="text-muted-foreground">
                      Via Roma 123<br />
                      00100 Roma, Italia
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Come Raggiungerci</h4>
                    <p className="text-muted-foreground text-sm">
                      • Metro: Fermata Termini (Linea A e B)<br />
                      • Bus: Linee 40, 64, 170<br />
                      • Parcheggio disponibile nelle vicinanze
                    </p>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Navigation className="w-4 h-4" />
                      Apri in Google Maps
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    Contatti Diretti
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Telefono</h4>
                      <p className="text-muted-foreground">+39 06 1234567</p>
                    </div>
                    <Button size="sm" asChild>
                      <a href="tel:+390612345678">Chiama Ora</a>
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">info@fridapizzeria.it</p>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <a href="mailto:info@fridapizzeria.it">Scrivi</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Orari di Apertura
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Lunedì</span>
                      <span className="text-muted-foreground">18:00 - 00:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Martedì</span>
                      <span className="text-red-500 font-medium">Chiuso</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mercoledì</span>
                      <span className="text-muted-foreground">18:00 - 00:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Giovedì</span>
                      <span className="text-muted-foreground">18:00 - 00:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Venerdì</span>
                      <span className="text-muted-foreground">18:00 - 00:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sabato</span>
                      <span className="text-muted-foreground">18:00 - 00:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domenica</span>
                      <span className="text-muted-foreground">18:00 - 00:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant bg-warm-gradient">
                <CardHeader>
                  <CardTitle>Seguici sui Social</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Segui le nostre pagine per rimanere aggiornato su novità, eventi speciali e promozioni!
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div className="space-y-6">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>La Nostra Posizione</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center p-8">
                      <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Frida Pizzeria</h3>
                      <p className="text-muted-foreground">
                        Via Roma 123<br />
                        00100 Roma, Italia
                      </p>
                      <Button className="mt-4 bg-hero-gradient" asChild>
                        <a 
                          href="https://maps.google.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Visualizza Mappa Interattiva
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Informazioni Aggiuntive</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Accessibilità</h4>
                    <p className="text-sm text-muted-foreground">
                      Il nostro locale è completamente accessibile ai disabili con ingresso a livello stradale.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Parcheggio</h4>
                    <p className="text-sm text-muted-foreground">
                      Parcheggio a pagamento disponibile nelle vicinanze. Zona ZTL attiva dalle 18:00 alle 03:00.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Mezzi Pubblici</h4>
                    <p className="text-sm text-muted-foreground">
                      Facilmente raggiungibile con metro (Termini) e numerose linee di autobus.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">WiFi Gratuito</h4>
                    <p className="text-sm text-muted-foreground">
                      Connessione WiFi gratuita disponibile per tutti i nostri ospiti.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="max-w-2xl mx-auto p-8 bg-warm-gradient rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Prenota il Tuo Tavolo</h3>
              <p className="text-muted-foreground mb-6">
                Non aspettare! Prenota subito il tuo tavolo per gustare le nostre specialità in un'atmosfera accogliente e unica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-hero-gradient shadow-elegant" asChild>
                  <a href="/prenotazioni">Prenota Online</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+390612345678">Chiama Ora</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contatti;