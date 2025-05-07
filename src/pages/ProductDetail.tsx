
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger 
} from "@/components/ui/tabs";
import { ProductGrid } from "@/components/ProductGrid";
import { useStore } from "@/contexts/StoreContext";
import { getProductById, getRelatedProducts } from "@/data/products";
import { formatPrice, calculateDiscountPercentage } from "@/lib/utils";
import { 
  ShoppingCart,
  Truck,
  Shield,
  ArrowLeft,
  Check,
  Star,
  CircleAlert
} from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useStore();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [activeTab, setActiveTab] = useState("specs");
  
  const product = id ? getProductById(id) : null;
  const relatedProducts = id ? getRelatedProducts(id) : [];
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Reset states when the product changes
    if (product) {
      setSelectedColor(product.colors[0]);
      setQuantity(1);
    }
  }, [id, product]);

  // Handle quantity changes
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);
  
  if (!product) {
    return (
      <div className="container py-12 px-4">
        <div className="flex flex-col items-center justify-center py-12">
          <CircleAlert className="h-12 w-12 text-red-500 mb-4" />
          <h1 className="text-2xl font-bold mb-2">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">The motorcycle you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/products">Return to All Bikes</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 px-4">
      {/* Breadcrumb */}
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-1 p-0 h-auto"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
        <div className="flex items-center mx-2">
          <span className="mx-1 text-muted-foreground">/</span>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <span className="mx-1 text-muted-foreground">/</span>
          <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground">
            Motorcycles
          </Link>
          <span className="mx-1 text-muted-foreground">/</span>
          <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="text-sm text-muted-foreground hover:text-foreground">
            {product.category}
          </Link>
          <span className="mx-1 text-muted-foreground">/</span>
          <span className="text-sm font-medium">{product.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="relative">
          {product.isNew && (
            <div className="absolute top-4 left-4 z-10 bg-bike-red text-white text-xs font-bold px-3 py-1 rounded-full">
              New
            </div>
          )}
          {product.isSale && (
            <div className="absolute top-4 right-4 z-10 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
              {product.originalPrice 
                ? `${calculateDiscountPercentage(product.originalPrice, product.price)}% OFF` 
                : 'Sale'
              }
            </div>
          )}
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
            <img 
              src={product.imageUrl} 
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-2">
            <Link to={`/products?brand=${encodeURIComponent(product.brand)}`} className="text-sm font-medium text-muted-foreground hover:text-foreground">
              {product.brand}
            </Link>
          </div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          
          {/* Ratings */}
          <div className="flex items-center gap-1 mt-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-muted'}`} 
              />
            ))}
            <span className="text-sm text-muted-foreground ml-1">
              ({product.rating.toFixed(1)})
            </span>
          </div>
          
          {/* Price */}
          <div className="mb-6">
            {product.isSale && product.originalPrice && (
              <span className="text-lg line-through text-muted-foreground mr-3">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className={`text-3xl font-bold ${product.isSale ? 'text-red-500' : ''}`}>
              {formatPrice(product.price)}
            </span>
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground mb-6">{product.description}</p>
          
          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Color</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <Button
                  key={color}
                  type="button"
                  variant={selectedColor === color ? "default" : "outline"}
                  className={`px-4 py-2 ${selectedColor === color ? 'bg-primary text-primary-foreground' : ''}`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Quantity */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Quantity</h3>
            <div className="flex items-center">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={decrementQuantity}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={incrementQuantity}
              >
                +
              </Button>
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <div className="mt-2 mb-6">
            <Button
              className="w-full"
              size="lg"
              onClick={() => addToCart(product, quantity, selectedColor)}
              disabled={!product.inStock}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
          </div>
          
          {/* Stock Status */}
          <div className="flex items-center gap-1 mb-4">
            {product.inStock ? (
              <>
                <div className="rounded-full bg-green-500 p-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">In Stock - Ready to Ship</span>
              </>
            ) : (
              <>
                <div className="rounded-full bg-red-500 p-1">
                  <CircleAlert className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Out of Stock</span>
              </>
            )}
          </div>
          
          {/* Product Features */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">Free shipping over ₹100,000</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">3-year warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
        <TabsList className="mb-4">
          <TabsTrigger value="specs">Specifications</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
        </TabsList>
        
        <TabsContent value="specs" className="rounded-md border p-4 md:p-6">
          <h2 className="text-xl font-bold mb-4">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="py-2 border-b">
                <span className="text-sm text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}: </span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="details" className="rounded-md border p-4 md:p-6">
          <h2 className="text-xl font-bold mb-4">Product Details</h2>
          <p className="mb-4">{product.description}</p>
          <p className="mb-4">
            The {product.brand} {product.name} represents the pinnacle of motorcycle engineering, designed for riders who demand exceptional performance and styling. This motorcycle combines cutting-edge technology with precise handling to deliver an unforgettable riding experience.
          </p>
          <p>
            Every component has been carefully selected and tested to ensure reliability and durability, making the {product.name} a worthwhile investment for serious motorcycle enthusiasts.
          </p>
        </TabsContent>
        
        <TabsContent value="shipping" className="rounded-md border p-4 md:p-6">
          <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Delivery</h3>
              <p className="text-sm text-muted-foreground">
                We offer free delivery on all motorcycle purchases to major cities across India. Delivery typically takes 5-7 business days depending on your location and stock availability.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium">Returns</h3>
              <p className="text-sm text-muted-foreground">
                Our motorcycles come with a 7-day test ride guarantee. If you're not completely satisfied, you can return the motorcycle in its original condition for a full refund or exchange.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium">Warranty</h3>
              <p className="text-sm text-muted-foreground">
                All new motorcycles come with a standard 3-year manufacturer warranty covering parts and labor. Extended warranty options are available for purchase.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      )}
    </div>
  );
}
