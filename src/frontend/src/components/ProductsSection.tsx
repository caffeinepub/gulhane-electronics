import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { Product } from "../backend.d";
import { Category, useGetProductsByCategory } from "../hooks/useQueries";
import ProductCard from "./ProductCard";

const CATEGORIES: { label: string; value: "All" | Category }[] = [
  { label: "All", value: "All" },
  { label: "Mobile", value: Category.Mobile },
  { label: "TV", value: Category.TV },
  { label: "AC", value: Category.AC },
  { label: "Refrigerator", value: Category.Refrigerator },
  { label: "Washing Machine", value: Category.WashingMachine },
  { label: "Laptop", value: Category.Laptop },
];

const SKELETON_KEYS = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"];

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: BigInt(1),
    name: "Samsung Galaxy S24 Ultra",
    description:
      "200MP camera, Snapdragon 8 Gen 3, 5000mAh battery. The ultimate flagship experience.",
    category: Category.Mobile,
    price: BigInt(124999),
    inStock: true,
  },
  {
    id: BigInt(2),
    name: "LG OLED 55C3 Smart TV",
    description:
      "55-inch 4K OLED display, Dolby Vision IQ, \u03b19 AI Processor Gen6, webOS 23.",
    category: Category.TV,
    price: BigInt(139990),
    inStock: true,
  },
  {
    id: BigInt(3),
    name: "Daikin 1.5 Ton 5-Star Inverter AC",
    description:
      "Energy-efficient inverter compressor, PM 2.5 filter, Wi-Fi enabled smart control.",
    category: Category.AC,
    price: BigInt(45999),
    inStock: true,
  },
  {
    id: BigInt(4),
    name: "Whirlpool 265L Double Door Refrigerator",
    description:
      "Intellisense inverter technology, 6th sense deep freeze, 2 hours ice in 99 min.",
    category: Category.Refrigerator,
    price: BigInt(29990),
    inStock: false,
  },
  {
    id: BigInt(5),
    name: "Apple MacBook Air M3",
    description:
      "M3 chip, 8-core CPU, 10-core GPU, 16GB RAM, 512GB SSD. Fanless thin design.",
    category: Category.Laptop,
    price: BigInt(134900),
    inStock: true,
  },
  {
    id: BigInt(6),
    name: "IFB 8Kg Front Load Washer",
    description:
      "1200 RPM, aqua energie, 3D wash system, cradle wash for delicate clothes.",
    category: Category.WashingMachine,
    price: BigInt(42990),
    inStock: true,
  },
  {
    id: BigInt(7),
    name: "OnePlus 12 5G",
    description:
      "Snapdragon 8 Gen 3, 50MP Hasselblad triple camera, 100W SUPERVOOC charging.",
    category: Category.Mobile,
    price: BigInt(64999),
    inStock: true,
  },
  {
    id: BigInt(8),
    name: "Sony Bravia XR A80L 65-inch",
    description:
      "XR OLED panel, Cognitive Processor XR, Acoustic Surface Audio+, Google TV.",
    category: Category.TV,
    price: BigInt(229990),
    inStock: false,
  },
];

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All");
  const { data: products, isLoading } =
    useGetProductsByCategory(activeCategory);

  const displayProducts =
    products && products.length > 0 ? products : SAMPLE_PRODUCTS;
  const filtered =
    activeCategory === "All"
      ? displayProducts
      : displayProducts.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
            Our Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-700 tracking-tight">
            Shop by Category
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 overflow-x-auto pb-2"
        >
          <Tabs
            value={activeCategory}
            onValueChange={(v) => setActiveCategory(v as "All" | Category)}
          >
            <TabsList className="bg-card border border-border h-auto p-1 gap-1 flex-wrap">
              {CATEGORIES.map((cat) => (
                <TabsTrigger
                  key={cat.value}
                  value={cat.value}
                  data-ocid="products.tab"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded px-4 py-2 text-sm font-medium"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {isLoading ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            data-ocid="products.loading_state"
          >
            {SKELETON_KEYS.map((key) => (
              <div key={key} className="bg-card rounded-lg p-4 space-y-3">
                <Skeleton className="h-40 w-full rounded" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-6 w-1/3" />
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div
            data-ocid="products.empty_state"
            className="text-center py-20 text-muted-foreground"
          >
            <p className="text-lg">No products found in this category.</p>
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((product, index) => (
                <motion.div
                  key={String(product.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  data-ocid={`products.item.${index + 1}`}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
