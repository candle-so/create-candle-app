import { PackagePlusIcon, PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { fetchWrapper } from "@/lib/_fetch";
import { useEffect, useState } from "react";
import { usePlatformStore } from "@/store/platform.store";
import { useUserStore } from "@/store/user.store";
import { AppPreviewTile } from "./app_preview_tile";
import Link from "next/link";

export const AppsList = () => {
  const [loaded, setLoaded] = useState(false);

  const me = useUserStore((state) => state.me);
  const platforms = usePlatformStore((state) => state.platforms);
  const setPlatforms = usePlatformStore((state) => state.setPlatforms);

  const loadMarketplaces = async () => {
    let _platforms: any = await fetchWrapper({ url: "platforms" });
    if (_platforms.error) {
      setLoaded(true);
      return;
    }
    setPlatforms(_platforms);
    setLoaded(true);
  };

  const openPlatformCreator = () => {};

  useEffect(() => {
    if (!me) return;
    loadMarketplaces();
  }, [me]);

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center px-5">
        <h3 className="text-xl font-bold">My Apps</h3>
        <div className="">
          <Link href="/new">
            <Button className="space-x-2">
              <span>
                <PlusCircleIcon size={16} />
              </span>
              <span>Create App</span>
            </Button>
          </Link>
        </div>
      </div>
      {platforms && platforms.length > 0 && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {platforms?.map((platform, i) => (
              <AppPreviewTile platform={platform} key={i} />
            ))}

            <div className="cursor-pointer rounded-lg bg-cndl-neutral-50 p-4" onClick={openPlatformCreator}>
              <Link href="/new">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center space-y-2">
                    <PackagePlusIcon className="text-cndl-neutral-300" size={80} />
                    <div className="text-cndl-neutral-700text-2xl">New App</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
