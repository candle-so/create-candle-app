"use client";
import { fetchWrapper } from "@/lib/_fetch";
import { getCookie, setCookie } from "@/lib/cookies";
import { usePlatformStore } from "@/store/platform.store";
import { ToggleLeftIcon, ToggleRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IPlatform } from "schema-interface";

export const DevModeToggle = () => {
  const router = useRouter();
  const { push } = router;
  const mode = getCookie("mode") || "live";
  const [devMode, setDevMode] = useState(mode === "test" ? true : false);
  const [loading, setLoading] = useState(false);

  const setPlatform = usePlatformStore((state) => state.setPlatform);
  const setPlatforms = usePlatformStore((state) => state.setPlatforms);

  const toggleDevMode = async () => {
    setLoading(true);
    setCookie("mode", devMode ? "live" : "test");
    setDevMode(!devMode);

    let _platforms: any = await fetchWrapper({ url: "platforms" });
    if (_platforms.status === 404) {
      setPlatform({} as IPlatform);
      setPlatforms([]);
      setLoading(false);
      return;
    }
    if (_platforms.error) {
      setLoading(false);
      return;
    }
    setPlatform({} as IPlatform);
    setPlatforms(_platforms);
    setLoading(false);
    return push("/overview");
  };

  return (
    <div>
      <span className="flex items-center justify-start cursor-pointer space-x-2 md:text-xs" onClick={toggleDevMode}>
        {devMode && <ToggleRightIcon className="text-cndl-accent-500" size={20} />}
        {!devMode && <ToggleLeftIcon className="text-cndl-neutral-500" size={20} />}
        {devMode && <span className="text-cndl-accent-500">dev mode on</span>}
        {!devMode && <span className="text-cndl-neutral-500">dev mode off</span>}
      </span>
    </div>
  );
};
