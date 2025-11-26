import React from 'react'
import Image from 'next/image'
import heroImg from "../../../public/drinkmenuhero.jpg"
import Drinks from "./Drinks"

export const metadata = {
    title: "Drinks Menu | Signature Restaurant",
    description: "Explore the exclusive drinks menu at Signature Restaurant, featuring handcrafted cocktails, premium beverages, and refreshing non-alcoholic options. Perfectly paired with our culinary delights for an unforgettable dining experience in Brampton.",
    keywords: [
        "Signature Restaurant Drinks Menu",
        "Cocktails Brampton",
        "Non-alcoholic Beverages",
        "Premium Drinks Brampton",
        "Indian Restaurant Drinks",
        "Fine Dining Drinks"
    ],
};
const page = () => {
    return (
        <>

            <div className="w-full bg-background py-5 px-4">
                <div className="relative xl:flex xl:gap-10">

                    {/* Hero Image */}
                    <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[880px] xl:w-[560px] 2xl:w-[1100px] 
                                    xl:fixed xl:top-5
                                     overflow-hidden">
                        <Image
                            src={heroImg}
                            alt="Signature menu"
                            fill
                            className="object-cover rounded-lg"
                            priority
                        />
                    </div>

                    {/* Right Menu Section */}
                    <div className="xl:ml-[560px] 2xl:ml-[1100px] mt-10 xl:mt-0 px-4 xl:px-6">
                        <Drinks />
                    </div>



                </div>
            </div>
        </>
    )
}

export default page