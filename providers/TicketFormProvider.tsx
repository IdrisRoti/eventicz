"use client"


import { useEffect, useState } from "react"

import TicketFormContext, { ITicket, TErrors } from "@/context/TicketFormContext"

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
                url: ""
            }

    const [ticketDetails, setTicketDetails] = useState<ITicket>(ticketDetailsFromStorage);

    const [errors, setErrors] = useState<TErrors>({});

    const updateErrors = (error: TErrors) => {
        setErrors(error)
    }

    // To fix hydration errors
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const updateTicketDetails = (name: string, value: string) => {
        setTicketDetails((prev) => ({...prev, [name]: value}))
    }

    const resetTicketDetails = () => {
        setTicketDetails({
            type: "regular",
            name: "",
            email: "",
            request: "",
            url: ""
        })

        if(typeof localStorage !== "undefined") {
            localStorage.removeItem("ticketForm");
        }
    }

    if(!isMounted){
        return <></>
    }

    return <TicketFormContext.Provider value={{ticketDetails, updateTicketDetails, resetTicketDetails, errors, updateErrors}}>{children}</TicketFormContext.Provider>
}

export default TicketFormProvider;