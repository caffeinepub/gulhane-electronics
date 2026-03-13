import { Zap } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="bg-card/60 border-t border-border py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-primary flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="font-display font-700 text-base">
              <span className="text-foreground">Gulhane</span>
              <span className="text-primary"> Electronics</span>
            </span>
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("hero")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-foreground transition-colors"
            >
              Products
            </button>
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>

          <p className="text-xs text-muted-foreground">
            \u00a9 {year}. Built with \u2764\ufe0f using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
