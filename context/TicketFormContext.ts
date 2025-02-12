import { createContext } from "react";

export interface ITicket {
    type: "regular" | "vip" | "vvip",
    name: string,
    email: string,
    request: string,
}

export interface ITicketFormContext {
    ticketDetails: ITicket,
    updateTicketDetails: (name: string, value: string) => void
}

const TicketFormContext = createContext<ITicketFormContext>({
    ticketDetails: {
        type: "regular",
        name: "",
        email: "",
        request: "",
    },
    updateTicketDetails: () => null
})

export default TicketFormContext;