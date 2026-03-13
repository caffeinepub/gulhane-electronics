import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
            <Zap className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-700 text-lg tracking-tight">
            <span className="text-foreground">Gulhane</span>
            <span className="text-primary"> Electronics</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            type="button"
            data-ocid="nav.home_link"
            onClick={() => scrollTo("hero")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </button>
          <button
            type="button"
            data-ocid="nav.products_link"
            onClick={() => scrollTo("products")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Products
          </button>
          <button
            type="button"
            data-ocid="nav.contact_link"
            onClick={() => scrollTo("contact")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
          <Button
            size="sm"
            onClick={() => scrollTo("contact")}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Get in Touch
          </Button>
        </nav>

        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border px-4 pb-4">
          <nav className="flex flex-col gap-2">
            <button
              type="button"
              data-ocid="nav.home_link"
              onClick={() => scrollTo("hero")}
              className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button
              type="button"
              data-ocid="nav.products_link"
              onClick={() => scrollTo("products")}
              className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Products
            </button>
            <button
              type="button"
              data-ocid="nav.contact_link"
              onClick={() => scrollTo("contact")}
              className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
