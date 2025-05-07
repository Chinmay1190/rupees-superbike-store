
import { createContext, useContext, useEffect, useState } from "react";
import { CartItem, Product } from "@/types";
import { useToast } from "@/components/ui/use-toast";

interface StoreContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, color?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const { toast } = useToast();

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("bike-cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
      }
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("bike-cart", JSON.stringify(cart));
    
    // Calculate totals
    setCartTotal(cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0));
    setCartCount(cart.reduce((acc, item) => acc + item.quantity, 0));
  }, [cart]);

  const addToCart = (product: Product, quantity = 1, color = product.colors[0]) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(
        item => item.product.id === product.id && item.color === color
      );

      if (existingItemIndex > -1) {
        // Update existing item
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        
        toast({
          title: "Cart Updated",
          description: `${product.name} quantity updated to ${updatedCart[existingItemIndex].quantity}`,
          variant: "default",
        });
        
        return updatedCart;
      } else {
        // Add new item
        toast({
          title: "Added to Cart",
          description: `${product.name} added to your cart`,
          variant: "default",
        });
        
        return [...prevCart, { product, quantity, color }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => {
      const updatedCart = prevCart.filter(item => item.product.id !== productId);
      
      toast({
        title: "Item Removed",
        description: "Item removed from your cart",
        variant: "default",
      });
      
      return updatedCart;
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.product.id === productId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart",
      variant: "default",
    });
  };

  return (
    <StoreContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartTotal,
      cartCount,
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
