"use client";
import { DataTable } from "@/components/data_table";
import { Input } from "@/components/ui/input";

import { useEffect, useState } from "react";
import { salesColumns } from "./_columns";
import { OrdersDrawer } from "./_drawer";
import { useUserStore } from "@/store/user.store";
import Candle from "@candle-so/node";
import { getAuthTokens } from "@/lib/_cookies";

export const Orders = () => {
  const me = useUserStore((state) => state.me);
  const [tableData, setTableData] = useState([]);

  const candle = Candle.init({ api_key: process.env.NEXT_PUBLIC_CANDLE_API_KEY || "", debug: true });
  const editContractModal = (userRow: any) => {
    // setOpenDrawer(true);
    // // setMe(userRow);
    // updateURL(`/settings/products`);
    // setActiveTab("products");
  };

  const onDrawerClose = () => {
    // setOpenDrawer(false);
  };

  const getSellerContracts = async () => {
    if (!me) return;
    let { accessToken } = getAuthTokens();
    let { error, data } = await candle.contracts.listContractsByBuyer(me.id, accessToken as string);
    if (error) return;
    setTableData(data);
  };

  useEffect(() => {
    if (!me) return;
    getSellerContracts();
  }, [me]);

  return (
    <div className="space-y-16">
      <OrdersDrawer me={me} onDrawClose={onDrawerClose} />
      <div className="flex justify-between items-start">
        <div className="">
          <h2 className="text-2xl font-pacifico text-cndl-dark">Requests & Orders</h2>
          <p className="text-cndl-neutral-900 text-md">These are all the sales and requests for hire you recieved.</p>
        </div>
        {/* <div className="text-right">
          <Button className="space-x-3" onClick={() => editUserModal({})}>
            <span>
              <TriggerButtonIcon />
            </span>
            <span>New User</span>
          </Button>
        </div> */}
      </div>
      <div className="space-y-2">
        <div className="flex">
          <Input type="search" placeholder="Search" className="input-primary border-none shadow-sm max-w-sm" />
        </div>
        <div className="">
          <DataTable columns={salesColumns(editContractModal)} data={tableData} />
        </div>
      </div>
    </div>
  );
};
