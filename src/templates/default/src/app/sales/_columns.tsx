import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { currencify } from "@/lib/currencify";
import { formatDate } from "@/lib/time";

export const salesColumns = (onClick: (row: any) => void) => {
  return [
    {
      accessorKey: "buyers",
      header: "Buyer",
      cell: ({ row }: any) => {
        const buyers = row.getValue("buyers");
        return buyers.map((buyer: any) => (
          <div key={buyer.id} className="inline-block cursor-pointer">
            <div className="flex items-center space-x-2 border-2 border-cndl-negative-500 rounded-full py-1 pl-1 pr-3 hover:bg-cndl-negative-50 hover:text-cndl-negative-700">
              <Avatar className="w-6 h-6">
                <AvatarImage src={buyer.image} alt={buyer.name} />
                <AvatarFallback className="bg-cndl-negative-200 text-cndl-negative-700 font-bold">
                  {buyer.name
                    .split(" ")
                    .map((s: any) => s[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span className="whitespace-pre-wrap">{buyer.name}</span>
            </div>
          </div>
        ));
      },
    },
    {
      accessorKey: "sellers",
      header: "Seller",
      cell: ({ row }: any) => {
        const sellers = row.getValue("sellers");
        return sellers.map((seller: any) => (
          <div key={seller.id} className="inline-block cursor-pointer">
            <div className="flex items-center space-x-2 border-2 border-cndl-positive-500 rounded-full py-1 pl-1 pr-3 hover:bg-cndl-positive-50 hover:text-cndl-positive-700">
              <Avatar className="w-6 h-6">
                <AvatarImage src={seller.image} alt={seller.name} />
                <AvatarFallback className="bg-cndl-positive-200 text-cndl-positive-700 font-bold">
                  {seller.name
                    .split(" ")
                    .map((s: any) => s[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span className="whitespace-pre-wrap">{seller.name}</span>
            </div>
          </div>
        ));
      },
    },
    {
      accessorKey: "items",
      header: "Item Description",
      cell: ({ row }: any) => {
        const items = row.getValue("items");
        return items.map((item: any) => (
          <div key={item.id} className="text-cndl-neutral-900">
            <div className="text-md">{item.description}</div>
            <div className="text-xs text-cndl-primary-700">{`${currencify(item.price / 100)} x ${item.quantity}`} hours</div>
          </div>
        ));
      },
    },
    {
      accessorKey: "subTotal",
      header: "Subtotal",
      cell: ({ row }: any) => {
        return <div className="text-cndl-dark">{currencify(row.getValue("subTotal") / 100)}</div>;
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }: any) => {
        let status = row.getValue("status");
        if (status === "request") status = "request recieved";
        return <div className={`status status-${status}`}>{status}</div>;
      },
    },
    {
      accessorKey: "due",
      header: "Due Date",
      cell: ({ row }: any) => {
        const due = row.getValue("due");
        return <div className="text-cndl-dark">{due ? formatDate({ dateString: `${due}` }).fullDate : "N/A"}</div>;
      },
    },
    {
      accessorKey: "created",
      header: "Created",
      cell: ({ row }: any) => {
        return <div className="text-cndl-neutral-700">{formatDate({ dateString: `${row.getValue("created")}` }).fullDate}</div>;
      },
    },
  ];
};
