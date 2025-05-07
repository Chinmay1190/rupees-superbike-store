
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink, HomeIcon } from "lucide-react";

export default function Success() {
  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <div className="rounded-full bg-green-100 p-3 mb-4">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold mb-2">Order Successful!</h1>
        
        <p className="text-muted-foreground mb-6">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>
        
        <div className="bg-muted rounded-lg p-6 w-full mb-8">
          <h2 className="font-bold mb-4 text-lg">Order Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <p className="text-muted-foreground">Order Number:</p>
              <p className="font-medium">{orderNumber}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-muted-foreground">Date:</p>
              <p className="font-medium">{new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-muted-foreground">Payment Method:</p>
              <p className="font-medium">Credit Card</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-muted-foreground">Shipping Method:</p>
              <p className="font-medium">Standard Delivery</p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t">
            <p className="text-sm">
              You will receive an email confirmation shortly at <span className="font-medium">your-email@example.com</span>
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-semibold">What happens next?</h3>
          
          <ol className="space-y-2 text-sm text-left">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground font-medium">
                1
              </span>
              <span>
                <span className="font-medium">Order Processing:</span> Our team will verify your order and prepare your superbike for delivery.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground font-medium">
                2
              </span>
              <span>
                <span className="font-medium">Shipping Confirmation:</span> You'll receive an email with tracking information once your motorcycle is shipped.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground font-medium">
                3
              </span>
              <span>
                <span className="font-medium">Delivery:</span> Your superbike will be delivered to your specified address. Our team will contact you to arrange a convenient delivery time.
              </span>
            </li>
          </ol>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/">
              <HomeIcon className="h-4 w-4" /> Return to Home
            </Link>
          </Button>
          
          <Button asChild className="gap-2">
            <Link to="/products">
              <ExternalLink className="h-4 w-4" /> Continue Shopping
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
