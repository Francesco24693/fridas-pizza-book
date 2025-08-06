import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card } from "@/components/ui/card";

const images = [
  "https://images.unsplash.com/photo-1601924922288-678c4440a693?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1548365328-73944c49f8a0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1594007657473-097c6db16e04?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1572635196237-24b3f2d46ec8?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1604152135912-04a256e7a2d9?auto=format&fit=crop&w=800&q=80",
];

const Galleria = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-20">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              La nostra <span className="bg-hero-gradient bg-clip-text text-transparent">Galleria</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Uno sguardo alle nostre pizze artigianali e al locale accogliente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src, idx) => (
              <Card key={idx} className="overflow-hidden">
                <img src={src} alt={`Galleria ${idx + 1}`} className="object-cover w-full h-48" />
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Galleria;
