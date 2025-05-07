
import { Link } from "react-router-dom";
import { BadgeIndianRupee } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <BadgeIndianRupee className="h-6 w-6 text-primary" />
              <span>RUPEES SUPERBIKES</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Premium superbikes at competitive prices. We bring the best motorcycles from around the world to India.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  All Bikes
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sale
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=Super%20Sport" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Super Sport
                </Link>
              </li>
              <li>
                <Link to="/products?category=Naked" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Naked
                </Link>
              </li>
              <li>
                <Link to="/products?category=Adventure" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Adventure
                </Link>
              </li>
              <li>
                <Link to="/products?category=Cruiser" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cruiser
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                123 Bike Street, Mumbai, India
              </li>
              <li className="text-sm text-muted-foreground">
                info@rupeessuperbikes.com
              </li>
              <li className="text-sm text-muted-foreground">
                +91 98765 43210
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Rupees Superbikes. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Shipping
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
