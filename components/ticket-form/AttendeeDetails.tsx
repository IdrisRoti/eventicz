"use client"

import Image from 'next/image'
import { useContext } from 'react';

import TicketFormContext from '@/context/TicketFormContext';

import { GoMail } from "react-icons/go";
import { CldUploadButton, CloudinaryUploadWidgetResults } from 'next-cloudinary';
import { useRouter } from 'next/navigation';

const AttendeeDetails = () => {
    const {ticketDetails, updateTicketDetails} = useContext(TicketFormContext);

    const router = useRouter();

    const handleInputChange = (name: string, value: string) => {
        updateTicketDetails(name, value)
        
        if(typeof localStorage !== "undefined") {
            localStorage.setItem("ticketForm", JSON.stringify({...ticketDetails, [name]: value}))
        }
    }

    const handleImageUpload = (result: CloudinaryUploadWidgetResults) => {
        const info = result.info as object;

        if ("secure_url" in info){
            const url = info.secure_url as string;

            updateTicketDetails("url", url)

            if(typeof localStorage !== "undefined") {
                localStorage.setItem("ticketForm", JSON.stringify({...ticketDetails, url}))
            }

            router.refresh()
        }
    }

    const removeImage = () => {
        updateTicketDetails("url", "")

        if(typeof localStorage !== "undefined") {
            localStorage.setItem("ticketForm", JSON.stringify({...ticketDetails, url: ""}))
        }
    }

  return (
    <div className='text-textLight'>
        <div className="w-full p-6 pb-12 rounded-3xl border border-borderLight bg-[#052228]">
            <h2 className='mb-8 text-textLight'>Upload Profile Photo</h2>
            <div className="md:bg-background h-[12.5rem] relative">
                <div className="cursor-pointer rounded-[2rem] bg-[#0E464F] border-4 border-[#24A0B5] text-white size-60 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 overflow-hidden">
                    {
                        ticketDetails.url ?(
                            <div className='size-60 relative group'>
                                <Image 
                                    src={ticketDetails.url}
                                    alt="User Image"
                                    fill
                                    className='object-cover'
                                />
                                <div onClick={removeImage} className='absolute inset-0 z-10 bg-black/30 hidden group-hover:flex flex-col items-center justify-center gap-4 transition duration-500'>
                                    <Image
                                            src="/upload.png"
                                            alt="Upload to cloud icon"
                                            width={27}
                                            height={19}
                                        />
                                    <p className='text-center p-6 pt-0'>Drag & drop or click to upload</p>
                                </div>
                            </div>
                        ) : (
                                <CldUploadButton
                                    uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                                    onSuccess={(result, {close}) => {
                                        handleImageUpload(result);
                                        close();
                                    }}
                                    className='flex flex-col items-center justify-center gap-4 w-full h-full'
                                >
                                    <Image
                                        src="/upload.png"
                                        alt="Upload to cloud icon"
                                        width={27}
                                        height={19}
                                    />
                                    <p className='text-center'>Drag & drop or click to upload</p>
                                </CldUploadButton>
                        )
                    }
                </div>
            </div>
        </div>
            <div className='bg-borderLight h-1 w-full my-8' />
            <form className='flex flex-col gap-8'>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Enter your name *</label>
                    <input value={ticketDetails.name} onChange={(e) => handleInputChange("name", e.target.value)} className='border border-borderLight p-3 rounded-xl bg-transparent outline-none focus:border-primary' type="text" id="name" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Enter your email *</label>
                    <div className="w-full relative">
                        <GoMail className='size-5 absolute top-1/2 -translate-y-1/2 left-3' />
                        <input value={ticketDetails.email} onChange={(e) => handleInputChange("email", e.target.value)} placeholder='hello@avioflagos.io' className='w-full border border-borderLight p-3 pl-10 rounded-xl bg-transparent outline-none focus:border-primary' type="email" id="email" />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="request">Special Request?</label>
                    <textarea value={ticketDetails.request} onChange={(e) => handleInputChange("request", e.target.value)} placeholder='Textarea' className='border border-borderLight p-3 rounded-xl bg-transparent outline-none focus:border-primary' id="request" />
                </div>
            </form>
    </div>
  )
}

export default AttendeeDetails