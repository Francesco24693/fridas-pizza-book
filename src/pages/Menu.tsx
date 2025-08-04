import { useState } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Flame, Award } from "lucide-react";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("pizze");

  const pizze = [
    {
      id: 1,
      name: "Margherita",
      description: "Pomodoro San Marzano DOP, mozzarella di bufala, basilico fresco, olio EVO",
      price: "€12.00",
      tags: ["vegetariana", "classica"],
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Marinara",
      description: "Pomodoro San Marzano DOP, aglio, origano, basilico fresco, olio EVO",
      price: "€10.00",
      tags: ["vegana", "classica"],
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Diavola",
      description: "Pomodoro, mozzarella, salame piccante, peperoncino fresco",
      price: "€14.00",
      tags: ["piccante"],
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Quattro Stagioni",
      description: "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi, olive",
      price: "€16.00",
      tags: ["gourmet"],
      image: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Frida Special",
      description: "Crema di zucca, gorgonzola DOP, speck Alto Adige, noci, rucola",
      price: "€18.00",
      tags: ["gourmet", "speciale"],
      image: "/placeholder.svg"
    },
    {
      id: 6,
      name: "Capricciosa",
      description: "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi, olive, uovo",
      price: "€15.00",
      tags: ["classica"],
      image: "/placeholder.svg"
    }
  ];

  const antipasti = [
    {
      id: 1,
      name: "Tagliere di Salumi e Formaggi",
      description: "Selezione di salumi e formaggi locali con miele e mostarda",
      price: "€18.00",
      tags: ["sharing"]
    },
    {
      id: 2,
      name: "Bruschette della Casa",
      description: "Bruschette con pomodoro, basilico e aglio (4 pezzi)",
      price: "€8.00",
      tags: ["vegetariana"]
    },
    {
      id: 3,
      name: "Arancini Siciliani",
      description: "Arancini al ragù o alla norma (3 pezzi)",
      price: "€12.00",
      tags: ["tradizionale"]
    }
  ];

  const bevande = [
    {
      id: 1,
      name: "Acqua Naturale/Frizzante",
      description: "Bottiglia 75cl",
      price: "€3.00",
      tags: []
    },
    {
      id: 2,
      name: "Birra alla Spina",
      description: "Media (40cl) - Bionda o Rossa",
      price: "€5.00",
      tags: []
    },
    {
      id: 3,
      name: "Vino della Casa",
      description: "Bianco o Rosso - Calice",
      price: "€4.00",
      tags: []
    },
    {
      id: 4,
      name: "Coca Cola / Aranciata",
      description: "Lattina 33cl",
      price: "€3.50",
      tags: []
    }
  ];

  const getTagIcon = (tag: string) => {
    switch (tag) {
      case "vegetariana":
      case "vegana":
        return <Leaf className="w-3 h-3" />;
      case "piccante":
        return <Flame className="w-3 h-3" />;
      case "gourmet":
      case "speciale":
        return <Award className="w-3 h-3" />;
      default:
        return null;
    }
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "vegetariana":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "vegana":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "piccante":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      case "gourmet":
      case "speciale":
        return "bg-primary/10 text-primary hover:bg-primary/20";
      case "classica":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const renderMenuItems = (items: any[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card key={item.id} className="hover:shadow-elegant transition-all duration-300 group">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {item.name}
              </CardTitle>
              <span className="text-xl font-bold text-primary">{item.price}</span>
            </div>
            {item.tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {item.tags.map((tag: string) => (
                  <Badge 
                    key={tag} 
                    variant="secondary" 
                    className={`text-xs ${getTagColor(tag)}`}
                  >
                    {getTagIcon(tag)}
                    <span className="ml-1 capitalize">{tag}</span>
                  </Badge>
                ))}
              </div>
            )}
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm leading-relaxed">
              {item.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="container px-4">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Il Nostro <span className="bg-hero-gradient bg-clip-text text-transparent">Menu</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Scopri le nostre specialità preparate con ingredienti freschi e di qualità. 
              Ogni piatto racconta una storia di tradizione e passione.
            </p>
          </div>

          {/* Menu Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="pizze" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Pizze
              </TabsTrigger>
              <TabsTrigger value="antipasti" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Antipasti
              </TabsTrigger>
              <TabsTrigger value="bevande" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Bevande
              </TabsTrigger>
            </TabsList>

            <TabsContent value="pizze" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Le Nostre Pizze</h2>
                <p className="text-muted-foreground">
                  Impasto a lievitazione naturale per 72 ore, cotto nel nostro forno a legna
                </p>
              </div>
              {renderMenuItems(pizze)}
            </TabsContent>

            <TabsContent value="antipasti" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Antipasti e Sfizi</h2>
                <p className="text-muted-foreground">
                  Per iniziare al meglio la tua esperienza culinaria
                </p>
              </div>
              {renderMenuItems(antipasti)}
            </TabsContent>

            <TabsContent value="bevande" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Bevande</h2>
                <p className="text-muted-foreground">
                  Selezione di bevande per accompagnare i nostri piatti
                </p>
              </div>
              {renderMenuItems(bevande)}
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <div className="text-center mt-16 p-8 bg-warm-gradient rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Pronto a Gustare?</h3>
            <p className="text-muted-foreground mb-6">
              Prenota il tuo tavolo e vieni a scoprire tutti i sapori di Frida
            </p>
            <Button size="lg" className="bg-hero-gradient shadow-elegant" asChild>
              <a href="/prenotazioni">Prenota Ora</a>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Menu;