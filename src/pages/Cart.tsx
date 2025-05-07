
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useStore } from "@/contexts/StoreContext";
import { formatPrice } from "@/lib/utils";
import { 
  Trash2, 
  ShoppingCart, 
  ChevronLeft, 
  BadgeIndianRupee,
  ShoppingBag
} from "lucide-react";
import { ProductGrid } from "@/components/ProductGrid";
import { getFeaturedProducts } from "@/data/products";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useStore();
  const featuredProducts = getFeaturedProducts(4);

  // Calculate shipping cost (free if order is above 100,000 INR)
  const shippingCost = cartTotal > 100000 ? 0 : 2500;
  const totalWithShipping = cartTotal + shippingCost;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (cart.length === 0) {
    return (
      <div className="container px-4 py-12 md:px-6">
        <div className="flex flex-col items-center justify-center py-12">
          <div className="rounded-full bg-muted p-6 mb-6">
            <ShoppingCart className="h-12 w-12 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-6 text-center max-w-md">
            Looks like you haven't added any superbikes to your cart yet. Explore our collection and find your dream ride.
          </p>
          <Button asChild size="lg">
            <Link to="/products">Browse Motorcycles</Link>
          </Button>
          
          {featuredProducts.length > 0 && (
            <div className="mt-16 w-full">
              <h2 className="text-2xl font-bold mb-6 text-center">Popular Motorcycles</h2>
              <ProductGrid products={featuredProducts} />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="rounded-lg border shadow-sm">
            <div className="p-6">
              {cart.map((item) => (
                <div key={`${item.product.id}-${item.color}`} className="flex flex-col md:flex-row gap-4 py-6 border-b last:border-0">
                  <div className="md:w-40 h-40 flex-shrink-0">
                    <Link to={`/product/${item.product.id}`}>
                      <img 
                        src={item.product.imageUrl} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover rounded-md"
                      />
                    </Link>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div>
                        <Link to={`/product/${item.product.id}`} className="font-semibold hover:underline">
                          {item.product.brand} {item.product.name}
                        </Link>
                        <div className="text-sm text-muted-foreground mt-1">
                          Color: {item.color}
                        </div>
                        <div className="mt-2 font-medium">
                          {formatPrice(item.product.price)}
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                        <div className="flex items-center">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </Button>
                          <Input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value) || 1)}
                            className="w-16 h-8 mx-2 text-center"
                          />
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                        
                        <div className="font-medium">
                          {formatPrice(item.product.price * item.quantity)}
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-between p-6 bg-muted/50 rounded-b-lg">
              <Button variant="ghost" asChild className="gap-2">
                <Link to="/products">
                  <ChevronLeft className="h-4 w-4" /> Continue Shopping
                </Link>
              </Button>
              <Button variant="ghost" onClick={clearCart} className="text-red-500 hover:text-red-700">
                Clear Cart
              </Button>
            </div>
          </div>
        </div>
        
        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">{formatPrice(cartTotal)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? 'Free' : formatPrice(shippingCost)}
                  </span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>{formatPrice(totalWithShipping)}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Including all taxes and duties
                  </div>
                </div>
                
                <Button asChild className="w-full mt-4" size="lg">
                  <Link to="/checkout">
                    <ShoppingBag className="mr-2 h-5 w-5" /> Proceed to Checkout
                  </Link>
                </Button>
                
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
                  <BadgeIndianRupee className="h-4 w-4" />
                  <span>Secure Payments</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
