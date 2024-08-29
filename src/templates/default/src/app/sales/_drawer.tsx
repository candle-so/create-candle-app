import { ContextDrawer } from "@/components/context_drawer";
import { NameBadge } from "@/components/name_badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getAuthTokens } from "@/lib/_cookies";
import { calculateTimeDifference, formatDate } from "@/lib/time";
import { useCalendarStore } from "@/store/calendar.store";
import { useContractStore } from "@/store/contract.store";
import Candle from "@candle-so/node";
import candleConfig from "@/lib/candle.config";
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { IContractBuyer, IContractItem, IContractSeller } from "schema-interface";

export const SalesDrawer = ({ me, openDrawer, onDrawClose }: { me: any; openDrawer: boolean; onDrawClose: (e: any) => void }) => {
  const candle = Candle.init(candleConfig);
  const contract = useContractStore((state) => state.contract);
  const availabilities = useCalendarStore((state) => state.availabilities);
  const setAvailabilities = useCalendarStore((state) => state.setAvailabilities);

  const [weeklyCommitment, setWeeklyCommitment] = useState(0);

  const buyers: IContractBuyer[] = contract?.buyers || [];
  const seller: IContractSeller[] = contract?.sellers?.filter((seller: any) => seller.user_id !== me?.id) || [];
  const contractItem: IContractItem = contract?.items?.find((item: any) => item.product.user_id === me?.id) as IContractItem;

  const getAvailabilities = async () => {
    let { accessToken } = getAuthTokens();
    const { error, data } = await candle.calendars.retrieveUserAvailability(me?.id, accessToken as string);
    if (error) return;
    setAvailabilities(data.availability);
  };

  const calculateHoursPerWeek = () => {
    let hoursPerWeek = 0;
    availabilities?.forEach((availability: any) => {
      const hoursAvailable = calculateTimeDifference({
        t1: availability.startTime,
        t2: availability.endTime,
        limiter: "hours",
        format: "HH:mm:ss",
      });
      hoursPerWeek += hoursAvailable;
    });
    setWeeklyCommitment(hoursPerWeek);
  };

  const drawerTitle = (
    <div className="flex space-x-2 items-center">
      <div className="font-bold">Incoming request /</div>
      <div className="text-cndl-neutral-700 font-normal text-sm">
        <div className="flex flex-wrap items-center gap-2">
          {contract?.items?.map((item) => (
            <div className="" key={item.id}>
              {item.description}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    if (availabilities) calculateHoursPerWeek();
    if (!availabilities) getAvailabilities();
  }, [availabilities]);

  return (
    <ContextDrawer open={openDrawer} title={drawerTitle} onCloseDraw={onDrawClose}>
      <div className="space-y-8 pt-4">
        <div className="overflow-auto text-cndl-neutral-800 p-4 space-y-4 border rounded-md">
          <div className="text-lg font-bold text-cndl-dark">Project Summary:</div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex flex-wrap items-center gap-2">
              {contract?.items?.map((item) => (
                <div className="text-cndl-neutral-700 font-bold border-b border-cndl-dark border-dashed italic" key={item.id}>
                  {item.description}
                </div>
              ))}
            </div>
            <div>with</div>
            <div className="flex flex-wrap items-center gap-2">
              {buyers?.map((buyer) => (
                <div key={buyer.id}>
                  <NameBadge user={buyer as any} role="buyer" />
                </div>
              ))}
            </div>
            {seller?.length > 0 && <div>and</div>}
            {seller?.map((seller) => (
              <div key={seller.id}>
                <NameBadge user={seller as any} role="seller" />
              </div>
            ))}
            {contractItem && (
              <div className="flex flex-wrap items-center gap-2">
                <div>expected to work</div>
                <div className="">from</div>
                <div className="text-cndl-neutral-700 font-bold border-b border-cndl-dark border-dashed italic">{formatDate({ dateString: `${contractItem.startDate}` }).fullDate}</div>
                <div>to</div>
                <div className="text-cndl-neutral-700 font-bold border-b border-cndl-dark border-dashed italic">{formatDate({ dateString: `${contractItem.endDate}` }).fullDate}</div>
              </div>
            )}
          </div>
        </div>
        <div className="text-cndl-neutral-800 p-4 space-y-4 border rounded-md">
          <div className="">
            <Label className="text-lg font-bold text-cndl-dark" htmlFor="weekly_commitment">
              Weekly Commitment:
            </Label>
            <p className="text-cndl-neutral-800 text-sm">How many hours per week do you think you can commit to this project?</p>
          </div>
          <Input
            id="weekly_commitment"
            name="weekly_commitment"
            className="input-primary"
            type="number"
            placeholder=""
            value={weeklyCommitment}
            max={weeklyCommitment}
            onChange={(e) => {
              setWeeklyCommitment(parseInt(e.target.value));
            }}
          />
        </div>
      </div>
      <div className="px-4 pt-8 flex space-x-4">
        <Button variant="ghost" className="btn-primary-positive" onClick={onDrawClose}>
          <ThumbsUpIcon size={18} />
          <span>Approve</span>
        </Button>
        <Button variant="ghost" className="btn-primary-negative" onClick={onDrawClose}>
          <ThumbsDownIcon size={18} />
          <span>Reject</span>
        </Button>
      </div>
    </ContextDrawer>
  );
};
