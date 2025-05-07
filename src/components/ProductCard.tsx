
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { useStore } from "@/contexts/StoreContext";
import { ShoppingCart, Star } from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useStore();

  return (
    <div className="bike-card group">
      {product.isNew && <span className="bike-tag new">New</span>}
      {product.isSale && <span className="bike-tag sale">Sale</span>}
      
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-[4/3] overflow-hidden rounded-md mb-3">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="h-full w-full object-cover" 
          />
        </div>
        
        <div className="space-y-1 text-sm">
          <h3 className="font-medium leading-none">{product.brand}</h3>
          <h2 className="font-bold text-lg">{product.name}</h2>
          
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
              />
            ))}
            <span className="text-xs text-muted-foreground ml-1">
              ({product.rating.toFixed(1)})
            </span>
          </div>
          
          <div className="flex justify-between items-end pt-1">
            <div>
              {product.isSale && product.originalPrice && (
                <span className="text-sm line-through text-muted-foreground mr-2">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              <span className={`font-bold text-lg ${product.isSale ? 'text-red-500' : ''}`}>
                {formatPrice(product.price)}
              </span>
            </div>
          </div>
        </div>
      </Link>
      
      <div className="mt-3">
        <Button
          onClick={() => addToCart(product)}
          className="w-full"
          variant={product.inStock ? "default" : "outline"}
          disabled={!product.inStock}
        >
          {product.inStock ? (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </>
          ) : (
            "Out of Stock"
          )}
        </Button>
      </div>
    </div>
  );
}
