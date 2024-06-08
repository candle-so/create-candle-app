"use client";
// app/manage_plants/page.tsx
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AddNewPlantForm from "@/components/add_new_plant_form";
import PlantRow from "@/components/plant_row";
import Navigation from "@/components/navigation";
import WelcomeBanner from "@/components/welcome_banner";

const plants = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    image: "https://source.unsplash.com/random/150x150?monstera",
    price: "$30",
    description: "A beautiful Monstera Deliciosa.",
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    image: "https://source.unsplash.com/random/150x150?fiddle-leaf",
    price: "$50",
    description: "A lovely Fiddle Leaf Fig.",
  },
];

export default function ManagePlantsPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [editingPlant, setEditingPlant] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAddNewPlant = () => {
    setEditingPlant(null);
    isMobile ? setIsDrawerOpen(true) : setIsSheetOpen(true);
  };

  const handleEditPlant = (plant: any) => {
    setEditingPlant(plant);
    isMobile ? setIsDrawerOpen(true) : setIsSheetOpen(true);
  };

  return (
    <main>
      <Navigation />
      <WelcomeBanner />
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Manage Plants</h1>
          <Button onClick={handleAddNewPlant}>Add New Plant</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {plants.map((plant) => (
              <PlantRow key={plant.id} plant={plant} onEdit={handleEditPlant} />
            ))}
          </TableBody>
        </Table>
        {isMobile ? (
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild>
              <Button className="hidden" />
            </DrawerTrigger>
            <DrawerContent>
              <AddNewPlantForm
                plant={editingPlant}
                onClose={() => setIsDrawerOpen(false)}
              />
            </DrawerContent>
          </Drawer>
        ) : (
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button className="hidden" />
            </SheetTrigger>
            <SheetContent side="right">
              <AddNewPlantForm
                plant={editingPlant}
                onClose={() => setIsSheetOpen(false)}
              />
            </SheetContent>
          </Sheet>
        )}
      </div>
    </main>
  );
}
