import { BlueCard } from "./BlueCard"
import { RevenueCard } from "./RevenueCard"

export function Overview(){
    return <div>
        <div className="flex justify-between my-3.5 pl-5">
          <div className="text-left text-xl font-medium py-1.5">Overview</div>
          <div className="border border-gray-300 rounded-lg flex">
            <div className="pl-3 pr-1 py-1.5">This Month</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 mt-3 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>

          </div>
        </div>

        <div className="grid grid-cols-3 pl-5">
          <BlueCard title={"Next payout"} amount={"2,312.23"} orderCount={"23"} ></BlueCard>
          <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={"13"}></RevenueCard>
          <RevenueCard title={"Amount Processed"} amount={"23,92,312.19"}></RevenueCard>    
        </div>
    </div>
}