
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ShoppingCart, Badge, BadgeIndianRupee, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useStore } from "@/contexts/StoreContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useStore();
  const isMobile = useIsMobile();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <BadgeIndianRupee className="h-6 w-6 text-primary" />
            <span className="hidden md:inline-block">RUPEES SUPERBIKES</span>
            <span className="inline-block md:hidden">RUPEES</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/products" className="text-sm font-medium transition-colors hover:text-primary">
              All Bikes
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="text-sm font-medium p-0 h-auto">Categories</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/products?category=Super%20Sport">Super Sport</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products?category=Naked">Naked</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products?category=Adventure">Adventure</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products?category=Cruiser">Cruiser</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/sale" className="text-sm font-medium text-red-500 transition-colors hover:text-red-700">
              Sale
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {!isMobile && (
            <form onSubmit={handleSearchSubmit} className="relative w-72">
              <Input
                type="search"
                placeholder="Search bikes..."
                className="pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search className="h-4 w-4 text-muted-foreground" />
              </button>
            </form>
          )}
          
          <ThemeToggle />
          
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>
          
          <Button variant="outline" size="sm" className="hidden md:flex">
            Sign In
          </Button>
          
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          )}
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="container py-4 md:hidden">
          <form onSubmit={handleSearchSubmit} className="mb-4">
            <Input
              type="search"
              placeholder="Search bikes..."
              className="w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Bikes
            </Link>
            <Link 
              to="/products?category=Super%20Sport" 
              className="text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Super Sport
            </Link>
            <Link 
              to="/products?category=Naked" 
              className="text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Naked
            </Link>
            <Link 
              to="/products?category=Adventure" 
              className="text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Adventure
            </Link>
            <Link 
              to="/products?category=Cruiser" 
              className="text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cruiser
            </Link>
            <Link 
              to="/sale" 
              className="text-sm font-medium text-red-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sale
            </Link>
            <Button variant="outline" size="sm" className="w-full">
              Sign In
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
