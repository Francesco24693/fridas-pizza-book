import { useState } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users, Phone, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Prenotazioni = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    data: "",
    ora: "",
    persone: "",
    note: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('reservations')
        .insert([
          {
            name: `${formData.nome} ${formData.cognome}`,
            email: formData.email,
            phone: formData.telefono,
            date: formData.data,
            time: formData.ora,
            guests: parseInt(formData.persone),
            notes: formData.note,
            status: 'pending'
          }
        ]);

      if (error) throw error;

      toast({
        title: "Prenotazione inviata!",
        description: "Ti contatteremo entro 30 minuti per confermare la disponibilità.",
      });

      // Reset form
      setFormData({
        nome: "",
        cognome: "",
        email: "",
        telefono: "",
        data: "",
        ora: "",
        persone: "",
        note: ""
      });
    } catch (error) {
      toast({
        title: "Errore",
        description: "Errore nell'invio della prenotazione. Riprova più tardi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const orariDisponibili = [
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", 
    "21:00", "21:30", "22:00", "22:30", "23:00"
  ];

  const numeroPersone = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="container px-4">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-hero-gradient bg-clip-text text-transparent">Prenota</span> il Tuo Tavolo
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Compila il form sottostante per prenotare il tuo tavolo. 
              Ti contatteremo entro 30 minuti per confermare la disponibilità.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl">Dati Prenotazione</CardTitle>
                  <CardDescription>
                    Tutti i campi contrassegnati con * sono obbligatori
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Dati Personali */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome *</Label>
                        <Input
                          id="nome"
                          type="text"
                          placeholder="Il tuo nome"
                          value={formData.nome}
                          onChange={(e) => handleInputChange("nome", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cognome">Cognome *</Label>
                        <Input
                          id="cognome"
                          type="text"
                          placeholder="Il tuo cognome"
                          value={formData.cognome}
                          onChange={(e) => handleInputChange("cognome", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="La tua email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Telefono *</Label>
                        <Input
                          id="telefono"
                          type="tel"
                          placeholder="+39 123 456 7890"
                          value={formData.telefono}
                          onChange={(e) => handleInputChange("telefono", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Dettagli Prenotazione */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="data">Data *</Label>
                        <Input
                          id="data"
                          type="date"
                          value={formData.data}
                          onChange={(e) => handleInputChange("data", e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ora">Orario *</Label>
                        <Select value={formData.ora} onValueChange={(value) => handleInputChange("ora", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleziona orario" />
                          </SelectTrigger>
                          <SelectContent>
                            {orariDisponibili.map((ora) => (
                              <SelectItem key={ora} value={ora}>
                                {ora}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="persone">Persone *</Label>
                        <Select value={formData.persone} onValueChange={(value) => handleInputChange("persone", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="N° persone" />
                          </SelectTrigger>
                          <SelectContent>
                            {numeroPersone.map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? "persona" : "persone"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Note */}
                    <div className="space-y-2">
                      <Label htmlFor="note">Note aggiuntive</Label>
                      <Textarea
                        id="note"
                        placeholder="Allergie, intolleranze, richieste speciali..."
                        value={formData.note}
                        onChange={(e) => handleInputChange("note", e.target.value)}
                        rows={4}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-hero-gradient shadow-elegant"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Invio in corso..." : "Invia Prenotazione"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Orari e Informazioni
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Orari di Apertura</h4>
                    <p className="text-sm text-muted-foreground">
                      Lunedì - Domenica: 18:00 - 00:00<br />
                      Chiuso il Martedì
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tempo di Conferma</h4>
                    <p className="text-sm text-muted-foreground">
                      Ti contatteremo entro 30 minuti per confermare la disponibilità del tavolo.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Politica di Cancellazione</h4>
                    <p className="text-sm text-muted-foreground">
                      Cancellazione gratuita fino a 2 ore prima della prenotazione.
                    </p>
                  </div>
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
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-sm">+39 06 1234567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-sm">info@fridapizzeria.it</span>
                  </div>
                  <div className="pt-2">
                    <p className="text-sm text-muted-foreground">
                      Preferisci chiamare? Siamo disponibili tutti i giorni durante gli orari di apertura.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant bg-warm-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    Informazioni Utili
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>• Accettiamo gruppi fino a 12 persone</p>
                  <p>• Menu allergeni disponibile su richiesta</p>
                  <p>• Parcheggio nelle vicinanze</p>
                  <p>• Locale accessibile ai disabili</p>
                  <p>• WiFi gratuito disponibile</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Prenotazioni;