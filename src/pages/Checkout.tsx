
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useStore } from "@/contexts/StoreContext";
import { formatPrice } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { BadgeIndianRupee, CreditCard, Shield, Truck } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart } = useStore();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: ""
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Calculate shipping cost (free if order is above 100,000 INR)
  const shippingCost = cartTotal > 100000 ? 0 : 2500;
  const totalWithShipping = cartTotal + shippingCost;

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Redirect to cart if cart is empty
    if (cart.length === 0) {
      navigate("/cart");
    }
  }, [cart, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when field is edited
    if (errors[name as keyof FormData]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    // Basic validation
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.postalCode.trim()) newErrors.postalCode = "Postal code is required";
    
    // Payment validation if credit card is selected
    if (paymentMethod === "credit-card") {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = "Card number is required";
      else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ""))) 
        newErrors.cardNumber = "Card number must be 16 digits";
      
      if (!formData.cardName.trim()) newErrors.cardName = "Name on card is required";
      
      if (!formData.expiryDate.trim()) newErrors.expiryDate = "Expiry date is required";
      else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) 
        newErrors.expiryDate = "Expiry date must be MM/YY format";
      
      if (!formData.cvv.trim()) newErrors.cvv = "CVV is required";
      else if (!/^\d{3,4}$/.test(formData.cvv)) newErrors.cvv = "CVV must be 3 or 4 digits";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Form Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      navigate("/success");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            {/* Shipping Information */}
            <div className="rounded-lg border shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs">{errors.firstName}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs">{errors.lastName}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs">{errors.phone}</p>
                  )}
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={errors.address ? "border-red-500" : ""}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs">{errors.address}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={errors.city ? "border-red-500" : ""}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-xs">{errors.city}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={errors.state ? "border-red-500" : ""}
                  />
                  {errors.state && (
                    <p className="text-red-500 text-xs">{errors.state}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className={errors.postalCode ? "border-red-500" : ""}
                  />
                  {errors.postalCode && (
                    <p className="text-red-500 text-xs">{errors.postalCode}</p>
                  )}
                </div>
              </div>
            </div>
            
            {/* Payment Information */}
            <div className="rounded-lg border shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Payment Method</h2>
              
              <RadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                className="space-y-3 mb-6"
              >
                <div className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-muted/50">
                  <RadioGroupItem value="credit-card" id="credit-card" />
                  <Label htmlFor="credit-card" className="flex-1 cursor-pointer">Credit / Debit Card</Label>
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-muted/50">
                  <RadioGroupItem value="cash-on-delivery" id="cash-on-delivery" />
                  <Label htmlFor="cash-on-delivery" className="flex-1 cursor-pointer">Cash on Delivery</Label>
                  <BadgeIndianRupee className="h-5 w-5 text-muted-foreground" />
                </div>
              </RadioGroup>
              
              {paymentMethod === "credit-card" && (
                <div className="space-y-4">
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className={errors.cardNumber ? "border-red-500" : ""}
                    />
                    {errors.cardNumber && (
                      <p className="text-red-500 text-xs">{errors.cardNumber}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      className={errors.cardName ? "border-red-500" : ""}
                    />
                    {errors.cardName && (
                      <p className="text-red-500 text-xs">{errors.cardName}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Expiry Date (MM/YY)</Label>
                      <Input
                        id="expiryDate"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        className={errors.expiryDate ? "border-red-500" : ""}
                      />
                      {errors.expiryDate && (
                        <p className="text-red-500 text-xs">{errors.expiryDate}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        name="cvv"
                        type="password"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        className={errors.cvv ? "border-red-500" : ""}
                      />
                      {errors.cvv && (
                        <p className="text-red-500 text-xs">{errors.cvv}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-8 lg:hidden">
              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? "Processing..." : `Complete Purchase - ${formatPrice(totalWithShipping)}`}
              </Button>
            </div>
          </form>
        </div>
        
        <div>
          <Card className="sticky top-20">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="max-h-80 overflow-y-auto pr-2">
                  {cart.map((item) => (
                    <div key={`${item.product.id}-${item.color}`} className="flex py-2 border-b last:border-0">
                      <div className="w-16 h-16 flex-shrink-0">
                        <img 
                          src={item.product.imageUrl} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="font-medium text-sm">{item.product.name}</p>
                        <div className="text-xs text-muted-foreground">
                          Color: {item.color}
                        </div>
                        <div className="flex justify-between mt-1">
                          <span className="text-sm">x{item.quantity}</span>
                          <span className="text-sm font-medium">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
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
              </div>
              
              <div className="hidden lg:block">
                <Button 
                  onClick={() => document.forms[0].requestSubmit()} 
                  className="w-full" 
                  size="lg"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Complete Purchase"}
                </Button>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Secure Checkout</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Free delivery on orders over ₹100,000</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
