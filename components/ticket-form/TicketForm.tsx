
const TicketForm = () => {
  return (
    <div className="bg-[#041E23] rounded-[2.5rem] border-[#0E464F] p-12 mt-32 max-w-[43.75rem] mx-auto">
        <div className="flex justify-between items-center">
            <h1 className="text-3xl text-white underline">Ticket Selection</h1>
            <span className="text-textLight">Step 1/3</span>
        </div>
        <div className="relative w-full h-1 rounded-[5px] bg-[#0E464F] overflow-hidden mt-4">
            <div
                style={{
                    width: "1/3"
                }} 
                className="h-full bg-[#24A0B5]" />
        </div>
        <div className="mt-6 bg-[#08252B] border border-[#0E464F] rounded-[2rem] p-6">
            <div className="bg-[#041E23] border border-[#0E464F] rounded-3xl h-12 flex justify-center items-center gap-8">
                <button className="h-full border border-[#24A0B5] text-[#24A0B5] underline w-[13.375rem] rounded-md">Cancel</button>
                <button className="h-full border border-[#24A0B5] text-white bg-[#24A0B5] underline w-[13.375rem] rounded-md">Next</button>
            </div>
        </div>
    </div>
  )
}

export default TicketForm