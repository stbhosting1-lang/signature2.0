export const dynamic = "force-static";
import React from 'react'
import Image from 'next/image'
import heroImg from "../../../public/contact.webp"
import addressImg from "../../../public/Address.webp"
import clockIcon from "../../../public/time.svg"
import phoneIcon from "../../../public/mobile.svg"
import addressIcon from "../../../public/maps.svg"

export const metadata = {
    title: "Contact Us",
    description: "Get in touch with Signature Restaurant in Brampton. Find our location, opening hours, phone number, and connect with us for reservations or inquiries.",
    keywords: [
        "Signature Restaurant contact",
        "restaurant Brampton",
        "contact number",
        "restaurant location",
        "reservation",
        "customer support"
    ],
};

const page = () => {
    return (
        <div className="w-full bg-background py-5 overflow-x-hidden">

            {/* GRID WRAPPER */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 px-4 relative">

                {/* LEFT SIDE HERO */}
                <div className="relative w-full lg:w-[650px] 2xl:w-[1100px] h-[400px] sm:h-[400px] md:h-[550px] lg:h-[600px] 2xl:h-[850px] rounded-[20px] rounded-tl-[40px] overflow-hidden">
                    <Image
                        src={heroImg}
                        alt="Signature Restaurant Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* RIGHT SIDE CONTENT */}
                <div className="flex flex-col gap-6 items-center lg:items-end w-full">

                    {/* Contact Info Card */}
                    <div className='w-full max-w-[700px] border-aboutCardBorder border bg-aboutCardBorder/5 rounded-lg p-4 flex flex-col gap-5'>
                        <h3 className='text-[24px] sm:text-[22px] font-heading italic text-aboutCardHeading'>
                            Contact Info
                        </h3>

                        <a
                            href="https://share.google/aVoHTrBu7GD0q7O33"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-auto block"
                        >
                            <Image
                                src={addressImg}
                                alt='addressImg'
                                className='w-full h-auto cursor-pointer'
                                priority
                            />
                        </a>
                    </div>


                    {/* Info Card */}
                    <div className="w-full max-w-[700px] h-auto bg-infoCardBg rounded-xl p-6 sm:p-8">
                        <div className="flex flex-col gap-6 sm:gap-8">

                            {/* Opening Hours */}
                            <div>
                                <p className="text-infocardText/60 text-[14px] sm:text-[15px] font-body font-[400]">Opening Hours</p>
                                <div className="flex  flex-col gap-2 mt-1">
                                    <div className="flex justify-between">
                                        <p className="text-[14px] sm:text-[15px] font-body text-secondary">Mon - Thu</p>
                                        <p className="text-[14px] sm:text-[15px] font-body text-secondary">
                                            4:00 PM - 2:00 AM
                                        </p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-[14px] sm:text-[15px] font-body text-secondary">Fri - Sun</p>
                                        <p className="text-[14px] sm:text-[15px] font-body text-secondary">
                                            12:00 PM - 2:00 AM
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact */}
                            <div className='flex flex-col gap-2'>
                                <p className="text-infocardText/60 text-[14px] sm:text-[15px] font-body">Contact #</p>
                                <p className="text-[15px] font-body text-secondary flex items-center gap-2">
                                    <Image src={phoneIcon} alt='phoneIcon' />
                                    +1 905-459-5559
                                </p>
                            </div>

                            {/* Location */}
                            <div className='flex flex-col gap-2'>
                                <p className="text-infocardText/60 text-[14px] sm:text-[15px] font-body">Location</p>
                                <p className="text-[15px] font-body text-secondary flex items-center gap-2">
                                    <Image src={addressIcon} alt='addressIcon' />
                                    378 Queen St E, Brampton, ON L6V 1C3, Canada
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Contact Form Card */}
                    <div className='w-full max-w-[700px] border-aboutCardBorder border bg-aboutCardBorder/5 rounded-lg p-4'>
                        <h3 className='text-[24px] sm:text-[22px] font-heading italic text-aboutCardHeading'>Contact Our Team</h3>

                        <form className="mt-4">
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                                <div className='flex flex-col gap-2'>
                                    <label className='text-[18px] font-heading italic text-aboutCardHeading'>First Name</label>
                                    <input type="text" className='bg-contactFormInputColor rounded-lg p-3 w-full' placeholder='Jane' />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <label className='text-[18px] font-heading italic text-aboutCardHeading'>Last Name</label>
                                    <input type="text" className='bg-contactFormInputColor rounded-lg p-3 w-full' placeholder='Doe' />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <label className='text-[18px] font-heading italic text-aboutCardHeading'>Contact No</label>
                                    <input type="text" className='bg-contactFormInputColor rounded-lg p-3 w-full' placeholder='Your phone#' />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <label className='text-[18px] font-heading italic text-aboutCardHeading'>Email</label>
                                    <input type="text" className='bg-contactFormInputColor rounded-lg p-3 w-full' placeholder='Your email address' />
                                </div>

                                <div className='flex flex-col gap-2 md:col-span-2'>
                                    <label className='text-[18px] font-heading italic text-aboutCardHeading'>Message</label>
                                    <textarea className='bg-contactFormInputColor rounded-lg p-3 w-full h-48 resize-none' placeholder='Type your message here' />
                                </div>

                                <div className='md:col-span-2'>
                                    <button type="submit" className='w-full font-body font-[500] py-3 rounded-lg bg-gradient-to-r from-cardGradient to-bookTableBg'>
                                        <p className='text-bookTableText font-[300] font-body text-[14px]'>Send Message</p>
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page
