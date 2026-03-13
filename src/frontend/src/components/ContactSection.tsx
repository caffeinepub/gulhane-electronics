import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useGetStoreInfo } from "../hooks/useQueries";

const FALLBACK_INFO = {
  name: "Gulhane Electronics",
  phone: "8412939290",
  address: "Murtizapur, Akola 444106",
  email: "gulhanepratik028@gmail.com",
};

export default function ContactSection() {
  const { data: storeInfo } = useGetStoreInfo();
  const info = storeInfo || FALLBACK_INFO;

  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="py-20 bg-card/40"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-700 tracking-tight">
            Visit Our Store
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {[
              {
                icon: Phone,
                label: "Phone",
                value: info.phone,
                href: `tel:${info.phone.replace(/\s/g, "")}`,
              },
              {
                icon: Mail,
                label: "Email",
                value: info.email,
                href: `mailto:${info.email}`,
              },
              {
                icon: MapPin,
                label: "Address",
                value: info.address,
                href: `https://maps.google.com/?q=${encodeURIComponent(info.address)}`,
              },
              {
                icon: Clock,
                label: "Store Hours",
                value: "Mon – Sat: 10am – 8pm | Sun: 11am – 6pm",
                href: null,
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex gap-4 items-start bg-card border border-border rounded-lg p-4 hover:border-primary/40 transition-colors"
              >
                <div className="w-10 h-10 rounded bg-primary/10 flex-shrink-0 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Map placeholder / brand card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border rounded-lg overflow-hidden circuit-bg flex flex-col items-center justify-center p-12 text-center min-h-64"
          >
            <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-700 mb-2">{info.name}</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              {info.address}
            </p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(info.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
            >
              Open in Google Maps →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
