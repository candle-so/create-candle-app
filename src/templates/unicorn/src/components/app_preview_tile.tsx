import { fetchWrapper } from "@/lib/_fetch";
import { formatDate } from "@/lib/time";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IPlatform } from "schema-interface";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";


export const AppPreviewTile = ({ platform }: { platform: IPlatform }) => {
  const [userCount, setUserCount] = useState(0);
  const [platformUsers, setPlatformUsers] = useState<any>([]);

  const countUsers = async () => {
    const count = await fetchWrapper({ url: `platforms/${platform.id}/users/count` });
    if (count.error) return;
    setUserCount(count.count);
    setPlatformUsers(count.users);
  };

  useEffect(() => {
    if (!platform) return;
    countUsers();
  }, [platform]);

  return (
    <Link href={`/m/${platform.id}/overview`}>
      <div className="border-4 space-y-4 border-cndl-primary-50 p-6 rounded-lg text-cndl-dark hover:border-cndl-accent-50">
        <div className="font-bold">
          <div className="text-2xl">{platform.name}</div>
          <div className="text-sm text-cndl-primary-500">{platform.url}</div>
          <div className="text-sm text-cndl-neutral-700">{formatDate({ dateString: `${platform.created}` }).fullDate}</div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-2xl">$0.00 MRR</span>
          <span className="flex items-center font-bold text-cndl-neutral-700 space-x-2 text-xs">
            {/* <span>+$7.32</span> */}
            <span>no change</span>
            {/* <span>
              <MoveUpRight size={14} />
            </span> */}
          </span>
        </div>
        <div className="flex items-center text-lg space-x-4">
          <div className="flex">
            {platformUsers.map((pu: any) => (
              <Avatar key={pu.id} className="w-8 h-8 ring-4 ring-cndl-primary-200 ring-offset-2">
                <AvatarImage src={pu.image} alt={pu.name} />
                <AvatarFallback>
                  {pu.name
                    .split(" ")
                    .map((s: string) => s[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div className="">
            {userCount} User{userCount === 1 ? "" : "s"}
          </div>
        </div>
      </div>
    </Link>
  );
};
