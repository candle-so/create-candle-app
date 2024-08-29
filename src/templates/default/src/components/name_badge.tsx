import { IUser } from "schema-interface";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

export const NameBadge = ({ user, role }: { user: IUser; role: "user" | "buyer" | "seller" }) => {
  if (!user) return <div className="text-cndl-neutral-700"></div>;

  let roleClass = {
    container: "",
    avatarFallback: "",
  };
  if (role === "buyer") {
    roleClass.container = "border-cndl-negative-500 hover:bg-cndl-negative-50 hover:text-cndl-negative-700";
    roleClass.avatarFallback = "bg-cndl-negative-200 text-cndl-negative-700";
  }
  if (role === "seller") roleClass.container = "border-cndl-positive-500 hover:bg-cndl-positive-50 hover:text-cndl-positive-700";

  return (
    <div className={cn("flex items-center space-x-2 border-2 rounded-full py-1 pl-1 pr-3", roleClass.container)}>
      <Avatar className="w-6 h-6">
        <AvatarImage src={user.image} alt={user.name} />
        <AvatarFallback className={cn("font-bold", roleClass.avatarFallback)}>
          {(user.name || user.username || user.email || "")
            .split(" ")
            .map((s: any) => s[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <span className="whitespace-pre-wrap">{user.name}</span>
    </div>
  );
};
