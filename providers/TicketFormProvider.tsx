"use client"

import { useState } from "react"

import TicketFormContext from "@/context/TicketFormContext"

const TicketFormProvider = ({children}:{children: React.ReactNode}) => {
    const [ticketDetails, setTicketDetails] = useState({
        type: "Free",
        name: "",
        email: "",
        request: "",
    })

    const updateTicketDetails = (name: string, value: string) => {
        setTicketDetails((prev) => ({...prev, [name]: value}))
    }

    return <TicketFormContext.Provider value={{ticketDetails, updateTicketDetails}}>{children}</TicketFormContext.Provider>
}

export default TicketFormProvider;