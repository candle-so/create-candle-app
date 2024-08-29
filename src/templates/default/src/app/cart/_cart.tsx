"use client";

import { ContextDrawer } from "@/components/context_drawer";
import PaymentMethods from "@/components/payment_methods";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getAuthTokens } from "@/lib/_cookies";
import { currencify } from "@/lib/currencify";
import { useCartStore } from "@/store/cart.store";
import { useContractStore } from "@/store/contract.store";
import { useUserStore } from "@/store/user.store";
import Candle from "@candle-so/node";
import { CircleDollarSignIcon, FileTextIcon, MailCheckIcon, TelescopeIcon, Trash2Icon, UserPlus2Icon, UserSearchIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Cart = () => {
  const candle = Candle.init({ api_key: process.env.NEXT_PUBLIC_CANDLE_API_KEY || "", debug: true });
  const me: any = useUserStore((state) => state.me);
  const cart: any = useCartStore((state) => state.cart);
  const setCart: any = useCartStore((state) => state.setCart);
  const contract = useContractStore((state) => state.contract);
  const setContract = useContractStore((state) => state.setContract);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [notes, setNotes] = useState("");
  const [isSent, setIsSent] = useState(true);

  const closeDrawer = (e: any) => {
    setOpenDrawer(e);
  };

  const addNotes = async () => {
    if (!notes) return;

    let { accessToken } = getAuthTokens();
    const { error, data } = await candle.contracts.createContractFromCart(cart.id, { notes }, accessToken as string);
    if (error) return;
    setContract(data);
    setOpenDrawer(false);
  };

  const getContractsAsBuyer = async () => {
    let { accessToken } = getAuthTokens();
    const { error, data } = await candle.contracts.listContractsByBuyer(me.id, accessToken as string);
    if (error) return;

    const mostRecentDraft = data.sort((a: any, b: any) => (b.created > a.created ? -1 : 1)).find((c: any) => c.status === "draft");
    if (!mostRecentDraft) return;

    setNotes(mostRecentDraft.notes || "");
    setContract(mostRecentDraft);
  };

  const sendContract = async () => {
    if (!contract) return;
    let { accessToken } = getAuthTokens();
    const { error, data } = await candle.contracts.sendContract(contract.id, accessToken as string);
    if (error) return;
    let _cart = { ...cart };
    _cart.items = [];
    setCart(_cart);
    setContract(data);
    setIsSent(true);
  };

  useEffect(() => {
    if (!me) return;
    getContractsAsBuyer();
  }, [me]);

  if (!cart) return;

  const drawerTitle = (
    <div className="flex space-x-2">
      <span className="font-bold">Proposal /</span>
      <span className="text-cndl-neutral-700 font-normal">Add Notes</span>
    </div>
  );

  if (!cart || (cart.items.length === 0 && isSent)) {
    return (
      <div className="max-w-2xl mx-auto space-y-8 bg-cndl-neutral-50 p-8 rounded-xl">
        <div className="flex items-center space-x-8 w-full justify-between">
          <div className="text-8xl p-4">🎉 </div>
          <div className="flex-1 text-sm text-cndl-dark space-y-4">
            <h2 className="text-4xl font-bold font-pacifico">Congratulations!</h2>
            <div className="flex space-x-2 text-xl items-center text-cndl-neutral-800">
              <div>
                Proposal Sent to <span className="font-bold">{contract?.sellers?.map((s: any) => s.name).join(", ")}</span>
              </div>
            </div>
            <div className="">
              <Button className="btn-primary" onClick={() => setOpenDrawer(true)}>
                <Link className="flex space-x-2 items-center" href="/">
                  <span className="">
                    <TelescopeIcon size={20} />
                  </span>
                  <span>Continue browsing</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!cart || (cart.items.length === 0 && !isSent))
    return (
      <div className="max-w-2xl mx-auto space-y-8 bg-cndl-neutral-50 p-8 rounded-xl">
        <div className="pb-4 space-y-2">
          <h2 className="text-2xl text-cndl-dark font-bold font-pacifico">Your cart is empty</h2>
          <p className="text-neutral-800">Your cart is empty. Add items to your cart to get started.</p>
          <div className="pt-5">
            <Button className="btn-primary" onClick={() => setOpenDrawer(true)}>
              <Link className="flex space-x-2 items-center" href="/">
                <span className="">
                  <UserSearchIcon size={20} />
                </span>
                <span>Find a Builder</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );

  return (
    <div>
      <ContextDrawer open={openDrawer} title={drawerTitle} onCloseDraw={closeDrawer}>
        <div className="space-y-4 pt-8">
          <div className="">
            <Label className="text-cndl-dark font-bold text-lg">Notes & Links</Label>
            <p className="text-neutral-600 text-sm">Add Notes and Links to documents for this proposal</p>
          </div>
          <div className="">
            <Textarea className="textarea-primary" placeholder="Description" value={notes} onChange={(e) => setNotes(e.target.value)} />
          </div>
          <div className="pt-6">
            <Button className="btn-primary" onClick={addNotes}>
              Add Notes
            </Button>
            <Button variant="ghost" className="" onClick={() => setOpenDrawer(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </ContextDrawer>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="pb-4 space-y-2">
          <h2 className="text-2xl text-cndl-dark font-bold font-pacifico">Edit Proposal</h2>
          <p className="text-neutral-800">
            Sending requests do <b>not</b> charge your card. It allows builders to confirm their availability to work. Builders will bill you based on the amount of hours they have actually worked.
          </p>
        </div>
        <div className="space-y-4 py-4 rounded-lg">
          <h2 className="text-cndl-dark font-bold text-xl pb-4">Builders</h2>
          {cart.items?.map((item: any) => {
            return (
              <div key={item.id} className="flex items-start w-full space-x-8">
                <div className="pt-2">
                  <Avatar className="w-16 h-16 ring-offset-4 ring-4 ring-cndl-accent-500">
                    <AvatarImage src={item?.product?.user?.image} alt={item?.product?.user?.name} />
                    <AvatarFallback className="bg-cndl-primary-200 text-4xl text-cndl-primary-700 font-bold">
                      {(item?.product?.user?.name || item?.product?.user?.username)
                        .split(" ")
                        .map((s: any) => s[0])
                        .join("")
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="">
                  <div className="text-cndl-dark font-bold text-lg">{item.product.user?.name || item.product.user?.username}</div>
                  <div className="text-cndl-primary-500 text-md">{item.product.name}</div>
                  <div className="text-cndl-neutral-700 text-sm flex items-center space-x-2">
                    <div className="text-cndl-dark font-bold">
                      {currencify(item.product.price / 100)} {item.product.cycle}
                    </div>
                    <div className="">•</div>
                    <div className="">{item.product.user?.timezone?.replace("_", " ")}</div>
                  </div>
                </div>
                <div className="flex-1 flex w-full items-start justify-end space-x-6">
                  <div className="text-cndl-neutral-700">
                    <div className="">
                      Proposing: <span className="font-bold text-cndl-dark">{item.quantity} hours</span>
                    </div>
                    <div className="">
                      For: <span className="font-bold text-cndl-dark">{currencify((item.product.price / 100) * item.quantity)}</span>
                    </div>
                  </div>
                  <div className="text-cndl-negative-500 text-md pt-1">
                    <Trash2Icon size={16} />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="">
            <Button variant="ghost" className="space-x-2 flex items-center font-bold text-cndl-primary-500 px-0">
              <span>
                <UserPlus2Icon size={18} />
              </span>
              <span className="pt-1">Add more buiders</span>
            </Button>
          </div>
        </div>
        <div className="space-y-2 py-4 rounded-lg">
          <div className="pb-2">
            <h2 className="text-cndl-dark font-bold text-xl">Add Project Notes</h2>
            <p className="text-cndl-neutral-700 text-sm">Add notes, link to documents or folder with scope material.</p>
          </div>
          {!openDrawer && notes && <pre className="text-cndl-dark text-xs border-2 border-cndl-dark rounded-lg min-h-32 p-4 max-w-lg">{notes}</pre>}
          <div className="">
            <Button variant="ghost" className="space-x-2 flex items-center font-bold text-cndl-primary-500 px-0" onClick={() => setOpenDrawer(true)}>
              <span>
                <FileTextIcon size={18} />
              </span>
              <span className="pt-1">Add notes</span>
            </Button>
          </div>
        </div>
        <div className="space-y-2 py-4 rounded-lg">
          <h2 className="text-cndl-dark font-bold text-xl">Payment Methods</h2>
          <PaymentMethods defautMethodTypes={["card"]} />
        </div>
        {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}
        {/* <pre>{JSON.stringify(contract, null, 2)}</pre> */}
        <div className="pt-8">
          {((contract && contract.status === "draft") || !contract) && (
            <Button variant="ghost" className="btn-primary" onClick={sendContract}>
              <span>
                <CircleDollarSignIcon size={18} />
              </span>
              <span>Send Proposal</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
