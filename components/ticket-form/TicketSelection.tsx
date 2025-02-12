const ticketTypes = [
    {
        id: 1,
        type: "Regular",
        price: null,
        amountLeft: 20,
    },
    {
        id: 2,
        type: "vip",
        price: 50,
        amountLeft: 20,
    },
    {
        id: 3,
        type: "vvip",
        price: 150,
        amountLeft: 20,
    },
]

const TicketSelection = () => {
  return (
    <div>
            <section className='border border-borderLight rounded-3xl p-4 md:p-6 text-center text-textLight'>
                <h2 className='text-5xl md:text-6xl '>Techember Fest ”25</h2>
                <p className='text-sm md:text-base  py-2 max-w-[21.25rem] mx-auto'>Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4  max-md:mt-6">
                    <span>📍 [Event Location]</span>
                    <span className="hidden md:block">| |</span>
                    <span>March 15, 2025 | 7:00 PM</span>
                </div>
            </section>
            <div className='bg-borderLight h-1 w-full my-8' />
            <section className="text-textLight">
                <h3 className='text-textLight mb-3 '>Select Ticket Type:</h3>
                <div className="grid grid-cols-3 items-center gap-4 p-4 border border-borderLight bg-[#052228] rounded-3xl">
                    {
                        ticketTypes.map(({id, type, price, amountLeft}) => {
                            return (
                                    <button
                                        className={`col-span-full md:col-span-1 border-2 border-[#197686] p-3 rounded-lg text-left ${id === 1 && "bg-[#12464E] border-[#197686]"}`} 
                                        key={id}>
                                            <div className="text-xl rounded-md mb-3">{price ? `$${price}` : "Free"}</div>
                                            <p className="uppercase ">{type} access</p>
                                            <p className="text-sm w-fit ">{amountLeft}/52</p>
                                    </button>
                            )
                        })
                    }
                </div>
                <div className="my-8 flex flex-col gap-2">
                    <label htmlFor="Number of tickets" className='text-textLight mb-2 '> Number of Tickets</label>
                    <select className="bg-transparent border border-borderLight w-full rounded-md h-12" name="" id="Number of tickets">
                        <option value="1">1</option>
                    </select>
                </div>
            </section>
    </div>
  )
}

export default TicketSelection