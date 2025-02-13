"use client"

import TicketFormContext from "@/context/TicketFormContext"
import Image from "next/image"
import { useContext } from "react"

import {motion} from "motion/react"

const DownloadTicket = () => {
    const {ticketDetails} = useContext(TicketFormContext)

  return (
    <motion.div
        initial={{
            x: "100%",
            opacity: 0
        }}
        animate={{
            x: 0,
            opacity: 1,
            transition: { duration: .5, delay: .3}
        }} 
        exit={{
            x: "-100%",
            opacity: 0,
            transition: { duration: .3}
        }}  
        className="text-white">
        <h2 className="text-2xl md:text-3xl text-center">Your Ticket is Booked!</h2>
        <p className="text-textLight text-center mt-4 mb-8">Check your email for a copy or you can <button className="text-white">download</button></p>
        <div className="flex justify-center md:p-6">
            <div className="w-[300px] h-[600px] relative">
                <Image
                    src="/ticketBg.png"
                    alt="Ticket Gradient Background"
                    fill
                />
                <div className="w-[260px] h-[446px] p-3.5 rounded-2xl border border-[#24A0B5] bg-[#031E21]/10 absolute top-4 left-1/2 -translate-x-1/2 text-center">
                    <h2 className='text-4xl font-road-rage'>Techember Fest ”25</h2>
                    <p className="text-[10px]">📍 04 Rumens road, Ikoyi, Lagos</p>
                    <p className="text-[10px]">📅 March 15, 2025 | 7:00 PM</p>
                    <div className="size-36 border-4 border-[#24A0B5]/50 rounded-xl mx-auto my-5 overflow-hidden relative">
                            { ticketDetails.url && <Image 
                                    src={ticketDetails.url}
                                    alt="User Image"
                                    fill
                                    className='object-cover'
                                />   }                 
                    </div>
                    <div className="bg-[#08343C] border border-[#133D44] w-full rounded-lg p-1 text-left">
                        <div className="flex items-center">
                            <div className="w-full p-1">
                                <h4 className="text-[10px] opacity-[33%] mb-1">Enter your name</h4>
                                <p className="text-[10px] font-bold">{ticketDetails.name}</p>
                            </div>
                            <div className="w-full border-l border-[#12464E] pl-2.5 p-1">
                                <h4 className="text-[10px] opacity-[33%] mb-1">Enter your email</h4>
                                <p className="text-[10px] font-bold">{ticketDetails.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center border-y border-[#12464E]">
                            <div className="w-full p-1">
                                <h4 className="text-[10px] opacity-[33%] mb-1">Ticket Type</h4>
                                <p className="text-[12px] font-bold uppercase">{ticketDetails.type}</p>
                            </div>
                            <div className="w-full border-l border-[#12464E] pl-2.5 p-1">
                                <h4 className="text-[10px] opacity-[33%] mb-1">Ticket for</h4>
                                <p className="text-[12px] font-bold">{ticketDetails.noOfTickets}</p>
                            </div>
                        </div>
                        <div className="w-full p-2">
                            <h4 className="text-[10px] opacity-[33%] mb-1">Special request?</h4>
                            <p className="text-[10px] font-bold line-clamp-2">{ticketDetails.request ? ticketDetails.request : "Nil"}</p>
                        </div>
                    </div>
                </div>
                <Image
                    src="/barCode.png"
                    alt="Ticket Bar code"
                    width={236}
                    height={68}
                    className="absolute bottom-5 left-1/2 -translate-x-1/2"
                />
            </div>
        </div>
    </motion.div>
  )
}

export default DownloadTicket