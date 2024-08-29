"use client";
import { useEffect } from "react";
import NewCard from "./new_card";
import CardList from "./card_list";
import { useUserStore } from "@/store/user.store";
import { usePaymentStore } from "@/store/payment.store";
import Candle from "@candle-so/node";
import candleConfig from "@/lib/candle.config";
import { getAuthTokens } from "@/lib/_cookies";

export default function PaymentMethods({ defautMethodTypes }: { defautMethodTypes?: string[] }) {
  const candle = Candle.init(candleConfig);
  const me = useUserStore((state) => state.me);
  const setPaymentMethods = usePaymentStore((state) => state.setPaymentMethods);
  const paymentState = usePaymentStore((state) => state.paymentState);
  const setPaymentState = usePaymentStore((state) => state.setPaymentState);

  // Check if user has payment methods
  const checkPaymentMethods = async () => {
    let { accessToken } = getAuthTokens();
    let { error, data: result }: any = await candle.users.listUserPaymentMethods(accessToken as string);
    if (error || result.length === 0) setPaymentState("new_pm");
    if (result.length > 0) {
      setPaymentMethods(result);
      setPaymentState("list");
    }
  };

  useEffect(() => {
    checkPaymentMethods();
  }, [me]);

  return (
    <>
      {paymentState === "new_pm" && <NewCard defautMethodTypes={defautMethodTypes} />}
      {paymentState === "list" && <CardList />}
    </>
  );
}
