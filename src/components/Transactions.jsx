export function Transactions(){
    return ( 
        <div className="my-6 px-5">
            <div className="text-left text-xl font-medium">
                Transactions | This Month
            </div>
            <div className="flex mt-5">
                <button className="bg-gray-200 rounded-3xl px-4 py-1.5 text-gray-600 font-normal">Payouts (22) </button>
                <button className="bg-blue-700 rounded-3xl px-4 py-1.5 text-gray-100 text- ml-4 font-normal">Refunds (6)</button>
            </div>
        </div>
    )
}