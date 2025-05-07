
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/ProductGrid";
import { getFeaturedProducts, getNewProducts, getSaleProducts } from "@/data/products";
import { ChevronRight } from "lucide-react";

export default function Home() {
  const featuredProducts = getFeaturedProducts(8);
  const newProducts = getNewProducts(4);
  const saleProducts = getSaleProducts(4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-bike-black to-bike-carbon py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                New Collection
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Ride Beyond Limits
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Experience the thrill of the world's finest superbikes. Crafted for performance, designed for passion.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/products">
                  <Button size="lg">Shop All Bikes</Button>
                </Link>
                <Link to="/sale">
                  <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary/10">
                    View Sale
                  </Button>
                </Link>
              </div>
            </div>
            <img
              src="https://source.unsplash.com/random/1200x800/?superbike,motorcycle"
              alt="Featured Superbike"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Categories
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Explore By Category
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find your dream ride in our extensive collection of premium motorcycles
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <Link to="/products?category=Super%20Sport" className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://source.unsplash.com/random/600x400/?sportbike" 
                alt="Super Sport"
                className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-lg">Super Sport</h3>
                  <p className="text-sm text-gray-200">Pure Speed</p>
                </div>
              </div>
            </Link>
            <Link to="/products?category=Naked" className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://source.unsplash.com/random/600x400/?naked+motorcycle" 
                alt="Naked"
                className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-lg">Naked</h3>
                  <p className="text-sm text-gray-200">Raw Power</p>
                </div>
              </div>
            </Link>
            <Link to="/products?category=Adventure" className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://source.unsplash.com/random/600x400/?adventure+motorcycle" 
                alt="Adventure"
                className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-lg">Adventure</h3>
                  <p className="text-sm text-gray-200">Explore Beyond</p>
                </div>
              </div>
            </Link>
            <Link to="/products?category=Cruiser" className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://source.unsplash.com/random/600x400/?cruiser+motorcycle" 
                alt="Cruiser"
                className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-lg">Cruiser</h3>
                  <p className="text-sm text-gray-200">Ride in Style</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      {newProducts.length > 0 && (
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Latest Models
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                New Arrivals
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Be the first to ride these newly launched superbikes
              </p>
            </div>
            <div className="mt-8">
              <ProductGrid products={newProducts} />
            </div>
            <div className="flex justify-center mt-8">
              <Link to="/products?new=true">
                <Button variant="outline" className="gap-1">
                  View All New Models <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Sale Items */}
      {saleProducts.length > 0 && (
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-red-500 px-3 py-1 text-sm text-white">
                Limited Time
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Special Offers
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Grab these exclusive deals before they're gone
              </p>
            </div>
            <div className="mt-8">
              <ProductGrid products={saleProducts} />
            </div>
            <div className="flex justify-center mt-8">
              <Link to="/sale">
                <Button variant="default" className="gap-1 bg-red-500 hover:bg-red-600">
                  Shop All Deals <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Top Rated
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Featured Superbikes
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The most popular and highest-rated motorcycles in our collection
              </p>
            </div>
          </div>
          <div className="mt-8">
            <ProductGrid products={featuredProducts} />
          </div>
          <div className="flex justify-center mt-8">
            <Link to="/products">
              <Button className="gap-1">
                Explore All Bikes <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="w-full py-12 md:py-24 bg-bike-red text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Premium Service & Support
              </h2>
              <p className="text-white/90 md:text-xl">
                Our expert team provides comprehensive service, maintenance, and customer support for all your superbike needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Professional Maintenance & Repairs
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Genuine Parts & Accessories
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Extended Warranty Options
                </li>
              </ul>
              <div>
                <Button variant="secondary" className="bg-white text-bike-red hover:bg-white/90">
                  Learn More
                </Button>
              </div>
            </div>
            <img
              src="https://source.unsplash.com/random/600x400/?motorcycle+workshop"
              alt="Premium Service"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                What Our Customers Say
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our satisfied riders across India
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="rounded-lg border bg-card p-6 shadow">
              <div className="flex items-center gap-2 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="h-5 w-5 text-yellow-500"
                  >
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-base">
                "The Ducati Panigale V4 I purchased is beyond my expectations. The team at Rupees Superbikes made the buying process smooth and enjoyable."
              </p>
              <div className="mt-4 pt-4 border-t">
                <p className="font-medium">Rajesh Kumar</p>
                <p className="text-sm text-muted-foreground">Mumbai</p>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow">
              <div className="flex items-center gap-2 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="h-5 w-5 text-yellow-500"
                  >
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-base">
                "Their after-sales service is exceptional. The BMW S 1000 RR I bought has been expertly maintained by their team for the past two years."
              </p>
              <div className="mt-4 pt-4 border-t">
                <p className="font-medium">Priya Sharma</p>
                <p className="text-sm text-muted-foreground">Delhi</p>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow">
              <div className="flex items-center gap-2 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="h-5 w-5 text-yellow-500"
                  >
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-base">
                "The range of superbikes they offer is impressive. Found my dream Kawasaki Ninja ZX-10R at a competitive price with excellent financing options."
              </p>
              <div className="mt-4 pt-4 border-t">
                <p className="font-medium">Vikram Singh</p>
                <p className="text-sm text-muted-foreground">Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
