import React from 'react'
import Image from 'next/image'
import heroImg from "../../../public/contact.webp"
import addressImg from "../../../public/Address.webp"
import clockIcon from "../../../public/time.svg"
import phoneIcon from "../../../public/mobile.svg"
import addressIcon from "../../../public/maps.svg"
export const dynamic = "force-static";
// ⭐ OPTIMIZED METADATA FOR CONTACT PAGE ⭐
export const metadata = {
    // Basic SEO (Google & Browser)
    title: "Contact Us - Signature by Punjabland | Indian Fine Dining Brampton",
    description: "Get in touch with Signature by Punjabland in Brampton. Find our address, phone, hours and reservations info for premium Indian fine dining.",
    keywords: [
        "Signature Restaurant contact",
        "Brampton Indian restaurant contact",
        "378 Queen St E Brampton",
        "restaurant phone number Brampton",
        "Signature Restaurant location",
        "Brampton restaurant reservations",
        "Indian restaurant hours Brampton",
        "contact Indian restaurant",
        "restaurant near me Brampton",
        "book table Signature Restaurant",
        "Indian restaurant Queen Street",
        "Brampton dining reservations"
    ],
    
    // OpenGraph (Facebook, LinkedIn, WhatsApp)
    openGraph: {
        title: "Contact Signature Restaurant - Brampton Location",
        description: "Get in touch with Signature by Punjabland in Brampton. Find our address, phone, hours and reservations info for premium Indian fine dining.",
        url: "https://signature.punjabland.ca/contact",
        siteName: "Signature Restaurant",
        images: [
            {
                url: "https://signature.punjabland.ca/_next/static/media/contact.93106138.webp", // Use your contact/restaurant exterior image
                width: 1200,
                height: 630,
                alt: "Signature Restaurant location in Brampton - Contact us",
            },
        ],
        locale: "en_CA",
        type: "website",
    },
    
    // Twitter Card
    twitter: {
        card: "summary_large_image",
        title: "Contact Signature Restaurant Brampton",
        description: "Get in touch with Signature by Punjabland in Brampton. Find our address, phone, hours and reservations info for premium Indian fine dining.",
        images: ["https://signature.punjabland.ca/_next/static/media/contact.93106138.webp"],
    },
    
    // Canonical URL
    alternates: {
        canonical: "https://signature.punjabland.ca/contact",
    },
    
    // Robot Instructions
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

const page = () => {
    return (
        <div className="w-full bg-background py-5 overflow-x-hidden">
<h1 className="sr-only">
  Contact Signature by Punjabland – Indian Fine Dining Restaurant in Brampton
</h1>

            {/* GRID WRAPPER */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 px-4 relative">

                {/* LEFT SIDE HERO */}
                <div className="relative w-full lg:w-[650px] 2xl:w-[1100px] h-[400px] sm:h-[400px] md:h-[550px] lg:h-[600px] 2xl:h-[850px] rounded-[20px] rounded-tl-[40px] overflow-hidden">
                    <Image
                        src={heroImg}
                        alt="Contact Signature Restaurant in Brampton - Location, hours, and reservation information"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* RIGHT SIDE CONTENT */}
                <div className="flex flex-col gap-6 items-center lg:items-end w-full">

                    {/* Contact Info Card */}
                    <div className='w-full max-w-[700px] border-aboutCardBorder border bg-aboutCardBorder/5 rounded-lg p-4 flex flex-col gap-5'>
                        <h2 className='text-[24px] sm:text-[22px] font-heading italic text-aboutCardHeading'>
                            Contact Info
                        </h2>

                        <a
                            href="https://share.google/aVoHTrBu7GD0q7O33"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-auto block"
                            aria-label="View Signature Restaurant location on Google Maps"
                        >
                            <Image
                                src={addressImg}
                                alt='Signature Restaurant location map - 378 Queen St E, Brampton'
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
                                <a 
                                    href="tel:+19054595559" 
                                    className="text-[15px] font-body text-secondary flex items-center gap-2 hover:text-aboutCardHeading transition-colors"
                                    aria-label="Call Signature Restaurant at 905-459-5559"
                                >
                                    <Image src={phoneIcon} alt='Phone icon' />
                                    +1 905-459-5559
                                </a>
                            </div>

                            {/* Location */}
                            <div className='flex flex-col gap-2'>
                                <p className="text-infocardText/60 text-[14px] sm:text-[15px] font-body">Location</p>
                                <a
                                    href="https://share.google/aVoHTrBu7GD0q7O33"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[15px] font-body text-secondary flex items-center gap-2 hover:text-aboutCardHeading transition-colors"
                                    aria-label="View Signature Restaurant location on Google Maps"
                                >
                                    <Image src={addressIcon} alt='Location pin icon' />
                                    378 Queen St E, Brampton, ON L6V 1C3, Canada
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* Contact Form Card */}
                    <div className='w-full max-w-[700px] border-aboutCardBorder border bg-aboutCardBorder/5 rounded-lg p-4'>
                        <h3 className='text-[24px] sm:text-[22px] font-heading italic text-aboutCardHeading'>Contact Our Team</h3>

                        <form className="mt-4" aria-label="Contact form">
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="firstName" className='text-[18px] font-heading italic text-aboutCardHeading'>First Name</label>
                                    <input 
                                        id="firstName"
                                        name="firstName"
                                        type="text" 
                                        className='bg-contactFormInputColor rounded-lg p-3 w-full text-white' 
                                        placeholder='Jane'
                                        required 
                                    />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="lastName" className='text-[18px] font-heading italic text-aboutCardHeading'>Last Name</label>
                                    <input 
                                        id="lastName"
                                        name="lastName"
                                        type="text" 
                                        className='bg-contactFormInputColor rounded-lg p-3 w-full text-white' 
                                        placeholder='Doe'
                                        required 
                                    />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="phone" className='text-[18px] font-heading italic text-aboutCardHeading'>Contact No</label>
                                    <input 
                                        id="phone"
                                        name="phone"
                                        type="tel" 
                                        className='bg-contactFormInputColor rounded-lg p-3 w-full text-white' 
                                        placeholder='Your phone#'
                                        required 
                                    />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="email" className='text-[18px] font-heading italic text-aboutCardHeading'>Email</label>
                                    <input 
                                        id="email"
                                        name="email"
                                        type="email" 
                                        className='bg-contactFormInputColor rounded-lg p-3 w-full text-white' 
                                        placeholder='Your email address'
                                        required 
                                    />
                                </div>

                                <div className='flex flex-col gap-2 md:col-span-2'>
                                    <label htmlFor="message" className='text-[18px] font-heading italic text-aboutCardHeading'>Message</label>
                                    <textarea 
                                        id="message"
                                        name="message"
                                        className='bg-contactFormInputColor rounded-lg p-3 w-full h-48 resize-none text-white' 
                                        placeholder='Type your message here'
                                        required 
                                    />
                                </div>

                                <div className='md:col-span-2'>
                                    <button 
                                        type="submit" 
                                        className='w-full font-body font-[500] py-3 rounded-lg bg-gradient-to-r from-cardGradient to-bookTableBg hover:opacity-90 transition-opacity'
                                        aria-label="Send message to Signature Restaurant"
                                    >
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