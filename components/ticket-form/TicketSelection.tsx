import TicketFormContext from "@/context/TicketFormContext"
import { useContext } from "react"

const ticketTypes = [
    {
        id: 1,
        type: "regular",
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
] as const

const TicketSelection = () => {
    const {ticketDetails, updateTicketDetails} = useContext(TicketFormContext)

    const updateTicketType = (type: "regular" | "vip" | "vvip") => {
        updateTicketDetails("type", type)

        if(typeof localStorage !== "undefined") {
            localStorage.setItem("ticketForm", JSON.stringify({...ticketDetails, type: type}))
        }
    }

  return (
    <div>
            <section className='relative border border-borderLight rounded-3xl p-4 md:p-6 text-center text-textLight overflow-hidden'>
                <div className="relative z-10">
                    <h2 className='text-5xl md:text-6xl font-road-rage'>Techember Fest ”25</h2>
                    <p className='text-sm md:text-base  py-2 max-w-[21.25rem] mx-auto'>Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4 max-md:mt-6">
                        <span>📍 [Event Location]</span>
                        <span className="hidden md:block">| |</span>
                        <span>March 15, 2025 | 7:00 PM</span>
                    </div>
                </div>
                <div className="w-2/3 h-[80%] bg-[#07373f] top-0 left-0 absolute rounded-full blur-[20px]" />
            </section>
            <div className='bg-borderLight h-1 w-full my-8' />
            <section className="text-textLight">
                <h3 className='text-textLight mb-3 '>Select Ticket Type:</h3>
                <div className="grid grid-cols-3 items-center gap-4 p-4 border border-borderLight bg-[#052228] rounded-3xl">
                    {
                        ticketTypes.map(({id, type, price, amountLeft}) => {
                            return (
                                    <button
                                        onClick={() => updateTicketType(type)}
                                        className={`col-span-full md:col-span-1 border-2 border-[#197686] p-3 rounded-lg text-left ${ticketDetails.type === type && "bg-[#12464E] border-[#197686]"}`} 
                                        key={id}>
                                            <div className="text-xl rounded-md mb-3 font-semibold">{price ? `$${price}` : "Free"}</div>
                                            <p className="uppercase ">{type} access</p>
                                            <p className="text-sm w-fit ">{amountLeft}/52</p>
                                    </button>
                            )
                        })
                    }
                </div>
                <div className="my-8 flex flex-col gap-2">
                    <label htmlFor="Number of tickets" className='text-textLight mb-2'>Number of Tickets</label>
                    <select className="bg-transparent border border-borderLight w-full rounded-md h-12" name="" id="Number of tickets">
                        <option value="1">1</option>
                    </select>
                </div>
            </section>
    </div>
  )
}

export default TicketSelection