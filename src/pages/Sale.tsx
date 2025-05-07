
import { useEffect } from "react";
import { ProductGrid } from "@/components/ProductGrid";
import { getSaleProducts } from "@/data/products";
import { formatPrice, calculateDiscountPercentage } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgePercent, CalendarClock } from "lucide-react";

export default function Sale() {
  const saleProducts = getSaleProducts(999); // Get all sale products
  
  // Countdown timer end date (7 days from now)
  const countdownEndDate = new Date();
  countdownEndDate.setDate(countdownEndDate.getDate() + 7);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      {/* Sale Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-lg overflow-hidden mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 items-center">
          <div className="md:col-span-2 text-white">
            <div className="inline-block bg-white/20 text-white rounded-full px-4 py-1 mb-4">
              Limited Time Offer
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Superbike Season Sale
            </h1>
            <p className="mb-6 text-white/90 max-w-lg">
              Incredible deals on premium motorcycles. Save up to 30% on select models. Don't miss out on these exclusive offers.
            </p>
            <div className="flex items-center gap-2">
              <CalendarClock className="h-5 w-5" />
              <span>Sale ends in 7 days</span>
            </div>
          </div>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6">
              <div className="text-center">
                <BadgePercent className="h-10 w-10 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Biggest Discounts</h3>
                
                <div className="space-y-4">
                  {saleProducts.slice(0, 3).map(product => (
                    <div key={product.id} className="flex justify-between text-sm border-b border-white/20 pb-2">
                      <span>{product.brand} {product.name}</span>
                      <span className="font-bold">
                        {product.originalPrice && 
                          `${calculateDiscountPercentage(product.originalPrice, product.price)}% OFF`}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-6 bg-white text-red-600 hover:bg-white/90" asChild>
                  <a href="#sale-products">View All Deals</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Sale Categories */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Super Sport', 'Naked', 'Adventure', 'Cruiser'].map(category => {
            const categoryProducts = saleProducts.filter(p => p.category === category);
            if (categoryProducts.length === 0) return null;
            
            const bestDiscount = categoryProducts.reduce((best, product) => {
              if (!product.originalPrice) return best;
              const discount = calculateDiscountPercentage(product.originalPrice, product.price);
              return discount > best ? discount : best;
            }, 0);
            
            return (
              <div key={category} className="group relative overflow-hidden rounded-lg">
                <img 
                  src={`https://source.unsplash.com/random/600x400/?${category.toLowerCase()}+motorcycle`} 
                  alt={category}
                  className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white text-lg">{category}</h3>
                  <p className="text-sm text-white/90">Up to {bestDiscount}% off</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-2 bg-white/10 text-white border-white/20 hover:bg-white/20 w-full"
                    asChild
                  >
                    <a href={`#${category.toLowerCase().replace(' ', '-')}`}>
                      Shop Now
                    </a>
                  </Button>
                </div>
                {bestDiscount > 0 && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Up to {bestDiscount}% OFF
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* All Sale Products */}
      <div id="sale-products" className="pt-4">
        <h2 className="text-2xl font-bold mb-6">All Sale Items</h2>
        <ProductGrid products={saleProducts} />
      </div>
      
      {/* Sale by Category Sections */}
      {['Super Sport', 'Naked', 'Adventure', 'Cruiser'].map(category => {
        const categoryProducts = saleProducts.filter(p => p.category === category);
        if (categoryProducts.length === 0) return null;
        
        return (
          <div 
            key={category}
            id={category.toLowerCase().replace(' ', '-')} 
            className="pt-12 mt-12 border-t"
          >
            <h2 className="text-2xl font-bold mb-6">{category} Sale</h2>
            <ProductGrid products={categoryProducts} />
          </div>
        );
      })}
    </div>
  );
}
