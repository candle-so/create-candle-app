// components/plant_row.tsx
import React from "react";
import Image from "next/image";
import { TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function PlantRow({
  plant,
  onEdit,
}: {
  plant: any;
  onEdit: (plant: any) => void;
}) {
  return (
    <TableRow>
      <TableCell>
        <Image
          src={plant.images[0]}
          alt={plant.name}
          width={50}
          height={50}
          className="rounded"
        />
      </TableCell>
      <TableCell>{plant.name}</TableCell>
      <TableCell>{plant.price}</TableCell>
      <TableCell>
        <Button variant="outline" onClick={() => onEdit(plant)}>
          Edit
        </Button>
      </TableCell>
    </TableRow>
  );
}
