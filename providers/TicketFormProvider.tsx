"use client"

import { useEffect, useState } from "react"

import TicketFormContext, { ITicket } from "@/context/TicketFormContext"

const TicketFormProvider = ({children}:{children: React.ReactNode}) => {
    // Get ticket details from the local storege
    const ticketDetailsFromStorage = 
        typeof localStorage != "undefined" && localStorage.getItem("ticketForm") 
            ? JSON.parse(localStorage.getItem("ticketForm")!)
            : {
                type: "regular",
                name: "",
                email: "",
                request: "",
            }

    const [ticketDetails, setTicketDetails] = useState<ITicket>(ticketDetailsFromStorage)

    const [isMounted, setIsMounted] = useState(false)

    // To fix hydration errors
    useEffect(() => {
        setIsMounted(true)
    }, [])

    const updateTicketDetails = (name: string, value: string) => {
        setTicketDetails((prev) => ({...prev, [name]: value}))
    }

    if(!isMounted){
        return <></>
    }

    return <TicketFormContext.Provider value={{ticketDetails, updateTicketDetails}}>{children}</TicketFormContext.Provider>
}

export default TicketFormProvider;