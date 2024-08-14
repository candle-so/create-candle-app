import Candle from "@candle-so/node";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon, SaveIcon } from "lucide-react";
import { useUserStore } from "@/store/user.store";
import { getAuthTokens } from "@/lib/_cookies";
import { Availabilities } from "@/components/availabilities";
import { useCalendarStore } from "@/store/calendar.store";
import { SpecificDatesEditor } from "./_specific_dates_editor";
import { SpecificDatesViewer } from "./_specific_dates_viewer";

export const SettingsAvailabilitySettings = () => {
  const candle = Candle.init({ api_key: process.env.NEXT_PUBLIC_CANDLE_API_KEY || "", debug: true });
  const [changesMade, setChangesMade] = useState(false);
  const me: any = useUserStore((state) => state.me);
  const setMe: any = useUserStore((state) => state.setMe);
  const setCalendar: any = useCalendarStore((state) => state.setCalendar);
  const setAvailabilities: any = useCalendarStore((state) => state.setAvailabilities);
  const availabilities: any = useCalendarStore((state) => state.availabilities);
  const [hasSpecificDays, setHasSpecificDays] = useState(false);
  const [showSpecificDaysEditor, setShowSpecificDaysEditor] = useState(false);

  const saveChanges = async () => {
    let { accessToken } = getAuthTokens();
    const { error, data } = await candle.users.modifyUser(me, accessToken as string);
    if (error) {
      return;
    }
    setMe(data);
    setChangesMade(false);
  };

  const getAvailability = async () => {
    let { accessToken } = getAuthTokens();
    const { error, data } = await candle.calendars.retrieveUserAvailability(me.id, accessToken as string);
    if (error) return;
    setCalendar(data);
    setAvailabilities(data.availability);

    const _hasSpecificDays = data.availability.some((a: any) => !a.dayOfWeek);
    setHasSpecificDays(_hasSpecificDays);
  };

  useEffect(() => {
    if (!me) return;
    getAvailability();
  }, [me]);

  if (!me) return null;

  return (
    <div className="flex-1 py-4 px-14 space-y-8 border-l border-cndl-neutral-100 max-w-4xl">
      <div className="flex w-full justify-between items-center">
        <h2 className="text-lg text-cndl-neutral-700 font-bold">Availability</h2>
        <Button className="space-x-2" variant="default" disabled={!changesMade} onClick={saveChanges}>
          <SaveIcon size={16} /> <span>Save Changes</span>
        </Button>
      </div>
      <div className="flex space-x-8 w-full">
        <div className=" w-3/5">
          <div className="border border-cndl-primary-50 rounded-lg py-4 px-4 space-y-8">{availabilities && <Availabilities />}</div>
        </div>
        <div className="w-2/5 space-y-8">
          <div className="border border-cndl-primary-50 rounded-lg py-4 px-4 space-y-8">
            <div className="">
              <h2 className="text-lg text-cndl-dark font-bold">Date-specific hours</h2>
              <p className="text-cndl-neutral-700 text-sm">Override your availability for specific dates</p>
            </div>
            <Button className="space-x-2" size="sm" variant="secondary" onClick={() => setShowSpecificDaysEditor(!showSpecificDaysEditor)}>
              <span>
                <PlusIcon size={16} />
              </span>
              <span>Add Specific Hours</span>
            </Button>
          </div>
          {(hasSpecificDays || showSpecificDaysEditor) && (
            <div className="border border-cndl-primary-50 rounded-lg py-4 px-4 space-y-8">
              {showSpecificDaysEditor && <SpecificDatesEditor applyChanges={() => setShowSpecificDaysEditor(!showSpecificDaysEditor)} />}
              {hasSpecificDays && <SpecificDatesViewer />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
