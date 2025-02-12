import { createContext } from "react";

interface ITicketFormContext {
    ticketDetails: {
        type:string,
        name: string,
        email: string,
        request: string,
    },
    updateTicketDetails: (name: string, value: string) => void
}

const TicketFormContext = createContext<ITicketFormContext>({
    ticketDetails: {
        type: "Free",
        name: "",
        email: "",
        request: "",
    },
    updateTicketDetails: () => null
})

export default TicketFormContext;