import Image from 'next/image'

import { GoMail } from "react-icons/go";

const AttendeeDetails = () => {
  return (
    <div className='text-textLight'>
        <div className="w-full p-6 pb-12 rounded-3xl border border-borderLight bg-[#052228]">
            <h2 className='mb-8 text-textLight'>Upload Profile Photo</h2>
            <div className="md:bg-background h-[12.5rem] relative">
                <div className="cursor-pointer p-6 rounded-[2rem] bg-[#0E464F] border-4 border-[#24A0B5] text-white size-60 flex flex-col items-center justify-center gap-4 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <Image
                        src="/upload.png"
                        alt="Upload to cloud icon"
                        width={27}
                        height={19}
                    />
                    <p className='text-center'>Drag & drop or click to upload</p>
                </div>
            </div>
        </div>
            <div className='bg-borderLight h-1 w-full my-8' />
            <form className='flex flex-col gap-8'>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Enter your name *</label>
                    <input className='border border-borderLight p-3 rounded-xl bg-transparent outline-none focus:border-primary' type="text" id="name" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Enter your email *</label>
                    <div className="w-full relative">
                        <GoMail className='size-5 absolute top-1/2 -translate-y-1/2 left-3' />
                        <input placeholder='hello@avioflagos.io' className='w-full border border-borderLight p-3 pl-10 rounded-xl bg-transparent outline-none focus:border-primary' type="email" id="email" />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="request">Special Request?</label>
                    <textarea placeholder='Textarea' className='border border-borderLight p-3 rounded-xl bg-transparent outline-none focus:border-primary' id="request" />
                </div>
            </form>
    </div>
  )
}

export default AttendeeDetails