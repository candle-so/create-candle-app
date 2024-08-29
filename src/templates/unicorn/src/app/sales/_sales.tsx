"use client";
import { DataTable } from "@/components/data_table";
import { Input } from "@/components/ui/input";

import { useEffect, useState } from "react";
import { salesColumns } from "./_columns";
import { SalesDrawer } from "./_drawer";
import { useUserStore } from "@/store/user.store";
import Candle from "@candle-so/node";
import { getAuthTokens } from "@/lib/_cookies";
import { useContractStore } from "@/store/contract.store";

export const Sales = () => {
  const me = useUserStore((state) => state.me);
  const setContracts = useContractStore((state) => state.setContracts);
  const contracts = useContractStore((state) => state.contracts);
  const setContract = useContractStore((state) => state.setContract);
  const [tableData, setTableData] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);

  const candle = Candle.init({ api_key: process.env.NEXT_PUBLIC_CANDLE_API_KEY || "", debug: true });
  const editContractModal = (userRow: any) => {
    setOpenDrawer(true);
    // setMe(userRow);
  };

  const onDrawerClose = () => {
    setOpenDrawer(false);
  };

  const getSellerContracts = async () => {
    if (!me) return;
    let { accessToken } = getAuthTokens();
    let { error, data } = await candle.contracts.listContractsBySeller(me.id, accessToken as string);
    if (error) return;
    setTableData(data);
    setContracts(data);
  };

  const onRowClick = (row: any) => {
    const _contract = contracts.find((c) => c.id === row.id);
    if (!_contract) return;
    setContract(_contract);
    console.log(row);
    editContractModal(row);
  };

  useEffect(() => {
    if (!me) return;
    getSellerContracts();
  }, [me]);

  return (
    <div className="space-y-16">
      {me && <SalesDrawer me={me} openDrawer={openDrawer} onDrawClose={onDrawerClose} />}
      <div className="flex justify-between items-start">
        <div className="">
          <h2 className="text-2xl font-pacifico text-cndl-dark">Requests & Sales</h2>
          <p className="text-cndl-neutral-900 text-md">These are all the sales and requests for hire you recieved.</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex">
          <Input type="search" placeholder="Search" className="input-primary border-none shadow-sm max-w-sm" />
        </div>
        <div className="pt-6">
          <DataTable columns={salesColumns(editContractModal)} data={tableData} onRowClick={onRowClick} />
        </div>
      </div>
    </div>
  );
};
