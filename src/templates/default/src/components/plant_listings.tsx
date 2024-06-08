"use client";
// components/plant_listings.tsx
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PlantRow from "@/components/plant_row";
import { useProductsStore } from "@/store/products.store";

export default function PlantListings() {
  const products = useProductsStore((state) => state.products);

  const handleEditPlant = (plant: any) => {
    // Handle edit logic here, e.g., open a modal or navigate to an edit page
    console.log("Edit plant:", plant);
  };

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4">Your Plant Listings</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((plant) => (
            <PlantRow key={plant.id} plant={plant} onEdit={handleEditPlant} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
