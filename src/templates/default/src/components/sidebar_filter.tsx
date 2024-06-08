// components/sidebar_filter.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Slider,
  SliderTrack,
  SliderRange,
  SliderThumb,
} from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useProductsStore } from "@/store/products.store";

const categories = ["Succulents", "Tropical"];
const sellers = [
  "Green Thumb Nursery",
  "Miniature Forest",
  "Orchid Paradise",
  "Urban Jungle",
  "Desert Bloom",
  "Tropical Oasis",
];

export default function SidebarFilter() {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [availability, setAvailability] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSellers, setSelectedSellers] = useState<string[]>([]);
  const products = useProductsStore((state) => state.products);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const handleSellerChange = (seller: string) => {
    setSelectedSellers((prev) =>
      prev.includes(seller)
        ? prev.filter((sel) => sel !== seller)
        : [...prev, seller]
    );
  };

  const applyFilters = () => {
    // Implement filter logic here
    console.log("Filters applied:", {
      priceRange,
      availability,
      selectedCategories,
      selectedSellers,
    });
  };

  return (
    <div className="w-full p-4 bg-gray-100 rounded-lg mt-4">
      <h2 className="text-2xl font-bold mb-4">Filters</h2>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-2">
            <Checkbox
              checked={selectedCategories.includes(category)}
              onCheckedChange={() => handleCategoryChange(category)}
            />
            <span className="ml-2 text-gray-700">{category}</span>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Seller</label>
        {sellers.map((seller) => (
          <div key={seller} className="flex items-center mb-2">
            <Checkbox
              checked={selectedSellers.includes(seller)}
              onCheckedChange={() => handleSellerChange(seller)}
            />
            <span className="ml-2 text-gray-700">{seller}</span>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Price Range</label>
        <Slider
          value={priceRange}
          onValueChange={(value) => setPriceRange(value)}
          min={0}
          max={100}
        >
          <SliderTrack>
            <SliderRange />
          </SliderTrack>
          <SliderThumb />
          <SliderThumb />
        </Slider>
        <div className="flex justify-between mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Availability</label>
        <Slider
          value={[availability]}
          onValueChange={(value) => setAvailability(value[0])}
          min={0}
          max={50}
        >
          <SliderTrack>
            <SliderRange />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <div className="mt-2 text-center">
          <span>{availability} Available</span>
        </div>
      </div>

      <Button className="w-full" onClick={applyFilters}>
        Apply Filters
      </Button>
    </div>
  );
}
