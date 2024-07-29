"use client";
import { usePlatformStore } from "@/store/platform.store";

export const PlatformAvatar = () => {
  const _platform: any = usePlatformStore((state) => state.platform);
  let initials = _platform?.name
    ? _platform?.name
        .split(" ")
        .map((s: any) => s[0])
        .join("")
    : null;
  if (initials) return <div className="w-28 h-28 bg-cndl-primary-50 border-4 border-cndl-primary-100 text-cndl-primary-200 rounded-lg flex items-center justify-center font-pacifico text-5xl">{initials}</div>;
  if (!initials) return <div className="w-28 h-28 bg-cndl-primary-50 border-4 border-cndl-primary-100 text-cndl-primary-700 font-bold rounded-lg flex items-center justify-center text-center">upload a logo</div>;
};
