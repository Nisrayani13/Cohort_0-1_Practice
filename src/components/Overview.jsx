import { BlueCard } from "./BlueCard"
import { RevenueCard } from "./RevenueCard"

export function Overview(){
    return <div>
        <h2 className="text-left m-3 text-xl">Overview</h2>
        <div className="grid grid-cols-3">
          <BlueCard title={"Next payout"} amount={"2,312.23"} orderCount={"23"} ></BlueCard>
          <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={"13"}></RevenueCard>
          <RevenueCard title={"Amount Processed"} amount={"23,92,312.19"}></RevenueCard>    
        </div>
    </div>
}