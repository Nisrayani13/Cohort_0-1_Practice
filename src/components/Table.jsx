import { orderData } from "./data";

export function Table() {
  return (
    <div className="mt-4 ml-10">
        <table class="table-auto w-full text-gray-600">
        <thead>
            <tr> 
            <th className="font-normal py-4 text-left">ORDER ID</th>
            <th className="font-normal py-4 text-left">STATUS</th>
            <th className="font-normal py-4 text-left">TRANSACTION ID</th>
            <th className="font-normal py-4 text-left">REFUND DATE</th>
            <th className="font-normal py-4 text-right">ORDER AMOUNT</th>
            </tr>
        </thead>
        <tbody>
            {orderData.map((data)=>{
                return <tr className="border-b">
                    <td className="py-4 text-sm text-blue-700 text-left"> #{data.id} </td>
                    <td className="flex py-4 text-sm"> 
                        <StatusIndicator status={data.status}></StatusIndicator>
                        <div className="text-center">{data.status}</div>
                    </td>
                    <td className="py-4 text-sm text-left"> {data.transactionID} </td>
                    <td className="py-4 text-sm text-left"> {data.refundDate} </td>
                    <td className="py-4 text-sm text-right"> {data.amount} </td>
                </tr>
            })
            }
        </tbody>
        </table>
    </div>
  );
}

function StatusIndicator({status}){
    console.log(status);
    if(status==="Successful"){
        return <div className="mt-2 mr-1 w-2 h-2 bg-green-500 rounded-full"></div>
    }
    else if(status==="Failed"){
        return <div className="mt-2 mr-1 w-2 h-2 bg-red-500 rounded-full"></div>
    }
    else{
        return <div className="mt-2 mr-1 w-2 h-2 bg-gray-400 rounded-full"></div>
    }
}