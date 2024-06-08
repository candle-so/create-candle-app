// components/purchase_history.tsx
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PurchaseHistory() {
  // Assuming we have a way to get the user's purchase history
  const purchases = [
    {
      id: 1,
      name: "Aloe Vera",
      date: "2023-05-01",
      price: "$15",
    },
    {
      id: 2,
      name: "Bonsai Tree",
      date: "2023-04-21",
      price: "$50",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Purchase History</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {purchases.map((purchase) => (
            <TableRow key={purchase.id}>
              <TableCell>{purchase.name}</TableCell>
              <TableCell>{purchase.date}</TableCell>
              <TableCell>{purchase.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
