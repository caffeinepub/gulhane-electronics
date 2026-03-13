import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Laptop,
  Refrigerator,
  Smartphone,
  Tv,
  WashingMachine,
  Wind,
  XCircle,
} from "lucide-react";
import { Category } from "../backend";
import type { Product } from "../backend.d";

const CATEGORY_LABELS: Record<Category, string> = {
  [Category.Mobile]: "Mobile",
  [Category.TV]: "TV",
  [Category.AC]: "AC",
  [Category.Refrigerator]: "Refrigerator",
  [Category.WashingMachine]: "Washing Machine",
  [Category.Laptop]: "Laptop",
};

const CATEGORY_ICONS: Record<Category, React.ReactNode> = {
  [Category.Mobile]: <Smartphone className="w-4 h-4" />,
  [Category.TV]: <Tv className="w-4 h-4" />,
  [Category.AC]: <Wind className="w-4 h-4" />,
  [Category.Refrigerator]: <Refrigerator className="w-4 h-4" />,
  [Category.WashingMachine]: <WashingMachine className="w-4 h-4" />,
  [Category.Laptop]: <Laptop className="w-4 h-4" />,
};

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const priceFormatted = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(product.price));

  return (
    <div className="product-card bg-card border border-border rounded-lg p-5 flex flex-col h-full">
      {/* Category icon area */}
      <div className="w-full h-36 rounded bg-secondary/30 flex items-center justify-center mb-4 text-primary">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="[&>svg]:w-7 [&>svg]:h-7">
            {CATEGORY_ICONS[product.category]}
          </span>
        </div>
      </div>

      {/* Badge row */}
      <div className="flex items-center gap-2 mb-2">
        <Badge
          variant="secondary"
          className="text-xs bg-primary/10 text-primary border-primary/20 border"
        >
          {CATEGORY_LABELS[product.category]}
        </Badge>
        {product.inStock ? (
          <span className="flex items-center gap-1 text-xs text-green-400">
            <CheckCircle2 className="w-3 h-3" /> In Stock
          </span>
        ) : (
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <XCircle className="w-3 h-3" /> Out of Stock
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="font-display font-600 text-base leading-snug mb-2 text-foreground">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1 mb-4">
        {product.description}
      </p>

      {/* Price */}
      <div className="mt-auto">
        <span className="font-display font-700 text-xl text-primary">
          {priceFormatted}
        </span>
      </div>
    </div>
  );
}
