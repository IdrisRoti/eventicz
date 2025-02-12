"use client"

import { useState } from "react"
import AttendeeDetails from "./AttendeeDetails"
import TicketSelection from "./TicketSelection"

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
    }
]

const TicketForm = () => {
    const [formStep, setFormStep] = useState(1)

    const handleFormStepChange = (type: "Next" | "Back") => {
        if(type === "Next") setFormStep(prev => prev + 1);
        if(type === "Back") setFormStep(prev => prev - 1);
    }

  return (
    <div className="bg-[#08252B] md:bg-[#041E23] rounded-[2rem] md:rounded-[2.5rem] border-[#0E464F] p-6 md:p-12 mt-28 md:mt-32 max-w-[43.75rem] mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-3">
            <h1 className="text-2xl md:text-3xl text-white capitalize font-jeju">{formSteps[formStep - 1].label}</h1>
            <span className="text-textLight">Step {formStep}/{formSteps.length}</span>
        </div>
        <div className="relative w-full h-1 rounded-[5px] bg-[#0E464F] overflow-hidden mt-4">
            <div
                style={{
                    width: `${formStep/formSteps.length * 100}%`
                }} 
                className="h-full bg-[#24A0B5]" />
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
                {
                    formStep === 1 ? (
                        <button className="h-12 md:h-full w-full border border-[#24A0B5] text-[#24A0B5] rounded-md">Cancel</button>
                    ) : (
                        <button onClick={() => handleFormStepChange("Back")} className="h-12 md:h-full w-full border border-[#24A0B5] text-[#24A0B5] rounded-md">Back</button>
                    )
                }
                <button onClick={() => handleFormStepChange("Next")} className="h-12 md:h-full w-full border border-[#24A0B5] text-white bg-[#24A0B5] rounded-md">Next</button>
            </div>
        </div>
    </div>
  )
}

export default TicketForm