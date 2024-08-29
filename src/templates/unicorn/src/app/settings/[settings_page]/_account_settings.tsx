import Candle from "@candle-so/node";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { InfoIcon, SaveIcon } from "lucide-react";
import { useUserStore } from "@/store/user.store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { clearSession, getAuthTokens } from "@/lib/_cookies";

export const SettingsAccountSettings = () => {
  const candle = Candle.init({ api_key: process.env.NEXT_PUBLIC_CANDLE_API_KEY || "", debug: true });
  const [changesMade, setChangesMade] = useState(false);
  const me: any = useUserStore((state) => state.me);
  const setMe: any = useUserStore((state) => state.setMe);

  const saveChanges = async () => {
    let { accessToken } = getAuthTokens();
    const { error, data } = await candle.users.modifyUser(me, accessToken as string);
    if (error) {
      return;
    }
    setMe(data);
    setChangesMade(false);
  };

  const handleChange = (e: any) => {
    setMe({ ...me, [e.target.name]: e.target.value });
    setChangesMade(true);
  };

  if (!me) return null;

  return (
    <div className="flex-1 py-4 px-14 space-y-8 border-l border-cndl-neutral-100 max-w-4xl">
      <div className="flex w-full justify-between items-center">
        <h2 className="text-lg text-cndl-dark font-bold">Account</h2>
        <Button className="btn-primary" variant="ghost" disabled={!changesMade} onClick={saveChanges}>
          <SaveIcon size={16} /> <span>Save Changes</span>
        </Button>
      </div>
      <div className="border border-cndl-primary-50 rounded-lg py-6 px-8 space-y-8">
        <div className="flex w-full justify-between">
          <div className="text-sm text-cndl-dark">
            <h2 className="text-xl font-bold">Avatar</h2>
            <p>This is your avatar</p>
            <p>Click on the avatar to upload a custom one from your files.</p>
          </div>
          <Avatar className="w-16 h-16 ring-offset-4 ring-4 ring-cndl-accent-500">
            <AvatarImage src={me?.image} alt={me?.name || me?.username} />
            <AvatarFallback className="bg-cndl-primary-200 text-4xl text-cndl-primary-700 font-bold">
              {(me?.name || me?.username)
                .split(" ")
                .map((s: any) => s[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex text-cndl-accent-500 p-2 bg-cndl-accent-50 rounded-md text-sm items-center space-x-3">
          <InfoIcon size={20} />
          <span>An avatar is optional but strongly recommended.</span>
        </div>
      </div>
      <div className="border border-cndl-primary-50 rounded-lg py-6 px-8 space-y-8">
        <div className="max-w-sm space-y-2">
          <Label className="pl-2 font-bold" htmlFor="first_name" aria-required>
            First Name
          </Label>
          <Input id="first_name" name="firstName" className="text-cndl-neutral-700 shadow-md shadow-cndl-neutral-50 border-cndl-neutral-50" type="text" placeholder="" value={me.firstName} onChange={handleChange} />
        </div>
        <div className="max-w-sm space-y-2">
          <Label className="pl-2 font-bold" htmlFor="last_name" aria-required>
            Last Name
          </Label>
          <Input id="last_name" name="lastName" className="text-cndl-neutral-700 shadow-md shadow-cndl-neutral-50 border-cndl-neutral-50" type="text" placeholder="" value={me.lastName} onChange={handleChange} />
        </div>
        <div className="max-w-sm space-y-2">
          <Label className="pl-2 font-bold" htmlFor="username" aria-required>
            Username
          </Label>
          <Input id="username" name="username" className="text-cndl-neutral-700 shadow-md shadow-cndl-neutral-50 border-cndl-neutral-50" type="text" placeholder="" value={me.username} onChange={handleChange} />
        </div>
        {/* <div className="max-w-sm space-y-2">
          <Label className="pl-2 font-bold" htmlFor="email" aria-required>
            Email
          </Label>
          <Input id="email" className="text-cndl-neutral-700 shadow-md shadow-cndl-neutral-50 border-cndl-neutral-50" type="email" placeholder="" value={me.email} onChange={handleChange} />
        </div> */}
      </div>
    </div>
  );
};
