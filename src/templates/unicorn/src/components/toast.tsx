"use client";

import { cn } from "@/lib/utils";
import { useToastStore } from "@/store/toast.store";
import { useEffect } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import { IToast } from "toast-interface";

export default function CndlToast() {
  const toasts = useToastStore((state) => state.toasts);
  const setToasts = useToastStore((state) => state.setToasts);

  const contextClass: any = {
    success: "m-4 rounded-md border-4 text-cndl-positive border-cndl-white shadow-md bg-cndl-background-positive",
    error: "m-4 rounded-md border-4 text-cndl-negative border-cndl-white shadow-md bg-cndl-background-negative",
    info: "m-4 rounded-md border-4 text-cndl-neutral border-cndl-white shadow-md bg-cndl-white",
    warning: "m-4 rounded-md border-4 text-cndl-accent border-cndl-white shadow-md bg-cndl-white",
    default: "m-4 rounded-md border-4 text-cndl-white border-cndl-white shadow-md bg-cndl-white",
    dark: "m-4 rounded-md border-4 text-cndl-dark border-cndl-white shadow-md bg-cndl-white",
  };

  const fireToast = (_toast: IToast, index: number) => {
    let { status, message, delay } = _toast;
    if (status === "success") toast.success(message, { autoClose: delay || 3000 });
    if (status === "info") toast.info(message, { autoClose: delay || 3000 });
    if (status === "warn") toast.warn(message, { autoClose: delay || 3000 });
    if (status === "error") toast.error(message, { autoClose: delay || 3000 });

    let _toasts = [...toasts].filter((_: any, i: number) => i !== index);
    setToasts([..._toasts]);
  };

  useEffect(() => {
    for (let index = 0; index < toasts.length; index++) fireToast(toasts[index], index);
  }, [toasts]);

  return (
    <ToastContainer
      className="z-50"
      toastClassName={(e: any) => {
        return cn(contextClass[e?.type], "p-2");
      }}
      // bodyClassName={() => "font-mono"}
      closeButton={false}
      transition={Slide}
      limit={3}
      position="top-center"
      // autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      closeOnClick={false}
      pauseOnHover
      theme="light"
    />
  );
}
