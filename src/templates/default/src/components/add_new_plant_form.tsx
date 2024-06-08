// components/add_new_plant_form.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AddNewPlantForm({
  plant,
  onClose,
}: {
  plant?: any;
  onClose: () => void;
}) {
  const [name, setName] = useState(plant?.name || "");
  const [image, setImage] = useState(plant?.image || "");
  const [price, setPrice] = useState(plant?.price || "");
  const [description, setDescription] = useState(plant?.description || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submit logic here
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        {plant ? "Edit Plant" : "Add New Plant"}
      </h2>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block mb-2">
          Image URL
        </label>
        <Input
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block mb-2">
          Price
        </label>
        <Input
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-2">
          Description
        </label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="flex justify-end">
        <Button type="button" onClick={onClose} className="mr-2">
          Cancel
        </Button>
        <Button type="submit">{plant ? "Save Changes" : "Add Plant"}</Button>
      </div>
    </form>
  );
}
