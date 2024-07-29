"use client";
import { useEffect } from "react";
import NewCard from "./new_card";
import CardList from "./card_list";
import { fetchWrapper } from "@/lib/_fetch";
import { useUserStore } from "@/store/user.store";
import { usePaymentStore } from "@/store/payment.store";
import { IUser } from "schema-interface";

export default function CndlPaymentMethods({ authenticatedUser, defautMethodTypes }: { authenticatedUser: IUser; defautMethodTypes?: string[] }) {
  const me = useUserStore((state) => state.me);
  const setMe = useUserStore((state) => state.setMe);
  const setPaymentMethods = usePaymentStore((state) => state.setPaymentMethods);
  const paymentState = usePaymentStore((state) => state.paymentState);
  const setPaymentState = usePaymentStore((state) => state.setPaymentState);

  // Check if user has payment methods
  const checkPaymentMethods = async () => {
    if (!me?.id) return;
    let result: any = await fetchWrapper({ url: `users/payment-methods` });
    if (result.error || result.length === 0) setPaymentState("new_pm");
    if (result.length > 0) {
      setPaymentMethods(result);
      setPaymentState("list");
    }
  };

  useEffect(() => {
    setMe(authenticatedUser);
    checkPaymentMethods();
  }, [me]);

  if (!me?.id) return <></>;

  return (
    <>
      {paymentState === "new_pm" && <NewCard defautMethodTypes={defautMethodTypes} />}
      {paymentState === "list" && <CardList />}
    </>
  );
}
