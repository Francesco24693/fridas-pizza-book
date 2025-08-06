import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, Calendar } from "lucide-react";
import fridaLogo from "@/assets/frida-logo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/galleria", label: "Galleria" },
    { href: "/prenotazioni", label: "Prenota" },
    { href: "/contatti", label: "Contatti" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src={fridaLogo} 
            alt="Frida Pizzeria" 
            className="h-10 w-10 rounded-full object-cover shadow-elegant"
          />
          <span className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
            Frida
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.href) 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" asChild>
            <Link to="/login">
              <User className="mr-2 h-4 w-4" />
              Accedi
            </Link>
          </Button>
          <Button size="sm" className="bg-hero-gradient shadow-elegant" asChild>
            <Link to="/prenotazioni">
              <Calendar className="mr-2 h-4 w-4" />
              Prenota Ora
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <User className="mr-2 h-4 w-4" />
                    Accedi
                  </Link>
                </Button>
                <Button className="w-full bg-hero-gradient" asChild>
                  <Link to="/prenotazioni" onClick={() => setIsOpen(false)}>
                    <Calendar className="mr-2 h-4 w-4" />
                    Prenota Ora
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;