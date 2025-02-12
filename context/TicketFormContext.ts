import { createContext } from "react";

export interface ITicket {
    type: "regular" | "vip" | "vvip",
    name: string,
    email: string,
    request: string,
}

export interface ITicketFormContext {
    ticketDetails: ITicket,
    updateTicketDetails: (name: string, value: string) => void,
    resetTicketDetails: () => void
}

const TicketFormContext = createContext<ITicketFormContext>({
    ticketDetails: {
        type: "regular",
        name: "",
        email: "",
        request: "",
    },
    updateTicketDetails: () => null,
    resetTicketDetails: () => null
})

export default TicketFormContext;