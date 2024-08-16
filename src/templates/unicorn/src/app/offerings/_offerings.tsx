"use client";
import Candle from "@candle-so/node";
import { ContextDrawer } from "@/components/context_draw";
import { DataTable } from "@/components/data_table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Uploader from "@/components/upload";
import { currencify } from "@/lib/currencify";
import { formatDate } from "@/lib/time";
import { PlusCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useProductStore } from "@/store/products.store";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useUserStore } from "@/store/user.store";

export const TriggerButtonIcon = () => {
  return <PlusCircleIcon size={20} />;
};

const _skills = [
  {
    name: "Marketing",
    value: "marketing",
  },
  {
    name: "Design",
    value: "design",
  },
  {
    name: "Development",
    value: "development",
  },
  {
    name: "Writing",
    value: "writing",
  },
  {
    name: "Business",
    value: "business",
  },
  {
    name: "Other",
    value: "other",
  },
];

const cycles = [
  { name: "Hourly", value: "hourly" },
  { name: "Daily", value: "daily" },
  { name: "Monthly", value: "monthly" },
  { name: "Yearly", value: "yearly" },
];

export const Offerings = () => {
  const candle = Candle.init({ api_key: process.env.NEXT_PUBLIC_CANDLE_API_KEY || "", debug: true });
  const me = useUserStore((state) => state.me);
  const products = useProductStore((state) => state.products);
  const setProduct = useProductStore((state) => state.setProduct);
  const setProducts = useProductStore((state) => state.setProducts);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState<any>(_skills);
  const [tableData, setTableData] = useState([]);
  const [activeTab, setActiveTab] = useState<string>();
  const [cycleValue, setCycleValue] = useState(cycles[0].value);

  const field = {
    label: "",
    defaultValue: [],
    name: "media",
    mapTo: "media",
    required: true,
    placeholder: "Click or Drop new image here",
  };

  function updateURL(newURL: string) {
    window.history.pushState({}, "", newURL);
    const urlArr = newURL.split("/");
    setActiveTab(urlArr[urlArr.length - 1]);
  }

  const closeDrawer = (e: any) => {
    setOpenDrawer(e);
  };
  const editUserModal = (userRow: any) => {
    setOpenDrawer(true);
    // setMe(userRow);
    updateURL(`/offerings`);
    setActiveTab("products");
  };

  const productColumns = [
    {
      accessorKey: "name",
      header: "Title",
      cell: ({ row }: any) => {
        let image: any = row.getValue("image") || "";
        let name: any = row.getValue("name") || "";

        return (
          <div className="inline-block cursor-pointer" onClick={() => editUserModal(row.original)}>
            <div className="flex items-center space-x-2 border-2 border-cndl-accent-500 rounded-full py-1 pl-1 pr-3 hover:bg-cndl-accent-50 hover:text-cndl-accent-700">
              <Avatar className="w-6 h-6">
                <AvatarImage src={image} alt={name} />
                <AvatarFallback className="bg-cndl-primary-200 text-cndl-primary-700 font-bold">
                  {name
                    .split(" ")
                    .map((s: any) => s[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span className="whitespace-pre-wrap">{name}</span>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "category",
      header: () => <div className="text-cndl-dark">Category</div>,
      cell: ({ row }: any) => {
        return <div className="text-cndl-dark font-bold capitalize">{row.getValue("category")}</div>;
      },
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }: any) => {
        return <div className="text-cndl-dark">{row.getValue("description")}</div>;
      },
    },
    {
      accessorKey: "price",
      header: "Rate",
      cell: ({ row }: any) => {
        return <div className="text-cndl-dark">{currencify(row.getValue("spent"))}</div>;
      },
    },

    {
      accessorKey: "created",
      header: () => <div className="text-cndl-neutral-700">Created</div>,
      cell: ({ row }: any) => {
        return <div className="text-cndl-neutral-700">{formatDate({ dateString: `${row.getValue("created")}` }).fullDate}</div>;
      },
    },
  ];

  const saveProduct = async () => {
    const _product: any = {
      image,
      user_id: me?.id,
      name,
      description,
      category,
      price,
      cycle: cycleValue,
    };
    let { error, data: newProduct } = await candle.products.createProduct(_product);
    if (error) {
      return;
    }
    setProduct(newProduct);
    setProducts([...products, newProduct]);
  };

  const onUpload = (data: any) => {
    // console.log("onUpload", data);
    setImage(data.url);
  };

  const onRemove = (data: any) => {
    // console.log("onRemove", data);
  };

  const loadProducts = async () => {
    if (!me) return;
    let { error, data: _products } = await candle.products.listUserProducts(me.id);
    if (error) {
      return;
    }
    setProducts(_products);
    setTableData(_products);
  };

  useEffect(() => {
    if (!me) return;
    loadProducts();
  }, [me]);

  const drawerTitle = (
    <div className="flex space-x-2">
      <span className="font-bold">Service Offerings /</span>
      <span className="text-cndl-neutral-700 font-normal">New Offering</span>
    </div>
  );

  return (
    <div className="space-y-16">
      <ContextDrawer open={openDrawer} title={drawerTitle} onCloseDraw={closeDrawer}>
        <div className="space-y-6 pt-8">
          <Uploader folder="offerings" field={field} onUpload={onUpload} onRemove={onRemove} />
          <div className="space-y-2">
            <Label className="text-cndl-neutral-900 font-bold">Service Name</Label>
            <Input type="search" placeholder="Search" className="input-primary" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label className="text-cndl-neutral-900 font-bold">Service Description</Label>
            <Textarea className="textarea-primary" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="space-y-2 relative">
            <Label className="text-cndl-neutral-900 font-bold">Category</Label>
            <RadioGroup className="grid grid-cols-3" defaultValue="comfortable" onValueChange={setCategory}>
              {categories.map((category: any, i: any) => (
                <div className="flex items-center space-x-2" key={i}>
                  <RadioGroupItem value={category.value} id={`r${i}`} />
                  <Label htmlFor={`r${i}`}>{category.name}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label className="text-cndl-neutral-900 font-bold">Price</Label>
            <div className="flex w-full space-x-3">
              <div className="w-2/3">
                <Input type="number" placeholder="$50.00" className="input-primary" value={price} onChange={(e) => setPrice(e.target.value)} />
              </div>
              <div className="w-1/3">
                <Select onValueChange={(value) => setCycleValue(value)} defaultValue={cycleValue}>
                  <SelectTrigger className="relative bg-cndl-neutral-100 font-bold rounded-full text-cndl-neutral-700">
                    <SelectValue placeholder="Type of Application" />
                  </SelectTrigger>
                  <SelectContent className="relative space-x-2">
                    {cycles.map((meter, index) => (
                      <SelectItem key={index} value={meter.value}>
                        {meter.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <Button className="btn-primary" onClick={saveProduct}>
              Add new Service Offering
            </Button>
          </div>
        </div>
      </ContextDrawer>
      <div className="flex justify-between items-start">
        <div className="">
          <h2 className="text-2xl font-pacifico text-cndl-dark">Service Offerings</h2>
          <p className="text-cndl-neutral-900 text-md">This is a list of services you are open to offering.</p>
        </div>
        <div className="text-right">
          <Button className="btn-primary" onClick={() => editUserModal({})}>
            <span>
              <TriggerButtonIcon />
            </span>
            <span>New Service</span>
          </Button>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex">
          <Input type="search" placeholder="Search" className="border-none shadow-sm" />
        </div>
        <div className="">
          <DataTable columns={productColumns} data={products} />
        </div>
      </div>
    </div>
  );
};
