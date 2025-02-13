import { createContext } from "react";

export type TErrors = { name?: string; email?: string }

export interface ITicket {
    type: "regular" | "vip" | "vvip",
    name: string,
    email: string,
    request: string,
    url: string,
}

export interface ITicketFormContext {
    ticketDetails: ITicket,
    updateTicketDetails: (name: string, value: string) => void,
    resetTicketDetails: () => void,
    errors: TErrors
    updateErrors: (error: TErrors) => void
}

const TicketFormContext = createContext<ITicketFormContext>({
    ticketDetails: {
        type: "regular",
        name: "",
        email: "",
        request: "",
        url: "",
    },
    errors: {},
    updateErrors: () => null,
    updateTicketDetails: () => null,
    resetTicketDetails: () => null
})

export default TicketFormContext;