import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ProductGrid } from "@/components/ProductGrid";
import { 
  getFilteredProducts, 
  getAllBrands, 
  getAllCategories, 
  getMinMaxPrice,
} from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { 
  Filter,
  SlidersHorizontal, 
  X,
  Check
} from "lucide-react";

export default function Products() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Get initial filters from URL
  const initialCategory = searchParams.get("category") ? [searchParams.get("category")!] : [];
  const initialSearch = searchParams.get("search") || "";
  const initialNewOnly = searchParams.get("new") === "true";
  const initialSaleOnly = searchParams.get("sale") === "true";

  // Get min/max prices as a properly typed tuple
  const [minPrice, maxPrice] = getMinMaxPrice();

  // Filter states
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCategory);
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [newOnly, setNewOnly] = useState(initialNewOnly);
  const [saleOnly, setSaleOnly] = useState(initialSaleOnly);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortOption, setSortOption] = useState("rating-desc");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Available filter options
  const allBrands = getAllBrands();
  const allCategories = getAllCategories();
  
  // Get filtered products
  const filteredProducts = getFilteredProducts({
    brand: selectedBrands.length > 0 ? selectedBrands : undefined,
    category: selectedCategories.length > 0 ? selectedCategories : undefined,
    priceRange: priceRange,
    inStock: inStockOnly ? true : undefined,
    newOnly: newOnly,
    saleOnly: saleOnly
  }, sortOption)
    .filter(product => 
      searchQuery.trim() === "" || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Reset filters
  const resetFilters = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setPriceRange([minPrice, maxPrice]);
    setInStockOnly(false);
    setNewOnly(false);
    setSaleOnly(false);
    setSearchQuery("");
    setSortOption("rating-desc");
  };

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Apply filters from URL params on load
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }

    const searchParam = searchParams.get("search");
    if (searchParam) {
      setSearchQuery(searchParam);
    }

    const newParam = searchParams.get("new");
    if (newParam === "true") {
      setNewOnly(true);
    }

    const saleParam = searchParams.get("sale");
    if (saleParam === "true") {
      setSaleOnly(true);
    }
  }, [location.search]);

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Superbikes Collection</h1>
        <p className="mt-2 text-muted-foreground">
          Explore our premium range of high-performance motorcycles
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-4 flex justify-between items-center">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          >
            <Filter className="h-4 w-4" />
            Filters ({selectedBrands.length + selectedCategories.length + (inStockOnly ? 1 : 0) + (newOnly ? 1 : 0) + (saleOnly ? 1 : 0)})
          </Button>
          
          <div className="flex items-center gap-2">
            <Label htmlFor="sort-mobile" className="text-sm">Sort:</Label>
            <select
              id="sort-mobile"
              className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="rating-desc">Top Rated</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>

        {/* Filters - Mobile */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 bg-background p-6 md:hidden overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setMobileFiltersOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="space-y-6">
              {/* Search */}
              <div>
                <Label htmlFor="search-mobile" className="text-sm font-medium">
                  Search
                </Label>
                <div className="mt-2">
                  <Input
                    id="search-mobile"
                    placeholder="Search bikes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              {/* Sort */}
              <div>
                <Label htmlFor="sort-filter-mobile" className="text-sm font-medium">
                  Sort By
                </Label>
                <select
                  id="sort-filter-mobile"
                  className="mt-2 w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="rating-desc">Top Rated</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>
              </div>
              
              {/* Price Range */}
              <div>
                <h3 className="text-sm font-medium mb-2">Price Range</h3>
                <div className="mt-2">
                  <Slider 
                    defaultValue={[minPrice, maxPrice]}
                    min={minPrice}
                    max={maxPrice}
                    step={5000}
                    value={[priceRange[0], priceRange[1]]}
                    onValueChange={(value) => setPriceRange([value[0], value[1]])}
                    className="mb-4"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{formatPrice(priceRange[0])}</span>
                    <span className="text-sm">{formatPrice(priceRange[1])}</span>
                  </div>
                </div>
              </div>
              
              {/* Brand Filter */}
              <div>
                <h3 className="text-sm font-medium mb-2">Brand</h3>
                <div className="space-y-2 mt-2">
                  {allBrands.map((brand) => (
                    <div key={brand} className="flex items-center">
                      <Checkbox
                        id={`brand-${brand}-mobile`}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedBrands([...selectedBrands, brand]);
                          } else {
                            setSelectedBrands(selectedBrands.filter((b) => b !== brand));
                          }
                        }}
                      />
                      <Label htmlFor={`brand-${brand}-mobile`} className="ml-2 text-sm">
                        {brand}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-medium mb-2">Category</h3>
                <div className="space-y-2 mt-2">
                  {allCategories.map((category) => (
                    <div key={category} className="flex items-center">
                      <Checkbox
                        id={`category-${category}-mobile`}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedCategories([...selectedCategories, category]);
                          } else {
                            setSelectedCategories(selectedCategories.filter((c) => c !== category));
                          }
                        }}
                      />
                      <Label htmlFor={`category-${category}-mobile`} className="ml-2 text-sm">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Other Filters */}
              <div>
                <h3 className="text-sm font-medium mb-2">Other Filters</h3>
                <div className="space-y-2 mt-2">
                  <div className="flex items-center">
                    <Checkbox
                      id="in-stock-mobile"
                      checked={inStockOnly}
                      onCheckedChange={(checked) => setInStockOnly(!!checked)}
                    />
                    <Label htmlFor="in-stock-mobile" className="ml-2 text-sm">
                      In Stock Only
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox
                      id="new-only-mobile"
                      checked={newOnly}
                      onCheckedChange={(checked) => setNewOnly(!!checked)}
                    />
                    <Label htmlFor="new-only-mobile" className="ml-2 text-sm">
                      New Arrivals
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox
                      id="sale-only-mobile"
                      checked={saleOnly}
                      onCheckedChange={(checked) => setSaleOnly(!!checked)}
                    />
                    <Label htmlFor="sale-only-mobile" className="ml-2 text-sm">
                      On Sale
                    </Label>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 mt-6">
                <Button onClick={() => setMobileFiltersOpen(false)} className="w-full">
                  Apply Filters
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    resetFilters();
                    setMobileFiltersOpen(false);
                  }} 
                  className="w-full"
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Filters - Desktop */}
        <div className="hidden md:block w-72 flex-shrink-0">
          <div className="space-y-6">
            {/* Search */}
            <div>
              <Label htmlFor="search" className="text-sm font-medium">
                Search
              </Label>
              <div className="mt-1">
                <Input
                  id="search"
                  placeholder="Search bikes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            {/* Sort */}
            <div>
              <Label htmlFor="sort-filter" className="text-sm font-medium">
                Sort By
              </Label>
              <select
                id="sort-filter"
                className="mt-1 w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="rating-desc">Top Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
            
            {/* Price Range */}
            <div>
              <h3 className="text-sm font-medium mb-2">Price Range</h3>
              <div className="mt-1">
                <Slider 
                  defaultValue={[minPrice, maxPrice]}
                  min={minPrice}
                  max={maxPrice}
                  step={5000}
                  value={[priceRange[0], priceRange[1]]}
                  onValueChange={(value) => setPriceRange([value[0], value[1]])}
                  className="mb-4"
                />
                <div className="flex items-center justify-between">
                  <span className="text-sm">{formatPrice(priceRange[0])}</span>
                  <span className="text-sm">{formatPrice(priceRange[1])}</span>
                </div>
              </div>
            </div>
            
            {/* Brand Filter */}
            <div>
              <h3 className="text-sm font-medium mb-2">Brand</h3>
              <div className="space-y-2 mt-1 max-h-40 overflow-y-auto">
                {allBrands.map((brand) => (
                  <div key={brand} className="flex items-center">
                    <Checkbox
                      id={`brand-${brand}`}
                      checked={selectedBrands.includes(brand)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedBrands([...selectedBrands, brand]);
                        } else {
                          setSelectedBrands(selectedBrands.filter((b) => b !== brand));
                        }
                      }}
                    />
                    <Label htmlFor={`brand-${brand}`} className="ml-2 text-sm">
                      {brand}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-medium mb-2">Category</h3>
              <div className="space-y-2 mt-1">
                {allCategories.map((category) => (
                  <div key={category} className="flex items-center">
                    <Checkbox
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedCategories([...selectedCategories, category]);
                        } else {
                          setSelectedCategories(selectedCategories.filter((c) => c !== category));
                        }
                      }}
                    />
                    <Label htmlFor={`category-${category}`} className="ml-2 text-sm">
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Other Filters */}
            <div>
              <h3 className="text-sm font-medium mb-2">Other Filters</h3>
              <div className="space-y-2 mt-1">
                <div className="flex items-center">
                  <Checkbox
                    id="in-stock"
                    checked={inStockOnly}
                    onCheckedChange={(checked) => setInStockOnly(!!checked)}
                  />
                  <Label htmlFor="in-stock" className="ml-2 text-sm">
                    In Stock Only
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="new-only"
                    checked={newOnly}
                    onCheckedChange={(checked) => setNewOnly(!!checked)}
                  />
                  <Label htmlFor="new-only" className="ml-2 text-sm">
                    New Arrivals
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="sale-only"
                    checked={saleOnly}
                    onCheckedChange={(checked) => setSaleOnly(!!checked)}
                  />
                  <Label htmlFor="sale-only" className="ml-2 text-sm">
                    On Sale
                  </Label>
                </div>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              onClick={resetFilters} 
              className="w-full"
            >
              Reset Filters
            </Button>
          </div>
        </div>

        {/* Products */}
        <div className="flex-1">
          <div className="hidden md:flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'Motorcycle' : 'Motorcycles'} Found
            </h2>
            
            {/* Active Filters */}
            {(selectedBrands.length > 0 || selectedCategories.length > 0 || inStockOnly || newOnly || saleOnly || searchQuery) && (
              <div className="flex flex-wrap gap-2">
                {searchQuery && (
                  <div className="flex items-center gap-1 bg-muted rounded-full px-3 py-1 text-xs">
                    <span>Search: {searchQuery}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-4 w-4 p-0" 
                      onClick={() => setSearchQuery("")}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                )}
                
                {selectedBrands.map(brand => (
                  <div key={brand} className="flex items-center gap-1 bg-muted rounded-full px-3 py-1 text-xs">
                    <span>Brand: {brand}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-4 w-4 p-0" 
                      onClick={() => setSelectedBrands(selectedBrands.filter(b => b !== brand))}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
                
                {selectedCategories.map(category => (
                  <div key={category} className="flex items-center gap-1 bg-muted rounded-full px-3 py-1 text-xs">
                    <span>Category: {category}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-4 w-4 p-0" 
                      onClick={() => setSelectedCategories(selectedCategories.filter(c => c !== category))}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
                
                {inStockOnly && (
                  <div className="flex items-center gap-1 bg-muted rounded-full px-3 py-1 text-xs">
                    <span>In Stock Only</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-4 w-4 p-0" 
                      onClick={() => setInStockOnly(false)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                )}
                
                {newOnly && (
                  <div className="flex items-center gap-1 bg-muted rounded-full px-3 py-1 text-xs">
                    <span>New Arrivals</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-4 w-4 p-0" 
                      onClick={() => setNewOnly(false)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                )}
                
                {saleOnly && (
                  <div className="flex items-center gap-1 bg-muted rounded-full px-3 py-1 text-xs">
                    <span>On Sale</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-4 w-4 p-0" 
                      onClick={() => setSaleOnly(false)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Mobile filter count */}
          <div className="md:hidden flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'Motorcycle' : 'Motorcycles'}
            </h2>
            
            {(selectedBrands.length > 0 || selectedCategories.length > 0 || inStockOnly || newOnly || saleOnly || searchQuery) && (
              <Button variant="outline" size="sm" onClick={resetFilters} className="text-xs">
                Clear All
              </Button>
            )}
          </div>
          
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <SlidersHorizontal className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No motorcycles found</h3>
              <p className="text-muted-foreground mt-1">Try adjusting your filters or search query</p>
              <Button 
                variant="outline" 
                onClick={resetFilters} 
                className="mt-4"
              >
                Reset All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
