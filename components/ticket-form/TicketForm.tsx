"use client"

import { useContext, useState } from "react"

import TicketFormContext from "@/context/TicketFormContext"
import AttendeeDetails, { formSchema } from "./AttendeeDetails"
import TicketSelection from "./TicketSelection"
import DownloadTicket from "./DownloadTicket"
import toast from "react-hot-toast"

const formSteps = [
    {
        step: 1,
        label: "Ticket Selection",
        component: TicketSelection
    },
    {
        step: 2,
        label: "Attendee Details",
        component: AttendeeDetails
    },
    {
        step: 3,
        label: "Ready",
        component: DownloadTicket
    }
]

const TicketForm = () => {
    const [formStep, setFormStep] = useState(1);

    const {ticketDetails, resetTicketDetails, updateErrors} = useContext(TicketFormContext);

    const handleFormStepChange = (type: "Next" | "Back" | "Submit" | "reset") => {
        if(type === "Next") setFormStep(prev => prev + 1);
        if(type === "Back") setFormStep(prev => prev - 1);

        if(type === "reset") {
            resetTicketDetails()
           setFormStep(1)
        }

        if(type === "Submit") {
            const {name, email} = ticketDetails
            const formatInput = formSchema.safeParse({name, email});

            if(!formatInput.success){
                const errorMessages = formatInput.error.format();
                updateErrors({
                    name: errorMessages.name?._errors[0],
                    email: errorMessages.email?._errors[0]
                })
                return
            } else {
                if(!ticketDetails.url) {
                    toast.error("Please add your image!");
                    return
                }

                setFormStep(prev => prev + 1);
                updateErrors({})
            }
            console.log(ticketDetails)
        }
    }


  return (
    <>
    <div className="bg-[#08252B] md:bg-[#041E23] rounded-[2rem] md:rounded-[2.5rem] border border-[#0E464F] p-6 md:p-12 mt-28 md:mt-32 max-w-[43.75rem] mx-auto relative z-10">
        <div className="flex flex-row justify-between md:items-center gap-3">
            <h1 className="text-2xl md:text-3xl text-white capitalize font-jeju">{formSteps[formStep - 1].label}</h1>
            <span className="text-textLight">Step {formStep}/{formSteps.length}</span>
        </div>
        <div className="relative w-full h-1 rounded-[5px] bg-[#0E464F] overflow-hidden mt-4">
            <div
                style={{
                    width: `${formStep/formSteps.length * 100}%`
                }} 
                className="h-full bg-[#24A0B5]" 
            />
        </div>
        <div className="mt-8 md:bg-[#08252B] md:border border-[#0E464F] rounded-[2rem] md:p-6">
            {
                formSteps.map(({step, component: Component}) => (
                    step === formStep ? (
                        <Component key={step} />
                    ) : null
                ))
            }
            <div className="rounded-3xl md:h-12 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-8">
                { formStep === 1 && <button onClick={() => handleFormStepChange("reset")} className="font-jeju h-12 md:h-full w-full border border-[#24A0B5] text-[#24A0B5] rounded-md hover:opacity-60 transition">Cancel</button>}
                {formStep === 2 && <button onClick={() => handleFormStepChange("Back")} className="font-jeju h-12 md:h-full w-full border border-[#24A0B5] text-[#24A0B5] rounded-md hover:opacity-60 transition">Back</button>}
                {formStep === 3 && <button onClick={() => handleFormStepChange("reset")} className="font-jeju h-12 md:h-full w-full border border-[#24A0B5] text-[#24A0B5] rounded-md hover:opacity-60 transition">Book Another Ticket</button>}
                
                { formStep === 1 && <button onClick={() => handleFormStepChange("Next")} className="font-jeju h-12 md:h-full w-full border border-[#24A0B5] text-white bg-[#24A0B5] rounded-md hover:opacity-60 transition max-md:-order-1">Next</button>}
                { formStep === 2 && <button onClick={() => handleFormStepChange("Submit")} className="font-jeju h-12 md:h-full w-full border border-[#24A0B5] text-white bg-[#24A0B5] rounded-md hover:opacity-60 transition max-md:-order-1">Get My Free Ticket</button>}
                { formStep === 3 && <button onClick={() => toast.success("Ticket Downloaded")} className="font-jeju h-12 md:h-full w-full border border-[#24A0B5] text-white bg-[#24A0B5] rounded-md hover:opacity-60 transition max-md:-order-1">Download Ticket</button>}
            </div>
        </div>
    </div>
    <div className="bg-primary w-full h-[10rem] absolute rounded-full bottom-0 left-0 blur-3xl opacity-30 hidden md:block" />
    </>
  )
}

export default TicketForm